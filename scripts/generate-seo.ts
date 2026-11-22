import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import {
  DEFAULT_SITE_URL,
  buildRobotsTxt,
  buildSitemapXml,
  getAllPrerenderPaths,
  injectSeoIntoHtml,
} from '../src/utils/seo';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');
const baseUrl = (process.env.SITE_URL || process.env.VITE_SITE_URL || DEFAULT_SITE_URL).replace(
  /\/+$/,
  ''
);

function run() {
  const templatePath = path.join(distDir, 'index.html');
  if (!fs.existsSync(templatePath)) {
    throw new Error(`Build output not found at ${templatePath}. Run "vite build" first.`);
  }

  const templateHtml = fs.readFileSync(templatePath, 'utf-8');
  const routes = getAllPrerenderPaths();

  for (const route of routes) {
    const renderedHtml = injectSeoIntoHtml(templateHtml, route, baseUrl);
    if (route === '/') {
      fs.writeFileSync(templatePath, renderedHtml, 'utf-8');
      continue;
    }

    const relativeDir = route.replace(/^\/+/, '');
    const targetDir = path.join(distDir, relativeDir);
    fs.mkdirSync(targetDir, { recursive: true });
    fs.writeFileSync(path.join(targetDir, 'index.html'), renderedHtml, 'utf-8');
  }

  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), buildSitemapXml(baseUrl), 'utf-8');
  fs.writeFileSync(path.join(distDir, 'robots.txt'), buildRobotsTxt(baseUrl), 'utf-8');

  console.log(
    `[SEO] Pre-rendered ${routes.length} indexable routes, sitemap.xml, and robots.txt into dist/ for ${baseUrl}`
  );
}

run();
