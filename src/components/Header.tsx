import { Download } from 'lucide-react';
import { useScrollSpy } from '../hooks/useScrollSpy';

const navItems = [
  { id: 'about', label: 'Home' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'contact', label: 'Contact' },
];

export default function Header() {
  const activeId = useScrollSpy(navItems.map((i) => i.id));

  return (
    <>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[200] focus:rounded-md focus:bg-brand-600 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <header
        className="fixed inset-x-0 top-0 z-40 transition-all duration-300"
        style={{
          backgroundColor: 'rgba(255,255,255,0.88)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid #E5E7EB',
          boxShadow: '0 4px 18px rgba(15,23,42,0.05)',
        }}
      >
        <div className="container-wide flex h-16 items-center justify-between">
          <a
            href="#about"
            className="group flex items-center gap-2.5 rounded-md text-slate-900 transition-colors"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-ink-900 font-display text-sm font-bold text-blue-300 ring-1 ring-inset ring-white/10 transition-transform duration-200 group-hover:-translate-y-0.5">
              KB
            </span>
            <span className="hidden font-display text-sm font-semibold tracking-tight sm:block">
              Kishore Balaji&nbsp;P
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-0.5" aria-label="Primary">
            {navItems.map((item) => {
              const isActive = activeId === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  aria-current={isActive ? 'true' : undefined}
                  className={`relative rounded-md px-2.5 py-1.5 text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-brand-700'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-2.5 -bottom-px h-0.5 rounded-full bg-brand-600 transition-transform duration-200 ${
                      isActive ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          <a
            href="/pdf/resume.pdf"
            download="Kishore_Balaji_Resume.pdf"
            className="inline-flex h-9 items-center gap-2 rounded-lg bg-ink-900 px-4 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-ink-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
          >
            <Download size={15} aria-hidden="true" />
            <span className="hidden sm:inline">Resume</span>
          </a>
        </div>
      </header>
    </>
  );
}