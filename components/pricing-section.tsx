"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function PricingSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const pauseCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (cardsRef.current) {
        gsap.set(cardsRef.current.children, { y: 100, opacity: 0 });
        gsap.to(cardsRef.current.children, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        });
      }

      if (pauseCardRef.current) {
        gsap.set(pauseCardRef.current, { y: 50, opacity: 0 });
        gsap.to(pauseCardRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.6,
          delay: 0.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: pauseCardRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = {
    starter: [
      "One design request at a time",
      "3-5 day average delivery",
      "UI/UX Design, Logo Design, Pitch Design, Social Media Design",
      "Pause or cancel anytime",
      "Unlimited stock photos",
    ],
    pro: [
      "Two design request at a time",
      "3-5 day average delivery",
      "UI/UX Design, Logo Design, Pitch Design, Social Media Design",
      "Pause or cancel anytime",
      "Unlimited stock photos",
      "Design system documentation",
    ],
  };

  return (
    <section ref={sectionRef} className="py-16 md:py-24 px-4 md:px-6 lg:px-8" id="pricing">
      <div className="max-w-7xl mx-auto">
        <div className="lg:-mb-16 mb-8">
          <div className="flex justify-center lg:justify-start">
            <div className="px-4 py-2 bg-[#F0F0F0] dark:bg-[#242424] text-sm font-mono rounded">
              Pricing
            </div>
          </div>
        </div>

        {/* Large Screen Layout */}
        <div className="hidden lg:grid lg:grid-cols-3 lg:gap-0 lg:items-center ">
          {/* Left Column */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl xl:text-5xl lg:mb-12 lg:mt-20  font-bold mb-4 text-gray-900 dark:text-white">
                Cheap plan, limitless designs.
              </h2>
              <p className="text-gray-600 dark:text-gray-400 lg:mb-14  lg:mr-10">
                Choose the plan that fits your needs. No contracts, no setup
                fees, cancel anytime.
              </p>
            </div>

            <div
              ref={pauseCardRef}
              className="bg-[#F0F0F0] dark:bg-[#242424] p-6 rounded-lg lg:mr-10"
            >
              <h3 className="text-xl font-bold mb-3 text-[#242424] dark:text-white">
                Pause anytime!
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                You can pause your subscription at any time and resume it later.
              </p>
            </div>
          </div>

          {/* Middle Column - Starter */}
          <div ref={cardsRef}>
            <div className="bg-[#F0F0F0] dark:bg-[#242424] p-8 shadow-sm">
              <div className="bg-lime-400 text-black text-xs font-bold px-3 py-1 inline-block mb-6 rounded">
                Starter
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900 dark:text-white">
                  $1,499
                </span>
                <span className="text-gray-600 dark:text-gray-400">/Month</span>
              </div>
              <div className="mb-8">
                <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">
                  What do I get?
                </h4>
                <div className="space-y-3">
                  {features.starter.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-start">
                <Button className="max-w-xs bg-black hover:bg-gray-800 text-white">
                  Join Today <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column - Pro */}
          <div>
            <div className="bg-lime-400 p-8 rounded-lg shadow-sm">
              <div className="bg-black text-white text-xs font-bold px-3 py-1 inline-block mb-6 rounded">
                Pro Member
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold text-black">$3,999</span>
                <span className="text-gray-800">/Month</span>
              </div>
              <div className="mb-8">
                <h4 className="font-semibold mb-4 text-black">
                  What do I get?
                </h4>
                <div className="space-y-3">
                  {features.pro.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-green-700 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-800">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center">
                <Button className="w-full max-w-xs bg-black hover:bg-gray-800 text-white">
                  Join Today <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Medium Screen Layout */}
        <div className="hidden md:block lg:hidden">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Cheap plan, limitless designs.
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Choose the plan that fits your needs. No contracts, no setup fees,
              cancel anytime.
            </p>
          </div>

          <div ref={cardsRef} className="grid grid-cols-2 gap-6 mb-12">
            {/* Starter Card */}
            <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
              <div className="bg-lime-400 text-black text-xs font-bold px-3 py-1 inline-block mb-6 rounded">
                Starter
              </div>
              <div className="mb-6">
                <span className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                  $1,499
                </span>
                <span className="text-gray-600 dark:text-gray-400">/Month</span>
              </div>
              <div className="mb-8">
                <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">
                  What do I get?
                </h4>
                <div className="space-y-3">
                  {features.starter.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center md:justify-start">
                <Button className="w-full max-w-xs bg-black hover:bg-gray-800 text-white">
                  Join Today <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>

            {/* Pro Card */}
            <div className="bg-lime-400 p-6 md:p-8 rounded-lg shadow-sm">
              <div className="bg-black text-white text-xs font-bold px-3 py-1 inline-block mb-6 rounded">
                Pro Member
              </div>
              <div className="mb-6">
                <span className="text-3xl md:text-4xl font-bold text-black">
                  $3,999
                </span>
                <span className="text-gray-800">/Month</span>
              </div>
              <div className="mb-8">
                <h4 className="font-semibold mb-4 text-black">
                  What do I get?
                </h4>
                <div className="space-y-3">
                  {features.pro.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-green-700 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-800">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center md:justify-start">
                <Button className="w-full max-w-xs bg-black hover:bg-gray-800 text-white">
                  Join Today <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>

          <div
            ref={pauseCardRef}
            className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg"
          >
            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
              Pause anytime!
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              You can pause your subscription at any time and resume it later.
            </p>
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Cheap plan, limitless designs.
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Choose the plan that fits your needs. No contracts, no setup fees,
              cancel anytime.
            </p>
          </div>

          <div ref={cardsRef} className="space-y-6 mb-12">
            {/* Starter */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
              <div className="bg-lime-400 text-black text-xs font-bold px-3 py-1 inline-block mb-6 rounded">
                Starter
              </div>
              <div className="mb-6">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  $1,499
                </span>
                <span className="text-gray-600 dark:text-gray-400">/Month</span>
              </div>
              <div className="mb-8">
                <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">
                  What do I get?
                </h4>
                <div className="space-y-3">
                  {features.starter.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center">
                <Button className="w-full max-w-xs bg-black hover:bg-gray-800 text-white">
                  Join Today <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>

            {/* Pro */}
            <div className="bg-lime-400 p-6 rounded-lg shadow-sm">
              <div className="bg-black text-white text-xs font-bold px-3 py-1 inline-block mb-6 rounded">
                Pro Member
              </div>
              <div className="mb-6">
                <span className="text-3xl font-bold text-black">$3,999</span>
                <span className="text-gray-800">/Month</span>
              </div>
              <div className="mb-8">
                <h4 className="font-semibold mb-4 text-black">
                  What do I get?
                </h4>
                <div className="space-y-3">
                  {features.pro.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-green-700 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-800">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center">
                <Button className="w-full max-w-xs bg-black hover:bg-gray-800 text-white">
                  Join Today <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>

          <div
            ref={pauseCardRef}
            className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg"
          >
            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
              Pause anytime!
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              You can pause your subscription at any time and resume it later.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
