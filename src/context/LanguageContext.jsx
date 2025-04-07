import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const languages = {
  en: {
    name: 'English',
    code: 'EN',
    dir: 'ltr',
  },
  hi: {
    name: 'हिंदी',
    code: 'HI',
    dir: 'ltr',
  }
};

export const translations = {
  en: {
    nav: {
      home: 'Home',
      products: 'Products',
      services: 'Services',
      jobs: 'Jobs',
      about: 'About',
    },
    jobs: {
      title: 'Join Our Team',
      subtitle: 'Build your career with AgroPulse and help transform agricultural commerce',
      search: 'Search for jobs...',
      filters: 'Filters',
      positions: 'Positions Available',
      apply: 'Apply Now',
      viewDetails: 'View Details',
    }
  },
  hi: {
    nav: {
      home: 'होम',
      products: 'उत्पाद',
      services: 'सेवाएं',
      jobs: 'नौकरियां',
      about: 'हमारे बारे में',
    },
    jobs: {
      title: 'हमारी टीम में शामिल हों',
      subtitle: 'एग्रोपल्स के साथ अपना करियर बनाएं और कृषि व्यापार को बदलने में मदद करें',
      search: 'नौकरियां खोजें...',
      filters: 'फ़िल्टर',
      positions: 'उपलब्ध पद',
      apply: 'आवेदन करें',
      viewDetails: 'विवरण देखें',
    }
  }
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage(prevLang => prevLang === 'en' ? 'hi' : 'en');
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}