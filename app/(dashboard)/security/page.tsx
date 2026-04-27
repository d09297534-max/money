'use client';

import { motion } from 'framer-motion';
import {
  Shield, Fingerprint, Smartphone, Key, Globe2, AlertTriangle,
  CheckCircle2, ShieldCheck, Lock, ArrowUpRight,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { PageHeader } from '@/components/dashboard/PageHeader';
import { Panel } from '@/components/ui/Panel';
import { Button } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/lib/utils';

const PILLARS: { icon: LucideIcon; title: string; body: string; status: 'ok' | 'review' }[] = [
  { icon: Fingerprint, title: 'Hardware-bound sessions', body: 'Every session is anchored to a Secure Enclave on a device you authorised in person.', status: 'ok' },
  { icon: Smartphone,  title: 'Trusted devices',         body: '3 devices trusted. Last new device — your iPad, attested 12 days ago.',                status: 'ok' },
  { icon: Key,         title: 'Recovery custody',        body: 'Two trustees and one notary hold split shards of your recovery secret.',                status: 'ok' },
  { icon: Globe2,      title: 'Geo authorisation',       body: 'Active in Europe & UAE. Other regions require a discreet second-channel approval.',     status: 'ok' },
];

const ACTIVITY = [
  { ts: '14:02 · Today',     event: 'Session opened',           where: 'iPhone 15 Pro · London, UK',          state: 'ok'    },
  { ts: '09:31 · Today',     event: 'Wire authorised · £125K',  where: 'iPhone 15 Pro · London, UK',          state: 'ok'    },
  { ts: '21:14 · Yesterday', event: 'New device challenged',    where: 'MacBook Pro · Approved by you',        state: 'ok'    },
  { ts: '08:00 · Apr 22',    event: 'Login from unusual region',where: 'Lisbon, PT · Approved via concierge',  state: 'review' },
];

const TRUSTEES = [
  { name: 'Christopher Anderson', role: 'Brother',          residence: 'Boston, MA' },
  { name: 'Sophia Beaumont',      role: 'Family Counsel',   residence: 'Geneva, CH' },
  { name: 'Notary · Smith & Co.', role: 'Court-appointed',  residence: 'London, UK' },
];

export default function SecurityPage() {
  return (
    <div className="px-6 lg:px-10 py-8 lg:py-10 flex flex-col gap-10">
      <PageHeader
        eyebrow="Security · Vault · Trust"
        title={
          <>
            Discretion is a <span className="italic text-gold-100">design decision.</span>
          </>
        }
        description="Every authorisation is anchored to a device you held, a person you know, or a jurisdiction you've named. The default is private."
        actions={<Button variant="gold" size="sm" icon={<ShieldCheck size={13} />}>Run security audit</Button>}
      />

      {/* Posture banner */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-2xl border border-gold-300/15"
        style={{
          background:
            'radial-gradient(ellipse 60% 60% at 0% 0%, rgba(213,180,106,0.16), transparent 60%), linear-gradient(180deg, rgba(14,14,18,0.96), rgba(8,8,12,0.99))',
        }}
      >
        <div className="grid lg:grid-cols-[1fr_auto] gap-6 items-center p-8 lg:p-10">
          <div>
            <Badge variant="up">All systems quiet</Badge>
            <h2 className="display text-3xl lg:text-[40px] text-ivory mt-4 mb-3 font-light leading-[1.05] tracking-display">
              Posture: <span className="italic text-gold-100">Sovereign</span>
            </h2>
            <p className="text-[14px] text-muted leading-relaxed max-w-xl">
              No anomalies in the last 30 days. 3 trusted devices. 2 trustees and a
              notary. Recovery custody verified Apr 1. Your account behaves only
              for you.
            </p>
          </div>
          <div className="relative">
            {/* Concentric rings */}
            <svg width="160" height="160" viewBox="0 0 160 160" aria-hidden>
              <circle cx="80" cy="80" r="72" fill="none" stroke="rgba(213,180,106,0.12)" />
              <circle cx="80" cy="80" r="56" fill="none" stroke="rgba(213,180,106,0.18)" />
              <circle cx="80" cy="80" r="40" fill="none" stroke="rgba(213,180,106,0.28)" />
              <motion.circle
                cx="80"
                cy="80"
                r="72"
                fill="none"
                stroke="#d5b46a"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeDasharray="452"
                initial={{ strokeDashoffset: 452 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
              />
              <Shield x="68" y="68" width="24" height="24" className="text-gold-200" />
            </svg>
            <Shield
              size={28}
              className="text-gold-200 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              strokeWidth={1.5}
            />
          </div>
        </div>
      </motion.div>

      {/* Pillars */}
      <section>
        <div className="flex items-end justify-between pb-4 mb-6 border-b border-line">
          <div>
            <Eyebrow gold>Architecture</Eyebrow>
            <h3 className="display text-2xl text-ivory mt-2 font-normal">Four pillars</h3>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-3">
          {PILLARS.map((p) => (
            <Panel key={p.title} className="p-6">
              <div className="flex items-start gap-4">
                <div className="h-11 w-11 rounded-md bg-gold-300/10 border border-gold-300/30 flex items-center justify-center text-gold-200 flex-shrink-0">
                  <p.icon size={17} strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <h4 className="text-[14px] font-medium text-ivory">{p.title}</h4>
                    {p.status === 'ok' ? (
                      <CheckCircle2 size={14} className="text-signal-up flex-shrink-0" />
                    ) : (
                      <AlertTriangle size={14} className="text-signal-down flex-shrink-0" />
                    )}
                  </div>
                  <p className="text-[12.5px] text-muted leading-relaxed">{p.body}</p>
                </div>
              </div>
            </Panel>
          ))}
        </div>
      </section>

      {/* Trustees & Activity */}
      <div className="grid lg:grid-cols-[1.1fr_1fr] gap-6">
        <Panel className="p-7">
          <div className="flex items-center justify-between mb-6">
            <div>
              <Eyebrow gold>Recovery · Custody</Eyebrow>
              <h3 className="display text-xl text-ivory mt-2 font-normal">Trustees &amp; notary</h3>
            </div>
            <Lock size={16} className="text-gold-300" />
          </div>

          <p className="text-[12.5px] text-muted leading-relaxed mb-6 max-w-md">
            Your recovery secret is split across three custodians using
            Shamir's secret sharing. Two of three are required to reconstruct it.
          </p>

          <ul className="space-y-2">
            {TRUSTEES.map((t) => (
              <li
                key={t.name}
                className="flex items-center justify-between gap-3 p-4 rounded-md border border-line hover:border-line-strong transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-gold-300/10 border border-gold-300/30 flex items-center justify-center text-[10px] font-semibold text-gold-100">
                    {t.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
                  </div>
                  <div>
                    <div className="text-[13px] text-ivory">{t.name}</div>
                    <div className="text-[11px] text-muted">{t.role} · {t.residence}</div>
                  </div>
                </div>
                <CheckCircle2 size={14} className="text-signal-up" />
              </li>
            ))}
          </ul>

          <div className="mt-6 flex items-center justify-between pt-4 border-t border-line">
            <span className="text-[11px] text-muted">Last verified</span>
            <span className="num text-[11px] text-ivory">Apr 1, 2026</span>
          </div>
        </Panel>

        <Panel className="p-7">
          <div className="flex items-center justify-between mb-6">
            <div>
              <Eyebrow gold>Audit · Trail</Eyebrow>
              <h3 className="display text-xl text-ivory mt-2 font-normal">Recent activity</h3>
            </div>
            <button className="text-[10px] uppercase tracking-[0.16em] text-muted hover:text-gold-200 inline-flex items-center gap-1">
              Export <ArrowUpRight size={11} />
            </button>
          </div>

          <ul className="space-y-3">
            {ACTIVITY.map((a, i) => (
              <li
                key={i}
                className={cn(
                  'p-4 rounded-md border border-line flex items-start gap-3',
                  a.state === 'review' && 'border-signal-warn/30 bg-signal-warn/[0.04]',
                )}
              >
                <div
                  className={cn(
                    'h-2 w-2 rounded-full mt-1.5 flex-shrink-0',
                    a.state === 'ok'     && 'bg-signal-up',
                    a.state === 'review' && 'bg-signal-warn',
                  )}
                />
                <div className="flex-1 min-w-0">
                  <div className="text-[13px] text-ivory">{a.event}</div>
                  <div className="text-[11px] text-muted mt-0.5">{a.where}</div>
                </div>
                <div className="num text-[10px] text-muted-strong tracking-[0.1em] uppercase">
                  {a.ts}
                </div>
              </li>
            ))}
          </ul>
        </Panel>
      </div>

      {/* Emergency channel */}
      <Panel className="p-7 lg:p-10 border-signal-down/20"
        style={{
          background:
            'radial-gradient(ellipse 60% 60% at 100% 0%, rgba(243,92,92,0.10), transparent 60%), linear-gradient(180deg, rgba(14,14,18,0.96), rgba(8,8,12,0.99))',
        }}
      >
        <div className="grid lg:grid-cols-[1fr_auto] gap-6 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-signal-down/10 border border-signal-down/30">
              <AlertTriangle size={11} className="text-signal-down" />
              <span className="eyebrow text-signal-down">Emergency channel</span>
            </div>
            <h3 className="display text-2xl lg:text-3xl text-ivory mt-4 font-normal max-w-lg leading-tight">
              If something feels wrong, we are reachable in seconds.
            </h3>
            <p className="text-[13px] text-muted leading-relaxed mt-3 max-w-lg">
              Triggers a hardware-attested call to a duty officer, freezes outbound
              activity, and quietly informs the people you have nominated.
            </p>
          </div>
          <Button variant="gold" size="lg">
            Activate Emergency Protocol
          </Button>
        </div>
      </Panel>
    </div>
  );
}
