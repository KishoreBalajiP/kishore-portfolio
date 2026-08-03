import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
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
      <Container className="pb-16 pt-6 md:pb-6 md:pt-7">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <a href="#about" className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 font-display text-sm font-bold text-blue-300 ring-1 ring-inset ring-white/10">
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

          <nav
            aria-label="Footer"
            className="flex flex-wrap items-center gap-x-6 gap-y-1.5 text-[14px]"
          >
            {quickLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="text-slate-400 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

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

        <div className="mt-5 flex flex-col justify-between gap-2 border-t border-white/10 pt-3 text-[13px] text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Kishore Balaji P · All rights reserved.</p>
          <p>
            <a
              href="mailto:kishorebalaji880@gmail.com"
              className="transition-colors hover:text-slate-300"
            >
              kishorebalaji880@gmail.com
            </a>
            <span aria-hidden="true" className="mx-2 text-slate-700">
              ·
            </span>
            Built with React, TypeScript &amp; Tailwind CSS
          </p>
        </div>
      </Container>
    </footer>
  );
}