"use client";

import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function HeroContent() {
  const router = useRouter()
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full px-4">
      <h1 className="text-4xl  font-none md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight md:mb-12 mb-12 -mt-20 md:mt-0">
        Unlimited Design.
        <br />
        One Simple Subscription
      </h1>

      <p className="text-sm font-mono md:text-base lg:text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
        Subscribe and get unlimited designs at an unbeatable price. Pause or
        cancel anytime
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <Button
          onClick={() => router.push("/#pricing")}
          className="bg-black text-white dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 w-full sm:w-auto px-6 py-3 rounded-none"
        >
          See Pricing →
        </Button>
        <Button
          variant="outline"
          onClick={() => router.push("/#book-call")}
          className="w-full border-none bg-[#F0F0F0] dark:bg-[#242424] rounded-none sm:w-auto px-6 py-3 flex items-center justify-center space-x-2"
        >
          <Phone className="w-4 h-4" />
          <span>Book a Call</span>
        </Button>
      </div>
    </div>
  );
}
