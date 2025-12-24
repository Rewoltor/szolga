"use client";

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '../lib/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
    const { t } = useLanguage();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100 shadow-sm">
            <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo / Home Link */}
                <Link href="/" className="text-2xl font-extrabold text-green-500 tracking-tight hover:text-green-400 transition-colors">
                    {t('nav_codenames')}
                </Link>

                {/* Mobile Navigation (simplified) */}
                <div className="flex items-center gap-6 font-bold text-slate-500">
                    <Link href="/how-to-play" className="hidden sm:block hover:text-slate-700 uppercase tracking-wide text-sm transition-colors">
                        {t('nav_rules')}
                    </Link>
                    <Link href="/about" className="hidden sm:block hover:text-slate-700 uppercase tracking-wide text-sm transition-colors">
                        {t('nav_about')}
                    </Link>

                    <div className="h-8 w-0.5 bg-slate-200 hidden sm:block rounded-full"></div>

                    <LanguageSwitcher />
                </div>
            </div>
        </nav>
    );
}
