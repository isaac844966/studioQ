"use client";

import type React from "react";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function PortfolioGrid({
  hideExploreButton = false,
}: {
  hideExploreButton?: boolean;
}) {
  const gridRef = useRef<HTMLDivElement>(null);
  const exploreRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();

  const portfolioItems = [
    {
      id: 1,
      image: "/image-3.jpg",
      title: "Headline",
      subtitle: "Artificial Intelligence",
      alt: "Mobile App Design",
      category: "Mobile App",
      description:
        "Headline is an innovative AI-powered mobile application that enables trending news podcasts tailored to users' individual preferences. It features an advanced AI voice assistant that responds to user requests seamlessly. The UI/UX of the project was designed to be modern and intuitive, prioritizing ease of use and accessibility.",
      visitUrl: "https://example.com",
      images: [
        "/image-3.jpg",
        "/image-2.png",
        "/image-4.png",
        "/image-1.png",
        "/image-3.jpg",
        "/image-2.png",
      ],
    },
    {
      id: 2,
      image: "/image-2.png",
      title: "Creative Vision",
      subtitle: "Brand Identity",
      alt: "Web Dashboard",
      category: "Branding",
      description:
        "Creative Vision is a comprehensive brand identity project that encompasses logo design, color palette development, and visual guidelines. The project focused on creating a cohesive brand experience across all touchpoints.",
      visitUrl: "https://example.com",
      images: ["/image-2.png", "/image-3.jpg", "/image-4.png", "/image-1.png"],
    },
    {
      id: 3,
      image: "/image-4.png",
      title: "Digital Experience",
      subtitle: "Web Development",
      alt: "Desktop Application",
      category: "Web Design",
      description:
        "Digital Experience is a modern web application built with cutting-edge technologies. The project emphasizes user experience and performance optimization while maintaining a clean, intuitive interface.",
      visitUrl: "https://example.com",
      images: ["/image-4.png", "/image-1.png", "/image-3.jpg", "/image-2.png"],
    },
    {
      id: 4,
      image: "/image-1.png",
      title: "User Interface",
      subtitle: "Mobile Design",
      alt: "Mobile Interface",
      category: "UI/UX Design",
      description:
        "User Interface project focuses on creating intuitive and accessible mobile interfaces. The design system emphasizes consistency, usability, and modern design principles.",
      visitUrl: "https://example.com",
      images: ["/image-1.png", "/image-2.png", "/image-3.jpg", "/image-4.png"],
    },
  ];

  useEffect(() => {
    if (gridRef.current) {
      gsap.set(gridRef.current.querySelectorAll(".portfolio-item"), {
        y: 100,
        opacity: 0,
      });

      gsap.to(gridRef.current.querySelectorAll(".portfolio-item"), {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });
    }

    if (exploreRef.current && !hideExploreButton) {
      gsap.set(exploreRef.current, {
        y: 50,
        opacity: 0,
      });

      gsap.to(exploreRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: exploreRef.current,
          start: "top bottom",
          toggleActions: "play none none reverse",
          once: true,
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [hideExploreButton]);

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const image = container.querySelector(".portfolio-image");
    const overlay = container.querySelector(".portfolio-overlay");
    const text = container.querySelector(".portfolio-text");

    gsap.to(image, {
      scale: 1.1,
      duration: 0.6,
      ease: "power2.out",
    });

    gsap.to(overlay, {
      opacity: 1,
      duration: 0.4,
      ease: "power2.out",
    });

    gsap.fromTo(
      text,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power2.out", delay: 0.1 }
    );
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const image = container.querySelector(".portfolio-image");
    const overlay = container.querySelector(".portfolio-overlay");

    gsap.to(image, {
      scale: 1,
      duration: 0.6,
      ease: "power2.out",
    });

    gsap.to(overlay, {
      opacity: 0,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const handleProjectClick = (projectId: number) => {
    router.push(`/projects/${projectId}`);
  };

  const renderPortfolioItem = (item: any, key: number) => (
    <div
      key={key}
      className="portfolio-item relative w-full h-full overflow-hidden cursor-pointer group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => handleProjectClick(item.id)}
    >
      <Image
        src={item.image || "/placeholder.svg"}
        alt={item.alt}
        fill
        className="object-cover portfolio-image transition-transform duration-300"
      />
      <div className="portfolio-overlay absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300" />
      <div className="portfolio-text absolute bottom-4 left-4 text-white opacity-0">
        <h3 className="font-bold text-lg mb-1">{item.title}</h3>
        <p className="text-sm opacity-90 font-mono">{item.subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="w-full px-4 md:px-8">
      <div ref={gridRef} className="space-y-6">
        <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
          <div className="w-full lg:w-[60%] h-[20rem] lg:h-[22rem]">
            {renderPortfolioItem(portfolioItems[0], 0)}
          </div>
          <div className="w-full lg:w-[40%] h-[20rem] lg:h-[22rem]">
            {renderPortfolioItem(portfolioItems[1], 1)}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
          <div className="w-full lg:w-[40%] h-[20rem] lg:h-[22rem]">
            {renderPortfolioItem(portfolioItems[2], 2)}
          </div>
          <div className="w-full lg:w-[60%] h-[20rem] lg:h-[22rem]">
            {renderPortfolioItem(portfolioItems[3], 3)}
          </div>
        </div>

        {!hideExploreButton && (
          <div className="text-center mt-10 md:mt-14">
            <Button
              ref={exploreRef}
              onClick={()=>router.push("/projects")}
              className="bg-black rounded-none text-white dark:bg-white dark:text-black hover:bg-gray-900 dark:hover:bg-gray-100 px-6 py-3 font-mono"
            >
              Explore →
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
