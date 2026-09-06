"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const transitionSmooth = { duration: 1.2, ease: "easeOut" as const };

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: transitionSmooth }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
};

export default function Infrastructure() {
  const galleryRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: galleryRef, offset: ["start end", "end start"] });
  const yCol1 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const yCol2 = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const yCol3 = useTransform(scrollYProgress, [0, 1], ["10%", "-30%"]);

  return (
    <main className="min-h-screen bg-[#F7F3E8] text-[#1F2A24] selection:bg-[#F5C518] selection:text-[#0B2B1C] overflow-hidden pt-20">
      
      {/* 1. HERO */}
      <section className="relative w-full min-h-[60vh] flex flex-col justify-center bg-[#0B2B1C] overflow-hidden border-b-8 border-[#F5C518]">
        <motion.div initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={transitionSmooth} className="absolute inset-0 z-0">
          <img src="/images/20_infra_plant-exterior.webp" alt="Yogleela Sulphur manufacturing facility, Vapi, Gujarat" className="w-full h-[120%] object-cover object-center opacity-40 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-[#0B2B1C]/80"></div>
        </motion.div>
        
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-12 text-center py-24">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="flex flex-col items-center">
            <motion.span variants={fadeUp} className="inline-block px-4 py-2 rounded-sm bg-[#1F2A24] border border-[#2E7D4F]/50 text-[#F5C518] text-xs font-bold tracking-[0.2em] uppercase mb-8 shadow-xl">
              Inside The Facility
            </motion.span>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight max-w-5xl">
              Our sulphur manufacturing plant and R&D laboratory
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl md:text-2xl text-[#F7F3E8]/90 font-medium max-w-3xl leading-relaxed">
              Equipped with modern manufacturing infrastructure to produce high-quality sulphur-based agrochemical and industrial products.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 2. GALLERY GRID (Uses files 15 to 20) */}
      <section ref={galleryRef} className="py-24 md:py-32 px-6 lg:px-12 bg-white relative">
        <div className="max-w-7xl mx-auto h-full">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="mb-20 text-center">
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-[#0B2B1C] tracking-tight mb-6">Built for Scale and Precision.</motion.h2>
            <motion.p variants={fadeUp} className="text-xl text-[#1F2A24] font-medium max-w-3xl mx-auto">
              With advanced production equipment and an in-house laboratory, we continuously enhance our processes to meet global industry standards.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 h-full perspective-[1000px]">
            {/* Column 1 */}
            <motion.div style={{ y: yCol1 }} className="flex flex-col gap-6 lg:gap-10 pt-10">
              <motion.div whileHover={{ scale: 1.05 }} className="w-full h-[400px] rounded-3xl overflow-hidden shadow-xl border-4 border-[#F7F3E8] bg-[#0B2B1C]">
                <img src="/images/15_infra_plant-platform.webp" alt="Yogleela Sulphur manufacturing facility, Vapi, Gujarat" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="w-full h-[300px] rounded-3xl overflow-hidden shadow-xl border-4 border-[#F7F3E8] bg-[#0B2B1C]">
                <img src="/images/16_infra_balance.webp" alt="Yogleela Sulphur manufacturing facility, Vapi, Gujarat" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            </motion.div>

            {/* Column 2 */}
            <motion.div style={{ y: yCol2 }} className="flex flex-col gap-6 lg:gap-10 pb-10">
              <motion.div whileHover={{ scale: 1.05 }} className="w-full h-[300px] rounded-3xl overflow-hidden shadow-xl border-4 border-[#F7F3E8] bg-[#0B2B1C]">
                <img src="/images/17_infra_lab-team.webp" alt="Yogleela Sulphur manufacturing facility, Vapi, Gujarat" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="w-full h-[500px] rounded-3xl overflow-hidden shadow-xl border-4 border-[#F7F3E8] bg-[#0B2B1C] relative group">
                <img src="/images/18_infra_glassware.webp" alt="Yogleela Sulphur manufacturing facility, Vapi, Gujarat" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-6 left-6 bg-white text-[#0B2B1C] font-bold px-6 py-3 rounded-sm shadow-2xl group-hover:-translate-y-2 transition-transform duration-500">
                  In-House R&D
                </div>
              </motion.div>
            </motion.div>

            {/* Column 3 */}
            <motion.div style={{ y: yCol3 }} className="flex flex-col gap-6 lg:gap-10 pt-24">
              <motion.div whileHover={{ scale: 1.05 }} className="w-full h-[450px] rounded-3xl overflow-hidden shadow-xl border-4 border-[#F7F3E8] bg-[#0B2B1C]">
                <img src="/images/19_infra_sacks-despatch.webp" alt="Yogleela Sulphur manufacturing facility, Vapi, Gujarat" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="w-full h-[250px] rounded-3xl overflow-hidden shadow-xl border-4 border-[#F7F3E8] bg-[#0B2B1C]">
                <img src="/images/20_infra_plant-exterior.webp" alt="Yogleela Sulphur manufacturing facility, Vapi, Gujarat" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. PILLARS OF PRODUCTION */}
      <section className="py-24 md:py-32 px-6 lg:px-12 bg-[#0B2B1C] text-white">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="max-w-7xl mx-auto">
          <div className="mb-20 text-center">
            <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-bold tracking-tight text-[#F5C518]">Pillars of Production.</motion.h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              { title: "Advanced Equipment", icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z", desc: "State-of-the-art machinery enabling high-volume, high-precision processing of industrial and agrochemical sulphur." },
              { title: "In-House R&D", icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z", desc: "Dedicated laboratory environments where our scientists continuously innovate and refine formulations for maximum efficacy." },
              { title: "Stringent Q.C.", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", desc: "Rigorous quality control systems at every stage of production to ensure strict adherence to Bureau of Indian Standards." }
            ].map((pillar, i) => (
              <motion.div variants={fadeUp} key={i} className="bg-[#1F2A24] border border-[#2E7D4F]/30 rounded-2xl p-10 hover:bg-[#2E7D4F]/10 transition-colors duration-500 group">
                <div className="w-16 h-16 bg-[#0B2B1C] rounded-xl flex items-center justify-center mb-8 border border-[#2E7D4F] group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <svg className="w-8 h-8 text-[#F5C518]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={pillar.icon} /></svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#F5C518] transition-colors">{pillar.title}</h3>
                <p className="text-[#F7F3E8]/80 font-medium leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

    </main>
  );
}