"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Scissors } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function Footer() {
  const footerRef = useRef(null)
  const { translations, dir } = useLanguage()

  return (
    <footer ref={footerRef} className="bg-gray-900 text-white pt-16 pb-8" dir={dir}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="opacity-0 animate-fadeIn">
            <div className="flex items-center mb-4">
              <Scissors className="h-6 w-6 text-amber-600 mr-2" />
              <h3 className="text-2xl font-bold">
                <span className="text-amber-600">Bar</span>ber
              </h3>
            </div>
            <p className="text-gray-400 mb-4">{translations["footer.about"]}</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-amber-600 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-600 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-600 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>

          <div className="opacity-0 animate-fadeIn animation-delay-200">
            <h4 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">
              {translations["footer.quickLinks"]}
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-amber-600 transition-colors">
                  {translations["nav.home"]}
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-amber-600 transition-colors">
                  {translations["nav.services"]}
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-amber-600 transition-colors">
                  {translations["nav.gallery"]}
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-amber-600 transition-colors">
                  {translations["nav.testimonials"]}
                </a>
              </li>
              <li>
                <a href="#booking" className="text-gray-400 hover:text-amber-600 transition-colors">
                  {translations["nav.bookNow"]}
                </a>
              </li>
            </ul>
          </div>

          <div className="opacity-0 animate-fadeIn animation-delay-400">
            <h4 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">{translations["footer.contactUs"]}</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-amber-600 mr-2 mt-1 shrink-0" />
                <span className="text-gray-400">123 Barber, Nouakchott, Mauritania, 12345</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-amber-600 mr-2 shrink-0" />
                <span className="text-gray-400">(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-amber-600 mr-2 shrink-0" />
                <span className="text-gray-400">info@barber.com</span>
              </li>
            </ul>
          </div>

          <div className="opacity-0 animate-fadeIn animation-delay-600">
            <h4 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">
              {translations["footer.openingHours"]}
            </h4>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-gray-400">{translations["footer.weekdays"]}</span>
                <span className="text-amber-600">9:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-400">{translations["footer.saturday"]}</span>
                <span className="text-amber-600">9:00 AM - 5:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-400">{translations["footer.sunday"]}</span>
                <span className="text-amber-600">{translations["footer.closed"]}</span>
              </li>
            </ul>

            <h4 className="text-lg font-bold mt-6 mb-4 border-b border-gray-700 pb-2">
              {translations["footer.newsletter"]}
            </h4>
            <div className="flex">
              <Input
                type="email"
                placeholder={translations["footer.emailPlaceholder"]}
                className="bg-gray-800 border-gray-700 text-white"
              />
              <Button className="ml-2 bg-amber-600 hover:bg-amber-700">{translations["footer.subscribe"]}</Button>
            </div>
          </div>
        </div>

        <div className="opacity-0 animate-fadeIn animation-delay-800 border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Barber. {translations["footer.copyright"]}
          </p>
        </div>
      </div>
    </footer>
  )
}
