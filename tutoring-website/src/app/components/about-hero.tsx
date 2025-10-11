// components/about-hero.tsx
"use client"

import { useLanguage } from '@/app/contexts/language-context'
import { motion } from 'framer-motion'
import { Target, Users, Award, Globe } from 'lucide-react'

export default function AboutHero() {
  const { translations } = useLanguage()

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-600">TutorConnect</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We are revolutionizing the tutoring industry by connecting students with expert tutors 
            through both door-to-door and online services. Our mission is to make quality education 
            accessible in English, Arabic, and Amharic.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Target, title: "Our Mission", desc: "Make quality education accessible to everyone" },
            { icon: Users, title: "Our Community", desc: "500+ tutors and 2000+ students" },
            { icon: Award, title: "Quality", desc: "98% student satisfaction rate" },
            { icon: Globe, title: "Global Reach", desc: "Serving multiple languages worldwide" }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-amber-200 dark:border-amber-700"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mb-4">
                <item.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}