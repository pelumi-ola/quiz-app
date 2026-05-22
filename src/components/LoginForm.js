'use client';

import { useState } from 'react';
import FancyButton from './ui/FancyButton';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';

// Existing modals
import SubscriptionModal from '@/components/auth/SubscriptionModal';
import SuccessModal from '@/components/auth/SuccessModal';
import OtpVerificationPage from './auth/OTPVerificationModal';

export default function LoginForm({ onLogin }) {
  const router = useRouter();

  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');
  const [showNoSubscription, setShowNoSubscription] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showOtp, setShowOtp] = useState(false);

  const validSubscribedNumbers = ['08012345678', '08087654321'];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!phoneNumber.trim()) {
      setError('Please enter a phone number');
      return;
    }

    const cleanedNumber = phoneNumber.replace(/\D/g, '');

    if (!/^\d{10,}$/.test(cleanedNumber)) {
      setError('Please enter a valid phone number');
      return;
    }

    setError('');

    // Not subscribed
    if (cleanedNumber === '08000000000') {
      setShowNoSubscription(true);
      return;
    }

    // Valid subscribed test accounts that should pass through OTP
    if (validSubscribedNumbers.includes(cleanedNumber)) {
      setShowSuccess(true);
      return;
    }

    // Any other number is not subscribed
    setShowNoSubscription(true);
  };

  const handleSubscribe = () => {
    const cleanedNumber = phoneNumber.replace(/\D/g, '');

    // Save it in localStorage as backup
    window.localStorage.setItem('pendingSignupPhone', cleanedNumber);

    setShowNoSubscription(false);

    // Send phone number to signup page
    router.push(`/signup?phone=${cleanedNumber}`);
  };

  const maskPhone = (num) =>
    num.length >= 4
      ? `${num.slice(0, 3)}******${num.slice(-4)}`
      : '***********';

  return (
    <div className="relative min-h-screen w-full bg-white flex items-center justify-center p-5">
      {/* LOGIN CARD */}
      <div
        className={`w-full max-w-full min-h-full grid md:grid-cols-[45%_55%] bg-white rounded-[48px] overflow-hidden border-[12px] border-[#C9A3E6] ${
          showNoSubscription || showSuccess || showOtp ? 'blur-sm' : ''
        }`}
      >
        {/* Left - Illustration */}
        <div className="hidden md:flex items-center justify-center bg-[#F3EAF8]">
          <img
            src="/login illustration 2.svg"
            alt="Trivia illustration"
            className="w-[520px] h-[500px] object-contain"
          />
        </div>

        {/* Right - Form */}
        <div className="flex items-center justify-center px-8 py-12">
          <div className="w-full max-w-[490px]">
            <div className="flex items-center justify-center gap-3 mb-12">
              <img
                src="/logo-img 1.svg"
                alt="Trivia logo"
                className="w-[48px] h-[48px] object-contain"
              />
              <span className="font-bold text-2xl text-black">Trivia</span>
            </div>

            <h2 className="text-4xl font-bold text-center text-black mb-5">
              Welcome back
            </h2>

            <p className="text-center text-gray-500 text-base leading-relaxed mb-12">
              Subscribe and turn every correct answer into real earnings. <br />
              Outperform others and dominate the leaderboard.
            </p>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Enter phone number
                </label>

                <Input
                  type="tel"
                  placeholder="080 1234 5678"
                  value={phoneNumber}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, '');
                    setPhoneNumber(value);
                  }}
                  className="w-full h-[48px] px-4 text-base border border-gray-300 rounded-lg focus:border-[#6F31A0] focus:ring-[#6F31A0]/20"
                  maxLength="15"
                />

                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
              </div>

              <FancyButton
                type="submit"
                className="relative w-full h-[64px] bg-primary hover:bg-[#5d2788] text-white text-lg font-semibold rounded-lg border-b-[7px] border-[#3C1658]"
                showArrow={false}
              >
                Log in
              </FancyButton>
            </form>
          </div>
        </div>
      </div>

      {/* No subscription modal */}
      {showNoSubscription && (
        <SubscriptionModal
          onCancel={() => setShowNoSubscription(false)}
          onSubscribe={handleSubscribe}
        />
      )}

      {/* Success modal triggers OTP next */}
      {showSuccess && (
        <SuccessModal
          onClose={() => {
            setShowSuccess(false);
            setShowOtp(true);
          }}
        />
      )}

      {/* OTP verification modal */}
      {showOtp && (
        <OtpVerificationPage
          phoneNumber={maskPhone(phoneNumber)}
          rawPhoneNumber={phoneNumber.replace(/\D/g, '')}
          onVerify={(code, verifiedPhoneNumber) => {
            console.log('Verified:', code);

            window.localStorage.setItem('triviaUserPhone', verifiedPhoneNumber);

            setShowOtp(false);
            router.push('/quiz-rules');
          }}
          onResend={() => console.log('Resend clicked')}
        />
      )}
    </div>
  );
}