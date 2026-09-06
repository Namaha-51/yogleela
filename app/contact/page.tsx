// "use client";

// import { motion } from "framer-motion";
// import { useState } from "react";

// const transitionLux = { duration: 1.2, ease: [0.16, 1, 0.3, 1] };

// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0, transition: transitionLux }
// };

// const staggerContainer = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.15, delayChildren: 0.1 }
//   }
// };

// export default function Contact() {
//   const [formSubmitted, setFormSubmitted] = useState(false);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setFormSubmitted(true);
//   };

//   return (
//     <main className="min-h-screen bg-[#FDFDFD] text-slate-900 selection:bg-emerald-300 selection:text-emerald-950 overflow-x-hidden pt-20">
      
//       {/* 1. KINETIC HERO SECTION */}
//       <section className="relative w-full min-h-[50vh] flex flex-col justify-end px-6 lg:px-12 pb-20 bg-gradient-to-br from-emerald-50 via-white to-emerald-100/40 border-b border-emerald-900/10 overflow-hidden">
//         <motion.div 
//           variants={staggerContainer}
//           initial="hidden"
//           animate="visible"
//           className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-start"
//         >
//           <motion.div variants={fadeUp} className="mb-6">
//             <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-600 text-white text-[10px] font-bold tracking-[0.3em] uppercase shadow-lg shadow-emerald-600/20">
//               Get in Touch
//             </span>
//           </motion.div>
          
//           <motion.h1 variants={fadeUp} className="text-6xl md:text-7xl lg:text-[8rem] font-medium tracking-tighter text-emerald-950 leading-[0.95]">
//             Let's <span className="font-light italic text-emerald-600 pr-4">Connect.</span>
//           </motion.h1>
//           <motion.p variants={fadeUp} className="mt-6 text-xl text-emerald-900/70 font-medium max-w-xl leading-relaxed">
//             Reach out to our offices or drop a message to build something extraordinary together.
//           </motion.p>
//         </motion.div>
//       </section>

//       {/* 2. REDESIGNED ULTRA-CLEAN INFO CARDS */}
//       <section className="py-24 px-6 lg:px-12 bg-white">
//         <motion.div 
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//           variants={staggerContainer}
//           className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
//         >
//           {/* Mobile Card */}
//           <motion.div 
//             variants={fadeUp} 
//             whileHover={{ y: -8 }}
//             className="p-10 bg-white border-2 border-emerald-900/10 rounded-[2.5rem] shadow-[0_20px_40px_-15px_rgba(6,78,59,0.07)] hover:border-emerald-600 transition-all duration-500 flex flex-col justify-between group"
//           >
//             <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-emerald-900 transition-colors duration-500">
//               <svg className="w-7 h-7 text-emerald-800 group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//               </svg>
//             </div>
//             <div>
//               <h3 className="text-xs font-bold tracking-[0.2em] text-emerald-700 uppercase mb-2">Mobile</h3>
//               <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-6">Free Dial Number</p>
//               <div className="space-y-2 text-slate-800 font-semibold text-sm">
//                 <p>+91 9930993051</p>
//                 <p>+91 9920306668</p>
//                 <p>+91 9821252090</p>
//                 <p>+91 9920878518</p>
//               </div>
//             </div>
//           </motion.div>

//           {/* Email Card */}
//           <motion.div 
//             variants={fadeUp} 
//             whileHover={{ y: -8 }}
//             className="p-10 bg-white border-2 border-emerald-900/10 rounded-[2.5rem] shadow-[0_20px_40px_-15px_rgba(6,78,59,0.07)] hover:border-emerald-600 transition-all duration-500 flex flex-col justify-between group"
//           >
//             <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-emerald-900 transition-colors duration-500">
//               <svg className="w-7 h-7 text-emerald-800 group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//               </svg>
//             </div>
//             <div>
//               <h3 className="text-xs font-bold tracking-[0.2em] text-emerald-700 uppercase mb-2">Email</h3>
//               <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-6">Feel Free to Mail</p>
//               <div className="space-y-2 text-slate-800 font-semibold text-sm break-all">
//                 <p>yogleelasulphur@gmail.com</p>
//                 <p>yogleelasulphur@yahoo.com</p>
//                 <p>sales@yogleelasulphur.com</p>
//               </div>
//             </div>
//           </motion.div>

//           {/* Office Address Card */}
//           <motion.div 
//             variants={fadeUp} 
//             whileHover={{ y: -8 }}
//             className="p-10 bg-white border-2 border-emerald-900/10 rounded-[2.5rem] shadow-[0_20px_40px_-15px_rgba(6,78,59,0.07)] hover:border-emerald-600 transition-all duration-500 flex flex-col justify-between group"
//           >
//             <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-emerald-900 transition-colors duration-500">
//               <svg className="w-7 h-7 text-emerald-800 group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//               </svg>
//             </div>
//             <div>
//               <h3 className="text-xs font-bold tracking-[0.2em] text-emerald-700 uppercase mb-2">Office Address</h3>
//               <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-6">Our Main Address</p>
//               <p className="text-slate-800 font-semibold text-sm leading-relaxed">
//                 B 104 Raj Heights, MG road, Kandivali West, Mumbai 400067
//               </p>
//             </div>
//           </motion.div>
//         </motion.div>
//       </section>

