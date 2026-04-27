'use client';

import { LEDGER } from '@/lib/data';
import { cn, formatCurrency } from '@/lib/utils';
import {
  Apple, Plane, Hotel, Car, ArrowDownLeft, ArrowUpRight,
  Banknote, Sparkles, UtensilsCrossed,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const ICONS: Record<string, LucideIcon> = {
  apple:      Apple,
  plane:      Plane,
  hotel:      Hotel,
  car:        Car,
  dividend:   ArrowDownLeft,
  wire:       Banknote,
  rewards:    Sparkles,
  restaurant: UtensilsCrossed,
};

interface LedgerListProps {
  className?: string;
  limit?: number;
}

export function LedgerList({ className, limit }: LedgerListProps) {
  const items = limit ? LEDGER.slice(0, limit) : LEDGER;

  return (
    <div className={cn('panel-surface overflow-hidden', className)}>
      <div className="px-6 pt-5 pb-4 flex items-end justify-between border-b border-line">
        <div>
          <div className="eyebrow-gold mb-1">Activity</div>
          <h3 className="display text-lg text-ivory font-normal tracking-tight">
            Recent Ledger
          </h3>
        </div>
        <button className="text-[11px] uppercase tracking-[0.16em] text-muted hover:text-gold-200 transition-colors">
          View all →
        </button>
      </div>

      <ul className="divide-y divide-line/60">
        {items.map((tx, i) => {
          const Icon = ICONS[tx.icon] ?? ArrowUpRight;
          const isInflow = tx.amount > 0;
          return (
            <li
              key={i}
              className="px-6 py-4 flex items-center gap-4 hover:bg-white/[0.018] transition-colors"
            >
              <div
                className={cn(
                  'flex-shrink-0 h-10 w-10 rounded-lg flex items-center justify-center border',
                  isInflow
                    ? 'bg-gold-300/10 border-gold-300/30 text-gold-200'
                    : 'bg-white/[0.03] border-line text-muted',
                )}
              >
                <Icon size={15} strokeWidth={1.5} />
              </div>

              <div className="flex-1 min-w-0">
                <div className="text-[13px] font-medium text-ivory truncate">
                  {tx.merchant}
                </div>
                <div className="text-[11px] text-muted-strong">{tx.category}</div>
              </div>

              <div className="text-right">
                <div
                  className={cn(
                    'num text-[13px] font-medium',
                    isInflow ? 'text-signal-up' : 'text-ivory',
                  )}
                >
                  {isInflow ? '+' : ''}
                  {formatCurrency(tx.amount, tx.currency)}
                </div>
                <div className="num text-[10px] text-muted-strong">{tx.date}</div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
