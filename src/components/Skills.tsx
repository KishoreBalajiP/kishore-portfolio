import {
  CloudCog,
  Code2,
  Database,
  Smartphone,
  Sparkles,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Container from './ui/Container';
import Reveal from './ui/Reveal';

type SkillCategory = {
  title: string;
  description: string;
  icon: LucideIcon;
  accent: string;
  skills: string[];
};

const categories: SkillCategory[] = [
  {
    title: 'Full Stack Development',
    description: 'Building scalable, modern web applications end to end.',
    icon: Code2,
    accent: 'from-blue-50 to-blue-100 text-blue-600 ring-blue-600/10',
    skills: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Express', 'REST APIs'],
  },
  {
    title: 'Cloud & DevOps',
    description: 'Shipping resilient infrastructure and automated pipelines.',
    icon: CloudCog,
    accent: 'from-sky-50 to-sky-100 text-sky-600 ring-sky-600/10',
    skills: ['AWS', 'Docker', 'CI/CD', 'Git', 'Linux'],
  },
  {
    title: 'Backend & Databases',
    description: 'Designing reliable data layers and secure APIs.',
    icon: Database,
    accent: 'from-indigo-50 to-indigo-100 text-indigo-600 ring-indigo-600/10',
    skills: ['MongoDB', 'PostgreSQL', 'Authentication', 'Redis', 'API Design'],
  },
  {
    title: 'Mobile Development',
    description: 'Crafting native-feeling experiences for Android and iOS.',
    icon: Smartphone,
    accent: 'from-violet-50 to-violet-100 text-violet-600 ring-violet-600/10',
    skills: ['React Native', 'Android', 'Mobile UI', 'Push Notifications'],
  },
];

const strengths = [
  'Problem Solving',
  'Teamwork',
  'Time Management',
  'Adaptability',
  'Communication',
];

const chipClasses =
  'rounded-full bg-canvas-2 px-2.5 py-1 text-[13px] font-medium leading-none text-slate-700 ' +
  'transition-colors duration-200 hover:bg-canvas-3 hover:text-slate-900';

export default function Skills() {
  return (
    <section
      id="skills"
      aria-label="Skills"
      style={{ backgroundColor: '#F3F6FA' }}
    >
      <Container>
        <div className="section-y">
          <Reveal>
            <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
              <div>
                <p className="kicker">Expertise</p>
                <h2 className="mt-3 font-display text-[26px] font-semibold leading-[1.15] tracking-tight text-ink-900 sm:text-[30px] lg:text-[34px]">
                  Skills &amp; Expertise
                </h2>
              </div>
              <p className="max-w-[380px] text-[14px] text-slate-600 lg:text-right">
                Four core capabilities spanning the full engineering stack — from product
                interfaces to cloud infrastructure.
              </p>
            </div>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
            {categories.map((category, index) => (
              <Reveal key={category.title} delay={index * 80} className="h-full">
                <article className="card-surface group flex h-full flex-col rounded-2xl p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-600/25 sm:p-5">
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ring-1 transition-transform duration-300 group-hover:scale-110 ${category.accent}`}
                  >
                    <category.icon size={18} aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-display text-[16px] font-semibold tracking-tight text-slate-900 md:text-[17px]">
                    {category.title}
                  </h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-slate-500">
                    {category.description}
                  </p>
                  <ul className="mt-auto flex flex-wrap gap-1.5 pt-4">
                    {category.skills.map((skill) => (
                      <li key={skill} className={chipClasses}>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div className="card-surface mt-6 flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-50 to-brand-100 text-brand-600 ring-1 ring-brand-600/10">
                  <Sparkles size={16} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-[16px] font-semibold text-slate-900">
                    Core Strengths
                  </h3>
                  <p className="mt-0.5 text-[13px] text-slate-500">
                    The soft skills behind the systems.
                  </p>
                </div>
              </div>
              <ul className="flex flex-wrap gap-2">
                {strengths.map((strength) => (
                  <li key={strength} className={chipClasses}>
                    {strength}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
