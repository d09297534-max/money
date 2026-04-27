'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MoneyIntelProps {
  className?: string;
}

export function MoneyIntel({ className }: MoneyIntelProps) {
  return (
    <div className={cn('panel-surface p-5', className)}>
      <div className="flex items-center gap-2.5 mb-4">
        <Sparkles size={13} className="text-gold-300" strokeWidth={1.5} />
        <span className="eyebrow-gold">Money · Intelligence</span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="font-mono text-[12px] leading-[1.7] text-muted space-y-3"
      >
        <p>
          <Mark>Insight.</Mark> Discretionary spend is up{' '}
          <Mark>+18%</Mark> this week, concentrated in dining
          and travel. Within tolerance.
        </p>
        <p>
          Your <Mark>Dubai itinerary</Mark> qualifies for{' '}
          <Mark>8% AORO Rewards</Mark>. The benefit has been
          credited automatically.
        </p>
        <p className="text-muted-strong text-[10px] tracking-[0.18em] uppercase pt-3 border-t border-line">
          Updated · 4 minutes ago
        </p>
      </motion.div>
    </div>
  );
}

function Mark({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-1 py-0.5 rounded bg-white/[0.05] text-ivory">
      {children}
    </span>
  );
}
