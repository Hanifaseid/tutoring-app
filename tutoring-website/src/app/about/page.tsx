// app/about/page.tsx
"use client"

import { useState, useEffect } from 'react'
import { LanguageProvider } from '@/app/contexts/language-context'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import AboutHero from '@/app/components/about-hero'
import MissionVision from '@/app/components/mission-vision'
import TeamSection from '@/app/components/team-section'
import Stats from '@/app/components/stats'


export default function About() {
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
        <AboutHero />
        <MissionVision />
        <Stats />
        <TeamSection />
        <Footer />
      </div>
    </LanguageProvider>
  )
}