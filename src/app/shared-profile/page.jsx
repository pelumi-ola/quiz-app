'use client';

import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import FancyButton from '@/components/ui/FancyButton';

export default function SharedProfilePage() {
  const stats = [
    { icon: '/star.svg', value: '3', label: 'Wins' },
    { icon: '/brain.svg', value: '16', label: 'Quizzes' },
    { icon: '/diamond.svg', value: '55', label: 'Points' },
    { icon: '/drive.svg', value: '₦12,000', label: 'Earnings' },
    { icon: '/star-circle.svg', value: '5.8%', label: 'Win rate' },
    { icon: '/fire.svg', value: '12', label: 'Streak' },
  ];

  const recommendations = [
    {
      title: 'StreamD',
      description: 'Football streaming',
      image: '/image.png',
    },
    {
      title: 'GameD',
      description: 'Football streaming',
      image: '/image (1).png',
    },
    {
      title: 'StreamD',
      description: 'Football streaming',
      image: '/image.png',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#5C259E] text-white">
        {/* subtle background pattern */}
        <div className="absolute inset-0 opacity-25">
          <div className="absolute left-[8%] top-[22%] text-3xl">+</div>
          <div className="absolute left-[24%] top-[55%] text-4xl">+</div>
          <div className="absolute right-[12%] top-[62%] text-3xl">+</div>
          <div className="absolute left-[38%] top-[10%] text-2xl">+</div>
          <div className="absolute right-[28%] top-[34%] text-xl">+</div>
          <div className="absolute left-[18%] top-[40%] text-xs">▪</div>
          <div className="absolute right-[22%] top-[18%] text-xs">▪</div>
          <div className="absolute left-[60%] top-[70%] text-xs">▪</div>
        </div>

        {/* Header */}
        <header className="relative z-10 flex h-[68px] items-center justify-between border-b border-white/15 px-16">
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/logo-img 1.svg"
              alt="Trivia"
              className="h-9 w-9 object-contain brightness-0 invert"
            />
            <span className="text-2xl font-bold">Trivia</span>
          </Link>

          <FancyButton
  href="/signin"
  icon="/purpledrop.svg"
  showArrow={true}
  className="h-[48px] px-6 text-sm bg-white text-[#5C259E] hover:bg-gray-50"
>
  Sign in
</FancyButton>
        </header>

        {/* Profile content */}
        <div className="relative z-10 flex flex-col items-center pb-10 pt-10">
          <div className="h-24 w-24 overflow-hidden rounded-full border-[4px] border-white bg-purple-200">
            <img
              src="https://api.dicebear.com/7.x/adventurer/svg?seed=Trella"
              alt="Trella Olu"
              className="h-full w-full object-cover"
            />
          </div>

          <h1 className="mt-5 text-2xl font-bold">Trella Olu</h1>
          <p className="mt-1 text-sm font-semibold text-white/90">
            Trivia Player
          </p>
          <p className="mt-2 text-sm text-white/85">081******4568</p>

          <div className="mt-9 flex items-center gap-12">
            <div className="text-center">
              <p className="text-3xl font-bold">55</p>
              <p className="mt-1 text-sm text-white/85">Total points</p>
            </div>

            <div className="h-8 w-px bg-white/35" />

            <div className="text-center">
              <p className="text-3xl font-bold">16</p>
              <p className="mt-1 text-sm text-white/85">Quizzes</p>
            </div>

            <div className="h-8 w-px bg-white/35" />

            <div className="text-center">
              <p className="text-3xl font-bold">3</p>
              <p className="mt-1 text-sm text-white/85">Winnings</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <main className="px-16 py-14">
        {/* CTA banner */}
        <section className="relative flex min-h-[170px] items-center overflow-hidden rounded-2xl bg-[#4B1F7F] px-8">
          <img
            src="/cup.svg"
            alt="Trophy"
            className="h-32 w-32 object-contain"
          />

          <div className="ml-8">
            <h2 className="text-2xl font-bold text-white">
              Top up the quiz leaderboard
            </h2>

            <p className="mt-4 text-sm text-white/85">
              Join thousands of people to play games, win to unlock achievements
            </p>
<FancyButton
  href="/signin"
  icon="/purpledrop.svg"
  showArrow={true}
  className="h-[48px] px-6 text-sm bg-white text-[#5C259E] hover:bg-gray-50 mt-2"
>
  Start Playing
</FancyButton>
          </div>

          <img
            src="/confetti.svg"
            alt=""
            className="absolute right-0 top-0 h-full w-[380px] object-cover"
          />
        </section>

        {/* Overall statistics */}
        <section className="mt-20">
          <h2 className="mb-8 text-2xl font-bold text-gray-900">
            Overall statistics
          </h2>

          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex items-center gap-6 rounded-xl border border-gray-200 bg-white px-8 py-5"
              >
                <img
                  src={stat.icon}
                  alt={stat.label}
                  className="h-12 w-12 object-contain"
                />

                <div>
                  <p className="text-2xl font-bold text-gray-900">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-gray-500">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* You might also like */}
        <section className="mt-24">
          <div className="mb-9 flex items-center justify-between">
            <h2 className="text-3xl font-bold text-gray-900">
              You might also like
            </h2>

            <div className="flex items-center gap-2 rounded-lg bg-[#6B21A8] px-3 py-2 text-white">
              <button type="button">
                <ChevronLeft size={20} />
              </button>
              <button type="button">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-9">
            {recommendations.map((item, index) => (
              <div key={index}>
                <div className="h-[220px] overflow-hidden rounded-xl bg-purple-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                <h3 className="mt-5 text-lg font-bold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#3C1658] px-16 py-14 text-white">
        <div className="flex items-start justify-between">
          <div>
            <div className="mb-8 flex items-center gap-3">
              <img
                src="/logo-img 1.svg"
                alt="Trivia"
                className="h-9 w-9 object-contain brightness-0 invert"
              />
              <span className="text-2xl font-bold">Trivia</span>
            </div>

            <p className="max-w-md text-sm leading-6 text-white/70">
              Design amazing digital experiences that create more happy in
              the world.
            </p>
          </div>

          <div className="flex gap-10 text-sm text-white/90">
            <Link href="#">Contact</Link>
            <Link href="#">About</Link>
          </div>
        </div>

        <div className="mt-16 flex items-center justify-between border-t border-white/30 pt-8 text-sm text-white/70">
          <p>© 2026 Powe. All rights reserved.</p>

          <div className="flex gap-6">
            <Link href="#">Terms</Link>
            <Link href="#">Privacy</Link>
            <Link href="#">Cookies</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}