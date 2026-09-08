"use client";

import { motion, useScroll, useTransform } from "framer-motion";
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

export default function Career() {
  const { scrollYProgress } = useScroll();
  const heroBgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <main className="min-h-screen bg-white text-[#1F2A24] selection:bg-[#F5C518] selection:text-[#0B2B1C] overflow-hidden pt-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-[60vh] flex flex-col justify-center px-6 lg:px-12 bg-[#0B2B1C] overflow-hidden border-b-[16px] border-[#F5C518]">
        <motion.div style={{ y: heroBgY }} className="absolute inset-0 z-0">
          <img src="/images/01_hero_plant-workers.webp" alt="Yogleela Sulphur manufacturing careers" className="w-full h-[120%] object-cover object-center opacity-50 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-[#0B2B1C]/80"></div>
        </motion.div>
        
        <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-center text-center py-24">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="max-w-4xl">
            <motion.span variants={fadeUp} className="inline-block px-4 py-2 rounded-sm bg-[#1F2A24] border border-[#2E7D4F]/50 text-[#F5C518] text-xs font-bold tracking-[0.2em] uppercase mb-8 shadow-xl">
              Join The Team
            </motion.span>
            
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
              Build a career in advanced manufacturing.
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-xl md:text-2xl text-[#F7F3E8]/90 font-medium max-w-3xl mx-auto leading-relaxed">
              From our testing laboratories to global export operations, Yogleela Sulphur relies on dedicated professionals to maintain our strict quality standards.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 2. WHY WORK WITH US */}
      <section className="py-24 md:py-32 px-6 lg:px-12 bg-[#F7F3E8]">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="max-w-7xl mx-auto">
          <motion.div variants={fadeUp} className="mb-20 text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-[#0B2B1C] tracking-tight">Why Yogleela?</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Stable Growth", desc: "A family-owned manufacturer with its own plant at Vapi and trade relationships going back decades. We offer long-term stability and structured career progression" },
              { title: "Technical Excellence", desc: "Work in state-of-the-art facilities with our in-house R&D lab, managing strict ISO 9001:2015 and Bureau of Indian Standards compliances." },
              { title: "Global Exposure", desc: "Our products ship worldwide. Manage logistics, export standards, and international client relations from our corporate offices." }
            ].map((perk, i) => (
              <motion.div variants={fadeUp} key={i} whileHover={{ y: -10 }} className="bg-white p-10 rounded-2xl shadow-xl border-4 border-white hover:border-[#2E7D4F] transition-all duration-500 group">
                <div className="w-16 h-16 bg-[#0B2B1C] rounded-lg flex items-center justify-center mb-8 text-[#F5C518] text-3xl font-black group-hover:bg-[#2E7D4F] transition-colors duration-500 shadow-md">
                  0{i+1}
                </div>
                <h3 className="text-3xl font-bold text-[#0B2B1C] mb-4 group-hover:text-[#2E7D4F] transition-colors">{perk.title}</h3>
                <p className="text-[#1F2A24] font-medium text-xl leading-relaxed">{perk.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 3. OPEN POSITIONS */}
      <section className="py-24 md:py-32 px-6 lg:px-12 bg-white">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="max-w-5xl mx-auto">
          <motion.div variants={fadeUp} className="mb-16 border-b-4 border-[#0B2B1C]/10 pb-8 flex justify-between items-end">
            <div>
              <span className="text-[#2E7D4F] font-bold tracking-widest text-sm uppercase mb-4 block">Current Openings</span>
              <h2 className="text-5xl md:text-6xl font-bold text-[#0B2B1C] tracking-tight">Explore Roles</h2>
            </div>
          </motion.div>

          <div className="space-y-6">
            {[
              { role: "Chemical Engineer (R&D)", location: "Vapi, Gujarat", type: "Full Time" },
              { role: "Quality Control Analyst", location: "Vapi, Gujarat", type: "Full Time" },
              { role: "Export Sales Manager", location: "Mumbai, Maharashtra", type: "Full Time" },
              { role: "Plant Operations Supervisor", location: "Vapi, Gujarat", type: "Full Time" }
            ].map((job, i) => (
              <motion.div variants={fadeUp} key={i} className="group border-2 border-[#F7F3E8] bg-[#F7F3E8] p-8 md:p-10 rounded-2xl hover:border-[#F5C518] hover:bg-white hover:shadow-2xl transition-all duration-500 flex flex-col md:flex-row justify-between md:items-center gap-8">
                <div>
                  <h3 className="text-3xl font-bold text-[#0B2B1C] mb-4 group-hover:text-[#2E7D4F] transition-colors">{job.role}</h3>
                  <div className="flex flex-wrap gap-4 text-[#1F2A24] font-bold text-sm">
                    <span className="bg-white px-4 py-2 border border-[#0B2B1C]/10 rounded-sm shadow-sm">{job.location}</span>
                    <span className="bg-[#0B2B1C] text-[#F5C518] px-4 py-2 rounded-sm shadow-sm">{job.type}</span>
                  </div>
                </div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <a 
  href={`https://mail.google.com/mail/?view=cm&fs=1&to=yogleelasulphur@gmail.com&su=Application%20for%20${encodeURIComponent(job.role)}`}
  target="_blank"
  rel="noopener noreferrer"
  className="px-10 py-5 bg-[#0B2B1C] text-white text-xl font-bold rounded-sm group-hover:bg-[#2E7D4F] transition-colors whitespace-nowrap text-center block shadow-xl"
>
  Apply Now
</a>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeUp} className="mt-20 bg-[#1F2A24] p-12 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8 border-l-8 border-[#F5C518] shadow-2xl">
            <div>
              <h4 className="text-3xl font-bold text-white mb-4">Don't see your role?</h4>
              <p className="text-[#F7F3E8] font-medium text-xl">Send us your resume directly at Yogleelasulphur@gmail.com</p>
            </div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
             <a 
  href="https://mail.google.com/mail/?view=cm&fs=1&to=yogleelasulphur@gmail.com&su=General%20Job%20Application%20-%20Resume" 
  target="_blank"
  rel="noopener noreferrer"
  className="px-10 py-5 bg-[#F5C518] text-[#0B2B1C] text-xl font-bold rounded-sm hover:bg-yellow-400 transition-colors whitespace-nowrap block shadow-xl"
>
  Email Resume
</a>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

    </main>
  );
}