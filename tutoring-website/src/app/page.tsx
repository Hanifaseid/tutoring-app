'use client';

import { LanguageProvider } from './components/LanguageProvider';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

export default function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 overflow-x-hidden">
        <Navbar />
        <main>
          <Hero />
          {/* Add more sections here as needed */}
        </main>
      </div>
    </LanguageProvider>
  );
}
