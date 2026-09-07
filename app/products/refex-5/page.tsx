"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Refex5Page() {
  return (
    <main className="min-h-screen bg-white text-[#1F2A24] selection:bg-[#F5C518] selection:text-[#0B2B1C] pt-20">
      
      <section className="w-full py-16 md:py-24 px-6 lg:px-12 relative overflow-hidden shadow-inner bg-[#4c0353]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
          <div className="md:w-1/2 text-white">
            <motion.h1 initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="text-5xl md:text-6xl font-black mb-4 tracking-tight drop-shadow-md">
              REFEX 5
            </motion.h1>
            <motion.h2 initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="text-2xl md:text-3xl font-bold text-white/90 mb-8">
              (Fipronil 5% SC)
            </motion.h2>
            
            <div className="flex items-center gap-2 text-sm font-bold text-white/70 uppercase tracking-widest">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>›</span>
              <Link href="/products" className="hover:text-white transition-colors">Products</Link>
              <span>›</span>
              <span className="text-white">REFEX 5</span>
            </div>
          </div>
          
         <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg h-72 md:h-[400px] flex items-center justify-center">
              <img 
                src="/images/refex.png" 
                alt="refex" 
                className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.4)] hover:scale-105 transition-transform duration-700" 
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12 max-w-5xl mx-auto">
        <div className="space-y-12">
          <div>
            <p className="text-lg font-medium leading-relaxed">
              Fipronil 5% SC is an insecticide which is used to control insects like stem borer, brown plant hopper, green leaf hopper, rice leaf folder, rice gall midge, white backed plant hopper, whorl maggot in rice. DBM in cabbage thrips, aphids and fruit borer in chills, early shoot borer and root borer in sugarcane and Aphids, jassids, Thrips, White fly and boll worm in cotton.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-2xl font-black text-[#0B2B1C] mb-4 border-b-2 border-[#F5C518] inline-block pb-1">Direction of Use</h4>
              <p className="text-lg font-medium leading-relaxed">
                Plant Protection Equipment: high volume nozzle fitted to sprayers like knap-sack, Air pressure Foot Pump, Hard rocker or power operated spraying machine may be used.
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-black text-[#0B2B1C] mb-4 border-b-2 border-[#F5C518] inline-block pb-1">Time of Application</h4>
              <p className="text-lg font-medium leading-relaxed">
                <strong>Rice:</strong> The Fipronil application must be given between 25 to 30 days after transplanting.<br/>
                <strong>Cabbage & Chilli:</strong> First spray is to be given at 30 to 50 days after transplanting or when pest incidence is noticed. Repeat 2 to 3 sprays at 7 to 10 days interval.<br/>
                <strong>Sugarcane:</strong> For earlier shoot borer foliar application at 35 days after planting (DAP) and for root borer drenching of soil at planting.
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-2xl font-black text-[#0B2B1C] mb-4 border-b-2 border-[#F5C518] inline-block pb-1">Precautions</h4>
            <ul className="space-y-3">
              {[
                "Keep away from foodstuffs, empty foodstuff containers and animals food.",
                "Avoid contact with mouth, eyes and skin.",
                "Avoid inhalation of the spray mist. Spray in the direction of wind.",
                "Wash thoroughly the contaminated clothes and parts of the body after spraying.",
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
              <h4 className="text-2xl font-black text-[#0B2B1C] mb-4 border-b-2 border-[#F5C518] inline-block pb-1">Symptoms Of Poisoning</h4>
              <p className="text-lg font-medium leading-relaxed">Irritability, lethargy, muscle tremors, convulsions may occur.</p>
            </div>
            <div>
              <h4 className="text-2xl font-black text-[#0B2B1C] mb-4 border-b-2 border-[#F5C518] inline-block pb-1">Phytotoxicity & Antidote</h4>
              <p className="text-lg font-medium leading-relaxed">No specific antidote is known. Treat symptomatically.</p>
            </div>
          </div>

          <p className="text-xs text-[#1F2A24]/60 italic mt-8 border-t border-[#0B2B1C]/10 pt-4">
            WARRANTY: ‘As the usage of the product is not done under our control, we assure our uniform quality of the product only. We don’t take any other responsibility.’
          </p>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12 bg-[#F7F3E8] text-center border-t border-[#0B2B1C]/10">
        <h3 className="text-3xl md:text-4xl font-black text-[#0B2B1C] mb-8">Interested in REFEX 5?</h3>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link href="/contact" className="px-10 py-4 bg-[#2E7D4F] text-white text-xl font-bold rounded-lg shadow-xl hover:bg-[#0B2B1C] transition-colors">Request a Quote</Link>
          <a href="https://wa.me/919920878518" target="_blank" rel="noopener noreferrer" className="px-10 py-4 bg-[#25D366] text-white text-xl font-bold rounded-lg shadow-xl hover:bg-[#1DA851] transition-colors">WhatsApp Us</a>
        </div>
      </section>
    </main>
  );
}