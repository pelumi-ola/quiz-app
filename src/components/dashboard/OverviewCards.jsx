'use client';

export default function OverviewCards() {
  const cards = [
    {
      title: 'Wins',
      value: 12,
      image: '/tabler_award.svg',
      bg: 'bg-[#FFFFFF]',
    },
    {
      title: 'Total Points',
      value: 143,
      image: '/connection.svg',
      bg: 'bg-[#FFFFFF]',
    },
    {
      title: 'Total earnings',
      value: '₦5,000',
      image: '/02 (4).svg',
      bg: 'bg-[#FFFFFF]',
    },
    {
      title: 'Daily streak',
      value: 8,
      image: '/heroicons_fire.svg',
      bg: 'bg-[#FFFFFF]',
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-4 mb-8">
      {cards.map((card, idx) => (
        <div
          key={idx}
          className={`${card.bg} rounded-2xl p-5 flex flex-col justify-between min-h-[140px] outline-1`}
        >
          {/* Top row */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-contain"
              />
            </div>

            <span className="text-black text-sm font-medium ">
              {card.title}
            </span>
          </div>

          {/* Bottom value */}
          <p className="text-black text-3xl font-bold mt-6">
            {card.value}
          </p>
        </div>
      ))}
    </div>
  );
}