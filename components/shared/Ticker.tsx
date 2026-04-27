import { TICKER_ITEMS } from '@/lib/data';
import { cn } from '@/lib/utils';

interface TickerProps {
  className?: string;
  /** When true, uses transparent bg (for landing page); default solid */
  transparent?: boolean;
}

export function Ticker({ className, transparent = false }: TickerProps) {
  // Duplicate so the marquee loops seamlessly
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div
      className={cn(
        'relative h-10 flex items-center overflow-hidden border-y border-line',
        transparent ? 'bg-transparent' : 'bg-ink-950',
        className,
      )}
    >
      <div className="flex items-center h-full px-5 border-r border-line bg-ink-950 z-10 flex-shrink-0">
        <span className="text-[10px] uppercase tracking-[0.24em] text-gold-300 font-semibold">
          Global Indices &amp; FX
        </span>
      </div>

      <div className="relative flex-1 overflow-hidden mask-edges-x">
        <div className="flex gap-10 px-8 animate-ticker hover:[animation-play-state:paused] whitespace-nowrap">
          {items.map((item, i) => (
            <div
              key={`${item.label}-${i}`}
              className="flex items-center gap-3 num text-[11px]"
            >
              <span className="text-muted">{item.label}</span>
              <span className="text-ivory">{item.value}</span>
              <span
                className={cn(
                  'text-[10px]',
                  item.delta > 0 && 'text-signal-up',
                  item.delta < 0 && 'text-signal-down',
                  item.delta === 0 && 'text-muted-strong',
                )}
              >
                {item.delta > 0 ? '▲' : item.delta < 0 ? '▼' : '—'} {Math.abs(item.delta).toFixed(2)}%
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gold hairline */}
      <div className="absolute inset-x-0 bottom-0 h-px gold-rule-h opacity-50" />
    </div>
  );
}
