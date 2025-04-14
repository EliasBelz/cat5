import type { Metadata } from "next";
import "./globals.css";
import Footer from '../components/Footer';
import { Aleo, Manrope, Audiowide, Goldman, Genos, Unlock, Rubik_Glitch, Train_One, Monoton} from "next/font/google";
import SplashScreen from "@/components/SplashScreen";
import ScrollToTop from "@/components/ScrollToTop";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/next';
import InfiniteBanner from "@/components/InfiniteBanner";


export const metadata: Metadata = {
  title: "Cat5 Content",
  description: "Everything you want to know about Cat5 Content.",
  keywords: ["Cat5 Content", "Cat5", "pictures", "film", "production", "company", "comedy"],
  openGraph: {
    title: 'Cat5 Content',
    description: 'Everything you want to know about Cat5 Content.',
    url: 'https://pointgreypictures.vercel.app',
    siteName: 'Cat5 Content',
    images: [
      {
        url: '/cat5-logo.png',
        width: 1200,
        height: 630,
        alt: 'Cat5 Content',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cat5 Content',
    description: 'Everything you want to know about Cat5 Content.',
    images: ['/cat5-logo.png'],
  },
};

const aleo = Aleo({weight: "400", subsets: ["latin"], variable: "--font-aleo"})

const anybody = Manrope({weight: "700", subsets: ["latin"], variable: "--font-anybody"})


// New font additions
const audiowide = Audiowide({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-audiowide"
});

const goldman = Goldman({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-goldman"
});

const genos = Genos({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-genos"
});

const unlock = Unlock({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-unlock"
});

const rubikGlitch = Rubik_Glitch({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-rubik-glitch"
});

const trainOne = Train_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-train-one"
});

const monoton = Monoton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-monoton"
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    // Made by Elias Belzberg for Cat5 Content
    <html lang="en">
      <body className={`no-scroll-bar bg-secondary min-h-screen flex flex-col ${aleo.variable} ${anybody.variable} ${audiowide.variable} ${goldman.variable} ${genos.variable} ${unlock.variable} ${rubikGlitch.variable} ${trainOne.variable} ${monoton.variable}`}>
        <div className="flex flex-col flex-grow h-full">
          <SplashScreen>
            <div className="w-full bg-secondary">
              <InfiniteBanner />
            </div>
            <div className="flex-grow bg-background pb-10">
              {children}
              <Analytics />
              <SpeedInsights />
            </div>
            <div className="w-full bg-secondary">
              <InfiniteBanner reversed={true}/>
            <Footer />
            </div>
          </SplashScreen>
        </div>
        <ScrollToTop />
      </body>
    </html>
  );
}