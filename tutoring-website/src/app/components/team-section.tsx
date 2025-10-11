// components/team-section.tsx
"use client"

import { motion } from 'framer-motion'
import { Linkedin, Twitter, Mail } from 'lucide-react'

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Founder & CEO",
    image: "/api/placeholder/400/400",
    description: "Education enthusiast with 10+ years in ed-tech",
    social: { linkedin: "#", twitter: "#", email: "#" }
  },
  {
    name: "Ahmed Hassan",
    role: "CTO",
    image: "/api/placeholder/400/400",
    description: "Tech innovator passionate about educational technology",
    social: { linkedin: "#", twitter: "#", email: "#" }
  },
  {
    name: "Meron Tekle",
    role: "Head of Operations",
    image: "/api/placeholder/400/400",
    description: "Operations expert with background in educational management",
    social: { linkedin: "#", twitter: "#", email: "#" }
  },
  {
    name: "David Chen",
    role: "Product Lead",
    image: "/api/placeholder/400/400",
    description: "Product strategist focused on user experience",
    social: { linkedin: "#", twitter: "#", email: "#" }
  }
]

export default function TeamSection() {
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
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Passionate educators, technologists, and innovators working together to transform tutoring
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-gray-800 dark:to-amber-900/30 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-amber-200 dark:border-amber-700"
            >
              <div className="w-24 h-24 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                {member.name.split(' ').map(n => n[0]).join('')}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {member.name}
              </h3>
              <div className="text-amber-600 dark:text-amber-400 font-medium mb-3">
                {member.role}
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {member.description}
              </p>
              <div className="flex justify-center space-x-3">
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  href={member.social.linkedin}
                  className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-amber-100 dark:hover:bg-amber-800 transition-colors"
                >
                  <Linkedin size={16} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  href={member.social.twitter}
                  className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-amber-100 dark:hover:bg-amber-800 transition-colors"
                >
                  <Twitter size={16} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  href={`mailto:${member.social.email}`}
                  className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-amber-100 dark:hover:bg-amber-800 transition-colors"
                >
                  <Mail size={16} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}