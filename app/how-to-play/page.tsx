"use client";

import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useLanguage } from '../../lib/LanguageContext';
import Link from 'next/link';

export default function HowToPlay() {
    const { t } = useLanguage();

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
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex gap-6">
                        <div className="shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold text-xl">1</div>
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
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex gap-6">
                        <div className="shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-xl">2</div>
                        <div>
                            <h2 className="text-xl font-bold text-slate-900 mb-2">{t('step_2_title')}</h2>
                            <p className="text-slate-600 mb-4">{t('step_2_desc')}</p>
                            <div className="bg-blue-50 p-4 rounded-lg text-blue-800 text-sm">
                                <strong>💡 Tip:</strong> {t('htp_step_2_tip')}
                            </div>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex gap-6">
                        <div className="shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 font-bold text-xl">3</div>
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

                    <div className="text-center pt-8">
                        <Link href="/game" className="inline-flex justify-center items-center px-8 py-4 rounded-full bg-red-600 text-white font-bold text-lg hover:bg-red-700 transition-all shadow-lg hover:shadow-red-200">
                            {t('start_playing')}
                        </Link>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
