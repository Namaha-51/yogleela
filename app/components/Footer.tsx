import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#031207] text-white pt-24 pb-12 px-6 lg:px-12 border-t border-emerald-900/50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
        
        {/* Brand & About Column */}
        <div className="md:col-span-5">
          <Link href="/" className="text-2xl font-extrabold tracking-tight text-white mb-6 block">
            YOGLEELA <span className="text-emerald-500 font-semibold">SULPHUR</span>
          </Link>
          <p className="text-emerald-100/70 font-medium text-sm leading-relaxed mb-6 max-w-sm">
            Rooted in oneness and divine creation. We cater to farmers, dealers, and corporate industries across rubber, sugar, explosives, and pharmaceuticals with absolute purity.
          </p>
          <Link href="/about" className="inline-flex items-center text-emerald-400 font-bold text-sm hover:text-white transition-colors">
            Read Our Full Story ↗
          </Link>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-3">
          <h4 className="text-emerald-500 font-bold tracking-widest text-xs uppercase mb-6">Quick Links</h4>
          <ul className="space-y-4">
            <li><Link href="/" className="text-emerald-100/70 font-medium text-sm hover:text-white transition-colors">Home</Link></li>
            <li><Link href="/about" className="text-emerald-100/70 font-medium text-sm hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/products" className="text-emerald-100/70 font-medium text-sm hover:text-white transition-colors">Products</Link></li>
            <li><Link href="/Infrastructure" className="text-emerald-100/70 font-medium text-sm hover:text-white transition-colors">Infrastructure</Link></li>
            <li><Link href="/contact" className="text-emerald-100/70 font-medium text-sm hover:text-white transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="md:col-span-4">
          <h4 className="text-emerald-500 font-bold tracking-widest text-xs uppercase mb-6">Office Address</h4>
          <p className="text-emerald-100/70 font-medium text-sm leading-relaxed mb-8">
            B 104 Raj Heights, MG Road,<br />
            Kandivali West, Mumbai 400067
          </p>
          
          <h4 className="text-emerald-500 font-bold tracking-widest text-xs uppercase mb-4">Call Us</h4>
          <p className="text-emerald-100/70 font-medium text-sm mb-8">
            +91 9930993051 / +91 9920306668<br />
            +91 9821252090 / +91 9920878518
          </p>

          <h4 className="text-emerald-500 font-bold tracking-widest text-xs uppercase mb-4">Email Us</h4>
          <p className="text-emerald-100/70 font-medium text-sm">
            sales@yogleelasulphur.com
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between pt-8 border-t border-emerald-900/50">
        <h2 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-0">
          Yogleela Sulphur and Agchem Industries Pvt. Ltd.
        </h2>
        <p className="text-emerald-100/50 text-xs font-medium">
          © Copyright 2026. All rights reserved.
        </p>
      </div>
    </footer>
  );
}