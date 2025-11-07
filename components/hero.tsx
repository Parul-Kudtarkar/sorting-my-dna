"use client"

import { useEffect, useState } from "react"
import { TypewriterAnimation } from "./typewriter-animation"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative w-full">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 md:py-32">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className={`transition-all duration-700 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-foreground/10 shadow-lg">
              <img src="/professional-headshot.jpg" alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>

          <div
            className={`space-y-4 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-tight">
              Parul Kudtarkar
            </h1>
          </div>

          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <p className="text-2xl md:text-3xl font-light text-foreground/80">ML & Genomics Researcher</p>
          </div>

          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <TypewriterAnimation />
          </div>

          <div
            className={`max-w-3xl space-y-6 transition-all duration-700 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <p className="text-base md:text-lg text-foreground/75 leading-relaxed font-light">
              20 years turning biological data into medical breakthroughs. Harvard, Caltech, UCSD. Currently the lead
              developer on multi-million dollar metabolic research at UC San Diego.
            </p>
            <p className="text-base md:text-lg text-foreground/75 leading-relaxed font-light">
              Technical expertise. Human empathy. Research that changes lives.
            </p>
            <p className="text-base md:text-lg text-foreground/75 leading-relaxed font-light">
              When not in the lab, you'll find me running trails, painting landscapes, or cooking for friends.
            </p>
          </div>

          {/* Links section */}
          <div
            className={`flex flex-wrap gap-3 pt-6 transition-all duration-700 delay-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <a
              href="https://www.linkedin.com/in/parulkudtarkar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-foreground text-background rounded-lg font-medium hover:opacity-90 smooth-transition"
            >
              LinkedIn
            </a>
            <a
              href="https://scholar.google.com/citations?user=mJwZw2kAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-foreground/20 rounded-lg hover:bg-secondary smooth-transition"
            >
              Google Scholar
            </a>
            <a
              href="https://github.com/Parul-Kudtarkar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-foreground/20 rounded-lg hover:bg-secondary smooth-transition"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
