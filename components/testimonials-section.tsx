"use client"
import Image from "next/image"
import { useRef, useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const testimonials = [
  {
    name: "Iyehah Hacen",
    rating: 5,
    text: "Best haircut I've ever had! The attention to detail is amazing and the atmosphere is great.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Iyehah Hacen",
    rating: 5,
    text: "I've been coming here for years and have never been disappointed. Highly recommended!",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Med Lemin",
    rating: 4,
    text: "Great service and friendly staff. My go-to place for haircuts and beard trims.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Med Lemine",
    rating: 5,
    text: "Professional service with amazing results. Worth every penny!",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function TestimonialsSection() {
  const sectionRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const { translations, dir } = useLanguage()

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="testimonials" ref={sectionRef} className="py-20 bg-gray-50" dir={dir}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 opacity-0 animate-fadeIn">
            {translations["testimonials.title"]}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto opacity-0 animate-fadeIn animation-delay-200">
            {translations["testimonials.subtitle"]}
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0 flex justify-center">
            <div className="w-96 h-96 rounded-full flex items-center justify-center">
              {/* <Star className="w-24 h-24 text-amber-600 animate-pulse" /> */}
              <Image 
              alt="rating"
              src={'/rating.svg'}
              width={400}
              height={400}
              />
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <Card className="shadow-lg border-none opacity-0 animate-fadeInRight animation-delay-600">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonials[activeIndex].image || "/placeholder.svg"}
                    alt={testimonials[activeIndex].name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-lg">{testimonials[activeIndex].name}</h4>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < testimonials[activeIndex].rating ? "text-amber-500 fill-amber-500" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonials[activeIndex].text}"</p>
              </CardContent>
            </Card>

            <div className="flex justify-center mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full mx-1 transition-colors duration-300 ${
                    activeIndex === index ? "bg-amber-600" : "bg-gray-300"
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
