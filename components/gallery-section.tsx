"use client"

import { useRef } from "react"
import { useLanguage } from "@/contexts/language-context"

const galleryImages = [
  "/placeholder.svg?height=600&width=400",
  "/placeholder.svg?height=600&width=400",
  "/placeholder.svg?height=600&width=400",
  "/placeholder.svg?height=600&width=400",
  "/placeholder.svg?height=600&width=400",
  "/placeholder.svg?height=600&width=400",
]

export default function GallerySection() {
  const sectionRef = useRef(null)
  const { translations, dir } = useLanguage()

  return (
    <section id="gallery" ref={sectionRef} className="py-20 bg-white" dir={dir}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 opacity-0 animate-fadeIn">
            {translations["gallery.title"]}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto opacity-0 animate-fadeIn animation-delay-200">
            {translations["gallery.subtitle"]}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 opacity-0 animate-fadeInUp"
              style={{ animationDelay: `${index * 100 + 400}ms` }}
            >
              <img
                src={image || "/placeholder.svg"}
                alt={`Barber work sample ${index + 1}`}
                className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
