"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import FancyButton from "@/components/ui/FancyButton";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 ml-7">
            <div className="w-[50px] h-[48px] flex items-center justify-center">
              <img
                src="/logo-img 1.svg"
                alt="Logo"
                className="w-full h-full object-contain"
              />
            </div>

            <span className="font-bold text-foreground text-lg [font-family:var(--font-inter)]">
              Trivia
            </span>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#"
              className="text-sm text-foreground hover:text-primary transition font-medium"
            >
              Home
            </a>
            <a
              href="#leaderboard"
              className="text-sm text-foreground hover:text-primary transition font-medium"
            >
              Leaderboard
            </a>
            <a
              href="#faq"
              className="text-sm text-foreground hover:text-primary transition font-medium"
            >
              About
            </a>
          </nav>

          {/* Auth Button */}
            <FancyButton href="/login" className="w-[150px] h-[50px] text-sm px-4">
  Sign in
</FancyButton>
          {/* <div className="hidden md:flex items-center gap-4">
            <Link href="/login">
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-md w-[144px] h-[48px]">
              <img src="/drop 1.svg" alt="icon" className="w-4 h-4 mr-2 -ml-12 -mt-8" />
                Sign in →
              </Button>
            </Link>
          </div> */}

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 border-t border-border">
            <a
              href="#hero"
              className="block py-2 text-sm text-foreground hover:text-primary font-medium"
            >
              Home
            </a>
            <a
              href="#leaderboard"
              className="block py-2 text-sm text-foreground hover:text-primary font-medium"
            >
              Leaderboard
            </a>
            <a
              href="#faq"
              className="block py-2 text-sm text-foreground hover:text-primary font-medium"
            >
              About
            </a>
            <div className="mt-4">
              <Link href="/login" className="w-full">
                <Button className="w-full bg-primary text-white rounded-full">
                  Sign in →
                </Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
