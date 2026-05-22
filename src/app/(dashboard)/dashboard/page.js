// app/dashboard/page.js

import OverviewCards from '@/components/dashboard/OverviewCards';
import ActivitySection from '@/components/dashboard/ActivitySection';
import SubscriptionAnalytics from '@/components/dashboard/SubscriptionAnalytics';

export default function DashboardPage() {
  return (
    <div className="px-8 py-8">
      <h1 className="text-xl font-semibold mb-6">Overview</h1>

      <OverviewCards />
      <ActivitySection />
      <SubscriptionAnalytics />
    </div>
  );
}