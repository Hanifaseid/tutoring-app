import React from 'react';
import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';

interface HeaderProps {
  t: any;
  currentLanguage: string;
  onLanguageChange: (lang: string) => void;
}

const Header: React.FC<HeaderProps> = ({ t, currentLanguage, onLanguageChange }) => {
  return (
    <header className="bg-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
              HK
            </div>
            <span className="text-2xl font-bold text-green-600">Hilal Kids</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-green-700 hover:text-green-500 font-medium transition-colors">
              {t.nav.home}
            </Link>
            <Link href="/about" className="text-green-700 hover:text-green-500 font-medium transition-colors">
              {t.nav.about}
            </Link>
            <Link href="/faq" className="text-green-700 hover:text-green-500 font-medium transition-colors">
              {t.nav.faq}
            </Link>
            <Link href="/contact" className="text-green-700 hover:text-green-500 font-medium transition-colors">
              {t.nav.contact}
            </Link>
          </nav>

          {/* Auth & Language */}
          <div className="flex items-center space-x-4">
            <LanguageSwitcher 
              currentLanguage={currentLanguage} 
              onLanguageChange={onLanguageChange}
            />
            <Link href="/login" className="text-green-700 hover:text-green-500 font-medium transition-colors">
              {t.nav.login}
            </Link>
            <Link href="/signup" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium">
              {t.nav.signup}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;