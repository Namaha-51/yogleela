"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useState } from "react";

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
  
  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const openApplication = (role: string) => {
    setSelectedRole(role);
    setFormSubmitted(false);
    setIsModalOpen(true);
  };

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    // Auto-close modal after 3 seconds on success
    setTimeout(() => {
      setIsModalOpen(false);
    }, 3000);
  };

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
              { title: "Stable Growth", desc: " A family-owned manufacturer with its own plant at Vapi and trade relationships going back decades. We offer long-term stability and structured career progression" },
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
                <motion.button 
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }}
                  onClick={() => openApplication(job.role)}
                  className="px-10 py-5 bg-[#0B2B1C] text-white text-xl font-bold rounded-sm group-hover:bg-[#2E7D4F] transition-colors whitespace-nowrap text-center block shadow-xl"
                >
                  Apply Now
                </motion.button>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeUp} className="mt-20 bg-[#1F2A24] p-12 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8 border-l-8 border-[#F5C518] shadow-2xl">
            <div>
              <h4 className="text-3xl font-bold text-white mb-4">Don't see your role?</h4>
              <p className="text-[#F7F3E8] font-medium text-xl">Send us your resume directly at yogleelasulphur@gmail.com</p>
            </div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a href="mailto:yogleelasulphur@gmail.com" className="px-10 py-5 bg-[#F5C518] text-[#0B2B1C] text-xl font-bold rounded-sm hover:bg-yellow-400 transition-colors whitespace-nowrap block shadow-xl">
                Email Resume
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* 4. APPLICATION MODAL OVERLAY */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center px-4 bg-[#0B2B1C]/80 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-3xl p-8 md:p-12 max-w-2xl w-full shadow-2xl relative max-h-[90vh] overflow-y-auto"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 text-[#1F2A24] hover:text-[#8E1B1B] transition-colors"
              >
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>

              {!formSubmitted ? (
                <>
                  <h3 className="text-3xl font-bold text-[#0B2B1C] mb-2">Apply for Role</h3>
                  <p className="text-xl font-bold text-[#2E7D4F] mb-8">{selectedRole}</p>

                  <form onSubmit={handleApplySubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold text-[#0B2B1C] uppercase tracking-widest mb-2">Full Name *</label>
                        <input required type="text" className="w-full bg-[#F7F3E8] border border-[#0B2B1C]/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[#2E7D4F]" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#0B2B1C] uppercase tracking-widest mb-2">Phone Number *</label>
                        <input required type="tel" className="w-full bg-[#F7F3E8] border border-[#0B2B1C]/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[#2E7D4F]" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-xs font-bold text-[#0B2B1C] uppercase tracking-widest mb-2">Email Address *</label>
                      <input required type="email" className="w-full bg-[#F7F3E8] border border-[#0B2B1C]/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[#2E7D4F]" />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#0B2B1C] uppercase tracking-widest mb-2">Upload Resume (PDF/DOCX) *</label>
                      <input required type="file" accept=".pdf,.doc,.docx" className="w-full bg-[#F7F3E8] border border-[#0B2B1C]/10 rounded-lg px-4 py-3 focus:outline-none file:mr-4 file:py-2 file:px-4 file:rounded-sm file:border-0 file:text-sm file:font-bold file:bg-[#0B2B1C] file:text-white hover:file:bg-[#2E7D4F] transition-all" />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#0B2B1C] uppercase tracking-widest mb-2">Cover Letter / Note</label>
                      <textarea rows={3} className="w-full bg-[#F7F3E8] border border-[#0B2B1C]/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[#2E7D4F]"></textarea>
                    </div>

                    <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" className="w-full py-4 bg-[#0B2B1C] text-white rounded-lg font-bold text-xl tracking-wide shadow-xl hover:bg-[#2E7D4F] transition-colors">
                      Submit Application
                    </motion.button>
                  </form>
                </>
              ) : (
                <div className="py-12 text-center">
                  <div className="w-20 h-20 bg-[#2E7D4F]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-[#2E7D4F]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h3 className="text-3xl font-bold text-[#0B2B1C] mb-4">Application Sent!</h3>
                  <p className="text-lg text-[#1F2A24] font-medium">Thank you for your interest in Yogleela Sulphur. We will review your resume and contact you soon.</p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}