//       {/* 3. INTERACTIVE FORM & ACCURATE GOOGLE MAP */}
//       <section className="py-32 px-6 lg:px-12 bg-[#F9FAF8] border-t border-emerald-900/5 relative overflow-hidden">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
//           {/* Left Column: Form */}
//           <motion.div 
//             initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
//             className="lg:col-span-7 bg-white p-10 md:p-14 rounded-[2.5rem] border border-emerald-100 shadow-2xl shadow-emerald-900/5"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-emerald-950 mb-4 tracking-tight">
//               Let's Connect and Build Something Great Together
//             </h2>
//             <p className="text-slate-500 font-medium mb-10">Fill out the form below and our team will get back to you promptly.</p>

//             {formSubmitted ? (
//               <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="p-8 bg-emerald-50 border border-emerald-200 rounded-2xl text-center">
//                 <h3 className="text-2xl font-bold text-emerald-900 mb-2">Message Sent Successfully!</h3>
//                 <p className="text-slate-600 font-medium">Thank you for reaching out. We will contact you shortly.</p>
//               </motion.div>
//             ) : (
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div>
//                     <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">Company Name *</label>
//                     <input required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors text-slate-800 font-medium" placeholder="Your Company" />
//                   </div>
//                   <div>
//                     <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">Phone *</label>
//                     <input required type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors text-slate-800 font-medium" placeholder="+91 99999 99999" />
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div>
//                     <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">Email *</label>
//                     <input required type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors text-slate-800 font-medium" placeholder="name@company.com" />
//                   </div>
//                   <div>
//                     <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">Subject *</label>
//                     <input required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors text-slate-800 font-medium" placeholder="Inquiry regarding Sulphur..." />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">Message *</label>
//                   <textarea required rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors text-slate-800 font-medium" placeholder="Write your message here..."></textarea>
//                 </div>

//                 <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" className="w-full py-4 bg-emerald-800 text-white rounded-xl font-bold tracking-wide shadow-lg shadow-emerald-800/20 hover:bg-emerald-900 transition-colors">
//                   Send Message
//                 </motion.button>
//               </form>
//             )}
//           </motion.div>

//           {/* Right Column: Correctly Pinned Google Map for Raj Heights, Kandivali West */}
//           <motion.div 
//             initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
//             className="lg:col-span-5 bg-white p-6 rounded-[2.5rem] border border-emerald-100 shadow-2xl shadow-emerald-900/5 flex flex-col h-full"
//           >
//             <div className="mb-6 flex justify-between items-center px-2">
//               <h3 className="font-bold text-slate-900">Get Directions</h3>
//               <a 
//                 href="https://www.google.com/maps/search/?api=1&query=Raj+Heights+MG+Road+Kandivali+West+Mumbai+400067" 
//                 target="_blank" 
//                 rel="noopener noreferrer" 
//                 className="text-xs font-bold text-emerald-700 hover:underline"
//               >
//                 Open in Google Maps ↗
//               </a>
//             </div>

//             <div className="w-full h-[480px] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 relative">
//                <iframe 
//                  title="Raj Heights Kandivali West Location Map"
//                  src="https://maps.google.com/maps?q=Raj+Heights,+MG+Road,+Kandivali+West,+Mumbai+400067&t=&z=16&ie=UTF8&iwloc=&output=embed" 
//                  width="100%" 
//                  height="100%" 
//                  style={{ border: 0 }} 
//                  allowFullScreen={false} 
//                  loading="lazy"
//                ></iframe>
//             </div>
//           </motion.div>

//         </div>
//       </section>

//     </main>
//   );
// }

