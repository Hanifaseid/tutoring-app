// components/process-steps.tsx
"use client"

import { motion } from 'framer-motion'
import { UserPlus, Search, Calendar, Video, Star, Award } from 'lucide-react'

const steps = [
  {
    icon: UserPlus,
    title: "Create Account",
    description: "Sign up as a student or tutor in just 2 minutes",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Search,
    title: "Find Match",
    description: "Browse tutors or students based on subjects, languages, and availability",
    color: "from-green-500 to-green-600"
  },
  {
    icon: Calendar,
    title: "Schedule Session",
    description: "Choose between door-to-door or online sessions at your convenience",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: Video,
    title: "Start Learning",
    description: "Begin your educational journey with expert guidance",
    color: "from-amber-500 to-amber-600"
  },
  {
    icon: Star,
    title: "Rate & Review",
    description: "Share your experience and help others make informed choices",
    color: "from-pink-500 to-pink-600"
  },
  {
    icon: Award,
    title: "Track Progress",
    description: "Monitor your learning journey and celebrate achievements",
    color: "from-indigo-500 to-indigo-600"
  }
]

export default function ProcessSteps() {
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
            Simple 6-Step Process
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From registration to results, follow these easy steps to start your tutoring journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-gray-800 dark:to-amber-900/30 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-amber-200 dark:border-amber-700">
                {/* Step Number */}
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
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
              
              {/* Connector lines for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-amber-300 dark:bg-amber-600 transform -translate-y-1/2"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}