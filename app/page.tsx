"use client";

import Link from "next/link";
import { useLanguage } from "../lib/LanguageContext";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  const { t, language } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-red-100 selection:text-red-900">
      <Header />

      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden mb-12 bg-[url('https://images.unsplash.com/photo-1544967082-d9d374ce7d37?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center">
          <div className="absolute inset-0 bg-white/90 backdrop-blur-sm"></div>

          {/* Decorative background elements - enhanced */}
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-red-100/60 rounded-full blur-3xl opacity-60 pointer-events-none animate-pulse-slow"></div>
          <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-green-100/60 rounded-full blur-3xl opacity-60 pointer-events-none animate-pulse-slow delay-700"></div>

          <div className="max-w-5xl mx-auto px-6 py-24 sm:py-32 flex flex-col items-center text-center relative z-10 transition-all duration-700 ease-in-out transform translate-y-0 opacity-100">
            <span className="inline-block py-2 px-6 rounded-full bg-linear-to-r from-red-100 to-red-50 border border-red-100 text-red-700 text-sm font-bold mb-8 animate-bounce-slow shadow-sm">
              🎄 {language === 'hu' ? 'A legjobb ünnepi hangulatjavító!' : 'The #1 Holiday Mood Booster!'}
            </span>
            <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-slate-900 mb-8 leading-tight drop-shadow-sm">
              {t('hero_title')}
            </h1>
            <p className="text-lg sm:text-2xl text-slate-600 max-w-2xl mb-12 leading-relaxed font-medium">
              {t('hero_subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
              <Link href="/game" className="inline-flex justify-center items-center px-10 py-5 rounded-full bg-red-600 text-white font-bold text-xl hover:bg-red-700 hover:scale-105 transition-all shadow-xl hover:shadow-red-200/50">
                {t('start_playing')}
              </Link>
              <Link href="/how-to-play" className="inline-flex justify-center items-center px-10 py-5 rounded-full bg-white/80 backdrop-blur-sm border-2 border-slate-200 text-slate-700 font-bold text-xl hover:bg-white hover:border-slate-300 hover:scale-105 transition-all shadow-md">
                {t('how_it_works')}
              </Link>
            </div>
          </div>
        </section>

        {/* How It Works (Short) */}
        <section className="max-w-4xl mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">{t('how_it_works')}</h2>
            <p className="text-slate-600">{t('how_it_works_intro')}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            {/* Step 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold text-xl mx-auto mb-6">1</div>
              <h3 className="text-xl font-bold mb-3">{t('step_1_title')}</h3>
              <p className="text-slate-600">{t('step_1_desc')}</p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-xl mx-auto mb-6">2</div>
              <h3 className="text-xl font-bold mb-3">{t('step_2_title')}</h3>
              <p className="text-slate-600">{t('step_2_desc')}</p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 font-bold text-xl mx-auto mb-6">3</div>
              <h3 className="text-xl font-bold mb-3">{t('step_3_title')}</h3>
              <p className="text-slate-600">{t('step_3_desc')}</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-slate-50 border-t border-slate-200 py-16">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">{t('faq_title')}</h2>

            <div className="space-y-6">
              {[1, 2, 3, 4].map((num) => (
                <div key={num} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                  <h3 className="text-lg font-bold mb-2 text-slate-800 flex items-center gap-2">
                    <span className="text-red-500">?</span> {t(`faq_${num}_q` as any)}
                  </h3>
                  <p className="text-slate-600 ml-6">{t(`faq_${num}_a` as any)}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Link href="/game" className="inline-block px-10 py-4 rounded-full bg-green-600 text-white font-bold text-lg hover:bg-green-700 transition-colors shadow-lg shadow-green-200">
                {t('start_playing')}
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
