"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import ProductCTA from "@/app/components/ProductCTA";


export default function MozackPage() {
  return (
    <main className="min-h-screen bg-white text-[#1F2A24] selection:bg-[#F5C518] selection:text-[#0B2B1C] pt-20">
      
      <section className="w-full py-16 md:py-24 px-6 lg:px-12 relative overflow-hidden shadow-inner bg-[#4e0000]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
          <div className="md:w-1/2 text-white">
            <motion.h1 initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="text-5xl md:text-6xl font-black mb-4 tracking-tight drop-shadow-md">
              MozacK 4.9
            </motion.h1>
            <motion.h2 initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="text-2xl md:text-3xl font-bold text-white/90 mb-8">
              (Lambda-cyhalothrin 4.9%)
            </motion.h2>
            
            <div className="flex items-center gap-2 text-sm font-bold text-white/70 uppercase tracking-widest">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>›</span>
              <Link href="/products" className="hover:text-white transition-colors">Products</Link>
              <span>›</span>
              <span className="text-white">MozacK 4.9</span>
            </div>
          </div>
          
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg h-72 md:h-[400px] flex items-center justify-center">
              <img 
                src="/images/mozack.png" 
                alt="mozack" 
                className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.4)] hover:scale-105 transition-transform duration-700" 
              />
            </div>
          </motion.div>
        </div>
      </section>

     <section className="py-20 px-6 lg:px-12 max-w-5xl mx-auto">
        <div className="space-y-12">
          
          <div>
            <h4 className="text-2xl font-black text-[#0B2B1C] mb-4 border-b-2 border-[#F5C518] inline-block pb-1">Lambda-cyhalothrin 4.9%</h4>
            <p className="text-lg font-medium leading-relaxed mb-4">
              Lambda cyhalothrin 4.9% Capsule Suspension is a capsule suspension formulation wherein the active ingredient is sealed in tiny thin-walled capsules suspended in water and is released only when the spray deposit dries on the target pest and leaf surface.
            </p>
            <p className="text-lg font-medium leading-relaxed">
              It is recommended for the control of bollworms in cotton, stem borer in paddy, shoot and fruit borer in Brinjal, fruit borer in Okra and Tomato, Thrips & Flea beetle in Grapes, Thrips & Pod Borer in Chili, stemfly & semilooper in soybean crops, and Thrips and fruit borer on pomegranate crops.
            </p>
          </div>

          <div>
            <h4 className="text-2xl font-black text-[#0B2B1C] mb-4 border-b-2 border-[#F5C518] inline-block pb-1">Precautions</h4>
            <p className="text-lg font-medium leading-relaxed">
              Avoid contact with skin, eyes and mouth during mixing and spraying. Wear protective clothing like apron, gloves, face shield and boots. Wash the affected areas before eating, drinking or smoking. Avoid contamination of environment and water. Avoid contact with treated area until the spray is fully dried. The product is toxic to fish, aquatic invertebrates & honey bees thus may be avoided near aquaculture and active period of foraging of honey bee.
            </p>
          </div>

          <div>
            <h4 className="text-2xl font-black text-[#0B2B1C] mb-4 border-b-2 border-[#F5C518] inline-block pb-1">Symptoms Of Poisoning</h4>
            <p className="text-lg font-medium leading-relaxed">
              Ingestion of lambda-cyhalothrin may produce non-specific symptoms such as nausea, vomiting, abdominal pain, diarrhoea and allergic manifestations. If larger doses are ingested it may cause disturbance of the nervous system with tremors, ataxia, weakness of limbs, convulsion, coma and death from respiratory depression. Skin contact may cause subjective sensation or tingling or numbness in the facial area. This effect normally results from unconscious transfer to the face from contaminated hands or gloves. This effect is transient, lasting up to 24 hours and there is no evidence of any long term or cumulative effects. Eye contact will cause irritation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-2xl font-black text-[#0B2B1C] mb-4 border-b-2 border-[#F5C518] inline-block pb-1">First Aid</h4>
              <p className="text-lg font-medium leading-relaxed">
                Remove the patient from further exposure and wash contaminated skin with plenty of water and soap. If swallowed, induce vomiting and perform gastric lavage, repeat till the fluid is clear. If eyes contaminated, flush with plenty of water.
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-black text-[#0B2B1C] mb-4 border-b-2 border-[#F5C518] inline-block pb-1">Antidote</h4>
              <p className="text-lg font-medium leading-relaxed">
                Perform gastric lavage, taking care to prevent aspiration of gastric contents. Treat symptomatically. Antihistamines may be applied in case of manifestation of allergic symptoms.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-2xl font-black text-[#0B2B1C] mb-4 border-b-2 border-[#F5C518] inline-block pb-1">Disposal Of Used Container</h4>
              <p className="text-lg font-medium leading-relaxed">
                The empty containers should never be re-used and should be destroyed and buried in safe place. Dispose off packages or surplus material and washing in a safe manner so as to prevent environmental and water pollution.
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-black text-[#0B2B1C] mb-4 border-b-2 border-[#F5C518] inline-block pb-1">Storage Conditions</h4>
              <p className="text-lg font-medium leading-relaxed">
                Store in the original container away from food and animal feed in a separate room kept under lock and key. Store in a cool dry, well built and well lit place of sufficient dimensions with good ventilation.
              </p>
            </div>
          </div>

          <p className="text-xs text-[#1F2A24]/60 italic mt-8 border-t border-[#0B2B1C]/10 pt-4">
            WARRANTY: ‘As the usage of the product is not done under our control, we assure our uniform quality of the product only. We don’t take any other responsibility.’
          </p>
        </div>
      </section>

      <ProductCTA productName="MOZACK 4.9 (Lambda-cyhalothrin 4.9%)" />
    </main>
  );
}