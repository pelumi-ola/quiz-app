'use client';

import { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import SettingsSection from './SettingsSection';
import AvatarPicker from './AvatarPicker';

export default function AccountSettings() {
  const [fullName, setFullName] = useState('Trella Olu');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSaveName = () => {
    console.log('Saved name:', fullName);

    setShowSuccess(true);

    // Optional: hide the message after 3 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  return (
    <div className="max-w-3xl">
      <SettingsSection title="Full name">
        <p className="text-sm text-gray-500 mb-5">
          You can change your name every two weeks
        </p>

        <div className="flex items-center gap-5">
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="flex-1 h-12 border border-gray-900 rounded-lg px-4 text-sm text-gray-700 outline-none focus:border-[#6B21A8]"
          />

          <button
            onClick={handleSaveName}
            className="h-12  px-10 rounded-lg bg-[#6B21A8] text-white font-semibold border-b-[4px] border-b-[#3C1658] hover:bg-[#591A90] transition-colors"
          >
            Save
          </button>
        </div>
      </SettingsSection>

      <SettingsSection title="Choose avatar">
        <div className="flex items-start gap-24">
          <AvatarPicker />

          {showSuccess && (
            <div className="flex items-center gap-3 border border-gray-300 rounded-md px-5 py-4 bg-white shadow-sm mt-4">
              <CheckCircle size={22} className="text-emerald-600" />

              <p className="text-sm font-semibold text-emerald-700">
                Name Changed successfully
              </p>
            </div>
          )}
        </div>
      </SettingsSection>
    </div>
  );
}