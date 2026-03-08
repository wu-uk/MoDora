import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { DemoSection } from "@/components/sections/DemoSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { ArchitectureSection } from "@/components/sections/ArchitectureSection";
import { UseCasesSection } from "@/components/sections/UseCasesSection";
import { OpenSourceSection } from "@/components/sections/OpenSourceSection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <DemoSection />
        <FeaturesSection />
        <HowItWorksSection />
        <ArchitectureSection />
        <UseCasesSection />
        <OpenSourceSection />
      </main>
      <Footer />
    </div>
  );
}
