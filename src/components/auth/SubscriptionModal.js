'use client';

import { PenLine } from 'lucide-react';
import { useRouter } from "next/navigation";
import FancyButton from '../ui/FancyButton';

export default function SubscriptionModal({ onSubscribe, onCancel }) {
  const router = useRouter();

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-[32px] shadow-xl max-w-md w-full p-10 text-center relative">

        {/* Warning Icon */}
        <img
          src="/Triangle.png"
          alt="Warning"
          className="w-20 h-20 mx-auto mb-6"
        />

        {/* Heading */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          No active subscription
        </h2>

        {/* Description */}
        <p className="text-gray-500 text-sm leading-relaxed mb-10 max-w-xs mx-auto">
          To play any quiz you must make a subscription. Subscribe with our
          network providers to get started
        </p>

        {/* Cancel + Subscribe Row */}
        <div className="flex items-center justify-center gap-4 mb-4">

          {/* Cancel */}
          <FancyButton
  onClick={() => {
    onCancel();
    router.push("/login");
  }}
  icon="/PURPLEDROP.svg"
  showArrow={false}
  className="flex-1 border border-[#6B21A8] text-[#6B21A8] bg-white py-3 rounded-xl text-sm font-medium border-b-[4px] border-b-[#3C1658]/40 hover:bg-gray-50"
>
  Cancel
</FancyButton>

          {/* Subscribe */}
          <FancyButton  
            onClick={() => {
              onSubscribe();
              router.push("/signup");
            }}
            className="flex-1 bg-[#6B21A8] text-white py-3 rounded-xl text-sm font-medium
                       flex items-center justify-center gap-2
                       border-b-[4px] border-b-[#3C1658] hover:bg-[#591A90]"
          >
            
            Subscribe
          </FancyButton>

        </div>

        {/* Go to Dashboard */}
        <FancyButton  
          onClick={() => router.push("/dashboard")}
          className="w-full bg-[#FEDF89] text-[#7A2E0E] py-3 rounded-xl text-sm font-semibold
                     border-b-[4px] border-b-[#5C401A] hover:bg-[#EFC030]"
        >
          Go to dashboard
        </FancyButton>

      </div>
    </div>
  );
}