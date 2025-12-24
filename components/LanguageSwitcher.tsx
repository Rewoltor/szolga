"use client";

import React from 'react';
import { useLanguage } from '../lib/LanguageContext';

export default function LanguageSwitcher({ className = "" }: { className?: string }) {
    const { language, setLanguage } = useLanguage();

    return (
        <div className={`inline-flex bg-slate-100 p-1 rounded-full border border-slate-200 ${className}`}>
            <button
                onClick={() => setLanguage('hu')}
                className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all duration-200 ${language === 'hu'
                        ? 'bg-white text-red-600 shadow-sm ring-1 ring-black/5'
                        : 'text-slate-500 hover:text-slate-700'
                    }`}
            >
                HU
            </button>
            <button
                onClick={() => setLanguage('en')}
                className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all duration-200 ${language === 'en'
                        ? 'bg-white text-red-600 shadow-sm ring-1 ring-black/5'
                        : 'text-slate-500 hover:text-slate-700'
                    }`}
            >
                EN
            </button>
        </div>
    );
}
