'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useState } from 'react';
import QuizResults from '@/components/QuizResults';

const mockQuizzes = {
  1: {
    title: 'General Knowledge',
    questions: [
      {
        id: 1,
        question: 'What is the capital of France?',
        options: ['London', 'Berlin', 'Paris', 'Madrid'],
        correctAnswer: 2,
      },
      {
        id: 2,
        question: 'Which planet is known as the Red Planet?',
        options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
        correctAnswer: 1,
      },
      {
        id: 3,
        question: 'What is the largest ocean on Earth?',
        options: ['Atlantic', 'Indian', 'Arctic', 'Pacific'],
        correctAnswer: 3,
      },
      {
        id: 4,
        question: 'Who painted the Mona Lisa?',
        options: ['Michelangelo', 'Leonardo da Vinci', 'Raphael', 'Donatello'],
        correctAnswer: 1,
      },
      {
        id: 5,
        question: 'What is the smallest prime number?',
        options: ['0', '1', '2', '3'],
        correctAnswer: 2,
      },
    ],
  },
  2: {
    title: 'Science & Nature',
    questions: [
      {
        id: 1,
        question: 'What is the chemical symbol for Gold?',
        options: ['Go', 'Gd', 'Au', 'Ag'],
        correctAnswer: 2,
      },
      {
        id: 2,
        question: 'How many bones are in the human body?',
        options: ['186', '206', '226', '246'],
        correctAnswer: 1,
      },
      {
        id: 3,
        question: 'What is the speed of light?',
        options: ['3 × 10^8 m/s', '3 × 10^7 m/s', '3 × 10^9 m/s', '3 × 10^6 m/s'],
        correctAnswer: 0,
      },
    ],
  },
};

export default function QuizInterface({ categoryId = '1' }) {
  const quiz = mockQuizzes[categoryId] || mockQuizzes[1];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerSelect = (optionIndex) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestion]: optionIndex,
    }));
  };

  const handleNext = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    quiz.questions.forEach((q, index) => {
      if (selectedAnswers[index] === q.correctAnswer) {
        correct++;
      }
    });
    return {
      correct,
      total: quiz.questions.length,
      percentage: Math.round((correct / quiz.questions.length) * 100),
    };
  };

  if (quizCompleted) {
    const score = calculateScore();
    return <QuizResults score={score} />;
  }

  const question = quiz.questions[currentQuestion];
  const progress = ((currentQuestion + 1) / quiz.questions.length) * 100;

  return (
    <div className="py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            {quiz.title}
          </h1>
          <p className="text-foreground/70">
            Question {currentQuestion + 1} of {quiz.questions.length}
          </p>
        </div>

        {/* Progress Bar */}
        <Progress value={progress} className="mb-8 h-2" />

        {/* Question Card */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-8">
            {question.question}
          </h2>

          {/* Options */}
          <div className="space-y-3">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                  selectedAnswers[currentQuestion] === index
                    ? 'border-primary bg-primary/10 text-foreground font-semibold'
                    : 'border-border hover:border-primary/50 text-foreground'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                      selectedAnswers[currentQuestion] === index
                        ? 'border-primary bg-primary text-white'
                        : 'border-border'
                    }`}
                  >
                    {selectedAnswers[currentQuestion] === index && (
                      <span className="text-sm font-bold">✓</span>
                    )}
                  </div>
                  <span>{option}</span>
                </div>
              </button>
            ))}
          </div>
        </Card>

        {/* Navigation Buttons */}
        <div className="flex gap-4 justify-between">
          <Button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            variant="outline"
            className="border-border"
          >
            Previous
          </Button>

          <div className="flex gap-2">
            {quiz.questions.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentQuestion(index)}
                className={`w-10 h-10 rounded border-2 font-semibold transition-all ${
                  index === currentQuestion
                    ? 'border-primary bg-primary text-white'
                    : selectedAnswers[index] !== undefined
                    ? 'border-primary/50 bg-primary/10 text-primary'
                    : 'border-border text-foreground hover:border-primary'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>

          <Button
            onClick={handleNext}
            className="bg-primary hover:bg-primary/90 text-white"
          >
            {currentQuestion === quiz.questions.length - 1
              ? 'Submit'
              : 'Next'}
          </Button>
        </div>
      </div>
    </div>
  );
}
