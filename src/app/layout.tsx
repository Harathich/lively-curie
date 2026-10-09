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

export const metadata: Metadata = {
  title: "Harathi Chavala | Software Engineer & AI/ML Developer",
  description: "Personal portfolio of Harathi Chavala — Software Engineering student at VIT-AP University exploring AI/ML, backend systems, FastAPI, Spring Boot, LangGraph, and deep learning.",
  keywords: [
    "Harathi Chavala",
    "Software Engineer",
    "AI/ML Developer",
    "VIT-AP University",
    "ScamShield AI",
    "FastAPI",
    "Spring Boot",
    "LangGraph",
    "Python",
    "Java",
    "Backend Engineer"
  ],
  authors: [{ name: "Harathi Chavala", url: "https://github.com/Harathich" }],
  openGraph: {
    title: "Harathi Chavala | Software Engineer & AI/ML Developer",
    description: "I build intelligent systems and the software behind them. Integrated M.Tech Software Engineering student at VIT-AP.",
    url: "https://github.com/Harathich",
    siteName: "Harathi Chavala Portfolio",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Harathi Chavala | Software Engineer & AI/ML Developer",
    description: "I build intelligent systems and the software behind them."
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#080a0f] text-gray-100 font-sans">
        {children}
      </body>
    </html>
  );
}
