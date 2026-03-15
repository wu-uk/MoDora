import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { DemoSection } from "@/components/sections/DemoSection";
import { ComparisonSection } from "@/components/sections/ComparisonSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { ArchitectureSection } from "@/components/sections/ArchitectureSection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <DemoSection />
        <ComparisonSection />
        <FeaturesSection />
        <HowItWorksSection />
        <ArchitectureSection />
      </main>
      <Footer />
    </div>
  );
}
