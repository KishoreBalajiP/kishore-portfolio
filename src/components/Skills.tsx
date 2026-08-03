import {
  Boxes,
  Braces,
  CloudCog,
  Database,
  Layout,
  Monitor,
  Server,
  Smartphone,
  Sparkles,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Container from './ui/Container';
import Reveal from './ui/Reveal';

type SkillCategory = {
  title: string;
  icon: LucideIcon;
  skills: string[];
};

const categories: SkillCategory[] = [
  {
    title: 'Cloud',
    icon: CloudCog,
    skills: ['AWS'],
  },
  {
    title: 'DevOps',
    icon: Boxes,
    skills: ['Docker', 'CI/CD'],
  },
  {
    title: 'Frontend',
    icon: Layout,
    skills: ['React', 'TypeScript'],
  },
  {
    title: 'Backend',
    icon: Server,
    skills: ['Node.js', 'Express'],
  },
  {
    title: 'Databases',
    icon: Database,
    skills: ['PostgreSQL', 'MongoDB'],
  },
  {
    title: 'Languages',
    icon: Braces,
    skills: ['JavaScript', 'Python', 'Java'],
  },
  {
    title: 'Mobile',
    icon: Smartphone,
    skills: ['React Native'],
  },
  {
    title: 'Tools',
    icon: Monitor,
    skills: ['Git', 'Postman'],
  },
];

const strengths = [
  'Problem Solving',
  'Teamwork',
  'Time Management',
  'Adaptability',
  'Communication',
];

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
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
              <div>
                <p className="kicker">Expertise</p>
                <h2 className="mt-5 font-display text-[36px] font-semibold leading-[1.08] tracking-tight text-ink-900 sm:text-[44px] lg:text-[56px]">
                  Skills &amp; Expertise
                </h2>
              </div>
              <p className="max-w-[420px] text-[17px] text-slate-600 lg:text-right">
                From infrastructure to interface — a full-stack toolkit built for
                cloud-native engineering.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
            {categories.map((category, index) => (
              <Reveal key={category.title} delay={index * 40} className="h-full">
                 <article
                   className="flex h-full min-h-0 flex-col rounded-[18px] border border-[#E2E8F0] bg-white p-3.5 sm:p-4"
                   style={{ boxShadow: '0 8px 24px rgba(15,23,42,.05)' }}
                 >
                   <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-600 text-white sm:h-8 sm:w-8">
                     <category.icon size={15} aria-hidden="true" />
                   </span>
                   <h3 className="mt-2.5 font-display text-[16px] font-semibold text-slate-900 sm:text-[18px]">
                     {category.title}
                   </h3>
                   <ul className="mt-1.5 flex flex-col gap-0.5">
                     {category.skills.map((skill) => (
                       <li
                         key={skill}
                         className="text-[13px] font-medium leading-[1.55] text-slate-700 sm:text-[14px]"
                       >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div className="mt-8 flex flex-col gap-5 rounded-[18px] border border-[#E2E8F0] bg-white p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7"
              style={{ boxShadow: '0 8px 24px rgba(15,23,42,.05)' }}
            >
              <div className="flex items-center gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-600 text-white">
                  <Sparkles size={18} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-[18px] font-semibold text-slate-900">
                    Core Strengths
                  </h3>
                  <p className="mt-0.5 text-[15px] text-slate-500">
                    The soft skills behind the systems.
                  </p>
                </div>
              </div>
              <ul className="flex flex-wrap gap-2">
                {strengths.map((strength) => (
                  <li
                    key={strength}
                    className="rounded-full border border-[#E2E8F0] bg-[#F3F6FA] px-3.5 py-1.5 text-[15px] font-medium text-slate-700"
                  >
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