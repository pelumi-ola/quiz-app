"use client";

import { useEffect, useState } from "react";
import { Share2, X, Copy } from "lucide-react";
import Link from "next/link";

export default function ProfilePage() {
  const [showShareModal, setShowShareModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const [loggedInPhone, setLoggedInPhone] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const savedPhone = window.localStorage.getItem("triviaUserPhone");
    setLoggedInPhone(savedPhone || "");
  }, []);

  const profileLink = "https://trivia.com/profile/trella-olu";

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(profileLink);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.log("Failed to copy link:", error);
    }
  };

  const maskPhone = (phone) => {
    if (!phone) return "081*******4568";

    return phone.length >= 10
      ? `${phone.slice(0, 3)}*******${phone.slice(-4)}`
      : phone;
  };

  const stats = [
    { icon: "/star.svg", value: "0", label: "Wins" },
    { icon: "/brain.svg", value: "16", label: "Quizzes" },
    { icon: "/diamond.svg", value: "55", label: "Points" },
    { icon: "/drive.svg", value: "₦12,000", label: "Earnings" },
    { icon: "/star-circle.svg", value: "5.8%", label: "Win rate" },
    { icon: "/fire.svg", value: "12", label: "Streak" },
  ];

  const achievements = [
    {
      title: "Gold winner",
      category: "@History",
      date: "14/05/26",
      rank: "#1",
      points: "2,400",
      earnings: "₦2,400",
      medal: "/sportsmedal.svg",
    },
    {
      title: "Gold winner",
      category: "@History",
      date: "14/05/26",
      rank: "#1",
      points: "2,400",
      earnings: "₦2,400",
      medal: "/sportsmedal.svg",
    },
  ];

  // Only this number should show achievements
  const achievementAllowedPhone = "08012345678";

  const hasAchievements =
    loggedInPhone === achievementAllowedPhone && achievements.length > 0;

  return (
    <div className="flex flex-col">
      {/* Profile hero */}
      <section className="flex flex-col items-center pt-10 pb-8 border-b border-gray-100">
        <div className="w-24 h-24 rounded-full overflow-hidden bg-purple-200 mb-4">
          <img
            src="https://api.dicebear.com/7.x/adventurer/svg?seed=Trella"
            alt="Trella Olu"
            className="w-full h-full object-cover"
          />
        </div>

        <h2 className="text-lg font-bold text-gray-900">Trella Olu</h2>

        <p className="text-sm font-medium text-gray-500 mt-0.5">
          Trivia Player
        </p>

        <p className="text-sm text-gray-400 mt-0.5">
          {maskPhone(loggedInPhone)}
        </p>

        {/* Mini stats */}
        <div className="flex items-center gap-8 mt-6">
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900">55</p>
            <p className="text-xs text-gray-400 mt-0.5">Total points</p>
          </div>

          <div className="w-px h-10 bg-gray-200" />

          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900">16</p>
            <p className="text-xs text-gray-400 mt-0.5">Quizzes</p>
          </div>

          <div className="w-px h-10 bg-gray-200" />

          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900">3</p>
            <p className="text-xs text-gray-400 mt-0.5">Winnings</p>
          </div>
        </div>

        {/* Share button */}
        <button
          type="button"
          onClick={() => setShowShareModal(true)}
          className="mt-6 flex items-center gap-2 border border-gray-300 text-gray-700 text-sm font-medium px-5 py-2 rounded-xl hover:bg-gray-50 transition-colors"
        >
          <Share2 size={15} />
          Share my profile
        </button>
      </section>

      {/* Overall Statistics */}
      <section className="px-8 py-8">
        <h3 className="text-lg font-bold text-gray-900 mb-5">
          Overall statistics
        </h3>

        <div className="grid grid-cols-3 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border border-gray-200 rounded-2xl p-5 flex items-center gap-4"
            >
              <img
                src={stat.icon}
                alt={stat.label}
                className="w-10 h-10 object-contain"
              />

              <div>
                <p className="text-xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-xs text-gray-400 mt-0.5">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements */}
      <section className="px-8 pb-10">
        <h3 className="text-lg font-bold text-gray-900 mb-5">Achievements</h3>

        {hasAchievements ? (
          <div className="grid grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#4B0082] to-[#8A0EEA] p-6 text-white min-h-[175px]"
              >
                <img
                  src={achievement.medal}
                  alt={achievement.title}
                  className="absolute top-0 right-8 w-16 h-16 object-contain"
                />

                <div className="mb-10">
                  <h4 className="text-xl font-bold">{achievement.title}</h4>

                  <p className="text-xs text-white/80 mt-1">
                    {achievement.category} ・ {achievement.date}
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-xs text-white/80 mb-1">Rank</p>
                    <p className="text-lg font-bold">{achievement.rank}</p>
                  </div>

                  <div>
                    <p className="text-xs text-white/80 mb-1">Total points</p>
                    <p className="text-lg font-bold">{achievement.points}</p>
                  </div>

                  <div>
                    <p className="text-xs text-white/80 mb-1">Earnings</p>
                    <p className="text-lg font-bold">{achievement.earnings}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="border border-gray-200 rounded-2xl p-10 flex flex-col items-center justify-center text-center">
            <img
              src="/folder.svg"
              alt="No achievement"
              className="w-28 h-28 object-contain mb-5"
            />

            <p className="text-base font-bold text-gray-900">
              No achievement yet!!
            </p>

            <p className="text-sm text-gray-400 mt-1 mb-6">
              Play games, win to unlock achievements
            </p>

            <Link
              href="/quiz"
              className="flex items-center gap-2 bg-[#6B21A8] text-white text-sm font-semibold px-6 py-3 rounded-xl border-b-[3px] border-b-[#3C1658] hover:bg-[#591A90] transition-colors"
            >
              <img src="/drop 1.svg" alt="icon" className="w-4 h-4" />
              Continue Playing
            </Link>
          </div>
        )}
      </section>

      {/* Share profile modal */}
      {showShareModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
          <div className="relative w-[430px] rounded-3xl bg-white px-6 py-6 shadow-2xl">
            {/* Modal header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-gray-900">Share</h2>

              <button
                type="button"
                onClick={() => setShowShareModal(false)}
                className="text-gray-400 hover:text-gray-700 transition-colors"
              >
                <X size={22} />
              </button>
            </div>

            {/* Profile info */}
            <div className="flex flex-col items-center text-center">
              {/* Logo above avatar */}
              <div className="flex items-center justify-center gap-2 mb-4">
                <img
                  src="/logo-img 1.svg"
                  alt="Trivia"
                  className="w-12 h-12 object-contain"
                />

                <span className="text-xl font-bold text-gray-900">Trivia</span>
              </div>

              <div className="w-24 h-24 rounded-full overflow-hidden bg-purple-200 mb-4">
                <img
                  src="https://api.dicebear.com/7.x/adventurer/svg?seed=Trella"
                  alt="Trella Olu"
                  className="w-full h-full object-cover"
                />
              </div>

              <h2 className="text-xl font-bold text-gray-900">Trella Olu</h2>

              <p className="text-sm font-medium text-gray-500 mt-1">
                Trivia Player
              </p>

              <p className="text-sm text-gray-400 mt-1">
                {maskPhone(loggedInPhone)}
              </p>
            </div>

            {/* Stats */}
            <div className="mt-7 flex items-center justify-center gap-7">
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">55</p>
                <p className="text-xs text-gray-400 mt-1">Total points</p>
              </div>

              <div className="w-px h-10 bg-gray-200" />

              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">16</p>
                <p className="text-xs text-gray-400 mt-1">Quizzes</p>
              </div>

              <div className="w-px h-10 bg-gray-200" />

              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">3</p>
                <p className="text-xs text-gray-400 mt-1">Winnings</p>
              </div>
            </div>

            {/* Social share icons */}
            <div className="mt-8 grid grid-cols-4 gap-5">
              {/* Copy link */}
              <button
                type="button"
                onClick={handleCopyLink}
                className="flex flex-col items-center gap-2"
              >
                <div className="w-14 h-14 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors">
                  <Copy size={22} className="text-gray-800" />
                </div>

                <span className="text-xs font-semibold text-gray-600">
                  {copied ? "Copied" : "Copy link"}
                </span>
              </button>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/?text=${encodeURIComponent(profileLink)}`}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center gap-2"
              >
                <div className="w-14 h-14 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors">
                  <img
                    src="/whatsapp-icon.svg"
                    alt="WhatsApp"
                    className="w-7 h-7 object-contain"
                  />
                </div>

                <span className="text-xs font-semibold text-gray-600">
                  WhatsApp
                </span>
              </a>

              {/* X */}
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                  profileLink
                )}`}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center gap-2"
              >
                <div className="w-14 h-14 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors">
                  <img
                    src="/x.svg"
                    alt="X"
                    className="w-6 h-6 object-contain"
                  />
                </div>

                <span className="text-xs font-semibold text-gray-600">X</span>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center gap-2"
              >
                <div className="w-14 h-14 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors">
                  <img
                    src="/instagram.svg"
                    alt="Instagram"
                    className="w-7 h-7 object-contain"
                  />
                </div>

                <span className="text-xs font-semibold text-gray-600">
                  Instagram
                </span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}