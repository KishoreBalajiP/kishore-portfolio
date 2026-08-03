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
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
              <div>
                <p className="kicker">Projects</p>
                <h2 className="mt-5 font-display text-[36px] font-semibold leading-[1.08] tracking-tight text-ink-900 sm:text-[44px] lg:text-[56px]">
                  Featured Projects
                </h2>
              </div>
              <p className="max-w-[420px] text-[17px] text-slate-600 lg:text-right">
                Full-stack and cloud-native applications built with production engineering
                practices.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Reveal key={project.id} delay={index * 80} className="h-full">
                <article
                  className="flex h-full flex-col overflow-hidden rounded-[18px] border border-[#E2E8F0] bg-white"
                  style={{ boxShadow: '0 8px 24px rgba(15,23,42,.05)' }}
                >
                  <div
                    className="relative overflow-hidden bg-[#F3F6FA]"
                    style={{ height: 170 }}
                  >
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      loading="lazy"
                      decoding="async"
                      width={800}
                      height={500}
                      className="absolute inset-0 h-full w-full object-cover object-top"
                    />
                    <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-ink-900/75 px-2.5 py-1 text-[12px] font-medium text-white backdrop-blur-sm">
                      <Cloud size={13} aria-hidden="true" />
                      {project.deployment}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <h3 className="font-display text-[20px] font-bold tracking-tight text-slate-900 sm:text-[22px]">
                      {project.title}
                    </h3>
                    <p
                      className="mt-3 text-[15px] leading-[1.7]"
                      style={{ color: '#475569' }}
                    >
                      {project.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center rounded-full border border-[#E2E8F0] bg-white text-[13px] font-semibold text-slate-800"
                          style={{ height: 28, paddingLeft: 10, paddingRight: 10 }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-[#E2E8F0] pt-4">
                      {project.githubBackendUrl && (
                        <a
                          href={project.githubBackendUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Backend source repository on GitHub"
                          aria-label="Backend source on GitHub"
                          className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-ink-900 text-[14px] font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-ink-800 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
                          style={{ height: 38, paddingLeft: 12, paddingRight: 12 }}
                        >
                          <Github size={14} aria-hidden="true" />
                          Backend Source
                        </a>
                      )}
                      {project.githubFrontendUrl && (
                        <a
                          href={project.githubFrontendUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Frontend source repository on GitHub"
                          aria-label="Frontend source on GitHub"
                          className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-ink-900 text-[14px] font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-ink-800 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
                          style={{ height: 38, paddingLeft: 12, paddingRight: 12 }}
                        >
                          <Github size={14} aria-hidden="true" />
                          Frontend Source
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-auto inline-flex items-center justify-center gap-1.5 rounded-lg bg-brand-600 text-[14px] font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-700 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
                          style={{ height: 38, paddingLeft: 12, paddingRight: 12 }}
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