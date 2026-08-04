import { FaGithub, FaLinkedin, FaMapMarkerAlt, FaTwitter } from 'react-icons/fa';
import { Mail } from 'lucide-react';
import Container from './ui/Container';

const quickLinks = [
  { id: 'about', label: 'Home' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'contact', label: 'Contact' },
];

const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/KishoreBalajiP', icon: FaLinkedin },
  { label: 'GitHub', href: 'https://github.com/KishoreBalajiP', icon: FaGithub },
  { label: 'Twitter', href: 'https://twitter.com/@imkishore_22', icon: FaTwitter },
];

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-slate-300">
      <Container className="pb-24 pt-8 md:pb-8 md:pt-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-8 lg:gap-12">
          <div className="space-y-4">
            <a href="#about" className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 font-display text-sm font-bold text-blue-300 ring-1 ring-inset ring-white/10">
                KB
              </span>
              <div>
                <p className="font-display text-[15px] font-semibold tracking-tight text-white">
                  Kishore Balaji&nbsp;P
                </p>
                <p className="mt-0.5 text-[13px] text-slate-400">
                  Solutions Architect · DevOps Engineer
                </p>
              </div>
            </a>
            <p className="max-w-[320px] text-[13px] leading-[1.7] text-slate-400">
              Designing resilient cloud systems and thoughtful user experiences.
            </p>
            <div className="flex items-center gap-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition-colors duration-200 hover:border-brand-600 hover:bg-brand-600 hover:text-white"
                >
                  <social.icon size={14} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-3 md:justify-self-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
              Navigation
            </p>
            <nav
              aria-label="Footer"
              className="flex flex-col gap-2 text-[14px]"
            >
              {quickLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className="text-slate-300 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="space-y-3 md:justify-self-end">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
              Get in touch
            </p>
            <div className="flex flex-col gap-2 text-[14px]">
              <a
                href="mailto:kishorebalaji880@gmail.com"
                className="inline-flex items-center gap-2.5 text-slate-300 transition-colors hover:text-white"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-slate-400">
                  <Mail size={14} aria-hidden="true" />
                </span>
                kishorebalaji880@gmail.com
              </a>
              <span className="inline-flex items-center gap-2.5 text-slate-400">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-slate-400">
                  <FaMapMarkerAlt size={12} aria-hidden="true" />
                </span>
                India · Open to remote
              </span>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col justify-between gap-2 border-t border-white/10 pt-4 text-[13px] text-slate-500 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Kishore Balaji P · All rights reserved.</p>
          <p className="text-slate-500">Crafted with care.</p>
        </div>
      </Container>
    </footer>
  );
}