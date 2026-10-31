import express from 'express';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());

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
      contents: `You are an expert AI News Anchor for Ghana Pulse & Creators Hub. Provide a professional, engaging, and comprehensive briefing on the following topic or general top stories in Ghana today (Politics, Economy, Tech, Entertainment, and Creator culture): "${topic}". Keep it punchy, insightful, formatted with Markdown headers and bullet points, and include a warm Ghanaian greeting (e.g., "Akwaaba!").`,
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

// Vite middleware setup in development
if (process.env.NODE_ENV !== 'production') {
  const { createServer: createViteServer } = await import('vite');
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'spa',
  });
  app.use(vite.middlewares);
} else {
  const distPath = path.resolve(__dirname, 'dist');
  app.use(express.static(distPath));
  app.get('*', (_, res) => {
    res.sendFile(path.resolve(distPath, 'index.html'));
  });
}

const PORT = 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Ghana Pulse & Creators Hub running on http://localhost:${PORT}`);
});
