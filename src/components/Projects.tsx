import { useState } from 'react';
import { ArrowUpRight, Cloud, Download, Github } from 'lucide-react';
import Modal from './ui/Modal';
import Container from './ui/Container';
import Reveal from './ui/Reveal';

interface Project {
  id: number;
  title: string;
  description: string;
  stack: string[];
  deployment: string;
  image: string;
  liveUrl: string;
  githubBackendUrl?: string;
  githubFrontendUrl?: string;
  report: string;
  highlights: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Analivo - SaaS Analytics Platform',
    description:
      'A multi-tenant analytics SaaS with 145 REST endpoints, tenant isolation and 6 RBAC roles. Connectors, dashboards, reports, alerts, embeds and plain-English questions answered by AI.',
    stack: ['Node.js', 'Express', 'MongoDB', 'Redis', 'BullMQ', 'React', 'AWS S3'],
    deployment: 'Docker + Vercel',
    image: '/projects/analivo.png',
    liveUrl: 'https://analivo.vercel.app',
    githubBackendUrl: 'https://github.com/KishoreBalajiP/saas-analytics-backend',
    githubFrontendUrl: 'https://github.com/KishoreBalajiP/saas-analytics-frontend',
    report: '/pdf/analivo-project-report.pdf',
    highlights: [
      'Multi-tenant architecture with server-side tenant isolation and 6 built-in RBAC roles',
      'CSV, XLSX, MongoDB and webhook connectors with background syncs on BullMQ and Redis',
      'AI query planner whose output must pass the engine validator before anything runs',
      'Dashboards, scheduled reports, alerts, embeds and a versioned external API',
    ],
  },
  {
    id: 2,
    title: 'VivasayiAI - GenAI Farming Assistant',
    description:
      'A bilingual AI assistant for Tamil Nadu farmers using RAG over curated agricultural data. Docker on AWS Lambda via GitHub Actions, Cognito sign-in and S3 storage.',
    stack: ['Node.js', 'Express', 'LangChain', 'MongoDB', 'AWS Lambda', 'Cognito'],
    deployment: 'AWS Lambda + Vercel',
    image: '/projects/vivasayiai.png',
    liveUrl: 'https://vivasayiai.vercel.app',
    githubBackendUrl: 'https://github.com/KishoreBalajiP/VivasayiAI',
    githubFrontendUrl: 'https://github.com/KishoreBalajiP/VivasayiAI-Frontend',
    report: '/pdf/vivasayiai-project-report.pdf',
    highlights: [
      'RAG over curated agricultural data with Gemini, Cohere embeddings and Chroma',
      "Answers in Tamil or English, using the farmer's district, crops and live weather",
      'Crop-loss claims verified from photos, documents, weather and satellite data',
      'Docker image on AWS Lambda, deployed by GitHub Actions through Amazon ECR',
    ],
  },
];

