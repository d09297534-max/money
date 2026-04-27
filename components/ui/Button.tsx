'use client';

import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

type Variant = 'gold' | 'outline' | 'ghost' | 'ink';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  iconRight?: ReactNode;
}

const sizeStyles: Record<Size, string> = {
  sm: 'h-9  px-4 text-[11px] tracking-[0.14em]',
  md: 'h-11 px-6 text-[12px] tracking-[0.16em]',
  lg: 'h-14 px-8 text-[12px] tracking-[0.18em]',
};

const variantStyles: Record<Variant, string> = {
  // Solid antique gold — like a foil-stamped invitation. No gradient.
  gold:
    'bg-gold-300 text-ink-950 font-semibold ' +
    'hover:bg-gold-200 active:bg-gold-400 ' +
    'shadow-gold-sm hover:shadow-gold ' +
    'transition-[background-color,box-shadow] duration-300',

  outline:
    'bg-transparent text-ivory border border-line-strong ' +
    'hover:border-line-gold hover:bg-white/[0.02] ' +
    'transition-colors duration-300',

  ghost:
    'bg-transparent text-ivory ' +
    'hover:bg-white/[0.04] ' +
    'transition-colors duration-200',

  ink:
    'bg-ink-700 text-ivory border border-line ' +
    'hover:bg-ink-600 hover:border-line-strong ' +
    'transition-colors duration-300',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = 'outline', size = 'md', icon, iconRight, className, children, ...rest },
  ref,
) {
  return (
    <button
      ref={ref}
      className={cn(
        'group inline-flex items-center justify-center gap-2.5 rounded-full',
        'uppercase font-medium select-none',
        'focus-visible:outline focus-visible:outline-1 focus-visible:outline-gold-300',
        'disabled:opacity-40 disabled:cursor-not-allowed',
        sizeStyles[size],
        variantStyles[variant],
        className,
      )}
      {...rest}
    >
      {icon && <span className="-ml-0.5 flex-shrink-0">{icon}</span>}
      <span>{children}</span>
      {iconRight && (
        <span className="-mr-0.5 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-0.5">
          {iconRight}
        </span>
      )}
    </button>
  );
});
