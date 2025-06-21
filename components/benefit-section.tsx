"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function BenefitsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (cardsRef.current) {
        gsap.set(cardsRef.current.children, { y: 100, opacity: 0 });
        gsap.to(cardsRef.current.children, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const benefits = [
    {
      title: "Senior-Level Quality",
      description:
        "Your designs are crafted by Qelma, a product designer with a decade of experience creating engaging, pixel-perfect designs.",
      icon: "/icon-1.png",
      bgColor: "bg-lime-400",
      textColor: "text-black",
    },
    {
      title: "Incredibly Affordable",
      description:
        "Starting at just $1,499/month - that's less than half what most agencies charge, with no hidden fees or contracts.",
      icon: "/icon-2.png",
      bgColor: "bg-[#F7F7F7] dark:bg-[#242424]",
      textColor: "text-gray-900 dark:text-white",
    },
    {
      title: "Lightning Fast Delivery",
      description:
        "Get your designs in the days or request. No more waiting weeks for simple UI screens or website layouts.",
      icon: "/icon-3.png",
      bgColor: "bg-[#F7F7F7] dark:bg-[#242424]",
      textColor: "text-gray-900 dark:text-white",
    },
    {
      title: "Unlimited Revisions",
      description:
        "We'll keep refining until it's perfect. No limits on revisions - your satisfaction is our priority.",
      icon: "/icon-4.png",
      bgColor: "bg-[#F7F7F7] dark:bg-[#242424]",
      textColor: "text-gray-900 dark:text-white",
    },
    {
      title: "Mobile App & Web Specialist",
      description:
        "From responsive websites to mobile apps, websites, and basic branding - everything digital businesses need.",
      icon: "/icon-5.png",
      bgColor: "bg-[#F7F7F7] dark:bg-[#242424]",
      textColor: "ext-gray-900 dark:text-white ",
    },
    {
      title: "Pause Anytime",
      description:
        "Life gets busy and you need to pause your subscription anytime and resume when you're ready. No cancellation fees.",
      icon: "/icon-6.png",
      bgColor: "bg-[#F7F7F7] dark:bg-[#242424]",
      textColor: "text-gray-900 dark:text-white",
    },
  ];

  return (
    <section ref={sectionRef} className="py-16 md:py-24 px-4 md:px-6 lg:px-8">
      <div className=" mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-[#F0F0F0] dark:bg-[#242424] text-sm font-mono mb-6 rounded">
            Benefits
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-8xl leading-snug md:leading-tight lg:leading-[1.1] font-bold mb-4 text-gray-900 dark:text-white">
            Enjoy top-notch quality for a fraction of the price.
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get the same quality as expensive agencies, but at a fraction of the
            cost. We've made premium design accessible to everyone.
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 max-w-7xl mx-auto"
        >
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`${benefit.bgColor} p-8 min-h-[350px]  flex flex-col transition-all duration-300 hover:scale-105`}
            >
              <div className="flex justify-end">
                <Image
                  src={benefit.icon || "/placeholder.svg"}
                  alt={benefit.title}
                  width={60}
                  height={60}
                  className="rounded-lg w-20 h-20"
                />
              </div>

              <div className="mt-auto">
                <h3 className={`text-xl font-bold mb-2 ${benefit.textColor}`}>
                  {benefit.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed font-mono ${
                    benefit.textColor.includes("dark:text-white")
                      ? "text-gray-700 dark:text-gray-300"
                      : "text-gray-800"
                  }`}
                >
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
