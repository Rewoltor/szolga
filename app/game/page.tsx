"use client";

import React, { useState } from "react";
import { useLanguage } from "../../lib/LanguageContext";
import Header from "../../components/Header";

export default function WordCollectionGame() {
  const { t } = useLanguage();
  const [words, setWords] = useState<string[]>([]);
  const [currentInput, setCurrentInput] = useState("");
  const [showList, setShowList] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);

  // New state for reset confirmation
  const [showResetConfirmation, setShowResetConfirmation] = useState(false);

  const handleSubmit = () => {
    const trimmedInput = currentInput.trim();
    if (!trimmedInput) return;

    const isDuplicate = words.some((w) => w.toLowerCase() === trimmedInput.toLowerCase());
    if (isDuplicate) {
      setErrorMessage(t('error_duplicate'));
      setTimeout(() => setErrorMessage(""), 3000);
      return;
    }

    setWords((prev) => [...prev, trimmedInput]);
    setCurrentInput("");
    setErrorMessage("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSubmit();
  };

  const handleList = () => setShowConfirmation(true);

  const confirmList = () => {
    const shuffled = [...words].sort(() => Math.random() - 0.5);
    setWords(shuffled);
    setShowList(true);
    setShowConfirmation(false);
  };

  const cancelList = () => setShowConfirmation(false);

  // Trigger reset confirmation instead of immediate reset
  const handleResetRequest = () => {
    setShowResetConfirmation(true);
  };

  const confirmReset = () => {
    setWords([]);
    setCurrentInput("");
    setShowList(false);
    setShowResetConfirmation(false);
  };

  const cancelReset = () => setShowResetConfirmation(false);

  return (
    <div className="flex flex-col min-h-screen bg-linear-to-b from-red-50 to-slate-100 font-sans text-slate-900">
      <Header />

      <main className="flex-grow flex items-center justify-center p-4 pt-24">
        {/* Decorative background elements */}
        <div className="fixed top-20 left-4 w-32 h-32 bg-green-100/50 rounded-full blur-3xl -z-10 pointer-events-none"></div>
        <div className="fixed bottom-10 right-4 w-40 h-40 bg-red-100/50 rounded-full blur-3xl -z-10 pointer-events-none"></div>

        <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-10 w-full max-w-lg border border-slate-100 relative overflow-hidden">
          {/* Subtle top decoration */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-red-500 via-green-500 to-red-500"></div>

          <h1 className="text-3xl font-extrabold text-center mb-8 text-slate-800 tracking-tight">
            {t('game_title')}
          </h1>

          {!showList ? (
            <div className="animate-fade-in">
              <div className="mb-6 text-center">
                <p className="text-slate-500 text-lg mb-2">
                  {t('words_collected')} <span className="font-bold text-red-600 text-2xl ml-1">{words.length}</span>
                </p>
              </div>

              <div className="mb-6">
                <div className="relative">
                  <input
                    type="text"
                    value={currentInput}
                    onChange={(e) => setCurrentInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder={t('enter_word')}
                    className="w-full px-6 py-5 pr-16 border-2 border-slate-200 rounded-2xl focus:border-red-500 focus:ring-4 focus:ring-red-100 focus:outline-none text-xl placeholder:text-slate-400 transition-all shadow-sm"
                    autoFocus
                  />

                  <button
                    onClick={handleSubmit}
                    aria-label="submit"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white p-3 rounded-xl transition duration-200 shadow-md active:scale-95"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-5 h-5">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>

                {errorMessage && (
                  <div className="mt-4 p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl text-center font-medium animate-shake">
                    {errorMessage}
                  </div>
                )}

                <button
                  onClick={handleList}
                  disabled={words.length === 0}
                  className={`w-full mt-8 font-bold py-4 rounded-xl transition-all shadow-lg transform active:scale-95 text-lg
                    ${words.length === 0
                      ? 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'
                      : 'bg-green-600 hover:bg-green-700 text-white shadow-green-200 hover:shadow-green-300'
                    }`}
                >
                  {t('list_all_words')}
                </button>

                {showConfirmation && (
                  <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in">
                    <div className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl transform scale-100">
                      <h3 className="text-2xl font-bold mb-4 text-slate-900">{t('confirm_title')}</h3>
                      <p className="text-slate-600 mb-8 text-lg leading-relaxed">{t('confirm_message')}</p>
                      <div className="flex flex-col gap-3">
                        <button
                          onClick={confirmList}
                          className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3.5 rounded-xl transition duration-200 shadow-lg shadow-green-200"
                        >
                          {t('yes_list')}
                        </button>
                        <button
                          onClick={cancelList}
                          className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3.5 rounded-xl transition duration-200"
                        >
                          {t('cancel')}
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="animate-fade-in">
              <h2 className="text-2xl font-bold mb-6 text-center text-slate-800">{t('all_words')}</h2>
              <div className="bg-slate-50 rounded-2xl p-4 mb-8 max-h-[60vh] overflow-y-auto border border-slate-200 shadow-inner">
                {words.length === 0 ? (
                  <p className="text-slate-500 text-center py-8">{t('no_words')}</p>
                ) : (
                  <ul className="space-y-3">
                    {words.map((word, index) => (
                      <li key={index} className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-center">
                        <span className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold text-sm mr-3">
                          {index + 1}
                        </span>
                        <span className="text-lg text-slate-800 font-medium break-all">{word}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <button
                onClick={handleResetRequest}
                className="w-full bg-slate-800 hover:bg-slate-900 text-white font-bold py-4 rounded-xl transition duration-200 shadow-lg"
              >
                {t('start_new')}
              </button>

              {showResetConfirmation && (
                <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in">
                  <div className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl transform scale-100">
                    <h3 className="text-2xl font-bold mb-4 text-slate-900">{t('confirm_reset_title')}</h3>
                    <p className="text-slate-600 mb-8 text-lg leading-relaxed">{t('confirm_reset_message')}</p>
                    <div className="flex flex-col gap-3">
                      <button
                        onClick={confirmReset}
                        className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 rounded-xl transition duration-200 shadow-lg shadow-red-200"
                      >
                        {t('yes_reset')}
                      </button>
                      <button
                        onClick={cancelReset}
                        className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3.5 rounded-xl transition duration-200"
                      >
                        {t('cancel')}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
