// components/price-comparison.tsx
"use client"

import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'

export default function PriceComparison() {
  const competitors = [
    {
      name: "Other Tutoring Platforms",
      features: {
        doorToDoor: false,
        online: true,
        multilingual: false,
        flexibleScheduling: "Limited",
        tutorScreening: "Basic",
        satisfactionGuarantee: false,
        price: "$30-60/hr"
      }
    },
    {
      name: "Private Tutors",
      features: {
        doorToDoor: true,
        online: "Sometimes",
        multilingual: "Varies",
        flexibleScheduling: "Varies",
        tutorScreening: "Self-managed",
        satisfactionGuarantee: false,
        price: "$40-80/hr"
      }
    },
    {
      name: "TutorConnect",
      features: {
        doorToDoor: true,
        online: true,
        multilingual: true,
        flexibleScheduling: "24/7 Available",
        tutorScreening: "Rigorous Verification",
        satisfactionGuarantee: true,
        price: "$25-50/hr"
      }
    }
  ]

  const features = [
    { key: 'doorToDoor', label: 'Door-to-Door Service' },
    { key: 'online', label: 'Online Sessions' },
    { key: 'multilingual', label: 'Multilingual Support (EN/AR/AM)' },
    { key: 'flexibleScheduling', label: 'Flexible Scheduling' },
    { key: 'tutorScreening', label: 'Professional Tutor Screening' },
    { key: 'satisfactionGuarantee', label: 'Satisfaction Guarantee' },
    { key: 'price', label: 'Starting Price' }
  ]

  const renderFeatureValue = (value: any) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className="h-5 w-5 text-green-500" />
      ) : (
        <X className="h-5 w-5 text-red-500" />
      )
    }
    return <span className="text-gray-700 dark:text-gray-300 font-medium">{value}</span>
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Compare Our Value
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            See how TutorConnect stacks up against other tutoring options
          </p>
        </motion.div>

        <div className="overflow-x-auto">
          <div className="min-w-full inline-block align-middle">
            <div className="overflow-hidden shadow-2xl rounded-2xl border border-gray-200 dark:border-gray-700">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead>
                  <tr className="bg-gradient-to-r from-amber-500 to-amber-600">
                    <th className="px-6 py-8 text-left text-lg font-semibold text-white rounded-tl-2xl">
                      Features
                    </th>
                    {competitors.map((competitor, index) => (
                      <th
                        key={competitor.name}
                        className={`px-6 py-8 text-center text-lg font-semibold text-white ${
                          index === competitors.length - 1 ? 'rounded-tr-2xl' : ''
                        } ${
                          competitor.name === 'TutorConnect'
                            ? 'bg-gradient-to-b from-amber-600 to-amber-700'
                            : ''
                        }`}
                      >
                        {competitor.name}
                        {competitor.name === 'TutorConnect' && (
                          <div className="mt-2">
                            <span className="inline-block bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                              Best Value
                            </span>
                          </div>
                        )}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-800">
                  {features.map((feature, featureIndex) => (
                    <tr
                      key={feature.key}
                      className={featureIndex % 2 === 0 ? 'bg-gray-50 dark:bg-gray-750' : ''}
                    >
                      <td className="px-6 py-6 whitespace-nowrap text-sm font-semibold text-gray-900 dark:text-white border-r border-gray-200 dark:border-gray-700">
                        {feature.label}
                      </td>
                      {competitors.map((competitor) => (
                        <td
                          key={`${competitor.name}-${feature.key}`}
                          className="px-6 py-6 whitespace-nowrap text-sm text-center border-r border-gray-200 dark:border-gray-700 last:border-r-0"
                        >
                          {renderFeatureValue(competitor.features[feature.key as keyof typeof competitor.features])}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Get the best of both worlds with TutorConnect - all the convenience at a better price
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl font-semibold hover:from-amber-600 hover:to-amber-700 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Choose TutorConnect
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}