"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "fr" | "ar"

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  dir: "ltr" | "rtl"
  translations: Record<string, string>
}

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.gallery": "Gallery",
    "nav.testimonials": "Testimonials",
    "nav.bookNow": "Book Now",

    // Hero Section
    "hero.title": "Premium Barber Experience",
    "hero.subtitle": "Where style meets precision. Get the perfect cut that defines your personality.",
    "hero.bookButton": "Book Appointment",
    "hero.servicesButton": "Our Services",

    // Services Section
    "services.title": "Our Premium Services",
    "services.subtitle": "We offer a range of professional barber services to keep you looking your best.",
    "services.haircut.title": "Haircut",
    "services.haircut.description": "Precision cuts tailored to your style and face shape.",
    "services.beard.title": "Beard Trim",
    "services.beard.description": "Expert beard shaping and maintenance for a clean look.",
    "services.styling.title": "Hair Styling",
    "services.styling.description": "Professional styling with premium products.",
    "services.combo.title": "Hair & Beard Combo",
    "services.combo.description": "Complete grooming package for the modern gentleman.",

    // Gallery Section
    "gallery.title": "Our Work Gallery",
    "gallery.subtitle": "Check out some of our finest haircuts and styles created by our expert barbers.",

    // Testimonials Section
    "testimonials.title": "What Our Clients Say",
    "testimonials.subtitle": "Don't just take our word for it. Here's what our satisfied customers have to say.",

    // Booking Section
    "booking.title": "Book Your Appointment",
    "booking.subtitle": "Schedule your visit and experience our premium barber services.",
    "booking.form.name": "Full Name",
    "booking.form.email": "Email",
    "booking.form.phone": "Phone Number",
    "booking.form.service": "Service",
    "booking.form.date": "Date",
    "booking.form.time": "Time",
    "booking.form.selectService": "Select a service",
    "booking.form.pickDate": "Pick a date",
    "booking.form.selectTime": "Select a time",
    "booking.form.submit": "Book Appointment",

    // Footer
    "footer.about":
      "Premium barber services for the modern gentleman. Quality cuts, expert styling, and a relaxing atmosphere.",
    "footer.quickLinks": "Quick Links",
    "footer.contactUs": "Contact Us",
    "footer.openingHours": "Opening Hours",
    "footer.newsletter": "Newsletter",
    "footer.subscribe": "Subscribe",
    "footer.emailPlaceholder": "Your email",
    "footer.copyright": "All rights reserved.",
    "footer.weekdays": "Monday - Friday",
    "footer.saturday": "Saturday",
    "footer.sunday": "Sunday",
    "footer.closed": "Closed",

    // Not Found Page
    "notFound.title": "Page Not Found",
    "notFound.description": "Sorry, we couldn't find the page you're looking for.",
    "notFound.backHome": "Back to Home",
    "notFound.suggestion": "You might want to check our services or book an appointment instead.",
    "notFound.errorCode": "Error 404",
  },
  fr: {
    // Navigation
    "nav.home": "Accueil",
    "nav.services": "Services",
    "nav.gallery": "Galerie",
    "nav.testimonials": "Témoignages",
    "nav.bookNow": "Réserver",

    // Hero Section
    "hero.title": "Expérience de Barbier Premium",
    "hero.subtitle": "Où le style rencontre la précision. Obtenez la coupe parfaite qui définit votre personnalité.",
    "hero.bookButton": "Prendre Rendez-vous",
    "hero.servicesButton": "Nos Services",

    // Services Section
    "services.title": "Nos Services Premium",
    "services.subtitle":
      "Nous offrons une gamme de services de barbier professionnels pour vous garder à votre meilleur.",
    "services.haircut.title": "Coupe de Cheveux",
    "services.haircut.description": "Coupes de précision adaptées à votre style et à la forme de votre visage.",
    "services.beard.title": "Taille de Barbe",
    "services.beard.description": "Façonnage et entretien expert de la barbe pour un look soigné.",
    "services.styling.title": "Coiffage",
    "services.styling.description": "Coiffage professionnel avec des produits premium.",
    "services.combo.title": "Combo Cheveux & Barbe",
    "services.combo.description": "Forfait de toilettage complet pour le gentleman moderne.",

    // Gallery Section
    "gallery.title": "Notre Galerie de Travaux",
    "gallery.subtitle":
      "Découvrez quelques-unes de nos meilleures coupes de cheveux et styles créés par nos barbiers experts.",

    // Testimonials Section
    "testimonials.title": "Ce Que Disent Nos Clients",
    "testimonials.subtitle":
      "Ne vous fiez pas seulement à notre parole. Voici ce que nos clients satisfaits ont à dire.",

    // Booking Section
    "booking.title": "Réservez Votre Rendez-vous",
    "booking.subtitle": "Planifiez votre visite et découvrez nos services de barbier premium.",
    "booking.form.name": "Nom Complet",
    "booking.form.email": "Email",
    "booking.form.phone": "Numéro de Téléphone",
    "booking.form.service": "Service",
    "booking.form.date": "Date",
    "booking.form.time": "Heure",
    "booking.form.selectService": "Sélectionnez un service",
    "booking.form.pickDate": "Choisissez une date",
    "booking.form.selectTime": "Sélectionnez une heure",
    "booking.form.submit": "Réserver le Rendez-vous",

    // Footer
    "footer.about":
      "Services de barbier premium pour le gentleman moderne. Coupes de qualité, coiffage expert et atmosphère relaxante.",
    "footer.quickLinks": "Liens Rapides",
    "footer.contactUs": "Contactez-nous",
    "footer.openingHours": "Heures d'Ouverture",
    "footer.newsletter": "Newsletter",
    "footer.subscribe": "S'abonner",
    "footer.emailPlaceholder": "Votre email",
    "footer.copyright": "Tous droits réservés.",
    "footer.weekdays": "Lundi - Vendredi",
    "footer.saturday": "Samedi",
    "footer.sunday": "Dimanche",
    "footer.closed": "Fermé",

    // Not Found Page
    "notFound.title": "Page Non Trouvée",
    "notFound.description": "Désolé, nous n'avons pas pu trouver la page que vous recherchez.",
    "notFound.backHome": "Retour à l'Accueil",
    "notFound.suggestion": "Vous pourriez consulter nos services ou prendre rendez-vous à la place.",
    "notFound.errorCode": "Erreur 404",
  },
  ar: {
    // Navigation
    "nav.home": "الرئيسية",
    "nav.services": "الخدمات",
    "nav.gallery": "معرض الأعمال",
    "nav.testimonials": "آراء العملاء",
    "nav.bookNow": "احجز الآن",

    // Hero Section
    "hero.title": "تجربة حلاقة متميزة",
    "hero.subtitle": "حيث يلتقي الأسلوب بالدقة. احصل على قصة الشعر المثالية التي تحدد شخصيتك.",
    "hero.bookButton": "حجز موعد",
    "hero.servicesButton": "خدماتنا",

    // Services Section
    "services.title": "خدماتنا المتميزة",
    "services.subtitle": "نقدم مجموعة من خدمات الحلاقة المهنية للحفاظ على مظهرك الأفضل.",
    "services.haircut.title": "قص الشعر",
    "services.haircut.description": "قصات دقيقة مصممة حسب أسلوبك وشكل وجهك.",
    "services.beard.title": "تشذيب اللحية",
    "services.beard.description": "تشكيل وصيانة اللحية بخبرة للحصول على مظهر أنيق.",
    "services.styling.title": "تصفيف الشعر",
    "services.styling.description": "تصفيف احترافي باستخدام منتجات متميزة.",
    "services.combo.title": "باقة الشعر واللحية",
    "services.combo.description": "باقة عناية كاملة للرجل العصري.",

    // Gallery Section
    "gallery.title": "معرض أعمالنا",
    "gallery.subtitle": "تفقد بعض من أفضل قصات الشعر والأساليب التي أنشأها حلاقونا الخبراء.",

    // Testimonials Section
    "testimonials.title": "ما يقوله عملاؤنا",
    "testimonials.subtitle": "لا تأخذ كلمتنا فقط. إليك ما يقوله عملاؤنا الراضون.",

    // Booking Section
    "booking.title": "احجز موعدك",
    "booking.subtitle": "جدول زيارتك واستمتع بخدمات الحلاقة المتميزة لدينا.",
    "booking.form.name": "الاسم الكامل",
    "booking.form.email": "البريد الإلكتروني",
    "booking.form.phone": "رقم الهاتف",
    "booking.form.service": "الخدمة",
    "booking.form.date": "التاريخ",
    "booking.form.time": "الوقت",
    "booking.form.selectService": "اختر خدمة",
    "booking.form.pickDate": "اختر تاريخًا",
    "booking.form.selectTime": "اختر وقتًا",
    "booking.form.submit": "حجز الموعد",

    // Footer
    "footer.about": "خدمات حلاقة متميزة للرجل العصري. قصات ذات جودة عالية، تصفيف خبير، وأجواء مريحة.",
    "footer.quickLinks": "روابط سريعة",
    "footer.contactUs": "اتصل بنا",
    "footer.openingHours": "ساعات العمل",
    "footer.newsletter": "النشرة الإخبارية",
    "footer.subscribe": "اشترك",
    "footer.emailPlaceholder": "بريدك الإلكتروني",
    "footer.copyright": "جميع الحقوق محفوظة.",
    "footer.weekdays": "الاثنين - الجمعة",
    "footer.saturday": "السبت",
    "footer.sunday": "الأحد",
    "footer.closed": "مغلق",

    // Not Found Page
    "notFound.title": "الصفحة غير موجودة",
    "notFound.description": "عذراً، لم نتمكن من العثور على الصفحة التي تبحث عنها.",
    "notFound.backHome": "العودة إلى الصفحة الرئيسية",
    "notFound.suggestion": "قد ترغب في التحقق من خدماتنا أو حجز موعد بدلاً من ذلك.",
    "notFound.errorCode": "خطأ 404",
  },
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  dir: "ltr",
  translations: translations.en,
})

export const useLanguage = () => useContext(LanguageContext)

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>("en")
  const [dir, setDir] = useState<"ltr" | "rtl">("ltr")

  useEffect(() => {
    // Check if there's a saved language preference
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && ["en", "fr", "ar"].includes(savedLanguage)) {
      setLanguageState(savedLanguage)
    }
  }, [])

  useEffect(() => {
    // Update direction based on language
    setDir(language === "ar" ? "rtl" : "ltr")

    // Save language preference
    localStorage.setItem("language", language)

    // Update HTML dir attribute
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr"

    // Update HTML lang attribute
    document.documentElement.lang = language
  }, [language])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
  }

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        dir,
        translations: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}
