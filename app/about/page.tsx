"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// --- HEAVY, SMOOTH & SEO-SAFE ANIMATION VARIANTS ---
const transitionSmooth = { duration: 1.2, ease: "easeOut" as const };

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: transitionSmooth }
};

const fadeRight = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: transitionSmooth }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: transitionSmooth }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

export default function About() {
  const { scrollYProgress: globalScroll } = useScroll();
  const floatY1 = useTransform(globalScroll, [0, 1], ["0%", "100%"]);

  const founderRef = useRef(null);
  const { scrollYProgress: founderScroll } = useScroll({ target: founderRef, offset: ["start end", "end start"] });
  // Milder parallax movement to prevent image distortion
  const founderImgY = useTransform(founderScroll, [0, 1], ["-5%", "5%"]);

  const visionRef = useRef(null);
  const { scrollYProgress: visionScroll } = useScroll({ target: visionRef, offset: ["start end", "end start"] });
  const visionImgY = useTransform(visionScroll, [0, 1], ["-5%", "5%"]);

  return (
    <main className="min-h-screen bg-[#F7F3E8] text-[#1F2A24] selection:bg-[#F5C518] selection:text-[#0B2B1C] overflow-hidden pt-20 relative">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-[60vh] flex flex-col justify-center px-6 lg:px-12 py-24 bg-[#0B2B1C] overflow-hidden">
        <motion.div style={{ y: floatY1 }} className="absolute top-0 right-0 w-[800px] h-[800px] border-[2px] border-[#2E7D4F]/20 rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3" />
        
        <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-start">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="max-w-4xl">
            <motion.div variants={fadeUp} className="mb-8">
              <span className="inline-block px-4 py-2 rounded-sm bg-[#1F2A24] border border-[#2E7D4F]/50 text-[#F5C518] text-xs font-bold tracking-[0.2em] uppercase shadow-xl">
                Established 1972
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
              About Yogleela Sulphur and Agchem Industries
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-xl md:text-2xl text-[#F7F3E8]/90 font-medium max-w-3xl leading-relaxed">
              From our Sanskrit roots to global industrial mastery. We have been formulating sulphur under the D.V.S. group since 1972, driving consistency across agriculture and manufacturing.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 2. SANSKRIT PHILOSOPHY */}
      <section className="py-24 md:py-32 px-6 lg:px-12 bg-white relative z-10 border-b border-[#0B2B1C]/10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2 flex flex-col justify-center">
            <motion.span variants={fadeRight} className="text-[#2E7D4F] font-bold tracking-widest text-sm uppercase mb-6 block">The Meaning</motion.span>
            <motion.h2 variants={fadeRight} className="text-4xl md:text-6xl font-bold text-[#0B2B1C] leading-[1.1] mb-8">
              <span className="text-[#2E7D4F]">YOG</span> (Oneness) <br />
              <span className="text-[#2E7D4F]">+ LEELA</span> (Divine Play)
            </motion.h2>
            <motion.div variants={fadeUp} className="space-y-6 text-xl text-[#1F2A24] font-medium leading-relaxed">
              <p>Combined, it signifies our ultimate connection through creation. The term <strong className="text-[#0B2B1C] font-bold">YOGA</strong> not only benefits the farmer but also the crops, creating a tranquil atmosphere where agriculture harmonizes with nature.</p>
              <p>Plant life responds to the vibration created by YOGA, forming a pure environment to help every creature and crop thrive.</p>
            </motion.div>
          </div>

          <div className="lg:w-1/2 w-full">
            <motion.div variants={scaleIn} className="relative aspect-square w-full rounded-2xl overflow-hidden bg-[#F7F3E8] border-4 border-[#0B2B1C]/5 shadow-2xl p-4 group">
               <div className="absolute inset-4 rounded-xl bg-[url('/images/01_hero_plant-workers.webp')] bg-cover bg-center shadow-inner group-hover:scale-105 transition-transform duration-1000"></div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 3. FOUNDER (Increased Gap & Fixed Framing) */}
      <section ref={founderRef} className="py-24 md:py-32 px-6 lg:px-12 bg-[#F7F3E8] border-b border-[#0B2B1C]/10 relative overflow-hidden">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24 lg:gap-32 items-start">
          
          {/* TEXT COLUMN */}
          <div className="lg:w-7/12 flex flex-col">
            <motion.h2 variants={fadeRight} className="text-5xl md:text-7xl font-bold tracking-tight text-[#0B2B1C] mb-12">Mr. Hitesh Dodecha</motion.h2>

            <motion.div variants={fadeUp} className="p-8 md:p-12 bg-white border-l-8 border-[#F5C518] shadow-lg mb-12 relative group">
              <p className="text-xl md:text-2xl font-bold text-[#0B2B1C] leading-snug">
                "Success doesn't happen overnight. And the most successful individuals are those who are willing to put in a productive day's work before they even receive success."
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="space-y-8 text-[#1F2A24] font-medium leading-relaxed text-xl">
              <p>Our parent company, D.V.S. Chemical and Engineering Industries, has been manufacturing sulphur since 1968. Building on this strong foundation, Hitesh Dodecha established Yogleela Sulphur and Agchem Industries Private Limited (YSAAIPL) in 2002.</p>
              <p>He developed this fantastic company at a very young age, devoting all of his effort and passion to making it a reality. He raised the company and its employees as if they were his own children, driving an unwavering commitment to quality and expansion.</p>
            </motion.div>
          </div>

          {/* IMAGE COLUMN */}
          <div className="lg:w-5/12 w-full lg:sticky top-32">
            {/* White padded frame to match the design screenshot */}
            <motion.div variants={scaleIn} className="relative w-full rounded-3xl bg-white p-4 shadow-2xl group overflow-hidden">
                 <motion.div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden">
                   <motion.img 
                     style={{ y: founderImgY, scale: 1.1 }} 
                     src="/images/13_founder-portrait.webp" 
                     alt="Mr. Hitesh Dodecha, Visionary Founder of Yogleela Sulphur"
                     className="absolute inset-0 w-full h-full object-cover object-center"
                   />
                 </motion.div>
            </motion.div>
          </div>

        </motion.div>
      </section>

      {/* 4. COMPANY VISION & BOARDROOM (Fixed Image Fitting) */}
      <section ref={visionRef} className="py-24 md:py-32 px-6 lg:px-12 bg-[#0B2B1C] text-white relative overflow-hidden flex items-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 lg:gap-24 items-center relative z-10">
          
          {/* TEXT COLUMN */}
          <div className="lg:w-5/12">
            <motion.h2 variants={fadeRight} className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.15] tracking-tight mb-10">
              Crop <br/> Protection <br/> with <br/>
              <span className="text-[#F5C518]">Environmental Conservation.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-xl text-[#F7F3E8] font-medium leading-relaxed">
              We are committed to sustainable agriculture, increasing the quality of the crops and the quantity of the yield, by providing vibrant solutions for enhancing absolute productivity.
            </motion.p>
          </div>
          
          {/* IMAGE COLUMN */}
          <div className="lg:w-7/12 w-full h-[500px] lg:h-[700px] relative">
            {/* Standardized object cover to prevent stretching/cropping bugs */}
            <motion.div variants={scaleIn} className="w-full h-full rounded-3xl overflow-hidden shadow-2xl border-2 border-[#2E7D4F]/30 bg-black">
               <motion.img 
                  style={{ y: visionImgY, scale: 1.1 }}
                  src="/images/14_about_boardroom.webp" 
                  alt="Yogleela Sulphur Boardroom and Team Strategy" 
                  className="w-full h-full object-cover object-center opacity-90 hover:opacity-100 transition-opacity duration-500"
               />
            </motion.div>
          </div>

        </motion.div>
      </section>

      {/* 5. MISSION PILLARS */}
      <section className="py-24 md:py-32 px-6 lg:px-12 bg-white relative z-20">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="max-w-7xl mx-auto">
          <div className="mb-20">
            <motion.span variants={fadeUp} className="text-[#2E7D4F] font-bold tracking-widest text-sm uppercase mb-4 block">Company Mission</motion.span>
            <motion.h2 variants={fadeUp} className="text-5xl md:text-7xl font-bold text-[#0B2B1C] tracking-tight">Our Core Pillars.</motion.h2>
          </div>
          
          <div className="flex flex-col">
            {[
              { title: "Farm Development", desc: "To help and guide farmers to increase crop yields and raise awareness for advanced, sustainable crop protection." },
              { title: "Crop Management", desc: "To provide the best services to our customers, customizing vibrant products strictly according to their agricultural and industrial requirements." },
              { title: "Lasting Relationships", desc: "To build long, everlasting relationships with our customers, suppliers, and management based on absolute transparency and trust." },
              { title: "Organic Cultivation", desc: "To build a strong foundation by providing new, innovative, and highly effective products for crop protection without compromising nature." }
            ].map((item, i) => (
              <motion.div variants={fadeUp} key={i} className="group relative flex flex-col md:flex-row items-start md:items-center py-12 border-t-2 border-[#0B2B1C]/10 hover:bg-[#F7F3E8] transition-colors duration-500 px-6 -mx-6 rounded-xl">
                <div className="w-full md:w-1/4 mb-6 md:mb-0"><span className="text-6xl lg:text-7xl font-black text-[#0B2B1C]/10 group-hover:text-[#F5C518] transition-colors duration-500">0{i+1}</span></div>
                <div className="w-full md:w-1/3 pr-8 mb-4 md:mb-0"><h3 className="text-3xl font-bold text-[#0B2B1C] group-hover:text-[#2E7D4F] transition-colors">{item.title}</h3></div>
                <div className="w-full md:w-5/12"><p className="text-[#1F2A24] font-medium text-xl leading-relaxed">{item.desc}</p></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

    </main>
  );
}