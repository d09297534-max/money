import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'live' | 'gold' | 'neutral' | 'up' | 'down';
  className?: string;
}

export function Badge({ children, variant = 'neutral', className }: BadgeProps) {
  const styles: Record<NonNullable<BadgeProps['variant']>, string> = {
    live:    'text-signal-up [--dot:#17c37b]',
    gold:    'text-gold-200 [--dot:#d5b46a]',
    up:      'text-signal-up [--dot:#17c37b]',
    down:    'text-signal-down [--dot:#f35c5c]',
    neutral: 'text-muted [--dot:#73737d]',
  };

  return (
    <div
      className={cn(
        'inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-semibold',
        styles[variant],
        className,
      )}
    >
      <span
        aria-hidden
        className="h-1.5 w-1.5 rounded-full animate-pulse-dot"
        style={{ backgroundColor: 'var(--dot)' }}
      />
      {children}
    </div>
  );
}
