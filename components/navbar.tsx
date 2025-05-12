"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/contexts/language-context"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { translations, dir } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white !text-black shadow-md py-2" : "bg-transparent text-white py-4"
      }`}
      dir={dir}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-black">
            <span className="text-amber-600">Bar</span>ber 
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center transition-all duration-300 space-x-8">
          <a href="#home" className=" hover:text-amber-600 transition-colors">
            {translations["nav.home"]}
          </a>
          <a href="#services" className=" hover:text-amber-600 transition-colors">
            {translations["nav.services"]}
          </a>
          <a href="#gallery" className=" hover:text-amber-600 transition-colors">
            {translations["nav.gallery"]}
          </a>
          <a href="#testimonials" className=" hover:text-amber-600 transition-colors">
            {translations["nav.testimonials"]}
          </a>
          <Button className="bg-amber-600 hover:bg-amber-700">{translations["nav.bookNow"]}</Button>
          <LanguageSwitcher />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <LanguageSwitcher />
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-md py-4 px-4">
          <div className="flex flex-col space-y-4">
            <a
              href="#home"
              className="text-black hover:text-amber-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {translations["nav.home"]}
            </a>
            <a
              href="#services"
              className="text-black hover:text-amber-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {translations["nav.services"]}
            </a>
            <a
              href="#gallery"
              className="text-black hover:text-amber-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {translations["nav.gallery"]}
            </a>
            <a
              href="#testimonials"
              className="text-black hover:text-amber-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {translations["nav.testimonials"]}
            </a>
            <Button className="bg-amber-600 hover:bg-amber-700 w-full" onClick={() => setIsMenuOpen(false)}>
              {translations["nav.bookNow"]}
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
