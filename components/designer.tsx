"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface DesignersSectionProps {
  isDarkMode: boolean;
}

export default function DesignersSection({
  isDarkMode,
}: DesignersSectionProps) {
  const marqueeRefLg = useRef<HTMLDivElement>(null);
  const marqueeRefMd = useRef<HTMLDivElement>(null);
  const marqueeRefSm = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const animateMarquee = (ref: React.RefObject<HTMLDivElement>) => {
        if (ref.current) {
          gsap.to(ref.current, {
            x: "-50%",
            duration: 25,
            ease: "none",
            repeat: -1,
          });
        }
      };

      animateMarquee(marqueeRefLg);
      animateMarquee(marqueeRefMd);
      animateMarquee(marqueeRefSm);

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
            delay: 0.6,
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  const scrollingTexts = [
    "UI Designer",
    "Enthusiast in Design",
    "Creative",
    "Problem Solver",
    "Visual Designer",
  ];

  return (
    <div ref={contentRef}>
      {/* Large Screen */}
      <div className="hidden lg:block space-y-16">
        {/* Hero Card */}
        <div
          className="bg-lime-400 p-12 relative overflow-hidden min-h-[500px] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/qudus-photo.png')",
            backgroundPosition: "100% 48%",
            backgroundSize: "80%",
          }}
        >
          <div
            className="absolute inset-0 z-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0) 40%, rgba(163,230,53,0.9) 100%)",
            }}
          ></div>

          <div className="absolute z-10 bottom-10">
            <h2 className="text-6xl font-bold text-black mb-4">
              Qudus <br /> Bello
            </h2>
            <p className="text-black text-sm font-mono">
              Senior Product designer with 12 experience
            </p>
          </div>
        </div>

        {/* Marquee */}
        <div className="overflow-hidden py-8">
          <div
            ref={marqueeRefLg}
            className="flex space-x-16 whitespace-nowrap opacity-20"
            style={{ width: "200%" }}
          >
            {[
              ...scrollingTexts,
              ...scrollingTexts,
              ...scrollingTexts,
              ...scrollingTexts,
            ].map((text, i) => (
              <span
                key={i}
                className="text-6xl font-bold text-gray-900 dark:text-white"
              >
                {text} ✱
              </span>
            ))}
          </div>
        </div>

        {/* About Section */}
        <div className="grid grid-cols-2 gap-16">
          <div>
            <h3 className="text-6xl font-bold text-gray-900 dark:text-white mb-8">
              About <br /> Qudus
            </h3>
          </div>
          <div className="space-y-6">
            <p className="text-lg font-semibold leading-relaxed">
              specializing in creating visually engaging and functional designs
              for websites, mobile apps, web applications, gift cards, loyalty
              cards, and social media content. My design approach combines
              creativity with a deep understanding of user needs, ensuring every
              project delivers both aesthetic appeal and usability.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I have successfully delivered high-quality projects for companies
              across a wide array of industries, including Banking, Photography,
              Pensions, Business Consulting, Insurance, Telemedicine, NGOs,
              FMCG, and Telecommunications. Each project involved a deep dive
              into the client's goals, industry context, and audience, ensuring
              the final output aligns perfectly with their objectives. My
              process is centered on maintaining clear communication and
              fostering a collaborative environment to ensure client
              satisfaction at every stage. By managing workflows efficiently and
              prioritizing tasks effectively, I consistently deliver on time and
              exceed expectations. My goal is to create designs that not only
              meet client needs but also leave a lasting impact on their
              audiences.
            </p>
            <a
              href="https://www.linkedin.com/in/qudus-bello-347533117/"
              target="_blank"
            >
              <Button className="mt-4 rounded-none bg-black hover:bg-gray-800 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100">
                Visit My LinkedIn <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Medium Screen */}
      <div className="hidden md:block lg:hidden space-y-12">
        {/* Hero Card */}
        <div
          className="bg-lime-400 p-12 relative overflow-hidden min-h-[500px] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/qudus-photo.png')",
            backgroundPosition: "-35% 40%",
            backgroundSize: "130%",
          }}
        >
          <div
            className="absolute inset-0 z-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0) 40%, rgba(163,230,53,0.9) 100%)",
            }}
          ></div>
          <div className="absolute z-10 bottom-10">
            <h2 className="text-6xl font-bold text-black mb-4">
              Qudus <br /> Bello
            </h2>
            <p className="text-black text-sm font-mono">
              Senior Product designer <br /> with 12 experience
            </p>
          </div>
        </div>

        {/* Marquee */}
        <div className="overflow-hidden py-6">
          <div
            ref={marqueeRefMd}
            className="flex space-x-12 whitespace-nowrap opacity-20"
            style={{ width: "200%" }}
          >
            {[
              ...scrollingTexts,
              ...scrollingTexts,
              ...scrollingTexts,
              ...scrollingTexts,
            ].map((text, i) => (
              <span
                key={i}
                className="text-4xl font-bold text-gray-900 dark:text-white"
              >
                {text} ✱
              </span>
            ))}
          </div>
        </div>

        {/* About Section */}
        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
            About Qudus
          </h3>
          <div className="space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              specializing in creating visually engaging and functional designs
              for websites, mobile apps, web applications, gift cards, loyalty
              cards, and social media content. My design approach combines
              creativity with a deep understanding of user needs, ensuring every
              project delivers both aesthetic appeal and usability.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I have successfully delivered high-quality projects for companies
              across a wide array of industries, including Banking, Photography,
              Pensions, Business Consulting, Insurance, Telemedicine, NGOs,
              FMCG, and Telecommunications. Each project involved a deep dive
              into the client's goals, industry context, and audience, ensuring
              the final output aligns perfectly with their objectives. My
              process is centered on maintaining clear communication and
              fostering a collaborative environment to ensure client
              satisfaction at every stage. By managing workflows efficiently and
              prioritizing tasks effectively, I consistently deliver on time and
              exceed expectations. My goal is to create designs that not only
              meet client needs but also leave a lasting impact on their
              audiences.
            </p>
            <a
              href="https://www.linkedin.com/in/qudus-bello-347533117/"
              target="_blank"
            >
              <Button className="mt-4 rounded-none bg-black hover:bg-gray-800 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100">
                Visit My LinkedIn <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Small Screen */}
      <div className="md:hidden space-y-8">
        {/* Hero Card */}
        <div
          className="bg-lime-400 p-2 relative overflow-hidden min-h-[430px] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/qudus-photo.png')",
            backgroundPosition: "-86% 22000%",
            backgroundSize: "120%",
          }}
        >
          <div
            className="absolute inset-0 z-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0) 40%, rgba(163,230,53,0.9) 100%)",
            }}
          ></div>
          <div className="absolute z-10">
            <h2 className="text-4xl font-bold text-black mb-4">
              Qudus <br /> Bello
            </h2>
            <p className="text-black text-sm font-mono">
              Senior Product designer <br /> with 12 experience
            </p>
          </div>
        </div>

        {/* Marquee */}
        <div className="overflow-hidden py-4">
          <div
            ref={marqueeRefSm}
            className="flex space-x-8 whitespace-nowrap opacity-20"
            style={{ width: "200%" }}
          >
            {[
              ...scrollingTexts,
              ...scrollingTexts,
              ...scrollingTexts,
              ...scrollingTexts,
            ].map((text, i) => (
              <span
                key={i}
                className="text-2xl font-bold text-gray-900 dark:text-white"
              >
                {text} ✱
              </span>
            ))}
          </div>
        </div>

        {/* About Section */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            About <br /> Qudus
          </h3>
          <div className="space-y-4">
            <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              I am an experienced graphic designer with a diverse portfolio
              specializing in creating visually engaging and functional designs
              for websites, mobile apps, web applications, gift cards, loyalty
              cards, and social media content. My design approach combines
              creativity with a deep understanding of user needs, ensuring every
              project delivers both aesthetic appeal and usability.
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              I have successfully delivered high-quality projects for companies
              across a wide array of industries, including Banking, Photography,
              Pensions, Business Consulting, Insurance, Telemedicine, NGOs,
              FMCG, and Telecommunications. Each project involved a deep dive
              into the client's goals, industry context, and audience, ensuring
              the final output aligns perfectly with their objectives. My
              process is centered on maintaining clear communication and
              fostering a collaborative environment to ensure client
              satisfaction at every stage. By managing workflows efficiently and
              prioritizing tasks effectively, I consistently deliver on time and
              exceed expectations. My goal is to create designs that not only
              meet client needs but also leave a lasting impact on their
              audiences.
            </p>
            <a
              href="https://www.linkedin.com/in/qudus-bello-347533117/"
              target="_blank"
            >
              <Button className="mt-4 rounded-none bg-black hover:bg-gray-800 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100">
                Visit My LinkedIn <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
