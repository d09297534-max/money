'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { SectionTitle } from '@/components/ui/Eyebrow';

const FAQ_ITEMS = [
  {
    q: 'Who is AORO designed for?',
    a: 'Founders, operators, and stewards of generational wealth — typically with $5M to $250M of liquid and custodial assets. We are deliberate about who we admit. Each invitation is countersigned by a managing director and a member of your existing financial circle.',
  },
  {
    q: 'How is AORO regulated, and where is my money held?',
    a: 'AORO operates under FCA, DFSA and MAS authorisations across our principal entities. Your assets are never on our balance sheet. Custody is delegated to BNY Mellon and State Street; banking liquidity is held at Tier-1 institutions. We are an interface — not a counterparty.',
  },
  {
    q: 'What does the Black tier actually unlock?',
    a: 'A unified terminal across portfolio, payments, cards and trust; an assigned relationship manager; concierge with airline, hotel and event partners; preferential FX at interbank +0; private market and event access; and a sovereign security architecture that includes trustees, custodial recovery and geo-authorisation.',
  },
  {
    q: 'How does the card and rewards engine work?',
    a: 'Two cards: AORO Black and AORO Founders. Categories are weighted toward the things our members actually spend on — travel (8%), hospitality (5%), dining (4%) and retail (2%). Rewards are denominated in cash and credited to your custodial account weekly, not as marketing-grade points.',
  },
  {
    q: 'Is there a fee structure I can review?',
    a: 'Yes. AORO is a flat membership: $1,800 annually for Black, $4,800 for Founders. There are no FX spreads, no wire fees, no tier upgrades, no upsells. We are deliberately a fee, not a margin business.',
  },
  {
    q: 'What happens if something goes wrong?',
    a: 'A relationship manager is the first line of contact, reachable directly. For incident response — lost device, suspected fraud, travel emergency — there is a 24-hour sovereign desk with named operators. Recovery custody is held by your nominated trustees, never by AORO.',
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative border-t border-line-strong bg-ink-950 py-32 sm:py-40">
      <div className="mx-auto max-w-5xl px-6 sm:px-10">
        <SectionTitle
          eyebrow="Considerations"
          title={
            <>
              The questions we&rsquo;d <span className="italic text-gold-300">expect</span> you to ask.
            </>
          }
          description="Discretion is not opacity. Below, the answers most members want before any conversation."
          align="center"
        />

        <div className="mt-16 divide-y divide-line-strong border-y border-line-strong">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="group flex w-full items-center justify-between gap-6 py-7 text-left transition-colors duration-300 hover:text-gold-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-300/40 sm:py-8"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-6">
                    <span className="num hidden font-mono text-[11px] uppercase tracking-[0.3em] text-muted-strong sm:inline">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="font-display text-xl tracking-tight text-ivory sm:text-2xl">
                      {item.q}
                    </span>
                  </span>
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line-strong text-muted transition-all duration-500 ${
                      isOpen
                        ? 'rotate-45 border-gold-300/50 bg-gold-300/10 text-gold-100'
                        : 'group-hover:border-gold-300/30'
                    }`}
                  >
                    <Plus className="h-4 w-4" strokeWidth={1.5} />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-3xl pb-8 pl-0 text-[15px] leading-relaxed text-muted sm:pl-[68px]">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
