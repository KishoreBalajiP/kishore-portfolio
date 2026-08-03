import type { ReactNode } from 'react';

type ChipVariant = 'neutral' | 'brand' | 'onDark' | 'outline';

const styles: Record<ChipVariant, string> = {
  neutral: 'bg-surface-100 text-slate-600 border border-transparent',
  brand: 'bg-brand-50 text-brand-700 border border-brand-100',
  onDark: 'bg-white/10 text-slate-200 border border-white/10',
  outline: 'bg-transparent text-slate-600 border border-slate-200',
};

type ChipProps = {
  children: ReactNode;
  variant?: ChipVariant;
  className?: string;
};

export default function Chip({ children, variant = 'neutral', className = '' }: ChipProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium whitespace-nowrap ${styles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
