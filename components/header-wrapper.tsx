"use client";

import Header from "@/components/header";
import { useTheme } from "@/hooks/use-theme";

export default function HeaderWrapper() {
    const { isDarkMode, toggleTheme, isLoaded } = useTheme();
     if (!isLoaded) {
       return null;
     }


  return <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />;
}
