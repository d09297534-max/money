'use client';

import { motion } from 'framer-motion';

const STATS = [
  { value: '$3.2B', label: 'Custodial AUM', sub: 'across BNY Mellon · State Street' },
  { value: '34', label: 'Currencies', sub: 'wired at interbank in 24 hours' },
  { value: '120+', label: 'Lounges Global', sub: 'admitted on a single tap' },
  { value: 'MMXXIV', label: 'Established', sub: 'by-invitation since inception' },
];

export function StatsStrip() {
  return (
    <section className="relative border-y border-line-strong bg-ink-900/70 py-20 sm:py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-300/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold-300/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line-strong bg-line-strong/60 sm:grid-cols-4">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="bg-ink-950 px-6 py-10 text-center sm:px-8 sm:py-14"
            >
              <p className="num font-display text-4xl tracking-tight text-ivory sm:text-5xl">
                {s.value}
              </p>
              <p className="eyebrow mt-4 text-gold-100">{s.label}</p>
              <p className="mt-2 text-[12px] leading-relaxed text-muted-strong">{s.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
