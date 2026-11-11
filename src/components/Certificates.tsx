import { Award, ExternalLink } from 'lucide-react';
import { certifications } from '../data';

export default function Certificates() {
  return (
    <section id="certifications" aria-label="Certifications" className="col mt-6">
      <div className="panel-glow">
        <h2 className="heading">Certifications</h2>
        <ul className="mt-5 space-y-3">
          {certifications.map((c) => (
            <li key={c.title} className="row flex flex-wrap items-center justify-between gap-3 p-4">
              <div className="flex items-start gap-3">
                <Award size={18} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                <div>
                  <p className="font-semibold leading-snug">{c.title}</p>
                  <p className="mt-0.5 text-[13px] text-dim">{c.issuer} · {c.period}</p>
                </div>
              </div>
              <a href={c.verify} target="_blank" rel="noopener noreferrer" className="chip text-[12px]">
                Verify <ExternalLink size={13} aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
