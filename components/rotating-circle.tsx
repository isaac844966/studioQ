"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

interface RotatingCircleProps {
  isDarkMode: boolean
}

export default function RotatingCircle({ isDarkMode }: RotatingCircleProps) {
  const circleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (circleRef.current) {
      gsap.to(circleRef.current, {
        rotation: 360,
        duration: 20,
        ease: "none",
        repeat: -1,
      })
    }
  }, [])

  return (
    <div className="absolute top-8  left-1/2 transform -translate-x-1/2">
      <div
        ref={circleRef}
        className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 relative"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <path
              id="circle"
              d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
            />
          </defs>
          <text className="text-[12px] fill-current">
            <textPath
              href="#circle"
              className="tracking-wider"
              style={{ color: isDarkMode ? "text-[#6B6B6B]":"text-[#fff]" }}
              
            >
              PREMIUM DESIGN SUBSCRIPTION • PREMIUM DESIGN SUBSCRIPTION •
            </textPath>
          </text>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className={`w-8 h-8 rounded-full ${
              isDarkMode ? "bg-[#6B6B6B]" : "bg-[#6B6B6B]"
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
}
