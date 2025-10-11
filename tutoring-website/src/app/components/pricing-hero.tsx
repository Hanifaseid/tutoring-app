// components/pricing-hero.tsx
"use client"

import { motion } from 'framer-motion'
import { Check, X, Star } from 'lucide-react'

export default function PricingHero() {
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
            Simple, Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-600">Pricing</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Choose the perfect plan for your learning needs. All plans include access to our expert tutors 
            in multiple languages with both door-to-door and online options.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              title: "Pay As You Go",
              price: "$25",
              period: "per session",
              features: ["1-hour sessions", "Any subject", "All languages", "24/7 booking"],
              limitations: ["No discounts", "Limited tutor choice"]
            },
            {
              title: "Package Deal",
              price: "$180",
              period: "for 8 sessions",
              savings: "Save $20",
              popular: true,
              features: ["8 one-hour sessions", "Preferred tutors", "All languages", "Priority scheduling", "Session recordings"],
              limitations: ["Valid for 3 months"]
            },
            {
              title: "Monthly Unlimited",
              price: "$299",
              period: "per month",
              features: ["Unlimited sessions", "All premium tutors", "All languages", "24/7 priority support", "Progress tracking", "Custom learning plan"],
              limitations: ["3-month minimum"]
            }
          ].map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className={`relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border ${
                plan.popular 
                  ? 'border-amber-500 ring-2 ring-amber-500' 
                  : 'border-amber-200 dark:border-amber-700'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                    <Star className="h-4 w-4 mr-1 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-4">
                {plan.title}
              </h3>

              <div className="text-center mb-6">
                <span className="text-4xl lg:text-5xl font-bold text-amber-600 dark:text-amber-400">
                  {plan.price}
                </span>
                <span className="text-gray-600 dark:text-gray-300 block">
                  {plan.period}
                </span>
                {plan.savings && (
                  <span className="text-green-600 dark:text-green-400 text-sm font-semibold">
                    {plan.savings}
                  </span>
                )}
              </div>

              <div className="space-y-4 mb-8">
                <h4 className="font-semibold text-gray-900 dark:text-white">What's included:</h4>
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
                {plan.limitations.map((limitation, idx) => (
                  <div key={idx} className="flex items-center space-x-3 opacity-60">
                    <X className="h-5 w-5 text-red-500 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300 text-sm">{limitation}</span>
                  </div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 rounded-xl font-semibold transition-all duration-200 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:from-amber-600 hover:to-amber-700 shadow-lg'
                    : 'bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300 hover:bg-amber-200 dark:hover:bg-amber-800 border border-amber-300 dark:border-amber-600'
                }`}
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}