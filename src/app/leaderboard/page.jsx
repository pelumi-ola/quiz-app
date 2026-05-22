import LeaderboardComponent from '@/components/LeaderboardComponent';
import Header from '@/components/Header';

export default function LeaderboardPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <LeaderboardComponent />
    </main>
  );
}
