"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Scissors, Home, Search } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function NotFound() {
  const { translations, dir } = useLanguage()

  // Set the page title
  useEffect(() => {
    document.title = `${translations["notFound.title"]} - SharpCuts`
  }, [translations])

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-12" dir={dir}>
      <div className="text-center max-w-md mx-auto">
        <div className="mb-8 opacity-0 animate-fadeIn">
          <div className="w-24 h-24 bg-amber-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Scissors className="h-12 w-12 text-amber-600 animate-pulse" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{translations["notFound.title"]}</h1>
          <p className="text-gray-600 text-lg">{translations["notFound.description"]}</p>
          <div className="mt-2 text-amber-600 font-mono">{translations["notFound.errorCode"]}</div>
        </div>

        <div className="space-y-6 opacity-0 animate-fadeIn animation-delay-200">
          <p className="text-gray-600">{translations["notFound.suggestion"]}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" passHref>
              <Button className="bg-amber-600 hover:bg-amber-700 flex items-center gap-2">
                <Home className="h-4 w-4" />
                {translations["notFound.backHome"]}
              </Button>
            </Link>

            <Link href="/#services" passHref>
              <Button variant="outline" className="flex items-center gap-2">
                <Search className="h-4 w-4" />
                {translations["nav.services"]}
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 opacity-20 hidden md:block">
        <Scissors className="h-16 w-16 text-amber-600 rotate-45" />
      </div>
      <div className="absolute bottom-1/4 right-10 opacity-20 hidden md:block">
        <Scissors className="h-16 w-16 text-amber-600 -rotate-45" />
      </div>
    </div>
  )
}
