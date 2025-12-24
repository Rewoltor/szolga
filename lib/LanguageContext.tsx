"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';
import { translations, Language, TranslationKey } from './translations';

type LanguageContextType = {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: TranslationKey) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguageState] = useState<Language>('hu'); // Default to Hungarian

    useEffect(() => {
        // 1. Check localStorage
        const savedLang = localStorage.getItem('szolga-lang') as Language;
        if (savedLang && (savedLang === 'en' || savedLang === 'hu')) {
            setLanguageState(savedLang);
        }
        // Default is already 'hu', so no need to check browser language
    }, []);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem('szolga-lang', lang);
    };

    const t = (key: TranslationKey): string => {
        return translations[language][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
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
