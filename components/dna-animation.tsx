"use client"

import { useEffect, useState } from "react"

export function DNAAnimation() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="relative w-full h-64 md:h-80 flex items-center justify-center overflow-hidden">
      <svg
        className={`w-32 h-32 md:w-48 md:h-48 ${isVisible ? "animate-dna-rotate" : "opacity-0"}`}
        viewBox="0 0 200 300"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* DNA Helix Structure */}
        <defs>
          <linearGradient id="dnaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.8" />
            <stop offset="50%" stopColor="currentColor" stopOpacity="0.4" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.8" />
          </linearGradient>
        </defs>

        {/* Left Helix Strand */}
        <path
          d="M 80 30 Q 60 80 80 130 T 80 230"
          stroke="url(#dnaGradient)"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />

        {/* Right Helix Strand */}
        <path
          d="M 120 30 Q 140 80 120 130 T 120 230"
          stroke="url(#dnaGradient)"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />

        {/* Base Pair Connections - left side */}
        <circle cx="75" cy="50" r="4" fill="currentColor" opacity="0.6" />
        <line x1="75" y1="50" x2="125" y2="50" stroke="currentColor" strokeWidth="2" opacity="0.4" />
        <circle cx="125" cy="50" r="4" fill="currentColor" opacity="0.6" />

        <circle cx="70" cy="90" r="4" fill="currentColor" opacity="0.5" />
        <line x1="70" y1="90" x2="130" y2="90" stroke="currentColor" strokeWidth="2" opacity="0.3" />
        <circle cx="130" cy="90" r="4" fill="currentColor" opacity="0.5" />

        <circle cx="80" cy="130" r="4" fill="currentColor" opacity="0.6" />
        <line x1="80" y1="130" x2="120" y2="130" stroke="currentColor" strokeWidth="2" opacity="0.4" />
        <circle cx="120" cy="130" r="4" fill="currentColor" opacity="0.6" />

        <circle cx="75" cy="170" r="4" fill="currentColor" opacity="0.5" />
        <line x1="75" y1="170" x2="125" y2="170" stroke="currentColor" strokeWidth="2" opacity="0.3" />
        <circle cx="125" cy="170" r="4" fill="currentColor" opacity="0.5" />

        <circle cx="80" cy="210" r="4" fill="currentColor" opacity="0.6" />
        <line x1="80" y1="210" x2="120" y2="210" stroke="currentColor" strokeWidth="2" opacity="0.4" />
        <circle cx="120" cy="210" r="4" fill="currentColor" opacity="0.6" />
      </svg>

      {/* Animated floating glow effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className={`absolute w-40 h-40 md:w-56 md:h-56 rounded-full blur-3xl opacity-10 bg-foreground ${
            isVisible ? "animate-pulse" : ""
          }`}
        />
      </div>
    </div>
  )
}
