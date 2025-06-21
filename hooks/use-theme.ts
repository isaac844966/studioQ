"use client"

import { useEffect, useState } from "react"

export function useTheme() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Check localStorage first, then system preference
    const savedTheme = localStorage.getItem("theme")
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    let initialTheme = false
    if (savedTheme) {
      initialTheme = savedTheme === "dark"
    } else {
      initialTheme = systemPrefersDark
    }

    setIsDarkMode(initialTheme)
    setIsLoaded(true)

    // Listen for system theme changes only if no saved preference
    if (!savedTheme) {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
      const handleChange = (e: MediaQueryListEvent) => {
        setIsDarkMode(e.matches)
      }

      mediaQuery.addEventListener("change", handleChange)
      return () => mediaQuery.removeEventListener("change", handleChange)
    }
  }, [])

  // Apply theme to document and save to localStorage
  useEffect(() => {
    if (isLoaded) {
      document.documentElement.classList.toggle("dark", isDarkMode)
      localStorage.setItem("theme", isDarkMode ? "dark" : "light")
    }
  }, [isDarkMode, isLoaded])

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return { isDarkMode, toggleTheme, isLoaded }
}
