"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Scissors } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function HeroSection() {
  const heroRef = useRef(null)
  const { translations, dir } = useLanguage()

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
      dir={dir}
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10" />
        <img
          src="/placeholder.svg?height=1080&width=1920"
          alt="Barber shop background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 z-10 flex flex-col items-center">
        <div className="w-full text-white text-center">
          <h1 className="hero-animate text-4xl md:text-6xl font-bold mb-4 opacity-0 animate-fadeIn">
            {translations["hero.title"]}
          </h1>
          <p className="hero-animate text-xl md:text-2xl mb-6 text-gray-200 opacity-0 animate-fadeIn animation-delay-200">
            {translations["hero.subtitle"]}
          </p>
            <div className="hero-animate flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 opacity-0 animate-fadeIn animation-delay-400">
            <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg">
              {translations["hero.bookButton"]}
            </Button>
            <Button variant="outline" className="text-foreground border-none hover:bg-amber-700 hover:text-white px-8 py-6 text-lg">
              {translations["hero.servicesButton"]}
            </Button>
            </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center z-10">
        <div className="animate-bounce">
          <Scissors className="h-10 w-10 text-amber-600" />
        </div>
      </div>
    </section>
  )
}