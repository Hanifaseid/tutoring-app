// components/pricing-plans.tsx
"use client"

import { motion } from 'framer-motion'
import { Check, Clock, Users, Globe, Video, Award } from 'lucide-react'

const plans = [
  {
    name: "Basic",
    description: "Perfect for occasional learning",
    price: "$25",
    period: "per session",
    type: "student",
    features: [
      "1-hour tutoring sessions",
      "All subjects available",
      "English, Arabic, Amharic",
      "Door-to-door or online",
      "Basic support"
    ]
  },
  {
    name: "Standard",
    description: "Great for regular learning",
    price: "$180",
    period: "8 sessions package",
    type: "student",
    popular: true,
    features: [
      "8 one-hour sessions",
      "All subjects available",
      "All languages included",
      "Preferred tutor matching",
      "Session recordings",
      "Priority scheduling",
      "Standard support"
    ]
  },
  {
    name: "Premium",
    description: "Best for intensive learning",
    price: "$299",
    period: "monthly unlimited",
    type: "student",
    features: [
      "Unlimited sessions",
      "All subjects & languages",
      "Premium tutors only",
      "Custom learning plans",
      "Progress tracking",
      "24/7 priority support",
      "Exam preparation"
    ]
  },
  {
    name: "Tutor Basic",
    description: "Start your tutoring journey",
    price: "80%",
    commission: "of session fee",
    type: "tutor",
    features: [
      "Student matching",
      "Flexible scheduling",
      "Basic profile listing",
      "Payment processing",
      "Platform support"
    ]
  },
  {
    name: "Tutor Pro",
    description: "Maximize your earnings",
    price: "85%",
    commission: "of session fee",
    type: "tutor",
    popular: true,
    features: [
      "Higher commission rate",
      "Featured profile",
      "Priority student matching",
      "Advanced scheduling",
      "Performance analytics",
      "Dedicated support"
    ]
  },
  {
    name: "Tutor Elite",
    description: "Top-tier tutoring experience",
    price: "90%",
    commission: "of session fee",
    type: "tutor",
    features: [
      "Highest commission",
      "Premium profile placement",
      "Exclusive student leads",
      "Custom availability",
      "Advanced analytics",
      "24/7 dedicated support",
      "Professional development"
    ]
  }
]

export default function PricingPlans() {
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
            Complete Pricing Plans
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Whether you're a student looking to learn or a tutor ready to teach, we have the perfect plan for you
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={`${plan.type}-${plan.name}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`relative bg-gradient-to-br from-amber-50 to-amber-100 dark:from-gray-800 dark:to-amber-900/30 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border ${
                plan.popular 
                  ? 'border-amber-500 ring-2 ring-amber-500' 
                  : 'border-amber-200 dark:border-amber-700'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    POPULAR
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <div className={`inline-flex px-3 py-1 rounded-full text-sm font-semibold mb-3 ${
                  plan.type === 'student' 
                    ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                    : 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
                }`}>
                  {plan.type === 'student' ? 'FOR STUDENTS' : 'FOR TUTORS'}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {plan.description}
                </p>
              </div>

              <div className="text-center mb-6">
                <span className="text-3xl font-bold text-amber-600 dark:text-amber-400">
                  {plan.price}
                </span>
                {plan.commission && (
                  <span className="text-amber-600 dark:text-amber-400 font-semibold">
                    {plan.commission}
                  </span>
                )}
                <div className="text-gray-600 dark:text-gray-300 text-sm">
                  {plan.period}
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300 text-sm">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 rounded-xl font-semibold transition-all duration-200 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:from-amber-600 hover:to-amber-700'
                    : 'bg-white dark:bg-gray-700 text-amber-700 dark:text-amber-300 hover:bg-amber-50 dark:hover:bg-amber-900/50 border border-amber-300 dark:border-amber-600'
                }`}
              >
                {plan.type === 'student' ? 'Choose Plan' : 'Apply Now'}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}