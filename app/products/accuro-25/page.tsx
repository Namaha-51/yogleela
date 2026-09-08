"use client";
import ProductCTA from "@/app/components/ProductCTA";
import Link from 'next/link';
import { motion } from 'framer-motion';


export default function AccuroPage() {
  return (
    <main className="min-h-screen bg-white text-[#1F2A24] selection:bg-[#F5C518] selection:text-[#0B2B1C] pt-20">
      
      <section className="w-full py-16 md:py-24 px-6 lg:px-12 relative overflow-hidden shadow-inner bg-[#466b1f]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
          <div className="md:w-1/2 text-white">
            <motion.h1 initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="text-5xl md:text-6xl font-black mb-4 tracking-tight drop-shadow-md">
              AccuRo 25
            </motion.h1>
            <motion.h2 initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="text-2xl md:text-3xl font-bold text-white/90 mb-8">
              (Thiamethoxam 25%)
            </motion.h2>
            
            <div className="flex items-center gap-2 text-sm font-bold text-white/70 uppercase tracking-widest">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>›</span>
              <Link href="/products" className="hover:text-white transition-colors">Products</Link>
              <span>›</span>
              <span className="text-white">AccuRo 25</span>
            </div>
          </div>
          
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg h-72 md:h-[400px] flex items-center justify-center">
              <img 
                src="/images/accuro-25.png" 
                alt="accuro-25" 
                className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.4)] hover:scale-105 transition-transform duration-700" 
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12 max-w-5xl mx-auto">
        <div className="space-y-12">
          
          <div>
            <h4 className="text-2xl font-black text-[#0B2B1C] mb-4 border-b-2 border-[#F5C518] inline-block pb-1">Thiamethoxam 25%</h4>
            <p className="text-lg font-medium leading-relaxed">
              Thiamethoxam 25 % WG is broad spectrum systemic insecticide having quick stomach and contact action and is recommended for its use to control stem borer, Gall Midge, Leaf Folder, brown plant hopper (BHP), white Backed plant hopper (WBPH), Green leaf hopper (GLH) Thrips in rice.
            </p>
            <p className="text-lg font-medium leading-relaxed mt-4">
              It also controls jassids, aphids and whiteflies in cotton; hoppers in mango, aphids in Wheat, aphids in Mustard; Whiteflies in Tomato, Whiteflies, Jassids in Brinjal, mosquito bug in Tea, aphids in Potato, Psylla in citrus, aphid in Cumin, and soil drench in Rice (Nursery). It contains 250g Thiamethoxam as an active ingredient in a kg of the product (w/w).
            </p>
          </div>

          <p className="text-xs text-[#1F2A24]/60 italic mt-8 border-t border-[#0B2B1C]/10 pt-4">
            WARRANTY: ‘As the usage of the product is not done under our control, we assure our uniform quality of the product only. We don’t take any other responsibility.’
          </p>
        </div>
      </section>
      <ProductCTA productName="AccuRo 25 (Thiamethoxam 25%)"/>
    </main>
  );
}