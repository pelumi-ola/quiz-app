"use client";

import { Card } from "@/components/ui/card";

export default function Leaderboard() {
  // Each player will use a DiceBear "adventurer" style avatar
  const getAvatarUrl = (seed) =>
    `https://api.dicebear.com/7.x/adventurer/svg?seed=${encodeURIComponent(seed)}`;
  const topPlayers = [
    {
      rank: 2,
      name: "Liam",
      quizzes: 23,
      earnings: "₦52,000",
      avatar: getAvatarUrl("Liam"),
      avatarBg: "#8DBBFF"
    },
    {
      rank: 1,
      name: "Adrian",
      quizzes: 57,
      earnings: "₦80,000",
      isCentered: true,
      avatar: getAvatarUrl("Adrian"),
      avatarBg: "#5749F6"
    },
    {
      rank: 3,
      name: "Luis",
      quizzes: 19,
      earnings: "₦32,000",
      avatar: getAvatarUrl("Luis"),
      avatarBg: "#A495FF"
    },
  ];

  return (
    <section
      id="leaderboard"
      className="relative bg-white py-20 px-6 lg:px-20 overflow-hidden"
    >
      {/* Decorative arcs */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full border-[40px] border-[#ede9f8]" />
      <div className="pointer-events-none absolute -top-20 -right-24 w-64 h-64 rounded-full border-[35px] border-[#ede9f8]" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-4xl font-black text-gray-900 mb-4">
            Leaderboard
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            See how you rank against other players in real time. Climb the
            leaderboard, track your progress, and stay motivated to reach the
            top and win rewards.
          </p>
        </div>

        {/* Subheading */}
        <h3 className="text-2xl font-bold text-purple-700 mb-30">
          Top Players
        </h3>

        {/* Top Players Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-12 sm:gap-x-6 items-end justify-items-center">
          {topPlayers.map((player) => (
            <div
              key={player.rank}
              className={`flex flex-col items-center transition-transform duration-300 ${
                player.isCentered
                  ? "-translate-y-20 scale-105"
                  : "hover:-translate-y-2"
              }`}
            >
              <Card className="w-70 bg-gray-50 rounded-2xl px-5 pt-5 pb-5 flex flex-col items-center">
                {/* Avatar */}
               <div className="w-[70px] h-[70px] rounded-full overflow-hidden mb-4" 
                    style={{ backgroundColor: player.avatarBg}}>
    <img
      src={player.avatar}
      alt={`${player.name} avatar`}
      className="w-full h-full object-cover"
    />
  </div>

    <div className="flex flex-col justify-center items-center w-full">
       {/* Name */}
                <h4 className="text-base font-bold text-gray-900 mb-3">
                  {player.name}
                </h4>
                {/* Stats */}
                <div className="w-full bg-white border border-gray-100 rounded-lg py-2.5 px-3.5 flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center gap-1.5">
                    <span role="img" aria-label="quiz">
                      🧠
                    </span>
                    <span>{player.quizzes} quizzes</span>
                  </div>
                  <span className="font-semibold text-gray-800 text-sm">
                    {player.earnings}
                  </span>
                </div>
    </div>
              </Card>

              {/* Rank */}
              <p
                className={`mt-5 text-3xl font-black ${
                  player.rank === 1 ? "text-[black]" : "text-gray-900"
                }`}
              >
                0{player.rank}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
