'use client';

import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';

export default function OtpVerificationPage({
  phoneNumber = '081******4568',
  rawPhoneNumber = '',
  onVerify,
  onResend,
}) {
  const [otp, setOtp] = useState(new Array(6).fill(''));
  const [error, setError] = useState('');
  const inputRefs = useRef([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (value, index) => {
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);

    setOtp(newOtp);
    setError('');

    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();

    const pasted = e.clipboardData
      .getData('text')
      .slice(0, 6)
      .replace(/\D/g, '');

    const newOtp = [...otp];

    pasted.split('').forEach((digit, i) => {
      if (i < otp.length) newOtp[i] = digit;
    });

    setOtp(newOtp);
    setError('');

    const nextIndex = Math.min(pasted.length, otp.length - 1);
    inputRefs.current[nextIndex]?.focus();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const enteredOtp = otp.join('');

    if (enteredOtp.length < 6) {
      setError('Please enter the complete 6-digit code');
      return;
    }

    setLoading(true);
    setError('');

    // Simulate verification delay
    await new Promise((res) => setTimeout(res, 600));

    // Fake OTP check
    if (enteredOtp !== '123456') {
      setError('Invalid verification code. Please try again.');
      setLoading(false);
      return;
    }

    setLoading(false);

    // Send OTP and raw phone number back to parent form
    onVerify?.(enteredOtp, rawPhoneNumber);
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-3xl shadow-2xl max-w-sm w-full p-8 text-center">
        {/* Illustration */}
        <div className="flex justify-center mb-6">
          <img
            src="/image_lock.svg"
            alt="Verify lock illustration"
            className="w-14 h-14"
          />
        </div>

        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          Verify account
        </h2>

        {/* Subtitle */}
        <p className="text-sm text-gray-600 mb-8">
          Enter the 6-digit code sent to you at{' '}
          <span className="font-semibold text-black">{phoneNumber}</span>
        </p>

        {/* OTP Inputs */}
        <form onSubmit={handleSubmit}>
          <div onPaste={handlePaste} className="flex justify-center gap-3 mb-4">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                inputMode="numeric"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                ref={(ref) => {
                  inputRefs.current[index] = ref;
                }}
                className={`w-12 h-12 text-center text-lg font-semibold border-2 rounded-lg outline-none transition-all ${
                  error
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-200'
                    : 'border-[#8B5CF6] focus:border-[#6B21A8] focus:ring-[#6B21A8]/25'
                }`}
              />
            ))}
          </div>

          {/* Error Message */}
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          {/* Resend link */}
          <p className="text-sm text-gray-500 mb-6">
            Didn’t get a code?{' '}
            <button
              type="button"
              onClick={() => {
                setError('');
                onResend?.();
              }}
              className="text-[#6B21A8] font-medium hover:underline"
            >
              Resend
            </button>
          </p>

          {/* Verify Button */}
          <Button
            type="submit"
            disabled={loading}
            className={`relative w-full h-[64px] ${
              loading ? 'bg-[#8B5CF6]/70' : 'bg-[#6B21A8] hover:bg-[#5b1994]'
            } text-white text-lg font-semibold rounded-xl border-b-[7px] border-[#3C1658] flex items-center justify-center gap-2`}
          >
            {loading ? (
              'Verifying...'
            ) : (
              <>
                <img
                  src="/drop 1.svg"
                  alt="icon"
                  className="w-4 h-4 mr-1 opacity-90"
                />
                Verify
              </>
            )}
          </Button>
        </form>
      </div>
    </div>
  );
}