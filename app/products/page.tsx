"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const transitionSmooth = { duration: 1.2, ease: "easeOut" as const };
const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: transitionSmooth } };
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } } };

// PRODUCT DATA ARRAY - Updated with exact filenames from your public/images directory
export const productsData = [
  { slug: "sunvet-df", name: "SUNVET-DF", sub: "(Sulphur 80% WDG)", desc: "It is water dispersible granules containing 80% Sulphur as active ingredient and balance adjuvants 20%.", img: "sunvet_df.png", type: "agriculture" },
  { slug: "cosmic-fertile", name: "COSMIC FERTILE", sub: "(Sulphur 90% WDG)", desc: "Helps maintain soil pH, improves nutrient uptake, photosynthesis and healthy crop growth.", img: "cosmic-fertile.png", type: "agriculture" },
  { slug: "yogtara", name: "YOGTARA / COSMIC STAR", sub: "(Sulphur 85% DP)", desc: "It is a contact fungicide containing 85% w/w sulphur as active ingredient and balance adjuvants.", img: "cosmicstar.png", type: "agriculture" },
  { slug: "sulphur-powder-rubber", name: "SULPHUR POWDER", sub: "(RUBBER, TYRE GRADE & MICROFINE GRADE)", desc: "Rubber is the main raw material used in manufacturing of tires, and both natural & synthetic rubber is used.", img: "sulphurrubber.png", type: "industry" },
  { slug: "sulphur-powder-explosive", name: "SULPHUR POWDER", sub: "(Explosive Grade)", desc: "FOR SAFETY MATCHES - In the safety matches industry, sulphur is mixed with phosphorous to prepare Phosphorous tri-sulphide (P2S3).", img: "sulphurexplosive.png", type: "industry" },
  { slug: "sulphur-powder-pharma", name: "SULPHUR POWDER PHARMA GRADE", sub: "(AMLASAR)", desc: "Sulphur formulations are used in skin diseases such as acne, eczema and scabies, fungal infections etc.", img: "amlasar.png", type: "industry" },
  { slug: "sulphur-80-wp", name: "SULPHUR 80% W.P.", sub: "(Agricultural & Multi-use)", desc: "Sulphur formulations are used in skin diseases such as acne, eczema and scabies, fungal infections etc.", img: "sulphur80.png", type: "agriculture" },
  { slug: "sulphur-rock-granules", name: "SULPHUR ROCK / GRANULES / PALLETS", sub: "(Industrial Grade)", desc: "Sulphur is used in many other industries like sugar, starch, khandsari and many chemical industries like in the preparation of sulphuric acid.", img: "sulphurrock.png", type: "industry" },
  { slug: "bluetox-50", name: "BLUETOX 50", sub: "(Copper Oxychloride 50%)", desc: "It is highly effective fungicide based on copper oxy chloride containing 50% w/w copper content and balance adjuvats.", img: "bluetox-50.png", type: "agriculture" },
  { slug: "duocare", name: "DUOCARE", sub: "(Sulphur 65%+ Tebuconazole 10% WG)", desc: "Tebuconazole 10% Sulphur 65% WG (water dispersible granule) is a effective fungicide with protective, curative and eradicative action.", img: "duocare.png", type: "agriculture" },
  { slug: "concuro-5", name: "CONCURO 5", sub: "(Hexaconazole 5% SC)", desc: "Tebuconazole 10% Sulphur 65% WG (water dispersible granule) is a effective fungicide with protective, curative and eradicative action.", img: "concuro-5.png", type: "agriculture" },
  { slug: "refex-5", name: "REFEX 5", sub: "(Fipronil 5% SC)", desc: "Fipronil 5% SC is an insecticide which is used to control insects like stem borer, brown plant hopper, green leaf hopper, rice leaf folder, rice gall midge, white backed plant hopper, whorl maggot in rice.", img: "refex.png", type: "agriculture" },
  { slug: "accuro-25", name: "ACCURO 25", sub: "(Thiamethoxam 25%)", desc: "Thiamethoxam 25 % WG is broad spectrum systemic insecticide having quick stomach and contact action and is recommended for its use to control stem borer.", img: "accuro-25.png", type: "agriculture" },
  { slug: "mozack-4-9", name: "MOZACK 4.9", sub: "(Lambda-cyhalothrin 4.9%)", desc: "Lambda cyhalothrin 4.9% Capsule Suspension iOS a capsule suspension formulation wherein the active ingredient is sealed in a tiny thin-walled.", img: "mozack.png", type: "agriculture" },
  { slug: "puramate-5", name: "PURAMATE 5", sub: "(Emamectin Benzoate 5%)", desc: "Emamectin benzoate 5% SG is a water soluble granular formulation containing 5% active ingredient and is recommended for the control of Bollworms on cotton.", img: "puremate.png", type: "agriculture" }
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[#F7F3E8] text-[#1F2A24] selection:bg-[#F5C518] selection:text-[#0B2B1C] pt-28">
      
      {/* HEADER SECTION */}
      <section className="px-6 lg:px-12 py-12 md:py-20 text-center max-w-5xl mx-auto flex flex-col items-center">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="inline-flex items-center gap-2 mb-6">
          <svg className="w-5 h-5 text-[#2E7D4F]" fill="currentColor" viewBox="0 0 20 20"><path d="M12 7a2 2 0 10-.914 1.782l-1.39 2.146a2 2 0 103.541.67l1.047-2.618A2 2 0 1012 7z" /></svg>
          <span className="text-[#2E7D4F] font-bold tracking-[0.2em] uppercase text-sm">Featured Products</span>
        </motion.div>
        <motion.h1 initial="hidden" animate="visible" variants={fadeUp} className="text-4xl md:text-6xl font-black text-[#0B2B1C] tracking-tight">
          Trusted Sulphur Solutions for Every Need
        </motion.h1>
      </section>

      {/* PRODUCT GRID */}
      <section id="agriculture" className="px-6 lg:px-12 pb-32">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {productsData.map((product) => (
            <motion.div 
              key={product.slug}
              variants={fadeUp}
              className="bg-white rounded-3xl p-8 flex flex-col items-center text-center shadow-md border-2 border-white hover:border-[#2E7D4F]/30 hover:shadow-2xl transition-all duration-500 group relative"
            >
              {/* Invisible anchor for industrial scrolling */}
              {product.slug === "sulphur-powder-rubber" && <div id="industry" className="absolute -top-32"></div>}
              
              <div className="w-full h-56 bg-white mb-8 flex items-center justify-center p-4">
                <motion.img 
                  whileHover={{ scale: 1.05, y: -5 }}
                  src={`/images/${product.img}`} 
                  alt={product.name} 
                  className="w-full h-full object-contain drop-shadow-lg transition-transform duration-500"
                  onError={(e) => { (e.target as HTMLImageElement).src = "/images/sunvet_df.png"; }}
                />
              </div>
              
              <h3 className="text-2xl font-black text-[#0B2B1C] mb-2">{product.name}</h3>
              <p className="text-sm font-bold text-[#1F2A24] tracking-widest uppercase mb-6 h-10 flex items-center justify-center">
                {product.sub}
              </p>
              
              <p className="text-[#1F2A24]/80 text-[15px] font-medium leading-relaxed mb-8 flex-grow">
                {product.desc}
              </p>
              
              <Link href={`/products/${product.slug}`} className="w-full py-4 bg-[#8cc63f] hover:bg-[#2E7D4F] text-white font-bold text-lg rounded-xl transition-colors shadow-md mt-auto">
                Read More
              </Link>
            </motion.div>
          ))}

        </motion.div>
      </section>
    </main>
  );
}