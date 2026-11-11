// Portfolio assistant: answers questions about Kishore using Gemini.
// Runs as a Vercel Edge Function, so GEMINI_API_KEY never reaches the browser.
// Locally, vite.config.ts serves this same file at /api/chat.

import { certifications, education, experience, profile, projects, services, skills } from '../src/data';

export const config = { runtime: 'edge' };

const MODEL = process.env.GEMINI_MODEL || 'gemini-3.6-flash';
const MAX_INPUT = 1000; // characters per message
const MAX_TURNS = 10; // past messages sent to the model

type Turn = { role: 'user' | 'model'; text: string };

/* ---------- What the assistant knows ---------- */

const facts = `
# About Kishore Balaji P
- Name: ${profile.name} (GitHub: @${profile.handle})
- Roles: ${profile.roles.join(', ')}
- Summary: ${profile.bio}
- Location: ${profile.location}, India. Open to remote work.
- Currently: final-year B.Tech Computer Science student, and a Full Stack Intern.
- Looking for: full-time roles. He also takes on project work.
- Email: ${profile.email}
- GitHub: ${profile.github}
- LinkedIn: ${profile.linkedin}
- Résumé (PDF): /pdf/resume.pdf on this site

# Experience
${experience
  .map((e) => `## ${e.role} at ${e.company} (${e.type}, ${e.period}, ${e.place})\n${e.points.map((p) => `- ${p}`).join('\n')}`)
  .join('\n')}

# Education
${education.map((ed) => `- ${ed.degree}, ${ed.school}, ${ed.place} (${ed.period})`).join('\n')}

# Projects
${projects
  .map(
    (p) => `## ${p.title}
${p.summary}
Highlights:
${p.highlights.map((h) => `- ${h}`).join('\n')}
Tech: ${p.stack.join(', ')}
Live: ${p.live}
Frontend code: ${p.frontend}
Backend code: ${p.backend}
Full project report (PDF): ${p.report} on this site`
  )
  .join('\n\n')}

## More detail on Analivo (from its project report)
- One Node.js codebase runs as two processes: an Express 5 HTTP API and a worker (BullMQ consumers + node-cron scheduler).
- Data flow: connect a source, sync it on a queue with retries, strip sensitive fields, profile the schema, then query through a tenant-scoped engine.
- Security: tenant isolation is enforced on the server; MFA, step-up checks, hashed API keys, encrypted secrets, SSRF protection on connectors, rate limits, audit logs.
- Distribution: dashboards, scheduled email reports, threshold alerts, signed embeds, data exports and a versioned external API with API keys; Razorpay subscription billing.
- Quality: 561 backend tests and 5 custom CI guard scripts (as recorded in the repo).
- Frontend on Vercel; backend is a Docker image.

## More detail on VivasayiAI (from its project report)
- Advisory chat in Tamil or English, using the farmer's district, crops and live weather (Open-Meteo).
- Farmers file crop-loss claims by drawing the damaged area on a map and attaching photos and land documents (stored in S3 via presigned uploads).
- A background worker gathers evidence and a deterministic, versioned rule engine decides; uncertain cases go to a human reviewer.
- Backend is a Docker image on AWS Lambda, deployed by GitHub Actions through Amazon ECR; sign-in with Amazon Cognito; data in MongoDB.
- 1,135 backend tests and 90 Playwright end-to-end tests (as recorded in the repo).

# Certifications
${certifications.map((c) => `- ${c.title}, ${c.issuer} (${c.period}). Verify: ${c.verify}`).join('\n')}

# Services he can help with
${services.map((s) => `- ${s}`).join('\n')}
For project enquiries, visitors should use the contact form on this site or email ${profile.email}.

# Skills
${skills.join(', ')}
`;

const rules = `You are the assistant on Kishore Balaji P's portfolio website. Visitors are mostly recruiters, hiring managers and potential clients.

