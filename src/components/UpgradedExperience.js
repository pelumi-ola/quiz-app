"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import FancyButton from "./ui/FancyButton";

export default function UpgradedExperience() {
  return (
    <section className="bg-white py-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        
        {/* LEFT CONTENT */}
        <div className="flex-1 max-w-xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
            An upgraded gaming<br className="hidden sm:block" /> experience
          </h2>
          <p className="text-base text-gray-600 mb-8 leading-relaxed">
            Enjoy a smoother, faster, and more immersive quiz experience. 
            It’s now fully accessible on the web. Play anytime, anywhere 
            with better visuals, performance, and control.
          </p>
         <Link href="/login">
              <FancyButton className="text-sm" showArrow={false}>
                Subscribe Now
              </FancyButton>
            </Link>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 flex justify-center lg:justify-end">
          {/* Replace this with your actual exported illustration */}
          <Image
            src="/13035.png"
            alt="Laptop and phone quiz illustration"
            width={520}
            height={340}
            className="object-contain rounded-2xl"
          />
        </div>

      </div>
    </section>
  );
}
