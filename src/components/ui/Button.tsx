import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'onDark';
type ButtonSize = 'sm' | 'md' | 'lg';

const base =
  'inline-flex items-center justify-center gap-2 rounded-md font-semibold transition-all duration-200 select-none ' +
  'focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 focus-visible:outline-none ' +
  'disabled:opacity-50 disabled:pointer-events-none';

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-brand-600 text-white shadow-sm hover:bg-brand-700 active:bg-brand-800',
  secondary:
    'bg-surface-0 text-slate-700 border border-slate-200 shadow-xs hover:border-slate-300 hover:bg-surface-50 hover:text-slate-900',
  ghost: 'text-slate-600 hover:text-slate-900 hover:bg-slate-100',
  onDark:
    'bg-white/10 text-white border border-white/15 backdrop-blur-sm hover:bg-white/20 active:bg-white/25',
};

const sizes: Record<ButtonSize, string> = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-6 text-base',
};

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children?: ReactNode;
};

type AnchorButtonProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
type NativeButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement>;

function classes({ variant = 'primary', size = 'md', className = '' }: CommonProps) {
  return `${base} ${variants[variant]} ${sizes[size]} ${className}`;
}

export function Button({ variant, size, className, children, ...rest }: NativeButtonProps) {
  return (
    <button className={classes({ variant, size, className })} {...rest}>
      {children}
    </button>
  );
}

export function ButtonLink({
  variant,
  size,
  className,
  children,
  ...rest
}: AnchorButtonProps) {
  return (
    <a className={classes({ variant, size, className })} {...rest}>
      {children}
    </a>
  );
}
