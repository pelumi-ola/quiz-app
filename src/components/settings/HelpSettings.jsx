"use client";

import { useEffect, useState } from "react";
import { Plus, Minus } from "lucide-react";
import FeedbackSupport from "./FeedbackSupport";

export default function HelpSettings({ setHideSettingsHeader }) {
  const [openQuestion, setOpenQuestion] = useState(0);
  const [showFeedbackSupport, setShowFeedbackSupport] = useState(false);

  useEffect(() => {
    setHideSettingsHeader?.(showFeedbackSupport);

    return () => {
      setHideSettingsHeader?.(false);
    };
  }, [showFeedbackSupport, setHideSettingsHeader]);

  const faqItems = [
    {
      question: "How do I start a quiz?",
      answer:
        "To play quiz, click the “Play quiz” button, then choose English, Mathematics or History. Each session has a number of questions based on your subscription type. Answer by choosing the correct answer.",
    },
    {
      question: "What happens when I run out of time?",
      answer:
        "When your time runs out, the quiz session ends automatically and your score is calculated based on the answers you completed.",
    },
    {
      question: "Can I pause a quiz?",
      answer:
        "No, once a quiz starts, the timer continues until the session ends.",
    },
    {
      question: "How many sessions can I play per day?",
      answer:
        "The number of sessions you can play per day depends on your subscription plan.",
    },
  ];

  const scoringItems = [
    {
      icon: "⏰",
      title: "Session time limits",
      description: "Every session has a time limit.",
    },
    {
      icon: "⏰",
      title: "Session time limits",
      description: "Every session has a time limit.",
    },
    {
      icon: "🏆",
      title: "Session time limits",
      description: "Every session has a time limit.",
    },
  ];

  if (showFeedbackSupport) {
    return (
      <div className="w-full">
        <FeedbackSupport onBack={() => setShowFeedbackSupport(false)} />
      </div>
    );
  }

  return (
    <div className="max-w-3xl space-y-6">
      {/* How to play */}
      <section className="border border-gray-200 rounded-2xl px-6 py-6">
        <div className="flex items-center gap-5">
          <div className="w-10 h-10 rounded-sm bg-orange-400 flex items-center justify-center text-white">
            ▶
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900">How to play</h3>
            <p className="text-sm text-gray-500 mt-2">
              Answers to frequently asked questions about playing quizzes.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-6">
          {faqItems.map((item, index) => {
            const isOpen = openQuestion === index;

            return (
              <div
                key={item.question}
                className="py-5 border-b border-gray-100 last:border-b-0"
              >
                <button
                  type="button"
                  onClick={() => setOpenQuestion(isOpen ? null : index)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <h4 className="text-base font-semibold text-gray-900">
                    {item.question}
                  </h4>

                  {isOpen ? (
                    <Minus size={20} className="text-gray-900" />
                  ) : (
                    <Plus size={20} className="text-gray-900" />
                  )}
                </button>

                {isOpen && (
                  <p className="text-sm text-gray-500 leading-6 mt-4 max-w-3xl">
                    {item.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* How scoring works */}
      <section className="border border-gray-200 rounded-2xl px-6 py-6">
        <div className="flex items-start gap-5">
          <div className="w-10 h-10 flex items-center justify-center">
            <img
              src="/flag.svg"
              alt="Scoring flag"
              className="w-10 h-10 object-contain"
            />
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900">
              How scoring works
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              Learn how your points are calculated.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-6 pt-6 space-y-5">
          {scoringItems.map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <span className="text-2xl leading-none">{item.icon}</span>

              <div>
                <h4 className="text-base font-semibold text-gray-900">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-500 mt-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Feedback and support */}
      <section className="border border-gray-200 rounded-2xl px-6 py-6">
        <button
          type="button"
          onClick={() => setShowFeedbackSupport(true)}
          className="w-full text-left"
        >
          <div className="flex items-start gap-5">
            <div className="w-10 h-10 flex items-center justify-center text-4xl">
              🎧
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900">
                Feedback and support
              </h3>

              <p className="text-sm text-gray-500 mt-2">
                Help us improve Trivia. Choose a category and send us your
                feedback.
              </p>
            </div>
          </div>
        </button>
      </section>
    </div>
  );
}