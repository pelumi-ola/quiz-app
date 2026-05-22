'use client';

import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

export default function FeedbackSupport({ onBack }) {
  const [activeTab, setActiveTab] = useState('Support');

  return (
    <div className="max-w-3xl">
      {/* Header */}
      <div className="mb-10">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-3 text-gray-900 hover:text-purple-700 transition-colors mb-8"
        >
          <ArrowLeft size={28} />
          <span className="text-2xl font-bold">Help</span>
        </button>

        <h1 className="text-3xl font-bold text-gray-900">
          Feedback and support
        </h1>

        <p className="text-base text-gray-500 mt-3">
          Help us improve Trivia. Your input matters a lot.
        </p>
      </div>

      {/* Support / Reports Tabs */}
      <div className="bg-gray-100 rounded-xl p-2 grid grid-cols-2 mb-12">
        <button
          type="button"
          onClick={() => setActiveTab('Support')}
          className={`py-3 rounded-lg text-sm font-semibold transition-colors ${
            activeTab === 'Support'
              ? 'bg-[#6B21A8] text-white'
              : 'text-gray-700'
          }`}
        >
          Support
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('Reports')}
          className={`py-3 rounded-lg text-sm font-semibold transition-colors ${
            activeTab === 'Reports'
              ? 'bg-[#5E2A88] text-white'
              : 'text-gray-700'
          }`}
        >
          Reports
        </button>
      </div>

      {activeTab === 'Support' && <SupportForm />}
      {activeTab === 'Reports' && <ReportsEmptyState />}
    </div>
  );
}

function SupportForm() {
  return (
    <div className="space-y-6">
      <FeedbackCard
        image="/bulb.svg"
        title="Suggest a topic"
        description="Propose a new quiz category or topic for future questions."
        placeholder="e.g Geography, Accounting"
        limit="0/50"
      />

      <FeedbackCard
        image="/pin.svg"
        title="Request an improvement"
        description="Tell us what would make the platform better for you"
        placeholder="Tell us about a feature or change you’d love to see..."
        limit="0/1000"
      />

      <FeedbackCard
        image="/redcross.svg"
        title="Report a complain"
        description="Something broken? Let us know so we can fix it fast"
        placeholder="Describe in detailed what happened and what you expected..."
        limit="0/1000"
      />
    </div>
  );
}

function FeedbackCard({ image, title, description, placeholder, limit }) {
  return (
    <div className="border-2 border-black rounded-2xl p-6">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-9 h-9 flex items-center justify-center">
          <img
            src={image}
            alt={title}
            className="w-9 h-9 object-contain"
          />
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-500 mt-2">{description}</p>
        </div>
      </div>

      <input
        type="text"
        placeholder={placeholder}
        className="w-full h-12 border border-gray-200 rounded-lg px-4 text-sm outline-none focus:border-[#6B21A8]"
      />

      <div className="flex items-center justify-between mt-3">
        <p className="text-sm text-gray-500">{limit}</p>

        <button
          type="button"
          className="bg-gray-300 text-white text-sm font-semibold px-10 py-3 rounded-lg border-b-[4px] border-b-gray-700"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

function ReportsEmptyState() {
  return (
    <div className="border border-gray-200 rounded-2xl min-h-[360px] flex flex-col items-center justify-center text-center">
      <img
        src="/empty post.svg"
        alt="No reports"
        className="w-20 h-20 object-contain mb-6"
      />

      <h3 className="text-2xl font-bold text-gray-900">
        No reports yet!!
      </h3>

      <p className="text-sm text-gray-500 mt-4 max-w-md leading-6">
        Write and submit a topic, improvement or bug and you’ll see it here with
        our response.
      </p>

      <button
        type="button"
        className="mt-8 flex items-center gap-2 bg-[#5E2A88] text-white text-sm font-semibold px-6 py-3 rounded-xl border-b-[4px] border-b-[#3C1658]"
      >
        <img src="/drop 1.svg" alt="icon" className="w-4 h-4" />
        Give a feedback
      </button>
    </div>
  );
}