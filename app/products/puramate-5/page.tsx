"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import ProductCTA from "@/app/components/ProductCTA";


export default function Puramate5Page() {
  return (
    <main className="min-h-screen bg-white text-[#1F2A24] selection:bg-[#F5C518] selection:text-[#0B2B1C] pt-20">
      
      <section className="w-full py-16 md:py-24 px-6 lg:px-12 relative overflow-hidden shadow-inner bg-[#8a200a]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
          <div className="md:w-1/2 text-white">
            <motion.h1 initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="text-5xl md:text-6xl font-black mb-4 tracking-tight drop-shadow-md">
              PuraMate 5
            </motion.h1>
            <motion.h2 initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="text-2xl md:text-3xl font-bold text-white/90 mb-8">
              (Emamectin Benzoate 5%)
            </motion.h2>
            
            <div className="flex items-center gap-2 text-sm font-bold text-white/70 uppercase tracking-widest">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>›</span>
              <Link href="/products" className="hover:text-white transition-colors">Products</Link>
              <span>›</span>
              <span className="text-white">PuraMate 5</span>
            </div>
          </div>
          
         <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg h-72 md:h-[400px] flex items-center justify-center">
              <img 
                src="/images/puremate.png" 
                alt="puramate" 
                className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.4)] hover:scale-105 transition-transform duration-700" 
              />
            </div>
          </motion.div>
        </div>
      </section>

     <section className="py-20 px-6 lg:px-12 max-w-5xl mx-auto">
        <div className="space-y-12">
          
          <div>
            <h4 className="text-2xl font-black text-[#0B2B1C] mb-4 border-b-2 border-[#F5C518] inline-block pb-1">Emamectin Benzoate 5% SG</h4>
            <p className="text-lg font-medium leading-relaxed">
              Emamectin benzoate 5% SG is a water soluble granular formulation containing 5% active ingredient and is recommended for the control of Bollworms on cotton, Fruit and shoot borer on okra, DBM on cabbage, Fruit borer, thrips, mites on chilli, fruit and shoot borer on brinjal, pod borer on red gram, chickpea Grapes-Thrips and Tea – Tea looper. It is an insecticide with stomach action and should be ingested by the larvae to be most effective. Affected larvae become paralyzed and stop feeding shortly after exposure to Emamectin Benzoate 5% SG and subsequently die after 2-4 days.
            </p>
          </div>

          <div>
            <h4 className="text-2xl font-black text-[#0B2B1C] mb-4 border-b-2 border-[#F5C518] inline-block pb-1">Direction to use</h4>
            <p className="text-lg font-medium leading-relaxed">
              Apply the insecticides when the incidence of larvae is first observed and repeat applications as necessary, apply the insecticide in sufficient quantity of water to ensure through coverage of the foliage. Emamectin benzoate 5% SG is toxic to Aquaculture and Honey bees.
            </p>
          </div>

          <div>
            <h4 className="text-2xl font-black text-[#0B2B1C] mb-4 border-b-2 border-[#F5C518] inline-block pb-1">Precaution</h4>
            <p className="text-lg font-medium leading-relaxed">
              Do not use cooking utensils for preparing the spray solution. Use stick for stirring the spray solution. Avoid contact with skin, eye and clothing. Avoid inhalation of fog and vapours. Wear hand gloves to avoid contact with the skin. Wear protective clothing, mask, goggles and boots while handling the product. Do not eat, drink or smoke while applying the product. Wash hands with soap and plenty of water and change clothes after the work is over. Avoid contamination of air and water bodies with the insecticides. Also wash the contaminated clothes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-2xl font-black text-[#0B2B1C] mb-4 border-b-2 border-[#F5C518] inline-block pb-1">Symptoms Of Poisoning</h4>
              <p className="text-lg font-medium leading-relaxed">Early symptoms of poisoning may be a combination of dilation of pupils, muscular in coordination, ataxia and muscle tremors.</p>
            </div>
            <div>
              <h4 className="text-2xl font-black text-[#0B2B1C] mb-4 border-b-2 border-[#F5C518] inline-block pb-1">Antidote</h4>
              <p className="text-lg font-medium leading-relaxed">No specific antidote. Treat symptomatically.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-2xl font-black text-[#0B2B1C] mb-4 border-b-2 border-[#F5C518] inline-block pb-1">Phytotoxicity</h4>
              <p className="text-lg font-medium leading-relaxed">Early symptoms may be a combination of dilation of pupils, muscular in coordination, ataxia and muscle tremors.</p>
            </div>
            <div>
              <h4 className="text-2xl font-black text-[#0B2B1C] mb-4 border-b-2 border-[#F5C518] inline-block pb-1">First Aid</h4>
              <p className="text-lg font-medium leading-relaxed mb-4">
                Remove the affected person to a well ventilated area or fresh air and protect him from under cooling. Remove contaminated clothing and give patient one or two glasses of water, if able to swallow. Do not induce vomiting. Get the attention of the medical doctor immediately.
              </p>
              <p className="text-lg font-bold text-[#8E1B1B] leading-relaxed bg-[#8E1B1B]/10 p-4 rounded-lg">
                Note: Do not induce vomiting or never give anything by mouth to an unconscious person.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-2xl font-black text-[#0B2B1C] mb-4 border-b-2 border-[#F5C518] inline-block pb-1">Disposal Of Used Container</h4>
              <ul className="space-y-3">
                {[
                  "Packages or surplus materials and washing from the machines and containers should be disposed off in safe manner so as to prevent environmental and water pollution.",
                  "The used packages shall not be left outside to prevent their re-use.",
                  "Packages shall be broken and buried away from habitation."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-lg font-medium">
                    <span className="text-[#2E7D4F] mt-1">➔</span>{item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-2xl font-black text-[#0B2B1C] mb-4 border-b-2 border-[#F5C518] inline-block pb-1">Storage Conditions</h4>
              <ul className="space-y-3">
                {[
                  "The package containing the insecticide should be stored in original containers in separate rooms or premises away from the rooms or premises used for storing other articles particularly articles of food or shall be kept in separate almirahs under lock and key.",
                  "The rooms or premises meant for storing the fungicide shall be well built, airy, well lit and ventilated and of sufficient dimension to avoid contamination with vapour.",
                  "The product is toxic to aqua culture & honeybee."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-lg font-medium">
                    <span className="text-[#2E7D4F] mt-1">➔</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <p className="text-xs text-[#1F2A24]/60 italic mt-8 border-t border-[#0B2B1C]/10 pt-4">
            WARRANTY: ‘As the usage of the product is not done under our control, we assure our uniform quality of the product only. We don’t take any other responsibility.’
          </p>
        </div>
      </section>

      <ProductCTA productName="PuraMate 5 (Emamectin Benzoate 5%)" />

    </main>
  );
}