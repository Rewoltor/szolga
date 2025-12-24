"use client";

import React, { useState } from 'react';
import { useLanguage } from '../lib/LanguageContext';

export default function ShareToChatGPT() {
    const { language } = useLanguage();
    const [showTooltip, setShowTooltip] = useState(false);

    const handleShare = async () => {
        const promptText = language === 'hu'
            ? "Szia! A családommal és a barátaimmal a 'Szolga' nevű játékot játsszuk, ami egy karácsonyi szógyűjtő játék. Tudnál adni nekünk néhány vicces kategóriát vagy szabályváltozatot, hogy még izgalmasabb legyen? És miért jó ez a játék csapatépítésre?"
            : "Hi! I'm playing a game called 'Szolga' with my family and friends. It's a Christmas word collection game. Can you give us some fun categories or rule variations to make it more exciting? Also, why is this game great for bonding?";

        try {
            await navigator.clipboard.writeText(promptText);
            setShowTooltip(true);

            // Open ChatGPT in a new tab
            window.open('https://chatgpt.com/', '_blank');

            // Hide tooltip after 3 seconds
            setTimeout(() => setShowTooltip(false), 3000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
            // Fallback: just open the link if clipboard fails
            window.open('https://chatgpt.com/', '_blank');
        }
    };

    return (
        <div className="relative inline-block">
            <button
                onClick={handleShare}
                className="group relative flex items-center justify-center gap-2 bg-[#74aa9c] hover:bg-[#10a37f] text-white px-5 py-3 rounded-full font-bold transition-all shadow-md hover:shadow-lg active:scale-95"
                aria-label="Ask ChatGPT about this game"
            >
                <span>
                    {/* Simple spark/AI icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2a10 10 0 1 0 10 10H12V2z"></path>
                        <path d="M12 12 2.1 12a10.1 10.1 0 0 0 10.2 9.9"></path>
                        <path d="M12 12V2.1A10.1 10.1 0 0 0 2.1 12"></path>
                    </svg>
                </span>
                <span>{language === 'hu' ? 'Kérdezd a ChatGPT-t!' : 'Ask ChatGPT!'}</span>
            </button>

            {/* Tooltip/Toast */}
            {showTooltip && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 w-max max-w-xs px-4 py-2 bg-slate-800 text-white text-sm rounded-xl shadow-xl animate-fade-in z-50">
                    <p className="text-center font-medium">
                        {language === 'hu' ? 'Kérdés másolva! Illeszd be a chatbe!' : 'Prompt copied! Paste it in the chat!'}
                    </p>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1 border-4 border-transparent border-t-slate-800"></div>
                </div>
            )}
        </div>
    );
}
