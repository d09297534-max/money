'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutGrid, ArrowLeftRight, CreditCard, Plane, Shield, ChevronRight,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { CLIENT, NAV_GROUPS, PORTFOLIO } from '@/lib/data';
import { Logo } from '@/components/ui/Logo';
import { Badge } from '@/components/ui/Badge';
import { formatCurrency } from '@/lib/utils';
import { cn } from '@/lib/utils';

const ICON_MAP: Record<string, LucideIcon> = {
  LayoutGrid,
  ArrowLeftRight,
  CreditCard,
  Plane,
  Shield,
};

export function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex flex-col w-[280px] flex-shrink-0 h-screen sticky top-0 border-r border-line relative bg-[linear-gradient(180deg,rgba(11,11,15,0.97),rgba(8,8,12,0.99))]">
      {/* Right gold edge */}
      <div className="absolute top-0 right-0 w-px h-full gold-rule-v opacity-60" />

      {/* Brand */}
      <div className="px-6 pt-7 pb-6 border-b border-line">
        <Link href="/" className="block mb-1">
          <Logo size="md" withTier />
        </Link>
      </div>

      {/* Signature panel */}
      <div className="px-5 pt-5 pb-4">
        <div
          className="relative overflow-hidden rounded-2xl border border-gold-300/20 p-5 shadow-soft"
          style={{
            background:
              'radial-gradient(circle at top right, rgba(213,180,106,0.18), transparent 38%), linear-gradient(150deg, #15151b 0%, #0a0a0d 100%)',
          }}
        >
          <div
            aria-hidden
            className="absolute -top-12 left-1/3 h-32 w-32 rounded-full opacity-50 blur-2xl"
            style={{
              background: 'radial-gradient(circle, rgba(213,180,106,0.18), transparent 70%)',
            }}
          />
          <div className="flex items-center justify-between mb-4 relative">
            <span className="eyebrow-gold">AORO Private</span>
            <Badge variant="live">Live</Badge>
          </div>
          <div className="num text-[15px] text-ivory mb-1.5 relative">
            {formatCurrency(PORTFOLIO.totalNAV, 'USD', { maximumFractionDigits: 0 })}
          </div>
          <p className="text-[11px] leading-relaxed text-muted relative">
            Wealth, liquidity, concierge & rewards — orchestrated.
          </p>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto px-4 pb-6">
        {NAV_GROUPS.map((group) => (
          <div key={group.title} className="mb-7">
            <div className="px-3 mb-2 text-[10px] uppercase tracking-[0.22em] text-muted-strong font-semibold">
              {group.title}
            </div>
            <div className="flex flex-col gap-0.5">
              {group.items.map((item) => {
                const Icon = ICON_MAP[item.icon] ?? LayoutGrid;
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'group flex items-center gap-3 px-3 py-2.5 rounded-lg text-[12.5px] font-medium border transition-all duration-200',
                      active
                        ? 'text-gold-100 bg-gradient-to-r from-white/[0.03] to-transparent border-gold-300/15 shadow-[inset_2px_0_0_#d5b46a]'
                        : 'text-muted border-transparent hover:text-ivory hover:bg-white/[0.025] hover:border-line',
                    )}
                  >
                    <Icon size={15} strokeWidth={1.5} className="flex-shrink-0" />
                    <span className="flex-1">{item.label}</span>
                    <ChevronRight
                      size={12}
                      className={cn(
                        'opacity-0 transition-all duration-200',
                        active ? 'opacity-60 text-gold-300' : 'group-hover:opacity-40',
                      )}
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* User */}
      <div className="px-5 py-4 border-t border-line flex items-center gap-3">
        <div className="h-9 w-9 rounded-full bg-gold-300/15 border border-gold-300/30 flex items-center justify-center text-[11px] font-semibold text-gold-100">
          {CLIENT.initials}
        </div>
        <div className="flex flex-col flex-1 min-w-0">
          <span className="text-[12.5px] text-ivory font-medium truncate">{CLIENT.name}</span>
          <span className="num text-[10px] text-muted">{CLIENT.privateId}</span>
        </div>
      </div>
    </aside>
  );
}
