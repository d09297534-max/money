// Centralised mock data so the entire preview reads as one consistent client account.

export interface Holding {
  name: string;
  symbol: string;
  category: string;
  price: string;
  value: string;
  change: number; // pct
}

export interface LedgerEntry {
  merchant: string;
  category: string;
  date: string;
  amount: number; // negative = outflow
  currency: 'USD' | 'EUR' | 'GBP' | 'AED';
  icon: 'apple' | 'plane' | 'dividend' | 'hotel' | 'car' | 'wire' | 'rewards' | 'restaurant';
}

export const CLIENT = {
  name: 'James Anderson',
  initials: 'JA',
  tier: 'Black',
  memberSince: 'MMXXIV',
  relationshipManager: 'Eleanor Moreau',
  privateId: '884-AX-99',
} as const;

export const PORTFOLIO = {
  totalNAV: 14_245_600,
  liquidity: 1_150_400,
  rewards: 3_240.5,
  unrealizedPnL: 840_250,
  ytdReturn: 12.4,
  benchmarkReturn: 8.1,
} as const;

// Smooth, realistic-looking YTD curve (12 months, ascending with volatility)
export const PORTFOLIO_CURVE: number[] = [
  100, 99.4, 101.2, 100.8, 103.6, 105.1,
  104.2, 107.8, 109.4, 108.9, 111.7, 112.4,
];

export const HOLDINGS: Holding[] = [
  { name: 'Vanguard S&P 500 ETF',        symbol: 'VOO',  category: 'US Equity',        price: '$495.20',  value: '$6,190,000.00', change: 1.24 },
  { name: 'iShares Core MSCI World',     symbol: 'IWDA', category: 'Global Equity',    price: '$104.85',  value: '$2,180,000.00', change: 0.81 },
  { name: 'AORO Global Liquidity Fund',  symbol: 'AGLF', category: 'EUR Money Market', price: '€1.0000',  value: '€2,450,000.00', change: 0.04 },
  { name: 'US Tactical Reserve',         symbol: 'USTR', category: 'Protected Cash',   price: '$1.0000',  value: '$415,000.00',   change: 0.02 },
  { name: 'BlackRock Gold Trust',        symbol: 'IAU',  category: 'Commodities',      price: '$48.12',   value: '$390,000.00',   change: 0.32 },
  { name: 'AORO Private Credit I',       symbol: 'APC1', category: 'Alternatives',     price: '$1,024.10', value: '$615,000.00',  change: 0.18 },
];

export const LEDGER: LedgerEntry[] = [
  { merchant: 'Apple Store, Fifth Avenue',     category: 'Electronics',         date: 'Today',     amount: -2_199.00, currency: 'USD', icon: 'apple' },
  { merchant: 'Morgan Stanley — Q3 Dividend',  category: 'Investment Income',   date: 'Yesterday', amount: +18_500.00, currency: 'USD', icon: 'dividend' },
  { merchant: 'Emirates First Class, EK202',   category: 'Travel',              date: 'Apr 24',    amount: -8_250.00, currency: 'USD', icon: 'plane' },
  { merchant: 'Hôtel de Crillon, Paris',       category: 'Hospitality',         date: 'Apr 22',    amount: -4_180.00, currency: 'EUR', icon: 'hotel' },
  { merchant: 'Wire — Davies & Co. Solicitors',category: 'Outbound Wire',       date: 'Apr 21',    amount: -125_000.00,currency: 'GBP', icon: 'wire' },
  { merchant: 'AORO Rewards Adjustment',       category: 'Cashback',            date: 'Apr 20',    amount: +312.40,    currency: 'USD', icon: 'rewards' },
];

export const FX_PAIRS = [
  { pair: 'EUR / USD', rate: 1.0842, change: -0.15, spread: '0.04 bps' },
  { pair: 'GBP / USD', rate: 1.2650, change: +0.05, spread: '0.06 bps' },
  { pair: 'USD / AED', rate: 3.6725, change:  0.00, spread: '0.02 bps' },
  { pair: 'USD / CHF', rate: 0.8924, change: -0.08, spread: '0.05 bps' },
  { pair: 'USD / JPY', rate: 154.21, change: +0.22, spread: '0.04 bps' },
];

export const TICKER_ITEMS = [
  { label: 'S&P 500',    value: '5,420.25',   delta: +1.20 },
  { label: 'NASDAQ',     value: '17,850.10',  delta: +1.80 },
  { label: 'DOW JONES',  value: '39,150.33',  delta: +0.80 },
  { label: 'FTSE 100',   value: '8,240.15',   delta: -0.40 },
  { label: 'DAX 40',     value: '18,450.20',  delta: +0.50 },
  { label: 'NIKKEI 225', value: '38,900.50',  delta: +2.10 },
  { label: 'EUR/USD',    value: '1.0842',     delta: -0.15 },
  { label: 'GBP/USD',    value: '1.2650',     delta: +0.05 },
  { label: 'GOLD/OZ',    value: '2,391.10',   delta: +0.30 },
  { label: 'BRENT',      value: '$82.40',     delta: -1.10 },
  { label: 'BTC/USD',    value: '68,450.00',  delta: +2.40 },
];

export interface NavItem {
  href: string;
  label: string;
  icon: string; // lucide icon name
}

export const NAV_GROUPS: { title: string; items: NavItem[] }[] = [
  {
    title: 'Wealth & Banking',
    items: [
      { href: '/dashboard', label: 'Portfolio',        icon: 'LayoutGrid' },
      { href: '/payments',  label: 'Payments & FX',    icon: 'ArrowLeftRight' },
      { href: '/cards',     label: 'Cards & Rewards',  icon: 'CreditCard' },
    ],
  },
  {
    title: 'Lifestyle',
    items: [
      { href: '/travel',    label: 'Travel Concierge', icon: 'Plane' },
    ],
  },
  {
    title: 'Trust',
    items: [
      { href: '/security',  label: 'Security & Vault', icon: 'Shield' },
    ],
  },
];
