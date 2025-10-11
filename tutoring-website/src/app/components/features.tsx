// components/features.tsx
"use client"

import { useLanguage } from '@/app/contexts/language-context'
import { motion } from 'framer-motion'
import { Home, Globe, Languages, Clock, Users, Award } from 'lucide-react'

export default function Features() {
  const { translations } = useLanguage()

  const features = [
    {
      icon: Home,
      title: translations.features?.doorToDoor || 'Door-to-Door Service',
      description: translations.features?.doorToDoorDesc || 'Professional tutors come to your location',
      color: 'from-amber-500 to-amber-600'
    },
    {
      icon: Globe,
      title: translations.features?.online || 'Online Sessions',
      description: translations.features?.onlineDesc || 'Learn from anywhere with virtual classes',
      color: 'from-amber-500 to-amber-600'
    },
    {
      icon: Languages,
      title: translations.features?.multilingual || 'Multilingual Support',
      description: translations.features?.multilingualDesc || 'Available in English, Arabic, and Amharic',
      color: 'from-amber-500 to-amber-600'
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      description: 'Book sessions at your convenience, 24/7 availability',
      color: 'from-amber-500 to-amber-600'
    },
    {
      icon: Users,
      title: 'Expert Tutors',
      description: 'Verified professionals with proven teaching experience',
      color: 'from-amber-500 to-amber-600'
    },
    {
      icon: Award,
      title: 'Quality Guaranteed',
      description: 'Money-back guarantee if not satisfied with the service',
      color: 'from-amber-500 to-amber-600'
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {translations.features?.title || 'Why Choose Us'}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Experience the future of tutoring with our comprehensive services designed to meet all your learning needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="group relative bg-gradient-to-br from-amber-50 to-amber-100 dark:from-gray-800 dark:to-amber-900/30 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-amber-200 dark:border-amber-700"
            >
              <div className="relative z-10">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
              
              {/* Hover effect background */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}