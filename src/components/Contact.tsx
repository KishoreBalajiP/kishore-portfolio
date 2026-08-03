import { useEffect, useRef, useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { ArrowRight, ChevronRight, Mail, MapPin, Phone, Send, X } from 'lucide-react';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import Container from './ui/Container';
import Reveal from './ui/Reveal';

const initialForm = { name: '', email: '', message: '' };

const contactRows = [
  { icon: Phone, label: 'Phone', value: '+91 6381858714', href: 'tel:+916381858714' },
  { icon: Mail, label: 'Email', value: 'kishorebalaji880@gmail.com', href: 'mailto:kishorebalaji880@gmail.com' },
];

const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/KishoreBalajiP', icon: FaLinkedin },
  { label: 'GitHub', href: 'https://github.com/KishoreBalajiP', icon: FaGithub },
  { label: 'Instagram', href: 'https://instagram.com/kxshxre22', icon: FaInstagram },
  { label: 'Twitter', href: 'https://twitter.com/@imkishore_22', icon: FaTwitter },
  { label: 'WhatsApp', href: 'https://wa.me/916381858714', icon: FaWhatsapp },
];

const inputClasses =
  'w-full h-12 rounded-xl border border-line bg-canvas-3 px-4 text-[17px] text-slate-900 placeholder:text-slate-400 transition-colors duration-200 ' +
  'focus:border-brand-600 focus:bg-surface focus:outline-none focus:ring-2 focus:ring-brand-600/20';

