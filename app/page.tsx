"use client"

import Header from "@/components/header"
import RotatingCircle from "@/components/rotating-circle"
import FloatingTags from "@/components/floating-tags"
import HeroContent from "@/components/hero-content"
import PortfolioGrid from "@/components/portfolio-grid"
import { useTheme } from "@/hooks/use-theme"
import HowItWorks from "@/components/how-it-wroks"
import PricingSection from "@/components/pricing-section"
import BenefitsSection from "@/components/benefit-section"
import FAQSection from "@/components/faq-section"


export default function HomePage() {
  const { isDarkMode, toggleTheme, isLoaded } = useTheme()

  if (!isLoaded) {
    return null
  }

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? "dark bg-black text-white" : "bg-white text-black"
      }`}
    >
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

      <main className="relative px-2 md:px-6 lg:px-8 py-8 mt-6 md:mt-4">
        <RotatingCircle isDarkMode={isDarkMode} />

        <div className="relative h-screen  mx-auto">
          <FloatingTags isDarkMode={isDarkMode} />
          <HeroContent />
        </div>

        <PortfolioGrid />
        <HowItWorks />
        <PricingSection />
        <BenefitsSection />
        <FAQSection />
      
      </main>
    </div>
  );
}
