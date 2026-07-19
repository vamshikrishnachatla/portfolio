import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Update this once the site is live on its final domain (e.g. https://vamshikrishna.is-a.dev)
const SITE_URL = "https://vamshikrishna.is-a.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Vamshi Krishna Chatla — Java Backend Engineer",
  description:
    "Backend systems engineer with 3+ years building production GenAI services on Java & Spring Boot — RAG pipelines, LLM orchestration, and distributed systems.",
  keywords: [
    "Java Backend Engineer",
    "Spring Boot",
    "GenAI",
    "RAG",
    "LLM",
    "Distributed Systems",
    "SDE-2",
    "Vamshi Krishna Chatla",
  ],
  authors: [{ name: "Vamshi Krishna Chatla" }],
  openGraph: {
    title: "Vamshi Krishna Chatla — Java Backend Engineer",
    description:
      "Backend systems engineer building production GenAI services on Java & Spring Boot.",
    url: SITE_URL,
    siteName: "Vamshi Krishna Chatla",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vamshi Krishna Chatla — Java Backend Engineer",
    description:
      "Backend systems engineer building production GenAI services on Java & Spring Boot.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
