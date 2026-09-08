"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import ProductCTA from "@/app/components/ProductCTA";


export default function SulphurRubberPage() {
  return (
    <main className="min-h-screen bg-white text-[#1F2A24] selection:bg-[#F5C518] selection:text-[#0B2B1C] pt-20">
      
      <section className="w-full py-16 md:py-24 px-6 lg:px-12 relative overflow-hidden shadow-inner bg-[#291671]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
          <div className="md:w-1/2 text-white">
            <motion.h1 initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="text-5xl md:text-6xl font-black mb-4 tracking-tight drop-shadow-md">
              SULPHUR POWDER
            </motion.h1>
            <motion.h2 initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="text-2xl md:text-3xl font-bold text-white/90 mb-8">
              (Rubber, Tyre & Microfine Grade)
            </motion.h2>
            
            <div className="flex items-center gap-2 text-sm font-bold text-white/70 uppercase tracking-widest">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>›</span>
              <Link href="/products" className="hover:text-white transition-colors">Products</Link>
              <span>›</span>
              <span className="text-white">Rubber Grade</span>
            </div>
          </div>
          
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg h-72 md:h-[400px] flex items-center justify-center">
              <img 
                src="/images/sulphurrubber.png" 
                alt="Rubber Grade Sulphur" 
                className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.4)] hover:scale-105 transition-transform duration-700" 
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12 max-w-5xl mx-auto">
        <div className="space-y-12">
          
          <div>
            <h4 className="text-2xl font-black text-[#0B2B1C] mb-4 border-b-2 border-[#F5C518] inline-block pb-1">Vulcanization & Rubber Manufacturing</h4>
            <p className="text-lg font-medium leading-relaxed mb-4">
              Rubber is the main raw material used in manufacturing of tires, and both natural & synthetic rubber is used. In rubber molecules the cross linking between the chains are very less. This leads to the softness in the rubber. 
            </p>
            <p className="text-lg font-medium leading-relaxed mb-4">
              To make the rubber hard, it is treated with sulphur, & this process is known as <strong>vulcanization</strong>. When sulphur reacts with the natural rubber then it increases the cross linking between the molecules in the rubber. It also forms many sulphide bonds. 
            </p>
            <p className="text-lg font-medium leading-relaxed">
              Due to formation of many new cross linking and many sulphide bonds the natural rubber becomes hard. This vulcanized rubber has better elasticity at low as well as at high temperature. It also neither becomes soft nor brittle.
            </p>
          </div>

          <div>
            <h4 className="text-2xl font-black text-[#0B2B1C] mb-4 border-b-2 border-[#F5C518] inline-block pb-1">Harvesting Process</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-lg font-medium bg-[#F7F3E8] p-4 rounded-xl border border-[#0B2B1C]/5 shadow-sm">
                <span className="text-[#2E7D4F] mt-1 text-xl">➔</span>
                <div>
                  <strong className="block text-[#0B2B1C] mb-1">Cutting the Sloping Inclusion</strong>
                  <span className="text-[#1F2A24]/80 text-base">The initial step of scoring the rubber tree bark to access the natural latex vessels.</span>
                </div>
              </li>
              <li className="flex items-start gap-3 text-lg font-medium bg-[#F7F3E8] p-4 rounded-xl border border-[#0B2B1C]/5 shadow-sm">
                <span className="text-[#2E7D4F] mt-1 text-xl">➔</span>
                <div>
                  <strong className="block text-[#0B2B1C] mb-1">Collecting the Latex</strong>
                  <span className="text-[#1F2A24]/80 text-base">Gathering the raw latex as it drips from the cuts, readying it for the vulcanization process with sulphur.</span>
                </div>
              </li>
            </ul>
          </div>

          <p className="text-xs text-[#1F2A24]/60 italic mt-8 border-t border-[#0B2B1C]/10 pt-4">
            WARRANTY: ‘As the usage of the product is not done under our control, we assure our uniform quality of the product only. We don’t take any other responsibility.’
          </p>
        </div>
      </section>

      <ProductCTA productName="SULPHUR POWDER (Rubber, Tyre & Microfine Grade)" />
    </main>
  );
}
