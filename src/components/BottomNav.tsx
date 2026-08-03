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
        className="rounded-t-2xl pb-safe-nav"
        style={{
          backgroundColor: 'rgba(255,255,255,0.82)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderTop: '1px solid #E5E7EB',
          boxShadow: '0 -8px 24px rgba(15,23,42,0.06)',
        }}
      >
        <div className="grid grid-cols-5 px-2 pt-2">
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
                className="flex flex-col items-center gap-1 rounded-xl py-1.5 transition-colors duration-200"
              >
                <span
                  className={`flex h-10 w-16 items-center justify-center rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-brand-600 text-white shadow-sm'
                      : 'text-slate-400'
                  }`}
                >
                  <item.icon size={19} aria-hidden="true" />
                </span>
                <span
                  className={`text-[15px] font-medium leading-none ${
                    isActive ? 'text-brand-700' : 'text-slate-500'
                  }`}
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
