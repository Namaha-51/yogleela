"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function SunvetDFPage() {
  return (
    <main className="min-h-screen bg-white text-[#1F2A24] selection:bg-[#F5C518] selection:text-[#0B2B1C] pt-20">
      
      {/* HERO SECTION */}
      <section className="w-full py-16 md:py-24 px-6 lg:px-12 relative overflow-hidden shadow-inner bg-[#9B2C2C]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
          <div className="md:w-1/2 text-white">
            <motion.h1 
              initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-black mb-4 tracking-tight drop-shadow-md"
            >
              SUNVET-DF
            </motion.h1>
            <motion.h2 
              initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
              className="text-2xl md:text-3xl font-bold text-white/90 mb-8"
            >
              (Sulphur 80% WDG)
            </motion.h2>
            
            <div className="flex items-center gap-2 text-sm font-bold text-white/70 uppercase tracking-widest">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>›</span>
              <Link href="/products" className="hover:text-white transition-colors">Products</Link>
              <span>›</span>
              <span className="text-white">SUNVET-DF</span>
            </div>
          </div>
          
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg h-72 md:h-[400px] flex items-center justify-center">
              <img 
                src="/images/sunvet_df.png" 
                alt="sunvet-df sulphur 80% WDG" 
                className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.4)] hover:scale-105 transition-transform duration-700" 
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* MAIN CONTENT AREA */}
      <section className="py-20 px-6 lg:px-12 max-w-5xl mx-auto">
        <div className="mb-16">
          <h3 className="text-4xl font-black text-[#0B2B1C] mb-2">Sulphur 80% WDG (Contact Fungicide)</h3>
          <p className="text-xl font-medium text-[#1F2A24] mb-6 leading-relaxed">
            It is water dispersible granules containing 80% Sulphur as active ingredient and balance adjuvants 20% w/w.
          </p>
        </div>

        {/* DOSAGE TABLE */}
        <div className="mb-16 overflow-x-auto">
          <h4 className="text-2xl font-black text-[#0B2B1C] mb-4 border-b-2 border-[#F5C518] inline-block pb-1">Recommendation</h4>
          <table className="w-full border-collapse bg-[#F7F3E8] rounded-xl overflow-hidden shadow-md text-left mt-4">
            <thead className="bg-[#0B2B1C] text-white">
              <tr>
                <th className="p-4 font-bold text-sm uppercase tracking-wider">Crop(s)</th>
                <th className="p-4 font-bold text-sm uppercase tracking-wider">Name of Disease</th>
                <th className="p-4 font-bold text-sm uppercase tracking-wider">Dosages/Ha (a.i. Kg)</th>
                <th className="p-4 font-bold text-sm uppercase tracking-wider">Formulation (Kg)</th>
                <th className="p-4 font-bold text-sm uppercase tracking-wider">Dilution in (Ltr)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#0B2B1C]/10">
              {[
                ["Grapes", "Powdery Mildew", "1.50-2.00", "1.875-2.50", "750-1000"],
                ["Cowpea, Gaur, Pea", "Powdery Mildew", "1.50-2.00", "1.875-2.50", "750-1000"],
                ["Apple", "Powdery Mildew", "1.50-2.00", "1.875-2.50", "750-1000"],
                ["Cumin", "Powdery Mildew", "1.50-2.00", "1.875-2.50", "750-1000"],
                ["Mango", "Powdery Mildew", "1.50-2.00", "1.875-2.50", "750-1000"],
              ].map((row, i) => (
                <tr key={i} className="hover:bg-white transition-colors">
                  {row.map((cell, j) => (
                    <td key={j} className="p-4 font-medium text-[#1F2A24]">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* TEXT SECTIONS */}
        <div className="space-y-12">
          <div>
            <h4 className="text-2xl font-black text-[#0B2B1C] mb-4 border-b-2 border-[#F5C518] inline-block pb-1">Direction of Use</h4>
            <p className="text-lg font-medium leading-relaxed mb-4">
              Sulphur is not recommended for application on Sulphur “shy” Vegetables e.g. cucurbits etc. and certain variety apples, pears and other fruits where high temp (85 deg. F or 30 deg. C) Prevail Sulphur will be phytotoxic.
            </p>
            <p className="text-lg font-medium leading-relaxed">
              Plant protection equipment: Knapsack sprayer, Foot sprayer, Compression Knapsack Sprayer with flat fan/ flood jet nozzle.
            </p>
          </div>

          <div>
            <h4 className="text-2xl font-black text-[#0B2B1C] mb-4 border-b-2 border-[#F5C518] inline-block pb-1">Precautions</h4>
            <ul className="space-y-3">
              {[
                "Keep away from foodstuffs, empty foodstuff containers and animals food",
                "Avoid contact with mouth, eyes and skin",
                "Avoid inhalation of the spray mist. Spray in the direction of wind",
                "Wash thoroughly the contaminated clothes and parts of the body after spraying",
                "Do not smoke, drink, eat and chew anything while spraying.",
                "Wear full protective clothing while mixing and spraying."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-lg font-medium">
                  <span className="text-[#2E7D4F] mt-1">➔</span>{item}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-2xl font-black text-[#0B2B1C] mb-4 border-b-2 border-[#F5C518] inline-block pb-1">Phytotoxicity</h4>
              <p className="text-lg font-medium leading-relaxed">The product is not phytotoxic when used as per field recommendation.</p>
            </div>
            <div>
              <h4 className="text-2xl font-black text-[#0B2B1C] mb-4 border-b-2 border-[#F5C518] inline-block pb-1">Symptoms Of Poisoning</h4>
              <p className="text-lg font-medium leading-relaxed">Nausea, vomiting, headache and irritation to the bronchi, eyes and lungs may occur.</p>
            </div>
          </div>

          <div>
            <h4 className="text-2xl font-black text-[#0B2B1C] mb-4 border-b-2 border-[#F5C518] inline-block pb-1">First Aid</h4>
            <ul className="space-y-3">
              {[
                "If swallowed, induce vomiting by tickling the back of throat. Repeat it until the vomitus is clear. Do not induce vomiting if the patient is unconscious.",
                "If clothing and skin are contaminated, remove the clothes and wash the contaminated skin with cop amount of soap and water.",
                "If eyes are contaminated, flush with plenty of saline/clean water for about 10 to 15 minutes.",
                "If inhaled, remove the patient to fresh air."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-lg font-medium">
                  <span className="text-[#2E7D4F] mt-1">➔</span>{item}
                </li>
              ))}
            </ul>
          </div>
          
          <p className="text-xs text-[#1F2A24]/60 italic mt-8 border-t border-[#0B2B1C]/10 pt-4">
            WARRANTY: ‘As the usage of the product is not done under our control, we assure our uniform quality of the product only. We don’t take any other responsibility.’
          </p>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-20 px-6 lg:px-12 bg-[#F7F3E8] text-center border-t border-[#0B2B1C]/10">
        <h3 className="text-3xl md:text-4xl font-black text-[#0B2B1C] mb-8">
          Interested in SUNVET-DF (Sulphur 80% WDG)?
        </h3>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link href="/contact" className="px-10 py-4 bg-[#2E7D4F] text-white text-xl font-bold rounded-lg shadow-xl hover:bg-[#0B2B1C] transition-colors">
            Request a Quote
          </Link>
          <a href="https://wa.me/919920878518" target="_blank" rel="noopener noreferrer" className="px-10 py-4 bg-[#25D366] text-white text-xl font-bold rounded-lg shadow-xl hover:bg-[#1DA851] transition-colors">
            WhatsApp Us
          </a>
        </div>
      </section>

    </main>
  );
}