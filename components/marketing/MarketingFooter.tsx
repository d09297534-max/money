import Link from 'next/link';
import { Logo } from '@/components/ui/Logo';

const COLUMNS = [
  {
    title: 'Wealth',
    links: [
      { href: '/dashboard', label: 'Portfolio' },
      { href: '/payments',  label: 'Payments & FX' },
      { href: '/cards',     label: 'Cards & Rewards' },
    ],
  },
  {
    title: 'Lifestyle',
    links: [
      { href: '/travel', label: 'Concierge' },
      { href: '/travel#lounges', label: 'Lounges' },
      { href: '/travel#mobility', label: 'Mobility' },
    ],
  },
  {
    title: 'Trust',
    links: [
      { href: '/security', label: 'Security' },
      { href: '#regulation', label: 'Regulation' },
      { href: '#disclosures', label: 'Disclosures' },
    ],
  },
  {
    title: 'Office',
    links: [
      { href: '#about', label: 'About AORO' },
      { href: '#press', label: 'Press' },
      { href: '#careers', label: 'Careers' },
      { href: '#contact', label: 'Contact' },
    ],
  },
];

export function MarketingFooter() {
  return (
    <footer className="relative border-t border-line bg-ink-950">
      {/* Top gold rule */}
      <div className="h-px gold-rule-h" />

      <div className="mx-auto max-w-[1440px] px-6 lg:px-10 py-20">
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
          <div className="col-span-2 lg:col-span-4 flex flex-col gap-5">
            <Logo size="md" />
            <p className="text-sm text-muted leading-relaxed max-w-xs">
              A private wealth operating system, built for principals who expect
              their capital to behave like an instrument — precise, discreet, global.
            </p>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-[10px] uppercase tracking-[0.22em] text-muted-strong">
                Established
              </span>
              <span className="font-display text-gold-200 text-sm">MMXXIV</span>
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title} className="lg:col-span-2 flex flex-col gap-4">
              <h4 className="eyebrow-gold">{col.title}</h4>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[13px] text-ivory/80 hover:text-gold-200 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Regulatory disclosures */}
        <div className="border-t border-line pt-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 text-[11px] text-muted-strong leading-relaxed">
          <p className="max-w-2xl">
            AORO MONEY is a brand designation. Banking services are provided by
            partner institutions regulated in their respective jurisdictions.
            Investment products are not deposits and may lose value. Past
            performance is not indicative of future results.
          </p>
          <div className="flex items-center gap-6">
            <span className="num">© AORO {new Date().getFullYear()}</span>
            <Link href="#privacy" className="hover:text-ivory">Privacy</Link>
            <Link href="#terms"   className="hover:text-ivory">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
