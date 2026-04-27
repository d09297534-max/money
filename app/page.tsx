import { MarketingNav } from '@/components/marketing/MarketingNav';
import { Hero } from '@/components/marketing/Hero';
import { StatsStrip } from '@/components/marketing/StatsStrip';
import { Pillars } from '@/components/marketing/Pillars';
import { DashboardPreview } from '@/components/marketing/DashboardPreview';
import { Faq } from '@/components/marketing/Faq';
import { Cta } from '@/components/marketing/Cta';
import { MarketingFooter } from '@/components/marketing/MarketingFooter';

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-ink-950 text-ivory antialiased">
      <MarketingNav />

      <main>
        <Hero />
        <StatsStrip />
        <Pillars />
        <DashboardPreview />
        <Faq />
        <Cta />
      </main>

      <MarketingFooter />
    </div>
  );
}
