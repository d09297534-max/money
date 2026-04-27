import { cn } from '@/lib/utils';
import type { HTMLAttributes, ReactNode } from 'react';

interface PanelProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  /** Adds a subtle gold corner glow */
  accented?: boolean;
}

export function Panel({ children, accented, className, ...rest }: PanelProps) {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-[14px] border border-line',
        'bg-[linear-gradient(180deg,rgba(14,14,18,0.96),rgba(10,10,14,0.99))]',
        'shadow-soft',
        className,
      )}
      {...rest}
    >
      {accented && (
        <div
          aria-hidden
          className="pointer-events-none absolute -top-12 right-0 h-40 w-40 opacity-50 blur-2xl"
          style={{
            background:
              'radial-gradient(circle, rgba(213,180,106,0.18), transparent 70%)',
          }}
        />
      )}
      {children}
    </div>
  );
}

interface KpiProps {
  label: string;
  value: string;
  footerLeft?: ReactNode;
  footerRight?: ReactNode;
  accent?: 'gold' | 'up' | 'down' | 'neutral';
  className?: string;
}

export function Kpi({
  label,
  value,
  footerLeft,
  footerRight,
  accent = 'neutral',
  className,
}: KpiProps) {
  const valueColor =
    accent === 'up'   ? 'text-signal-up'
  : accent === 'down' ? 'text-signal-down'
  : accent === 'gold' ? 'text-gold-100'
                      : 'text-ivory';

  return (
    <Panel accented={accent === 'gold'} className={cn('p-6', className)}>
      <div className="eyebrow mb-5">{label}</div>
      <div
        className={cn(
          'num text-[34px] leading-none font-medium tracking-tighter',
          valueColor,
        )}
      >
        {value}
      </div>
      {(footerLeft || footerRight) && (
        <div className="mt-6 flex items-center justify-between gap-3 text-[11px] text-muted">
          <div className="truncate">{footerLeft}</div>
          <div className="flex-shrink-0 num">{footerRight}</div>
        </div>
      )}
    </Panel>
  );
}
