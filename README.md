# AORO MONEY

> The private bank, rewritten as software.

A reference build for a private wealth operating system — the digital fabric beneath a high-net-worth banking experience. Designed in the editorial language of *Monocle*, *Cartier*, and *Bloomberg Terminal*.

---

## Stack

- **Next.js 14** (App Router)
- **TypeScript** — strict
- **Tailwind CSS** — fully tokenized design system
- **Framer Motion** — restrained, premium motion
- **Lucide** — iconography
- **Fraunces** (display) + **JetBrains Mono** (numerals) + system grotesque (UI)

---

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build for production

```bash
npm run build
npm start
```

---

## Architecture

```
app/
├── layout.tsx                  # Root — fonts, body shell
├── page.tsx                    # Marketing landing
├── globals.css                 # Tokens, body bg, hairlines, .num, .display
└── (dashboard)/                # Authenticated routes
    ├── layout.tsx              # Sidebar + ticker + grain
    ├── dashboard/              # Portfolio overview
    ├── cards/                  # Black & Founders cards, rewards
    ├── payments/               # FX console, ledger
    ├── travel/                 # Concierge & itinerary
    └── security/               # Vault, trustees, audit

components/
├── ui/                         # Logo, Button, Eyebrow, Panel, Badge, Kpi
├── shared/                     # CardShowcase, Ticker
├── marketing/                  # Hero, Pillars, DashboardPreview, Faq, Cta…
└── dashboard/                  # PortfolioChart, HoldingsTable, LedgerList,
                                #   MoneyIntel, Signals, sidebars, header

lib/
├── data.ts                     # Synthetic client, portfolio, ledger, FX
└── utils.ts                    # cn, currency formatters, sparkline math

tailwind.config.ts              # Full design system: ink/gold/ivory
                                # Custom shadows, bg images, animations
```

---

## Design tokens

**Colors**

| Token       | Hex        | Use                          |
| ----------- | ---------- | ---------------------------- |
| `ink-950`   | `#040405`  | Page                         |
| `ink-900`   | `#0a0a0d`  | Surface                      |
| `ink-800`   | `#111116`  | Elevated surface             |
| `gold-300`  | `#d5b46a`  | Primary accent               |
| `gold-100`  | `#f1dca5`  | Highlight type               |
| `ivory`     | `#f7f6f3`  | Body text                    |
| `signal-up` | `#17c37b`  | Gains, positive              |
| `signal-down`| `#f35c5c` | Losses                       |

**Typography**

- `font-display` — Fraunces (italic, ss01, ss02). Headlines, hero numerals.
- `font-mono` — JetBrains Mono (tabular). All ledger numerals.
- `font-sans` — System grotesque. Body, UI.

**Utilities**

- `.num` — tabular nums, monospace
- `.display` — Fraunces, tight tracking
- `.eyebrow`, `.eyebrow-gold` — uppercase 0.18em with hairline rule
- `.hairline` — 1px gold-tinted divider
- `.gold-rule-v`, `.gold-rule-h` — vertical/horizontal gold dividers
- `.panel-surface` — base panel background

---

## Pages

**`/`** — Marketing landing. Hero with floating card, six pillars, dashboard preview, FAQ, invitation CTA.

**`/dashboard`** — Portfolio overview. NAV / liquidity / rewards KPIs, animated portfolio curve, lifestyle ecosystem cards, holdings, ledger, money intelligence, signals, security posture.

**`/cards`** — Two-card showcase (Black & Founders), rewards engine, tier standing, card controls.

**`/payments`** — FX console with live currency conversion across 6 pairs, live FX board, recent ledger.

**`/travel`** — Itinerary timeline, lounges global, mobility detail, concierge bar.

**`/security`** — Sovereign posture, four-pillar architecture, trustees, audit trail, emergency channel.

---

## Notes

- All data is synthetic (in `lib/data.ts`). Wire to a real backend at the data-layer.
- Card numbers are always masked to last-4. Card sensitivity is a design constraint, not a feature flag.
- Animations use `cubic-bezier(0.22, 1, 0.36, 1)` consistently.
- The grain overlay is an inline SVG noise pattern — no asset files required.
- Dark mode is the only mode. There is no light mode by design.

---

## Established MMXXIV
