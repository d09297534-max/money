'use client';

import { motion } from 'framer-motion';
import {
  Lock, Globe, Eye, Pause, Plane, UtensilsCrossed, Hotel, ShoppingBag,
  Settings2, Snowflake, MapPin, ChevronRight,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { PageHeader } from '@/components/dashboard/PageHeader';
import { Panel } from '@/components/ui/Panel';
import { Button } from '@/components/ui/Button';
import { CardShowcase } from '@/components/shared/CardShowcase';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { CLIENT } from '@/lib/data';
import { cn } from '@/lib/utils';

const REWARD_CATEGORIES = [
  { icon: Plane,           label: 'Travel',       rate: '8%',  ytd: '$1,420.50' },
  { icon: Hotel,           label: 'Hospitality',  rate: '5%',  ytd: '$640.20'   },
  { icon: UtensilsCrossed, label: 'Dining',       rate: '4%',  ytd: '$612.80'   },
  { icon: ShoppingBag,     label: 'Retail',       rate: '2%',  ytd: '$567.00'   },
];

const CONTROLS: { icon: LucideIcon; label: string; status: 'on' | 'off' | 'auto'; description: string }[] = [
  { icon: Lock,     label: 'Card Lock',         status: 'off',  description: 'Instantly freeze authorisations across all rails.' },
  { icon: Globe,    label: 'Geo-Authorisation', status: 'auto', description: 'Active in Europe & UAE. Other regions require approval.' },
  { icon: Snowflake,label: 'Cold Spend',        status: 'off',  description: 'Limits card to whitelisted merchants for sensitive periods.' },
  { icon: Eye,      label: 'Privacy Mode',      status: 'on',   description: 'Receipt detail is masked from third-party processors.' },
  { icon: Pause,    label: 'Standing Hold',     status: 'off',  description: 'Pauses all recurring debits except those you star.' },
];

export default function CardsPage() {
  return (
    <div className="px-6 lg:px-10 py-8 lg:py-10 flex flex-col gap-10">
      <PageHeader
        eyebrow="Cards · Rewards · Controls"
        title={
          <>
            Two cards. <span className="italic text-gold-100">One quiet life.</span>
          </>
        }
        description="The AORO Black is your daily instrument. The Founders is reserved for moments that deserve it — and is invitation only."
      />

      {/* Card lineup */}
      <div className="grid lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-5"
        >
          <div className="max-w-[460px]">
            <CardShowcase variant="noir" cardholder={CLIENT.name.toUpperCase()} />
          </div>
          <div>
            <div className="flex items-baseline justify-between mb-2">
              <h3 className="display text-2xl text-ivory font-normal tracking-tight">AORO Black</h3>
              <span className="num text-[10px] text-muted tracking-[0.16em] uppercase">Issued · Active</span>
            </div>
            <p className="text-[13px] text-muted leading-relaxed max-w-md">
              Stainless core, gold-tone edge. No foreign loading, instant FX
              at interbank, intelligent rewards. Designed to disappear into the
              moment it pays for.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-5"
        >
          <div className="max-w-[460px]">
            <CardShowcase variant="signature" cardholder={CLIENT.name.toUpperCase()} />
          </div>
          <div>
            <div className="flex items-baseline justify-between mb-2">
              <h3 className="display text-2xl text-ivory font-normal tracking-tight">
                AORO Founders
              </h3>
              <span className="num text-[10px] text-gold-200 tracking-[0.16em] uppercase">By invitation</span>
            </div>
            <p className="text-[13px] text-muted leading-relaxed max-w-md">
              A second instrument issued to a small number of clients. Higher
              concierge priority, deeper rewards, and access to private
              experiences not listed publicly.
            </p>
            <div className="mt-4">
              <Button variant="outline" size="sm">Request consideration</Button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Rewards engine */}
      <section className="grid lg:grid-cols-3 gap-6">
        <Panel accented className="lg:col-span-2 p-7">
          <div className="flex items-end justify-between mb-6 pb-5 border-b border-line">
            <div>
              <Eyebrow gold>Rewards Engine</Eyebrow>
              <h3 className="display text-2xl text-ivory mt-2 font-normal">YTD savings, by category</h3>
            </div>
            <div className="text-right">
              <div className="num text-2xl text-gold-100">$3,240.50</div>
              <div className="num text-[10px] text-muted-strong uppercase tracking-[0.18em] mt-1">Black tier</div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            {REWARD_CATEGORIES.map((c) => (
              <div
                key={c.label}
                className="flex items-center gap-4 p-4 rounded-lg border border-line hover:border-line-strong transition-colors"
              >
                <div className="h-11 w-11 rounded-md bg-gold-300/10 border border-gold-300/30 flex items-center justify-center text-gold-200">
                  <c.icon size={17} strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <div className="text-[13px] text-ivory font-medium">{c.label}</div>
                  <div className="text-[11px] text-muted">{c.rate} cashback</div>
                </div>
                <div className="num text-[14px] text-ivory">{c.ytd}</div>
              </div>
            ))}
          </div>
        </Panel>

        <Panel className="p-7">
          <Eyebrow gold>Tier · Standing</Eyebrow>
          <h3 className="display text-2xl text-ivory mt-2 mb-6 font-normal">Black</h3>

          <div className="space-y-3">
            {[
              ['Annual fee',         'Waived'],
              ['Concierge priority', 'Tier 1'],
              ['Lounge access',      'Unlimited · Global'],
              ['FX',                 'Interbank'],
              ['Insurance',          'AIG Premier'],
              ['Accountant export',  'Real-time'],
            ].map(([k, v]) => (
              <div key={k} className="flex items-center justify-between py-2 border-b border-line/60 last:border-b-0">
                <span className="text-[12px] text-muted">{k}</span>
                <span className="text-[12px] text-ivory">{v}</span>
              </div>
            ))}
          </div>
        </Panel>
      </section>

      {/* Controls */}
      <section>
        <div className="flex items-end justify-between pb-4 mb-6 border-b border-line">
          <div>
            <Eyebrow gold>Card · Controls</Eyebrow>
            <h3 className="display text-2xl text-ivory mt-2 font-normal">Private controls</h3>
          </div>
          <Settings2 size={18} className="text-muted" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {CONTROLS.map((c) => (
            <ControlCard key={c.label} {...c} />
          ))}
          <Panel className="p-5 flex flex-col justify-between bg-gradient-to-br from-gold-300/[0.06] to-transparent border-gold-300/15">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <MapPin size={14} className="text-gold-300" />
                <span className="eyebrow-gold">Travel Mode</span>
              </div>
              <p className="text-[12px] text-muted leading-relaxed">
                Activates 24h before departure: FX routing, lounge passes,
                concierge alerts, and discreet alerts to your relationship manager.
              </p>
            </div>
            <Button variant="gold" size="sm" className="mt-4">
              Configure for Dubai
            </Button>
          </Panel>
        </div>
      </section>
    </div>
  );
}

