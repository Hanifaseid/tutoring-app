// app/contact/page.tsx
"use client"

import { useState, useEffect } from 'react'
import { LanguageProvider } from '@/app/contexts/language-context'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import ContactHero from '@/app/components/contact-hero'
import ContactForm from '@/app/components/contact-form'
import ContactInfo from '@/app/components/contact-info'

export default function Contact() {
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
        <ContactHero />
        <div className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
            <div>
              <ContactInfo />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </LanguageProvider>
  )
}