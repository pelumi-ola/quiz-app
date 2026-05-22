'use client';

import Sidebar from './Sidebar';
import Navbar from './Navbar';

export default function ProfileLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
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