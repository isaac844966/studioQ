"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ProjectDetailProps {
  project: {
    id: number;
    title: string;
    subtitle: string;
    category: string;
    heroImage: string;
    description: string;
    visitUrl?: string;
    images: string[];
    alt: string;
    moreDescription?: string;
  };
  nextProjects?: Array<{
    id: number;
    title: string;
    image: string;
    subtitle: string;
    alt: string;
  }>;
}

export default function ProjectDetail({
  project,
  nextProjects = [],
}: ProjectDetailProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const nextProjectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (heroRef.current) {
        gsap.fromTo(
          heroRef.current.children,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
          }
        );
      }

      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current.children,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            delay: 0.3,
          }
        );
      }

      if (galleryRef.current) {
        gsap.fromTo(
          galleryRef.current.querySelectorAll(".gallery-item"),
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: galleryRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      if (nextProjectsRef.current) {
        gsap.fromTo(
          nextProjectsRef.current.children,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: nextProjectsRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen">
      <section className="px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <div className="mx-auto">
          <div ref={heroRef} className="space-y-8 ">
            <div className="text-center lg:text-left lg:pl-11 lg:mb-20">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                {project.title}
              </h1>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm text-gray-600 dark:text-gray-400">
                <span className="bg-[#F7F7F7] dark:bg-[#242424] font-mono px-3 py-1 rounded">
                  {project.category}
                </span>
                <span className="bg-[#F7F7F7] dark:bg-[#242424] font-mono px-3 py-1 rounded">
                  {project.subtitle}
                </span>
              </div>
            </div>

            <div className="relative   w-full h-[350px] md:h-[400px] lg:h-[600px] overflow-hidden ">
              <Image
                src={project.heroImage}
                alt={project.alt}
                fill
                className="object-cover"
              />
            </div>

            <div
              ref={contentRef}
              className="space-y-6 md:flex justify-between lg:px-20"
            >
              <h2 className="text-2xl md:text-4xl md:pt-10 font-bold text-gray-900 dark:text-white mb-4">
                Project <br /> Overview
              </h2>
              <div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 max-w-[30rem]">
                  {project.description}
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 max-w-[30rem]">
                  {project.moreDescription}
                </p>
                {project.visitUrl && (
                  <Button className="bg-black rounded-none hover:bg-gray-800 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100">
                    Visit <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-6 lg:px-8 py-12 md:py-16 max-w-7xl mx-auto">
        <div className="max-w-7xl mx-auto">
          <div ref={galleryRef} className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-2">
              {project.images.length === 2 &&
                project.images.map((image, index) => (
                  <GalleryItem
                    key={index}
                    image={image}
                    title={project.title}
                    index={index}
                  />
                ))}

              {project.images.length === 3 && (
                <>
                  <GalleryItem
                    image={project.images[0]}
                    title={project.title}
                    index={0}
                  />
                  <GalleryItem
                    image={project.images[1]}
                    title={project.title}
                    index={1}
                  />
                  <div className="lg:col-span-2">
                    <GalleryItem
                      image={project.images[2]}
                      title={project.title}
                      index={2}
                    />
                  </div>
                </>
              )}

              {project.images.length === 4 &&
                project.images.map((image, index) => (
                  <GalleryItem
                    key={index}
                    image={image}
                    title={project.title}
                    index={index}
                  />
                ))}

              {project.images.length === 5 && (
                <>
                  {project.images.slice(0, 4).map((image, index) => (
                    <GalleryItem
                      key={index}
                      image={image}
                      title={project.title}
                      index={index}
                    />
                  ))}
                  <div className="lg:col-span-2">
                    <GalleryItem
                      image={project.images[4]}
                      title={project.title}
                      index={4}
                    />
                  </div>
                </>
              )}

              {project.images.length > 5 &&
                project.images.map((image, index) => (
                  <GalleryItem
                    key={index}
                    image={image}
                    title={project.title}
                    index={index}
                  />
                ))}
            </div>

            <div className="text-center md:text-left pt-8">
              <Button className="bg-black rounded-none hover:bg-gray-800 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 px-8 py-3">
                Next Project <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {nextProjects.length > 0 && (
        <section className="px-4 md:px-6 lg:px-8 py-12 md:py-16">
          <div className="max-w-7xl mx-auto">
            <div ref={nextProjectsRef} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {nextProjects.map((nextProject) => (
                  <div
                    key={nextProject.id}
                    className="relative w-full h-[250px] md:h-[300px] overflow-hidden rounded-lg group cursor-pointer"
                  >
                    <Image
                      src={nextProject.image || "/placeholder.svg"}
                      alt={nextProject.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h4 className="font-bold text-lg mb-1">
                        {nextProject.title}
                      </h4>
                      <p className="text-sm opacity-90 font-mono">
                        {nextProject.subtitle}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

function GalleryItem({
  image,
  title,
  index,
}: {
  image: string;
  title: string;
  index: number;
}) {
  return (
    <div className="gallery-item relative w-full h-[250px] md:h-[300px] lg:h-[400px] overflow-hidden  group cursor-pointer">
      <Image
        src={image || "/placeholder.svg"}
        alt={`${title} - Image ${index + 1}`}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
    </div>
  );
}
