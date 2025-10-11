// components/how-it-works-hero.tsx
"use client"

import { motion } from 'framer-motion'
import { Play, Download, Users } from 'lucide-react'

export default function HowItWorksHero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              How It <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-600">Works</span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Getting started with TutorConnect is simple. Whether you're a student looking for help 
              or a tutor ready to share knowledge, our platform makes the process seamless and efficient.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl hover:from-amber-600 hover:to-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-amber-700 dark:text-amber-300 border-2 border-amber-300 dark:border-amber-600 rounded-xl hover:bg-amber-50 dark:hover:bg-amber-900/50 transition-all duration-300"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Guide
              </motion.button>
            </div>

            <div className="flex items-center space-x-6 pt-8">
              <div className="flex items-center space-x-2">
                <Users className="h-6 w-6 text-amber-600" />
                <span className="text-gray-600 dark:text-gray-300">500+ Active Tutors</span>
              </div>
              <div className="w-px h-6 bg-gray-300 dark:bg-gray-600"></div>
              <div className="text-gray-600 dark:text-gray-300">24/7 Support Available</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl p-8 shadow-2xl">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Play className="h-8 w-8 text-white ml-1" />
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 font-medium">
                      Platform Overview Video
                    </p>
                  </div>
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