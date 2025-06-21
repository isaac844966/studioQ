"use client";

import type React from "react";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

export default function HowItWorks() {
  const cardsRef = useRef<HTMLDivElement>(null);
  const marqueeLeftRef = useRef<HTMLDivElement>(null);
  const marqueeRightRef = useRef<HTMLDivElement>(null);
  const imageScrollRef = useRef<HTMLDivElement>(null);

  const portfolioItems = [
    {
      image: "/image-3.jpg",
      title: "Headline",
      subtitle: "AI",
      alt: "Mobile App",
    },
    {
      image: "/image-2.png",
      title: "Creative Vision",
      subtitle: "Brand",
      alt: "Web Dashboard",
    },
    {
      image: "/image-4.png",
      title: "Digital Experience",
      subtitle: "Web Dev",
      alt: "Desktop App",
    },
    {
      image: "/image-1.png",
      title: "User Interface",
      subtitle: "Mobile Design",
      alt: "Mobile Interface",
    },
    {
      image: "/image-3.jpg",
      title: "Headline",
      subtitle: "AI",
      alt: "Mobile App",
    },
    {
      image: "/image-2.png",
      title: "Creative Vision",
      subtitle: "Brand",
      alt: "Web Dashboard",
    },
    {
      image: "/image-4.png",
      title: "Digital Experience",
      subtitle: "Web Dev",
      alt: "Desktop App",
    },
    {
      image: "/image-1.png",
      title: "User Interface",
      subtitle: "Mobile Design",
      alt: "Mobile Interface",
    },
    {
      image: "/image-3.jpg",
      title: "Headline",
      subtitle: "AI",
      alt: "Mobile App",
    },
    {
      image: "/image-2.png",
      title: "Creative Vision",
      subtitle: "Brand",
      alt: "Web Dashboard",
    },
    {
      image: "/image-4.png",
      title: "Digital Experience",
      subtitle: "Web Dev",
      alt: "Desktop App",
    },
    {
      image: "/image-1.png",
      title: "User Interface",
      subtitle: "Mobile Design",
      alt: "Mobile Interface",
    },
    {
      image: "/image-3.jpg",
      title: "Headline",
      subtitle: "AI",
      alt: "Mobile App",
    },
    {
      image: "/image-2.png",
      title: "Creative Vision",
      subtitle: "Brand",
      alt: "Web Dashboard",
    },
    {
      image: "/image-4.png",
      title: "Digital Experience",
      subtitle: "Web Dev",
      alt: "Desktop App",
    },
    {
      image: "/image-1.png",
      title: "User Interface",
      subtitle: "Mobile Design",
      alt: "Mobile Interface",
    },
    {
      image: "/image-3.jpg",
      title: "Headline",
      subtitle: "AI",
      alt: "Mobile App",
    },
    {
      image: "/image-2.png",
      title: "Creative Vision",
      subtitle: "Brand",
      alt: "Web Dashboard",
    },
    {
      image: "/image-4.png",
      title: "Digital Experience",
      subtitle: "Web Dev",
      alt: "Desktop App",
    },
    {
      image: "/image-1.png",
      title: "User Interface",
      subtitle: "Mobile Design",
      alt: "Mobile Interface",
    },
  ];

  const marqueeTexts = [
    "Logos",
    "UI/UX",
    "Slide Deck",
    "Mobile App",
    "Brand",
    "Web Design",
    "Logos",
    "UI/UX",
    "Slide Deck",
    "Mobile App",
    "Brand",
    "Web Design",
  ];

  useEffect(() => {
    const animations: gsap.core.Tween[] = [];

    const animateLoop = (
      ref: React.RefObject<HTMLDivElement>,
      direction: "left" | "right"
    ) => {
      if (ref.current) {
        const scrollWidth = ref.current.scrollWidth / 2;
        const tween = gsap.to(ref.current, {
          x: direction === "left" ? `-=${scrollWidth}` : `+=${scrollWidth}`,
          duration: 440,
          ease: "none",
          repeat: -1,
          modifiers: {
            x: gsap.utils.unitize((x) => parseFloat(x) % scrollWidth),
          },
        });
        animations.push(tween);
      }
    };

    animateLoop(marqueeLeftRef, "left");
    animateLoop(marqueeRightRef, "left");

    if (imageScrollRef.current) {
      const scrollWidth = imageScrollRef.current.scrollWidth / 2;
      const tween = gsap.to(imageScrollRef.current, {
        x: `-${scrollWidth}px`,
        duration: 440,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % scrollWidth),
        },
      });
      animations.push(tween);
    }
    console.log("me")

    return () => {
      animations.forEach((tween) => tween.kill());
    };
  }); 

  const Card = ({ children }: { children: React.ReactNode }) => (
    <div className="flex flex-col h-full min-h-[500px] lg:min-h-[200px] card-container">
      {children}
    </div>
  );

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8">
      <div className="mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-[#F0F0F0] dark:bg-[#242424] text-sm font-mono mb-6 ">
            How it works
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Getting started is simple.
          </h2>
          <p className="text-lg text-[#6B6B6B] dark:text-[#8f8f8f]">
            No lengthy onboarding or complex processes.
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8"
        >
          {/* Pricing Card */}
          <Card>
            <div className="flex-1 bg-[#9381FF] p-6 md:p-8 lg:p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-black">
                <div className="bg-white p-6 rounded-lg">
                  <div className="bg-[#C4FF00] text-black text-xs font-bold px-3 py-1 inline-block mb-4 rounded">
                    Starter
                  </div>
                  <div className="mb-6">
                    <span className="text-3xl font-bold">$1,499</span>
                    <span className="text-gray-800">/month</span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <span className="mr-2">✓</span>
                      One design request at a time
                    </div>
                    <div className="flex items-center">
                      <span className="mr-2">✓</span>
                      3-5 day average delivery
                    </div>
                    <div className="flex items-center">
                      <span className="mr-2">✓</span>
                      UI/UX, Logo, Print, Social Media Design
                    </div>
                    <div className="flex items-center">
                      <span className="mr-2">✓</span>
                      Pause or cancel anytime
                    </div>
                    <div className="flex items-center">
                      <span className="mr-2">✓</span>
                      Unlimited stock photos
                    </div>
                  </div>
                </div>
                <div className="bg-[#C4FF00] p-6 rounded-lg">
                  <div className="bg-black text-white text-xs font-bold px-3 py-1 inline-block mb-4 rounded">
                    Pro Membership
                  </div>
                  <div className="mb-6 text-black">
                    <span className="text-3xl font-bold">$3,999</span>
                    <span className="text-gray-800">/month</span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <span className="text-green-600 mr-2">✓</span>
                      Two design requests at a time
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-600 mr-2">✓</span>
                      2-3 day average delivery
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-600 mr-2">✓</span>
                      UI/UX, Logo, Print, Social Media Design
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-600 mr-2">✓</span>
                      Pause or cancel anytime
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-600 mr-2">✓</span>
                      Unlimited stock photos
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-600 mr-2">✓</span>
                      Design system documentation
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-bold mb-2">Subscribe</h3>
              <p className="text-[#6B6B6B] dark:text-[#8f8f8f] max-w-[30rem] text-sm">
                Choose your plan and you'll get access to your personal design
                queue within minutes.
              </p>
            </div>
          </Card>

          {/* Marquee Card (Fixed for seamless scroll) */}
          <Card>
            <div className="flex-1 bg-orange-500 p-6 md:p-8 lg:p-12 overflow-hidden relative">
              <div className="absolute inset-0 flex items-center">
                <div
                  ref={marqueeLeftRef}
                  className="flex space-x-8 whitespace-nowrap mb-20"
                >
                  {[
                    ...marqueeTexts,
                    ...marqueeTexts,
                    ...marqueeTexts,
                    ...marqueeTexts,
                    ...marqueeTexts,
                    ...marqueeTexts,
                    ...marqueeTexts,
                    ...marqueeTexts,
                    ...marqueeTexts,
                    ...marqueeTexts,
                    ...marqueeTexts,
                    ...marqueeTexts,
                    ...marqueeTexts,
                    ...marqueeTexts,
                    ...marqueeTexts,
                    ...marqueeTexts,
                    ...marqueeTexts,
                    ...marqueeTexts,
                    ...marqueeTexts,
                    ...marqueeTexts,
                    ...marqueeTexts,
                    ...marqueeTexts,
                    ...marqueeTexts,
                    ...marqueeTexts,
                    ...marqueeTexts,
                    ...marqueeTexts,
                    ...marqueeTexts,
                    ...marqueeTexts,
                  ].map((text, i) => (
                    <span
                      key={`left-${i}`}
                      className="text-2xl md:text-4xl lg:text-5xl font-bold text-black"
                    >
                      {text} ✱
                    </span>
                  ))}
                </div>
              </div>
              <div className="absolute inset-0 flex items-center mt-8 md:mt-16">
                <div
                  ref={marqueeRightRef}
                  className="flex space-x-8 whitespace-nowrap"
                >
                  {[
                    ...marqueeTexts,
                    ...marqueeTexts,
                    ...marqueeTexts,
                    ...marqueeTexts,
                    ...marqueeTexts,
                    ...marqueeTexts,
                    ...marqueeTexts,
                    ...marqueeTexts,
                    ...marqueeTexts,
                    ...marqueeTexts,
                    ...marqueeTexts,
                    ...marqueeTexts,
                    ...marqueeTexts,
                    ...marqueeTexts,
                    ...marqueeTexts,
                    ...marqueeTexts,
                    ...marqueeTexts,
                    ...marqueeTexts,
                    ...marqueeTexts,
                    ...marqueeTexts,
                    ...marqueeTexts,
                    ...marqueeTexts,
                    ...marqueeTexts,
                    ...marqueeTexts,
                    ...marqueeTexts,
                    ...marqueeTexts,
                    ...marqueeTexts,
                    ...marqueeTexts,
                    ...marqueeTexts,
                    ...marqueeTexts,
                    ...marqueeTexts,
                    ...marqueeTexts,
                    ...marqueeTexts,
                    ...marqueeTexts,
                  ].map((text, i) => (
                    <span
                      key={`right-${i}`}
                      className="text-2xl md:text-4xl lg:text-5xl font-bold text-black"
                    >
                      {text} ✱
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-bold mb-2">Request</h3>
              <p className="text-[#6B6B6B] dark:text-[#8f8f8f] max-w-[30rem] text-sm">
                Submit your design requests through our simple form. Be as
                detailed or as brief as you'd like.
              </p>
            </div>
          </Card>

          {/* Static Image Card */}
          <Card>
            <div className="flex-1 bg-[#00D4FF] p-4 md:p-8 lg:p-1">
              <div className="relative w-full h-64 md:h-64 lg:h-96">
                <Image
                  src="/design-tool.png"
                  alt="Design Tool Interface"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-bold mb-2">Subscribe</h3>
              <p className="text-[#6B6B6B] dark:text-[#8f8f8f] max-w-[30rem] text-sm">
                Get your designs back in 2-5 days, with unlimited revisions
                until you're completely happy.
              </p>
            </div>
          </Card>

          {/* Scrolling Portfolio Card */}
          <Card>
            <div className="flex-1 bg-pink-500 p-4 md:p-6 lg:p-4 overflow-hidden">
              <div className="relative h-48 md:h-64 lg:h-8">
                <div
                  ref={imageScrollRef}
                  className="flex space-x-6 absolute inset-0 w-max"
                >
                  {Array(5)
                    .fill(portfolioItems)
                    .flat()
                    .map((item, i) => (
                      <div
                        key={i}
                        className="relative w-64 h-[17rem] sm:w-72 sm:h-[18rem] md:w-[30rem] md:h-[22.5rem] flex-shrink-0 group overflow-hidden"
                      >
                        <Image
                          src={item.image}
                          alt={item.alt}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-2 left-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <h4 className="font-bold text-sm md:text-lg">
                            {item.title}
                          </h4>
                          <p className="text-xs md:text-sm font-mono">
                            {item.subtitle}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-bold mb-2">Request</h3>
              <p className="text-[#6B6B6B] dark:text-[#8f8f8f] max-w-[30rem] text-sm">
                Keep the requests coming! There's no limit to how many designs
                you can get each month.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
