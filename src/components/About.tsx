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
        background:
          'linear-gradient(180deg, #F4F7FF 0%, #EEF3FF 45%, #F8FAFF 100%)',
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(60% 50% at 85% 0%, rgba(37,99,235,0.18) 0%, rgba(37,99,235,0) 70%), radial-gradient(45% 45% at 5% 25%, rgba(14,165,233,0.14) 0%, rgba(14,165,233,0) 70%), radial-gradient(55% 45% at 50% 110%, rgba(99,102,241,0.16) 0%, rgba(99,102,241,0) 70%)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.55]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(15,23,42,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.05) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage:
            'radial-gradient(70% 60% at 50% 35%, black 0%, transparent 80%)',
          WebkitMaskImage:
            'radial-gradient(70% 60% at 50% 35%, black 0%, transparent 80%)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-[-10%] h-[480px] w-[480px] rounded-full"
        style={{
          background:
            'radial-gradient(closest-side, rgba(37,99,235,0.22), rgba(37,99,235,0) 70%)',
          filter: 'blur(10px)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 left-[-10%] h-[520px] w-[520px] rounded-full"
        style={{
          background:
            'radial-gradient(closest-side, rgba(14,165,233,0.18), rgba(14,165,233,0) 70%)',
          filter: 'blur(12px)',
        }}
      />

      <div
        className="container-wide relative grid items-center gap-12 md:gap-16 lg:gap-20"
        style={{ paddingTop: 140, paddingBottom: 80 }}
      >
        <div
          className="grid items-center gap-12 md:gap-16 lg:grid-cols-12 lg:gap-20"
          style={{ paddingTop: 0 }}
        >
          {/* Story */}
          <div className="lg:col-span-7">
            <Reveal>
              <p className="kicker">About me</p>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-6 font-display text-[40px] font-semibold leading-[1.05] tracking-[-0.02em] text-ink-900 sm:text-[58px] md:mt-8 md:text-[68px] lg:text-[76px]">
                Kishore Balaji&nbsp;P
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-5 inline-flex flex-wrap items-center gap-x-3 gap-y-1 rounded-full border border-brand-600/15 bg-white/70 px-4 py-1.5 font-display text-[14px] font-medium leading-none text-slate-700 shadow-[0_1px_2px_rgba(15,23,42,0.04)] backdrop-blur sm:text-[17px] md:mt-6">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-success-600" />
                Solutions Architect
                <span className="text-brand-500">·</span>
                DevOps Engineer
                <span className="text-brand-500">·</span>
                AWS Certified
              </p>
            </Reveal>

            <Reveal delay={240}>
              <p className="mt-6 max-w-paragraph text-[16px] leading-[1.75] text-slate-600 md:mt-8 md:text-[17px] md:leading-[1.8] lg:text-[18px]">
                AWS Certified Solutions Architect - Associate and DevOps Engineer with
                hands-on experience across the full application lifecycle, specializing in
                scalable and secure AWS cloud architectures, CI/CD pipelines, Docker-based
                containerization, and infrastructure automation, with a strong focus on
                improving deployment efficiency, system reliability, and performance at scale.
              </p>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row">
                <a
                  href="/pdf/resume.pdf"
                  download="Kishore_Balaji_Resume.pdf"
                  className="group relative inline-flex h-12 items-center justify-center gap-2 overflow-hidden rounded-xl bg-ink-900 px-7 text-[15px] font-semibold text-white shadow-[0_18px_40px_-12px_rgba(15,23,42,0.45)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-ink-800 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 sm:text-[16px]"
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 -z-10"
                    style={{
                      background:
                        'linear-gradient(120deg, rgba(37,99,235,0) 0%, rgba(37,99,235,0.35) 50%, rgba(37,99,235,0) 100%)',
                    }}
                  />
                  <Download size={17} aria-hidden="true" />
                  Download Resume
                </a>
                <a
                  href="#projects"
                  className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-[#E2E8F0] bg-white/80 px-7 text-[15px] font-semibold text-slate-800 shadow-[0_8px_24px_-12px_rgba(15,23,42,0.18)] backdrop-blur transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-600 hover:text-brand-700 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 sm:text-[16px]"
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
              <ul className="mt-8 flex flex-wrap gap-2.5 sm:mt-12">
                {trustChips.map((chip) => (
                  <li
                    key={chip}
                    className="inline-flex items-center gap-1.5 rounded-full border border-[#E2E8F0] bg-white/80 px-3.5 py-1.5 text-[15px] font-medium text-slate-700 shadow-[0_1px_2px_rgba(15,23,42,0.04)] backdrop-blur"
                  >
                    <BadgeCheck size={13} className="text-brand-600" aria-hidden="true" />
                    {chip}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Profile panel — 440px wide */}
          <div className="hidden lg:col-span-5 lg:block">
            <Reveal delay={250}>
              <div className="mx-auto lg:ml-auto" style={{ maxWidth: 440 }}>
                <article
                  className="relative rounded-[20px] border border-white bg-white/85 p-7 shadow-[0_30px_60px_-25px_rgba(15,23,42,0.25)] backdrop-blur sm:p-8"
                >
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 top-0 h-px"
                    style={{
                      background:
                        'linear-gradient(90deg, transparent, rgba(37,99,235,0.4), transparent)',
                    }}
                  />
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