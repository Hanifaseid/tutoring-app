import React from 'react';

interface LanguageSwitcherProps {
  currentLanguage: string;
  onLanguageChange: (lang: string) => void;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ 
  currentLanguage, 
  onLanguageChange 
}) => {
  const languages = [
    { code: 'en', name: 'English', native: 'EN' },
    { code: 'am', name: 'Amharic', native: 'አማ' },
    { code: 'ar', name: 'Arabic', native: 'عربي' }
  ];

  return (
    <div className="flex space-x-2">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => onLanguageChange(lang.code)}
          className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
            currentLanguage === lang.code
              ? 'bg-green-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {lang.native}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;