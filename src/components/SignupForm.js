'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import FancyButton from './ui/FancyButton';
import { Input } from '@/components/ui/input';
import OtpVerificationPage from './auth/OTPVerificationModal';
import { useRouter, useSearchParams } from 'next/navigation';

export default function SignupForm({ onSignup }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [phoneNumber, setPhoneNumber] = useState('');
  const [fullName, setFullName] = useState('');
  const [selectedAvatar, setSelectedAvatar] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState('');
  const [showOtp, setShowOtp] = useState(false);

  useEffect(() => {
    const phoneFromUrl = searchParams.get('phone');

    const phoneFromStorage =
      typeof window !== 'undefined'
        ? window.localStorage.getItem('pendingSignupPhone')
        : '';

    const savedPhone = phoneFromUrl || phoneFromStorage;

    if (savedPhone) {
      setPhoneNumber(savedPhone.replace(/\D/g, ''));
    }
  }, [searchParams]);

  // DiceBear avatar options
  const avatarSeeds = [
    'Alex',
    'Jamie',
    'Sky',
    'Riley',
    'Jordan',
    'Blake',
    'Casey',
    'Brian',
    'Ryan',
    'Caleb',
    'Aidan',
    'Leo',
    'Liam',
    'Luis',
  ];

  const getAvatarUrl = (seed) =>
    `https://api.dicebear.com/7.x/adventurer/svg?seed=${encodeURIComponent(
      seed
    )}`;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!phoneNumber.trim() || !fullName.trim()) {
      setError('Please fill in all fields');
      return;
    }

    if (!agreed) {
      setError('You must agree to the terms and service policy');
      return;
    }

    if (!selectedAvatar) {
      setError('Please select an avatar');
      return;
    }

    const cleanedNumber = phoneNumber.replace(/\D/g, '');

    if (!/^\d{10,}$/.test(cleanedNumber)) {
      setError('Please enter a valid phone number');
      return;
    }

    setError('');
    setShowOtp(true);

    onSignup?.({
      phoneNumber: cleanedNumber,
      fullName,
      avatar: selectedAvatar,
    });
  };

  const maskPhone = (num) =>
    num.length >= 4
      ? `${num.slice(0, 3)}******${num.slice(-4)}`
      : '***********';

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center p-5 bg-red">
      {/* SIGNUP CARD */}
      <div
        className={`w-full max-w-full min-h-full grid md:grid-cols-[45%_55%] bg-white rounded-[48px]
         overflow-hidden border-[12px] border-[#E5D4F3] ${
           showOtp ? 'blur-sm' : ''
         }`}
      >
        {/* Left Side — Illustration */}
        <div className="hidden md:flex flex-col items-center justify-center bg-[#F8F2FB] gap-6 p-8">
          <img
            src="/Login illustration 2.SVG"
            alt="Trivia illustration"
            className="w-[520px] h-[500px] object-contain"
          />
        </div>

        {/* Right Side — Form */}
        <div className="flex items-center justify-center px-8 py-12">
          <div className="w-full max-w-[480px]">
            <h2 className="text-3xl font-bold text-black mb-8">
              Create account
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Phone Number Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone number
                </label>

                <Input
                  type="tel"
                  placeholder="081 3321 5722"
                  value={phoneNumber}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, '');
                    setPhoneNumber(value);
                  }}
                  className="w-full h-[50px] px-4 text-base border border-gray-300 rounded-lg 
                             focus:border-[#6F31A0] focus:ring-[#6F31A0]/20"
                  maxLength="15"
                />
              </div>

              {/* Full Name Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full name
                </label>

                <Input
                  type="text"
                  placeholder="John Doe"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full h-[50px] px-4 text-base border border-gray-300 rounded-lg 
                             focus:border-[#6F31A0] focus:ring-[#6F31A0]/20"
                />
              </div>

              {/* Avatar Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Choose your avatar
                </label>

                <div className="grid grid-cols-5 gap-4 justify-center">
                  {avatarSeeds.map((seed) => {
                    const url = getAvatarUrl(seed);
                    const active = selectedAvatar === url;

                    return (
                      <button
                        type="button"
                        key={seed}
                        onClick={() => setSelectedAvatar(url)}
                        className={`border-2 rounded-full p-1 transition-all ${
                          active
                            ? 'border-[#6B21A8] scale-105'
                            : 'border-transparent hover:border-gray-300'
                        }`}
                      >
                        <img
                          src={url}
                          alt={seed}
                          className="w-14 h-14 rounded-full"
                        />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={() => setAgreed(!agreed)}
                  className="mt-1 w-4 h-4 rounded border-gray-400 focus:ring-[#6F31A0] text-[#6F31A0]"
                />

                <p className="text-sm text-gray-600 leading-relaxed">
                  By creating an account, I agree to the{' '}
                  <Link
                    href="/legal?tab=terms"
                    className="text-[#6F31A0] underline"
                  >
                    terms
                  </Link>{' '}
                  and{' '}
                  <Link
                    href="/legal?tab=privacy"
                    className="text-[#6F31A0] underline"
                  >
                    service policy
                  </Link>{' '}
                  of the company.
                </p>
              </div>

              {error && <p className="text-red-500 text-sm">{error}</p>}

              {/* Submit Button */}
              <FancyButton
                type="submit"
                className="relative w-full h-[64px] bg-[#6B21A8] hover:bg-[#5d2788] 
                           text-white text-lg font-semibold rounded-lg border-b-[7px] border-[#3C1658]"
                showArrow={false}
              >
                Create account
              </FancyButton>
            </form>
          </div>
        </div>
      </div>

      {/* OTP Modal */}
      {showOtp && (
        <OtpVerificationPage
          phoneNumber={maskPhone(phoneNumber)}
          rawPhoneNumber={phoneNumber.replace(/\D/g, '')}
          onVerify={(code, verifiedPhoneNumber) => {
            console.log('Signup verified:', code);

            window.localStorage.removeItem('pendingSignupPhone');
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