"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import ProductCTA from "@/app/components/ProductCTA";

export default function ConcuroPage() {
  return (
    <main className="min-h-screen bg-white text-[#1F2A24] selection:bg-[#F5C518] selection:text-[#0B2B1C] pt-20">
      
      <section className="w-full py-16 md:py-24 px-6 lg:px-12 relative overflow-hidden shadow-inner bg-[#162c7a]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
          <div className="md:w-1/2 text-white">
            <motion.h1 initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="text-5xl md:text-6xl font-black mb-4 tracking-tight drop-shadow-md">
              CONCURO 5
            </motion.h1>
            <motion.h2 initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="text-2xl md:text-3xl font-bold text-white/90 mb-8">
              (Hexaconazole 5% SC)
            </motion.h2>
            
            <div className="flex items-center gap-2 text-sm font-bold text-white/70 uppercase tracking-widest">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>›</span>
              <Link href="/products" className="hover:text-white transition-colors">Products</Link>
              <span>›</span>
              <span className="text-white">CONCURO 5</span>
            </div>
          </div>
          
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg h-72 md:h-[400px] flex items-center justify-center">
              <img 
                src="/images/concuro-5.png" 
                alt="concuro-5" 
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
              Tebuconazole 10% Sulphur 65% WG (water dispersible granule) is a effective fungicide with protective, creative and eradicative action. It controls powdery mildew, fruit rot diseases of Chilli and leaf spot, pod blight disease of Soybean.
            </p>
          </div>

          <div>
            <h4 className="text-2xl font-black text-[#0B2B1C] mb-4 border-b-2 border-[#F5C518] inline-block pb-1">Direction of Use</h4>
            <div className="text-lg font-medium leading-relaxed space-y-4">
              <p>
                <strong>(a) Preparation of spray Mixture:</strong> Take the required quantity of Hexaconazole 5% SC dilute with a little water as per spray plume required and mixed well again by stirring.
              </p>
              <p>
                <strong>(b) Plant Protection Equipment:</strong> The most commonly used sprayer are Bucket pump sprayer, Stirrup pump sprayer, Rocking sprayer, Foot sprayer, Wheel barrow sprayer, Compression knapsack sprayer, Compression knapsack battery sprayer and ASPEE HTP power sprayer. 
                <br/><br/>
                <strong>COMPATIBILITY:</strong> Hexaconazole 5% SC is compatible with the commonly used insecticide and fungicides.
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-2xl font-black text-[#0B2B1C] mb-4 border-b-2 border-[#F5C518] inline-block pb-1">Precautions</h4>
            <ul className="space-y-3">
              {[
                "Keep away from foodstuffs, empty foodstuff containers and animal food",
                "Avoid contact with mouth, eyes and skin.",
                "Avoid inhalation the spray mist. Spray in the direction of wind.",
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
              <h4 className="text-2xl font-black text-[#0B2B1C] mb-4 border-b-2 border-[#F5C518] inline-block pb-1">Symptoms Of Poisoning</h4>
              <p className="text-lg font-medium leading-relaxed">Nervousness, Anxiety, tremors, convulsions, allergic manifestations may occur.</p>
            </div>
            <div>
              <h4 className="text-2xl font-black text-[#0B2B1C] mb-4 border-b-2 border-[#F5C518] inline-block pb-1">Antidote</h4>
              <p className="text-lg font-medium leading-relaxed">No specific antidote. Treat symptomatically</p>
            </div>
          </div>

          <div>
            <h4 className="text-2xl font-black text-[#0B2B1C] mb-4 border-b-2 border-[#F5C518] inline-block pb-1">First Aid</h4>
            <ul className="space-y-3">
              {[
                "If swallowed, induce vomiting by tickling the back of throat. Repeat it until the vomitus is clear. Do not induce vomiting if the patient is unconscious.",
                "If clothing and skin are contaminated, remove the clothes and wash the contaminated skin with copious amount of soap and water.",
                "If eyes are contaminated, flush with plenty of saline/clean water for about 10 to 15 minutes.",
                "If inhaled, remove the patient to fresh air"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-lg font-medium">
                  <span className="text-[#2E7D4F] mt-1">➔</span>{item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-2xl font-black text-[#0B2B1C] mb-4 border-b-2 border-[#F5C518] inline-block pb-1">Phytotoxicity</h4>
            <p className="text-lg font-medium leading-relaxed">Hexaconazole 5% SC is not phytotoxic when used as per recommendations</p>
          </div>

          <p className="text-xs text-[#1F2A24]/60 italic mt-8 border-t border-[#0B2B1C]/10 pt-4">
            WARRANTY: ‘As the usage of the product is not done under our control, we assure our uniform quality of the product only. We don’t take any other responsibility.’
          </p>
        </div>
      </section>

     <ProductCTA productName="CONCURO 5 (Hexaconazole 5% SC)" />
    </main>
  );
}