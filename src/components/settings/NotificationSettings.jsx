'use client';

import { useState } from 'react';

export default function NotificationSettings() {
  const [settings, setSettings] = useState({
    pushNotifications: true,
    quizReminders: true,
    leaderboardUpdates: true,
  });

  const toggleSetting = (key) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const notificationOptions = [
    {
      key: 'pushNotifications',
      title: 'Push notifications',
      description: 'Get instant notifications on your device',
    },
    {
      key: 'quizReminders',
      title: 'Quiz reminders',
      description: 'Daily reminders to keep your streak going',
    },
    {
      key: 'leaderboardUpdates',
      title: 'Leaderboard updates',
      description: 'Notify when your rank changes',
    },
  ];

  return (
    <div className="max-w-3xl space-y-6">
      {notificationOptions.map((option) => {
        const isActive = settings[option.key];

        return (
          <div
            key={option.key}
            className="border border-gray-200 rounded-2xl px-6 py-6 flex items-center justify-between"
          >
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                {option.title}
              </h3>

              <p className="text-sm text-gray-500 mt-2">
                {option.description}
              </p>
            </div>

            <button
              type="button"
              onClick={() => toggleSetting(option.key)}
              className={`relative w-14 h-7 rounded-full transition-colors ${
                isActive ? 'bg-[#6B21A8]' : 'bg-gray-300'
              }`}
            >
              <span
                className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-all ${
                  isActive ? 'left-8' : 'left-1'
                }`}
              />
            </button>
          </div>
        );
      })}
    </div>
  );
}