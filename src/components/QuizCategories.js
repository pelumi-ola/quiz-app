"use client";

import Link from "next/link";
import { Card } from "@/components/ui/card"; // keep using your UI card base
import { Button } from "@/components/ui/button"; // same for button
import Image from "next/image";
import { User } from 'lucide-react';

export default function QuizCategories() {
  const categories = [
    {
      id: 1,
      title: "English",
      players: "246 playing",
      color: "bg-[#FF3B8E]",
      image: "/Whisk2.svg",
    },
    {
      id: 2,
      title: "Mathematics",
      players: "208 playing",
      color: "bg-[#3560FF]",
      image: "/calc.svg",
    },
    {
      id: 3,
      title: "History",
      players: "245 playing",
      color: "bg-[#8E49FF]",
      image: "/Whisk.svg",
    },
  ];

  return (
    <section id="categories" className="py-16 px-4 sm:px-6 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Quiz Categories
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Explore a wide range of quiz topics designed to match your interests
            and challenge your knowledge. There’s always something new to play
            and learn.
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid md:grid-cols-3 gap-6 justify-items-center">
          {categories.map((category) => (
            <Link key={category.id} href="/login" className="w-full max-w-sm">
              <Card
                className={`${category.color} relative text-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 p-6 h-[240px] flex flex-col`}
              >
                {/* Title */}
                <h3 className="text-xl font-bold mb-2">{category.title}</h3>

                {/* Player count */}
                <div className="flex items-center text-sm mb-auto">
                  {/* Small green online dot */}
                  <span className="block w-2 h-2 rounded-full bg-green-400 mr-2"></span>
                  <User className="w-4 h-4 mr-2"/>
                  <span className="opacity-90">{category.players}</span>
                </div>

                {/* Background illustration */}
                <img
                  src={category.image}
                  alt={category.title}
                  className="absolute bottom-4 right-0 w-24.6 h-20.3 object-contain pointer-events-none"
                />

                {/* Play button */}
                <div className="mt-auto">
                  <Button className="bg-white text-gray-900 flex items-center gap-2 px-4 py-5 rounded-md hover:bg-gray-100 text-sm font-semibold ">
                    {/* Replace this emoji with your real icon export later */}
                    <Image
                      src="/controller.svg"
                      alt="game controller"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                    Play now
                  </Button>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
