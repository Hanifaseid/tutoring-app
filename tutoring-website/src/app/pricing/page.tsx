// app/pricing/page.tsx
"use client"

import { useState, useEffect } from 'react'
import { LanguageProvider } from '@/app/contexts/language-context'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import PricingHero from '@/app/components/pricing-hero'
import PricingPlans from '@/app/components/pricing-plans'
import PriceComparison from '@/app/components/price-comparsion'
import FAQ from '@/app/components/faq'

export default function Pricing() {
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
        <PricingHero />
        <PricingPlans />
        <PriceComparison />
        <FAQ />
        <Footer />
      </div>
    </LanguageProvider>
  )
}