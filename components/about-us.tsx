"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface AboutUsProps {
  isDarkMode: boolean;
}

export default function AboutUs({ isDarkMode }: AboutUsProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current.children,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
            delay: 0.3,
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={contentRef}>
      {/* Large Screen */}
      <div className="hidden lg:block">
        <div className="max-w-4xl">
          <h1 className="text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
            Who are the <br /> designers?
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
            StudioQ is a one-man agency, run by Qudus Bello, the founder.
            StudioQ does not employ other designers, or outsource work to any
            other entity. You'll work directly with me through the entirety of
            your experience.
          </p>
        </div>
      </div>

      {/* Medium Screen */}
      <div className="hidden md:block lg:hidden">
        <div>
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Who are the <br /> designers?
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            StudioQ is a one-man agency, ran by Qudus Bello, the founder.
            StudioQ does not employ other designers, or outsource work to any
            other entity. You'll work directly with me through the entirety of
            your experience.
          </p>
        </div>
      </div>

      {/* Small Screen */}
      <div className="md:hidden">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            Who are the <br /> designers?
          </h1>
          <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
            StudioQ is a one-man agency, ran by Qudus Bello, the founder.
            StudioQ does not employ other designers, or outsource work to any
            other entity. You'll work directly with me through the entirety of
            your experience.
          </p>
        </div>
      </div>
    </div>
  );
}
