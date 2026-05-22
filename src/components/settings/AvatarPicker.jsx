'use client';

import { useState } from 'react';

export default function AvatarPicker() {
  const avatarSeeds = [
    'Trella',
    'Ada',
    'Tomi',
    'Lola',
    'Mira',
    'Zara',
    'Bola',
    'Tunde',
    'Seyi',
    'Kemi',
    'Femi',
    'Amaka',
    'Rita',
    'David',
    'Grace',
    'Joy',
    'Victor',
    'Sarah',
    'James',
    'Faith',
    'Blessing',
    'Daniel',
    'Peace',
    'Mary',
    'Samuel',
    'Queen',
    'Hope',
    'John',
    'Esther',
    'Michael',
    'Ruth',
    'Peter',
    'Mercy',
    'Paul',
    'Deborah',
  ];

  const getAvatarUrl = (seed) =>
    `https://api.dicebear.com/7.x/adventurer/svg?seed=${encodeURIComponent(seed)}`;

  const [selectedAvatar, setSelectedAvatar] = useState('Trella');

  return (
    <div>
      {/* Default Avatar */}
      <div className="flex items-center gap-6 mb-8">
        <p className="text-sm text-gray-600">Default avatar:</p>

        <div className="w-12 h-12 rounded-full bg-purple-100 overflow-hidden shadow-lg">
          <img
            src={getAvatarUrl(selectedAvatar)}
            alt="Default avatar"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Avatar Grid */}
      <div className="border border-gray-200 rounded-2xl px-5 py-5">
        <div className="flex flex-wrap gap-4">
          {avatarSeeds.map((seed) => {
            const isSelected = selectedAvatar === seed;

            return (
              <button
                key={seed}
                onClick={() => setSelectedAvatar(seed)}
                className={`w-11 h-11 rounded-full overflow-hidden border-2 transition-all ${
                  isSelected
                    ? 'border-[#6B21A8] ring-4 ring-purple-100'
                    : 'border-black hover:border-[#6B21A8]'
                }`}
              >
                <img
                  src={getAvatarUrl(seed)}
                  alt={seed}
                  className="w-full h-full object-cover"
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}   