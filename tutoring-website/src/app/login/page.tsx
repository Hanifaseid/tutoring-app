// app/login/page.tsx
"use client"

import { useState, useEffect } from 'react'
import { LanguageProvider } from '@/app/contexts/language-context'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import LoginForm from '@/app/components/login-form'

export default function Login() {
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
        <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto">
            <LoginForm />
          </div>
        </div>
        <Footer />
      </div>
    </LanguageProvider>
  )
}