"use client";

import { PenLine } from "lucide-react";
import FancyButton from "../ui/FancyButton";
import { useRouter } from "next/navigation";

export default function SuccessModal({ onClose }) {
  const router = useRouter();
  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-[32px] shadow-xl max-w-sm w-full px-10 py-12 text-center">
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <img src="/check-icon.png" alt="Success" className="w-20 h-20" />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Welcome Back!</h2>

        {/* Description */}
        <p className="text-sm text-gray-500 leading-relaxed mb-10 max-w-xs mx-auto">
          You have successfully logged in. Continue your learning journey and
          start playing quizzes now.
        </p>

        {/* Continue Button */}
        <FancyButton
          type="button"
          showArrow={false}
          onClick={() => router.push("/quiz-questions")}
          className="h-[48px] px-10 text-sm  border-b-[4px] border-b-gray-700 rounded-lg"
        >
          Submit
        </FancyButton>
      </div>
    </div>
  );
}
