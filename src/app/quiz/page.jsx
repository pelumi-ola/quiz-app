import QuizCategories from '@/components/QuizCategories';
import Header from '@/components/Header';

export default function QuizPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-2">Select a Quiz</h1>
          <p className="text-foreground/70 mb-12">
            Choose from our collection of engaging quizzes
          </p>
        </div>
      </div>
      <QuizCategories />
    </main>
  );
}
