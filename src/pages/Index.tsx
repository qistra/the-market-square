
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValueProposition";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Community from "@/components/Community";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ValueProposition />
        <Features />
        <HowItWorks />
        <Community />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
