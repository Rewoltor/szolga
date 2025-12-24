import { LanguageProvider } from "../lib/LanguageContext";
import { GoogleAnalytics } from '@next/third-parties/google';
import "./globals.css";

export const metadata = {
  title: "Szolga - Family Game",
  description: "A bilingual family game for the holidays.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-slate-50 text-slate-900">
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <GoogleAnalytics gaId="G-4HQJ2B50HQ" />
      </body>
    </html>
  );
}
