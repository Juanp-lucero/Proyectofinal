"use client";

import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import esTranslations from './translations/es.json';
import enTranslations from './translations/en.json';

type Translations = {
  [key: string]: any;
};

type LanguageContextType = {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => any;
};

const translations: { [key: string]: Translations } = {
  es: esTranslations,
  en: enTranslations,
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState('es');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key: string): any => {
    const keys = key.split('.');
    let value: any = translations[language];

    for (const k of keys) {
      if (value && value[k]) {
        value = value[k];
      } else {
        return key;
      }
    }

    // Permitir devolver strings, objetos o arrays según el contenido
    return value;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};