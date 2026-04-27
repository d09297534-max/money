'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutGrid, ArrowLeftRight, CreditCard, Plane, Shield, Menu, X,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { NAV_GROUPS, CLIENT } from '@/lib/data';
import { Logo } from '@/components/ui/Logo';
import { cn } from '@/lib/utils';

const ICON_MAP: Record<string, LucideIcon> = {
  LayoutGrid, ArrowLeftRight, CreditCard, Plane, Shield,
};

export function MobileDashboardNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="lg:hidden sticky top-0 z-40 h-14 px-5 flex items-center justify-between border-b border-line bg-ink-950/90 backdrop-blur-xl">
        <Link href="/" className="flex items-center">
          <Logo size="sm" withTier />
        </Link>
        <button
          onClick={() => setOpen(true)}
          className="p-2 text-ivory"
          aria-label="Open menu"
        >
          <Menu size={20} />
        </button>
      </header>

      {/* Drawer */}
      <div
        className={cn(
          'lg:hidden fixed inset-0 z-50 transition-opacity duration-300',
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
        )}
      >
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        <aside
          className={cn(
            'absolute top-0 left-0 bottom-0 w-[88%] max-w-[340px] bg-ink-900 border-r border-line p-6 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col',
            open ? 'translate-x-0' : '-translate-x-full',
          )}
        >
          <div className="flex items-center justify-between mb-8">
            <Logo size="md" withTier />
            <button onClick={() => setOpen(false)} aria-label="Close menu">
              <X size={20} />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto -mx-2">
            {NAV_GROUPS.map((group) => (
              <div key={group.title} className="mb-6">
                <div className="px-3 mb-2 text-[10px] uppercase tracking-[0.22em] text-muted-strong font-semibold">
                  {group.title}
                </div>
                <div className="flex flex-col">
                  {group.items.map((item) => {
                    const Icon = ICON_MAP[item.icon] ?? LayoutGrid;
                    const active = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          'flex items-center gap-3 px-3 py-3 rounded-lg text-[13px]',
                          active ? 'text-gold-100 bg-white/[0.03]' : 'text-muted',
                        )}
                      >
                        <Icon size={16} strokeWidth={1.5} />
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </nav>

          <div className="pt-4 border-t border-line flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-gold-300/15 border border-gold-300/30 flex items-center justify-center text-[11px] font-semibold text-gold-100">
              {CLIENT.initials}
            </div>
            <div>
              <div className="text-[13px] text-ivory">{CLIENT.name}</div>
              <div className="num text-[10px] text-muted">{CLIENT.privateId}</div>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
