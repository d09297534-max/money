'use client';

import { motion } from 'framer-motion';
import { SectionTitle } from '@/components/ui/Eyebrow';
import {
  Layers, ArrowLeftRight, CreditCard, Plane, Shield, Sparkles,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Pillar {
  num: string;
  icon: LucideIcon;
  title: string;
  body: string;
}

const PILLARS: Pillar[] = [
  {
    num: '01',
    icon: Layers,
    title: 'Wealth Orchestration',
    body: 'A consolidated view of every account, custodian, fund and vault — instrumented in real time and reconciled against the global market.',
  },
  {
    num: '02',
    icon: ArrowLeftRight,
    title: 'Sovereign Payments',
    body: 'Send and receive across 38 currencies at interbank rates, with same-day settlement and a discreet ledger that meets your auditor where they are.',
  },
  {
    num: '03',
    icon: CreditCard,
    title: 'Black & Founders Cards',
    body: 'Two physical instruments engineered for principals — refined materials, instant FX, intelligent rewards, no foreign loading, no theatre.',
  },
  {
    num: '04',
    icon: Plane,
    title: 'Concierge & Travel',
    body: 'A standing concierge attached to your account. Itineraries, bookings, lounges, mobility, security — coordinated by people, not bots.',
  },
  {
    num: '05',
    icon: Shield,
    title: 'Vault & Trust',
    body: 'Hardware-backed sessions, geo-fenced authorisation, cold custody for digital assets and an emergency channel that rings a human in seconds.',
  },
  {
    num: '06',
    icon: Sparkles,
    title: 'Money Intelligence',
    body: 'A private model that observes your accounts and quietly narrates the things worth knowing — and only those things.',
  },
];

export function Pillars() {
  return (
    <section className="relative py-28 lg:py-40 border-t border-line">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 mb-20">
          <div className="lg:col-span-7">
            <SectionTitle
              eyebrow="Capabilities · Six Pillars"
              title={
                <>
                  Built like an instrument.{' '}
                  <span className="italic text-gold-100">Used like a confidant.</span>
                </>
              }
            />
          </div>
          <div className="lg:col-span-5 lg:pt-12">
            <p className="text-[15px] leading-relaxed text-muted">
              Every surface of AORO MONEY is engineered to vanish — to leave
              behind only the decision and the outcome. What follows is a
              quiet description of what that engineering enables.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-line">
          {PILLARS.map((p, i) => (
            <motion.article
              key={p.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="group relative p-8 lg:p-10 border-r border-b border-line transition-colors duration-500 hover:bg-white/[0.015]"
            >
              <div className="flex items-start justify-between mb-12">
                <span className="num text-[11px] tracking-[0.18em] text-muted-strong">{p.num}</span>
                <p.icon
                  className="text-gold-300 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-[3deg]"
                  size={20}
                  strokeWidth={1.25}
                />
              </div>

              <h3 className="display text-2xl lg:text-[26px] tracking-display text-ivory mb-4 leading-tight font-normal">
                {p.title}
              </h3>
              <p className="text-[13px] leading-relaxed text-muted">
                {p.body}
              </p>

              {/* Reveal underline on hover */}
              <div
                aria-hidden
                className="absolute left-8 right-8 lg:left-10 lg:right-10 bottom-7 h-px bg-gold-300/40 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700"
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
