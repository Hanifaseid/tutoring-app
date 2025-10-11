// components/contact-hero.tsx
"use client"

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function ContactHero() {
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
              Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-600">Touch</span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Have questions about our tutoring services? We're here to help! Reach out to us and 
              we'll get back to you within 24 hours.
            </p>

            <div className="space-y-4">
              {[
                {
                  icon: Mail,
                  label: "Email Us",
                  value: "hello@tutorconnect.com",
                  href: "mailto:hello@tutorconnect.com"
                },
                {
                  icon: Phone,
                  label: "Call Us",
                  value: "+1 (555) 123-4567",
                  href: "tel:+15551234567"
                },
                {
                  icon: MapPin,
                  label: "Visit Us",
                  value: "123 Education Street, Learning City",
                  href: "#"
                }
              ].map((contact, index) => (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                  className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900 rounded-xl flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition-colors duration-200">
                    <contact.icon className="h-6 w-6 text-amber-600 group-hover:text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {contact.label}
                    </div>
                    <div className="text-gray-600 dark:text-gray-300">
                      {contact.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl p-8 shadow-2xl">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Mail className="h-8 w-8 text-white" />
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 font-medium">
                      Contact Form Available
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      Fill out the form to get started
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}