'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Edit } from 'lucide-react';

export default function OnboardingTerms({ onNext }) {
  const [agreed, setAgreed] = useState(false);

  const rules = [
    'Tap Yes or No',
    'Don\'t minimize - Session will be cancelled',
    '10 seconds per question - stay focused',
  ];

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-3xl p-8 md:p-12 max-w-md w-full shadow-2xl">
        {/* Icon - This will be replaced with actual image */}
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-400 to-cyan-400 flex items-center justify-center shadow-lg">
            <span className="text-5xl">⭐</span>
          </div>
        </div>

        {/* Content */}
        <h2 className="text-3xl font-bold text-foreground text-center mb-4">
          Play, Learn, Win
        </h2>

        <p className="text-base text-foreground/70 text-center mb-8 leading-relaxed">
          Join millions of people to play games and earn money weekly. Keep on top of the leaderboard and cashout steadily.
        </p>

        {/* Rules Box */}
        <div className="bg-purple-50 rounded-2xl p-6 mb-8">
          <ul className="space-y-3">
            {rules.map((rule, index) => (
              <li key={index} className="flex items-start gap-3 text-foreground">
                <span className="text-primary text-lg mt-0.5">•</span>
                <span className="text-sm">{rule}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Terms Checkbox */}
        <div className="flex items-start gap-3 mb-8">
          <Checkbox
            id="terms"
            checked={agreed}
            onCheckedChange={setAgreed}
            className="mt-1"
          />
          <label htmlFor="terms" className="text-sm text-foreground/80 cursor-pointer">
            By playing this quiz, I agree to the{' '}
            <a href="#" className="text-blue-600 hover:underline">
              terms
            </a>{' '}
            and{' '}
            <a href="#" className="text-blue-600 hover:underline">
              service policy
            </a>{' '}
            of the company.
          </label>
        </div>

        {/* Button */}
        <Button
          onClick={onNext}
          disabled={!agreed}
          className="w-full bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2"
        >
          <img src="/drop 1.svg" alt="icon" className="w-4 h-4 mr-2" />
          Start playing
        </Button>
      </div>
    </div>
  );
}
