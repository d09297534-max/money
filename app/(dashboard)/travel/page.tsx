'use client';

import { motion } from 'framer-motion';
import {
  Plane, Hotel, Car, MapPin, Wifi, MessageCircle, Phone, Calendar, ChevronRight,
} from 'lucide-react';
import { PageHeader } from '@/components/dashboard/PageHeader';
import { Panel } from '@/components/ui/Panel';
import { Button } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Badge } from '@/components/ui/Badge';

const ITINERARY = [
  { time: '14:20', date: 'Sep 18', title: 'EK202 · NYC → DXB',     detail: 'Emirates First · Suite 1A · Onboard shower booked',     icon: Plane,  status: 'Confirmed' },
  { time: '08:55', date: 'Sep 19', title: 'Burj Al Arab',           detail: 'Royal Suite · Late check-in · Butler briefed',          icon: Hotel,  status: 'Confirmed' },
  { time: '11:30', date: 'Sep 19', title: 'Mercedes Maybach S680',  detail: 'Standing service · Driver Hassan · Routed via Marina', icon: Car,    status: 'On standby' },
  { time: '20:00', date: 'Sep 21', title: 'Nobu Atlantis · Private', detail: '4 guests · Chef’s tasting · Allergens noted',          icon: Calendar,status: 'Reserved' },
];

const LOUNGES = [
  { airport: 'JFK · Terminal 4',  brand: 'Emirates First Class Lounge',     access: 'Granted'  },
  { airport: 'DXB · Terminal 3',  brand: 'Emirates Skywards Concourse A',   access: 'Granted'  },
  { airport: 'CDG · Terminal 2E', brand: 'Air France La Première',          access: 'Granted'  },
  { airport: 'LHR · Terminal 5',  brand: 'British Airways Concorde Room',   access: 'On request' },
];

