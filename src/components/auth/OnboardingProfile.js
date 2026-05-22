'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Edit } from 'lucide-react';

export default function OnboardingProfile({ onComplete }) {
  const [fullName, setFullName] = useState('');
  const [selectedAvatar, setSelectedAvatar] = useState(0);

  // Placeholder avatars - in production these would be images from Figma
  const avatars = Array.from({ length: 27 }, (_, i) => ({
    id: i,
    emoji: ['👨', '👩', '🧑', '👨‍🦱', '👩‍🦱', '👨‍🦰', '👩‍🦰', '👨‍🦲', '👩‍🦲'][i % 9],
  }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (fullName.trim()) {
      onComplete();
    }
  };

  const progressPercent = 100; // Step 2 of 2

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-3xl p-8 md:p-12 max-w-2xl w-full shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-foreground">Set profile</h2>
          <span className="text-lg font-semibold text-foreground/70">2/2</span>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-2 bg-gray-200 rounded-full mb-8 overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Full Name Input */}
          <div>
            <label className="block text-base font-semibold text-foreground mb-3">
              Full Name
            </label>
            <Input
              type="text"
              placeholder="Olaitam Joel"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-4 py-3 text-base border-2 border-dashed border-gray-400 rounded-xl focus:border-primary focus:outline-none"
            />
          </div>

          {/* Avatar Selection */}
          <div>
            <label className="block text-base font-semibold text-foreground mb-4">
              Choose Avatar
            </label>
            <div className="grid grid-cols-9 gap-3 mb-4">
              {avatars.map((avatar) => (
                <button
                  key={avatar.id}
                  type="button"
                  onClick={() => setSelectedAvatar(avatar.id)}
                  className={`w-full aspect-square rounded-full flex items-center justify-center text-3xl border-4 transition-all ${
                    selectedAvatar === avatar.id
                      ? 'border-primary shadow-lg scale-110'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                  title={`Avatar ${avatar.id + 1}`}
                >
                  {avatar.emoji}
                </button>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={!fullName.trim()}
            className="w-full bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2"
          >
            <Edit size={20} />
            Play quiz
          </Button>
        </form>
      </div>
    </div>
  );
}
