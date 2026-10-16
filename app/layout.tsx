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
  icons: {
    icon: "/gabportifolioicon.png",
  },
  openGraph: {
    title: 'Portifolio',
    description: 'Meu portifolio simples',
    images: ['/gabportifolioicon.png'],
  },
  title: "Portifolio",
  description: "Meu portifolio simples",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#fff9e0]">{children}</body>
    </html>
  );
}
