import type { Metadata } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const body = Hanken_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Naum Milosheski — AI Lead Conversion Systems",
  description:
    "I build the system that catches every lead, books the job, and goes back for the ones you already lost — 24/7, across phone, website, text, and email. Built and run for home services contractors.",
  keywords: [
    "AI Lead Conversion",
    "Contractor AI",
    "Roofing AI",
    "HVAC lead conversion",
    "Plumbing lead conversion",
    "AI receptionist",
  ],
  authors: [{ name: "Naum Milosheski" }],
  openGraph: {
    title: "Naum Milosheski — AI Lead Conversion Systems",
    description:
      "The system that catches every lead, books the job, and revives the ones you already lost — 24/7 across phone, website, text, and email.",
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
      <head>
        {/* Mark JS as active before first paint so scroll-reveal can hide
            content; without JS, .reveal content stays visible (no FOUC). */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${display.variable} ${body.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
