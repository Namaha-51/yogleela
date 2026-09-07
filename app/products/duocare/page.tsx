"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function DuocarePage() {
  return (
    <main className="min-h-screen bg-white text-[#1F2A24] selection:bg-[#F5C518] selection:text-[#0B2B1C] pt-20">
      
      <section className="w-full py-16 md:py-24 px-6 lg:px-12 relative overflow-hidden shadow-inner bg-[#162c7a]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
          <div className="md:w-1/2 text-white">
            <motion.h1 initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="text-5xl md:text-6xl font-black mb-4 tracking-tight drop-shadow-md">
              DUOCARE
            </motion.h1>
            <motion.h2 initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="text-2xl md:text-3xl font-bold text-white/90 mb-8">
              (Sulphur 65%+ Tebuconazole 10% WG)
            </motion.h2>
            
            <div className="flex items-center gap-2 text-sm font-bold text-white/70 uppercase tracking-widest">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>›</span>
              <Link href="/products" className="hover:text-white transition-colors">Products</Link>
              <span>›</span>
              <span className="text-white">DUOCARE</span>
            </div>
          </div>
          
         <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg h-72 md:h-[400px] flex items-center justify-center">
              <img 
                src="/images/duocare.png" 
                alt="duocare" 
                className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.4)] hover:scale-105 transition-transform duration-700" 
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12 max-w-5xl mx-auto">
        <div className="mb-16">
          <p className="text-xl font-medium text-[#1F2A24] mb-6 leading-relaxed">
            Tebuconazole 10% Sulphur 65% WG (water dispersible granule) is a effective fungicide with protective, curative and eradicative action. It controls powdery mildew, fruit rot diseases of Chilli and leaf spot, pod blight disease of Soybean[cite: 11].
          </p>
        </div>

        <div className="mb-16 overflow-x-auto">
          <h4 className="text-2xl font-black text-[#0B2B1C] mb-4 border-b-2 border-[#F5C518] inline-block pb-1">Recommendation</h4>
          <table className="w-full border-collapse bg-[#F7F3E8] rounded-xl overflow-hidden shadow-md text-left mt-4 min-w-[800px]">
            <thead className="bg-[#0B2B1C] text-white">
              <tr>
                <th className="p-4 font-bold text-sm uppercase tracking-wider">Crop(s)</th>
                <th className="p-4 font-bold text-sm uppercase tracking-wider">Name of Disease</th>
                <th className="p-4 font-bold text-sm uppercase tracking-wider">Dosages/Ha (a.i. Kg)</th>
                <th className="p-4 font-bold text-sm uppercase tracking-wider">Formulation (Kg)</th>
                <th className="p-4 font-bold text-sm uppercase tracking-wider">Dilution in (Ltr)</th>
                <th className="p-4 font-bold text-sm uppercase tracking-wider">Waiting Period (Days)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#0B2B1C]/10">
              {[
                ["Chilli", "Powdery Mildew and Fruit Oil", "0.125+0.813", "1.25", "600", "5"],
                ["Cowpea, Gaur, Pea", "Leaf Spot and Pot Blight", "0.125+0.813", "1.25", "500", "26"],
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

        <div className="space-y-12">
          <div>
            <h4 className="text-2xl font-black text-[#0B2B1C] mb-4 border-b-2 border-[#F5C518] inline-block pb-1">Precautions & First Aid</h4>
            <ul className="space-y-3 mb-6">
              {[
                "Keep away from foodstuffs, empty foodstuff containers and animal food.",
                "The user should use appropriate protective clothing like hat, long shirt, long pant and shoes.",
                "Avoid contact with eyes and skin while handling the product.",
                "Do not drink, eat or smoke during application.",
                "Remove contaminated clothes and wash before re-use.",
                "Wash thoroughly the contaminated clothes & parts of the body with soap and water after work."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-lg font-medium">
                  <span className="text-[#2E7D4F] mt-1">➔</span>{item}
                </li>
              ))}
            </ul>
            <p className="text-lg font-medium leading-relaxed">
              <strong>Symptoms of Poisoning:</strong> Headache, dizziness, weakness, nausea, sore throat, chest pain, lightheadedness, sneezing, coughing and may cause irritation of skin mucous membranes[cite: 11].
            </p>
            <p className="text-lg font-medium leading-relaxed mt-4">
              <strong>First Aid:</strong> If splashed into eyes, wash with plenty of water. Remove contaminated clothing and wash affected parts with soap and water. If the chemical is inhaled, get the victim into fresh air. Do not induce vomiting, Allow the patient to consume 1-2 glass of water[cite: 11].
            </p>
          </div>
          
          <p className="text-xs text-[#1F2A24]/60 italic mt-8 border-t border-[#0B2B1C]/10 pt-4">
            WARRANTY: ‘As the usage of the product is not done under our control, we assure our uniform quality of the product only. We don’t take any other responsibility.’
          </p>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12 bg-[#F7F3E8] text-center border-t border-[#0B2B1C]/10">
        <h3 className="text-3xl md:text-4xl font-black text-[#0B2B1C] mb-8">Interested in DUOCARE?</h3>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link href="/contact" className="px-10 py-4 bg-[#2E7D4F] text-white text-xl font-bold rounded-lg shadow-xl hover:bg-[#0B2B1C] transition-colors">Request a Quote</Link>
          <a href="https://wa.me/919920878518" target="_blank" rel="noopener noreferrer" className="px-10 py-4 bg-[#25D366] text-white text-xl font-bold rounded-lg shadow-xl hover:bg-[#1DA851] transition-colors">WhatsApp Us</a>
        </div>
      </section>
    </main>
  );
}