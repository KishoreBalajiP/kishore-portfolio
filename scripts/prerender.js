// Runs after `vite build`: puts the rendered page into dist/index.html and writes robots.txt + sitemap.xml.
import { readFile, rm, writeFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';

const dist = resolve('dist');
const { render, data } = await import(pathToFileURL(resolve('dist-ssr/entry-server.js')).href);

let html = await readFile(resolve(dist, 'index.html'), 'utf8');
html = html.replace('<div id="root"></div>', `<div id="root">${render()}</div>`);
await writeFile(resolve(dist, 'index.html'), html);

// The site address comes from the canonical link, which vite.config.ts fills in.
const site = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1] ?? '/';
const today = new Date().toISOString().slice(0, 10);

await writeFile(resolve(dist, 'robots.txt'), `User-agent: *\nAllow: /\nDisallow: /api/\n\nSitemap: ${site}sitemap.xml\n`);
await writeFile(
  resolve(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${site}</loc>
    <lastmod>${today}</lastmod>
  </url>
</urlset>
`
);

// Plain-text profile for AI assistants (Gemini, ChatGPT, Perplexity...). See https://llmstxt.org
const { profile, experience, education, projects, services, certifications, skills } = data;
await writeFile(
  resolve(dist, 'llms.txt'),
  `# ${profile.name}

> ${profile.bio} Based in ${profile.location}, India.

Also known as: Kishore Balaji, Kishore Balaji P, Kishore (VIT-AP). GitHub: @${profile.handle}.

## Roles
${profile.roles.map((r) => `- ${r}`).join('\n')}

## Experience
${experience.map((x) => `- ${x.role}, ${x.company} (${x.period}, ${x.place}): ${x.points.join(' ')}`).join('\n')}

## Education
${education.map((x) => `- ${x.degree}, ${x.school} (VIT-AP), ${x.place}, ${x.period}`).join('\n')}

## Services
${services.map((s) => `- ${s}`).join('\n')}

## Projects
${projects.map((x) => `- [${x.title}](${x.live}): ${x.summary} Code: ${x.backend}`).join('\n')}

## Certifications
${certifications.map((c) => `- ${c.title} (${c.issuer})`).join('\n')}

## Skills
${skills.join(', ')}

## Contact
- Website: ${site}
- Email: ${profile.email}
- LinkedIn: ${profile.linkedin}
- GitHub: ${profile.github}
- Résumé: ${site}pdf/resume.pdf
`
);

await rm(resolve('dist-ssr'), { recursive: true, force: true });
console.log(`Pre-rendered page for ${site}`);
