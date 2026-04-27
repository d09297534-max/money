'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Plane, Sparkles, Shield } from 'lucide-react';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Badge } from '@/components/ui/Badge';
import { PORTFOLIO, PORTFOLIO_CURVE } from '@/lib/data';
import { buildCurvePath, formatCurrency } from '@/lib/utils';

export function DashboardPreview() {
  const path = buildCurvePath(PORTFOLIO_CURVE, 720, 220, 12);

  return (
    <section className="relative border-t border-line-strong bg-ink-950 py-32 sm:py-40">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-300/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          {/* Copy */}
          <div className="lg:col-span-4">
            <Eyebrow gold>The Terminal</Eyebrow>
            <h2 className="mt-6 font-display text-4xl leading-[1.05] tracking-display text-ivory sm:text-5xl">
              One <span className="italic text-gold-300">surface</span> for every dimension of wealth.
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-muted">
              Custodial holdings, multi-currency liquidity, card spend, concierge itineraries and trust
              architecture — composed into a single private terminal. No noise. No advertising. No
              dependencies you didn't choose.
            </p>

            <ul className="mt-10 space-y-5 text-[14px] text-ivory/85">
              {[
                { label: 'Portfolio · NAV, allocation, daily P&L', tone: 'gold' },
                { label: 'Cards · Black + Founders, controls, rewards', tone: 'neutral' },
                { label: 'Payments · FX at interbank, sovereign rails', tone: 'neutral' },
                { label: 'Travel · concierge, lounges, mobility', tone: 'neutral' },
                { label: 'Vault · trustees, recovery, sovereignty', tone: 'neutral' },
              ].map((row) => (
                <li key={row.label} className="flex items-start gap-3">
                  <span className="mt-[7px] h-px w-6 bg-gold-300/60" />
                  <span className="text-muted">{row.label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Frame */}
          <div className="relative lg:col-span-8">
            <div className="absolute -inset-x-6 -inset-y-10 -z-10 rounded-[28px] bg-[radial-gradient(ellipse_at_center,rgba(213,180,106,0.10),transparent_70%)] blur-2xl" />

            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-15%' }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden rounded-2xl border border-line-strong bg-ink-900/70 shadow-panel backdrop-blur"
            >
              {/* faux titlebar */}
              <div className="flex items-center justify-between border-b border-line-strong bg-ink-900/60 px-6 py-3">
                <div className="flex items-center gap-2.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-ink-700" />
                  <span className="h-2.5 w-2.5 rounded-full bg-ink-700" />
                  <span className="h-2.5 w-2.5 rounded-full bg-ink-700" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-strong">
                  aoro · private terminal
                </span>
                <Badge variant="live" />
              </div>

              {/* content */}
              <div className="grid gap-px bg-line-strong/60 sm:grid-cols-12">
                {/* Main */}
                <div className="bg-ink-950 p-6 sm:col-span-8 sm:p-8">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="eyebrow text-muted-strong">Net Asset Value</p>
                      <p className="num mt-3 font-display text-4xl tracking-tight text-ivory sm:text-5xl">
                        {formatCurrency(PORTFOLIO.nav)}
                      </p>
                      <p className="num mt-2 text-[13px] text-signal-up">
                        +{PORTFOLIO.ytdReturnPct.toFixed(1)}% YTD · +
                        {formatCurrency(PORTFOLIO.ytdReturnAbs)}
                      </p>
                    </div>
                    <div className="hidden gap-2 sm:flex">
                      {['1W', '1M', 'YTD', 'ALL'].map((p) => (
                        <span
                          key={p}
                          className={`rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] ${
                            p === 'YTD'
                              ? 'border-gold-300/40 bg-gold-300/10 text-gold-100'
                              : 'border-line-strong text-muted'
                          }`}
                        >
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Chart */}
                  <div className="mt-8">
                    <svg viewBox="0 0 720 220" className="h-[180px] w-full sm:h-[220px]">
                      <defs>
                        <linearGradient id="dpFill" x1="0" x2="0" y1="0" y2="1">
                          <stop offset="0%" stopColor="#d5b46a" stopOpacity="0.32" />
                          <stop offset="100%" stopColor="#d5b46a" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="dpStroke" x1="0" x2="1" y1="0" y2="0">
                          <stop offset="0%" stopColor="#bf9a4d" />
                          <stop offset="55%" stopColor="#d5b46a" />
                          <stop offset="100%" stopColor="#f1dca5" />
                        </linearGradient>
                      </defs>

                      {/* gridlines */}
                      {[44, 88, 132, 176].map((y) => (
                        <line
                          key={y}
                          x1="0"
                          x2="720"
                          y1={y}
                          y2={y}
                          stroke="rgba(255,255,255,0.04)"
                          strokeWidth="1"
                        />
                      ))}

                      <motion.path
                        d={`${path} L 720 220 L 0 220 Z`}
                        fill="url(#dpFill)"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.4 }}
                      />
                      <motion.path
                        d={path}
                        fill="none"
                        stroke="url(#dpStroke)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </svg>
                  </div>
                </div>

                {/* Right rail */}
                <div className="grid gap-px bg-line-strong/60 sm:col-span-4">
                  <div className="bg-ink-950 p-6">
                    <p className="eyebrow text-muted-strong">Liquid · Multi-currency</p>
                    <p className="num mt-3 font-display text-2xl text-ivory">
                      {formatCurrency(PORTFOLIO.liquidity)}
                    </p>
                    <div className="mt-4 grid grid-cols-3 gap-2 text-[10px] uppercase tracking-[0.2em] text-muted-strong">
                      <span>USD</span>
                      <span>EUR</span>
                      <span>AED</span>
                    </div>
                  </div>

                  <div className="bg-ink-950 p-6">
                    <p className="eyebrow text-muted-strong">Rewards · YTD</p>
                    <p className="num mt-3 font-display text-2xl text-gold-100">
                      +{formatCurrency(PORTFOLIO.rewardsYtd)}
                    </p>
                    <div className="mt-3 flex items-center gap-2 text-[12px] text-muted">
                      <Sparkles className="h-3.5 w-3.5 text-gold-300" />
                      <span>Travel · 8% category</span>
                    </div>
                  </div>

                  <div className="bg-ink-950 p-6">
                    <p className="eyebrow text-muted-strong">Concierge</p>
                    <div className="mt-3 flex items-start gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full border border-gold-300/30 bg-gold-300/5">
                        <Plane className="h-4 w-4 text-gold-300" />
                      </div>
                      <div>
                        <p className="text-[13px] text-ivory">Dubai · Sep 18 — 22</p>
                        <p className="num mt-1 text-[11px] text-muted-strong">EK202 · 1A · briefed</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-ink-950 p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Shield className="h-4 w-4 text-gold-300" />
                        <span className="eyebrow text-gold-100">Sovereign</span>
                      </div>
                      <Badge variant="live">Quiet</Badge>
                    </div>
                    <p className="mt-3 text-[12px] leading-relaxed text-muted">
                      All devices trusted. No anomalies in last 30 days.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating callouts */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute -bottom-6 left-6 hidden items-center gap-3 rounded-full border border-line-strong bg-ink-900/95 px-4 py-2 shadow-soft backdrop-blur sm:flex"
            >
              <ArrowUpRight className="h-3.5 w-3.5 text-signal-up" />
              <span className="num text-[12px] text-ivory">+$48,210</span>
              <span className="text-[11px] text-muted-strong">today</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
