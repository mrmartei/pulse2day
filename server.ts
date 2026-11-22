import express from 'express';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import {
  DEFAULT_SITE_URL,
  buildRobotsTxt,
  buildSitemapXml,
  injectSeoIntoHtml,
} from './src/utils/seo';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());

function resolveBaseUrl(req: express.Request): string {
  const configured = process.env.SITE_URL || process.env.VITE_SITE_URL;
  if (configured) return configured.replace(/\/+$/, '');
  const host = (req.headers['x-forwarded-host'] as string) || req.headers.host || '';
  if (!host || host.startsWith('localhost') || host.startsWith('127.0.0.1')) {
    return DEFAULT_SITE_URL;
  }
  const proto = (req.headers['x-forwarded-proto'] as string) || req.protocol || 'https';
  return `${proto}://${host}`.replace(/\/+$/, '');
}

// Search Engine Crawling Endpoints
app.get('/robots.txt', (req, res) => {
  res.type('text/plain').send(buildRobotsTxt(resolveBaseUrl(req)));
});

app.get('/sitemap.xml', (req, res) => {
  res.type('application/xml').send(buildSitemapXml(resolveBaseUrl(req)));
});

// Initialize Gemini AI SDK
const apiKey = process.env.GEMINI_API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

// AI Brief endpoint
app.post('/api/ai-brief', async (req, res) => {
  try {
    const { topic = 'general news and creator updates in Ghana' } = req.body;
    
    if (!apiKey) {
      return res.status(500).json({ error: 'GEMINI_API_KEY is not configured on the server.' });
    }

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `You are an expert AI News Anchor for GhPulse & Creators Hub. Provide a professional, engaging, and comprehensive briefing on the following topic or general top stories in Ghana today (Politics, Economy, Tech, Entertainment, and Creator culture): "${topic}". Keep it punchy, insightful, formatted with Markdown headers and bullet points, and include a warm Ghanaian greeting (e.g., "Akwaaba!").`,
    });

    res.json({ brief: response.text });
  } catch (error: any) {
    console.error('Gemini AI error:', error);
    res.status(500).json({ error: error.message || 'Failed to generate AI brief' });
  }
});

// AI Article Summarizer endpoint
app.post('/api/ai-summarize', async (req, res) => {
  try {
    const { title, content } = req.body;
    if (!apiKey) {
      return res.json({ summary: 'Summary unavailable (API key missing).' });
    }

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Summarize this news article about Ghana in 3 bullet points, highlighting key facts and impact:\nTitle: ${title}\nContent: ${content}`,
    });

    res.json({ summary: response.text });
  } catch (error: any) {
    console.error('Summary error:', error);
    res.status(500).json({ error: error.message || 'Failed to summarize article' });
  }
});

// Vite middleware setup in development with per-route SEO HTML injection
if (process.env.NODE_ENV !== 'production') {
  const { createServer: createViteServer } = await import('vite');
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });
  app.use(vite.middlewares);

  app.get('*', async (req, res, next) => {
    try {
      const templatePath = path.resolve(__dirname, 'index.html');
      const rawTemplate = fs.readFileSync(templatePath, 'utf-8');
      const transformed = await vite.transformIndexHtml(req.originalUrl, rawTemplate);
      const html = injectSeoIntoHtml(transformed, req.path, resolveBaseUrl(req));
      res.status(200).set({ 'Content-Type': 'text/html; charset=utf-8' }).end(html);
    } catch (err) {
      vite.ssrFixStacktrace(err as Error);
      next(err);
    }
  });
} else {
  const distPath = path.resolve(__dirname, 'dist');
  app.use(express.static(distPath));
  app.get('*', (req, res) => {
    const indexPath = path.resolve(distPath, 'index.html');
    const rawTemplate = fs.readFileSync(indexPath, 'utf-8');
    const html = injectSeoIntoHtml(rawTemplate, req.path, resolveBaseUrl(req));
    res.status(200).set({ 'Content-Type': 'text/html; charset=utf-8' }).end(html);
  });
}

const PORT = 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`GhPulse & Creators Hub running on http://localhost:${PORT}`);
});
