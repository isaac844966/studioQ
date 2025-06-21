"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check } from "lucide-react";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function TransformIdeasSection() {
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

  const services = [
    {
      title: "UI/UX Design",
      description:
        "Your designs are crafted by Qudus, a product designer with a decade of experience creating engaging, pixel.",
      icon: "/icon-1.png",
      bgColor: "bg-lime-400",
      textColor: "text-black",
      services: [
        "Product Design",
        "Website Design",
        "Mobile App Design",
        "Web App Design",
      ],
    },
    {
      title: "Brand Design",
      description:
        "Starting at just $2,997/month - that's less than half what most agencies charge, with no hidden fees or surprises.",
      icon: "/icon-2.png",
      bgColor: "bg-[#F7F7F7] dark:bg-[#242424]",
      textColor: "text-gray-900 dark:text-white",
      services: [
        "Logo & Identity Design",
        "Poster, Flyers, & Banner Design",
        "Slide Pitch Design",
        "Social Media Design",
      ],
    },
    {
      title: "Motion Graphics Design",
      description:
        "Get your designs in few days of request. No more waiting weeks for simple UI screens or website layouts.",
      icon: "/icon-3.png",
      bgColor: "bg-[#F7F7F7] dark:bg-[#242424]",
      textColor: "text-gray-900 dark:text-white",
      services: [
        "Short Intro Video",
        "Logo Animation",
        "Slideshow Video",
        "Social Media Video",
      ],
    },
  ];

  const companies = [
    "/pepsi.png",
    "/Nibss.png",
    "/Nirvanae.png",
    "/Norrenberger.png",
    "/Healine.png",
    "/Podex.png",
    "/Phasecurve.png",
    "/Healine.png",
    "/Followmebet.png",
    "/Edens360.png",
    "/DebboAfrica.png",
    "/Dawnhealth.png",
    "/Conduit.png",
    "/cordros.png",
  ];

  return (
    <section ref={sectionRef} className="py-16 md:py-24 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <h2 className="text-4xl  md:text-5xl lg:text-6xl font-bold mb-8 text-gray-900 dark:text-white leading-tight">
            Transforming ideas into reality
          </h2>
        </div>

        {/* Service Cards */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className={`${service.bgColor} p-8 min-h-[400px] flex flex-col transition-all duration-300 hover:scale-105 rounded-lg`}
            >
              {/* Icon */}
              <div className="w-full flex justify-end mb-6">
                <div className="relative w-20 h-20">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col">
                <h3 className={`text-2xl font-bold mb-4 ${service.textColor}`}>
                  {service.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed mb-8 ${service.textColor} opacity-80`}
                >
                  {service.description}
                </p>

                {/* Services List */}
                <div className="mt-auto space-y-3">
                  {service.services.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <Check
                        className={`w-4 h-4 ${service.textColor} opacity-70`}
                      />
                      <span
                        className={`text-sm ${service.textColor} opacity-90`}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Company Logos */}
        <div className="hidden md:block">
          <div className="text-center mb-12">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-8">
              Qudus have worked with large clientele
            </h3>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {companies.map((company, index) => (
              <div key={index} className="relative w-24 h-12">
                <Image
                  src={company}
                  alt={`Company ${index}`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
