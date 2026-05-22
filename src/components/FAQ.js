'use client';

import { Card } from '@/components/ui/card';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openItems, setOpenItems] = useState([]); // store multiple open indices

  const faqs = [
    {
      question: 'How does Trivia work?',
      answer:
        'Select a quiz, answer the questions correctly in the given time, get accurate points, and then compare with other players on the leaderboard.',
    },
    {
      question: 'How do I earn rewards?',
      answer:
        'You earn rewards based on your quiz performance. The better you perform, the more you earn. Your earnings appear in your account after each quiz.',
    },
    {
      question: 'How do I withdraw my earnings?',
      answer:
        'Go to your profile, navigate to earnings, and request a withdrawal. Your earnings will be transferred to your linked bank account within 5-7 business days.',
    },
    {
      question: 'How do I track my progress?',
      answer:
        'Your progress is tracked in your profile dashboard. You can see your total earnings, quiz history, rankings, and performance metrics.',
    },
  ];

  const toggleItem = (index) => {
    setOpenItems((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="faq" className="py-16 px-4 sm:px-6 lg:px-20 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Frequently asked questions
          </h2>
          <p className="text-base text-foreground/70">
            Find answers to common questions about how Trivia works
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openItems.includes(index);

            return (
              <Card key={index} className="overflow-hidden transition-all">
                <button
                  className="w-full p-6 flex items-center justify-between hover:bg-background/50 transition"
                  onClick={() => toggleItem(index)}
                >
                  <h3 className="text-left font-semibold text-foreground">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    size={24}
                    className={`text-primary flex-shrink-0 ml-4 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 border-t border-border bg-background/30">
                    <p className="text-foreground/70 leading-relaxed mt-3">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
