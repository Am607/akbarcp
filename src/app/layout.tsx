import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { RevealObserver } from "@/components/ui/reveal-observer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://akbarcp.com"),
  title: "Akbar CP — Full Stack & Flutter Developer",
  description:
    "Portfolio of Akbar CP, a full stack and Flutter developer in Kochi, India. Building MarineRadar at Lascade; previously Eduport.",
  keywords: ["Akbar CP", "Flutter Developer", "Full Stack Developer", "Kochi", "Portfolio", "MarineRadar"],
  openGraph: {
    title: "Akbar CP — Full Stack & Flutter Developer",
    description: "I design and build digital products that solve real-world problems.",
    url: "https://akbarcp.com",
    siteName: "Akbar CP",
    type: "website",
  },
  twitter: { card: "summary", creator: "@AkbarMasterpadi" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f1ea" },
    { media: "(prefers-color-scheme: dark)", color: "#0d0f10" },
  ],
};

// Applies a saved theme before paint to avoid a flash.
const themeScript = `document.documentElement.classList.add('js');try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t}catch(e){}`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} antialiased`}
      >
        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id="e3741006-0805-4493-bb40-e84de83e1b11"
          strategy="afterInteractive"
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-bg"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="relative z-10">
          {children}
        </main>
        <Footer />
        <RevealObserver />
      </body>
    </html>
  );
}
