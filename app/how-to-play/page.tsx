"use client";

import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useLanguage } from '../../lib/LanguageContext';
import Link from 'next/link';

export default function HowToPlay() {
    const { t, language } = useLanguage();

    return (
        <div className="flex flex-col min-h-screen bg-slate-50 font-sans text-slate-900">
            <Header />

            <main className="flex-grow pt-24 px-6 max-w-3xl mx-auto w-full">
                <div className="text-center mb-10">
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">{t('how_to_play_title')}</h1>
                    <p className="text-lg text-slate-600">{t('how_to_play_intro')}</p>
                </div>

                <div className="space-y-8">
                    {/* Step 1 */}
                    <div className="bg-white rounded-3xl p-8 shadow-sm border-2 border-slate-200 flex gap-6 hover:translate-y-[-4px] transition-transform duration-300">
                        <div className="shrink-0 w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center text-red-500 font-extrabold text-2xl rotate-3">1</div>
                        <div>
                            <h2 className="text-xl font-bold text-slate-900 mb-2">{t('step_1_title')}</h2>
                            <p className="text-slate-600 mb-4">{t('step_1_desc')}</p>
                            <ul className="list-disc list-inside text-slate-500 space-y-1">
                                <li>{t('htp_step_1_list_1')}</li>
                                <li>{t('htp_step_1_list_2')}</li>
                                <li>{t('htp_step_1_list_3')}</li>
                                <li>{t('htp_step_1_list_4')}</li>
                            </ul>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="bg-white rounded-3xl p-8 shadow-sm border-2 border-slate-200 flex gap-6 hover:translate-y-[-4px] transition-transform duration-300">
                        <div className="shrink-0 w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-green-500 font-extrabold text-2xl -rotate-3">2</div>
                        <div>
                            <h2 className="text-xl font-bold text-slate-900 mb-2">{t('step_2_title')}</h2>
                            <p className="text-slate-600 mb-4">{t('step_2_desc')}</p>
                            <div className="bg-blue-50 p-4 rounded-lg text-blue-800 text-sm">
                                <strong>💡 Tip:</strong> {t('htp_step_2_tip')}
                            </div>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="bg-white rounded-3xl p-8 shadow-sm border-2 border-slate-200 flex gap-6 hover:translate-y-[-4px] transition-transform duration-300">
                        <div className="shrink-0 w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-500 font-extrabold text-2xl rotate-3">3</div>
                        <div>
                            <h2 className="text-xl font-bold text-slate-900 mb-2">{t('step_3_title')}</h2>
                            <p className="text-slate-600 mb-4">{t('step_3_desc')}</p>
                            <ul className="list-disc list-inside text-slate-500 space-y-1">
                                <li>{t('htp_step_3_list_1')}</li>
                                <li>{t('htp_step_3_list_2')}</li>
                                <li>{t('htp_step_3_list_3')}</li>
                                <li>{t('htp_step_3_list_4')}</li>
                                <li className="font-bold text-slate-700">{t('htp_step_3_list_5')}</li>
                            </ul>
                        </div>
                    </div>

                    {/* Game Variations - Deep Content for Engagement */}
                    <div className="mt-16 border-t border-slate-200 pt-10">
                        <h2 className="text-2xl font-extrabold text-slate-900 mb-6 text-center">{t('variations_title' as any) || (language === 'hu' ? 'Játékvariációk' : 'Fun Game Variations')}</h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-slate-100 p-6 rounded-2xl">
                                <h3 className="font-bold text-lg mb-2 text-slate-800">⚡ {language === 'hu' ? 'Villámkör' : 'Speed Round'}</h3>
                                <p className="text-slate-600 text-sm">{language === 'hu' ? 'Set a 30-second timer. If you can\'t say a word, you lose a point!' : 'Set a 30-second timer per player. If you hesitate, you are out!'}</p>
                            </div>
                            <div className="bg-red-50 p-6 rounded-2xl">
                                <h3 className="font-bold text-lg mb-2 text-red-800">🍷 {language === 'hu' ? 'Felnőtt verzió' : 'Party Mode'}</h3>
                                <p className="text-red-700 text-sm">{language === 'hu' ? 'Aki ismétel, annak innia kell egy kortyot!' : 'If you repeat a word that was already said, take a sip of your drink!'}</p>
                            </div>
                        </div>
                    </div>

                    <div className="text-center pt-8">
                        <Link href="/game" className="inline-flex justify-center items-center px-10 py-5 rounded-2xl bg-red-500 text-white font-extrabold text-xl border-b-4 border-red-700 hover:bg-red-400 hover:active:border-b-0 active:translate-y-1 transition-all shadow-xl">
                            {t('start_playing')}
                        </Link>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
