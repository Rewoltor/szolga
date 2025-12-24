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

                <div className="bg-white rounded-3xl shadow-sm border-2 border-slate-200 p-8 space-y-8">
                    <section>
                        <h2 className="text-2xl font-extrabold text-slate-800 mb-4 flex items-center gap-3">
                            <span className="text-3xl">👋</span> {t('about_story')}
                        </h2>
                    </section>

                    <section className="bg-red-50 p-6 rounded-2xl border-2 border-red-100">
                        <h3 className="text-lg font-bold text-red-800 mb-2 uppercase tracking-wide">{t('about_problem')}</h3>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-slate-800 mb-3">{t('about_solution')}</h3>
                        <p className="text-lg text-slate-600 leading-relaxed font-medium">
                            {t('about_success')}
                        </p>
                    </section>

                    <div className="pt-4">
                        <a href="/game" className="inline-block w-full text-center py-4 rounded-2xl bg-green-500 text-white font-extrabold text-xl border-b-4 border-green-700 hover:bg-green-400 hover:border-green-600 active:border-b-0 active:translate-y-1 transition-all shadow-xl">
                            {t('start_playing')}
                        </a>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
