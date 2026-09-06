"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Infrastructure", path: "/Infrastructure" },
    { name: "Career", path: "/career" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <header className={`fixed w-full top-0 z-[100] flex flex-col transition-transform duration-500 ${isScrolled ? "-translate-y-10" : "translate-y-0"}`}>
      
      {/* TOP CREDIBILITY STRIP */}
      <div className="bg-[#0B2B1C] text-white py-2.5 px-6 lg:px-12 w-full">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase h-full">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#F5C518] animate-pulse"></span>
            <span>ISO 9001:2015 Certified</span>
          </div>
          <div className="flex items-center gap-6 text-[#F7F3E8]/80">
            <a href="tel:+919821252090" className="hover:text-[#F5C518] transition-colors">Call: +91 98212 52090</a>
            <a href="tel:+919930993051" className="hover:text-[#F5C518] transition-colors hidden md:block">+91 99309 93051</a>
          </div>
        </div>
      </div>

      {/* MAIN NAVIGATION */}
      <nav className={`w-full transition-all duration-500 ${isScrolled ? "bg-white shadow-xl py-4" : "bg-white/95 backdrop-blur-md border-b border-slate-200 py-5"} px-6 lg:px-12`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between w-full">
          
          {/* LOGO & COMPANY NAME */}
          <Link href="/" className="flex items-center gap-3 z-50 group">
            <img 
              src="/images/logo.jpg" 
              alt="Yogleela Sulphur Logo" 
              className="h-10 md:h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
            />
            <span className="text-xl md:text-2xl font-black text-[#0B2B1C] tracking-tighter hidden sm:block">
              YOGLEELA <span className="text-[#2E7D4F] font-medium">SULPHUR</span>
            </span>
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link 
                  key={link.name} 
                  href={link.path} 
                  className={`relative text-[15px] font-bold tracking-wide transition-colors group py-1 ${isActive ? "text-[#2E7D4F]" : "text-[#1F2A24] hover:text-[#2E7D4F]"}`}
                >
                  {link.name}
                  {/* Animated underline for obvious clickability */}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-[#2E7D4F] transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}></span>
                </Link>
              );
            })}
          </div>

          {/* UTILITIES & CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <button className="flex items-center gap-2 text-sm font-bold text-[#1F2A24] hover:text-[#2E7D4F] transition-colors group cursor-pointer">
              🌐 English 
              <svg className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
            <Link href="/contact" className="px-6 py-2.5 bg-[#0B2B1C] text-white text-sm font-bold rounded-sm hover:bg-[#2E7D4F] transition-colors shadow-lg shadow-[#0B2B1C]/20 hover:-translate-y-0.5 active:translate-y-0">
              Get in Touch
            </Link>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <button 
            className="lg:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className={`block w-8 h-1 bg-[#0B2B1C] transition-transform duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-2.5" : ""}`}></span>
            <span className={`block w-8 h-1 bg-[#0B2B1C] transition-opacity duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`}></span>
            <span className={`block w-8 h-1 bg-[#0B2B1C] transition-transform duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-2.5" : ""}`}></span>
          </button>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-[#0B2B1C] z-40 flex flex-col items-center justify-center px-6"
          >
            <div className="flex flex-col items-center gap-8 w-full">
              {navLinks.map((link, i) => (
                <motion.div 
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Link href={link.path} className="text-4xl font-black text-white hover:text-[#F5C518] transition-colors">
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="mt-8 flex flex-col items-center gap-6 border-t border-white/20 pt-8 w-full">
                 <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="w-full text-center px-8 py-4 bg-[#F5C518] text-[#0B2B1C] text-xl font-bold rounded-sm">
                   Get in Touch
                 </Link>
                 <a href="tel:+919821252090" className="text-white font-bold tracking-widest text-lg">Call: +91 98212 52090</a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}