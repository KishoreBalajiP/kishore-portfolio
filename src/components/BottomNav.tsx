import { useState } from 'react';
import { Award, Home, Mail, Rocket, Wrench } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useScrollSpy } from '../hooks/useScrollSpy';

type NavItem = {
  id: string;
  label: string;
  icon: LucideIcon;
};

const items: NavItem[] = [
  { id: 'about', label: 'Home', icon: Home },
  { id: 'skills', label: 'Skills', icon: Wrench },
  { id: 'projects', label: 'Projects', icon: Rocket },
  { id: 'certificates', label: 'Certificates', icon: Award },
  { id: 'contact', label: 'Contact', icon: Mail },
];

export default function BottomNav() {
  const activeId = useScrollSpy(items.map((i) => i.id));
  const [pendingId, setPendingId] = useState<string | null>(null);
  const displayedActiveId = pendingId ?? activeId;

  const handleNavigation = (id: string) => {
    const section = document.getElementById(id);
    if (!section) return;

    setPendingId(id);
    const top = section.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: 'smooth' });
    window.history.pushState(null, '', `#${id}`);
    window.setTimeout(() => setPendingId(null), 500);
  };

  return (
    <nav
      aria-label="Bottom"
      className="fixed inset-x-0 bottom-0 z-40 md:hidden"
    >
      <div
        className="rounded-t-xl border-t border-line bg-white/85 backdrop-blur-xl"
        style={{
          boxShadow: '0 -6px 20px rgba(15,23,42,0.05)',
          paddingBottom: 'calc(env(safe-area-inset-bottom, 0px) + 4px)',
        }}
      >
        <div className="grid grid-cols-5 px-1.5 pb-1 pt-1.5 sm:px-2">
          {items.map((item) => {
            const isActive = displayedActiveId === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(event) => {
                  event.preventDefault();
                  handleNavigation(item.id);
                }}
                aria-current={isActive ? 'true' : undefined}
                className="group flex flex-col items-center justify-center gap-0.5 rounded-lg py-1 transition-colors duration-200 active:bg-brand-600/10"
              >
                <span
                  className={`flex h-8 w-12 items-center justify-center rounded-full transition-all duration-200 sm:w-14 ${
                    isActive
                      ? 'bg-brand-600 text-white shadow-sm'
                      : 'text-slate-400 group-hover:text-slate-600'
                  }`}
                >
                  <item.icon size={18} aria-hidden="true" />
                </span>
                <span
                  className={`whitespace-nowrap text-[10px] font-medium leading-none tracking-tight sm:text-[11px] ${
                    isActive ? 'text-brand-700' : 'text-slate-500'
                  } max-[359px]:text-[9px]`}
                >
                  {item.label}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
