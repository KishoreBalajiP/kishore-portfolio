import { profile } from '../data';

export default function Footer() {
  return (
    <>
      <footer className="col mt-16 pb-10 text-center">
        <div className="mx-auto flex max-w-[220px] items-center gap-3" aria-hidden="true">
          <span className="h-px flex-1 bg-edge2" />
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          <span className="h-px flex-1 bg-edge2" />
        </div>
        <p className="mt-6 font-serif text-[18px] italic text-dim">“Build it simple. Ship it reliable.”</p>
        <p className="mt-4 text-[12px] text-faint">
          © {new Date().getFullYear()} {profile.name} · <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">@{profile.handle}</a>
        </p>
      </footer>

    </>
  );
}