"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeInOut" as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#FDFDFD] text-slate-900 selection:bg-emerald-300 selection:text-emerald-950 overflow-x-hidden pt-20">
      
      <section className="relative w-full min-h-[50vh] flex flex-col justify-end px-6 lg:px-12 pb-20 bg-gradient-to-br from-emerald-50 via-white to-emerald-100/40 border-b border-emerald-900/10 overflow-hidden">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-start"
        >
          <motion.div variants={fadeUp} className="mb-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-600 text-white text-[10px] font-bold tracking-[0.3em] uppercase shadow-lg shadow-emerald-600/20">
              Get in Touch
            </span>
          </motion.div>
          
          <motion.h1 variants={fadeUp} className="text-6xl md:text-7xl lg:text-[8rem] font-medium tracking-tighter text-emerald-950 leading-[0.95]">
            Let's <span className="font-light italic text-emerald-600 pr-4">Connect.</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-6 text-xl text-emerald-900/70 font-medium max-w-xl leading-relaxed">
            Reach out to our offices or drop a message to build something extraordinary together.
          </motion.p>
        </motion.div>
      </section>

      <section className="py-24 px-6 lg:px-12 bg-white">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <motion.div 
            variants={fadeUp} 
            whileHover={{ y: -8 }}
            className="p-10 bg-white border-2 border-emerald-900/10 rounded-[2.5rem] shadow-[0_20px_40px_-15px_rgba(6,78,59,0.07)] hover:border-emerald-600 transition-all duration-500 flex flex-col justify-between group"
          >
            <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-emerald-900 transition-colors duration-500">
              <svg className="w-7 h-7 text-emerald-800 group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xs font-bold tracking-[0.2em] text-emerald-700 uppercase mb-2">Mobile</h3>
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-6">Free Dial Number</p>
              <div className="space-y-2 text-slate-800 font-semibold text-sm">
                <p>+91 9930993051</p>
                <p>+91 9920306668</p>
                <p>+91 9821252090</p>
                <p>+91 9920878518</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            variants={fadeUp} 
            whileHover={{ y: -8 }}
            className="p-10 bg-white border-2 border-emerald-900/10 rounded-[2.5rem] shadow-[0_20px_40px_-15px_rgba(6,78,59,0.07)] hover:border-emerald-600 transition-all duration-500 flex flex-col justify-between group"
          >
            <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-emerald-900 transition-colors duration-500">
              <svg className="w-7 h-7 text-emerald-800 group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xs font-bold tracking-[0.2em] text-emerald-700 uppercase mb-2">Email</h3>
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-6">Feel Free to Mail</p>
              <div className="space-y-2 text-slate-800 font-semibold text-sm break-all">
                <p>yogleelasulphur@gmail.com</p>
                <p>yogleelasulphur@yahoo.com</p>
                <p>sales@yogleelasulphur.com</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            variants={fadeUp} 
            whileHover={{ y: -8 }}
            className="p-10 bg-white border-2 border-emerald-900/10 rounded-[2.5rem] shadow-[0_20px_40px_-15px_rgba(6,78,59,0.07)] hover:border-emerald-600 transition-all duration-500 flex flex-col justify-between group"
          >
            <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-emerald-900 transition-colors duration-500">
              <svg className="w-7 h-7 text-emerald-800 group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xs font-bold tracking-[0.2em] text-emerald-700 uppercase mb-2">Office Address</h3>
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-6">Our Main Address</p>
              <p className="text-slate-800 font-semibold text-sm leading-relaxed">
                B 104 Raj Heights, MG road, Kandivali West, Mumbai 400067
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="py-32 px-6 lg:px-12 bg-[#F9FAF8] border-t border-emerald-900/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="lg:col-span-7 bg-white p-10 md:p-14 rounded-[2.5rem] border border-emerald-100 shadow-2xl shadow-emerald-900/5"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-950 mb-4 tracking-tight">
              Let's Connect and Build Something Great Together
            </h2>
            <p className="text-slate-500 font-medium mb-10">Fill out the form below and our team will get back to you promptly.</p>

            {formSubmitted ? (
              <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="p-8 bg-emerald-50 border border-emerald-200 rounded-2xl text-center">
                <h3 className="text-2xl font-bold text-emerald-900 mb-2">Message Sent Successfully!</h3>
                <p className="text-slate-600 font-medium">Thank you for reaching out. We will contact you shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">Company Name *</label>
                    <input required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors text-slate-800 font-medium" placeholder="Your Company" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">Phone *</label>
                    <input required type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors text-slate-800 font-medium" placeholder="+91 99999 99999" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">Email *</label>
                    <input required type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors text-slate-800 font-medium" placeholder="name@company.com" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">Subject *</label>
                    <input required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors text-slate-800 font-medium" placeholder="Inquiry regarding Sulphur..." />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">Message *</label>
                  <textarea required rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors text-slate-800 font-medium" placeholder="Write your message here..."></textarea>
                </div>

                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" className="w-full py-4 bg-emerald-800 text-white rounded-xl font-bold tracking-wide shadow-lg shadow-emerald-800/20 hover:bg-emerald-900 transition-colors">
                  Send Message
                </motion.button>
              </form>
            )}
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="lg:col-span-5 bg-white p-6 rounded-[2.5rem] border border-emerald-100 shadow-2xl shadow-emerald-900/5 flex flex-col h-full"
          >
            <div className="mb-6 flex justify-between items-center px-2">
              <h3 className="font-bold text-slate-900">Get Directions</h3>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Raj+Heights+MG+Road+Kandivali+West+Mumbai+400067" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-xs font-bold text-emerald-700 hover:underline"
              >
                Open in Google Maps ↗
              </a>
            </div>

            <div className="w-full h-[480px] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 relative">
               <iframe 
                 title="Raj Heights Kandivali West Location Map"
                 src="https://maps.google.com/maps?q=Raj+Heights,+MG+Road,+Kandivali+West,+Mumbai+400067&t=&z=16&ie=UTF8&iwloc=&output=embed" 
                 width="100%" 
                 height="100%" 
                 style={{ border: 0 }} 
                 allowFullScreen={false} 
                 loading="lazy"
               ></iframe>
            </div>
          </motion.div>

        </div>
      </section>

    </main>
  );
}