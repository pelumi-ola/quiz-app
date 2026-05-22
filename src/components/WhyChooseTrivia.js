"use client";

export default function WhyChooseTrivia() {
  const features = [
    {
      title: "Earn money",
      description:
        "Turn your performance into real money. Every quiz you complete increases your earnings.",
      icon: "/hugeicons_money-bag-02.svg",
      bgColor: "bg-emerald-50",
      topIcon: "/Circle pattern.svg",
      borderColor: "border-emerald-200",
    },
    {
      title: "Live leaderboard",
      description:
        "Track your performance, rankings, and compete with real players to see who tops the board.",
      icon: "/hugeicons_money-bag-02 (1).svg",
      bgColor: "bg-orange-50",
      topIcon: "/Vector.svg",
      borderColor: "border-orange-200",
    },
    {
      title: "Gain knowledge",
      description:
        "Discover weak areas and sharpen your knowledge, speed, and accuracy through fun quizzes.",
      icon: "/hugeicons_money-bag-02 (2).svg",
      bgColor: "bg-purple-50",
      topIcon: "/Group.svg",
      borderColor: "border-purple-200",
    },
  ];

  return (
    <section id="why-choose" className="bg-white py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why Choose Trivia?
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 place-items-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${feature.bgColor} relative overflow-hidden rounded-2xl w-full max-w-sm p-8 text-left flex flex-col justify-start border ${feature.borderColor}`}
            >
              {/* Top-right pattern background */}
              <img
                src={feature.topIcon}
                alt=""
                className="absolute top-0 right-0 w-[100px] h-[100px] object-contain opacity-60"
              />

              {/* Icon circle */}
              <div className="w-[80px] h-[80px] rounded-full bg-white flex items-center justify-center mb-8 relative z-10">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-10 h-10 object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 text-base leading-relaxed relative z-10">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
