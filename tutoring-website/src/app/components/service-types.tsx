// components/service-types.tsx
"use client"

import { motion } from 'framer-motion'
import { Home, Globe, Users, Clock, Shield, Award } from 'lucide-react'

const services = [
  {
    type: "Door-to-Door",
    icon: Home,
    description: "Personalized in-home tutoring sessions",
    features: ["Face-to-face interaction", "Personalized attention", "No travel for students", "Home environment comfort"],
    price: "Starting at $25/hr",
    color: "from-amber-500 to-amber-600"
  },
  {
    type: "Online Sessions",
    icon: Globe,
    description: "Virtual tutoring from anywhere in the world",
    features: ["Global tutor access", "Flexible scheduling", "Recorded sessions", "Interactive whiteboard"],
    price: "Starting at $20/hr",
    color: "from-blue-500 to-blue-600"
  }
]

const benefits = [
  { icon: Users, text: "Verified Expert Tutors" },
  { icon: Clock, text: "24/7 Scheduling" },
  { icon: Shield, text: "Safe & Secure" },
  { icon: Award, text: "Quality Guaranteed" }
]

export default function ServiceTypes() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 to-amber-100 dark:from-gray-800 dark:to-amber-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Choose Your Service Type
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Select the tutoring format that works best for your learning style and schedule
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.type}
              initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-amber-200 dark:border-amber-700"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                <service.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {service.type}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {service.description}
              </p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Features:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                      <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-amber-600 dark:text-amber-400">
                  {service.price}
                </span>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg font-semibold hover:from-amber-600 hover:to-amber-700 transition-all duration-200"
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Benefits for Both Services
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <benefit.icon className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                </div>
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  {benefit.text}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}