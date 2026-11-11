import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { Github, Linkedin, Mail, MapPin, Send } from 'lucide-react';
import { profile } from '../data';

const empty = { name: '', email: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');
    const service = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const params = { ...form, reply_to: form.email, time: new Date().toLocaleString() };
    try {
      // 1. The message itself, delivered to my inbox.
      await emailjs.send(service, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, params, publicKey);

      // 2. A copy to the sender. Optional: only runs when the auto-reply template is configured,
      //    and a failure here doesn't undo the message that was already delivered.
      const copyTemplate = import.meta.env.VITE_EMAILJS_COPY_TEMPLATE_ID;
      if (copyTemplate) {
        await emailjs.send(service, copyTemplate, params, publicKey).catch((err) => console.error(err));
      }
      setForm(empty);
      setStatus('sent');
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  const details = [
    { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: MapPin, label: 'Location', value: profile.location },
  ];

  return (
    <section id="contact" aria-label="Contact" className="col mt-14">
      <h2 className="text-center text-[22px] font-semibold">Get in Touch</h2>
      <p className="mt-2 text-center text-[14px] text-dim">
        Reach out if you want to discuss a project, an opportunity, or anything else worth building.</p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="panel p-5 sm:p-6">
          <h3 className="font-semibold">Contact details</h3>
          <p className="mt-2 text-[13.5px] text-dim">Email is the fastest way to reach me. The links below work too.</p>
          <ul className="mt-5 space-y-3">
            {details.map((d) => (
              <li key={d.label} className="row flex items-center gap-3 p-3">
                <d.icon size={16} className="shrink-0 text-accent" aria-hidden="true" />
                <div className="min-w-0">
                  <p className="text-[12px] text-faint">{d.label}</p>
                  {d.href ? (
                    <a href={d.href} className="block truncate text-[14px] hover:text-accent-soft">{d.value}</a>
                  ) : (
                    <p className="text-[14px]">{d.value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-[13px] text-dim">Elsewhere</p>
          <div className="mt-2 grid grid-cols-2 gap-2">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="chip justify-center"><Github size={15} /> GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="chip justify-center"><Linkedin size={15} /> LinkedIn</a>
          </div>
        </div>

        <div className="panel p-5 sm:p-6">
          {status === 'sent' ? (
            <div role="status" className="flex h-full flex-col items-center justify-center py-10 text-center">
              <p className="font-semibold">Message sent</p>
              <p className="mt-1 text-[14px] text-dim">Thanks, I'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-3">
              <h3 className="font-semibold">Send a message</h3>
              <input aria-label="Name" name="name" required value={form.name} onChange={onChange} autoComplete="name" placeholder="Your name" className="input" />
              <input aria-label="Email" name="email" type="email" required value={form.email} onChange={onChange} autoComplete="email" placeholder="you@example.com" className="input" />
              <textarea aria-label="Message" name="message" required rows={5} value={form.message} onChange={onChange} placeholder="What are you working on?" className="input h-auto resize-none py-2.5" />
              {status === 'error' && (
                <p role="alert" className="text-[13px] text-red-400">That didn't send. Please email me directly.</p>
              )}
              <button type="submit" disabled={status === 'sending'} className="btn-green w-full justify-center disabled:opacity-50">
                <Send size={15} aria-hidden="true" /> {status === 'sending' ? 'Sending…' : 'Send message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
