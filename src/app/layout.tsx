import type { Metadata } from "next";
import { Newsreader, Inter, JetBrains_Mono } from "next/font/google";
import { Nav } from "@/components/nav";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Waleed Shoaib | AI Engineer & Researcher",
  description: "CTO at Aeyron. Architecting evaluator-first AI pipelines and deterministic systems out of probabilistic models.",
  keywords: ["AI Engineer", "CTO", "Machine Learning", "RAG", "Evaluator-First", "Computer Vision", "Waleed Shoaib"],
  authors: [{ name: "Waleed Shoaib" }],
  metadataBase: new URL("https://waleedshoaib.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Waleed Shoaib | AI Engineer & Researcher",
    description: "Architecting evaluator-first AI pipelines and deterministic systems.",
    url: "https://waleedshoaib.com",
    siteName: "Waleed Shoaib",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Waleed Shoaib | AI Engineer & Researcher",
    description: "Architecting evaluator-first AI pipelines and deterministic systems.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${newsreader.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased bg-bg min-h-screen selection:bg-accent selection:text-white flex flex-col">
        <Nav />
        <main className="flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}
