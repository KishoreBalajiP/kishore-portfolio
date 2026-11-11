import { defineConfig, loadEnv } from 'vite';
import type { Plugin } from 'vite';
import react from '@vitejs/plugin-react';

// Serves api/chat.ts at /api/chat during `npm run dev`, mirroring Vercel in production.
function apiDevServer(): Plugin {
  return {
    name: 'api-dev-server',
    configureServer(server) {
      server.middlewares.use('/api/chat', async (req, res) => {
        try {
          const chunks: Buffer[] = [];
          for await (const c of req) chunks.push(c as Buffer);
          const mod = await server.ssrLoadModule('/api/chat.ts');
          const response: Response = await mod.default(
            new Request(`http://localhost${req.url ?? ''}`, {
              method: req.method,
              headers: req.headers as Record<string, string>,
              body: req.method === 'POST' ? Buffer.concat(chunks) : undefined,
            })
          );
          res.statusCode = response.status;
          response.headers.forEach((v, k) => res.setHeader(k, v));
          if (!response.body) return res.end();
          const reader = response.body.getReader();
          for (;;) {
            const { done, value } = await reader.read();
            if (done) break;
            res.write(value);
          }
          res.end();
        } catch (err) {
          console.error(err);
          res.statusCode = 500;
          res.end('Assistant error');
        }
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  // Make server-only variables (GEMINI_API_KEY, GEMINI_MODEL) from .env visible to the dev API.
  const env = loadEnv(mode, process.cwd(), '');
  for (const k of ['GEMINI_API_KEY', 'GEMINI_MODEL']) if (env[k]) process.env[k] = env[k];

  // The site's public address, used for canonical links, previews, sitemap and robots.txt.
  const siteUrl = (env.VITE_SITE_URL || 'https://kishorebalaji.dev').replace(/\/?$/, '/');
  const siteUrlPlugin: Plugin = {
    name: 'site-url',
    transformIndexHtml: { order: 'pre', handler: (html) => html.replaceAll('%SITE_URL%', siteUrl) },
  };

  return {
    plugins: [react(), apiDevServer(), siteUrlPlugin],
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
  };
});
