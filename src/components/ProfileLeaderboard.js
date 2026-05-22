"use client";

import { useState, useEffect } from "react";
import { AlarmClock } from "lucide-react";    

const tabs = ["English", "Mathematics", "History"];

const getAvatarUrl = (seed) =>
  `https://api.dicebear.com/7.x/adventurer/svg?seed=${encodeURIComponent(seed)}`;

const topPlayers = [
  {
    name: "Racheal Iro",
    phone: "081 **** 5321",
    points: 1256,
    avatar: getAvatarUrl("Racheal Iro"),
    podiumImage: "/2nd position.png",
    textColor: "primary",
  },
  {
    name: "Trella Olu",
    phone: "081 **** 5321",
    points: 1256,
    avatar: getAvatarUrl("Trella Olu"),
    podiumImage: "/1st position.png",
    textColor: "white",
  },
  {
    name: "David Mark",
    phone: "081 **** 5321",
    points: 1256,
    avatar: getAvatarUrl("David Mark"),
    podiumImage: "/4th position.png",
    textColor: "primary",
  },
];

const players = [
  {
    rank: 4,
    name: "Racheal Iro",
    phone: "081 **** 2390",
    points: 12241,
    earnings: 1064,
    highlight: true,
    avatar: getAvatarUrl("Racheal Iro 4"),
  },
  {
    rank: 5,
    name: "Racheal Iro",
    phone: "081 **** 2390",
    points: 12241,
    earnings: 1064,
    highlight: true,
    avatar: getAvatarUrl("Racheal Iro 5"),
  },
  {
    rank: 6,
    name: "Racheal Iro",
    phone: "081 **** 2390",
    points: 12241,
    earnings: 1064,
    highlight: true,
    avatar: getAvatarUrl("Racheal Iro 6"),
  },
  {
    rank: 7,
    name: "Racheal Iro",
    phone: "081 **** 2390",
    points: 12241,
    earnings: 1064,
    highlight: false,
    avatar: getAvatarUrl("Racheal Iro 7"),
  },
  {
    rank: 8,
    name: "Racheal Iro",
    phone: "081 **** 2390",
    points: 12241,
    earnings: 1064,
    highlight: false,
    avatar: getAvatarUrl("Racheal Iro 8"),
  },
  {
    rank: 9,
    name: "Racheal Iro",
    phone: "081 **** 2390",
    points: 12241,
    earnings: 1064,
    highlight: false,
    avatar: getAvatarUrl("Racheal Iro 9"),
  },
];

