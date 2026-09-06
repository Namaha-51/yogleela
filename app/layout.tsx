import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yogleela Sulphur",
  description: "Premium Sulphur Products for Industry & Agriculture",
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