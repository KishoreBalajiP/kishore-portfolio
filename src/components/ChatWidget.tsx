import { useEffect, useRef, useState } from 'react';
import type { FormEvent, ReactNode } from 'react';
import { Bot, MessageCircle, Send, X } from 'lucide-react';

type Msg = { role: 'user' | 'model'; text: string };

const suggestions = [
  'What does Kishore do?',
  'Tell me about Analivo',
  'What is his AWS experience?',
  'How can I contact him?',
];

const greeting: Msg = {
  role: 'model',
  text: 'Hey! Ask me anything about Kishore — skills, experience, projects, or education.',
};

// Renders **bold** and turns plain URLs and site paths (/pdf/...) into links; everything else stays text.
function linkify(text: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*|https?:\/\/[^\s)]+|\/pdf\/[\w.-]+)/g).map((part, i) => {
    if (/^\*\*[^*]+\*\*$/.test(part)) return <strong key={i} className="font-semibold">{linkify(part.slice(2, -2))}</strong>;
    if (/^(https?:\/\/|\/pdf\/)/.test(part))
      return (
        <a key={i} href={part} target="_blank" rel="noopener noreferrer" className="break-all text-accent underline underline-offset-2">
          {part}
        </a>
      );
    return part;
  });
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([greeting]);
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight });
  }, [messages, open]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const ask = async (question: string) => {
    const q = question.trim();
    if (!q || busy) return;
    setInput('');
    setBusy(true);
    const history: Msg[] = [...messages.filter((m) => m !== greeting), { role: 'user', text: q }];
    setMessages((m) => [...m, { role: 'user', text: q }, { role: 'model', text: '' }]);

    const write = (text: string) =>
      setMessages((m) => {
        const copy = [...m];
        copy[copy.length - 1] = { role: 'model', text };
        return copy;
      });

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: history }),
      });
      if (!res.ok || !res.body) {
        write((await res.text().catch(() => '')) || 'Sorry, something went wrong. Please try again.');
        return;
      }
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let text = '';
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        text += decoder.decode(value, { stream: true });
        write(text);
      }
      if (!text) write("Sorry, I couldn't come up with an answer. You can email Kishore directly.");
    } catch {
      write('Sorry, I could not connect. Please check your connection and try again.');
    } finally {
      setBusy(false);
    }
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    ask(input);
  };

  return (
    <>
      {open && (
        <div
          role="dialog"
          aria-label="Chat with Kishore's assistant"
          className="fixed inset-x-3 bottom-24 z-50 flex h-[min(560px,75svh)] flex-col overflow-hidden rounded-2xl border border-edge bg-bg shadow-2xl animate-rise sm:inset-x-auto sm:right-5 sm:w-[420px]"
        >
          <div className="flex items-center justify-between bg-gradient-to-r from-[#0f9d6b] to-[#065f46] px-5 py-4 text-white">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 ring-4 ring-white/5">
                <Bot size={20} aria-hidden="true" />
              </span>
              <div>
                <p className="text-[16px] font-semibold leading-tight">Resume Chat</p>
                <p className="text-[13px] text-white/75">Ask me anything</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="flex h-8 w-8 items-center justify-center rounded-md text-white/90 transition-colors hover:bg-white/15"
            >
              <X size={18} />
            </button>
          </div>

          <div ref={listRef} className="flex-1 space-y-4 overflow-y-auto px-5 py-5" aria-live="polite">
            {messages.map((m, i) => (
              <div key={i} className={`flex items-start gap-2.5 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {m.role === 'model' && (
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent" aria-hidden="true">
                    <Bot size={15} />
                  </span>
                )}
                <p
                  className={`max-w-[80%] whitespace-pre-wrap rounded-2xl px-4 py-2.5 text-[14px] leading-relaxed ${
                    m.role === 'user' ? 'rounded-tr-md bg-accent-strong text-white' : 'rounded-tl-md border border-edge bg-card text-fg'
                  }`}
                >
                  {m.text ? linkify(m.text) : <span className="inline-flex gap-1" aria-label="Typing"><Dot /><Dot d="150ms" /><Dot d="300ms" /></span>}
                </p>
              </div>
            ))}

            {messages.length === 1 && (
              <div className="flex flex-wrap gap-2 pl-[42px]">
                {suggestions.map((s) => (
                  <button key={s} type="button" onClick={() => ask(s)} className="chip text-[12px]">
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>

          <form onSubmit={onSubmit} className="flex items-center gap-2.5 border-t border-edge px-5 py-4">
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              maxLength={1000}
              placeholder="Type a question…"
              aria-label="Your question"
              className="h-12 flex-1 rounded-xl border border-edge2 bg-card px-4 text-[14px] text-fg placeholder:text-faint focus:border-accent focus:outline-none"
            />
            <button
              type="submit"
              disabled={busy || !input.trim()}
              aria-label="Send"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-strong text-white transition-colors hover:bg-accent disabled:bg-accent/15 disabled:text-accent/70"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close chat' : 'Open resume chat'}
        aria-expanded={open}
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-accent-strong text-white shadow-[0_10px_30px_-8px_rgba(16,185,129,0.7)] transition-colors hover:bg-accent"
      >
        {open ? <X size={22} aria-hidden="true" /> : <MessageCircle size={24} aria-hidden="true" />}
      </button>
    </>
  );
}

function Dot({ d = '0ms' }: { d?: string }) {
  return <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-faint" style={{ animationDelay: d }} />;
}
