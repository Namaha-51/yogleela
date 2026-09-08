"use client";

import Link from "next/link";

interface ProductCTAProps {
  productName: string;
}

export default function ProductCTA({ productName }: ProductCTAProps) {
  // Generates the exact formatted string from your reference image
  const message = `Hello, I am interested in ${productName}. Please share the product details, technical specifications, pricing, availability, and quotation. Thank you.`;
  const whatsappUrl = `https://wa.me/919920878518?text=${encodeURIComponent(message)}`;

  return (
    <section className="py-20 px-6 lg:px-12 bg-[#F7F3E8] text-center border-t border-[#0B2B1C]/10 w-full">
      <h3 className="text-3xl md:text-4xl font-black text-[#0B2B1C] mb-8">
        Interested in {productName}?
      </h3>
      <div className="flex flex-col sm:flex-row justify-center gap-6">
        <Link href="/contact" className="px-10 py-4 bg-[#2E7D4F] text-white text-xl font-bold rounded-lg shadow-xl hover:bg-[#0B2B1C] transition-colors inline-block">
          Request a Quote
        </Link>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="px-10 py-4 bg-[#25D366] text-white text-xl font-bold rounded-lg shadow-xl hover:bg-[#1DA851] transition-colors inline-block">
          WhatsApp Us
        </a>
      </div>
    </section>
  );
}