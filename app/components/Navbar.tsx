"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [lang, setLang] = useState("EN");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Logo / Text */}
        <Link href="/" className="text-xl font-extrabold tracking-tight text-emerald-950">
          YOGLEELA <span className="text-emerald-700 font-semibold">SULPHUR</span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-zinc-700">
          <Link href="/" className="hover:text-emerald-900 transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-emerald-900 transition-colors">
            About Us
          </Link>
          <Link href="/products" className="hover:text-emerald-900 transition-colors">
            Products
          </Link>
          <Link href="/Infrastructure" className="hover:text-emerald-900 transition-colors">
            Infrastructure
          </Link>
          <Link href="/contact" className="hover:text-emerald-900 transition-colors">
            Contact
          </Link>
        </nav>

        {/* Language Selector & Primary Action */}
        <div className="hidden md:flex items-center gap-4">
          <div className="relative inline-flex items-center border border-zinc-300 rounded-md px-3 py-1.5 text-xs font-semibold text-zinc-800 bg-zinc-50">
            <span className="mr-1.5 text-zinc-500">🌐</span>
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value)}
              aria-label="Select Language"
              className="bg-transparent focus:outline-none cursor-pointer"
            >
              <option value="EN">English</option>
              <option value="HI">हिन्दी</option>
              <option value="GU">ગુજરાતી</option>
              <option value="MR">मराठी</option>
            </select>
          </div>

          <Link
            href="/contact"
            className="bg-emerald-900 text-white text-xs font-semibold px-4 py-2.5 rounded-md hover:bg-emerald-800 transition-colors"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-3">
          <div className="border border-zinc-300 rounded px-2 py-1 text-xs font-semibold text-zinc-800 bg-zinc-50">
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value)}
              aria-label="Select Language"
              className="bg-transparent focus:outline-none"
            >
              <option value="EN">EN</option>
              <option value="HI">HI</option>
              <option value="GU">GU</option>
              <option value="MR">MR</option>
            </select>
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-zinc-700"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-zinc-200 bg-white px-6 py-4 space-y-3">
          <Link href="/" className="block text-sm font-semibold text-zinc-800" onClick={() => setMobileMenuOpen(false)}>
            Home
          </Link>
          <Link href="/about" className="block text-sm font-semibold text-zinc-800" onClick={() => setMobileMenuOpen(false)}>
            About Us
          </Link>
          <Link href="/products" className="block text-sm font-semibold text-zinc-800" onClick={() => setMobileMenuOpen(false)}>
            Products
          </Link>
          <Link href="/Infrastructure" className="block text-sm font-semibold text-zinc-800" onClick={() => setMobileMenuOpen(false)}>
            Infrastructure
          </Link>
          <Link href="/contact" className="block text-sm font-semibold text-zinc-800" onClick={() => setMobileMenuOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}