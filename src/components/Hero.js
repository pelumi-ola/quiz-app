import { Button } from "@/components/ui/button";
import FancyButton from "./ui/FancyButton";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-white px-4 sm:px-6 lg:px-20 pt-4 lg:pt-5 pb-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 items-center gap-10">
          {/* Left Content */}
          <div className="max-w-xl">
            <h1 className="text-[42px] md:text-[56px] lg:text-[45px] font-black text-black leading-[1.12] tracking-[-0.03em] mb-7">
              Learn, Play, Climb
              <br />
              The Leaderboard,
              <br />
              and Earn In{" "}
              <span className="text-primary">
                Real
                <br />
                Time
              </span>
            </h1>

            <p className="max-w-xl text-[16px] text-gray-600 leading-[1.55] mb-10">
              Join millions of people to play games and earn money weekly. Turn
              every correct answer into real earnings. Outperform others and
              dominate the leaderboard.
            </p>

            <FancyButton href="/login" showArrow={false} className="text-sm">
              Start earning now
            </FancyButton>
          </div>

          {/* Right Visual */}
          <div className="relative flex items-center justify-center min-h-[420px]">
            {/* Floating Card */}

            {/* Image Space */}
            <div className="relative w-full max-w-[616px] h-[656px] -mt-4 flex items-end justify-center">
              <img
                src="/Image frame.png"
                alt="Person playing trivia"
                className="w-full h-full object-contain object-bottom"
              />  
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
