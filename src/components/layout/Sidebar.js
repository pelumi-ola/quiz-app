'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, BarChart3, User, Wallet } from 'lucide-react';

export default function Sidebar() {
  const pathname = usePathname();

  const links = [
    { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { label: 'Leaderboard', href: '/profileleaderboard', icon: BarChart3 },
    { label: 'Profile', href: '/profile', icon: User },
    { label: 'Wallet', href: '/wallet', icon: Wallet },
  ];

  return (
    <aside className="fixed left-0 top-0 z-50 h-screen w-[180px] bg-white border-r border-gray-100 flex flex-col">
      {/* Logo */}
      <div className="px-5 py-5 flex items-center gap-2 border-b border-gray-100">
        <img src="/logo-img 1.svg" alt="Trivia" className="w-7 h-7" />
        <span className="font-bold text-base text-[black]">Trivia</span>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col mt-2 text-sm">
        {links.map(({ label, href, icon: Icon }) => {
          const active = pathname === href;
          return (
            <Link
              key={label}
              href={href}
              className={`mx-2 px-4 py-3 flex items-center gap-3 font-medium rounded-lg transition-colors ${
                active
                  ? 'bg-[#F3E8FF] text-[#6B21A8]'
                  : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'
              }`}
            >
              <Icon size={17} className={active ? 'text-[#6B21A8]' : 'text-gray-400'} />
              {label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}