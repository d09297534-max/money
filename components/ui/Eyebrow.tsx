import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

export function Eyebrow({
  children,
  gold,
  className,
}: {
  children: ReactNode;
  gold?: boolean;
  className?: string;
}) {
  return (
    <div className={cn('inline-flex items-center gap-2', className)}>
      <span
        aria-hidden
        className={cn(
          'h-px w-6',
          gold ? 'bg-gold-300/60' : 'bg-line-strong',
        )}
      />
      <span
        className={cn(
          'text-[10px] uppercase font-semibold tracking-[0.28em]',
          gold ? 'text-gold-300' : 'text-muted-strong',
        )}
      >
        {children}
      </span>
    </div>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  className?: string;
}) {
  return (
    <div
      className={cn(
        'flex flex-col gap-5',
        align === 'center' ? 'items-center text-center' : 'items-start',
        className,
      )}
    >
      {eyebrow && <Eyebrow gold>{eyebrow}</Eyebrow>}
      <h2 className="display text-3xl md:text-5xl lg:text-[56px] leading-[1.02] tracking-display max-w-3xl text-ivory font-light">
        {title}
      </h2>
      {description && (
        <p className="max-w-xl text-[15px] leading-relaxed text-muted">
          {description}
        </p>
      )}
    </div>
  );
}
