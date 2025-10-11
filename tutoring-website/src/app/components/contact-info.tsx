// components/contact-info.tsx
"use client"

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react'

export default function ContactInfo() {
  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our support team",
      details: "+1 (555) 123-4567",
      link: "tel:+15551234567",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us an email anytime",
      details: "hello@tutorconnect.com",
      link: "mailto:hello@tutorconnect.com",
      color: "from-green-500 to-green-600"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Instant messaging support",
      details: "Available 24/7",
      link: "#chat",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Stop by our office",
      details: "123 Education Street, Learning City",
      link: "#map",
      color: "from-amber-500 to-amber-600"
    }
  ]

  const supportHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 10:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 8:00 PM" },
    { day: "Sunday", hours: "10:00 AM - 6:00 PM" },
    { day: "Emergency Support", hours: "24/7 Available" }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-8"
    >
      <div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Get in Touch
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          We're here to help you with any questions about our tutoring services. 
          Choose the most convenient way to reach out to our team.
        </p>
      </div>

      {/* Contact Methods */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {contactMethods.map((method, index) => (
          <motion.a
            key={method.title}
            href={method.link}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="block p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 group"
          >
            <div className={`w-12 h-12 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
              <method.icon className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {method.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-3">
              {method.description}
            </p>
            <p className="text-amber-600 dark:text-amber-400 font-semibold">
              {method.details}
            </p>
          </motion.a>
        ))}
      </div>

      {/* Support Hours */}
      <div className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-gray-800 dark:to-amber-900/30 rounded-2xl p-6 border border-amber-200 dark:border-amber-700">
        <div className="flex items-center space-x-3 mb-4">
          <Clock className="h-6 w-6 text-amber-600 dark:text-amber-400" />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Support Hours
          </h3>
        </div>
        <div className="space-y-3">
          {supportHours.map((schedule, index) => (
            <div
              key={schedule.day}
              className="flex justify-between items-center py-2 border-b border-amber-200 dark:border-amber-700 last:border-b-0"
            >
              <span className={`font-medium ${
                schedule.day === "Emergency Support" 
                  ? "text-red-600 dark:text-red-400" 
                  : "text-gray-700 dark:text-gray-300"
              }`}>
                {schedule.day}
              </span>
              <span className={`font-semibold ${
                schedule.day === "Emergency Support"
                  ? "text-red-600 dark:text-red-400"
                  : "text-amber-600 dark:text-amber-400"
              }`}>
                {schedule.hours}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Info */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
          Need Immediate Assistance?
        </h4>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
          For urgent matters regarding ongoing tutoring sessions or technical issues, 
          our emergency support line is available 24/7. We typically respond to emails 
          within 2 hours during business days.
        </p>
        <div className="flex items-center space-x-2 text-sm text-amber-600 dark:text-amber-400">
          <Phone className="h-4 w-4" />
          <span className="font-semibold">Emergency Line: +1 (555) 123-EMER</span>
        </div>
      </div>
    </motion.div>
  )
}