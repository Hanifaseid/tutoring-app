// contexts/language-context.tsx
"use client"

import React, { createContext, useContext, useState, useEffect } from 'react'

type Language = 'en' | 'ar' | 'am'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  translations: any
  direction: 'ltr' | 'rtl'
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')
  const [translations, setTranslations] = useState({})
  const [direction, setDirection] = useState<'ltr' | 'rtl'>('ltr')

  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const translation = await import(`@/app/lib/languages/${language}.json`)
        setTranslations(translation.default || translation)
        
        // Set text direction based on language
        setDirection(language === 'ar' ? 'rtl' : 'ltr')
        
        // Update HTML dir attribute and lang
        document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
        document.documentElement.lang = language
      } catch (error) {
        console.error('Failed to load translations:', error)
      }
    }

    loadTranslations()
  }, [language])

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations, direction }}>
      <div dir={direction}>
        {children}
      </div>
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}