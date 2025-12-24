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

          <div className="max-w-4xl mx-auto px-6 py-16 sm:py-24 flex flex-col items-center text-center relative z-10 transition-all duration-700 ease-in-out transform translate-y-0 opacity-100">
            <span className="inline-block py-2 px-5 rounded-full bg-linear-to-r from-red-100 to-red-50 border border-red-100 text-red-700 text-sm font-bold mb-6 animate-bounce-slow shadow-sm">
              🎄 {language === 'hu' ? 'A legjobb ünnepi hangulatjavító!' : 'The #1 Holiday Mood Booster!'}
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight drop-shadow-sm">
              {t('hero_title')}
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 max-w-xl mb-10 leading-relaxed font-medium">
              {t('hero_subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link href="/game" className="inline-flex justify-center items-center px-8 py-4 rounded-2xl bg-red-500 text-white font-extrabold text-lg border-b-4 border-red-700 hover:bg-red-400 hover:active:border-b-0 active:translate-y-1 transition-all shadow-xl">
                {t('start_playing')}
              </Link>
              <Link href="/how-to-play" className="inline-flex justify-center items-center px-8 py-4 rounded-2xl bg-white text-slate-700 font-extrabold text-lg border-2 border-slate-200 border-b-4 hover:bg-slate-50 hover:border-slate-300 active:border-b-2 active:translate-y-1 transition-all shadow-md">
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
            <div className="bg-white p-8 rounded-3xl shadow-sm border-2 border-slate-200 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center text-red-500 font-extrabold text-2xl mx-auto mb-6 rotate-3">1</div>
              <h3 className="text-xl font-extrabold mb-3 text-slate-800">{t('step_1_title')}</h3>
              <p className="text-slate-600 font-medium">{t('step_1_desc')}</p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border-2 border-slate-200 hover:-translate-y-1 transition-transform duration-300 relative">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-green-500 font-extrabold text-2xl mx-auto mb-6 -rotate-3">2</div>
              <h3 className="text-xl font-extrabold mb-3 text-slate-800">{t('step_2_title')}</h3>
              <p className="text-slate-600 font-medium">{t('step_2_desc')}</p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border-2 border-slate-200 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-500 font-extrabold text-2xl mx-auto mb-6 rotate-3">3</div>
              <h3 className="text-xl font-extrabold mb-3 text-slate-800">{t('step_3_title')}</h3>
              <p className="text-slate-600 font-medium">{t('step_3_desc')}</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-slate-50 border-t border-slate-200 py-16">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl font-extrabold mb-12 text-center text-slate-800">{t('faq_title')}</h2>

            <div className="space-y-6">
              {[1, 2, 3, 4].map((num) => (
                <div key={num} className="bg-white p-6 rounded-2xl shadow-sm border-2 border-slate-100 hover:border-slate-200 transition-colors">
                  <h3 className="text-lg font-bold mb-2 text-slate-800 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-100 text-red-600 font-extrabold text-sm">?</span>
                    {t(`faq_${num}_q` as any)}
                  </h3>
                  <p className="text-slate-600 ml-11 leading-relaxed font-medium">{t(`faq_${num}_a` as any)}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Link href="/game" className="inline-block px-10 py-5 rounded-2xl bg-green-500 text-white font-extrabold text-xl border-b-4 border-green-700 hover:bg-green-400 hover:border-green-600 active:border-b-0 active:translate-y-1 transition-all shadow-xl">
                {t('start_playing')}
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div >
  );
}
