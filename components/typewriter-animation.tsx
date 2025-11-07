"use client"

import { useEffect, useState } from "react"

export function TypewriterAnimation() {
  const fullText = "Transforming health through AI and genomics."
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayedText(fullText.substring(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }, 30)
      return () => clearTimeout(timer)
    }
  }, [currentIndex, fullText])

  return (
    <div className="min-h-10">
      {displayedText && (
        <p className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-wide bg-gradient-to-r from-pink-500 via-purple-500 to-green-500 bg-clip-text text-transparent">
          {displayedText}
        </p>
      )}
      {currentIndex < fullText.length && (
        <span className="inline-block w-2.5 h-8 md:h-10 bg-gradient-to-r from-pink-500 to-green-500 ml-2 animate-pulse"></span>
      )}
    </div>
  )
}
