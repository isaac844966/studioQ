"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import { ArrowRight, Instagram, Linkedin, Github, Twitter } from "lucide-react";
import Image from "next/image";

export default function FooterSection() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (marqueeRef.current) {
        gsap.to(marqueeRef.current, {
          x: "-50%",
          duration: 20,
          ease: "none",
          repeat: -1,
        });
      }
    });

    return () => ctx.revert();
  }, []);

  const scrollingTexts = [
    "Logos",
    "UI/UX",
    "Slide Deck",
    "Mobile App",
    "Brand",
    "Web Design",
  ];

  return (
    <footer className="bg-lime-400 text-black">
      <div className="overflow-hidden py-8 ">
        <div
          ref={marqueeRef}
          className="flex space-x-12 whitespace-nowrap"
          style={{ width: "200%" }}
        >
          {[
            ...scrollingTexts,
            ...scrollingTexts,
            ...scrollingTexts,
            ...scrollingTexts,
            ...scrollingTexts,
            ...scrollingTexts,
            ...scrollingTexts,
            ...scrollingTexts,
            ...scrollingTexts,
            ...scrollingTexts,
            ...scrollingTexts,
            ...scrollingTexts,
            ...scrollingTexts,
            ...scrollingTexts,
            ...scrollingTexts,
            ...scrollingTexts,
            ...scrollingTexts,
            ...scrollingTexts,
            ...scrollingTexts,
            ...scrollingTexts,
            ...scrollingTexts,
            ...scrollingTexts,
            ...scrollingTexts,
            ...scrollingTexts,
            ...scrollingTexts,
            ...scrollingTexts,
            ...scrollingTexts,
            ...scrollingTexts,
            ...scrollingTexts,
          ].map((text, i) => (
            <span
              key={i}
              className="text-3xl md:text-5xl lg:text-5xl font-bold"
            >
              {text} ✱
            </span>
          ))}
        </div>
      </div>

      <div className="px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center lg:flex-row lg:justify-between lg:items-center lg:text-left mb-12 lg:mb-16">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 lg:mb-0 leading-tight max-w-md">
              Ready to get premium design for less?
            </h3>
            <Image
              src="/studio-q-logo.png"
              alt="StudioQ Logo"
              width={160}
              height={60}
              className="h-auto w-[150px] lg:w-[180px]"
            />
          </div>

          <div className="flex flex-col items-center w-full lg:flex-row lg:justify-between lg:items-center mb-12 lg:mb-16">
            <Button className="bg-black rounded-none hover:bg-gray-800 text-white font-semibold px-8 py-3 text-lg transition-all duration-300 hover:scale-105">
              Join Today <ArrowRight className="w-5 h-5 ml-2" />
            </Button>

            <div className="flex space-x-2 mt-4 lg:mt-0">
              <a
                href="#"
                className="w-10 h-10 text-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 text-black rounded-full flex items-center justify-center"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 text-black rounded-full flex items-center justify-center"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 text-black rounded-full flex items-center justify-center"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-black/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm">©2024 StudioQ. All Rights Reserved.</p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="hover:underline">
                Terms of Service
              </a>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
