"use client";

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '../lib/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
    const { t } = useLanguage();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100 shadow-sm">
            <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* Logo / Home Link */}
                <Link href="/" className="text-xl font-bold bg-gradient-to-r from-red-600 to-green-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
                    {t('nav_codenames')}
                </Link>

                {/* Mobile Navigation (simplified) */}
                <div className="flex items-center gap-4 text-sm font-medium">
                    <Link href="/how-to-play" className="hidden sm:block text-gray-600 hover:text-red-600 transition-colors">
                        {t('nav_rules')}
                    </Link>
                    <Link href="/about" className="hidden sm:block text-gray-600 hover:text-red-600 transition-colors">
                        {t('nav_about')}
                    </Link>

                    <div className="h-6 w-px bg-gray-200 hidden sm:block"></div>

                    <LanguageSwitcher />
                </div>
            </div>
        </nav>
    );
}
