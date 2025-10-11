// components/navbar.tsx
"use client"

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useLanguage } from '@/app/contexts/language-context'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Moon, 
  Sun, 
  Menu, 
  X, 
  ChevronDown, 
  Home, 
  Info, 
  PlayCircle, 
  Users, 
  CreditCard, 
  Phone, 
  LogIn,
  UserPlus,
  Globe
} from 'lucide-react'

export default function Navbar() {
  const [mounted, setMounted] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const { language, setLanguage, translations } = useLanguage()
  const languageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (languageRef.current && !languageRef.current.contains(event.target as Node)) {
        setIsLanguageOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  if (!mounted) {
    return null
  }

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const languageOptions = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
    { code: 'am', name: 'አማርኛ', flag: '🇪🇹' }
  ]

  const currentLanguage = languageOptions.find(lang => lang.code === language)

  const navItems = [
    { 
      key: 'home', 
      href: '/', 
      icon: Home,
      description: 'Return to homepage'
    },
    { 
      key: 'about', 
      href: '/about', 
      icon: Info,
      description: 'Learn about our mission'
    },
    { 
      key: 'howItWorks', 
      href: '/how-it-works', 
      icon: PlayCircle,
      description: 'See how it works'
    },
    { 
      key: 'forTutors', 
      href: '/for-tutors', 
      icon: Users,
      description: 'Join as a tutor'
    },
    { 
      key: 'pricing', 
      href: '/pricing', 
      icon: CreditCard,
      description: 'View our plans'
    },
    { 
      key: 'contact', 
      href: '/contact', 
      icon: Phone,
      description: 'Get in touch'
    },
  ]

  const authItems = [
    {
      key: 'login',
      href: '/login',
      icon: LogIn,
      description: 'Access your account'
    },
    {
      key: 'signup',
      href: '/signup',
      icon: UserPlus,
      description: 'Create new account'
    }
  ]

  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-amber-200 dark:border-amber-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-8 h-8 bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg flex items-center justify-center shadow-lg"
            >
              <span className="text-white font-bold text-sm">TC</span>
            </motion.div>
            <motion.span 
              className="text-xl font-bold text-amber-800 dark:text-amber-200"
              whileHover={{ color: "#d97706" }}
              transition={{ duration: 0.2 }}
            >
              TutorConnect
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <NavItem 
                key={item.key}
                item={item}
                translations={translations}
                index={index}
              />
            ))}
          </div>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Language Selector */}
            <div ref={languageRef} className="relative">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300 hover:bg-amber-200 dark:hover:bg-amber-800 transition-all duration-200 border border-amber-200 dark:border-amber-700"
              >
                <Globe className="h-4 w-4" />
                <span className="font-medium">{currentLanguage?.flag} {currentLanguage?.name}</span>
                <motion.div
                  animate={{ rotate: isLanguageOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="h-4 w-4" />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {isLanguageOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-amber-200 dark:border-amber-700 overflow-hidden"
                  >
                    {languageOptions.map((lang) => (
                      <motion.button
                        key={lang.code}
                        whileHover={{ 
                          backgroundColor: language === lang.code ? '' : 'rgba(245, 158, 11, 0.1)'
                        }}
                        onClick={() => {
                          setLanguage(lang.code as any)
                          setIsLanguageOpen(false)
                        }}
                        className={`w-full px-4 py-3 text-left transition-all duration-200 flex items-center space-x-3 ${
                          language === lang.code
                            ? 'bg-amber-500 text-white'
                            : 'text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400'
                        }`}
                      >
                        <span className="text-lg">{lang.flag}</span>
                        <span className="font-medium">{lang.name}</span>
                        {language === lang.code && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-2 h-2 bg-white rounded-full ml-auto"
                          />
                        )}
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900 text-amber-600 dark:text-amber-400 hover:bg-amber-200 dark:hover:bg-amber-800 transition-colors duration-200 border border-amber-200 dark:border-amber-700"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>

            {/* Auth Buttons */}
            <div className="flex items-center space-x-2">
              {authItems.map((item, index) => (
                <AuthButton 
                  key={item.key}
                  item={item}
                  translations={translations}
                  index={index}
                  isSignup={item.key === 'signup'}
                />
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-amber-100 dark:bg-amber-900 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-700"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden absolute top-16 left-0 w-full bg-white dark:bg-gray-900 border-b border-amber-200 dark:border-amber-800 shadow-2xl overflow-hidden"
            >
              <div className="px-4 py-6 space-y-2">
                {/* Navigation Items */}
                {navItems.map((item, index) => (
                  <MobileNavItem
                    key={item.key}
                    item={item}
                    translations={translations}
                    index={index}
                    onClick={() => setIsMenuOpen(false)}
                  />
                ))}

                {/* Language Selector Mobile */}
                <div className="pt-4 border-t border-amber-200 dark:border-amber-800">
                  <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3 px-2">
                    Language
                  </h3>
                  <div className="grid grid-cols-3 gap-2">
                    {languageOptions.map((lang) => (
                      <motion.button
                        key={lang.code}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => {
                          setLanguage(lang.code as any)
                          setIsMenuOpen(false)
                        }}
                        className={`p-3 rounded-lg border transition-all duration-200 flex flex-col items-center space-y-2 ${
                          language === lang.code
                            ? 'bg-amber-500 text-white border-amber-500'
                            : 'bg-amber-50 dark:bg-amber-900/30 text-gray-700 dark:text-gray-300 border-amber-200 dark:border-amber-700'
                        }`}
                      >
                        <span className="text-2xl">{lang.flag}</span>
                        <span className="text-xs font-medium">{lang.name}</span>
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Mobile Auth Buttons */}
                <div className="pt-4 border-t border-amber-200 dark:border-amber-800 space-y-2">
                  {authItems.map((item, index) => (
                    <MobileAuthButton
                      key={item.key}
                      item={item}
                      translations={translations}
                      index={index}
                      onClick={() => setIsMenuOpen(false)}
                      isSignup={item.key === 'signup'}
                    />
                  ))}
                </div>

                {/* Theme Toggle Mobile */}
                <div className="pt-4 border-t border-amber-200 dark:border-amber-800">
                  <button
                    onClick={toggleTheme}
                    className="w-full flex items-center justify-center space-x-3 p-3 rounded-lg bg-amber-100 dark:bg-amber-900 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-700"
                  >
                    {theme === 'dark' ? (
                      <>
                        <Sun size={20} />
                        <span className="font-medium">Light Mode</span>
                      </>
                    ) : (
                      <>
                        <Moon size={20} />
                        <span className="font-medium">Dark Mode</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

// Individual Nav Item Component
interface NavItemProps {
  item: {
    key: string
    href: string
    icon: any
    description: string
  }
  translations: any
  index: number
}

const NavItem = ({ item, translations, index }: NavItemProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const Icon = item.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="relative"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Link
        href={item.href}
        className="flex items-center space-x-1 px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-all duration-200 group"
      >
        <Icon className="h-4 w-4" />
        <span className="font-medium">
          {translations.nav?.[item.key] || item.key}
        </span>
      </Link>

      {/* Hover effect */}
      <motion.div
        initial={false}
        animate={{ 
          width: isHovered ? '100%' : '0%',
          opacity: isHovered ? 1 : 0
        }}
        transition={{ duration: 0.2 }}
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full"
      />

      {/* Tooltip */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-2 bg-gray-900 dark:bg-gray-700 text-white text-xs rounded-lg whitespace-nowrap z-50"
          >
            {item.description}
            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 dark:bg-gray-700 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

// Auth Button Component
interface AuthButtonProps {
  item: {
    key: string
    href: string
    icon: any
    description: string
  }
  translations: any
  index: number
  isSignup: boolean
}

const AuthButton = ({ item, translations, index, isSignup }: AuthButtonProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const Icon = item.icon

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 + 0.5 }}
    >
      <Link
        href={item.href}
        className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 border ${
          isSignup
            ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white border-amber-500 hover:from-amber-600 hover:to-amber-700 shadow-lg hover:shadow-xl'
            : 'text-gray-700 dark:text-gray-300 border-amber-200 dark:border-amber-700 hover:bg-amber-50 dark:hover:bg-amber-900/50 hover:border-amber-300 dark:hover:border-amber-600'
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          animate={{ 
            scale: isHovered && isSignup ? 1.1 : 1,
            rotate: isHovered && !isSignup ? 5 : 0
          }}
          transition={{ duration: 0.2 }}
        >
          <Icon className="h-4 w-4" />
        </motion.div>
        <span>{translations.nav?.[item.key] || item.key}</span>
      </Link>
    </motion.div>
  )
}

// Mobile Nav Item Component
interface MobileNavItemProps {
  item: {
    key: string
    href: string
    icon: any
    description: string
  }
  translations: any
  index: number
  onClick: () => void
}

const MobileNavItem = ({ item, translations, index, onClick }: MobileNavItemProps) => {
  const Icon = item.icon

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <Link
        href={item.href}
        onClick={onClick}
        className="flex items-center space-x-3 p-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-amber-50 dark:hover:bg-amber-900/30 hover:text-amber-600 dark:hover:text-amber-400 transition-all duration-200 group"
      >
        <div className="p-2 bg-amber-100 dark:bg-amber-900 rounded-lg group-hover:bg-amber-200 dark:group-hover:bg-amber-800 transition-colors duration-200">
          <Icon className="h-4 w-4 text-amber-600 dark:text-amber-400" />
        </div>
        <div className="flex-1">
          <span className="font-medium block">
            {translations.nav?.[item.key] || item.key}
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-400">
            {item.description}
          </span>
        </div>
        <motion.div
          initial={{ x: -5, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.2, delay: index * 0.1 + 0.3 }}
          className="text-amber-400"
        >
          <ChevronDown className="h-4 w-4 transform -rotate-90" />
        </motion.div>
      </Link>
    </motion.div>
  )
}

// Mobile Auth Button Component
interface MobileAuthButtonProps {
  item: {
    key: string
    href: string
    icon: any
    description: string
  }
  translations: any
  index: number
  onClick: () => void
  isSignup: boolean
}

const MobileAuthButton = ({ item, translations, index, onClick, isSignup }: MobileAuthButtonProps) => {
  const Icon = item.icon

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 + 0.6 }}
    >
      <Link
        href={item.href}
        onClick={onClick}
        className={`flex items-center space-x-3 p-3 rounded-lg font-medium transition-all duration-200 border ${
          isSignup
            ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white border-amber-500 justify-center'
            : 'text-gray-700 dark:text-gray-300 border-amber-200 dark:border-amber-700 hover:bg-amber-50 dark:hover:bg-amber-900/30'
        }`}
      >
        <Icon className="h-4 w-4" />
        <span>{translations.nav?.[item.key] || item.key}</span>
      </Link>
    </motion.div>
  )
}