"use client"; // <-- this makes the file a Client Component
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';


// Import translations
import en from '../../locales/en.json';
import am from '../../locales/am.json';
import ar from '../../locales/ar.json';

const translations: { [key: string]: any } = { en, am, ar };

export default function Home() {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [t, setT] = useState(translations.en);

  useEffect(() => {
    setT(translations[currentLanguage]);
  }, [currentLanguage]);

  const features = [
    {
      icon: "📖",
      title: t.features?.quran || "Quran Teaching",
      description: "Comprehensive Quran education with qualified teachers"
    },
    {
      icon: "🎓",
      title: t.features?.academic || "Academic Tutoring",
      description: "All school subjects from elementary to high school"
    },
    {
      icon: "🌐",
      title: t.features?.online || "Online Worldwide",
      description: "Learn from anywhere in the world with our online platform"
    },
    {
      icon: "🚪",
      title: t.features?.doorToDoor || "Door-to-Door Service",
      description: "In-person tutoring available in selected areas"
    },
    {
      icon: "👁️",
      title: t.features?.inclusive || "Fully Accessible",
      description: "Designed for children with visual impairments"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <Head>
        <title>Hilal Kids - Islamic Education & Academic Excellence</title>
        <meta name="description" content="Comprehensive learning platform for Quran teaching and academic tutoring" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header 
        t={t} 
        currentLanguage={currentLanguage} 
        onLanguageChange={setCurrentLanguage} 
      />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-green-800 mb-6 leading-tight">
            {t.hero?.title || "Hilal Kids - Islamic Education & Academic Excellence"}
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {t.hero?.subtitle || "Comprehensive learning platform for Quran teaching and academic tutoring"}
          </p>
          <button className="bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition-colors shadow-lg">
            {t.hero?.cta || "Start Learning Today"}
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-green-100"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-green-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Accessibility Section */}
      <section className="bg-green-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Accessibility First</h2>
          <p className="text-xl max-w-2xl mx-auto">
            Our platform is specifically designed to be fully accessible for children with visual impairments, 
            featuring screen reader compatibility, high contrast modes, and audio-enhanced learning materials.
          </p>
        </div>
      </section>

      {/* FAQ CTA Section */}
<section className="bg-white py-16">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-3xl font-bold text-green-800 mb-6">
      {currentLanguage === 'en' && 'Have Questions?'}
      {currentLanguage === 'am' && 'ጥያቄዎች አሉዎት?'}
      {currentLanguage === 'ar' && 'هل لديك أسئلة؟'}
    </h2>
    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
      {currentLanguage === 'en' && 'Check our frequently asked questions for quick answers about our services and programs.'}
      {currentLanguage === 'am' && 'ስለ አገልግሎቶቻችን እና ፕሮግራሞቻችን ፈጣን መልስ ለማግኘት በተደጋጋሚ የሚጠየቁ ጥያቄዎቻችንን ይመልከቱ።'}
      {currentLanguage === 'ar' && 'تحقق من الأسئلة الشائعة للحصول على إجابات سريعة حول خدماتنا وبرامجنا.'}
    </p>
    <Link 
      href="/faq"
      className="inline-flex items-center border-2 border-green-600 text-green-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-600 hover:text-white transition-colors"
    >
      <span>
        {currentLanguage === 'en' && 'Visit FAQ'}
        {currentLanguage === 'am' && 'ጥያቄዎችን ይመልከቱ'}
        {currentLanguage === 'ar' && 'زيارة الأسئلة الشائعة'}
      </span>
      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </Link>
  </div>
</section>

      <Footer />
    </div>
  );
}