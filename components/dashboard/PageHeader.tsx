import { ReactNode } from 'react';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { cn } from '@/lib/utils';

interface PageHeaderProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  actions?: ReactNode;
  className?: string;
}

export function PageHeader({
  eyebrow, title, description, actions, className,
}: PageHeaderProps) {
  return (
    <div className={cn('flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-line', className)}>
      <div className="flex flex-col gap-3">
        <Eyebrow gold>{eyebrow}</Eyebrow>
        <h1 className="display text-3xl lg:text-[40px] leading-[1.05] tracking-display text-ivory font-light max-w-2xl">
          {title}
        </h1>
        {description && (
          <p className="text-[14px] text-muted max-w-xl leading-relaxed">{description}</p>
        )}
      </div>
      {actions && <div className="flex flex-wrap items-center gap-2">{actions}</div>}
    </div>
  );
}
