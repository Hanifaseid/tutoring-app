"use client" // Add this directive at the very top

import { useState, useEffect } from 'react'
import { LanguageProvider } from '@/app/contexts/language-context'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import HowItWorksHero from '@/app/components/how-it-works-hero'
import ProcessSteps from '@/app/components/process-steps'
import ServiceTypes from '@/app/components/service-types'
import FAQ from '@/app/components/faq'

export default function HowItWorks() {
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
        <HowItWorksHero />
        <ProcessSteps />
        <ServiceTypes />
        <FAQ />
        <Footer />
      </div>
    </LanguageProvider>
  )
}