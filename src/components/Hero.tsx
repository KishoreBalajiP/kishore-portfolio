import { useEffect, useState } from 'react';
import type React from 'react';
import { CalendarDays, Code2, Download, Github, Linkedin, Mail, Moon, Sun } from 'lucide-react';
import { profile } from '../data';

const binary = '1101011000110101 0110100111010011 1010011010110100 0011010110100111 1101001011010110';

// Browser window with </> and a gear: drawn inline so the banner needs no image file.
function DevIcon({ className }: { className?: string }) {
  const teeth = Array.from({ length: 8 }, (_, i) => i * 45);
  return (
    <svg viewBox="0 0 128 118" fill="none" stroke="currentColor" strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="4" y="4" width="100" height="86" rx="12" />
      <line x1="4" y1="34" x2="104" y2="34" />
      <circle cx="21" cy="19" r="5" />
      <circle cx="37" cy="19" r="5" />
      <rect x="52" y="13" width="38" height="12" rx="6" />
      <polyline points="30,50 18,61 30,72" />
      <line x1="48" y1="76" x2="58" y2="46" />
      <polyline points="70,50 82,61 70,72" />
      {/* gear */}
      <g transform="translate(98 88)">
        <circle r="24" fill="#000" stroke="none" />
        {teeth.map((a) => (
          <rect key={a} x="-4.5" y="-24" width="9" height="9" rx="2" transform={`rotate(${a})`} fill="currentColor" stroke="none" />
        ))}
        <circle r="15" fill="#000" />
        <circle r="6" />
      </g>
    </svg>
  );
}

type ViewTransitionDoc = Document & {
  startViewTransition?: (cb: () => void) => { ready: Promise<void> };
};

function applyTheme(light: boolean) {
  document.documentElement.classList.toggle('light', light);
  try {
    localStorage.setItem('theme', light ? 'light' : 'dark');
  } catch {
    /* storage unavailable */
  }
}

// A glowing green orb that swells out from the toggle and fades.
function glowAt(x: number, y: number, radius: number) {
  const orb = document.createElement('span');
  orb.setAttribute('aria-hidden', 'true');
  Object.assign(orb.style, {
    position: 'fixed',
    left: `${x}px`,
    top: `${y}px`,
    width: '40px',
    height: '40px',
    margin: '-20px 0 0 -20px',
    borderRadius: '9999px',
    pointerEvents: 'none',
    zIndex: '9999',
    background: 'radial-gradient(circle, rgba(52,211,153,0.55) 0%, rgba(16,185,129,0.25) 40%, rgba(16,185,129,0) 70%)',
    boxShadow: '0 0 60px 20px rgba(16,185,129,0.35)',
  });
  document.body.appendChild(orb);
  const scale = (radius * 2) / 40;
  orb
    .animate(
      [
        { transform: 'scale(0.2)', opacity: 1 },
        { transform: `scale(${scale * 0.5})`, opacity: 0.6, offset: 0.5 },
        { transform: `scale(${scale})`, opacity: 0 },
      ],
      { duration: 900, easing: 'cubic-bezier(0.22, 1, 0.36, 1)' }
    )
    .finished.finally(() => orb.remove());
}

function useTheme() {
  // Start as dark so the pre-rendered HTML matches, then read the real theme once in the browser.
  const [light, setLight] = useState(false);
  useEffect(() => setLight(document.documentElement.classList.contains('light')), []);

  const toggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    const next = !light;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const doc = document as ViewTransitionDoc;

    if (reduced || !doc.startViewTransition) {
      // Fallback: a short cross-fade of the colours.
      document.documentElement.classList.add('theme-fade');
      applyTheme(next);
      setLight(next);
      setTimeout(() => document.documentElement.classList.remove('theme-fade'), 400);
      return;
    }

    const transition = doc.startViewTransition(() => {
      applyTheme(next);
      setLight(next);
    });
    transition.ready.then(() => {
      document.documentElement.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
        { duration: 750, easing: 'cubic-bezier(0.4, 0, 0.2, 1)', pseudoElement: '::view-transition-new(root)' }
      );
      glowAt(x, y, radius);
    });
  };

  return [light, toggle] as const;
}

// Cycles through the roles; each new one rolls up into place.
function useRotatingWord(words: string[], ms = 2500) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % words.length), ms);
    return () => clearInterval(t);
  }, [words.length, ms]);
  return words[i];
}