export default function TravelPage() {
  return (
    <div className="px-6 lg:px-10 py-8 lg:py-10 flex flex-col gap-10">
      <PageHeader
        eyebrow="Concierge · Travel"
        title={
          <>
            Travel as you{' '}
            <span className="italic text-gold-100">should</span> travel.
          </>
        }
        description="A standing concierge attached to your account — booking, briefing and recovering your itinerary in real time, with discretion as a default."
        actions={
          <>
            <Button variant="outline" size="sm" icon={<MessageCircle size={13} />}>Message Eleanor</Button>
            <Button variant="gold" size="sm" icon={<Phone size={13} />}>Call concierge</Button>
          </>
        }
      />

      {/* Hero panel — current trip */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-2xl border border-line"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 30% 10%, rgba(213,180,106,0.18), transparent 60%), linear-gradient(180deg, rgba(14,14,18,0.96), rgba(8,8,12,0.99))',
        }}
      >
        <div
          aria-hidden
          className="absolute inset-0 bg-grain opacity-[0.04] mix-blend-overlay"
        />

        <div className="relative grid lg:grid-cols-[1.2fr_1fr] gap-0">
          <div className="p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-line">
            <Eyebrow gold>Current itinerary</Eyebrow>
            <h2 className="display text-4xl lg:text-[52px] text-ivory mt-5 mb-4 font-light leading-[1.05] tracking-display">
              Dubai · UAE
              <span className="block text-gold-100 italic font-light text-3xl lg:text-4xl mt-1">
                September 18 — 22
              </span>
            </h2>
            <p className="text-[14px] text-muted leading-relaxed max-w-md mb-7">
              Travel Mode is active. FX is auto-routing your AED settlements,
              your concierge has confirmed every leg, and your card has been
              briefed on regional preferences.
            </p>
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="up">Travel Mode active</Badge>
              <Badge variant="gold">Concierge briefed</Badge>
              <Badge variant="live">eSIM connected</Badge>
            </div>
          </div>

          <div className="p-8 lg:p-12 grid grid-cols-3 gap-6 content-start">
            <Stat label="Days"     value="04" />
            <Stat label="Flights"  value="02" />
            <Stat label="Stays"    value="01" />
            <Stat label="Mobility" value="Maybach" valueClass="text-base" />
            <Stat label="Lounges"  value="04 confirmed" valueClass="text-base" />
            <Stat label="Spend"    value="$14.2K"  />
          </div>
        </div>
      </motion.div>

      {/* Itinerary timeline */}
      <section>
        <div className="flex items-end justify-between pb-4 mb-6 border-b border-line">
          <div>
            <Eyebrow gold>Itinerary</Eyebrow>
            <h3 className="display text-2xl text-ivory mt-2 font-normal">Every leg, briefed</h3>
          </div>
          <span className="num text-[10px] tracking-[0.16em] uppercase text-muted">{ITINERARY.length} appointments</span>
        </div>

        <div className="relative">
          {/* Vertical hairline */}
          <div
            aria-hidden
            className="absolute left-[18px] sm:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-gold-300/30 to-transparent"
          />

          <ul className="space-y-3">
            {ITINERARY.map((leg, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="relative pl-10 sm:pl-14"
              >
                {/* Dot */}
                <div className="absolute left-[14px] sm:left-[22px] top-5 h-2 w-2 rounded-full bg-gold-300 ring-4 ring-ink-950" />

                <Panel className="p-5 hover:border-gold-300/20 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="num text-[11px] text-muted-strong w-20 flex-shrink-0">
                      <div className="text-ivory text-[13px]">{leg.time}</div>
                      <div className="uppercase tracking-[0.16em] mt-0.5">{leg.date}</div>
                    </div>
                    <div className="h-9 w-9 rounded-md bg-gold-300/10 border border-gold-300/30 flex items-center justify-center text-gold-200 flex-shrink-0">
                      <leg.icon size={15} strokeWidth={1.5} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[13.5px] font-medium text-ivory">{leg.title}</div>
                      <div className="text-[11.5px] text-muted mt-0.5">{leg.detail}</div>
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.18em] text-gold-200 flex-shrink-0">
                      {leg.status}
                    </span>
                  </div>
                </Panel>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Mobility & lounges */}
      <div className="grid lg:grid-cols-2 gap-6">
        <Panel className="p-7">
          <div className="flex items-center gap-2 mb-5">
            <Wifi size={14} className="text-gold-300" />
            <span className="eyebrow-gold">Lounges · Global</span>
          </div>
          <h3 className="display text-xl text-ivory mb-6 font-normal">Confirmed access</h3>
          <ul className="space-y-3">
            {LOUNGES.map((l) => (
              <li
                key={l.airport}
                className="flex items-center justify-between p-3 rounded-md border border-line hover:border-line-strong transition-colors"
              >
                <div>
                  <div className="text-[13px] text-ivory">{l.brand}</div>
                  <div className="text-[11px] text-muted mt-0.5">{l.airport}</div>
                </div>
                <span
                  className={`text-[10px] uppercase tracking-[0.18em] ${l.access === 'Granted' ? 'text-signal-up' : 'text-gold-200'}`}
                >
                  {l.access}
                </span>
              </li>
            ))}
          </ul>
        </Panel>

        <Panel className="p-7">
          <div className="flex items-center gap-2 mb-5">
            <MapPin size={14} className="text-gold-300" />
            <span className="eyebrow-gold">Mobility · Standing service</span>
          </div>
          <h3 className="display text-xl text-ivory mb-2 font-normal">
            Mercedes Maybach S680
          </h3>
          <p className="text-[12.5px] text-muted leading-relaxed mb-6">
            Standing for 96 hours. Driver Hassan is briefed on your preferences,
            pickups, and the side door at the Burj. He will text on arrival.
          </p>

          <div className="grid grid-cols-2 gap-3">
            {[
              ['Vehicle',     'Maybach S680'],
              ['Driver',      'Hassan A.'],
              ['Plate',       'O 88 884'],
              ['Standing',    '4 days'],
            ].map(([k, v]) => (
              <div key={k} className="p-3 rounded-md border border-line">
                <div className="eyebrow mb-1">{k}</div>
                <div className="text-[12.5px] text-ivory">{v}</div>
              </div>
            ))}
          </div>

          <Button variant="outline" size="sm" className="mt-6 w-full" iconRight={<ChevronRight size={13} />}>
            View vehicle log
          </Button>
        </Panel>
      </div>

      {/* Concierge bar */}
      <Panel accented className="p-7 lg:p-10">
        <div className="grid lg:grid-cols-[1fr_auto] gap-6 items-center">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-10 w-10 rounded-full bg-gold-300/15 border border-gold-300/30 flex items-center justify-center text-[11px] font-semibold text-gold-100">
                EM
              </div>
              <div>
                <div className="text-[13px] text-ivory font-medium">Eleanor Moreau</div>
                <div className="text-[11px] text-muted">Senior Concierge · Available now</div>
              </div>
            </div>
            <h3 className="display text-2xl text-ivory mt-2 font-normal max-w-lg leading-snug">
              Anything else for Dubai?{' '}
              <span className="italic text-gold-100">I have you.</span>
            </h3>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <Button variant="outline" size="md" icon={<MessageCircle size={14} />}>Message</Button>
            <Button variant="gold"    size="md" icon={<Phone size={14} />}>Call</Button>
          </div>
        </div>
      </Panel>
    </div>
  );
}

function Stat({
  label, value, valueClass,
}: { label: string; value: string; valueClass?: string }) {
  return (
    <div>
      <div className="eyebrow mb-2">{label}</div>
      <div className={`num text-2xl text-ivory tracking-tight ${valueClass ?? ''}`}>{value}</div>
    </div>
  );
}
