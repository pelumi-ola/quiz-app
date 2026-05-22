"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import FancyButton from "./ui/FancyButton";
import Link from "next/link";
import Image from "next/image";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Make subscription",
      description:
        "Choose a plan that works for you and unlock full access to the platform. Subscribe in seconds and get ready to start playing and earning.",
      icon: "/Icons.svg", // replace later
      bg: "bg-green-50",
    },
    {
      number: "02",
      title: "Play game",
      description:
        "Jump into fast‑paced quizzes and answer questions within the time limit. Stay focused, score high, and compete with other players in real time.",
      icon: "/Vectors.svg",
      bg: "bg-purple-50",
    },
    {
      number: "03",
      title: "View results",
      description:
        "See your score instantly after each game session. Track your performance and find out where you rank on the leaderboard.",
      icon: "/files.svg",
      bg: "bg-blue-50",
    },
  ];

  return (
    <section id="how-it-works" className="bg-white py-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading with image */}
        <div className="flex flex-col lg:flex-row items-center justify-between mb-16 gap-8">
          {/* Left section */}
          <div className="flex-1 max-w-xl">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
              Simple steps to get<br className="hidden sm:block" /> started
            </h2>
            <p className="text-gray-600 mb-8 text-base leading-relaxed">
              Sign up, subscribe, and jump straight into the game. It’s quick,
              easy, and designed so you can start playing and earning in just a
              few steps.
            </p>
            <FancyButton href="/quizquestions" showArrow={false} className="text-sm">
              Start Earning
            </FancyButton>
          </div>

          {/* Right image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            {/* Replace with your real coin image */}
            <Image
              src="/Coins.png"
              alt="Coins stack"
              width={180}
              height={200}
              className="object-contain"
            />
          </div>
        </div>

         {/* Step cards — white cards on dark bg */}
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <Card
              key={i}
              className="rounded-2xl border border-gray-200 bg-white p-8 flex flex-col justify-between"
            >
              {/* Top row: number left, icon right */}
              <div className="flex items-start justify-between mb-10">
                <span className="text-6xl font-extrabold text-gray-900 leading-none">
                  {step.number}
                </span>
                <div
                  className={`${step.bg} rounded-2xl flex items-center justify-center p-4`}
                >
                  <Image
                    src={step.icon}
                    alt={step.title}
                    width={30}
                    height={30}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Bottom: title + description */}
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  {step.title}
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

      </div>

    </section>
  );
}
