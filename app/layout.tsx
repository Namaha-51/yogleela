import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Sulphur Manufacturer in India | Yogleela Sulphur & Agchem",
  description: "ISO 9001:2015 certified sulphur manufacturer in India. Sulphur 80% WDG, 85% DP, WP and rubber, pharma and explosive grade powder. Plant at Vapi, Gujarat."
};  

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#FDFDFD] text-slate-900 antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
