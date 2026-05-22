import Sidebar from '@/components/layout/Sidebar';
import Navbar from '@/components/layout/Navbar';

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-white">
      <Sidebar />

      <div className="ml-[180px] flex min-h-screen flex-col">
        <Navbar />

        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}