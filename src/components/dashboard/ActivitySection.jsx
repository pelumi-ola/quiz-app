'use client';

import { useState } from 'react';
import FancyButton from '../ui/FancyButton';

export default function ActivitySection() {
  const [activeTab, setActiveTab] = useState('English');
  const tabs = ['English', 'Mathematics', 'History'];

  // Mock/demo data
  const mockData = {
    English: [
      {
        type: '₦100 • 5 questions',
        date: 'May 14, 2026 • 9:00 AM',
        points: 24,
        duration: '15s',
      },
      {
        type: '₦100 • 5 questions',
        date: 'May 14, 2026 • 9:00 AM',
        points: 24,
        duration: '40s',
      },
      {
        type: '₦100 • 5 questions',
        date: 'May 14, 2026 • 9:00 AM',
        points: 24,
        duration: '40s',
      },
      {
        type: '₦100 • 5 questions',
        date: 'May 14, 2026 • 9:00 AM',
        points: 24,
        duration: '40s',
      },
      {
        type: '₦100 • 5 questions',
        date: 'May 14, 2026 • 9:00 AM',
        points: 24,
        duration: '40s',
      },
    ],
    Mathematics: [],
    History: [],
  };

  const currentData = mockData[activeTab];

  return (
    <section className="mb-10">
      <h3 className="font-semibold text-xl mb-3">Activity</h3>

      {/* Tabs */}
      <div className="flex gap-2 p-2 bg-gray-100 rounded-lg overflow-hidden w-full text-sm mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-2 ${
              activeTab === tab
                ? 'bg-white rounded-sm font-semibold text-[black]'
                : 'text-gray-600'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

        

      {/* Activity Table or Empty State */}
      {currentData.length > 0 ? (
        <div className="bg-white rounded-xl border shadow-sm overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-700">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3 font-medium text-gray-500">Subscription Type</th>
                <th className="px-6 py-3 font-medium text-gray-500">Date</th>
                <th className="px-6 py-3 font-medium text-gray-500">Points</th>
                <th className="px-6 py-3 font-medium text-gray-500">Duration</th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((item, idx) => (
                <tr
                  key={idx}
                  className="border-b last:border-0 hover:bg-gray-50 transition"
                >
                  <td className="px-6 py-3">{item.type}</td>
                  <td className="px-6 py-3">{item.date}</td>
                  <td className="px-6 py-3">
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-blue-500" />
                      {item.points}
                    </span>
                  </td>
                  <td className="px-6 py-3">{item.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination mock */}
          <div className="flex justify-between items-center px-6 py-3 text-sm text-gray-500">
            <button className="text-gray-400 hover:text-gray-700">← Previous</button>
            <div className="space-x-2">
              {[1, 2, 3, 4, 5].map((page) => (
                <button
                  key={page}
                  className={`px-2 ${
                    page === 1 ? 'font-semibold text-[#6B21A8]' : ''
                  }`}
                >
                  {page}
                </button>
              ))}
              <span>...</span>
              <button>10</button>
            </div>
            <button className="text-gray-400 hover:text-gray-700">Next →</button>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-xl border py-16 text-center shadow-sm text-gray-500">
          <img
            src="/folder.svg"
            alt="Empty folder"
            className="w-16 h-16 mx-auto mb-4 opacity-80"
          />
          <p className="font-semibold mb-1 text-gray-700">No activity yet!!</p>
          <p className="text-sm mb-6">
            Start playing to see your activity here.
          </p>
        {/* Play Quiz */}
<FancyButton
  href="/quiz-questions"
  showArrow={false}
  icon="/drop 1.svg"
>
  Play quiz
</FancyButton>
        </div>
      )}
    </section>
  );
}