import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyChooseTrivia from "@/components/WhyChooseTrivia";
import QuizCategories from "@/components/QuizCategories";
import HowItWorks from "@/components/HowItWorks";
import UpgradedExperience from "@/components/UpgradedExperience";
import Leaderboard from "@/components/Leaderboard";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen data-scroll-behavior-smooth">
      <Header />
      <Hero />
      <WhyChooseTrivia />
      <QuizCategories />
      <HowItWorks />
      <UpgradedExperience />
      <Leaderboard />
      <FAQ />
      <Footer />
    </main>
  );
}