function useCountdown(targetSeconds) {
  const [timeLeft, setTimeLeft] = useState(targetSeconds);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((t) => (t > 0 ? t - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const d = Math.floor(timeLeft / 86400);
  const h = Math.floor((timeLeft % 86400) / 3600);
  const m = Math.floor((timeLeft % 3600) / 60);
  const s = timeLeft % 60;

  return `${d}d ${h}h ${m}m ${s}s`;
}

function Avatar({ src, alt = "Avatar", size = 48, className = "" }) {
  return (
    <img
      src={src}
      alt={alt}
      className={`rounded-full object-cover border-2 border-white bg-purple-100 ${className}`}
      style={{ width: size, height: size, minWidth: size }}
    />
  );
}

function Diamond({ size = 14, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 14 14"
      fill="none"
      className={className}
    >
      <path
        d="M7 1L13 7L7 13L1 7L7 1Z"
        fill="#60A5FA"
        stroke="#3B82F6"
        strokeWidth="0.5"
      />
    </svg>
  );
}

function PodiumBlock({ player, isFirst }) {
  const podiumWidth = isFirst ? 240 : 200;
  const avatarSize = isFirst ? 64 : 54;

  return (
    <div className="flex flex-col items-center">
      <Avatar
        src={player.avatar}
        alt={player.name}
        size={avatarSize}
        className="mb-1 shadow-lg"
      />

      <p
        className="text-xs text-gray-500 mb-2 text-center"
        style={{ fontSize: 11 }}
      >
        {player.phone}
      </p>

      <div className="relative flex items-center justify-center">
        <img
          src={player.podiumImage}
          alt={`Rank ${player.rank} podium`}
          className="object-contain"
          style={{ width: podiumWidth }}
        />

        <div className="absolute top-12 flex items-center px-3 py-1">
         
          <span
            className="text-[11px] font-semibold"
            style={{ color: player.textColor }}
          >
            {player.points.toLocaleString()} Pts
          </span>
        </div>
      </div>

      <p
        className="font-black text-gray-800 mt-1"
        style={{
          fontSize: isFirst ? 52 : 44,
          lineHeight: 1,
          fontFamily: "Georgia, serif",
        }}
      >
        {player.rank}
      </p>
    </div>
  );
}

export default function Leaderboard() {
  const [activeTab, setActiveTab] = useState("English");
  const countdown = useCountdown(2 * 86400 + 7 * 3600 + 41 * 60 + 58);

  return (
    <section className="px-8 py-8">
      <div className="bg-gray-100 rounded-xl p-1 flex mb-8 w-full">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all ${
              activeTab === tab
                ? "bg-white shadow-sm text-gray-900"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div
        className="flex items-end justify-center gap-8 mb-6"
        style={{ minHeight: 300 }}
      >
        <div className="mb-4">
          <PodiumBlock player={topPlayers[0]} isFirst={false} />
        </div>

        <div className="mb-10">
          <PodiumBlock player={topPlayers[1]} isFirst={true} />
        </div>

        <div className="mb-0">
          <PodiumBlock player={topPlayers[2]} isFirst={false} />
        </div>
      </div>

      <div className="flex flex-col items-center mb-5">
        <AlarmClock className="w-6 h-6 mb-1 text-gray-600" />
        <p className="text-xs text-gray-500">Ends in</p>
        <p className="font-bold text-sm text-gray-800">{countdown}</p>
      </div>

      <div className="flex justify-center mb-8">
        <div className="bg-gray-100 rounded-full px-5 py-2.5 flex items-center gap-1.5 text-sm text-gray-600">
          You earned
          <Diamond size={13} className="mx-0.5" />
          <span className="font-semibold text-gray-800">15 Pts</span>
          <span className="mx-1">today and you are ranked</span>
          <span className="font-bold text-gray-900">#32</span>
          <span>out of</span>
          <span className="font-bold text-gray-900">#1239</span>
        </div>
      </div>

      <div
        style={{ maxWidth: 880 }}
        className="mx-auto px-5 py-2.5 items-center"
      >
        <div className="grid grid-cols-4 px-4 pb-3 text-sm font-medium text-gray-500">
          <span>Rank</span>
          <span>User name</span>
          <span className="text-right">Points</span>
          <span className="text-right">Earnings</span>
        </div>

        <div className="flex flex-col gap-2">
          {players.map((p) => (
            <div
              key={p.rank}
              className={`grid grid-cols-4 items-center px-4 py-3 rounded-xl ${
                p.highlight
                  ? "bg-[#6B21A8] text-white"
                  : "bg-white border border-gray-100 text-gray-800"
              }`}
            >
              <span
                className={`font-bold text-base ${p.highlight ? "text-white" : "text-gray-800"}`}
              >
                {p.rank}
              </span>

              <div className="flex items-center gap-3">
                <Avatar src={p.avatar} alt={p.name} size={36} />

                <div>
                  <p
                    className={`font-semibold text-sm ${p.highlight ? "text-white" : "text-gray-800"}`}
                  >
                    {p.name}
                  </p>
                  <p
                    className={`text-xs ${p.highlight ? "text-white/70" : "text-gray-400"}`}
                  >
                    {p.phone}
                  </p>
                </div>
              </div>

              <span
                className={`text-right font-medium text-sm ${p.highlight ? "text-white" : "text-gray-700"}`}
              >
                {p.points.toLocaleString()}
              </span>

              <div className="flex justify-end">
                <div
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-semibold ${
                    p.highlight
                      ? "bg-white/20 text-white"
                      : "bg-blue-50 text-blue-700"
                  }`}
                >
                  <Diamond size={12} />
                  {p.earnings.toLocaleString()}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
