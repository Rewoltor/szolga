"use client";

import React from 'react';
import { useLanguage } from '../lib/LanguageContext';

export default function LanguageSwitcher({ className = "" }: { className?: string }) {
    const { language, setLanguage } = useLanguage();

    return (
        <div className={`inline-flex bg-slate-100 p-1.5 rounded-2xl md:rounded-xl border-2 border-slate-200 ${className}`}>
            <button
                onClick={() => setLanguage('hu')}
                className={`px-3 py-1.5 rounded-xl md:rounded-lg text-sm font-extrabold transition-all duration-200 uppercase tracking-wide ${language === 'hu'
                    ? 'bg-white text-slate-800 shadow-sm border border-slate-200'
                    : 'text-slate-400 hover:text-slate-600'
                    }`}
            >
                HU
            </button>
            <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1.5 rounded-xl md:rounded-lg text-sm font-extrabold transition-all duration-200 uppercase tracking-wide ${language === 'en'
                    ? 'bg-white text-slate-800 shadow-sm border border-slate-200'
                    : 'text-slate-400 hover:text-slate-600'
                    }`}
            >
                EN
            </button>
        </div>
    );
}
