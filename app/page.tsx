import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
  <div className="flex min-h-screen items-center justify-center bg-linear-to-b from-sky-50 to-white font-sans">
      <main className="flex flex-col items-center justify-center gap-8 py-24 px-6 w-full max-w-3xl">
        <div className="flex items-center gap-4">
          <Image src="/next.svg" alt="Next.js" width={64} height={18} className="dark:invert" />
        </div>

        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-3">Welcome to Szolga</h1>
          <p className="text-gray-600 max-w-xl mx-auto">A small playground demonstrating Firebase + a simple client-side word collection game. Click below to open the app.</p>
        </div>

        <div className="flex gap-4">
          <Link href="/game" className="inline-flex items-center gap-2 rounded-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 font-semibold shadow">Open App</Link>
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-6 py-3 text-gray-700 hover:bg-gray-50"
          >
            Docs
          </a>
        </div>

        <footer className="mt-8 text-sm text-gray-500">Built with Next.js · Local development</footer>
      </main>
    </div>
  );
}
