"use client";

import Link from 'next/link';
import ProductCTA from "@/app/components/ProductCTA";
import { motion } from 'framer-motion';

export default function BluetoxPage() {
  return (
    <main className="min-h-screen bg-white text-[#1F2A24] selection:bg-[#F5C518] selection:text-[#0B2B1C] pt-20">
      
      <section className="w-full py-16 md:py-24 px-6 lg:px-12 relative overflow-hidden shadow-inner bg-[#005c45]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
          <div className="md:w-1/2 text-white">
            <motion.h1 initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="text-5xl md:text-6xl font-black mb-4 tracking-tight drop-shadow-md">
              BLUETOX 50
            </motion.h1>
            <motion.h2 initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="text-2xl md:text-3xl font-bold text-white/90 mb-8">
              (Copper Oxychloride 50%)
            </motion.h2>
            
            <div className="flex items-center gap-2 text-sm font-bold text-white/70 uppercase tracking-widest">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>›</span>
              <Link href="/products" className="hover:text-white transition-colors">Products</Link>
              <span>›</span>
              <span className="text-white">BLUETOX 50</span>
            </div>
          </div>
          
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg h-72 md:h-[400px] flex items-center justify-center">
              <img 
                src="/images/bluetox-50.png" 
                alt="bluetox-50" 
                className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.4)] hover:scale-105 transition-transform duration-700" 
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12 max-w-5xl mx-auto">
        <div className="mb-16">
          <p className="text-xl font-medium text-[#1F2A24] mb-6 leading-relaxed">
            It is highly effective fungicide based on copper oxy chloride containing 50% w/w copper content and balance adjuvants.
          </p>
        </div>

        <div className="mb-16 overflow-x-auto">
          <h4 className="text-2xl font-black text-[#0B2B1C] mb-4 border-b-2 border-[#F5C518] inline-block pb-1">Recommendation</h4>
          <table className="w-full border-collapse bg-[#F7F3E8] rounded-xl overflow-hidden shadow-md text-left mt-4 min-w-[700px]">
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
                ["Banana", "Leaf Spot / Fruit Rot", "1.25", "2.50", "750-1000"],
                ["Betel", "Leaf Spot / Fruit Rot", "1.25", "2.50", "750-1000"],
                ["Chillies", "Leaf Spot / Fruit Rot", "1.25", "2.50", "750-1000"],
                ["Citrus", "Canker / Foot Rot", "1.25", "2.50", "750-1000"],
                ["Cardamom", "Clump Rot", "1.87-3.75", "3.75-5.5", "750-1000"],
                ["Cardamom", "Leaf Rot", "1.25", "2.50", "750-1000"],
                ["Cumin Paddy", "Blight / Brown Leaf Spot", "1.25", "2.5", "750-1000"],
                ["Coconut Potato", "Bud Rot / Early Blight", "1.25", "2.50", "750-1000"],
                ["Tea", "Blister Blight", "0.21", "0.42", "175"],
                ["Tea", "Black Rot / Red Rust", "0.30", "0.60", "125"],
                ["Tobacco", "Frog Eye Leaf / Black Shank / Downy Mildew", "1.25", "2.50", "750-1000"],
                ["Tomato", "Early Blight / Late Blight / Leaf Spot", "1.25", "2.50", "750-1000"],
                ["Grapes", "Downy Mildew", "1.50-2.00", "1.875-2.50", "750-1000"]
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
            <h4 className="text-2xl font-black text-[#0B2B1C] mb-4 border-b-2 border-[#F5C518] inline-block pb-1">Time of Application</h4>
            <p className="text-lg font-medium leading-relaxed">
              For the best results apply prophylactically i.e. before disease attack plants, in rainy weather spraying must be repeated at shorter intervals.
            </p>
          </div>

          <div>
            <h4 className="text-2xl font-black text-[#0B2B1C] mb-4 border-b-2 border-[#F5C518] inline-block pb-1">Direction of Use</h4>
            <p className="text-lg font-medium leading-relaxed">
              Knapsack sprayer, foot sprayer, compression knapsack sprayer, compression knapsack battery sprayer and ASPEE-HTP power sprayer. Do not use on fruit trees without addition of shafeners e.g. cotton seed oil to avoid leaf and scorch and re setting.
            </p>
          </div>

          <div>
            <h4 className="text-2xl font-black text-[#0B2B1C] mb-4 border-b-2 border-[#F5C518] inline-block pb-1">Precautions</h4>
            <ul className="space-y-3">
              {[
                "Keep away from foodstuffs, empty foodstuff containers and animal food",
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

          <div>
            <h4 className="text-2xl font-black text-[#0B2B1C] mb-4 border-b-2 border-[#F5C518] inline-block pb-1">Phytotoxicity</h4>
            <p className="text-lg font-medium leading-relaxed">The product is not phytotoxic when used as per field recommendation.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-2xl font-black text-[#0B2B1C] mb-4 border-b-2 border-[#F5C518] inline-block pb-1">Symptoms of Poisoning</h4>
              <p className="text-lg font-medium leading-relaxed">Nausea, vomiting, headache and irritation to the bronchi, eyes and lungs may occur.</p>
            </div>
            <div>
              <h4 className="text-2xl font-black text-[#0B2B1C] mb-4 border-b-2 border-[#F5C518] inline-block pb-1">Antidote</h4>
              <p className="text-lg font-medium leading-relaxed">
                Empty stomach by gastric lavage with milk or preferable solution of Potassium ferrocyanide. Administer egg white and other demulscents. Maintain electrolyte and fluid balance Morphine and Pethidine may be given to control pain. If symptoms persists, give dimercaprol or penicillamine. Penicillamine may be given in the dose of 10-40 mg/kg/day (max. 1-2 gm/day divided into four doses) for five days. Dimercaprol is given in the dose of 3mg/kg every four hours for first four days and 2 mg/kg every 12 hours for a total of 10 days by intravenous route. Give within first four hours of poisoning to obtain maximum benefit.
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-2xl font-black text-[#0B2B1C] mb-4 border-b-2 border-[#F5C518] inline-block pb-1">First Aid</h4>
            <ul className="space-y-3">
              {[
                "If swallowed, induce vomiting by tickling the back of throat. Repeat it until the vomitus is clear. Do not induce vomiting if the patient is unconscious",
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

          <div>
            <h4 className="text-2xl font-black text-[#0B2B1C] mb-4 border-b-2 border-[#F5C518] inline-block pb-1">Storage Conditions</h4>
            <ul className="space-y-3">
              {[
                "The packages containing the fungicide shall be stored in separate rooms or premises away from the rooms or premises used for storing other articles of or shall be kept in separate almirahs under lock and key depend upon the quantity and nature of the fungicide.",
                "The rooms or premises meant for storing the fungicide shall be well-lit and ventilated and of sufficient dimensions."
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

      <ProductCTA productName="BLUETOX 50 (Copper Oxychloride 50%)" />
    </main>
  );
}