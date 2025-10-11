// components/faq.tsx
"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

// Define types for our FAQ data
interface FAQ {
  question: string
  answer: string
}

// Define props interface for FAQItem component
interface FAQItemProps {
  faq: FAQ
  index: number
  isOpen: boolean
  toggle: (index: number) => void
}

const faqs: FAQ[] = [
  {
    question: "How do I choose between door-to-door and online tutoring?",
    answer: "Consider your learning preferences, schedule flexibility, and location. Door-to-door offers personal interaction, while online provides more flexibility and access to global tutors."
  },
  {
    question: "What subjects and languages do you support?",
    answer: "We support all major academic subjects and three languages: English, Arabic, and Amharic. Our tutors cover everything from mathematics to language arts."
  },
  {
    question: "How are tutors verified and qualified?",
    answer: "All tutors undergo a rigorous verification process including background checks, qualification verification, and teaching demonstration assessments."
  },
  {
    question: "Can I switch between service types?",
    answer: "Yes, you can easily switch between door-to-door and online sessions based on your current needs and schedule."
  },
  {
    question: "What if I'm not satisfied with a tutoring session?",
    answer: "We offer a satisfaction guarantee. If you're not happy with a session, we'll provide a free replacement session or full refund."
  },
  {
    question: "How do payments work?",
    answer: "Payments are processed securely through our platform. You can pay per session or purchase packages for better rates. All major payment methods are accepted."
  }
]

const FAQItem = ({ faq, index, isOpen, toggle }: FAQItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="border border-amber-200 dark:border-amber-700 rounded-2xl overflow-hidden"
    >
      <button
        onClick={() => toggle(index)}
        className="w-full px-6 py-4 text-left bg-white dark:bg-gray-800 hover:bg-amber-50 dark:hover:bg-amber-900/30 transition-colors duration-200 flex items-center justify-between"
      >
        <span className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          {isOpen ? (
            <ChevronUp className="h-5 w-5 text-amber-600" />
          ) : (
            <ChevronDown className="h-5 w-5 text-amber-600" />
          )}
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-amber-50 dark:bg-amber-900/20"
          >
            <div className="px-6 py-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Get answers to common questions about our tutoring services
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              index={index}
              isOpen={openIndex === index}
              toggle={toggleFAQ}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Still have questions? We're here to help!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl font-semibold hover:from-amber-600 hover:to-amber-700 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Contact Support
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}