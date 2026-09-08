"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
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
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
  ];

  const rightNavLinks = [
    { name: "Infrastructure", href: "/Infrastructure" },
    { name: "Career", href: "/career" },
  ];

  const productLinks = [
    { name: "SUNVET-DF (Sulphur 80% WDG)", href: "/products/sunvet-df" },
    { name: "COSMIC FERTILE (Sulphur 90% WDG)", href: "/products/cosmic-fertile" },
    { name: "YOGTARA / COSMIC STAR (Sulphur 85% DP)", href: "/products/yogtara" },
    { name: "SULPHUR POWDER (Rubber Grade)", href: "/products/sulphur-powder-rubber" },
    { name: "SULPHUR POWDER (Explosive Grade)", href: "/products/sulphur-powder-explosive" },
    { name: "SULPHUR AMLASAR (Pharma Grade)", href: "/products/sulphur-amlasar" },
    { name: "SULPHUR 80% WP", href: "/products/sulphur-80-wp" },
    { name: "SULPHUR ROCK / GRANULES", href: "/products/sulphur-rock-granules" },
    { name: "BLUETOX 50 (Copper Oxychloride 50%)", href: "/products/bluetox-50" },
    { name: "DUOCARE (Sulphur 65%+ Tebuconazole 10% WG)", href: "/products/duocare" },
    { name: "CONCURO (Hexaconazole 5% SC)", href: "/products/concuro-5" },
    { name: "REFEX 5 (Fipronil 5%)", href: "/products/refex-5" },
    { name: "ACCURO 25 (Thiamethoxam 25%)", href: "/products/accuro-25" },
    { name: "MOZACK 4.9 (Lambda Cyhalothrin 4.9%)", href: "/products/mozack-4-9" },
    { name: "PURAMATE 5 (Emamectin Benzoate 5%)", href: "/products/puramate-5" },
  ];

  return (
    <header className={`fixed w-full z-[100] transition-all duration-500 flex flex-col ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white"}`}>
      
      {/* TOP INFO BAR (Premium Styling) */}
      <div className={`w-full transition-all duration-300 overflow-hidden bg-gradient-to-r from-[#071c12] via-[#0B2B1C] to-[#071c12] text-white border-b border-[#F5C518]/20 shadow-sm ${isScrolled ? "h-0 opacity-0" : "h-auto opacity-100 py-2.5"}`}>
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center text-xs md:text-[13px] font-semibold tracking-widest gap-3 md:gap-0">
          
          <div className="flex items-center gap-2.5">
            <span className="text-[#F5C518] text-lg leading-none animate-pulse">★</span>
            <span className="uppercase text-white/90">ISO 9001-2015 Certified Company</span>
          </div>
          
          <div className="flex items-center gap-2.5 bg-black/20 px-4 py-1.5 rounded-full border border-white/5">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#F5C518]" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.036 11.036 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <a href="tel:+919821252090" className="text-[#F5C518] hover:text-white transition-colors">+91 9821252090</a>
            <span className="text-white/30 px-0.5">/</span>
            <a href="tel:+919920878518" className="text-[#F5C518] hover:text-white transition-colors">+91 9920878518</a>
          </div>

        </div>
      </div>

      {/* MAIN NAVBAR */}
      <nav className="max-w-[1600px] mx-auto px-6 lg:px-12 py-4 flex justify-between items-center w-full">
        
        {/* LEFT: LOGO */}
        <Link href="/" className="flex items-center gap-3 z-10 shrink-0">
          <img src="/images/logo.jpg" alt="Yogleela Sulphur Logo" className="h-10 md:h-12 w-auto object-contain" />
          <div className="flex items-center gap-2 whitespace-nowrap">
            <span className="text-[#0B2B1C] font-black text-xl md:text-2xl leading-none tracking-tight">YOGLEELA</span>
            <span className="text-[#2E7D4F] font-bold text-sm md:text-base tracking-widest uppercase mt-0.5">Sulphur</span>
          </div>
        </Link>

        {/* CENTER: NAV LINKS (Flex-1 forces them to the center of remaining space) */}
        <div className="hidden lg:flex flex-1 justify-center items-center gap-8 xl:gap-10 whitespace-nowrap ml-8 lg:ml-16">
          {navLinks.map((link, i) => (
            <Link key={i} href={link.href} className={`text-sm font-bold uppercase tracking-widest transition-colors ${pathname === link.href ? "text-[#F5C518]" : "text-[#1F2A24] hover:text-[#2E7D4F]"}`}>
              {link.name}
            </Link>
          ))}
          
          {/* PRODUCTS DROPDOWN */}
          <div className="relative group py-4">
            <Link href="/products" className={`text-sm font-bold uppercase tracking-widest transition-colors flex items-center gap-1 ${pathname.includes("/products") ? "text-[#F5C518]" : "text-[#1F2A24] hover:text-[#2E7D4F]"}`}>
              Products
              <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </Link>
            
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-[340px] bg-white border-t-4 border-[#F5C518] shadow-2xl rounded-b-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top scale-95 group-hover:scale-100 flex flex-col max-h-[70vh] overflow-y-auto">
              {productLinks.map((prod, i) => (
                <Link key={i} href={prod.href} className="px-6 py-3 text-sm font-bold text-[#1F2A24] hover:bg-[#F7F3E8] hover:text-[#2E7D4F] border-b border-[#0B2B1C]/5 last:border-0 transition-colors">
                  {prod.name}
                </Link>
              ))}
            </div>
          </div>

          {rightNavLinks.map((link, i) => (
            <Link key={i} href={link.href} className={`text-sm font-bold uppercase tracking-widest transition-colors ${pathname === link.href ? "text-[#F5C518]" : "text-[#1F2A24] hover:text-[#2E7D4F]"}`}>
              {link.name}
            </Link>
          ))}
        </div>

        {/* RIGHT: CONTACT BUTTON */}
        <div className="hidden lg:block z-10 shrink-0 ml-4">
          <Link href="/contact" className="px-8 py-3 bg-[#0B2B1C] text-[#F5C518] text-sm font-bold uppercase tracking-widest rounded-sm hover:bg-[#2E7D4F] hover:text-white transition-colors shadow-lg whitespace-nowrap">
            Contact
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button className="lg:hidden text-[#0B2B1C] p-2 z-10 shrink-0" onClick={() => setMobileMenuOpen(true)}>
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div initial={{ opacity: 0, x: "100%" }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: "100%" }} transition={{ type: "tween", duration: 0.3 }} className="fixed inset-0 bg-white z-[200] flex flex-col h-screen overflow-y-auto">
            <div className="p-6 flex justify-end border-b border-[#0B2B1C]/10">
              <button onClick={() => setMobileMenuOpen(false)} className="text-[#0B2B1C]">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            
            <div className="flex flex-col p-6 gap-6">
              {[...navLinks, ...rightNavLinks, { name: "Contact", href: "/contact" }].map((link, i) => (
                <Link key={i} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-2xl font-black text-[#0B2B1C] uppercase tracking-widest">{link.name}</Link>
              ))}
              
              <div className="border-t-4 border-[#F5C518] pt-6 mt-2">
                <span className="text-sm font-bold text-[#2E7D4F] uppercase tracking-widest mb-4 block">Our Products</span>
                <div className="flex flex-col gap-4">
                  {productLinks.map((prod, i) => (
                    <Link key={i} href={prod.href} onClick={() => setMobileMenuOpen(false)} className="text-sm font-bold text-[#1F2A24]">{prod.name}</Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}