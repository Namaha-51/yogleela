"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import ProductCTA from "@/app/components/ProductCTA";

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
        <div className="space-y-16">
          
          {/* KEY FUNCTIONS */}
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
                  <span className="text-[#2E7D4F] mt-1">➔</span>{item}
                </li>
              ))}
            </ul>
          </div>

          {/* QUANTITATIVE & QUALITATIVE IMPROVEMENT */}
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
                    <span className="text-[#2E7D4F] mt-1">➔</span>{item}
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
                    <span className="text-[#2E7D4F] mt-1">➔</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* APPLICATION */}
          <div>
            <h4 className="text-2xl font-black text-[#0B2B1C] mb-4 border-b-2 border-[#F5C518] inline-block pb-1">Application</h4>
            <p className="text-lg font-medium leading-relaxed mb-4">
              <strong>Time:</strong> It is most suitable for giving with 1st or 2nd fertilizer top dressing.
            </p>
            <p className="text-lg font-medium leading-relaxed">
              <strong>Method:</strong> Use 1 kg everyday through drip OR after every alternate day OR divide it with every liquid fertilizer dose. Use 3 kg of ‘Cosmic Fertile’ per acre, Close one line of drip & See the difference…
            </p>
          </div>

          {/* CROPS BENEFITTED */}
          <div>
            <h4 className="text-2xl font-black text-[#0B2B1C] mb-8 border-b-2 border-[#F5C518] inline-block pb-1">Crops Benefitted</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "Paddy", desc: "Increase of yield by 15-20%, more productive tillers, optimum fibrous root growth, bold & shiny grass." },
                { name: "Groundnut", desc: "Stimulates root growth, enhances nodulation for nitrogen fixation, improves shelling/kernel size, increases yield by 15-20%." },
                { name: "Mustard", desc: "Increases branches and photosynthetic area, significantly higher oil yield and seed oil content." },
                { name: "Chilly", desc: "Stimulates root growth, enhances shelf life, reduces storage losses, increases yield by 20-35%." },
                { name: "Grapes", desc: "Increases yield by 10-25%, optimum growth of berry bunch. Recommended: 3.0 kg/acre at 25-30 days after April & October pruning." },
                { name: "Sugarcane", desc: "Enhances tillering, internode elongation, stalk girth, and commercial cane sugar % (CCS). Yield increases by 10-25%." },
                { name: "Banana", desc: "Significant effect on hands and fingers development. Recommended dose: 1st - 2.5g per plant at 30-35 Days after Planting." },
                { name: "Wheat", desc: "Increased root growth, more productive tillers, significant increase of protein in wheat grains, increased grain yield." },
                { name: "Bt Cotton", desc: "Improves nutrient uptake to meet higher requirements. Increases weight of final product and yield by 20-25%." },
                { name: "Soyabean", desc: "Improves root growth, nitrogen fixation, leaf size for photosynthesis, and oil content in seeds." },
                { name: "Potato", desc: "Stimulates root growth and development. Increases yield by 20-35%." },
                { name: "Onion", desc: "Helps root mass growth, thinner neck of bulbs, better shelf life. Increases yield by 15-30%." }
              ].map((crop, i) => (
                <div key={i} className="bg-[#F7F3E8] p-6 rounded-xl shadow-sm border border-[#0B2B1C]/5 hover:shadow-md transition-shadow">
                  <h5 className="text-xl font-bold text-[#2E7D4F] mb-2">{crop.name}</h5>
                  <p className="text-[15px] font-medium text-[#1F2A24]/90 leading-relaxed">{crop.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-center font-bold text-[#0B2B1C] mt-8 text-lg">
              AND MANY MORE PRODUCTS CAN BE ADDED TO THIS CATEGORY...........
            </p>
          </div>

          {/* DIRECTION OF USE & PRECAUTIONS */}
          <div className="space-y-12 border-t border-[#0B2B1C]/10 pt-12">
            <div>
              <h4 className="text-2xl font-black text-[#0B2B1C] mb-4 border-b-2 border-[#F5C518] inline-block pb-1">Direction of Use</h4>
              <p className="text-lg font-medium leading-relaxed mb-4">
                Sulphur is not recommended for application on sulphur "shy" vegetables e.g. cucurbits etc. and certain variety apples, pears and other fruits where high temp (85 deg F or 30 deg. C) prevail sulphur will be phytotoxic.
              </p>
              <p className="text-lg font-medium leading-relaxed">
                <strong>Plant Protection equipment:</strong> Knapsack sprayer, Foot sprayer, Compression Knapsack sprayer with flat fan / flood jet nozzle
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
                <h4 className="text-2xl font-black text-[#0B2B1C] mb-4 border-b-2 border-[#F5C518] inline-block pb-1">Symptoms of Poisoning</h4>
                <p className="text-lg font-medium leading-relaxed">Nausea, vomiting, headache and irritation to the bronchii, eyes and lungs may occur.</p>
              </div>
            </div>

            <div>
              <h4 className="text-2xl font-black text-[#0B2B1C] mb-4 border-b-2 border-[#F5C518] inline-block pb-1">First Aid</h4>
              <ul className="space-y-3">
                {[
                  "If swallowed, induce vomiting by tickling the back of throat. Repeat it until the vomitus is clear. Do not induce vomiting if the patient is unconscious.",
                  "If clothing and skin are contaminated, remove the clothes and wash the contaminated skin with copious amount of soap and water.",
                  "If eyes are contaminated, flush with plenty of saline/clean water for about 10 to 15 minutes.",
                  "If inhaled, remove the patient to fresh air."
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

     <ProductCTA productName="COSMIC FERTILE (Sulphur 90% WDG)" />
    </main>
  );
}

