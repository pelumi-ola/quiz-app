'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Edit } from 'lucide-react';

export default function LoginForm({ onLogin }) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!phoneNumber.trim()) {
      setError('Please enter a phone number');
      return;
    }

    if (!/^\d{10,}$/.test(phoneNumber.replace(/\D/g, ''))) {
      setError('Please enter a valid phone number');
      return;
    }

    setError('');
    onLogin(phoneNumber);
  };

  return (
    <div className="w-full max-w-7xl grid md:grid-cols-2 gap-0 bg-white rounded-3xl overflow-hidden shadow-2xl">
      {/* Left Side - Branding */}
      <div className="bg-gradient-to-br from-purple-400 to-purple-500 p-12 flex flex-col justify-between text-white hidden md:flex">
        <div>
          <div className="flex items-center gap-2 mb-12">
            <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur flex items-center justify-center">
              <span className="text-2xl">🎓</span>
            </div>
            <span className="font-bold text-2xl">Trivia</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Play quizzes, compete with others and earn real money
          </h1>
          <p className="text-lg text-white/90 leading-relaxed">
            Subscribe and turn every correct answer into real earnings. Outperform others and dominate the leaderboard.
          </p>
        </div>

        {/* Decorative elements - these will be replaced with actual images */}
        
      </div>

      {/* Right Side - Form */}
      <div className="p-12 flex flex-col justify-center">
        <h2 className="text-4xl font-bold text-foreground mb-8">Log in</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-3">
              Enter phone number
            </label>
            <Input
              type="tel"
              placeholder="• • • • • • • • • •"
              value={phoneNumber}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, '');
                setPhoneNumber(value);
              }}
              className="w-full px-4 py-3 text-lg border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none"
              maxLength="15"
            />
            {error && (
              <p className="text-red-500 text-sm mt-2">{error}</p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-white py-4 text-lg font-semibold rounded-xl flex items-center justify-center gap-2"
          >
            <Edit size={20} />
            Log in
          </Button>
        </form>
      </div>
    </div>
  );
}
