import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

if (!fs.existsSync(distDir)) {
  console.error('Dist directory does not exist. Run "vite build" first.');
  process.exit(1);
}

const indexHtmlPath = path.join(distDir, 'index.html');
if (!fs.existsSync(indexHtmlPath)) {
  console.error('index.html not found in dist.');
  process.exit(1);
}

const baseHtml = fs.readFileSync(indexHtmlPath, 'utf8');

// List of all distinct application routes
const routes = [
  {
    path: 'products',
    title: 'Products & AI Tools | Criyon Design Studio',
    description: 'Explore proprietary design systems, AI branding generators, and workflow tools developed by Criyon.'
  },
  {
    path: 'cases',
    title: 'Selected Cases & Works | Criyon Design Studio',
    description: 'Explore client case studies, UI/UX designs, brand identities, and mobile app launches by Criyon.'
  },
  {
    path: 'case/legal-link',
    title: 'Legal Link AI Legal Marketplace & Lawyer Booking | Criyon Case Study',
    description: 'All-in-one legal marketplace and AI platform connecting individuals and businesses with verified lawyers, 24/7 AI consultations, and contract analysis.'
  },
  {
    path: 'case/mira',
    title: 'Legal Link AI Legal Marketplace & Lawyer Booking | Criyon Case Study',
    description: 'All-in-one legal marketplace and AI platform connecting individuals and businesses with verified lawyers, 24/7 AI consultations, and contract analysis.'
  },
  {
    path: 'case/rj-group',
    title: 'RJ Group Global Textile E-Commerce Platform | Criyon',
    description: 'Enterprise B2B digital transformation, wholesale catalog, and responsive ordering system.'
  },
  {
    path: 'case/aura',
    title: 'Aura Fitness & Wellness Mobile App | Criyon',
    description: 'Biometric health dashboard, spatial motion tracking, and native iOS application.'
  },
  {
    path: 'case/lumina',
    title: 'Lumina Architectural Lighting Brand Identity | Criyon',
    description: 'Luxury minimalist brand identity, typography design, and packaging system.'
  },
  {
    path: 'case/stride',
    title: 'Stride Urban Micro-Mobility App | Criyon',
    description: 'Fast commuter booking, real-time telemetry, and micro-interaction design system.'
  },
  {
    path: 'case/nexus',
    title: 'Nexus Developer Cloud Platform | Criyon',
    description: 'Developer console UI, low-latency telemetry graphs, and dark-mode design system.'
  },
  {
    path: 'blog',
    title: 'Design & Engineering Insights | Criyon Blog',
    description: 'In-depth perspectives on rapid mobile sprints, UI/UX engineering, and brand scaling.'
  },
  {
    path: 'blog/apple-spatial-design-system',
    title: 'Building Spatial Design Systems for visionOS | Criyon',
    description: 'Architecting depth, glassmorphism, and spatial micro-interactions for modern platforms.'
  },
  {
    path: 'blog/mobile-app-design-sprints',
    title: 'The 20-Day Design Sprint Architecture | Criyon',
    description: 'How high-velocity product studios build, test, and ship complete products in 20 days.'
  },
  {
    path: 'blog/building-superhuman-speed-in-web-apps',
    title: 'Building Sub-50ms React Web Applications | Criyon',
    description: 'Engineering instant render pipelines, dynamic imports, and micro-optimizations.'
  },
  {
    path: 'blog/why-startups-fail-at-branding',
    title: 'Why 80% of Early-Stage Startups Fail at Brand Identity | Criyon',
    description: 'Avoiding the template trap and creating visual equity that investors and users remember.'
  },
  {
    path: 'blog/high-converting-saas-pricing-pages',
    title: 'The Psychology of High-Converting SaaS Pricing Pages | Criyon',
    description: 'Strategic pricing tiers, toggle architectures, and layout designs that maximize ARR.'
  },
  {
    path: 'blog/micro-interactions-delight-users',
    title: 'Micro-Interactions That Turn Casual Users into Power Users | Criyon',
    description: 'Haptic feedback, tactile springs, and gesture-driven animations that drive retention.'
  }
];

console.log('Generating proper separate HTML pages for all routes...');

routes.forEach((route) => {
  const targetDir = path.join(distDir, route.path);
  fs.mkdirSync(targetDir, { recursive: true });

  // Customize title & description for true separate page SEO and metadata
  let pageHtml = baseHtml;
  if (route.title) {
    pageHtml = pageHtml.replace(
      /<title>.*?<\/title>/,
      `<title>${route.title}</title>`
    );
  }
  if (route.description) {
    pageHtml = pageHtml.replace(
      /<meta name="description" content=".*?"\s*\/?>/,
      `<meta name="description" content="${route.description}" />`
    );
  }

  const targetFile = path.join(targetDir, 'index.html');
  fs.writeFileSync(targetFile, pageHtml, 'utf8');
  console.log(` Created separate page: dist/${route.path}/index.html`);
});

// Also ensure 404.html exists in dist
const dist404Path = path.join(distDir, '404.html');
if (!fs.existsSync(dist404Path)) {
  fs.copyFileSync(indexHtmlPath, dist404Path);
  console.log(' Created dist/404.html fallback');
}

// Ensure .nojekyll exists in dist
const distNoJekyll = path.join(distDir, '.nojekyll');
if (!fs.existsSync(distNoJekyll)) {
  fs.writeFileSync(distNoJekyll, '', 'utf8');
  console.log(' Created dist/.nojekyll');
}

console.log(`Successfully generated ${routes.length} separate pages for GitHub Pages and Vercel!`);
