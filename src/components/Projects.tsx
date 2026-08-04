import { ArrowUpRight, Cloud, Github } from 'lucide-react';
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
}

const projects: Project[] = [
  {
    id: 1,
    title: 'JayaStores E-Commerce Platform',
    description:
      'A complete e-commerce system with authentication, secure checkout, AI chatbot, admin dashboard, Email notifications. Backend: AWS Lambda, Frontend: Vercel, Database: Neon PostgreSQL.',
    stack: ['React', 'Node.js', 'Express.js', 'PostgreSQL', 'AWS Lambda'],
    deployment: 'AWS',
    image: '/projects/project1.png',
    liveUrl: 'https://jayastores.vercel.app',
    githubBackendUrl: 'https://github.com/KishoreBalajiP/eco_backend',
    githubFrontendUrl: 'https://github.com/KishoreBalajiP/eco_frontend',
  },
  {
    id: 2,
    title: 'VivasayiAI - GenAI Farming Assistant',
    description:
      'A bilingual GenAI assistant for farmers with RAG pipeline, weather data, voice input, domain knowledge. Backend on AWS Lambda+Docker, frontend on Vercel.',
    stack: ['React', 'Node.js', 'LangChain', 'ChromaDB', 'MongoDB', 'AWS'],
    deployment: 'AWS Lambda + Vercel',
    image: '/projects/project2.png',
    liveUrl: 'https://vivasayiai.vercel.app',
    githubBackendUrl: 'https://github.com/KishoreBalajiP/VivasayiAI',
    githubFrontendUrl: 'https://github.com/KishoreBalajiP/VivasayiAI-Frontend',
  },
];

export default function Projects() {
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

          <div className="mt-8 grid grid-cols-2 gap-2.5 md:gap-4 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Reveal key={project.id} delay={index * 80} className="h-full">
                <article className="card-surface flex h-full flex-col overflow-hidden">
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#F3F6FA]">
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      loading="lazy"
                      decoding="async"
                      width={800}
                      height={500}
                      className="absolute inset-0 h-full w-full object-cover object-top"
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
                          className="inline-flex h-9 w-full items-center justify-center gap-1.5 rounded-lg bg-brand-600 px-3 text-[13px] font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-700 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
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
                          title="Backend source repository on GitHub"
                          aria-label="Backend source on GitHub"
                          className="inline-flex h-9 w-full items-center justify-center gap-1.5 rounded-lg bg-ink-900 px-3 text-[13px] font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-ink-800 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
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
                          title="Frontend source repository on GitHub"
                          aria-label="Frontend source on GitHub"
                          className="inline-flex h-9 w-full items-center justify-center gap-1.5 rounded-lg bg-ink-900 px-3 text-[13px] font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-ink-800 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
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
                          className="inline-flex h-9 w-full items-center justify-center gap-1.5 rounded-lg bg-brand-600 px-3 text-[13px] font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-700 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
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
    </section>
  );
}