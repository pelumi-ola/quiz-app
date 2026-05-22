"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import FancyButton from "@/components/ui/FancyButton";

export default function QuizQuestionsPage() {
  const router = useRouter();
  const topics = [
    {
      title: "English",
      description: "Test your grammar, vocabulary, and comprehension.",
      image: "/english.svg",
      href: "/quiz-questions",
    },
    {
      title: "Mathematics",
      description: "Challenge your mathematical skills and history",
      image: "/mathematics.svg",
      href: "/quiz-questions",
    },
    {
      title: "History",
      description: "Explore historical and world events and Nigerian culture",
      image: "/history.svg",
      href: "/quiz-questions",
    },
  ];

  const howItWorks = [
    {
      icon: "⏰",
      text: "10 seconds per question. Answer before the timer runs out",
    },
    {
      icon: "🔷",
      text: "10 points for each correct answer",
    },
    {
      icon: "🏆",
      text: "Top scorers in the leaderboard wins a prize at the end of the week",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Top logo bar */}
      <header className="h-[78px] border-b border-gray-100 flex items-center justify-between px-8">
  <Link href="/dashboard" className="flex items-center gap-3">
    <img src="/logo-img 1.svg" alt="Trivia" className="w-9 h-9" />
    <span className="text-2xl font-bold text-black">Trivia</span>
  </Link>

  <button
    type="button"
    onClick={() => router.back()}
    className="inline-flex items-center text-gray-900 hover:text-[#6B21A8] transition-colors"
  >
    <ArrowLeft size={30} />
  </button>
</header>

      <main className="px-20 py-10">
        {/* Back arrow */}        

        {/* Page title */}
        <section className="text-center -mt-4">
          <h1 className="text-3xl font-bold text-gray-900">Play quiz</h1>
          <p className="text-base text-gray-500 mt-3">
            Choose a topic to get started
          </p>
        </section>

        {/* Topic cards */}
        <section className="grid grid-cols-3 gap-8 mt-20">
          {topics.map((topic) => (
            <div
              key={topic.title}
              className="border border-gray-200 rounded-2xl p-6 bg-white"
            >
              <img
                src={topic.image}
                alt={topic.title}
                className="w-24 h-20 object-contain mb-7"
              />

              <h2 className="text-xl font-bold text-gray-900">{topic.title}</h2>

              <p className="text-sm text-gray-500 leading-6 mt-3 min-h-[48px]">
                {topic.description}
              </p>

              {/* Details box */}
              <div className="border border-gray-100 rounded-xl mt-7 overflow-hidden">
                <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-500" />
                    <span className="text-sm text-gray-500">Avg. time</span>
                  </div>

                  <span className="text-sm font-semibold text-gray-900">
                    50s
                  </span>
                </div>

                <div className="flex items-center justify-between px-4 py-3">
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-500" />
                    <span className="text-sm text-gray-500">
                      Highest questions
                    </span>
                  </div>

                  <span className="text-sm font-semibold text-gray-900">5</span>
                </div>
              </div>

              <FancyButton
                href={topic.href}
                fullWidth
                showArrow={false}
                icon="/drop 1.svg"
                className="mt-7 h-[50px] text-base justify-center"
              >
                <span className="w-full text-center">Play quiz</span>
              </FancyButton>
            </div>
          ))}
        </section>

        {/* How it works */}
        <section className="border border-gray-200 rounded-2xl p-6 mt-14">
          <h2 className="text-xl font-bold text-gray-900">How it works</h2>
          <p className="text-sm text-gray-500 mt-2">Learn how to play a quiz</p>

          <div className="h-px bg-gray-200 my-6" />

          <div className="space-y-4">
            {howItWorks.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <span className="text-xl w-6">{item.icon}</span>
                <p className="text-sm text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
