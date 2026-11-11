import { useState } from 'react';
import { ArrowUpRight, Download, ExternalLink, Github } from 'lucide-react';
import { projects } from '../data';
import type { Project } from '../data';
import Modal from './Modal';

const ext = { target: '_blank', rel: 'noopener noreferrer' } as const;
const stop = (e: React.MouseEvent) => e.stopPropagation();

export default function Projects() {
  const [open, setOpen] = useState<Project | null>(null);

  return (
    <section id="projects" aria-label="Projects" className="col mt-6">
      <div className="panel-glow">
        <h2 className="heading">Things I've built</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.title}
              role="button"
              tabIndex={0}
              aria-label={`View details for ${p.title}`}
              onClick={() => setOpen(p)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setOpen(p);
                }
              }}
              className="row flex cursor-pointer flex-col p-5 transition-colors hover:border-accent/70"
            >
              <h3 className="text-[16px] font-semibold leading-snug">{p.title}</h3>
              <p className="mb-6 mt-3 text-[14px] leading-[1.75] text-dim">{p.summary}</p>
              <div className="mt-auto flex items-center justify-between gap-3 border-t border-edge pt-4">
                <div className="flex min-w-0 flex-wrap gap-1">
                  {p.stack.slice(0, 3).map((t) => <span key={t} className="tag">{t}</span>)}
                </div>
                <div className="flex shrink-0 items-center">
                  <a href={p.backend} {...ext} onClick={stop} aria-label={`${p.title} source on GitHub`} className="icon-btn text-accent"><Github size={16} /></a>
                  <a href={p.live} {...ext} onClick={stop} aria-label={`${p.title} live demo`} className="icon-btn text-accent"><ExternalLink size={16} /></a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <Modal open={!!open} onClose={() => setOpen(null)} labelledBy="project-title" maxWidth="max-w-xl">
        {open && (
          <div className="p-6">
            <h3 id="project-title" className="pr-10 text-[20px] font-semibold leading-snug">{open.title}</h3>
            <p className="mt-3 text-[14px] leading-[1.7] text-dim">{open.summary}</p>
            <ul className="mt-5 space-y-2 border-t border-edge pt-5 text-[14px] text-fg/90">
              {open.highlights.map((h) => (
                <li key={h} className="flex gap-2.5">
                  <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  {h}
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {open.stack.map((t) => <span key={t} className="tag">{t}</span>)}
            </div>
            <div className="mt-6 grid grid-cols-2 gap-2">
              <a href={open.report} download className="btn-green justify-center"><Download size={15} /> Report</a>
              <a href={open.live} {...ext} className="chip h-10 justify-center">Live demo <ArrowUpRight size={15} /></a>
              <a href={open.frontend} {...ext} className="chip h-10 justify-center"><Github size={15} /> Frontend</a>
              <a href={open.backend} {...ext} className="chip h-10 justify-center"><Github size={15} /> Backend</a>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
