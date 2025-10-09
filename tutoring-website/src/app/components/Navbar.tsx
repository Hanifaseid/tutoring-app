// app/components/Navbar.tsx
'use client';

import Link from 'next/link';
import { useTheme } from './ThemeProvider';
import { useLanguage } from './LanguageProvider';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t, direction } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: t('nav.home') },
    { href: '/about', label: t('nav.about') },
    { href: '/how-it-works', label: t('nav.howItWorks') },
    { href: '/for-tutors', label: t('nav.forTutors') },
    { href: '/pricing', label: t('nav.pricing') },
    { href: '/contact', label: t('nav.contact') },
  ];

  const languageOptions = [
    { code: 'en' as const, label: 'EN', name: t('languages.english') },
    { code: 'ar' as const, label: 'AR', name: t('languages.arabic') },
    { code: 'am' as const, label: 'AM', name: t('languages.amharic') },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg border-b border-brown-200/20 dark:border-brown-800/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex-shrink-0"
            >
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-brown-600 to-brown-800 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">TP</span>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-brown-700 to-brown-900 dark:from-brown-300 dark:to-brown-100 bg-clip-text text-transparent">
                  TutorPro
                </span>
              </Link>
            </motion.div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="relative px-4 py-2 text-brown-600 dark:text-brown-300 hover:text-brown-900 dark:hover:text-white transition-colors group"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brown-600 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Right side items */}
            <div className="flex items-center space-x-3">
              {/* Language Selector */}
              <motion.div 
                className="relative group"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center space-x-1 bg-brown-50 dark:bg-brown-900/50 rounded-lg p-1">
                  {languageOptions.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => setLanguage(lang.code)}
                      className={`px-3 py-1 text-sm rounded-md transition-all duration-200 ${
                        language === lang.code
                          ? 'bg-white dark:bg-brown-800 text-brown-700 dark:text-white shadow-sm'
                          : 'text-brown-600 dark:text-brown-300 hover:bg-white/50 dark:hover:bg-brown-800/50'
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Theme Toggle */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-brown-50 dark:bg-brown-900/50 text-brown-600 dark:text-brown-300 hover:bg-brown-100 dark:hover:bg-brown-800 transition-colors"
              >
                {theme === 'light' ? (
                  <span className="w-5 h-5">🌙</span>
                ) : (
                  <span className="w-5 h-5">☀️</span>
                )}
              </motion.button>

              {/* Auth Buttons */}
              <div className="hidden md:flex items-center space-x-2">
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Link
                    href="/login"
                    className="px-4 py-2 text-brown-600 dark:text-brown-300 hover:text-brown-900 dark:hover:text-white font-medium transition-colors"
                  >
                    {t('nav.login')}
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/signup"
                    className="bg-gradient-to-r from-brown-600 to-brown-800 hover:from-brown-700 hover:to-brown-900 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    {t('nav.signup')}
                  </Link>
                </motion.div>
              </div>

              {/* Mobile Menu Button */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-lg bg-brown-50 dark:bg-brown-900/50 text-brown-600 dark:text-brown-300"
              >
                <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                  <span className={`block h-0.5 w-6 bg-current transition-transform ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                  <span className={`block h-0.5 w-6 bg-current transition-opacity ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                  <span className={`block h-0.5 w-6 bg-current transition-transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                </div>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-16 left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-brown-200/20 dark:border-brown-800/20 md:hidden"
          >
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-3 text-brown-600 dark:text-brown-300 hover:text-brown-900 dark:hover:text-white hover:bg-brown-50 dark:hover:bg-brown-800/50 rounded-lg transition-colors"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-4 border-t border-brown-200/20 dark:border-brown-800/20">
                <Link
                  href="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 text-brown-600 dark:text-brown-300 hover:text-brown-900 dark:hover:text-white hover:bg-brown-50 dark:hover:bg-brown-800/50 rounded-lg transition-colors mb-2"
                >
                  {t('nav.login')}
                </Link>
                <Link
                  href="/signup"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 bg-gradient-to-r from-brown-600 to-brown-800 text-white text-center rounded-lg font-medium transition-all duration-300"
                >
                  {t('nav.signup')}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}