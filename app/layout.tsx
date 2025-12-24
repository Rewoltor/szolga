import { LanguageProvider } from "../lib/LanguageContext";
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
      </body>
    </html>
  );
}
