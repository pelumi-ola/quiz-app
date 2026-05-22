'use client';

import { useState } from 'react';
import OnboardingTerms from './OnboardingTerms';
import OnboardingProfile from './OnboardingProfile';

export default function OnboardingFlow({ onComplete }) {
  const [step, setStep] = useState(1); // 1: terms, 2: profile

  const handleTermsComplete = () => {
    setStep(2);
  };

  const handleProfileComplete = () => {
    onComplete();
  };

  return (
    <>
      {step === 1 && (
        <OnboardingTerms onNext={handleTermsComplete} />
      )}
      {step === 2 && (
        <OnboardingProfile onComplete={handleProfileComplete} />
      )}
    </>
  );
}
