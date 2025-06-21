"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface FloatingTagsProps {
  isDarkMode: boolean;
}

// Hook to detect if screen size is medium or larger
function useIsMdUp() {
  const [isMdUp, setIsMdUp] = useState(false);

  useEffect(() => {
    const updateMatch = () =>
      setIsMdUp(window.matchMedia("(min-width: 768px)").matches);

    updateMatch();
    window.addEventListener("resize", updateMatch);
    return () => window.removeEventListener("resize", updateMatch);
  }, []);

  return isMdUp;
}

export default function FloatingTags({ isDarkMode }: FloatingTagsProps) {
  const isMdUp = useIsMdUp();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredTag, setHoveredTag] = useState<string | null>(null);
  const tagsContainerRef = useRef<HTMLDivElement>(null);

  const tags = [
    {
      name: "Logo",
      image: "/logo-tag.png",
      position: {
        default: { top: "5%", left: "10%" }, 
        md: { top: "12%", left: "25%" }, 
      },
    },
    {
      name: "Slide Deck",
      image: "/slide-deck.png",
      position: {
        default: { top: "5%", right: "10%" },
        md: { top: "23%", right: "21%" },
      },
    },
    {
      name: "Social Media",
      image: "/social-media.png",
      position: {
        default: { bottom: "56%", left: "5%" },
        md: { bottom: "40%", left: "14%" },
      },
    },
    {
      name: "UI/UX",
      image: "/ui-ux.png",
      position: {
        default: { bottom: "60%", right: "15%" },
        md: { bottom: "40%", right: "15%" },
      },
    },
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    if (hoveredTag) {
      document.addEventListener("mousemove", handleMouseMove);
      return () => document.removeEventListener("mousemove", handleMouseMove);
    }
  }, [hoveredTag]);

  return (
    <div
      ref={tagsContainerRef}
      className="absolute inset-0 pointer-events-none z-50"
    >
      {tags.map((tag) => {
        const appliedStyle = isMdUp ? tag.position.md : tag.position.default;

        return (
          <div
            key={tag.name}
            className="absolute pointer-events-auto"
            style={appliedStyle}
            onMouseEnter={() => setHoveredTag(tag.name)}
            onMouseLeave={() => setHoveredTag(null)}
          >
            <div className="cursor-pointer transform transition-transform hover:scale-105">
              <Image
                src={tag.image}
                alt={tag.name}
                width={100}
                height={40}
                className="w-auto h-8 md:h-10"
              />
            </div>
          </div>
        );
      })}

      {hoveredTag && (
        <div
          className="fixed pointer-events-none z-50 transition-all duration-100 ease-out"
          style={{
            left: mousePosition.x - 16,
            top: mousePosition.y - 16,
          }}
        >
          <div
            className={`w-8 h-8 rounded-full ${
              isDarkMode ? "bg-white/30" : "bg-black/30"
            } blur-sm animate-pulse`}
          ></div>
        </div>
      )}
    </div>
  );
}
