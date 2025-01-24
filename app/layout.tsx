import type { Metadata } from "next";
import { Inter, Raleway } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Toaster } from 'react-hot-toast';

export const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export const inter = Inter({
  variable: "--font-inter",
  subsets: ['latin'],
  display: 'swap',
})


export const metadata: Metadata = {
  title: "NEAM Technologies",
  description: "Custom software built for your everyday business needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.variable} ${inter.variable} snap-mandatory snap-y overflow-y-scroll`}
      >
        <div id="anchor" />
        <TopBar />
        <Header />
        <div><Toaster /></div>
        {children}
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
