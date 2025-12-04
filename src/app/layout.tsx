import type { Metadata } from "next";
import { Playfair_Display, Inter, Crimson_Pro } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const crimson = Crimson_Pro({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
  variable: "--font-crimson",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Orpheus Music Academy | Online Music Lessons",
    template: "%s | Orpheus Music Academy"
  },
  description: "Premium online music lessons with conservatory-trained instructors. Piano, violin, voice, and theory. Try your first lesson free.",
  keywords: ["online music lessons", "piano lessons", "violin lessons", "voice lessons", "music theory"],
  icons: {
    icon: '/data/orpheus-ico.png',
    apple: '/data/orpheus-ico.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${crimson.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
