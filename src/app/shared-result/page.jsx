'use client';

import Link from 'next/link';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Trophy,
  Target,
  BarChart3,
} from 'lucide-react';
import FancyButton from '@/components/ui/FancyButton';

export default function SharedProfilePage() {
  const performanceStats = [
    {
      icon: '/dart.svg',
      fallbackIcon: <Target size={34} className="text-red-500" />,
      value: '1/5',
      label: 'CORRECT',
    },
    {
      icon: '/diamond.svg',
      fallbackIcon: null,
      value: '10',
      label: 'POINTS',
    },
    {
      icon: '/flag.svg',
      fallbackIcon: null,
      value: '20%',
      label: 'SCORE',
    },
    {
      icon: '/network.svg',
      fallbackIcon: <BarChart3 size={34} className="text-yellow-400" />,
      value: '#126',
      label: 'OF 158',
    },
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
      {/* Purple Result Section */}
      <section className="relative min-h-[700px] overflow-hidden bg-[#5C259E] text-white">
        {/* Background pattern */}
        <div className="pointer-events-none absolute inset-0 opacity-25">
          <div className="absolute left-[18%] top-[4%] text-5xl font-bold">+</div>
          <div className="absolute left-[35%] top-[20%] text-3xl font-bold">+</div>
          <div className="absolute right-[33%] top-[25%] text-3xl font-bold">+</div>
          <div className="absolute right-[10%] top-[67%] text-4xl font-bold">+</div>
          <div className="absolute left-[7%] top-[72%] text-4xl font-bold">+</div>
          <div className="absolute left-[19%] top-[68%] text-5xl font-bold">×</div>
          <div className="absolute right-[13%] top-[17%] text-3xl font-bold">×</div>
          <div className="absolute left-[37%] top-[33%] text-sm">▪</div>
          <div className="absolute right-[25%] top-[58%] text-sm">▪</div>
          <div className="absolute left-[50%] top-[40%] text-sm">▪</div>
          <div className="absolute left-[10%] top-[20%] text-sm">▪</div>
          <div className="absolute right-[8%] top-[48%] text-sm">▪</div>
        </div>

        {/* Header */}
        <header className="relative z-10 flex h-[70px] items-center justify-between border-b border-white/15 px-[72px]">
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/logo-img 1.svg"
              alt="Trivia"
              className="h-9 w-9 object-contain brightness-0 invert"
            />
            <span className="text-[28px] font-bold leading-none tracking-wide">
              Trivia
            </span>
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

        {/* Result content */}
        <div className="relative z-10 mx-auto flex w-full max-w-[580px] flex-col pt-12">
          <h1 className="text-center text-[42px] font-bold leading-tight tracking-tight">
            Trivia quiz result
          </h1>

          {/* User */}
          <div className="mt-12 flex items-center justify-center gap-4">
            <div className="h-[58px] w-[58px] overflow-hidden rounded-full border-[3px] border-white bg-purple-200">
              <img
                src="https://api.dicebear.com/7.x/adventurer/svg?seed=Trella"
                alt="Trella Olu"
                className="h-full w-full object-cover"
              />
            </div>

            <div>
              <h2 className="text-[22px] font-bold leading-tight">
                Trella Olu
              </h2>
              <p className="mt-1 text-sm font-medium text-white/90">
                Trivia player
              </p>
            </div>
          </div>

          {/* Quiz card */}
          <div className="mt-14 flex h-[55px] items-center rounded-lg bg-white px-5 text-black shadow-sm">
            <div className="mr-4 flex h-8 w-8 items-center justify-center">
              <Trophy size={26} className="text-yellow-500" />
            </div>

            <div>
              <h3 className="text-sm font-bold text-black">English quiz</h3>
              <p className="mt-0.5 text-xs text-gray-500">Trivia</p>
            </div>
          </div>

          {/* Performance */}
          <div className="mt-6">
            <h3 className="mb-6 text-[18px] font-bold text-white">
              Quiz Performance
            </h3>

            <div className="rounded-2xl border border-white/30 bg-[#5C259E]/40 p-5">
              <div className="grid grid-cols-2 gap-4">
                {performanceStats.map((stat, index) => (
                  <div
                    key={index}
                    className="flex h-[74px] items-center gap-5 rounded-xl bg-[#A474DB] px-5"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center">
                      {stat.icon ? (
                        <img
                          src={stat.icon}
                          alt={stat.label}
                          className="h-9 w-9 object-contain"
                        />
                      ) : (
                        stat.fallbackIcon
                      )}
                    </div>

                    <div>
                      <p className="text-[20px] font-bold leading-tight text-white">
                        {stat.value}
                      </p>
                      <p className="mt-2 text-[10px] font-medium uppercase text-white/75">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* You might also like */}
      <main className="bg-white px-[72px] py-14">
        <section>
          <div className="mb-10 flex items-center justify-between">
            <h2 className="text-[32px] font-bold text-gray-900">
              You might also like
            </h2>

            <div className="flex h-10 items-center gap-2 rounded-lg bg-[#6B21A8] px-3 text-white">
              <button
                type="button"
                className="flex h-6 w-6 items-center justify-center rounded-full border border-white/70"
              >
                <ChevronLeft size={16} />
              </button>

              <button
                type="button"
                className="flex h-6 w-6 items-center justify-center rounded-full border border-white/70"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-9">
            {recommendations.map((item, index) => (
              <div key={index}>
                <div className="h-[285px] overflow-hidden rounded-xl bg-purple-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                <h3 className="mt-5 text-lg font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#3C1658] px-[72px] py-16 text-white">
        <div className="flex items-start justify-between">
          <div>
            <div className="mb-10 flex items-center gap-3">
              <img
                src="/logo-img 1.svg"
                alt="Trivia"
                className="h-9 w-9 object-contain brightness-0 invert"
              />
              <span className="text-[28px] font-bold tracking-wide">
                Trivia
              </span>
            </div>

            <p className="max-w-[430px] text-sm leading-6 text-white/75">
              Design amazing digital experiences that create more happy in
              the world.
            </p>
          </div>

          <div className="mr-[420px] flex gap-10 text-sm text-white/90">
            <Link href="#">Contact</Link>
            <Link href="#">About</Link>
          </div>
        </div>

        <div className="mt-16 flex items-center justify-between border-t border-white/45 pt-8 text-sm text-white/75">
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