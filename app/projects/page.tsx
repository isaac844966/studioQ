"use client";
import BookCallSection from "@/components/book-call";
import FooterSection from "@/components/footer";
import Header from "@/components/header";
import PortfolioGrid from "@/components/portfolio-grid";
import { useTheme } from "@/hooks/use-theme";
import React from "react";

function page() {
    const { isDarkMode, toggleTheme, isLoaded } = useTheme();
     if (!isLoaded) {
       return null;
     }


  return (
    <>
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <main
        className={` pt-10  min-h-screen transition-colors duration-300 ${
          isDarkMode ? "dark  text-white" : " text-black"
        }`}
      >
        <h2 className="text-4xl pb-10 px-4 md:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-8 leading-[1.9]">
          Creating unforgettable <br /> digital impressions
        </h2>

        <PortfolioGrid hideExploreButton />
     
      </main>
    </>
  );
}

export default page;