function ControlCard({
  icon: Icon, label, status, description,
}: typeof CONTROLS[number]) {
  return (
    <Panel className="p-5">
      <div className="flex items-start justify-between mb-3">
        <div className="h-9 w-9 rounded-md border border-line flex items-center justify-center text-muted">
          <Icon size={15} strokeWidth={1.5} />
        </div>
        <StatusToggle status={status} />
      </div>
      <div className="text-[13px] font-medium text-ivory">{label}</div>
      <p className="text-[11.5px] text-muted leading-relaxed mt-1.5">{description}</p>
      <div className="flex items-center gap-1 mt-4 text-[10px] uppercase tracking-[0.18em] text-muted hover:text-ivory cursor-pointer transition-colors">
        Configure <ChevronRight size={11} />
      </div>
    </Panel>
  );
}

function StatusToggle({ status }: { status: 'on' | 'off' | 'auto' }) {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[9px] uppercase tracking-[0.18em] font-semibold border',
        status === 'on'   && 'bg-signal-up/10 text-signal-up border-signal-up/30',
        status === 'off'  && 'bg-white/[0.03] text-muted border-line',
        status === 'auto' && 'bg-gold-300/10 text-gold-200 border-gold-300/30',
      )}
    >
      <span className="h-1 w-1 rounded-full bg-current" />
      {status}
    </div>
  );
}
