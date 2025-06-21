"use client";
import Image from "next/image";
import { Moon, Sun, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation"

interface HeaderProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export default function Header({ isDarkMode, toggleTheme }: HeaderProps) {
  const router = useRouter(); 

  return (
    <header className="relative p-4 md:p-6 lg:p-8 lg:px-20 flex items-center justify-between">
      <button
        onClick={() => router.push("/")}
        className="flex items-center md:absolute lg:left-20"
      >
        <Image
          src={isDarkMode ? "/logo-light.png" : "/logo-dark.png"}
          alt="StudioQ Logo"
          width={120}
          height={40}
          className="h-10 w-auto md:h-12"
        />
      </button>

      <nav className="flex items-center space-x-8 mx-auto">
        <button
          onClick={() => router.push("/studio")}
           className="text-sm font-medium hover:opacity-70 transition-opacity"
        >
          The Studio
        </button>
        <button
          onClick={() => router.push("/projects")}
          className="text-sm font-medium hover:opacity-70 transition-opacity"
        >
          Projects
        </button>
      </nav>

      <div className="hidden md:flex items-center space-x-4">
        <Button
          size="lg"
          onClick={() => router.push("/#book-call")}
          className="rounded-none bg-black text-white dark:bg-white dark:text-black hover:bg-gray-900 dark:hover:bg-gray-100 flex items-center space-x-2"
        >
          <Phone className="w-4 h-4 text-white dark:text-black" />
          <span>Book a call</span>
        </Button>
      </div>

      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50 bg-[#F0F0F0] dark:bg-[#242424] p-3">
        <button
          onClick={toggleTheme}
          className="flex flex-col items-center space-y-2"
        >
          <Sun
            className={`w-4 h-4 transition-opacity ${
              isDarkMode ? "opacity-50" : "opacity-100"
            }`}
          />
          <div
            className={`w-4 h-8 rounded-full transition-colors relative ${
              isDarkMode ? "bg-gray-600" : "bg-gray-300"
            }`}
          >
            <div
              className={`w-3 h-4 bg-white rounded-full absolute left-0.5 transition-transform ${
                isDarkMode ? "translate-y-4" : "translate-y-0.5"
              }`}
            ></div>
          </div>
          <Moon
            className={`w-4 h-4 transition-opacity ${
              isDarkMode ? "opacity-100" : "opacity-50"
            }`}
          />
        </button>
      </div>
    </header>
  );
}
