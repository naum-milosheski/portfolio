import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Naum Milosheski | AI-Native Full-Stack Engineer",
  description: "Strategic full-stack engineering for founders. Enterprise-grade software built in days, not months.",
  keywords: ["AI Architect", "Custom AI Software", "Product Engineer", "AI Development"],
  authors: [{ name: "Naum Milosheski" }],
  openGraph: {
    title: "Naum Milosheski | AI-Native Full-Stack Engineer",
    description: "Strategic full-stack engineering for founders. Enterprise-grade software built in days, not months.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} antialiased noise-overlay`}
      >
        {children}
      </body>
    </html>
  );
}
