'use client';

import { useState } from 'react';

export default function PrivacySettings() {
  const [publicProfile, setPublicProfile] = useState(true);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const accountHistory = [
    {
      date: 'May 26,2025',
      device: 'ELITEBOOK',
      location: 'Lagos, Nigeria',
      time: '9:23 AM',
    },
    {
      date: 'May 26,2025',
      device: 'ELITEBOOK',
      location: 'Lagos, Nigeria',
      time: '9:23 AM',
    },
  ];

  const handleDeleteAccount = () => {
    console.log('Account deleted');
    setShowDeleteModal(false);
  };

  return (
    <>
      <div className="max-w-3xl space-y-6">
        {/* Public profile */}
        <div className="border border-gray-200 rounded-2xl px-6 py-6 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-gray-900">
              Public profile
            </h3>

            <p className="text-sm text-gray-500 mt-2">
              Make profile visible to other players and leaderboard
            </p>
          </div>

          <button
            type="button"
            onClick={() => setPublicProfile(!publicProfile)}
            className={`relative w-14 h-7 rounded-full transition-colors ${
              publicProfile ? 'bg-[#6B21A8]' : 'bg-gray-300'
            }`}
          >
            <span
              className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-all ${
                publicProfile ? 'left-8' : 'left-1'
              }`}
            />
          </button>
        </div>

        {/* Export data */}
        <div className="border border-gray-200 rounded-2xl px-6 py-6">
          <h3 className="text-lg font-bold text-gray-900">Export data</h3>

          <p className="text-sm text-gray-500 mt-2">
            Download your leaderboard data as Pdf
          </p>

          <button className="mt-5 bg-[#6B21A8] text-white text-sm font-semibold px-8 py-3 rounded-lg border-b-[4px] border-b-[#3C1658] hover:bg-[#591A90] transition-colors">
            Export data
          </button>
        </div>

        {/* Account history */}
        <div className="border border-gray-200 rounded-2xl px-6 py-6">
          <h3 className="text-lg font-bold text-gray-900">
            Account history
          </h3>

          <p className="text-sm text-gray-500 mt-2">
            View devices you have used to sign in
          </p>

          <div className="border-t border-gray-200 mt-6 pt-6 space-y-6">
            {accountHistory.map((item, index) => (
              <div key={index}>
                <p className="text-sm font-bold text-gray-900 mb-3">
                  {item.date}
                </p>

                <div className="bg-gray-50 rounded-md px-4 py-4">
                  <p className="text-sm font-semibold text-gray-800">
                    {item.device}
                  </p>

                  <p className="text-sm text-gray-500 mt-2">
                    {item.location} • {item.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Delete account */}
        <div className="border border-gray-200 rounded-2xl px-6 py-6">
          <h3 className="text-lg font-bold text-red-600">
            Delete account
          </h3>

          <p className="text-sm text-gray-500 mt-2">
            Permanently delete your account and all associated data
          </p>

          <button
            type="button"
            onClick={() => setShowDeleteModal(true)}
            className="mt-5 bg-white text-red-600 text-sm font-semibold px-8 py-3 rounded-lg border border-red-500 border-b-[4px] border-b-red-700 hover:bg-red-50 transition-colors"
          >
            Delete account
          </button>
        </div>
      </div>

      {/* Delete modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-purple-200/60 backdrop-blur-sm">
          <div className="w-[440px] rounded-[28px] bg-white px-6 py-8 text-center shadow-xl">
            <img
              src="/trash.svg"
              alt="Delete account"
              className="mx-auto mb-5 h-20 w-20 object-contain"
            />

            <h2 className="text-2xl font-bold text-gray-900">
              Delete account
            </h2>

            <p className="mx-auto mt-3 max-w-[340px] text-sm leading-6 text-gray-500">
              Are you sure you want to permanently delete your account? This
              action cannot be undone.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setShowDeleteModal(false)}
                className="flex items-center justify-center rounded-xl border-2 border-black bg-white px-6 py-3 text-sm font-bold text-gray-900 border-b-[6px] border-b-black hover:bg-gray-50 transition-colors"
              >
                <img
                  src="/purpledrop.svg"
                  alt="icon"
                  className="h-5 w-5 object-contain transform translate-x-[-50px] transform translate-y-[-6px]"
                />
                Cancel
              </button>

              <button
                type="button"
                onClick={handleDeleteAccount}
                className="flex items-center justify-center rounded-xl bg-red-600 px-6 py-3 text-sm font-bold text-white border-b-[6px] border-b-red-800 hover:bg-red-700 transition-colors"
              >
                <img
                  src="/whitedrop.svg"
                  alt="icon"
                  className="h-5 w-5 object-contain transform translate-x-[-50px] transform translate-y-[-6px]"
                />
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}