"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const transitionSmooth = { duration: 1.2, ease: "easeOut" as const };

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: transitionSmooth }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
};

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setFormSubmitted(true); };

  return (
    <main className="min-h-screen bg-[#F7F3E8] text-[#1F2A24] selection:bg-[#F5C518] selection:text-[#0B2B1C] overflow-x-hidden pt-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full py-20 md:py-32 px-6 lg:px-12 bg-[#0B2B1C] overflow-hidden border-b-8 border-[#F5C518]">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-start">
          <motion.div variants={fadeUp} className="mb-6">
            <span className="inline-block px-4 py-2 rounded-sm bg-[#1F2A24] border border-[#2E7D4F]/50 text-[#F5C518] text-xs font-bold tracking-[0.2em] uppercase shadow-xl">
              Get in Touch
            </span>
          </motion.div>
          
          {/* SEO SAFE H1 */}
          <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8">
            Contact Yogleela Sulphur, Mumbai and Vapi
          </motion.h1>
          <motion.p variants={fadeUp} className="text-xl md:text-2xl text-[#F7F3E8]/90 font-medium max-w-2xl leading-relaxed">
            Reach out to our offices or drop a message to build something extraordinary together.
          </motion.p>
        </motion.div>
      </section>

      {/* 2. CONTACT DETAILS GRID */}
      <section className="py-20 md:py-32 px-6 lg:px-12 bg-white">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {[
            { title: "Mobile", sub: "Free Dial Number", data: ["+91 99309 93051", "+91 99203 06668", "+91 98212 52090", "+91 99208 78518"], icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" },
            { title: "Email", sub: "Feel Free to Mail", data: ["yogleelasulphur@gmail.com", "yogleelasulphur@yahoo.com", "sales@yogleelasulphur.com"], icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
            { title: "Office Address", sub: "Our Main Address", data: ["B 104 Raj Heights, MG road, Kandivali West, Mumbai 400067"], icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" }
          ].map((info, i) => (
            <motion.div variants={fadeUp} key={i} whileHover={{ y: -10 }} className="p-10 bg-[#F7F3E8] border-2 border-[#0B2B1C]/5 rounded-2xl shadow-lg hover:border-[#2E7D4F] transition-all duration-500 group">
              <div className="w-16 h-16 bg-[#0B2B1C] rounded-xl flex items-center justify-center mb-8 border border-[#2E7D4F] group-hover:bg-[#2E7D4F] transition-colors duration-500 shadow-md">
                <svg className="w-8 h-8 text-[#F5C518]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={info.icon} /></svg>
              </div>
              <h3 className="text-sm font-bold tracking-[0.2em] text-[#2E7D4F] uppercase mb-2">{info.title}</h3>
              <p className="text-xs font-bold text-[#0B2B1C]/50 uppercase tracking-widest mb-6">{info.sub}</p>
              <div className="space-y-3 text-[#1F2A24] font-bold text-lg break-all">
                {info.data.map((line, j) => <p key={j}>{line}</p>)}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 3. FORM & MAP */}
      <section className="py-20 md:py-32 px-6 lg:px-12 bg-[#F7F3E8] border-t border-[#0B2B1C]/10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          <motion.div variants={fadeUp} className="lg:col-span-7 bg-white p-10 md:p-14 rounded-3xl border border-[#0B2B1C]/10 shadow-2xl">
            <h2 className="text-4xl font-bold text-[#0B2B1C] mb-4 tracking-tight">Let's Connect and Build Something Great Together</h2>
            <p className="text-[#1F2A24] font-medium text-lg mb-10">Fill out the form below and our team will get back to you promptly.</p>

            {formSubmitted ? (
              <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="p-10 bg-[#F7F3E8] border-2 border-[#2E7D4F] rounded-2xl text-center">
                <h3 className="text-3xl font-bold text-[#2E7D4F] mb-4">Message Sent Successfully!</h3>
                <p className="text-[#1F2A24] font-bold text-xl">Thank you for reaching out. We will contact you shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-xs font-bold text-[#0B2B1C] uppercase tracking-widest mb-3">Company Name *</label>
                    <input required type="text" className="w-full bg-[#F7F3E8] border border-[#0B2B1C]/10 rounded-lg px-6 py-4 focus:outline-none focus:border-[#2E7D4F] focus:bg-white transition-colors text-[#1F2A24] font-bold text-lg shadow-inner" placeholder="Your Company" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#0B2B1C] uppercase tracking-widest mb-3">Phone *</label>
                    <input required type="tel" className="w-full bg-[#F7F3E8] border border-[#0B2B1C]/10 rounded-lg px-6 py-4 focus:outline-none focus:border-[#2E7D4F] focus:bg-white transition-colors text-[#1F2A24] font-bold text-lg shadow-inner" placeholder="+91 99999 99999" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-xs font-bold text-[#0B2B1C] uppercase tracking-widest mb-3">Email *</label>
                    <input required type="email" className="w-full bg-[#F7F3E8] border border-[#0B2B1C]/10 rounded-lg px-6 py-4 focus:outline-none focus:border-[#2E7D4F] focus:bg-white transition-colors text-[#1F2A24] font-bold text-lg shadow-inner" placeholder="name@company.com" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#0B2B1C] uppercase tracking-widest mb-3">Subject *</label>
                    <input required type="text" className="w-full bg-[#F7F3E8] border border-[#0B2B1C]/10 rounded-lg px-6 py-4 focus:outline-none focus:border-[#2E7D4F] focus:bg-white transition-colors text-[#1F2A24] font-bold text-lg shadow-inner" placeholder="Inquiry regarding Sulphur..." />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0B2B1C] uppercase tracking-widest mb-3">Message *</label>
                  <textarea required rows={5} className="w-full bg-[#F7F3E8] border border-[#0B2B1C]/10 rounded-lg px-6 py-4 focus:outline-none focus:border-[#2E7D4F] focus:bg-white transition-colors text-[#1F2A24] font-bold text-lg shadow-inner" placeholder="Write your message here..."></textarea>
                </div>

                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" className="w-full py-5 bg-[#0B2B1C] text-white rounded-lg font-bold text-xl tracking-wide shadow-xl hover:bg-[#2E7D4F] transition-colors">
                  Send Message
                </motion.button>
              </form>
            )}
          </motion.div>

          <motion.div variants={fadeUp} className="lg:col-span-5 bg-white p-6 rounded-3xl border border-[#0B2B1C]/10 shadow-2xl flex flex-col h-full">
            <div className="mb-6 flex justify-between items-center px-4">
              <h3 className="text-xl font-bold text-[#0B2B1C]">Get Directions</h3>
              <a href="https://www.google.com/maps/search/?api=1&query=Raj+Heights+MG+Road+Kandivali+West+Mumbai+400067" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-[#2E7D4F] hover:underline">
                Open in Google Maps ↗
              </a>
            </div>
            <div className="w-full h-[550px] rounded-2xl overflow-hidden border-2 border-[#F7F3E8]">
               <iframe title="Raj Heights Kandivali West Location Map" src="https://maps.google.com/maps?q=Raj+Heights,+MG+Road,+Kandivali+West,+Mumbai+400067&t=&z=16&ie=UTF8&iwloc=&output=embed" width="100%" height="100%" style={{ border: 0 }} allowFullScreen={false} loading="lazy"></iframe>
            </div>
          </motion.div>

        </motion.div>
      </section>
    </main>
  );
}