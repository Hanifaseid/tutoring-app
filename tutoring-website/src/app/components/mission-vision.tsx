// components/mission-vision.tsx
"use client"

import { motion } from 'framer-motion'
import { Eye, Target, Heart } from 'lucide-react'

export default function MissionVision() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-8">
              Our Story & Values
            </h2>
            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                TutorConnect was founded with a simple yet powerful vision: to bridge the gap between 
                students seeking knowledge and tutors sharing expertise. We believe that learning 
                should be personalized, accessible, and transformative.
              </p>
              <p>
                Our platform brings together the convenience of modern technology with the personal 
                touch of traditional tutoring. Whether it's door-to-door service for that personal 
                connection or online sessions for ultimate flexibility, we've got you covered.
              </p>
              <p>
                We support multiple languages because we believe education should transcend 
                language barriers. Our tutors are not just teachers; they're mentors who inspire 
                and empower.
              </p>
            </div>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                icon: Target,
                title: "Our Mission",
                description: "To make quality education accessible to every student, regardless of location or language, through innovative tutoring solutions.",
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: Eye,
                title: "Our Vision",
                description: "A world where every learner has access to personalized education and every educator can share their knowledge effectively.",
                color: "from-green-500 to-green-600"
              },
              {
                icon: Heart,
                title: "Our Values",
                description: "Excellence, accessibility, innovation, and community. We're committed to transforming education through technology and human connection.",
                color: "from-red-500 to-red-600"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-gray-800 dark:to-amber-900/30 rounded-2xl p-6 border border-amber-200 dark:border-amber-700"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mb-4`}>
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}