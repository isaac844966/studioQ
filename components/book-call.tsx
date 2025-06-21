
"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function BookCallSection() {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (backgroundRef.current) {
        gsap.to(backgroundRef.current, {
            backgroundPosition: "50% 60%",
          duration: 8,
          ease: "power2.inOut",
          repeat: -1,
          yoyo: true,
        });
      }

      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current.children,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.3,
            ease: "power3.out",
            delay: 0.3,
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative overflow-hidden mt-20" id="book-call">
      <div
        ref={backgroundRef}
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
        style={{
          backgroundImage: "url('/book-call.png')",
      
        }}
      >
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative z-10 py-20 md:py-32 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div ref={contentRef}>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Schedule a 15-min call to explore StudioQ
            </h2>
            <Button className="bg-lime-400 rounded-none hover:bg-lime-500 text-black font-semibold px-8 py-3 text-lg transition-all duration-300 hover:scale-105">
              Book a Call <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
