'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { CardShowcase } from '@/components/shared/CardShowcase';
import { Eyebrow } from '@/components/ui/Eyebrow';

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show:   { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-32 overflow-hidden">
      {/* Atmospheric backdrop */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(213,180,106,0.16), transparent 70%), radial-gradient(ellipse 60% 40% at 90% 10%, rgba(213,180,106,0.08), transparent)',
        }}
      />

      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left — copy */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show:   { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
            }}
            className="lg:col-span-7"
          >
            <motion.div variants={fadeUp} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
              <Eyebrow gold>Private Wealth · Operating System</Eyebrow>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="display mt-7 text-[42px] sm:text-[56px] lg:text-[80px] xl:text-[92px] leading-[0.96] tracking-[-0.045em] font-light text-ivory"
            >
              The private bank,
              <br />
              <span className="italic font-light text-gold-100">
                rewritten
              </span>{' '}
              <span className="text-ivory">as software.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 max-w-xl text-[16px] lg:text-[17px] leading-[1.65] text-ivory/70"
            >
              AORO MONEY is the wealth operating system used by a small number
              of families and principals to orchestrate liquidity, custody,
              cards, payments, and travel — instrumented in real time,
              concierge by default, sovereign by design.
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <Button variant="gold" size="lg" iconRight={<ArrowRight size={16} />}>
                Request Invitation
              </Button>
              <Button variant="outline" size="lg">
                View the Product
              </Button>
            </motion.div>

            {/* Trust row */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="mt-16 flex flex-wrap items-center gap-x-10 gap-y-4 pt-8 border-t border-line"
            >
              {[
                ['Custody',    'BNY · State Street'],
                ['Banking',    'Tier-1 Partners'],
                ['Regulation', 'FCA · DFSA · MAS'],
                ['Audit',      'Big-Four Annual'],
              ].map(([k, v]) => (
                <div key={k} className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase tracking-[0.22em] text-muted-strong font-semibold">
                    {k}
                  </span>
                  <span className="text-[12px] text-ivory/85">{v}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — the physical card, pedestaled */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative max-w-[460px] mx-auto">
              {/* Subtle gold halo */}
              <div
                aria-hidden
                className="absolute -inset-10 -z-10 opacity-60 blur-3xl"
                style={{
                  background:
                    'radial-gradient(circle, rgba(213,180,106,0.18), transparent 60%)',
                }}
              />
              <CardShowcase variant="noir" />

              {/* Floating spec callouts */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="hidden md:flex absolute -right-4 lg:-right-12 top-12 items-center gap-3 px-4 py-2.5 rounded-full border border-line bg-ink-900/85 backdrop-blur-md shadow-soft"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-signal-up animate-pulse-dot" />
                <span className="text-[10px] uppercase tracking-[0.22em] text-ivory">
                  Card · Live
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="hidden md:flex absolute -left-4 lg:-left-12 bottom-16 flex-col gap-1 px-4 py-2.5 rounded-md border border-line bg-ink-900/85 backdrop-blur-md shadow-soft"
              >
                <span className="text-[9px] uppercase tracking-[0.22em] text-muted-strong">
                  Latest activity
                </span>
                <span className="text-[12px] text-ivory">Hôtel de Crillon, Paris</span>
                <span className="num text-[11px] text-gold-200">€4,180.00</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
