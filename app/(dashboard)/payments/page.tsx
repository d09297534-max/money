'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftRight, Send, Clock, ShieldCheck } from 'lucide-react';
import { PageHeader } from '@/components/dashboard/PageHeader';
import { Panel } from '@/components/ui/Panel';
import { Button } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Badge } from '@/components/ui/Badge';
import { LedgerList } from '@/components/dashboard/LedgerList';
import { FX_PAIRS } from '@/lib/data';
import { cn, formatNumber } from '@/lib/utils';

const CURRENCIES = ['USD', 'EUR', 'GBP', 'AED', 'CHF', 'JPY'] as const;

type Currency = (typeof CURRENCIES)[number];

const RATES: Record<Currency, Record<Currency, number>> = {
  USD: { USD: 1, EUR: 0.9224, GBP: 0.7905, AED: 3.6725, CHF: 0.8924, JPY: 154.21 },
  EUR: { USD: 1.0842, EUR: 1, GBP: 0.857, AED: 3.9809, CHF: 0.9676, JPY: 167.21 },
  GBP: { USD: 1.265,  EUR: 1.167, GBP: 1, AED: 4.6457, CHF: 1.129,  JPY: 195.10 },
  AED: { USD: 0.2722, EUR: 0.2511, GBP: 0.2153, AED: 1, CHF: 0.243, JPY: 41.99 },
  CHF: { USD: 1.1206, EUR: 1.0335, GBP: 0.8857, AED: 4.1149, CHF: 1, JPY: 172.84 },
  JPY: { USD: 0.00648, EUR: 0.00598, GBP: 0.00513, AED: 0.0238, CHF: 0.00579, JPY: 1 },
};

