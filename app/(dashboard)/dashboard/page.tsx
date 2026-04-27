'use client';

import { motion } from 'framer-motion';
import { Plus, Send, ArrowLeftRight, Plane, Users, Ticket } from 'lucide-react';
import { PageHeader } from '@/components/dashboard/PageHeader';
import { Kpi, Panel } from '@/components/ui/Panel';
import { PortfolioChart } from '@/components/dashboard/PortfolioChart';
import { HoldingsTable } from '@/components/dashboard/HoldingsTable';
import { LedgerList } from '@/components/dashboard/LedgerList';
import { MoneyIntel } from '@/components/dashboard/MoneyIntel';
import { Signals } from '@/components/dashboard/Signals';
import { CardShowcase } from '@/components/shared/CardShowcase';
import { Button } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { CLIENT, PORTFOLIO } from '@/lib/data';
import { formatCurrency } from '@/lib/utils';

const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.06 } },
};
const item = {
  hidden: { opacity: 0, y: 14 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function DashboardPage() {
  return (
    <div className="px-6 lg:px-10 py-8 lg:py-10 flex-1 grid lg:grid-cols-[minmax(0,1fr)_380px] gap-8 lg:gap-10">
      {/* MAIN COLUMN */}
      <div className="min-w-0 flex flex-col gap-8">
        <PageHeader
          eyebrow={`Welcome back, ${CLIENT.name.split(' ')[0]}`}
          title={
            <>
              Your wealth, in <span className="italic text-gold-100">one quiet place.</span>
            </>
          }
          description={`As of this morning. Eleanor Moreau is your relationship manager today.`}
          actions={
            <>
              <Button variant="outline" size="sm" icon={<Plus size={13} />}>Add Funds</Button>
              <Button variant="outline" size="sm" icon={<Send size={13} />}>Wire Transfer</Button>
              <Button variant="gold"    size="sm" icon={<ArrowLeftRight size={13} />}>FX Exchange</Button>
            </>
          }
        />

        {/* KPIs */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          <motion.div variants={item}>
            <Kpi
              label="Net Asset Value"
              value={formatCurrency(PORTFOLIO.totalNAV, 'USD', { maximumFractionDigits: 0 })}
              footerLeft="Unrealised P&L"
              footerRight={<span className="text-signal-up">+{formatCurrency(PORTFOLIO.unrealizedPnL, 'USD', { maximumFractionDigits: 0 })}</span>}
              accent="gold"
            />
          </motion.div>
          <motion.div variants={item}>
            <Kpi
              label="Available Liquidity"
              value={formatCurrency(PORTFOLIO.liquidity, 'USD', { maximumFractionDigits: 0 })}
              footerLeft="Across 4 currencies"
              footerRight="USD · EUR · GBP · AED"
            />
          </motion.div>
          <motion.div variants={item}>
            <Kpi
              label="Rewards · YTD"
              value={formatCurrency(PORTFOLIO.rewards, 'USD')}
              footerLeft="Black tier benefits"
              footerRight={<span className="text-gold-200">Active</span>}
            />
          </motion.div>
        </motion.div>

        {/* Chart */}
        <motion.div variants={item} initial="hidden" animate="show">
          <PortfolioChart />
        </motion.div>

        {/* Lifestyle ecosystem */}
        <div className="flex items-end justify-between pb-3 border-b border-line">
          <div>
            <Eyebrow gold>Lifestyle</Eyebrow>
            <h2 className="display text-2xl text-ivory mt-2 font-normal">Your Ecosystem</h2>
          </div>
          <span className="num text-[10px] text-muted-strong tracking-[0.18em] uppercase">
            Integrated · Real-time
          </span>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <EcoCard
            kicker="Upcoming Trip"
            icon={<Plane size={15} className="text-gold-300" strokeWidth={1.5} />}
            title="Dubai · UAE"
            body="Sep 18 – 22. Travel Mode is active with automatic FX routing and concierge on standby."
            items={[
              { label: 'Global eSIM',    value: 'Connected' },
              { label: 'Lounge access',  value: 'Confirmed' },
              { label: 'Concierge',      value: 'On standby' },
            ]}
          />
          <EcoCard
            kicker="Family Office"
            icon={<Users size={15} className="text-gold-300" strokeWidth={1.5} />}
            title="Shared Vaults"
            body="Maya's card balance is reconciled in real time, with rules synced across the family."
            items={[
              { label: "Maya's card",    value: '$245.00' },
              { label: 'Reading task',   value: '+$20 pending' },
              { label: 'Schedule',       value: 'Weekly · Sun' },
            ]}
          />
          <EcoCard
            kicker="Events"
            icon={<Ticket size={15} className="text-gold-300" strokeWidth={1.5} />}
            title="Coldplay · Paris"
            body="VIP suite secured for two guests, with premium transfer and a discreet entry route."
            items={[
              { label: 'VIP tickets',    value: '2 confirmed' },
              { label: 'Transport',      value: 'Uber Black' },
              { label: 'Access QR',      value: 'In wallet' },
            ]}
          />
        </div>

        {/* Tables */}
        <div className="grid lg:grid-cols-2 gap-4 pt-4">
          <HoldingsTable limit={4} />
          <LedgerList    limit={4} />
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <aside className="space-y-4 lg:sticky lg:top-[60px] lg:self-start">
        <div className="relative">
          <CardShowcase variant="noir" cardholder={CLIENT.name.toUpperCase()} />
          <div className="absolute -top-2 right-3 px-2.5 py-1 rounded-full text-[9px] uppercase tracking-[0.22em] bg-ink-950 border border-gold-300/30 text-gold-200">
            Signature
          </div>
        </div>
        <MoneyIntel />
        <Signals />
        <Panel className="p-5">
          <div className="eyebrow-gold mb-3">Security · Status</div>
          <p className="text-[12px] text-muted leading-relaxed mb-4">
            All devices trusted. Card routing protected. Geo-controls active for{' '}
            <span className="text-ivory">Europe</span> and{' '}
            <span className="text-ivory">UAE</span>.
          </p>
          <Button variant="gold" size="sm" className="w-full">
            Open Private Controls
          </Button>
        </Panel>
      </aside>
    </div>
  );
}

interface EcoCardProps {
  kicker: string;
  icon: React.ReactNode;
  title: string;
  body: string;
  items: { label: string; value: string }[];
}

function EcoCard({ kicker, icon, title, body, items }: EcoCardProps) {
  return (
    <Panel className="group p-5 hover:border-gold-300/20 hover:translate-y-[-2px] transition-all duration-500">
      <div className="flex items-center justify-between mb-4">
        <span className="eyebrow">{kicker}</span>
        {icon}
      </div>
      <h3 className="display text-lg text-ivory mb-2 font-normal tracking-tight">{title}</h3>
      <p className="text-[12px] text-muted leading-relaxed mb-4">{body}</p>
      <div className="grid gap-2 pt-3 border-t border-line">
        {items.map((it) => (
          <div key={it.label} className="flex items-center justify-between text-[11.5px]">
            <span className="text-muted">{it.label}</span>
            <span className="text-ivory">{it.value}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 text-[11px] uppercase tracking-[0.16em] text-gold-300 flex items-center gap-1">
        Open <span className="transition-transform group-hover:translate-x-0.5">→</span>
      </div>
    </Panel>
  );
}
