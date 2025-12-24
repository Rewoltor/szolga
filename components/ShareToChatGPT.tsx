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
        <div className="flex items-center gap-6 relative">
            {/* ChatGPT Button */}
            <button
                onClick={handleShare}
                className="text-gray-400 hover:text-[#10a37f] transition-colors"
                aria-label={language === 'hu' ? 'Kérdezd a ChatGPT-t!' : 'Ask ChatGPT!'}
                title={language === 'hu' ? 'Kérdezd a ChatGPT-t!' : 'Ask ChatGPT!'}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a10 10 0 1 0 10 10H12V2z"></path>
                    <path d="M12 12 2.1 12a10.1 10.1 0 0 0 10.2 9.9"></path>
                    <path d="M12 12V2.1A10.1 10.1 0 0 0 2.1 12"></path>
                </svg>
            </button>

            {/* Copy Link Button */}
            <button
                onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                    setShowTooltip(true);
                    setTimeout(() => setShowTooltip(false), 3000);
                }}
                className="text-gray-400 hover:text-slate-700 transition-colors"
                aria-label="Copy link"
                title="Copy link"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </svg>
            </button>

            {/* Tooltip/Toast */}
            {showTooltip && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 w-max max-w-xs px-3 py-1.5 bg-slate-800 text-white text-xs rounded-md shadow-xl animate-fade-in z-50">
                    <p className="text-center font-medium">
                        {language === 'hu' ? 'Másolva!' : 'Copied!'}
                    </p>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1 border-4 border-transparent border-t-slate-800"></div>
                </div>
            )}
        </div>
    );
}
