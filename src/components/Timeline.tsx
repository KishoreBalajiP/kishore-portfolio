import { useState } from 'react';
import { ChevronDown, GraduationCap } from 'lucide-react';
import { education, experience } from '../data';

export function Experience() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="experience" aria-label="Experience" className="col mt-10">
      <div className="panel-glow">
        <h2 className="heading">Where I've worked</h2>
        <ul className="mt-5 space-y-3">
          {experience.map((e, i) => {
            const isOpen = open === i;
            return (
              <li key={e.company} className="row">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-start justify-between gap-4 px-4 py-4 text-left sm:px-5"
                >
                  <div>
                    <p className="flex flex-wrap items-center gap-2 text-[16px] font-semibold">
                      {e.company}
                      <span className="rounded-full bg-edge2 px-2 py-0.5 text-[11px] font-medium text-fg/90">{e.type}</span>
                    </p>
                    <p className="mt-0.5 text-[14px] text-dim">{e.role}</p>
                    <p className="mt-0.5 text-[13px] text-faint sm:hidden">{e.period} · {e.place}</p>
                  </div>
                  <div className="flex shrink-0 items-start gap-2">
                    <div className="hidden text-right sm:block">
                      <p className="text-[15px]">{e.period}</p>
                      <p className="text-[12px] text-faint">{e.place}</p>
                    </div>
                    <ChevronDown size={16} aria-hidden="true" className={`mt-1 text-faint transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </div>
                </button>
                {isOpen && (
                  <ul className="space-y-2 border-t border-edge px-4 pb-4 pt-3 text-[14px] text-dim">
                    {e.points.map((p) => (
                      <li key={p} className="flex gap-2.5">
                        <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                        {p}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section aria-label="Education" className="col mt-6">
      <div className="panel-glow">
        <h2 className="heading">Education</h2>
        <ul className="mt-5 space-y-3">
          {education.map((ed) => (
            <li key={ed.school} className="row flex flex-wrap items-start justify-between gap-3 px-4 py-4 sm:px-5">
              <div>
                <p className="flex items-center gap-2 text-[16px] font-semibold">
                  <GraduationCap size={16} className="text-accent" aria-hidden="true" /> {ed.school}
                </p>
                <p className="mt-1 text-[14px] text-dim">{ed.degree}</p>
              </div>
              <div className="text-[14px] sm:text-right">
                <p>{ed.period}</p>
                <p className="text-[12px] text-faint">{ed.place}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
