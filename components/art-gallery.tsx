"use client"

import { useState } from "react"
import { X } from "lucide-react"

export default function ArtGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const exhibitions = [
    "Swiss Riviera – Armory Center for the Arts (2018)",
    "California Wine – Caltech Art Gallery (2019)",
    "Grecian Dreams – Caltech Art Gallery (2020)",
  ]

  const artworks = [
    { title: "Swiss Riviera", src: "/swiss-riviera-landscape-painting.png" },
    { title: "Grecian Dreams", src: "/grecian-dreams-classical-art.jpg" },
    { title: "California Wine", src: "/california-wine-country-painting.jpg" },
    { title: "Lavande en Provence", src: "/lavande-en-provence-lavender-fields.jpg" },
    { title: "Colors", src: "/abstract-color-composition-art.jpg" },
  ]

  return (
    <section>
      {/* Exhibitions Section */}
      <div className="border-b border-border bg-card/30">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold mb-8">Exhibitions</h2>
          <div className="space-y-3">
            {exhibitions.map((exhibit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                <p className="text-lg text-foreground">{exhibit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Premium Gallery Grid */}
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold mb-12">Featured Works</h2>

        {/* Premium Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {artworks.map((artwork, index) => (
            <div
              key={index}
              className="group relative rounded-lg overflow-hidden border border-border hover:border-accent transition-all duration-300 cursor-pointer bg-background"
              onClick={() => setSelectedImage(index)}
            >
              {/* Image Container */}
              <div className="relative w-full min-h-[300px] flex items-center justify-center overflow-hidden bg-background">
                <img
                  src={artwork.src || "/placeholder.svg"}
                  alt={artwork.title}
                  className="w-full h-auto max-h-[600px] object-contain group-hover:scale-105 transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6 pointer-events-none">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{artwork.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Light Box Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full max-h-[90vh] flex flex-col">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
              aria-label="Close"
            >
              <X size={32} />
            </button>

            <div className="flex-1 flex items-center justify-center min-h-0">
              <img
                src={artworks[selectedImage].src || "/placeholder.svg"}
                alt={artworks[selectedImage].title}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            <div className="text-center mt-6">
              <h3 className="text-2xl font-semibold text-white mb-2">{artworks[selectedImage].title}</h3>
              <p className="text-gray-300">
                {selectedImage + 1} / {artworks.length}
              </p>
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={() => setSelectedImage((selectedImage - 1 + artworks.length) % artworks.length)}
                className="px-6 py-2 bg-white/10 hover:bg-white/20 rounded text-white transition-colors"
              >
                Previous
              </button>
              <button
                onClick={() => setSelectedImage((selectedImage + 1) % artworks.length)}
                className="px-6 py-2 bg-white/10 hover:bg-white/20 rounded text-white transition-colors"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
