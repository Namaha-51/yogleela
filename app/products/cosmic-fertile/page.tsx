"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CosmicFertilePage() {
  return (
    <main className="min-h-screen bg-white text-[#1F2A24] selection:bg-[#F5C518] selection:text-[#0B2B1C] pt-20">
      
      <section className="w-full py-16 md:py-24 px-6 lg:px-12 relative overflow-hidden shadow-inner bg-[#344936]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
          <div className="md:w-1/2 text-white">
            <motion.h1 initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="text-5xl md:text-6xl font-black mb-4 tracking-tight drop-shadow-md">
              COSMIC FERTILE
            </motion.h1>
            <motion.h2 initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="text-2xl md:text-3xl font-bold text-white/90 mb-8">
              (Sulphur 90% WDG)
            </motion.h2>
            
            <div className="flex items-center gap-2 text-sm font-bold text-white/70 uppercase tracking-widest">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>›</span>
              <Link href="/products" className="hover:text-white transition-colors">Products</Link>
              <span>›</span>
              <span className="text-white">COSMIC FERTILE</span>
            </div>
          </div>
          
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg h-72 md:h-[400px] flex items-center justify-center">
              <img 
                src="/images/cosmic-fertile.png" 
                alt="cosmic-fertile" 
                className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.4)] hover:scale-105 transition-transform duration-700" 
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12 max-w-5xl mx-auto">
        <div className="space-y-12">
          
          <div>
            <h4 className="text-2xl font-black text-[#0B2B1C] mb-4 border-b-2 border-[#F5C518] inline-block pb-1">Key Functions</h4>
            <ul className="space-y-3">
              {[
                "Helps in maintaining the appropriate pH of the soil, thereby better uptake of other nutrients.",
                "Better crop stand and Key ingredient in the process of photosynthesis.",
                "Helps in the synthesis of proteins, Enzymes & Vitamins.",
                "Controls metabolic & growth processes within plant cells.",
                "Promotes nodulation in the legumes, thereby helps in nitrogen fixation."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-lg font-medium">
                  <span className="text-[#2E7D4F] mt-1">➔</span>{item}[cite: 12]
                </li>
              ))}
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-2xl font-black text-[#0B2B1C] mb-4 border-b-2 border-[#F5C518] inline-block pb-1">Increases</h4>
              <ul className="space-y-3">
                {[
                  "Oil content in the seeds.",
                  "Protein Percentage.",
                  "Starch content in tuber.",
                  "Yield across all the crops like paddy, Wheat, Cotton, Groundnut, Mustard, Sunflower, Onion, Chilly, Garlic, Vegetables, Sugarcane, Banana, etc."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-lg font-medium">
                    <span className="text-[#2E7D4F] mt-1">➔</span>{item}[cite: 12]
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-2xl font-black text-[#0B2B1C] mb-4 border-b-2 border-[#F5C518] inline-block pb-1">Improves</h4>
              <ul className="space-y-3">
                {[
                  "Keeping quality of fruits & Vegetables.",
                  "Baking quality of Wheat.",
                  "Commercial cane-sugar % (CCS).",
                  "Pungency of Onion, Chilly & Garlic.",
                  "Nutritive quality of forage."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-lg font-medium">
                    <span className="text-[#2E7D4F] mt-1">➔</span>{item}[cite: 12]
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h4 className="text-2xl font-black text-[#0B2B1C] mb-4 border-b-2 border-[#F5C518] inline-block pb-1">Application</h4>
            <p className="text-lg font-medium leading-relaxed mb-4">
              <strong>Time:</strong> It is most suitable for giving with 1st or 2nd fertilizer top dressing[cite: 12].
            </p>
            <p className="text-lg font-medium leading-relaxed">
              <strong>Method:</strong> Use 1 kg everyday through drip OR after every alternate day OR divide it with every liquid fertilizer dose. Use 3 kg of ‘Cosmic Fertile’ per acre, Close one line of drip & See the difference…[cite: 12]
            </p>
          </div>

          <p className="text-xs text-[#1F2A24]/60 italic mt-8 border-t border-[#0B2B1C]/10 pt-4">
            WARRANTY: ‘As the usage of the product is not done under our control, we assure our uniform quality of the product only. We don’t take any other responsibility.’
          </p>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12 bg-[#F7F3E8] text-center border-t border-[#0B2B1C]/10">
        <h3 className="text-3xl md:text-4xl font-black text-[#0B2B1C] mb-8">Interested in COSMIC FERTILE?</h3>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link href="/contact" className="px-10 py-4 bg-[#2E7D4F] text-white text-xl font-bold rounded-lg shadow-xl hover:bg-[#0B2B1C] transition-colors">Request a Quote</Link>
          <a href="https://wa.me/919920878518" target="_blank" rel="noopener noreferrer" className="px-10 py-4 bg-[#25D366] text-white text-xl font-bold rounded-lg shadow-xl hover:bg-[#1DA851] transition-colors">WhatsApp Us</a>
        </div>
      </section>
    </main>
  );
}