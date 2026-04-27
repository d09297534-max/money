import { DashboardSidebar } from '@/components/dashboard/DashboardSidebar';
import { MobileDashboardNav } from '@/components/dashboard/MobileDashboardNav';
import { Ticker } from '@/components/shared/Ticker';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Mobile header */}
      <MobileDashboardNav />

      <div className="flex flex-1">
        <DashboardSidebar />
        <main className="flex-1 min-w-0 flex flex-col">
          <Ticker className="hidden lg:flex" />
          {children}
        </main>
      </div>
    </div>
  );
}
