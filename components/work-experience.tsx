"use client"

import { useEffect, useState } from "react"

export default function WorkExperience() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const experience = [
    {
      title: "Common Metabolic Diseases Genome Atlas & PanKbase",
      dates: "June 2017 – Present",
      description: `Principal architect for cmdga.org ($57M FNIH AMP CMD initiative) and PanKbase (data.pankbase.org, $10M NIH-funded), partnering with Amgen, Eli Lilly, Novo Nordisk, and Pfizer. Executed single-cell ATAC-seq analyses identifying disease-associated chromatin patterns for T1D and T2D. Architected scalable cloud solutions reducing costs while improving performance. Developed PerseusAI platform integrating knowledge graphs, vector embeddings and LLMs.`,
    },
    {
      title: "Echinobase",
      dates: "January 2011 – June 2017",
      description: `Led comparative genomics platform serving 150+ research laboratories worldwide. Developed end-to-end pipelines for 7 echinoderm species, integrating RNA-seq and ATAC-seq data to infer transcriptional networks and identify conserved regulatory elements.`,
    },
    {
      title: "Cloud Computing for Comparative Genomics",
      dates: "January 2008 – December 2010",
      description: `Deployed distributed RSD algorithm on cloud platforms (Yahoo MapReduce, AWS ECS). Applied machine learning-based runtime prediction achieving 40% cost reduction, pioneering the first cloud-based comparative genomics system.`,
    },
  ]

  return (
    <section className="border-t border-border/50 bg-secondary/30">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Work Experience</h2>
        </div>

        <div className="space-y-12">
          {experience.map((item, index) => (
            <div
              key={index}
              className={`pb-12 border-b border-border/30 last:border-b-0 last:pb-0 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{
                transitionDelay: isVisible ? `${(index + 1) * 100}ms` : "0ms",
              }}
            >
              <h3 className="text-2xl md:text-3xl font-semibold mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground mb-6 font-medium">{item.dates}</p>
              <p className="text-foreground/80 text-base leading-relaxed font-light">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
