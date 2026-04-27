'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CardShowcaseProps {
  variant?: 'noir' | 'gold' | 'signature';
  cardholder?: string;
  number?: string;
  className?: string;
  /** When true, the card responds to mouse with subtle 3D tilt */
  interactive?: boolean;
}

/**
 * The AORO physical card. Built as a stack of layered surfaces — base material,
 * embossed wordmark, chip, holo strip, and number row. No bank logos.
 * Designed to feel like an object, not a UI element.
 */
export function CardShowcase({
  variant = 'noir',
  cardholder = 'JAMES ANDERSON',
  number = '4255 8892 1104 5530',
  className,
  interactive = true,
}: CardShowcaseProps) {
  // Last 4 only — privacy detail
  const masked = number
    .split(' ')
    .map((g, i) => (i < 3 ? '••••' : g))
    .join('  ');

  const surfaceClass =
    variant === 'gold'
      ? 'bg-card-gold'
      : variant === 'signature'
      ? 'bg-[linear-gradient(135deg,#1a1a1f_0%,#0a0a0c_50%,#15151a_100%)]'
      : 'bg-card-noir';

  return (
    <motion.div
      initial={interactive ? { opacity: 0, y: 16 } : false}
      whileInView={interactive ? { opacity: 1, y: 0 } : undefined}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      whileHover={interactive ? { rotateX: -3, rotateY: 5, scale: 1.015 } : undefined}
      style={{ transformStyle: 'preserve-3d', perspective: 1200 }}
      className={cn(
        'relative aspect-[1.586/1] w-full rounded-[20px] overflow-hidden',
        'border border-white/[0.08]',
        'shadow-card',
        surfaceClass,
        className,
      )}
    >
      {/* Slow shimmer */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 animate-shimmer"
        style={{
          background:
            'linear-gradient(115deg, transparent 6%, rgba(255,255,255,0.08) 48%, transparent 56%)',
          transform: 'translateX(-125%)',
        }}
      />

      {/* Subtle grain */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay bg-grain"
      />

      {/* Top row: AORO mark + tier */}
      <div className="absolute inset-x-0 top-0 p-6 flex items-start justify-between z-10">
        <div className="flex flex-col gap-1">
          <div
            className="font-display tracking-[0.32em] text-ivory text-base leading-none"
            style={{ fontFeatureSettings: '"ss01"' }}
          >
            <span>AOR</span>
            <span className="relative inline-block">
              O
              <span
                aria-hidden
                className="absolute -top-0.5 left-1/2 -translate-x-1/2 h-[3px] w-[3px] rounded-full bg-gold-300"
              />
            </span>
          </div>
          <div className="text-[8px] tracking-[0.32em] text-muted-strong uppercase">
            Private · Member {variant === 'signature' ? 'Founders' : 'Black'}
          </div>
        </div>

        {/* Embossed circle motif (currency mark) */}
        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-gold-300/30">
          <span className="font-display text-gold-200 text-sm leading-none">A</span>
        </div>
      </div>

      {/* Chip */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 z-10">
        <div className="relative h-9 w-12 rounded-md overflow-hidden border border-white/15"
          style={{
            background:
              'linear-gradient(135deg, #b8a06b 0%, #8a7448 30%, #6b5836 60%, #c4a874 100%)',
          }}
        >
          {/* Chip lines */}
          <div className="absolute inset-1 grid grid-cols-2 grid-rows-3 gap-px">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-black/20" />
            ))}
          </div>
        </div>
      </div>

      {/* NFC arc */}
      <svg
        className="absolute right-7 top-1/2 -translate-y-1/2 z-10 text-gold-200/60"
        width="14"
        height="18"
        viewBox="0 0 14 18"
        fill="none"
        aria-hidden
      >
        <path d="M2 4 Q6 9 2 14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M6 2 Q12 9 6 16" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>

      {/* Bottom: card number + holder */}
      <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col gap-4 z-10">
        <div className="num text-ivory/95 text-[15px] tracking-[0.32em] flex items-center gap-3">
          {masked.split('  ').map((g, i) => (
            <span
              key={i}
              className={cn(
                i < 3 && 'text-ivory/40 tracking-[0.18em] text-[13px]',
                i === 3 && 'text-ivory',
              )}
            >
              {g}
            </span>
          ))}
        </div>
        <div className="flex items-end justify-between">
          <div>
            <div className="text-[8px] uppercase tracking-[0.28em] text-muted-strong mb-1">
              Cardholder
            </div>
            <div className="text-[11px] tracking-[0.16em] text-ivory uppercase">
              {cardholder}
            </div>
          </div>
          <div>
            <div className="text-[8px] uppercase tracking-[0.28em] text-muted-strong mb-1 text-right">
              Valid
            </div>
            <div className="num text-[11px] tracking-[0.12em] text-ivory">12 / 32</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
