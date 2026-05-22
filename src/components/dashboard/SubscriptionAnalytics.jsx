'use client';

import { Play } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import FancyButton from '../ui/FancyButton';

export default function SubscriptionAnalytics() {
  const data = [
    { name: 'English', value: 63, color: '#E11D48' },
    { name: 'History', value: 24, color: '#8B5CF6' },
    { name: 'Mathematics', value: 13, color: '#06B6D4' },
  ];

  return (
    <section className="grid md:grid-cols-2 gap-6 pb-12">
      {/* Subscription */}
      <div className="bg-white rounded-xl border p-6 shadow-sm">
        <h3 className="font-semibold text-base mb-4">Your Profile details</h3>
        <div className="text-sm mb-6">
          <p className="text-gray-500 mb-1">Phone number: 234 803722448</p>
          <p className="text-gray-500 mb-4">Name : Trella Joe</p>
        </div>
        <FancyButton href="/quizquestions" showArrow={false} icon="/drop 1.svg">
          Play quiz
        </FancyButton>
      </div>

      {/* Analytics */}
      <div className="bg-white rounded-xl border p-6 shadow-sm">
        <h3 className="font-semibold text-base mb-4">Analytics by Topic</h3>
        <div className="flex items-center gap-6">
          {/* Pie chart */}
          <div className="w-[140px] h-[140px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  innerRadius={40}
                  outerRadius={60}
                  paddingAngle={3}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Legend */}
          <div className="flex flex-col gap-2 text-sm">
            {data.map((d) => (
              <div key={d.name} className="flex items-center gap-2">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: d.color }}
                ></span>
                <span className="text-gray-700">
                  {d.name}{' '}
                  <span className="ml-1 text-gray-500">{d.value}%</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