export default function PaymentsPage() {
  const [from, setFrom] = useState<Currency>('USD');
  const [to,   setTo  ] = useState<Currency>('EUR');
  const [amount, setAmount] = useState<string>('100,000.00');

  const numeric = useMemo(() => {
    const v = parseFloat(amount.replace(/[^0-9.]/g, ''));
    return isFinite(v) ? v : 0;
  }, [amount]);

  const rate = RATES[from][to];
  const converted = numeric * rate;

  const swap = () => {
    setFrom(to);
    setTo(from);
  };

  return (
    <div className="px-6 lg:px-10 py-8 lg:py-10 flex flex-col gap-10">
      <PageHeader
        eyebrow="Payments · Foreign Exchange"
        title={
          <>
            Move capital <span className="italic text-gold-100">at the speed of intent.</span>
          </>
        }
        description="Settled at interbank, routed across our partner network, reconciled in your ledger before you reach the next room."
        actions={<Button variant="gold" size="sm" icon={<Send size={13} />}>Initiate Wire</Button>}
      />

      <div className="grid lg:grid-cols-[1.3fr_1fr] gap-6">
        {/* FX Console */}
        <Panel accented className="p-7 lg:p-9">
          <div className="flex items-end justify-between mb-7 pb-5 border-b border-line">
            <div>
              <Eyebrow gold>FX · Console</Eyebrow>
              <h3 className="display text-2xl text-ivory mt-2 font-normal">Quote &amp; Settle</h3>
            </div>
            <Badge variant="live">Live · Interbank</Badge>
          </div>

          {/* From */}
          <div className="space-y-2 mb-3">
            <label className="eyebrow">You send</label>
            <div className="flex items-stretch border border-line rounded-lg overflow-hidden focus-within:border-gold-300/40 transition-colors">
              <input
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="flex-1 bg-transparent px-5 py-4 num text-2xl text-ivory tracking-tight focus:outline-none"
                inputMode="decimal"
              />
              <CurrencySelect value={from} onChange={setFrom} />
            </div>
          </div>

          <div className="flex justify-center my-4">
            <button
              onClick={swap}
              aria-label="Swap currencies"
              className="h-10 w-10 rounded-full border border-line flex items-center justify-center text-muted hover:text-gold-200 hover:border-gold-300/40 transition-colors"
            >
              <ArrowLeftRight size={14} />
            </button>
          </div>

          {/* To */}
          <div className="space-y-2 mb-7">
            <label className="eyebrow">Recipient receives</label>
            <div className="flex items-stretch border border-line rounded-lg overflow-hidden bg-white/[0.015]">
              <div className="flex-1 px-5 py-4 num text-2xl text-gold-100 tracking-tight">
                {formatNumber(converted)}
              </div>
              <CurrencySelect value={to} onChange={setTo} />
            </div>
          </div>

          {/* Quote summary */}
          <div className="grid sm:grid-cols-3 gap-3 mb-7">
            <QuoteStat label="Rate"        value={`1 ${from} = ${rate.toFixed(4)} ${to}`} />
            <QuoteStat label="Spread"      value="0.04 bps" />
            <QuoteStat label="Settlement"  value={<span className="flex items-center gap-1.5"><Clock size={11} className="text-gold-300" />Same-day</span>} />
          </div>

          <Button variant="gold" size="md" className="w-full">
            Lock Rate · Settle Payment
          </Button>

          <p className="mt-4 text-[11px] text-muted-strong leading-relaxed">
            Quotes guaranteed for 30 seconds. Wires above $1M trigger a discreet
            second-channel confirmation with your relationship manager.
          </p>
        </Panel>

        {/* Live FX board */}
        <Panel className="p-0 overflow-hidden">
          <div className="px-7 pt-6 pb-4 flex items-end justify-between border-b border-line">
            <div>
              <Eyebrow gold>FX · Board</Eyebrow>
              <h3 className="display text-2xl text-ivory mt-2 font-normal">Major Pairs</h3>
            </div>
            <Badge variant="live">Streaming</Badge>
          </div>
          <ul>
            {FX_PAIRS.map((p) => (
              <li
                key={p.pair}
                className="px-7 py-4 flex items-center justify-between border-b border-line/60 last:border-b-0 hover:bg-white/[0.018] transition-colors"
              >
                <div>
                  <div className="text-[13px] font-medium text-ivory">{p.pair}</div>
                  <div className="num text-[10px] text-muted-strong">{p.spread}</div>
                </div>
                <div className="text-right">
                  <div className="num text-[14px] text-ivory">{p.rate.toFixed(4)}</div>
                  <div
                    className={cn(
                      'num text-[10px]',
                      p.change > 0 && 'text-signal-up',
                      p.change < 0 && 'text-signal-down',
                      p.change === 0 && 'text-muted',
                    )}
                  >
                    {p.change > 0 ? '▲' : p.change < 0 ? '▼' : '—'}{' '}
                    {Math.abs(p.change).toFixed(2)}%
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Panel>
      </div>

      {/* Trust strip */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid sm:grid-cols-3 gap-4"
      >
        <TrustItem
          icon={<ShieldCheck size={16} className="text-gold-300" />}
          title="Wire confirmation"
          body="Every outbound payment above $250K passes through a hardware-bound second channel."
        />
        <TrustItem
          icon={<Clock size={16} className="text-gold-300" />}
          title="Same-day settlement"
          body="38 currencies settled across our partner banks before the close of your business day."
        />
        <TrustItem
          icon={<ArrowLeftRight size={16} className="text-gold-300" />}
          title="Interbank pricing"
          body="No retail FX margin. The rate you see is the rate that settles, with a published spread."
        />
      </motion.div>

      {/* Recent ledger */}
      <LedgerList />
    </div>
  );
}

function CurrencySelect({
  value, onChange,
}: { value: Currency; onChange: (v: Currency) => void }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value as Currency)}
      className="appearance-none bg-ink-700 border-l border-line px-5 num text-[14px] text-ivory tracking-[0.18em] uppercase focus:outline-none cursor-pointer"
      style={{ minWidth: 96 }}
    >
      {CURRENCIES.map((c) => <option key={c} value={c}>{c}</option>)}
    </select>
  );
}

function QuoteStat({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="px-4 py-3 rounded-lg border border-line bg-white/[0.015]">
      <div className="eyebrow mb-1.5">{label}</div>
      <div className="text-[12.5px] text-ivory">{value}</div>
    </div>
  );
}

function TrustItem({
  icon, title, body,
}: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <Panel className="p-6">
      <div className="flex items-center gap-2.5 mb-4">
        {icon}
        <span className="eyebrow-gold">{title}</span>
      </div>
      <p className="text-[12.5px] text-muted leading-relaxed">{body}</p>
    </Panel>
  );
}
