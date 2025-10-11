// app/for-tutors/page.tsx
"use client"

import { useState, useEffect } from 'react'
import { LanguageProvider } from '@/app/contexts/language-context'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import TutorsHero from '@/app/components/tutors-hero'
// import BenefitsSection from '@/app/components/benefits-section'
// import Requirements from '@/app/components/requirements'
// import ApplicationProcess from '@/app/components/application-process'
// import TutorTestimonials from '@/app/components/tutor-testimonials'

export default function ForTutors() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-amber-100 dark:from-gray-900 dark:to-amber-950 transition-colors duration-300">
        <Navbar />
        <TutorsHero />
        {/* <BenefitsSection />
        <Requirements />
        <ApplicationProcess />
        <TutorTestimonials /> */}
        <Footer />
      </div>
    </LanguageProvider>
  )
}