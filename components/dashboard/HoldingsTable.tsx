'use client';

import { HOLDINGS } from '@/lib/data';
import { cn } from '@/lib/utils';

interface HoldingsTableProps {
  className?: string;
  /** Limits the rows displayed (for compact previews) */
  limit?: number;
}

export function HoldingsTable({ className, limit }: HoldingsTableProps) {
  const rows = limit ? HOLDINGS.slice(0, limit) : HOLDINGS;

  return (
    <div className={cn('panel-surface overflow-hidden', className)}>
      <div className="px-6 pt-5 pb-4 flex items-end justify-between border-b border-line">
        <div>
          <div className="eyebrow-gold mb-1">Custody</div>
          <h3 className="display text-lg text-ivory font-normal tracking-tight">
            Core Holdings
          </h3>
        </div>
        <span className="num text-[10px] text-muted">{rows.length} positions</span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left">
              {['Instrument', 'Class', 'Price', 'Value', 'Δ'].map((h, i) => (
                <th
                  key={h}
                  className={cn(
                    'eyebrow py-3 px-6 text-muted-strong border-b border-line',
                    i >= 2 && 'text-right',
                  )}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((h, i) => (
              <tr
                key={h.symbol}
                className={cn(
                  'border-b border-line/60 last:border-b-0',
                  'hover:bg-white/[0.018] transition-colors duration-200',
                )}
              >
                <td className="py-4 px-6">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[13px] font-medium text-ivory">{h.name}</span>
                    <span className="num text-[10px] text-muted-strong tracking-wider">
                      {h.symbol}
                    </span>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <span className="text-[11px] text-muted">{h.category}</span>
                </td>
                <td className="py-4 px-6 text-right num text-[12px] text-ivory/90">
                  {h.price}
                </td>
                <td className="py-4 px-6 text-right num text-[13px] text-ivory font-medium">
                  {h.value}
                </td>
                <td className="py-4 px-6 text-right">
                  <span
                    className={cn(
                      'num text-[11px] inline-flex items-center justify-end gap-1',
                      h.change > 0 ? 'text-signal-up' : h.change < 0 ? 'text-signal-down' : 'text-muted',
                    )}
                  >
                    {h.change > 0 ? '▲' : h.change < 0 ? '▼' : '—'}
                    {Math.abs(h.change).toFixed(2)}%
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