export default function Projects() {
  const [open, setOpen] = useState<Project | null>(null);

  return (
    <section id="projects" aria-label="Projects" className="bg-white">
      <Container>
        <div className="section-y">
          <Reveal>
            <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
              <div>
                <p className="kicker">Projects</p>
                <h2 className="mt-3 font-display text-[26px] font-semibold leading-[1.15] tracking-tight text-ink-900 sm:text-[30px] lg:text-[34px]">
                  Featured Projects
                </h2>
              </div>
              <p className="max-w-[380px] text-[14px] text-slate-600 lg:text-right">
                Full-stack and cloud-native applications built with production engineering
                practices.
              </p>
            </div>
          </Reveal>

          <div className="mt-8 grid grid-cols-2 gap-2.5 md:gap-4">
            {projects.map((project, index) => (
              <Reveal key={project.id} delay={index * 80} className="h-full">
                <article
                  role="button"
                  tabIndex={0}
                  aria-label={`View details for ${project.title}`}
                  onClick={() => setOpen(project)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setOpen(project);
                    }
                  }}
                  className="card-surface flex h-full cursor-pointer flex-col overflow-hidden hover:-translate-y-0.5 lg:flex-row"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#F3F6FA] lg:aspect-auto lg:w-[38%] lg:shrink-0">
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      loading="lazy"
                      decoding="async"
                      width={800}
                      height={500}
                      className="absolute inset-0 h-full w-full object-cover object-left-top"
                    />
                    <span className="absolute left-2.5 top-2.5 hidden items-center gap-1.5 rounded-full border border-white/25 bg-ink-900/75 px-2 py-0.5 text-[11px] font-medium text-white backdrop-blur-sm md:inline-flex">
                      <Cloud size={12} aria-hidden="true" />
                      {project.deployment}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col gap-2.5 p-3 md:gap-3 md:p-4">
                    <h3 className="font-display text-[14px] font-semibold leading-[1.3] tracking-tight text-slate-900 md:text-[17px]">
                      {project.title}
                    </h3>
                    <p
                      className="hidden text-[14px] leading-[1.6] md:block"
                      style={{ color: '#475569' }}
                    >
                      {project.description}
                    </p>

                    <div className="hidden flex-wrap gap-1.5 md:flex">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center rounded-full border border-line bg-canvas-3 text-[12px] font-semibold text-slate-700"
                          style={{ height: 26, paddingLeft: 9, paddingRight: 9 }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-1 md:hidden">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex h-9 w-full items-center justify-center gap-1.5 whitespace-nowrap rounded-lg bg-brand-600 px-2 text-[13px] font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-700 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
                        >
                          Live Demo
                          <ArrowUpRight size={14} aria-hidden="true" />
                        </a>
                      )}
                    </div>

                    <div className="mt-auto hidden grid-cols-3 gap-2 border-t border-line pt-3 md:grid">
                      {project.githubBackendUrl && (
                        <a
                          href={project.githubBackendUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          title="Backend source repository on GitHub"
                          aria-label="Backend source on GitHub"
                          className="inline-flex h-9 w-full items-center justify-center gap-1.5 whitespace-nowrap rounded-lg bg-ink-900 px-2 text-[13px] font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-ink-800 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
                        >
                          <Github size={14} aria-hidden="true" />
                          Backend
                        </a>
                      )}
                      {project.githubFrontendUrl && (
                        <a
                          href={project.githubFrontendUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          title="Frontend source repository on GitHub"
                          aria-label="Frontend source on GitHub"
                          className="inline-flex h-9 w-full items-center justify-center gap-1.5 whitespace-nowrap rounded-lg bg-ink-900 px-2 text-[13px] font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-ink-800 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
                        >
                          <Github size={14} aria-hidden="true" />
                          Frontend
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex h-9 w-full items-center justify-center gap-1.5 whitespace-nowrap rounded-lg bg-brand-600 px-2 text-[13px] font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-700 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
                        >
                          Live Demo
                          <ArrowUpRight size={14} aria-hidden="true" />
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>

      <Modal open={!!open} onClose={() => setOpen(null)} labelledBy="project-title" maxWidth="max-w-2xl">
        {open && (
          <div>
            <div className="relative aspect-[16/9] overflow-hidden bg-[#F3F6FA]">
              <img
                src={open.image}
                alt={`${open.title} screenshot`}
                className="absolute inset-0 h-full w-full object-cover object-left-top"
              />
            </div>
            <div className="p-5 sm:p-6">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-canvas-3 px-2.5 py-0.5 text-[12px] font-medium text-slate-600">
                <Cloud size={12} aria-hidden="true" />
                {open.deployment}
              </span>
              <h3 id="project-title" className="mt-3 font-display text-[20px] font-semibold tracking-tight text-ink-900 sm:text-[22px]">
                {open.title}
              </h3>
              <p className="mt-2 text-[14px] leading-[1.65] text-slate-600">{open.description}</p>

              <ul className="mt-4 space-y-2 border-t border-line pt-4 text-[14px] text-slate-700">
                {open.highlights.map((h) => (
                  <li key={h} className="flex gap-2.5">
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600" aria-hidden="true" />
                    {h}
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {open.stack.map((tech) => (
                  <span key={tech} className="inline-flex h-[26px] items-center rounded-full border border-line bg-canvas-3 px-2.5 text-[12px] font-semibold text-slate-700">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
                <a
                  href={open.report}
                  download
                  className="col-span-2 inline-flex h-10 items-center justify-center gap-1.5 whitespace-nowrap rounded-lg bg-brand-600 px-3 text-[13px] font-semibold text-white transition-colors hover:bg-brand-700 sm:col-span-1"
                >
                  <Download size={14} aria-hidden="true" />
                  Report
                </a>
                <a href={open.liveUrl} target="_blank" rel="noopener noreferrer" className="col-span-2 inline-flex h-10 items-center justify-center gap-1.5 whitespace-nowrap rounded-lg bg-ink-900 px-3 text-[13px] font-semibold text-white transition-colors hover:bg-ink-800 sm:col-span-1">
                  Live Demo
                  <ArrowUpRight size={14} aria-hidden="true" />
                </a>
                {open.githubFrontendUrl && (
                  <a href={open.githubFrontendUrl} target="_blank" rel="noopener noreferrer" className="inline-flex h-10 items-center justify-center gap-1.5 whitespace-nowrap rounded-lg border border-line bg-white px-3 text-[13px] font-semibold text-slate-800 transition-colors hover:border-brand-600 hover:text-brand-700">
                    <Github size={14} aria-hidden="true" />
                    Frontend
                  </a>
                )}
                {open.githubBackendUrl && (
                  <a href={open.githubBackendUrl} target="_blank" rel="noopener noreferrer" className="inline-flex h-10 items-center justify-center gap-1.5 whitespace-nowrap rounded-lg border border-line bg-white px-3 text-[13px] font-semibold text-slate-800 transition-colors hover:border-brand-600 hover:text-brand-700">
                    <Github size={14} aria-hidden="true" />
                    Backend
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}