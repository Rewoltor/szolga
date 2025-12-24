import { LanguageProvider } from "../lib/LanguageContext";
import { GoogleAnalytics } from '@next/third-parties/google';
import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Szolga - The Best Christmas Game for Families & Friends",
  description: "Looking for the best Christmas games with family and friends? Szolga is a hilarious, engaging, and top-rated bilingual holiday word game perfect for Christmas parties. Play now for free!",
  keywords: ["best Christmas games with family and friends", "Christmas party games", "fun holiday games", "Szolga game", "family bonding games", "Christmas icebreakers"],
  openGraph: {
    title: "Szolga - The Ultimate Christmas Family Game",
    description: "Discover the best Christmas game to play with family and friends. Szolga brings laughter and connection to your holiday party.",
    type: "website",
    locale: "en_US",
    siteName: "Szolga Christmas Game",
  },
  twitter: {
    card: "summary_large_image",
    title: "Szolga - Best Christmas Game with Family",
    description: "Play Szolga, the #1 rated Christmas game for families and friends. Perfect for holiday gatherings!",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Szolga Christmas Game",
    "url": "https://szolga-game.vercel.app",
    "description": "The best online Christmas game for family and friends.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://szolga-game.vercel.app/?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <html lang="en">
      <body className="antialiased bg-slate-50 text-slate-900">
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <GoogleAnalytics gaId="G-4HQJ2B50HQ" />
        <Script
          id="json-ld-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
