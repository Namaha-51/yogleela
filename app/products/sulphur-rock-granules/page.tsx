"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import ProductCTA from "@/app/components/ProductCTA";


export default function SulphurRockPage() {
  return (
    <main className="min-h-screen bg-white text-[#1F2A24] selection:bg-[#F5C518] selection:text-[#0B2B1C] pt-20">
      
      <section className="w-full py-16 md:py-24 px-6 lg:px-12 relative overflow-hidden shadow-inner bg-[#344936]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
          <div className="md:w-1/2 text-white">
            <motion.h1 initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="text-5xl md:text-6xl font-black mb-4 tracking-tight drop-shadow-md">
              SULPHUR ROCK
            </motion.h1>
            <motion.h2 initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="text-2xl md:text-3xl font-bold text-white/90 mb-8">
              (Granules / Pallets)
            </motion.h2>
            
            <div className="flex items-center gap-2 text-sm font-bold text-white/70 uppercase tracking-widest">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>›</span>
              <Link href="/products" className="hover:text-white transition-colors">Products</Link>
              <span>›</span>
              <span className="text-white">Sulphur Rock</span>
            </div>
          </div>
          
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg h-72 md:h-[400px] flex items-center justify-center">
              <img 
                src="/images/sulphurrock.png" 
                alt="Sulphur Rock and Granules" 
                className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.4)] hover:scale-105 transition-transform duration-700" 
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12 max-w-5xl mx-auto">
        <div className="space-y-8">
          <div>
            <h4 className="text-2xl font-black text-[#0B2B1C] mb-4 border-b-2 border-[#F5C518] inline-block pb-1">Direction of Use</h4>
            <p className="text-lg font-medium leading-relaxed mb-4">
              Sulphur is used in many other industries like sugar, starch, khandsari and many chemical industries like in the preparation of sulphuric acid.
            </p>
            <p className="text-lg font-medium leading-relaxed mb-4">
              <strong>Sulphitation Process:</strong> Sulphur is used in the process of sulphitation in the sugar industry. Sulphitation is the practice of adding sulphur dioxide (SO2) to process streams in a sugar factory. Sulphur is burned to form SO2 to be used in the sulphitation process.
            </p>
            <p className="text-lg font-medium leading-relaxed mb-4">
              The basic reaction is S + O2 = SO2 where the oxygen is supplied by atmospheric air.
            </p>
            <p className="text-lg font-medium leading-relaxed">
              Sulphur dioxide is used by sugar beet processors in the sugar industry to reduce & prevent color formation in white refined sugar. It is basically used for refining & decolorising sugar in the sugar industry.
            </p>
          </div>
          
          <p className="text-xs text-[#1F2A24]/60 italic mt-8 border-t border-[#0B2B1C]/10 pt-4">
            WARRANTY: ‘As the usage of the product is not done under our control, we assure our uniform quality of the product only. We don’t take any other responsibility.’
          </p>
        </div>
      </section>

      <ProductCTA productName="SULPHUR ROCK / GRANULES / PALLETS" />
    </main>
  );
}