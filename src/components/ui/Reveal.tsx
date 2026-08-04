import type { CSSProperties, ElementType, ReactNode } from 'react';
import { useInView } from '../../hooks/useInView';

type RevealProps = {
  children?: ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
};

export default function Reveal({
  children,
  className = '',
  delay = 0,
  as: Tag = 'div',
}: RevealProps) {
  const { ref, inView } = useInView<HTMLElement>();

  const style: CSSProperties = delay
    ? { transitionDelay: `${delay}ms` }
    : {};

  return (
    <Tag
      ref={ref}
      style={style}
      className={`transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