function ContactForm() {
  const [formData, setFormData] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (isSending) return;
    setIsSending(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setSubmitted(true);
      setTimeout(() => {
        setFormData(initialForm);
        setSubmitted(false);
      }, 3000);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      {submitted ? (
        <div
          role="status"
          className="rounded-2xl border border-success-600/20 bg-success-50 p-5 text-center"
        >
          <p className="text-base font-semibold text-emerald-800">
            Thank you for your message!
          </p>
          <p className="mt-1 text-sm text-emerald-700">I’ll get back to you soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="contact-name"
                className="mb-2 block text-[15px] font-medium text-slate-700"
              >
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                required
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={inputClasses}
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="contact-email"
                className="mb-2 block text-[15px] font-medium text-slate-700"
              >
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                required
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={inputClasses}
                placeholder="your.email@example.com"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="contact-message"
              className="mb-2 block text-[15px] font-medium text-slate-700"
            >
              Message
            </label>
            <textarea
              id="contact-message"
              required
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className={`${inputClasses} h-auto resize-none py-3`}
              placeholder="Your message..."
            />
          </div>
          <button
            type="submit"
            disabled={isSending}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-600 px-6 text-[16px] font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-700 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none sm:w-auto"
            style={{ height: 46 }}
          >
            <Send size={16} aria-hidden="true" />
            {isSending ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      )}
    </>
  );
}

export default function Contact() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isMapOpen, setIsMapOpen] = useState(false);

  useEffect(() => {
    if (!isFormOpen) return;
    const previousOverflow = document.body.style.overflow;
    const previousTouchAction = document.body.style.touchAction;
    document.body.style.overflow = 'hidden';
    document.body.style.touchAction = 'none';
    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.style.touchAction = previousTouchAction;
    };
  }, [isFormOpen]);

  const closeForm = () => setIsFormOpen(false);

  const sheetRef = useRef<HTMLDivElement | null>(null);
  const dragStartY = useRef<number | null>(null);
  const dragDeltaY = useRef(0);

  const onTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    const target = event.currentTarget;
    if (target.scrollTop > 0) return;
    dragStartY.current = event.touches[0]?.clientY ?? null;
    dragDeltaY.current = 0;
  };

  const onTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    if (dragStartY.current === null) return;
    const currentY = event.touches[0]?.clientY ?? dragStartY.current;
    const delta = Math.max(0, currentY - dragStartY.current);
    dragDeltaY.current = delta;
    if (sheetRef.current) {
      sheetRef.current.style.transform = `translateY(${delta}px)`;
    }
  };

  const onTouchEnd = () => {
    if (dragStartY.current === null) return;
    if (dragDeltaY.current > 120) {
      closeForm();
    } else if (sheetRef.current) {
      sheetRef.current.style.transform = '';
    }
    dragStartY.current = null;
    dragDeltaY.current = 0;
  };

  return (
    <section
      id="contact"
      aria-label="Contact"
      style={{ backgroundColor: '#F3F6FA' }}
    >
      <Container>
        <div className="section-y">
          <Reveal>
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
              <div>
                <p className="kicker">Contact</p>
                <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5">
                  <h2 className="font-display text-[36px] font-semibold leading-[1.08] tracking-tight text-ink-900 sm:text-[44px] lg:text-[56px]">
                    Get In Touch
                  </h2>
                  <button
                    type="button"
                    onClick={() => setIsFormOpen(true)}
                    className="group inline-flex h-11 w-fit items-center justify-center gap-2 rounded-xl bg-brand-600 px-5 text-[14px] font-semibold text-white shadow-[0_18px_40px_-12px_rgba(37,99,235,0.55)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-700 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 md:hidden"
                    aria-haspopup="dialog"
                    aria-expanded={isFormOpen}
                  >
                    Let’s Talk
                    <ArrowRight
                      size={15}
                      aria-hidden="true"
                      className="transition-transform duration-200 group-hover:translate-x-0.5"
                    />
                  </button>
                </div>
              </div>
              <p className="max-w-[420px] text-[17px] text-slate-600 lg:text-right">
                I’m always open to discussing new opportunities and projects.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <div className="flex h-full flex-col rounded-[18px] border border-[#E2E8F0] bg-white p-6 shadow-[0_8px_24px_rgba(15,23,42,0.05)]">
                <ul className="divide-y divide-line-soft">
                  {contactRows.map((row) => (
                    <li key={row.label} className="py-3.5 first:pt-0 last:pb-0">
                      <a href={row.href} className="group flex items-center gap-4">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                          <row.icon size={18} aria-hidden="true" />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-[15px] font-medium uppercase tracking-wide text-slate-500">
                            {row.label}
                          </span>
                          <span className="mt-1 block break-all text-[17px] font-semibold text-slate-900">
                            {row.value}
                          </span>
                        </span>
                        <ChevronRight
                          size={16}
                          className="shrink-0 text-slate-300 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-brand-600"
                          aria-hidden="true"
                        />
                      </a>
                    </li>
                  ))}

                  <li className="py-3.5 first:pt-0 last:pb-0">
                    <button
                      type="button"
                      onClick={() => setIsMapOpen(true)}
                      className="group flex w-full items-center gap-4 text-left"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                        <MapPin size={18} aria-hidden="true" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-[15px] font-medium uppercase tracking-wide text-slate-500">
                          Location
                        </span>
                        <span className="mt-1 block text-[17px] font-semibold text-slate-900">
                          Chennai, India
                        </span>
                      </span>
                      <ChevronRight
                        size={16}
                        className="shrink-0 text-slate-300 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-brand-600"
                        aria-hidden="true"
                      />
                    </button>
                  </li>
                </ul>

                <div className="mt-5 border-t border-line-soft pt-4">
                  <p className="text-[16px] font-semibold text-slate-900">Connect with me</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {socials.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#E2E8F0] bg-white text-slate-600 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-600 hover:bg-brand-50 hover:text-brand-600"
                      >
                        <social.icon size={17} aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120} className="lg:col-span-7">
              <div
                id="contact-form"
                className="hidden h-full rounded-[18px] border border-[#E2E8F0] bg-white p-6 shadow-[0_8px_24px_rgba(15,23,42,0.05)] md:block"
              >
                <h3 className="font-display text-[22px] font-semibold tracking-tight text-slate-900">
                  Send a Message
                </h3>
                <div className="mt-5">
                  <ContactForm />
                </div>
              </div>

              <div className="hidden">
                <p className="md:hidden text-center text-[14px] text-slate-500">
                  Tap “Let’s Talk” above to open the contact form.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {isFormOpen && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Send a message"
            className="fixed inset-0 z-50 md:hidden"
            onClick={closeForm}
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-ink-900/70 backdrop-blur-sm"
            />
            <div
              ref={sheetRef}
              className="absolute inset-x-0 bottom-0 max-h-[92svh] overflow-hidden rounded-t-3xl bg-white shadow-modal animate-[sheet-up_320ms_cubic-bezier(0.22,1,0.36,1)]"
              onClick={(e) => e.stopPropagation()}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <div className="flex items-center justify-center pt-3">
                <span className="h-1.5 w-12 rounded-full bg-slate-200" aria-hidden="true" />
              </div>
              <div className="flex items-start justify-between gap-3 px-5 pt-3">
                <div>
                  <p className="kicker">Contact</p>
                  <h3 className="mt-2 font-display text-[22px] font-semibold tracking-tight text-slate-900">
                    Send a Message
                  </h3>
                </div>
                <button
                  type="button"
                  aria-label="Close"
                  onClick={closeForm}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#E2E8F0] bg-white text-slate-600 shadow-[0_1px_2px_rgb(15_23_42_/_0.04)] transition-colors hover:bg-[#F3F6FA] hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600"
                >
                  <X size={18} aria-hidden="true" />
                </button>
              </div>
              <div className="max-h-[calc(92svh-96px)] overflow-y-auto px-5 pb-8 pt-4 pb-safe">
                <ContactForm />
              </div>
            </div>
          </div>
        )}

        {isMapOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-ink-900/70 p-3 backdrop-blur-sm sm:p-4"
            onClick={() => setIsMapOpen(false)}
          >
            <div
              className="relative w-full max-w-2xl rounded-[18px] border border-[#E2E8F0] bg-white p-5 shadow-modal sm:p-7"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                aria-label="Close"
                onClick={() => setIsMapOpen(false)}
                className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full border border-[#E2E8F0] bg-white text-slate-600 shadow-[0_1px_2px_rgb(15_23_42_/_0.04)] transition-colors hover:bg-[#F3F6FA] hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600"
              >
                <X size={18} aria-hidden="true" />
              </button>
              <h3 className="font-display text-[22px] font-bold text-slate-900">
                Chennai, India
              </h3>
              <iframe
                title="Map of Chennai, India"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15507.151717006997!2d80.2707!3d13.0827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1697512345678!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: '0.75rem' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="mt-4 border border-line"
              />
              <a
                href="https://www.google.com/maps/search/?api=1&query=13.0827,80.2707"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-600 px-6 text-[16px] font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-700 active:scale-[0.98] sm:w-auto"
                style={{ height: 46 }}
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}