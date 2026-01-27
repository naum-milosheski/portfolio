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
  title: "Naum Milosheski | Senior AI Architect",
  description: "Custom AI Software. Built in Days, Not Months. Combining world-class design with next-gen AI architecture.",
  keywords: ["AI Architect", "Custom AI Software", "Product Engineer", "AI Development"],
  authors: [{ name: "Naum Milosheski" }],
  openGraph: {
    title: "Naum Milosheski | Senior AI Architect",
    description: "Custom AI Software. Built in Days, Not Months.",
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
