'use client';

import { Share2, Home, RotateCcw, X, Copy } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function GameEndModal({
  score = 1,
  total = 5,
  points = 10,
  rank = 126,
  outOf = 158,
  topic = 'English quiz',
  onHome,
  onPlayAgain,
}) {
  const [showConfetti, setShowConfetti] = useState(true);
  const [showShareModal, setShowShareModal] = useState(false);
  const [copied, setCopied] = useState(false);

  const router = useRouter();

  const shareLink = 'localhost3000/shared-result';

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareLink);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.log('Failed to copy:', error);
    }
  };

  const handleGoHome = () => {
    if (onHome) onHome();
    router.push('/dashboard');
  };

  return (
    <>
      {/* Game ended modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
        <motion.div
          initial={{ scale: 0.85, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{
            type: 'spring',
            stiffness: 180,
            damping: 18,
          }}
          className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-[#5C259E] px-8 py-10 text-center text-white shadow-2xl"
        >
          {/* Confetti overlay */}
          {showConfetti && (
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <img
                src="/confetti.gif"
                alt="confetti"
                className="w-full h-full object-cover opacity-60"
              />
            </div>
          )}

          <div className="relative z-10">
            <h2 className="text-3xl font-bold tracking-wide">
              Game ended
            </h2>

            <p className="mt-3 text-lg font-bold text-[#7DFF9B]">
              +{points} PTS
            </p>

            <p className="mx-auto mt-8 max-w-[440px] text-base leading-7 text-white/90">
              You did awesome. Continue playing to top up the leaderboard
            </p>

            {/* Stats */}
            <div className="mt-7 grid grid-cols-3 gap-5">
              <div className="rounded-2xl bg-white/15 px-5 py-5">
                <p className="text-3xl font-semibold leading-none">
                  {score}/{total}
                </p>
                <p className="mt-5 text-sm uppercase tracking-wide text-white">
                  Score
                </p>
              </div>

              <div className="rounded-2xl bg-white/15 px-5 py-5">
                <p className="text-3xl font-semibold leading-none">
                  {points}
                </p>
                <p className="mt-5 text-sm uppercase tracking-wide text-white">
                  Points
                </p>
              </div>

              <div className="rounded-2xl bg-white/15 px-5 py-5">
                <p className="text-3xl font-semibold leading-none">
                  #{rank}
                </p>
                <p className="mt-5 text-sm uppercase tracking-wide text-white">
                  Of {outOf}
                </p>
              </div>
            </div>

            <p className="mt-5 text-base font-semibold text-white">
              History <span className="mx-2">•</span> Total questions: {total}
            </p>

            {/* Share button */}
            <button
              type="button"
              onClick={() => setShowShareModal(true)}
              className="mt-10 flex h-[58px] w-full items-center justify-center gap-3 rounded-xl bg-[#FFE866] text-base font-bold text-black transition-colors hover:bg-[#ffdf3d]"
            >
              <Share2 size={20} />
              Share result
            </button>

            {/* Bottom buttons */}
            <div className="mt-6 grid grid-cols-2 gap-8">
              <button
                type="button"
                onClick={handleGoHome}
                className="relative flex h-[60px] items-center justify-center gap-3 rounded-xl bg-[#EEE2FA] text-base font-bold text-[#5C259E] border-b-[6px] border-b-[#2F124A] transition-all hover:bg-white active:translate-y-[2px] active:border-b-[3px]"
              >
                <img
                  src="/purpledrop.svg"
                  alt=""
                  className="absolute left-4 top-2 h-5 w-5 object-contain"
                />
                <Home size={19} />
                Go home
              </button>

              <button
                type="button"
                onClick={onPlayAgain}
                className="relative flex h-[60px] items-center justify-center gap-3 rounded-xl bg-white text-base font-bold text-[#5C259E] border-b-[6px] border-b-[#2F124A] transition-all hover:bg-gray-50 active:translate-y-[2px] active:border-b-[3px]"
              >
                <img
                  src="/purpledrop.svg"
                  alt=""
                  className="absolute left-4 top-2 h-5 w-5 object-contain"
                />
                <RotateCcw size={19} />
                Play again
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Share result modal */}
      {showShareModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-[#EDE4F4]/80 backdrop-blur-sm p-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{
              type: 'spring',
              stiffness: 180,
              damping: 18,
            }}
            className="relative w-full max-w-[520px] overflow-hidden rounded-3xl bg-white pb-10 shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">
              <h2 className="text-xl font-bold text-gray-900">Share</h2>

              <button
                type="button"
                onClick={() => setShowShareModal(false)}
                className="text-gray-900 hover:text-gray-600"
              >
                <X size={22} />
              </button>
            </div>

            {/* Decorative stars */}
            <img
              src="/sparkles.svg"
              alt=""
              className="pointer-events-none absolute left-0 top-0 w-full object-cover"
            />

            <div className="px-6 pt-8">
              {/* Logo */}
              <div className="flex items-center justify-center gap-2">
                <img
                  src="/logo-img 1.svg"
                  alt="Trivia"
                  className="h-8 w-8 object-contain"
                />
                <span className="text-xl font-bold text-gray-900">
                  Trivia
                </span>
              </div>

              {/* User info */}
              <div className="mt-8 flex items-center justify-center gap-4">
                <div className="h-12 w-12 overflow-hidden rounded-full bg-purple-200">
                  <img
                    src="https://api.dicebear.com/7.x/adventurer/svg?seed=Trella"
                    alt="Trella Olu"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="text-left">
                  <h3 className="text-base font-bold text-gray-900">
                    Trella Olu
                  </h3>
                  <p className="text-sm font-medium text-gray-500">
                    Trivia player
                  </p>
                </div>
              </div>

              {/* Quiz card */}
              <div className="mt-8 flex items-center gap-4 rounded-xl bg-gray-50 px-4 py-3">
                <span className="text-3xl">🏆</span>

                <div>
                  <h4 className="text-sm font-bold text-gray-900">
                    {topic}
                  </h4>
                  <p className="text-xs text-gray-500">Trivia</p>
                </div>
              </div>

              {/* Performance */}
              <div className="mt-6">
                <h3 className="text-base font-bold text-gray-900">
                  Quiz performance
                </h3>

                <div className="mt-4 rounded-2xl border border-gray-200 p-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-4 rounded-xl bg-[#FBF4FF] px-4 py-4">
                      <span className="text-3xl">🎯</span>

                      <div>
                        <p className="text-xl font-bold text-gray-900">
                          {score}/{total}
                        </p>
                        <p className="text-xs font-medium uppercase text-gray-500">
                          Correct
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 rounded-xl bg-[#FBF4FF] px-4 py-4">
                      <img
                        src="/diamond.svg"
                        alt="points"
                        className="h-9 w-9 object-contain"
                      />

                      <div>
                        <p className="text-xl font-bold text-gray-900">
                          {points}
                        </p>
                        <p className="text-xs font-medium uppercase text-gray-500">
                          Points
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 rounded-xl bg-[#FBF4FF] px-4 py-4">
                      <span className="text-3xl">🏳️</span>

                      <div>
                        <p className="text-xl font-bold text-gray-900">
                          {Math.round((score / total) * 100)}%
                        </p>
                        <p className="text-xs font-medium uppercase text-gray-500">
                          Score
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 rounded-xl bg-[#FBF4FF] px-4 py-4">
                      <span className="text-3xl">📊</span>

                      <div>
                        <p className="text-xl font-bold text-gray-900">
                          #{rank}
                        </p>
                        <p className="text-xs font-medium uppercase text-gray-500">
                          Of {outOf}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Share link */}
              <div className="mt-5 rounded-2xl border border-gray-200 p-4">
                <h3 className="text-base font-bold text-gray-900">
                  Share link
                </h3>

                <div className="mt-4 flex items-center gap-3">
                  <div className="flex-1 truncate rounded-lg bg-gray-50 px-4 py-4 text-sm text-blue-600">
                    {shareLink}
                  </div>

                  <button
                    type="button"
                    onClick={handleCopyLink}
                    className="flex h-[52px] items-center justify-center gap-2 rounded-lg bg-[#6B21A8] px-7 text-sm font-bold text-white border-b-[5px] border-b-[#3C1658]"
                  >
                    <Copy size={18} />
                    {copied ? 'Copied' : 'Copy'}
                  </button>
                </div>
              </div>

              {/* Social icons */}
              <div className="mt-8 grid grid-cols-4 gap-6">
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="flex flex-col items-center gap-3"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-gray-400">
                    <Copy size={24} />
                  </div>
                  <span className="text-sm font-medium text-gray-900">
                    Copy link
                  </span>
                </button>

                <a
                  href={`https://wa.me/?text=${encodeURIComponent(shareLink)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center gap-3"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-gray-400">
                    <img
                      src="/whatsapp-icon.svg"
                      alt="WhatsApp"
                      className="h-7 w-7 object-contain"
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-900">
                    WhatsApp
                  </span>
                </a>

                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                    shareLink
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center gap-3"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-gray-400">
                    <img
                      src="/x.svg"
                      alt="X"
                      className="h-6 w-6 object-contain"
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-900">
                    X
                  </span>
                </a>

                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center gap-3"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-gray-400">
                    <img
                      src="/instagram.svg"
                      alt="Instagram"
                      className="h-7 w-7 object-contain"
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-900">
                    Instagram
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}