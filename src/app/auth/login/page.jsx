'use client';

import { useState } from 'react';
import LoginForm from '@/components/auth/LoginForm';
import SubscriptionModal from '@/components/auth/SubscriptionModal';
import OnboardingFlow from '@/components/auth/OnboardingFlow';
import SuccessModal from '@/components/auth/SuccessModal';

export default function LoginPage() {
  const [step, setStep] = useState('login'); // login, subscription, onboarding, success
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleLogin = (phone) => {
    setPhoneNumber(phone);
    // Always show subscription modal first
    setStep('subscription');
  };

  const handleSubscribe = () => {
    // After subscription, go to onboarding
    setStep('onboarding');
  };

  const handleCancelSubscription = () => {
    setStep('login');
    setPhoneNumber('');
  };

  const handleOnboardingComplete = () => {
    setStep('success');
  };

  const handleSuccessClose = () => {
    // Redirect to quiz page
    window.location.href = '/quiz';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 to-purple-500 flex items-center justify-center p-4">
      {step === 'login' && (
        <LoginForm onLogin={handleLogin} />
      )}

      {step === 'subscription' && (
        <SubscriptionModal 
          onSubscribe={handleSubscribe}
          onCancel={handleCancelSubscription}
        />
      )}

      {step === 'onboarding' && (
        <OnboardingFlow onComplete={handleOnboardingComplete} />
      )}

      {step === 'success' && (
        <SuccessModal onClose={handleSuccessClose} />
      )}
    </div>
  );
}
