import type { IconType } from 'react-icons';
import { FaAws, FaJava } from 'react-icons/fa';
import {
  SiDocker,
  SiExpress,
  SiGit,
  SiGithubactions,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiPostgresql,
  SiRedis,
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';

// Brand colours; `adaptive` icons use the text colour so they stay visible in both themes.
const skills: { name: string; icon: IconType; color?: string }[] = [
  { name: 'AWS', icon: FaAws, color: '#FF9900' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#5FA04E' },
  { name: 'Express.js', icon: SiExpress },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'Java', icon: FaJava, color: '#E76F00' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'CI/CD', icon: SiGithubactions, color: '#2088FF' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
  { name: 'Redis', icon: SiRedis, color: '#FF4438' },
  { name: 'REST APIs', icon: TbApi, color: '#10b981' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
];

export default function Skills() {
  const loop = [...skills, ...skills];
  return (
    <section aria-label="Skills" className="col mt-10">
      <h2 className="text-[14px] text-dim">
        My <span className="font-semibold text-fg">skills</span>
      </h2>
      <div className="marquee-mask mt-3 overflow-hidden">
        <ul className="flex w-max animate-marquee gap-3 hover:[animation-play-state:paused]">
          {loop.map((s, i) => (
            <li
              key={`${s.name}-${i}`}
              aria-hidden={i >= skills.length ? 'true' : undefined}
              className="flex items-center gap-2.5 whitespace-nowrap rounded-full border border-edge2 bg-card px-5 py-2.5 text-[14px] font-semibold"
            >
              <s.icon size={18} aria-hidden="true" style={s.color ? { color: s.color } : undefined} />
              {s.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
