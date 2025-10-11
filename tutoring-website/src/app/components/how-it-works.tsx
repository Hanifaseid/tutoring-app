// components/how-it-works.tsx
"use client"

import { useLanguage } from '@/app/contexts/language-context'
import { motion } from 'framer-motion'
import { Play, Download, Users, Clock, Star, Award } from 'lucide-react'

export default function HowItWorks() {
  const { translations } = useLanguage()

  const steps = [
    {
      icon: Users,
      title: translations.howItWorks?.steps?.createAccount || "Create Account",
      description: translations.howItWorks?.steps?.createAccountDesc || "Sign up as a student or tutor in just 2 minutes",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Play,
      title: translations.howItWorks?.steps?.findMatch || "Find Match",
      description: translations.howItWorks?.steps?.findMatchDesc || "Browse tutors or students based on subjects, languages, and availability",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Clock,
      title: translations.howItWorks?.steps?.schedule || "Schedule Session",
      description: translations.howItWorks?.steps?.scheduleDesc || "Choose between door-to-door or online sessions at your convenience",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Award,
      title: translations.howItWorks?.steps?.startLearning || "Start Learning",
      description: translations.howItWorks?.steps?.startLearningDesc || "Begin your educational journey with expert guidance",
      color: "from-amber-500 to-amber-600"
    }
  ]

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {translations.howItWorks?.title || "How It Works"}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {translations.howItWorks?.subtitle || "Getting started with TutorConnect is simple and straightforward"}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-gray-800 dark:to-amber-900/30 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-amber-200 dark:border-amber-700 text-center">
                {/* Step Number */}
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-amber-100 mb-6 max-w-2xl mx-auto">
              Join thousands of students and tutors who are already transforming their learning and teaching experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-amber-600 px-6 py-3 rounded-xl font-semibold hover:bg-amber-50 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Play className="h-5 w-5" />
                <span>Watch Demo</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:bg-opacity-10 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Download className="h-5 w-5" />
                <span>Download Guide</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}