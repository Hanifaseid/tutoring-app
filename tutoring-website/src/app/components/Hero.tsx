// components/hero.tsx
"use client"

import Link from 'next/link'
import { useLanguage } from '@/app/contexts/language-context'
import { motion } from 'framer-motion'
import { BookOpen, Home, Globe } from 'lucide-react'

export default function Hero() {
  const { translations } = useLanguage()

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              {translations.hero?.title || 'Professional Tutoring Services'}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-600">
                Made Simple
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              {translations.hero?.subtitle || 'Door-to-door and online tutoring in English, Arabic, and Amharic'}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl hover:from-amber-600 hover:to-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                {translations.hero?.cta || 'Get Started'}
                <BookOpen className="ml-2 h-5 w-5" />
              </Link>
              
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-amber-700 dark:text-amber-300 border-2 border-amber-300 dark:border-amber-600 rounded-xl hover:bg-amber-50 dark:hover:bg-amber-900/50 transition-all duration-300"
              >
                {translations.hero?.secondary || 'Learn More'}
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600 dark:text-amber-400">500+</div>
                <div className="text-gray-600 dark:text-gray-400">Tutors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600 dark:text-amber-400">2K+</div>
                <div className="text-gray-600 dark:text-gray-400">Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600 dark:text-amber-400">98%</div>
                <div className="text-gray-600 dark:text-gray-400">Success</div>
              </div>
            </div>
          </motion.div>

          {/* Visual Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl p-8 shadow-2xl">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                {/* Service Cards */}
                <div className="space-y-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-4 p-4 bg-amber-50 dark:bg-amber-900/30 rounded-lg border border-amber-200 dark:border-amber-700"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-amber-100 dark:bg-amber-800 rounded-full flex items-center justify-center">
                      <Home className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        Door-to-Door Service
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Tutors come to your preferred location
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-4 p-4 bg-amber-50 dark:bg-amber-900/30 rounded-lg border border-amber-200 dark:border-amber-700"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-amber-100 dark:bg-amber-800 rounded-full flex items-center justify-center">
                      <Globe className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        Online Sessions
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Learn from anywhere in the world
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-4 p-4 bg-amber-50 dark:bg-amber-900/30 rounded-lg border border-amber-200 dark:border-amber-700"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-amber-100 dark:bg-amber-800 rounded-full flex items-center justify-center">
                      <BookOpen className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        Multiple Languages
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        English, Arabic, and Amharic support
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
            
            {/* Background decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-200 dark:bg-amber-800 rounded-full opacity-50 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-amber-300 dark:bg-amber-700 rounded-full opacity-30 blur-xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}