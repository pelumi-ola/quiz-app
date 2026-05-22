'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function QuizResults({ score }) {
  const [showModal, setShowModal] = useState(true);
  const earnedPoints = score.correct * 100;
  const earnedMoney = (score.correct * 50).toLocaleString();

  const getGrade = (percentage) => {
    if (percentage >= 90) return 'A+';
    if (percentage >= 80) return 'A';
    if (percentage >= 70) return 'B';
    if (percentage >= 60) return 'C';
    return 'D';
  };

  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Main Results Card */}
        <Card className="mb-8 overflow-hidden">
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-12 text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Quiz Ended</h1>
            <p className="text-foreground/70">Great job completing the quiz!</p>
          </div>

          <div className="p-12">
            {/* Score Display */}
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <div className="text-center p-6 bg-primary/10 rounded-lg">
                <div className="text-4xl font-bold text-primary mb-2">
                  {score.correct}
                </div>
                <p className="text-foreground/70 text-sm">Correct Answers</p>
              </div>

              <div className="text-center p-6 bg-secondary/10 rounded-lg">
                <div className="text-4xl font-bold text-secondary mb-2">
                  {score.total}
                </div>
                <p className="text-foreground/70 text-sm">Total Questions</p>
              </div>

              <div className="text-center p-6 bg-accent/10 rounded-lg">
                <div className="text-4xl font-bold text-accent mb-2">
                  ₹{earnedMoney}
                </div>
                <p className="text-foreground/70 text-sm">Earnings</p>
              </div>

              <div className="text-center p-6 bg-amber-100 rounded-lg">
                <div className="text-4xl font-bold text-amber-600 mb-2">
                  {getGrade(score.percentage)}
                </div>
                <p className="text-foreground/70 text-sm">Grade</p>
              </div>
            </div>

            {/* Percentage Score */}
            <div className="text-center mb-12 p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg">
              <div className="text-6xl font-bold text-primary mb-2">
                {score.percentage}%
              </div>
              <p className="text-foreground/70">Your Score</p>
            </div>

            {/* Stats Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card className="p-6 bg-background border-2 border-border">
                <h3 className="font-semibold text-foreground mb-4">Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-foreground/70">Points Earned:</span>
                    <span className="font-bold text-primary">{earnedPoints}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground/70">Time Taken:</span>
                    <span className="font-bold text-foreground">5 min 23 sec</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground/70">Accuracy:</span>
                    <span className="font-bold text-foreground">{score.percentage}%</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-background border-2 border-accent">
                <h3 className="font-semibold text-foreground mb-4">Rewards</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-foreground/70">Cash Earned:</span>
                    <span className="font-bold text-accent">₹{earnedMoney}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground/70">Leaderboard Rank:</span>
                    <span className="font-bold text-foreground">#4</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground/70">Bonus Multiplier:</span>
                    <span className="font-bold text-foreground">1.5x</span>
                  </div>
                </div>
              </Card>
            </div>

            {/* Action Buttons */}
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/quiz" className="block">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white py-6">
                  Take Another Quiz
                </Button>
              </Link>
              <Link href="/leaderboard" className="block">
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white py-6">
                  View Leaderboard
                </Button>
              </Link>
              <Link href="/profile" className="block">
                <Button variant="outline" className="w-full border-border py-6">
                  My Profile
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      </div>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <Card className="max-w-md w-full p-8 text-center">
            <div className="mb-4 flex justify-center">
              <CheckCircle size={64} className="text-green-500" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Amazing Work!
            </h2>
            <p className="text-foreground/70 mb-2">
              You scored {score.percentage}%
            </p>
            <p className="text-foreground/70 mb-6">
              You earned ₹{earnedMoney} and {earnedPoints} points!
            </p>
            <Button
              onClick={() => setShowModal(false)}
              className="w-full bg-primary hover:bg-primary/90 text-white"
            >
              Continue
            </Button>
          </Card>
        </div>
      )}
    </div>
  );
}