Rules:
- Answer only using the facts below and the GitHub data. If something isn't covered, say you don't have that detail and suggest emailing ${profile.email}.
- Never invent experience, numbers, employers, dates, responsibilities or skills. Describe the internship using only its listed points, without adding duties.
- Kishore's strengths are backend, cloud (AWS) and DevOps. Do not describe him as an AI or machine-learning expert; his projects use AI services, but his own work on them is the backend, cloud and deployment side. If asked about AI/ML, answer positively: lead with what he does focus on, then mention he has integrated AI services into his projects. Never open with a flat "No" or other negative statements about him.
- Never share a phone number. For contact, give the email or LinkedIn.
- Speak about Kishore in the third person, warmly and professionally.
- Keep answers short: 2–5 sentences or a few bullets. Use plain text; you may use "- " bullets, **bold** for key terms, and full URLs.
- Do not use the word "freelance" unless the visitor uses it first.
- For questions unrelated to Kishore, politely steer back to his work.`;

/* ---------- Live GitHub data (cached per instance for an hour) ---------- */

let githubCache: { at: number; text: string } | null = null;

async function githubSummary(): Promise<string> {
  if (githubCache && Date.now() - githubCache.at < 60 * 60 * 1000) return githubCache.text;
  try {
    const res = await fetch(`https://api.github.com/users/${profile.handle}/repos?per_page=100&sort=updated`, {
      headers: { Accept: 'application/vnd.github+json', 'User-Agent': 'portfolio-assistant' },
      signal: AbortSignal.timeout(2500),
    });
    if (!res.ok) throw new Error(String(res.status));
    const repos = (await res.json()) as {
      name: string;
      description: string | null;
      language: string | null;
      html_url: string;
      fork: boolean;
      updated_at: string;
    }[];
    const text =
      '# Public GitHub repositories (live)\n' +
      repos
        .filter((r) => !r.fork)
        .map((r) => `- ${r.name}${r.language ? ` [${r.language}]` : ''}: ${r.description ?? 'no description'} (${r.html_url}, updated ${r.updated_at.slice(0, 10)})`)
        .join('\n');
    githubCache = { at: Date.now(), text };
    return text;
  } catch {
    return githubCache?.text ?? '';
  }
}

/* ---------- Best-effort rate limit (per instance) ---------- */

const hits = new Map<string, number[]>();
function limited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 60_000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 12; // 12 messages per minute
}

/* ---------- Handler ---------- */

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== 'POST') return new Response('Method not allowed', { status: 405 });

  const key = process.env.GEMINI_API_KEY;
  if (!key || key.startsWith('your-')) return new Response('The assistant is not configured yet.', { status: 503 });

  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'local';
  if (limited(ip)) return new Response('Too many messages. Please wait a minute.', { status: 429 });

  let history: Turn[];
  try {
    const body = (await req.json()) as { messages?: Turn[] };
    history = (body.messages ?? [])
      .filter((m) => (m.role === 'user' || m.role === 'model') && typeof m.text === 'string' && m.text.trim())
      .slice(-MAX_TURNS)
      .map((m) => ({ role: m.role, text: m.text.slice(0, MAX_INPUT) }));
  } catch {
    return new Response('Bad request', { status: 400 });
  }
  if (!history.length || history[history.length - 1].role !== 'user') {
    return new Response('Bad request', { status: 400 });
  }

  const system = `${rules}\n\n${facts}\n\n${await githubSummary()}`;

  const upstream = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:streamGenerateContent?alt=sse`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-goog-api-key': key },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: system }] },
        contents: history.map((m) => ({ role: m.role, parts: [{ text: m.text }] })),
        generationConfig: {
          temperature: 0.4,
          maxOutputTokens: 700,
          // Keep "thinking" low for fast replies. Gemini 2.5 uses a token budget; Gemini 3+ uses levels.
          thinkingConfig: MODEL.startsWith('gemini-2') ? { thinkingBudget: 0 } : { thinkingLevel: 'LOW' },
        },
      }),
    }
  );

  if (!upstream.ok || !upstream.body) {
    const status = upstream.status === 429 ? 429 : 502;
    return new Response(
      status === 429 ? 'The assistant is busy right now. Please try again shortly.' : 'The assistant is unavailable right now.',
      { status }
    );
  }

  // Convert Gemini's server-sent events into a plain text stream.
  const decoder = new TextDecoder();
  const encoder = new TextEncoder();
  let buffer = '';
  const stream = upstream.body.pipeThrough(
    new TransformStream<Uint8Array, Uint8Array>({
      transform(chunk, controller) {
        buffer += decoder.decode(chunk, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() ?? '';
        for (const line of lines) {
          if (!line.startsWith('data:')) continue;
          try {
            const json = JSON.parse(line.slice(5));
            const parts = json?.candidates?.[0]?.content?.parts ?? [];
            const text = parts.map((p: { text?: string }) => p.text ?? '').join('');
            if (text) controller.enqueue(encoder.encode(text));
          } catch {
            /* ignore partial or non-JSON lines */
          }
        }
      },
    })
  );

  return new Response(stream, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-store' },
  });
}
