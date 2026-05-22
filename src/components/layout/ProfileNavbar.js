'use client';

import Link from 'next/link';
import { Settings, Bell } from 'lucide-react';
import FancyButton from '../ui/FancyButton';

export default function Navbar() {
  return (
    <header className="flex justify-between items-center h-17 px-6 bg-white border-b border-gray-100">
      {/* Empty left side — logo lives in Sidebar */}
      <h1 className="font-bold text-lg text-[#5C259E]">Profile</h1>

      <div className="flex items-center gap-3">
        {/* Play Quiz Button */}
        <FancyButton href="/quiz-questions" className=" w-183px h-48px text-sm">
          Play quiz
        </FancyButton>
        <div className="relative">
          <button className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50">
            <Bell size={16} className="text-gray-700" />
          </button>
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center">
            0
          </span>
        </div>

        {/* Settings icon */}
        <Link href="/settings">
          <button className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50">
            <Settings size={18} className="text-gray-500" />
          </button>
        </Link>
      </div>
    </header>
  );
}