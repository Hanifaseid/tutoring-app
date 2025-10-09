'use client';

import Link from 'next/link';
import { useLanguage } from './LanguageProvider';
import { motion, Variants } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Hero() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: '🏠',
      title: 'Door-to-Door Service',
      description: 'Professional tutors come to your location for personalized sessions'
    },
    {
      icon: '💻',
      title: 'Online Sessions',
      description: 'Learn from anywhere with our interactive online platform'
    },
    {
      icon: '🌍',
      title: 'Multi-Language',
      description: 'Available in English, Arabic, and Amharic for diverse learning needs'
    },
    {
      icon: '⏰',
      title: 'Flexible Scheduling',
      description: 'Book sessions at your convenience with 24/7 availability'
    }
  ];

  const languageFlags = {
    en: '🇺🇸',
    ar: '🇸🇦', 
    am: '🇪🇹'
  };

  // ✅ Typed variants to fix TypeScript error
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" // ✅ valid and properly typed
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-brown-50 to-brown-100 dark:from-gray-900 dark:via-brown-900 dark:to-brown-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brown-200/20 via-transparent to-transparent dark:from-brown-600/10"></div>
      </div>

      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-brown-200/30 dark:bg-brown-600/20"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{
              y: [null, -50, 50, -30],
              x: [null, 30, -30, 20],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10"
      >
        {/* Main Title */}
        <motion.div variants={itemVariants} className="mb-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-brown-700 via-brown-600 to-brown-800 dark:from-brown-300 dark:via-brown-200 dark:to-brown-100 bg-clip-text text-transparent">
              {t('hero.title')}
            </span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.div variants={itemVariants} className="mb-12">
          <p className="text-xl md:text-2xl lg:text-3xl text-brown-600 dark:text-brown-300 max-w-4xl mx-auto leading-relaxed font-light">
            {t('hero.subtitle')}
          </p>
        </motion.div>

        {/* Language Display */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="flex justify-center space-x-8 md:space-x-12">
            {Object.entries(languageFlags).map(([code, flag]) => (
              <motion.div
                key={code}
                className="text-center group cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-20 h-20 md:w-24 md:h-24 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl flex items-center justify-center text-2xl md:text-3xl mb-3 mx-auto shadow-lg hover:shadow-xl transition-all duration-300 border border-brown-200/20 dark:border-brown-700/30">
                  {flag}
                </div>
                <span className="text-brown-800 dark:text-brown-200 font-medium text-sm md:text-base">
                  {t(`languages.${code === 'en' ? 'english' : code === 'ar' ? 'arabic' : 'amharic'}`)}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="mb-20">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/signup"
                className="group relative bg-gradient-to-r from-brown-600 to-brown-800 hover:from-brown-700 hover:to-brown-900 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-2xl hover:shadow-3xl overflow-hidden"
              >
                <span className="relative z-10">{t('hero.cta')}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-brown-700 to-brown-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/how-it-works"
                className="group border-2 border-brown-600 dark:border-brown-400 text-brown-600 dark:text-brown-300 hover:bg-brown-600 hover:text-white dark:hover:bg-brown-400 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 backdrop-blur-sm"
              >
                <span className="relative">
                  Learn More
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brown-600 dark:bg-brown-400 transition-all duration-300 group-hover:w-full"></span>
                </span>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div variants={itemVariants}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 + 0.8 }}
                whileHover={{ 
                  scale: 1.05,
                  y: -5
                }}
                className="group relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-brown-200/30 dark:border-brown-700/30"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brown-50 to-transparent dark:from-brown-900/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-brown-500 to-brown-700 rounded-xl flex items-center justify-center text-white text-2xl mb-4 mx-auto shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-brown-900 dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-brown-600 dark:text-brown-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-brown-600 dark:border-brown-400 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-brown-600 dark:bg-brown-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
