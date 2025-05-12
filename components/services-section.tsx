"use client"

import { useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Scissors, BeakerIcon as Beard, SprayCanIcon as Spray, Ruler } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function ServicesSection() {
  const sectionRef = useRef(null)
  const { translations, dir } = useLanguage()

  const services = [
    {
      title: translations["services.haircut.title"],
      description: translations["services.haircut.description"],
      icon: Scissors,
      price: "$25",
    },
    {
      title: translations["services.beard.title"],
      description: translations["services.beard.description"],
      icon: Beard,
      price: "$15",
    },
    {
      title: translations["services.styling.title"],
      description: translations["services.styling.description"],
      icon: Spray,
      price: "$20",
    },
    {
      title: translations["services.combo.title"],
      description: translations["services.combo.description"],
      icon: Ruler,
      price: "$35",
    },
  ]

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-gray-50" dir={dir}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 opacity-0 animate-fadeIn">
            {translations["services.title"]}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto opacity-0 animate-fadeIn animation-delay-200">
            {translations["services.subtitle"]}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 border-none opacity-0 animate-fadeInUp"
              style={{ animationDelay: `${index * 100 + 400}ms` }}
            >
              <CardHeader className="pb-2">
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">{service.description}</CardDescription>
                <p className="text-2xl font-bold text-amber-600">{service.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
