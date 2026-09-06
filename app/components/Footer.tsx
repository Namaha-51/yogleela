"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#0B2B1C] text-[#F7F3E8] pt-16 md:pt-24 pb-8 md:pb-12 px-6 lg:px-12 border-t-4 border-[#F5C518] relative z-[50]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-16 lg:gap-8 mb-16">
        
        {/* BRAND & DESCRIPTION */}
        <div className="lg:w-5/12 flex flex-col items-start">
          <h3 className="text-2xl md:text-3xl font-black text-white mb-6 tracking-tight">
            Yogleela Sulphur and Agchem Industries Pvt. Ltd.
          </h3>
          <p className="text-[18px] font-medium text-[#F7F3E8]/80 leading-relaxed max-w-md mb-8">
            We manufacture sulphur formulations for agriculture, rubber and tyre, pharmaceuticals, explosives and sugar, supplying dealers, distributors and industrial buyers across India and overseas.
          </p>
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-sm bg-[#1F2A24] border border-[#2E7D4F]/50 shadow-lg mb-8">
            <span className="w-2 h-2 rounded-full bg-[#F5C518] animate-pulse"></span>
            <span className="text-xs font-bold text-[#F5C518] tracking-[0.2em] uppercase">ISO 9001:2015 certified.</span>
          </div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/about" className="text-[#2E7D4F] text-[15px] font-bold tracking-widest uppercase hover:text-[#F5C518] transition-colors border-b-2 border-transparent hover:border-[#F5C518]">
              [ Read our story ]
            </Link>
          </motion.div>
        </div>

        {/* NAVIGATION & CONTACT LINKS */}
        <div className="lg:w-7/12 flex flex-col sm:flex-row justify-between lg:justify-end gap-12 lg:gap-24">
          
          <div className="flex flex-col gap-5">
            <h4 className="text-[#F5C518] font-bold tracking-widest text-sm uppercase mb-2">Company</h4>
            <Link href="/" className="font-bold text-lg hover:text-[#F5C518] transition-colors inline-flex items-center gap-3 group">
              <span className="w-4 h-[2px] bg-[#2E7D4F] group-hover:bg-[#F5C518] transition-colors"></span>
              Home
            </Link>
            <Link href="/about" className="font-bold text-lg hover:text-[#F5C518] transition-colors inline-flex items-center gap-3 group">
              <span className="w-4 h-[2px] bg-[#2E7D4F] group-hover:bg-[#F5C518] transition-colors"></span>
              About Us
            </Link>
            <Link href="/products" className="font-bold text-lg hover:text-[#F5C518] transition-colors inline-flex items-center gap-3 group">
              <span className="w-4 h-[2px] bg-[#2E7D4F] group-hover:bg-[#F5C518] transition-colors"></span>
              Products
            </Link>
            <Link href="/Infrastructure" className="font-bold text-lg hover:text-[#F5C518] transition-colors inline-flex items-center gap-3 group">
              <span className="w-4 h-[2px] bg-[#2E7D4F] group-hover:bg-[#F5C518] transition-colors"></span>
              Infrastructure
            </Link>
            <Link href="/career" className="font-bold text-lg hover:text-[#F5C518] transition-colors inline-flex items-center gap-3 group">
              <span className="w-4 h-[2px] bg-[#2E7D4F] group-hover:bg-[#F5C518] transition-colors"></span>
              Careers
            </Link>
          </div>

          <div className="flex flex-col gap-5">
            <h4 className="text-[#F5C518] font-bold tracking-widest text-sm uppercase mb-2">Get in Touch</h4>
            <a href="mailto:yogleelasulphur@gmail.com" className="font-bold text-[17px] hover:text-[#F5C518] transition-colors">
              yogleelasulphur@gmail.com
            </a>
            <a href="mailto:sales@yogleelasulphur.com" className="font-bold text-[17px] hover:text-[#F5C518] transition-colors">
              sales@yogleelasulphur.com
            </a>
            <a href="tel:+919821252090" className="font-bold text-[17px] hover:text-[#F5C518] transition-colors">
              Call: +91 98212 52090
            </a>
            <a href="tel:+919930993051" className="font-bold text-[17px] hover:text-[#F5C518] transition-colors hidden md:block">
              Call: +91 99309 93051
            </a>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-4 inline-block w-max">
              <Link href="/contact" className="px-8 py-3 bg-[#2E7D4F] text-white text-sm font-bold rounded-sm hover:bg-[#1F2A24] border border-[#2E7D4F] hover:border-[#F5C518] hover:text-[#F5C518] transition-all shadow-lg block">
                [ Send an Enquiry ]
              </Link>
            </motion.div>
          </div>
        </div>

      </div>

      {/* BOTTOM COPYRIGHT */}
      <div className="max-w-7xl mx-auto border-t border-[#F7F3E8]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <p className="text-[13px] font-medium text-[#F7F3E8]/50">
          © {new Date().getFullYear()} Yogleela Sulphur and Agchem Industries Pvt. Ltd. All Rights Reserved.
        </p>
        <p className="text-[13px] font-medium text-[#F7F3E8]/50">
          Manufacturing plant at Vapi, Gujarat. Offices in Mumbai.
        </p>
      </div>
    </footer>
  );
}