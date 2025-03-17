import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Morpheus Podcast",
  description: "Exploring technology, security, and the future of AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Morpheus Podcast</h1>
          <p className="text-xl">Exploring technology, security, and the future of AI.</p>
        </header>
        <main className="max-w-6xl mx-auto px-8 py-8">
          {children}
        </main>
        <footer className="text-center py-8 bg-white mt-8">
          <p>© 2025 Morpheus Podcast | Hosted on Cloudflare</p>
        </footer>
      </body>
    </html>
  );
}
