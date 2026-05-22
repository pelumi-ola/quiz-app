import QuizInterface from '@/components/QuizInterface';

export default function QuizInterfacePage({ params }) {
  return (
    <main className="min-h-screen bg-background">
      <QuizInterface categoryId={params.id} />
    </main>
  );
}
