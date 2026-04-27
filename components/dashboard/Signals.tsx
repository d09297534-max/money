import { cn } from '@/lib/utils';

const SIGNALS = [
  { label: 'Travel budget',     value: 'Healthy',       tone: 'up' },
  { label: 'Family payout',     value: '$120.00',       tone: 'neutral' },
  { label: 'Lounge entries',    value: '2 available',   tone: 'gold' },
  { label: 'Event access',      value: 'VIP confirmed', tone: 'gold' },
  { label: 'FX hedging',        value: 'Auto · 60 days',tone: 'neutral' },
] as const;

interface SignalsProps {
  className?: string;
}

export function Signals({ className }: SignalsProps) {
  return (
    <div className={cn('panel-surface p-5', className)}>
      <div className="eyebrow-gold mb-4">Priority Signals</div>
      <div className="flex flex-col gap-2">
        {SIGNALS.map((s) => (
          <div
            key={s.label}
            className="flex items-center justify-between gap-3 px-3 py-2.5 rounded-md border border-line hover:border-line-strong transition-colors"
          >
            <span className="text-[12px] text-muted">{s.label}</span>
            <span
              className={cn(
                'text-[12px] font-medium',
                s.tone === 'up'   && 'text-signal-up',
                s.tone === 'gold' && 'text-gold-200',
                s.tone === 'neutral' && 'text-ivory',
              )}
            >
              {s.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
