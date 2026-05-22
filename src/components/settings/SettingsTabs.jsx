'use client';

import { Lock, Bell, ShieldOff, CircleHelp } from 'lucide-react';

export default function SettingsTabs({ activeTab, setActiveTab }) {
  const tabs = [
    {
      label: 'Account',
      icon: Lock,
    },
    {
      label: 'Notifications',
      icon: Bell,
    },
    {
      label: 'Privacy',
      icon: ShieldOff,
    },
    {
      label: 'Help',
      icon: CircleHelp,
    },
  ];

  return (
    <div className="flex items-center gap-4 mb-12">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.label;

        return (
          <button
            key={tab.label}
            type="button"
            onClick={() => setActiveTab(tab.label)}
            className={`flex items-center gap-2 px-5 py-3 rounded-lg border text-sm font-semibold transition-colors ${
              isActive
                ? 'bg-[#6B21A8] border-[#6B21A8] text-white'
                : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Icon size={18} />
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}