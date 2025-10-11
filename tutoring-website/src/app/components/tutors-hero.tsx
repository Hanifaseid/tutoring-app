// components/tutors-hero.tsx
"use client"

import { motion } from 'framer-motion'
import { Star, Users, DollarSign, Clock } from 'lucide-react'

export default function TutorsHero() {
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
              Become a <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-600">Tutor</span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Join our platform of expert educators and share your knowledge with students worldwide. 
              Enjoy flexible scheduling, competitive earnings, and the satisfaction of making a difference.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              {[
                { icon: DollarSign, value: "$30-50/hr", label: "Competitive Rates" },
                { icon: Users, value: "2000+", label: "Active Students" },
                { icon: Clock, value: "Flexible", label: "Schedule" },
                { icon: Star, value: "4.9/5", label: "Rating" }
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900 rounded-xl flex items-center justify-center mx-auto mb-2">
                    <item.icon className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{item.value}</div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm">{item.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl hover:from-amber-600 hover:to-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Apply Now
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-amber-700 dark:text-amber-300 border-2 border-amber-300 dark:border-amber-600 rounded-xl hover:bg-amber-50 dark:hover:bg-amber-900/50 transition-all duration-300"
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl p-8 shadow-2xl">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Tutor Application
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Start your journey in 3 easy steps
                  </p>
                </div>
                
                <div className="space-y-4">
                  {[
                    { step: "1", title: "Complete Profile", desc: "Share your expertise and qualifications" },
                    { step: "2", title: "Verification", desc: "Background check and demo session" },
                    { step: "3", title: "Start Teaching", desc: "Connect with students and earn" }
                  ].map((item, index) => (
                    <div key={item.step} className="flex items-center space-x-4 p-4 bg-amber-50 dark:bg-amber-900/30 rounded-lg">
                      <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {item.step}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">{item.title}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}