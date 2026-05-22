"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox"; // optional, or use plain HTML <input type="checkbox" />
import Link from "next/link";

export default function QuizRules({ onStart }) {
  const [dontShow, setDontShow] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#5E2A8833] p-6">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-10 text-center">
        {/* Illustration */}
        <div className="flex justify-center mb-6">
          <img
            src="/quiz-rules.svg"
            alt="Quiz Rules illustration"
            className="w-16 h-16"
          />
        </div>

        {/* Title & Subtitle */}
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Quiz Rules</h2>
        <p className="text-sm text-gray-600 mb-6">
          Follow these simple rules to pass the quiz and become a top player in
          the leaderboard
        </p>

        {/* Loading / Progress Bar */}
        <div className="w-full bg-gray-100 rounded-full h-2 mb-2 overflow-hidden">
          <div className="bg-[#6B21A8] h-full w-2/5 transition-all" />
        </div>
        <p className="text-xs text-gray-500 mb-6">Loading questions…</p>

        {/* Rules List */}
        <div className="bg-[#F9F5FF] border border-[#EADAFB] rounded-xl text-left text-sm text-gray-700 mb-6">
          <ul className="divide-y divide-[#EDE3FB]">
            <li className="flex items-center gap-2 p-3">
              <span className="text-[#6B21A8] text-lg">•</span> Tap Yes or No
            </li>
            <li className="flex items-center gap-2 p-3">
              <span className="text-[#6B21A8] text-lg">•</span> Don’t minimize ‑
              session will be cancelled
            </li>
            <li className="flex items-center gap-2 p-3">
              <span className="text-[#6B21A8] text-lg">•</span> 10 seconds per
              question ‑ stay focused
            </li>
          </ul>
        </div>

        {/* Checkbox */}
        <div className="flex items-center gap-2 mb-8 text-sm text-gray-600 justify-center">
          <Checkbox
            checked={dontShow}
            onCheckedChange={() => setDontShow(!dontShow)}
            className="w-4 h-4 accent-[#6B21A8]"
          />
          <label>Don’t show me again</label>
        </div>

        {/* Button */}

        <Link
          href="/quiz-questions"
          className="w-full h-[64px] bg-[#6B21A8] hover:bg-[#591A90] text-white text-base font-semibold rounded-xl border-b-[7px] border-[#3C1658] flex items-center justify-center gap-2"
        >
          <img src="/drop 1.svg" alt="icon" className="w-4 h-4" />
          I’m ready ‑ Start playing
        </Link>
      </div>
    </div>
  );
}
