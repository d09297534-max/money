'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Logo } from '@/components/ui/Logo';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { href: '/dashboard', label: 'Wealth' },
  { href: '/cards',     label: 'Cards' },
  { href: '/payments',  label: 'Payments' },
  { href: '/travel',    label: 'Travel' },
  { href: '/security',  label: 'Security' },
];

export function MarketingNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-ink-950/85 backdrop-blur-xl border-b border-line'
          : 'bg-transparent border-b border-transparent',
      )}
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10 h-16 lg:h-[72px] flex items-center justify-between">
        <Link href="/" className="flex items-center" aria-label="AORO MONEY home">
          <Logo size="md" withTier />
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[12px] uppercase tracking-[0.18em] text-muted hover:text-ivory transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Button variant="ghost" size="sm">
            Sign in
          </Button>
          <Button variant="gold" size="sm" iconRight={<ArrowRight size={14} />}>
            Request Invitation
          </Button>
        </div>

        {/* Mobile */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 text-ivory"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile sheet */}
      <div
        className={cn(
          'lg:hidden overflow-hidden border-t border-line bg-ink-950/95 backdrop-blur-xl transition-[max-height,opacity] duration-500',
          open ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0',
        )}
      >
        <nav className="flex flex-col gap-1 px-6 py-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-3 text-sm uppercase tracking-[0.18em] text-muted hover:text-ivory border-b border-line"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col gap-3 pt-5">
            <Button variant="outline" size="md">Sign in</Button>
            <Button variant="gold" size="md" iconRight={<ArrowRight size={14} />}>
              Request Invitation
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