export default function Hero() {
  const [light, toggle] = useTheme();
  const role = useRotatingWord(profile.roles);

  return (
    <header id="top" className="col pt-6 sm:pt-12">
      {/* Banner */}
      <div className="relative h-40 overflow-hidden rounded-2xl bg-black sm:h-48">
        <p
          aria-hidden="true"
          className="pointer-events-none absolute -left-3 -top-2 w-[62%] select-none break-all [mask-image:linear-gradient(90deg,#000_55%,transparent)] font-mono text-[28px] font-bold italic leading-[1.1] tracking-[0.08em] text-white/[0.09] sm:text-[34px]"
        >
          {binary} {binary}
        </p>
        <Code2 aria-hidden="true" className="absolute left-4 top-3 text-accent" size={24} strokeWidth={2.5} />
        <button
          type="button"
          onClick={toggle}
          aria-label={light ? 'Switch to dark mode' : 'Switch to light mode'}
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-lg bg-[#2a2a2a] text-white transition-colors hover:bg-[#3a3a3a]"
        >
          <span key={light ? 'moon' : 'sun'} className="animate-[spin-in_0.5s_ease-out]">
            {light ? <Moon size={16} /> : <Sun size={16} />}
          </span>
        </button>
        <DevIcon className="absolute left-[35%] top-1/2 hidden h-[118px] w-[128px] -translate-y-1/2 text-[#22c55e] sm:block" />
        <div className="absolute right-4 top-[56%] flex max-w-[60%] -translate-y-1/2 flex-col items-center text-center sm:right-6 sm:max-w-[45%]">
          <p className="text-[22px] font-medium leading-tight tracking-tight text-white sm:text-[32px]">{profile.name}</p>
          <p className="mt-2 rounded-lg bg-[#22c55e] px-3 py-1 font-mono text-[9px] leading-snug tracking-wider text-black sm:text-[11px]">
            {profile.tagline}
          </p>
          <p className="mt-2.5 hidden items-center gap-3 text-[11px] text-white/80 sm:flex">
            <span className="flex items-center gap-1.5"><Code2 size={12} aria-hidden="true" /> www.github.com/{profile.handle}</span>
            <span className="flex items-center gap-1.5"><Mail size={12} aria-hidden="true" /> {profile.email}</span>
          </p>
        </div>
      </div>

      {/* Profile card */}
      <section aria-label="Profile" className="panel relative mt-8 px-5 pb-6 pt-12 sm:px-10 sm:pb-8 sm:pt-16">
        <div
          aria-hidden="true"
          className="absolute -top-[84px] left-5 flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-[#22c55e] to-[#065f46] text-[30px] font-bold text-white shadow-[0_12px_30px_-10px_rgba(0,0,0,0.8)] sm:-top-[108px] sm:left-12 sm:h-32 sm:w-32 sm:text-[40px]"
        >
          KB
        </div>

        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h1 className="text-[24px] font-bold tracking-tight sm:text-[28px]">
              {profile.name} <span className="ml-1 text-[15px] font-normal text-faint sm:text-[17px]">@{profile.handle}</span>
            </h1>
            <p className="mt-1 h-6 overflow-hidden text-[15px] text-dim sm:text-[16px]" aria-label={profile.roles.join(', ')}>
              <span key={role} aria-hidden="true" className="block animate-roll-up">{role}</span>
            </p>
          </div>
          <a href={profile.resume} download="Kishore_Balaji_Resume.pdf" className="inline-flex items-center gap-2 rounded-lg bg-card2 px-3.5 py-2 text-[13px] font-semibold text-fg/90 transition-colors hover:bg-edge">
            <Download size={14} aria-hidden="true" /> Resume
          </a>
        </div>

        <p className="mt-6 text-[15px] leading-[1.75] text-fg/90 sm:text-[16px]">{profile.bio}</p>

        <a href="#contact" className="btn-green mt-6">
          <CalendarDays size={16} aria-hidden="true" /> Let's talk
        </a>

        <p className="mt-6 text-[13px] text-dim">Find me on</p>
        <div className="mt-2 flex flex-wrap gap-2">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="chip"><Github size={15} aria-hidden="true" /> GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="chip"><Linkedin size={15} aria-hidden="true" /> LinkedIn</a>
          <a href={`mailto:${profile.email}`} className="chip"><Mail size={15} aria-hidden="true" /> Email</a>
        </div>
      </section>
    </header>
  );
}
