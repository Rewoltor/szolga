"use client";

import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useLanguage } from '../../lib/LanguageContext';

export default function About() {
    const { t } = useLanguage();

    return (
        <div className="flex flex-col min-h-screen bg-slate-50 font-sans text-slate-900">
            <Header />

            <main className="flex-grow pt-24 px-6 max-w-3xl mx-auto w-full">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-8">{t('about_title')}</h1>

                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 space-y-6">
                    <section>
                        <h2 className="text-xl font-bold text-slate-800 mb-2">👋 {t('about_story')}</h2>
                    </section>

                    <section>
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">{t('about_problem')}</h3>
                        <p className="text-slate-600 leading-relaxed">
                            We've all been there: playing a party game where half the room is eliminated in the first round and has to watch the others play. It's not fun for the spectators, and it kills the vibe.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">{t('about_solution')}</h3>
                        <p className="text-slate-600 leading-relaxed">
                            {t('about_success')}
                        </p>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
}
