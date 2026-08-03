import {
  ArrowRight,
  Award,
  BadgeCheck,
  Cloud,
  Download,
  Layers,
  MapPin,
  Package,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Reveal from './ui/Reveal';

const statRows: { icon: LucideIcon; label: string; value: string }[] = [
  { icon: Cloud, label: 'Cloud & DevOps', value: 'CI/CD · Docker · Automation' },
  { icon: Layers, label: 'Full Stack', value: 'React · Node.js · PostgreSQL' },
  { icon: Package, label: 'Products Shipped', value: '2 production builds' },
];

const trustChips = ['Cloud & DevOps', 'React & Node.js', 'Full Stack'];

export default function About() {
  return (
    <section
      id="about"
      aria-label="Home"
      className="relative overflow-hidden"
      style={{
        backgroundImage:
          'linear-gradient(180deg, rgba(255,255,255,0.6) 0%, rgba(238,243,255,0.55) 100%)',
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 85% 10%, rgba(37,99,235,0.10), transparent 42%), radial-gradient(circle at 10% 90%, rgba(37,99,235,0.05), transparent 40%)',
        }}
      />

      <div
        className="container-wide relative grid items-center gap-16 lg:gap-20"
        style={{ paddingTop: 200, paddingBottom: 100 }}
      >
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-20">
          {/* Story */}
          <div className="lg:col-span-7">
            <Reveal>
              <p className="kicker">About me</p>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-8 font-display text-[42px] font-light leading-[1.04] tracking-tight text-ink-900 sm:text-[56px] md:text-[64px] lg:text-[72px]">
                Kishore Balaji&nbsp;P
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-7 font-display text-xl font-medium leading-snug text-slate-700 sm:text-2xl">
                Solutions Architect
                <span className="mx-3 text-brand-500">·</span>
                DevOps Engineer
              </p>
            </Reveal>

            <Reveal delay={240}>
              <p className="mt-8 max-w-paragraph text-[17px] leading-[1.8] text-slate-600 lg:text-[18px]">
                AWS Certified Solutions Architect - Associate and DevOps Engineer with
                hands-on experience across the full application lifecycle, specializing in
                scalable and secure AWS cloud architectures, CI/CD pipelines, Docker-based
                containerization, and infrastructure automation, with a strong focus on
                improving deployment efficiency, system reliability, and performance at scale.
              </p>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="/pdf/resume.pdf"
                  download="Kishore_Balaji_Resume.pdf"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-brand-600 px-6 text-[16px] font-semibold text-white shadow-[0_8px_24px_rgba(15,23,42,0.08)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-700 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
                >
                  <Download size={17} aria-hidden="true" />
                  Download Resume
                </a>
                <a
                  href="#projects"
                  className="group inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-[#E2E8F0] bg-white px-6 text-[16px] font-semibold text-slate-800 shadow-[0_1px_2px_rgb(15_23_42_/_0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:border-line-strong active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
                >
                  View Projects
                  <ArrowRight
                    size={17}
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </a>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <ul className="mt-12 flex flex-wrap gap-2.5">
                {trustChips.map((chip) => (
                  <li
                    key={chip}
                    className="inline-flex items-center gap-1.5 rounded-full border border-[#E2E8F0] bg-white px-3.5 py-1.5 text-[15px] font-medium text-slate-700 shadow-[0_1px_2px_rgb(15_23_42_/_0.04)]"
                  >
                    <BadgeCheck size={13} className="text-brand-600" aria-hidden="true" />
                    {chip}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Profile panel — 440px wide */}
          <div className="lg:col-span-5">
            <Reveal delay={250}>
              <div className="mx-auto lg:ml-auto" style={{ maxWidth: 440 }}>
                <article
                  className="relative rounded-[18px] border border-[#E2E8F0] bg-white p-7 shadow-[0_8px_24px_rgba(15,23,42,0.06)] sm:p-8"
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-body text-eyebrow font-semibold uppercase text-slate-500">
                      Profile
                    </p>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-[#E2E8F0] bg-[#F3F6FA] px-3 py-1 text-[13px] font-medium text-slate-600">
                      <MapPin size={12} aria-hidden="true" />
                      Chennai, India
                    </span>
                  </div>

                  <ul className="mt-6 space-y-3.5">
                    {statRows.map((row) => (
                      <li
                        key={row.label}
                        className="flex items-center gap-3.5"
                      >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#F3F6FA] text-slate-600">
                          <row.icon size={17} aria-hidden="true" />
                        </span>
                        <div className="min-w-0">
                          <p className="text-[15px] font-semibold text-slate-900">
                            {row.label}
                          </p>
                          <p className="truncate text-[15px] text-slate-500">{row.value}</p>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex items-center justify-between gap-3 rounded-2xl border border-[#E2E8F0] bg-[#F3F6FA] px-4 py-3.5">
                    <span className="inline-flex items-center gap-2.5 text-[15px] font-medium text-slate-700">
                      <Award size={16} className="shrink-0 text-brand-600" aria-hidden="true" />
                      AWS Certified Solutions Architect — Associate
                    </span>
                    <BadgeCheck size={16} className="shrink-0 text-success-600" aria-hidden="true" />
                  </div>
                </article>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}