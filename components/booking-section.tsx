"use client"

import type React from "react"
import Image from "next/image"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function BookingSection() {
  const sectionRef = useRef(null)
  const [date, setDate] = useState<Date | undefined>(undefined)
  const { translations, dir } = useLanguage()
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    time: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log({ ...formState, date })
    alert("Booking submitted! We'll contact you to confirm your appointment.")
  }

  return (
    <section id="booking" ref={sectionRef} className="py-20 bg-white" dir={dir}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 opacity-0 animate-fadeIn">
            {translations["booking.title"]}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto opacity-0 animate-fadeIn animation-delay-200">
            {translations["booking.subtitle"]}
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-gray-50 p-8 rounded-lg shadow-md opacity-0 animate-fadeInLeft animation-delay-400"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">{translations["booking.form.name"]}</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Iyehah"
                    value={formState.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">{translations["booking.form.email"]}</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="iyehah@example.com"
                    value={formState.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">{translations["booking.form.phone"]}</Label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="(123) 456-7890"
                    value={formState.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">{translations["booking.form.service"]}</Label>
                  <Select value={formState.service} onValueChange={(value) => handleSelectChange("service", value)}>
                    <SelectTrigger id="service">
                      <SelectValue placeholder={translations["booking.form.selectService"]} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="haircut">{translations["services.haircut.title"]}</SelectItem>
                      <SelectItem value="beard">{translations["services.beard.title"]}</SelectItem>
                      <SelectItem value="styling">{translations["services.styling.title"]}</SelectItem>
                      <SelectItem value="combo">{translations["services.combo.title"]}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>{translations["booking.form.date"]}</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start text-left font-normal">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>{translations["booking.form.pickDate"]}</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="time">{translations["booking.form.time"]}</Label>
                  <Select value={formState.time} onValueChange={(value) => handleSelectChange("time", value)}>
                    <SelectTrigger id="time">
                      <SelectValue placeholder={translations["booking.form.selectTime"]} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="9:00">9:00 AM</SelectItem>
                      <SelectItem value="10:00">10:00 AM</SelectItem>
                      <SelectItem value="11:00">11:00 AM</SelectItem>
                      <SelectItem value="12:00">12:00 PM</SelectItem>
                      <SelectItem value="13:00">1:00 PM</SelectItem>
                      <SelectItem value="14:00">2:00 PM</SelectItem>
                      <SelectItem value="15:00">3:00 PM</SelectItem>
                      <SelectItem value="16:00">4:00 PM</SelectItem>
                      <SelectItem value="17:00">5:00 PM</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700">
                {translations["booking.form.submit"]}
              </Button>
            </form>
          </div>

          <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center">
            <div className="w-96 h-96 rounded-full flex items-center justify-center">
              {/* <CalendarIcon className="w-24 h-24 text-amber-600 animate-pulse" /> */}
              <Image 
                alt="book"
                src={'/book.svg'}
                width={400}
                height={400}
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
