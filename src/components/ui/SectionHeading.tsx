import { useId } from 'react';
import Reveal from './Reveal';

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  onDark?: boolean;
  align?: 'center' | 'left';
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  onDark = false,
  align = 'center',
}: SectionHeadingProps) {
  const titleId = useId();
  const alignCls = align === 'center' ? 'text-center' : 'text-left';

  return (
    <Reveal className={alignCls}>
      <p
        className={`mb-2 font-body text-eyebrow font-semibold uppercase ${
          onDark ? 'text-blue-300' : 'text-brand-600'
        }`}
      >
        {eyebrow}
      </p>
      <h2
        id={titleId}
        className={`text-section font-semibold ${
          onDark ? 'text-white' : 'text-slate-900'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-3 mx-auto max-w-2xl text-lead ${
            onDark ? 'text-slate-300' : 'text-slate-600'
          } ${align === 'center' ? 'mx-auto' : ''}`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
