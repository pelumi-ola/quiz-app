'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { X, Check } from 'lucide-react';
import GameEndModal from '@/components/auth/GameEndModal';

const QUESTION_TIME = 10;

const questions = [
  { id: 1, question: 'Is the biggest river in Africa river Niger?', answer: 'no' },
  { id: 2, question: 'Is Mount Everest the highest mountain in the world?', answer: 'yes' },
  { id: 3, question: 'Is the sun a planet?', answer: 'no' },
  { id: 4, question: 'Does water boil at 100°C?', answer: 'yes' },
  { id: 5, question: 'Is Python a type of snake?', answer: 'yes' },
];

export default function QuizExamScreen() {
  const [isExamActive, setIsExamActive] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [showEndModal, setShowEndModal] = useState(false);
  const [examEnded, setExamEnded] = useState(false);
  const [timeLeft, setTimeLeft] = useState(QUESTION_TIME);

  // Refs to always have latest values inside callbacks/effects
  const examEndedRef = useRef(false);
  const isExamActiveRef = useRef(false);
  const currentIndexRef = useRef(0);
  const scoreRef = useRef(0);

  const current = questions[currentIndex];

  const closeFullscreen = async () => {
    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen();
      }
    } catch (error) {
      console.log('Could not exit fullscreen:', error);
    }
  };

  const finishExam = useCallback(async () => {
    if (examEndedRef.current) return;
    examEndedRef.current = true;
    isExamActiveRef.current = false;

    setExamEnded(true);
    setIsExamActive(false);
    setShowAnswer(false);
    await closeFullscreen();
    setShowEndModal(true);
  }, []);

  const goToNextQuestion = useCallback(() => {
    const nextIndex = currentIndexRef.current + 1;

    if (nextIndex < questions.length) {
      currentIndexRef.current = nextIndex;
      setCurrentIndex(nextIndex);
      setSelected(null);
      setShowAnswer(false);
      setTimeLeft(QUESTION_TIME);
    } else {
      finishExam();
    }
  }, [finishExam]);

  // Sync refs with state
  useEffect(() => {
    examEndedRef.current = examEnded;
  }, [examEnded]);

  useEffect(() => {
    isExamActiveRef.current = isExamActive;
  }, [isExamActive]);

  useEffect(() => {
    currentIndexRef.current = currentIndex;
  }, [currentIndex]);

  useEffect(() => {
    scoreRef.current = score;
  }, [score]);

  // Security event listeners
  useEffect(() => {
    if (!isExamActive || showEndModal) return;

    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) finishExam();
    };

    const handleVisibilityChange = () => {
      if (document.hidden) finishExam();
    };

    const handleCopyCutPaste = (e) => {
      e.preventDefault();
      finishExam();
    };

    const handleRightClick = (e) => {
      e.preventDefault();
      finishExam();
    };

    const handleKeyDown = (e) => {
      const key = e.key.toLowerCase();
      const blocked =
        key === 'printscreen' ||
        key === 'f12' ||
        (e.ctrlKey && key === 'c') ||
        (e.ctrlKey && key === 'u') ||
        (e.ctrlKey && e.shiftKey && key === 'i') ||
        (e.ctrlKey && e.shiftKey && key === 'j') ||
        (e.ctrlKey && e.shiftKey && key === 's');

      if (blocked) {
        e.preventDefault();
        finishExam();
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    document.addEventListener('copy', handleCopyCutPaste);
    document.addEventListener('cut', handleCopyCutPaste);
    document.addEventListener('paste', handleCopyCutPaste);
    document.addEventListener('contextmenu', handleRightClick);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      document.removeEventListener('copy', handleCopyCutPaste);
      document.removeEventListener('cut', handleCopyCutPaste);
      document.removeEventListener('paste', handleCopyCutPaste);
      document.removeEventListener('contextmenu', handleRightClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isExamActive, showEndModal, finishExam]);

  // Countdown timer
  useEffect(() => {
    if (!isExamActive || showEndModal || showAnswer || examEnded) return;

    if (timeLeft <= 0) {
      goToNextQuestion();
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, isExamActive, showEndModal, showAnswer, examEnded, goToNextQuestion]);

  const requestFullscreen = useCallback(async () => {
    try {
      await document.documentElement.requestFullscreen();
      examEndedRef.current = false;
      isExamActiveRef.current = true;
      currentIndexRef.current = 0;

      setExamEnded(false);
      setIsExamActive(true);
      setShowEndModal(false);
      setCurrentIndex(0);
      setSelected(null);
      setShowAnswer(false);
      setScore(0);
      setTimeLeft(QUESTION_TIME);
    } catch {
      alert('Fullscreen is required to start the exam.');
    }
  }, []);

  const handleAnswer = (choice) => {
    if (showAnswer || examEnded) return;

    setSelected(choice);
    setShowAnswer(true);

    if (choice === current.answer) {
      setScore((s) => s + 1);
    }

    setTimeout(() => {
      goToNextQuestion();
    }, 1200);
  };

  const resetGame = async (startAgain = false) => {
    examEndedRef.current = false;
    isExamActiveRef.current = false;
    currentIndexRef.current = 0;

    setShowEndModal(false);
    setIsExamActive(false);
    setExamEnded(false);
    setScore(0);
    setCurrentIndex(0);
    setSelected(null);
    setShowAnswer(false);
    setTimeLeft(QUESTION_TIME);

    if (startAgain) {
      await requestFullscreen();
    }
  };

  // Start screen
  if (!isExamActive && !showEndModal) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#5C259E] text-white text-center p-6">
        <h1 className="text-3xl font-bold mb-3">Start Quiz Exam</h1>
        <p className="text-sm mb-8 max-w-sm">
          You will enter a secure fullscreen environment. Leaving, minimizing,
          copying, right-clicking, or trying screenshot shortcuts will end your session.
        </p>
        <button
          onClick={requestFullscreen}
          className="bg-white text-[#5C259E] font-semibold px-8 py-4 rounded-xl shadow-md hover:bg-gray-100 focus:outline-none"
        >
          Enter Exam Mode
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center px-8 h-24 border-b">
        <div className="flex items-center gap-3">
          <img
            src="/avatar.svg"
            alt="User"
            className="w-10 h-10 rounded-full bg-gray-200"
          />
          <div>
            <p className="font-semibold">Trella</p>
            <p className="text-sm text-gray-500">{score} PTS</p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="relative w-12 h-12 flex items-center justify-center">
            <div
              className={`absolute inset-0 border-4 rounded-full ${
                timeLeft <= 3 ? 'border-red-500' : 'border-[#6B21A8]'
              }`}
            />
            <p className={`text-sm font-bold ${timeLeft <= 3 ? 'text-red-500' : 'text-black'}`}>
              {timeLeft}s
            </p>
          </div>
          <span className="text-xs text-gray-500 mt-1">Timer</span>
        </div>

        <div className="text-center">
          <p className="text-lg font-bold">{score}</p>
          <span className="text-xs text-gray-600">Correct</span>
        </div>
      </header>

      {/* Progress bar */}
      <div className="w-full bg-gray-100 h-2">
        <div
          className="bg-yellow-400 h-2 transition-all"
          style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
        />
      </div>

      {/* Question */}
      <main className="flex-grow flex items-center justify-center p-6">
        <div className="bg-[#5C259E] text-white rounded-3xl p-10 w-full max-w-2xl text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Question {currentIndex + 1}/{questions.length}
          </h2>
          <p className="text-base mb-8">{current.question}</p>

          <div className="flex justify-center gap-8">
            {/* NO button */}
            <button
              onClick={() => handleAnswer('no')}
              disabled={showAnswer}
              className={`flex items-center justify-center gap-2 px-10 py-6 rounded-xl text-lg font-semibold w-[200px] transition-colors
                ${
                  showAnswer
                    ? current.answer === 'no'
                      ? 'bg-green-600 text-white'
                      : selected === 'no'
                      ? 'bg-red-500 text-white'
                      : 'bg-white text-black opacity-60'
                    : 'bg-white text-black hover:bg-gray-100'
                }`}
            >
              <X
                className={`${
                  showAnswer && current.answer === 'no' ? 'text-white' : 'text-red-500'
                }`}
                size={28}
              />
              NO
            </button>

            {/* YES button */}
            <button
              onClick={() => handleAnswer('yes')}
              disabled={showAnswer}
              className={`flex items-center justify-center gap-2 px-10 py-6 rounded-xl text-lg font-semibold w-[200px] transition-colors
                ${
                  showAnswer
                    ? current.answer === 'yes'
                      ? 'bg-green-600 text-white'
                      : selected === 'yes'
                      ? 'bg-red-500 text-white'
                      : 'bg-white text-black opacity-60'
                    : 'bg-white text-black hover:bg-gray-100'
                }`}
            >
              <Check
                className={`${
                  showAnswer && current.answer === 'yes' ? 'text-white' : 'text-green-500'
                }`}
                size={28}
              />
              YES
            </button>
          </div>
        </div>
      </main>

      {/* End Modal */}
      {showEndModal && (
        <GameEndModal
          score={score}
          total={questions.length}
          points={score * 5}
          rank={126}
          outOf={158}
          onHome={() => resetGame(false)}
          onPlayAgain={() => resetGame(true)}
        />
      )}
    </div>
  );
}