"use client";

import AboutUs from "@/components/about-us";
import BookCallSection from "@/components/book-call";
import DesignersSection from "@/components/designer";
import FooterSection from "@/components/footer";
import Header from "@/components/header";
import TransformIdeasSection from "@/components/transfor-idea";
import { useTheme } from "@/hooks/use-theme";

export default function StudioPage() {
  const { isDarkMode, toggleTheme, isLoaded } = useTheme();

    return (
      <>
        <div className="min-h-screen">
          <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

          {/* Large Screen */}
          <div className="hidden lg:block">
            <div className="py-16">
              <div className="max-w-7xl mx-auto">
                <div className="space-y-16">
                  <AboutUs isDarkMode={isDarkMode} />
                  <DesignersSection isDarkMode={isDarkMode} />
                </div>
              </div>
            </div>
          </div>

          {/* Medium Screen */}
          <div className="hidden md:block lg:hidden">
            <div className="px-6 py-12">
              <div className="max-w-4xl mx-auto">
                <div className="space-y-12">
                  <AboutUs isDarkMode={isDarkMode} />
                  <DesignersSection isDarkMode={isDarkMode} />
                </div>
              </div>
            </div>
          </div>

          {/* Small Screen */}
          <div className="md:hidden">
            <div className="px-4 py-8">
              <div className="space-y-8">
                <AboutUs isDarkMode={isDarkMode} />
                <DesignersSection isDarkMode={isDarkMode} />
              </div>
            </div>
          </div>
          <TransformIdeasSection />
        </div>
        <BookCallSection />
        <FooterSection />
      </>
    );
}
