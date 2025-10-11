// components/stats.tsx
"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

// Define props interface for StatCard component
interface StatCardProps {
  number: number
  label: string
  suffix?: string
  delay?: number
}

const StatCard = ({ number, label, suffix = "+", delay = 0 }: StatCardProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
      className="text-center"
    >
      <motion.div
        animate={isInView ? { scale: [1, 1.1, 1] } : { scale: 1 }}
        transition={{ duration: 0.6, delay: delay + 0.3 }}
        className="text-5xl lg:text-6xl font-bold text-amber-600 dark:text-amber-400 mb-2"
      >
        {isInView ? number : 0}{suffix}
      </motion.div>
      <div className="text-gray-600 dark:text-gray-300 font-medium">{label}</div>
    </motion.div>
  )
}

export default function Stats() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-500 to-amber-600">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <StatCard number={500} label="Expert Tutors" delay={0} />
          <StatCard number={2000} label="Happy Students" delay={0.1} />
          <StatCard number={98} label="Success Rate" suffix="%" delay={0.2} />
          <StatCard number={3} label="Languages" delay={0.3} />
        </div>
      </div>
    </section>
  )
}