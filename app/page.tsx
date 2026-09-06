// // "use client";

// // import Link from "next/link";
// // import { motion } from "framer-motion";

// // // Reusable animation variants for that Awwwards feel
// // const fadeUp = {
// //   hidden: { opacity: 0, y: 40 },
// //   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } }
// // };

// // const fadeUpSlow = {
// //   hidden: { opacity: 0, y: 60 },
// //   visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.25, 1, 0.5, 1] } }
// // };

// // const staggerContainer = {
// //   hidden: { opacity: 0 },
// //   visible: {
// //     opacity: 1,
// //     transition: { staggerChildren: 0.15, delayChildren: 0.1 }
// //   }
// // };

// // export default function Home() {
// //   return (
// //     <main className="min-h-screen bg-[#FDFDFD] selection:bg-emerald-200 selection:text-emerald-900 overflow-x-hidden">
      
// //       {/* Loading Curtain Reveal */}
// //       <motion.div 
// //         initial={{ y: 0 }}
// //         animate={{ y: "-100%" }}
// //         transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
// //         className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center"
// //       />

// //       {/* 1. HERO SECTION */}
// //       <section className="relative w-full min-h-[90vh] flex flex-col justify-center px-6 lg:px-12 py-24 lg:py-0 border-b border-slate-100 overflow-hidden">
// //         <motion.div 
// //           initial={{ scale: 1.1 }}
// //           animate={{ scale: 1 }}
// //           transition={{ duration: 2.5, ease: "easeOut", delay: 0.2 }}
// //           className="absolute inset-0 bg-[url('/images/hero-bg.png')] bg-cover bg-center bg-no-repeat"
// //         />
        
// //         <div className="relative z-10 max-w-7xl mx-auto w-full">
// //           <motion.div 
// //             variants={staggerContainer}
// //             initial="hidden"
// //             animate="visible"
// //             className="max-w-2xl flex flex-col items-start text-left pt-12 lg:pt-0"
// //           >
// //             <motion.div variants={fadeUp} className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-md mb-8 shadow-sm">
// //               <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
// //               <span className="text-[10px] font-bold text-emerald-950 tracking-[0.25em] uppercase">Premium Formulations</span>
// //             </motion.div>

// //             <motion.h1 variants={fadeUp} className="text-6xl md:text-7xl lg:text-[6rem] font-medium tracking-tighter text-slate-900 mb-6 leading-[1]">
// //               Engineered <br/>
// //               <span className="text-emerald-800 italic font-light tracking-tight pr-2">Sulphur.</span>
// //             </motion.h1>
            
// //             <motion.p variants={fadeUp} className="text-lg text-slate-700 font-light max-w-md mb-12 leading-relaxed">
// //               High-purity, scientifically formulated solutions driving the foundation of global agriculture and heavy manufacturing.
// //             </motion.p>
            
// //             <motion.div variants={fadeUp} className="flex items-center gap-6">
// //               <Link href="/products" className="group flex items-center justify-center w-16 h-16 bg-emerald-900 text-white rounded-full hover:bg-emerald-800 hover:scale-105 transition-all duration-300 shadow-xl shadow-emerald-900/20">
// //                 <svg className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
// //               </Link>
// //               <span className="text-sm font-semibold tracking-wide text-slate-900 uppercase">Explore Products</span>
// //             </motion.div>
// //           </motion.div>
// //         </div>
// //       </section>

// //       {/* 2. ABOUT US */}
// //       <section className="py-32 px-6 lg:px-12 bg-white relative overflow-hidden">
// //         <motion.div 
// //           initial="hidden"
// //           whileInView="visible"
// //           viewport={{ once: true, margin: "-100px" }}
// //           variants={staggerContainer}
// //           className="max-w-7xl mx-auto"
// //         >
// //           <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
// //             <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-light text-slate-900 tracking-tight max-w-3xl leading-[1.1]">
// //               Over Two Decades of <span className="font-semibold text-emerald-900">Innovation, Quality & Trust.</span>
// //             </motion.h2>
// //             <motion.div variants={fadeUp}>
// //               <Link href="/about" className="group text-xs font-bold tracking-[0.2em] uppercase text-slate-400 hover:text-emerald-700 transition-colors flex items-center gap-2">
// //                 Our Story <span className="block w-8 h-[1px] bg-slate-300 group-hover:bg-emerald-700 group-hover:w-12 transition-all duration-300"></span>
// //               </Link>
// //             </motion.div>
// //           </div>

// //           <div className="grid grid-cols-1 md:grid-cols-2 gap-y-24 gap-x-12">
// //             {[
// //               { title: "Empower Farmers", desc: "Guiding cultivators to increase crop yields while promoting awareness of advanced, sustainable protection practices." },
// //               { title: "Customer-Centric", desc: "Delivering absolute service excellence by providing customized, scientifically-backed solutions tailored strictly to client requirements." },
// //               { title: "Long-Term Vision", desc: "Building unbreakable partnerships with suppliers, distributors, and global stakeholders through uncompromising reliability." },
// //               { title: "Pioneering Protection", desc: "Developing innovative, effective, and sustainable compounds that actively contribute to modern agricultural growth." }
// //             ].map((item, i) => (
// //               <motion.div variants={fadeUp} key={i} className="relative group pl-8 border-l border-slate-200 hover:border-emerald-500 transition-colors duration-500">
// //                 <span className="absolute -top-12 -left-4 text-[8rem] font-bold text-slate-50/80 group-hover:text-emerald-50/80 transition-colors duration-500 select-none z-0">
// //                   0{i+1}
// //                 </span>
// //                 <div className="relative z-10">
// //                   <h3 className="text-2xl font-semibold text-slate-900 mb-4">{item.title}</h3>
// //                   <p className="text-slate-500 font-light leading-relaxed max-w-sm">{item.desc}</p>
// //                 </div>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </motion.div>
// //       </section>

// //       {/* 3. WHY CHOOSE US */}
// //       <section className="py-32 px-6 lg:px-12 bg-[#F7F9F6] relative border-y border-slate-100 overflow-hidden">
// //         <motion.div 
// //           initial="hidden"
// //           whileInView="visible"
// //           viewport={{ once: true, margin: "-100px" }}
// //           variants={staggerContainer}
// //           className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center"
// //         >
// //           <div className="lg:w-5/12 z-10">
// //             <motion.span variants={fadeUp} className="text-[10px] font-bold tracking-[0.25em] text-emerald-600 uppercase mb-6 block">Why Yogleela</motion.span>
// //             <motion.h2 variants={fadeUp} className="text-5xl font-semibold text-slate-900 tracking-tight leading-[1.05] mb-8">
// //               Delivering <span className="text-emerald-800 italic font-light pr-2">Absolute</span> Quality for Industry.
// //             </motion.h2>
// //             <motion.p variants={fadeUp} className="text-slate-600 font-light text-lg leading-relaxed mb-10">
// //               Since 2002, we have redefined sulphur manufacturing. Backed by advanced R&D and modern facilities, we formulate solutions that drive global markets without compromise.
// //             </motion.p>
// //             <motion.div variants={fadeUp}>
// //               <Link href="/contact" className="inline-flex items-center gap-3 text-sm font-semibold text-slate-900 hover:text-emerald-700 transition-colors group">
// //                 Partner with us 
// //                 <span className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center group-hover:border-emerald-600 group-hover:bg-emerald-50 transition-all duration-300">
// //                   <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
// //                 </span>
// //               </Link>
// //             </motion.div>
// //           </div>
          
// //           <div className="lg:w-7/12 relative w-full h-[600px]">
// //             <motion.div variants={fadeUpSlow} className="absolute top-0 right-0 w-3/4 h-[400px] rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50 z-20 group">
// //               <div className="absolute inset-0 bg-[url('/images/hero-bg.png')] bg-cover bg-center group-hover:scale-105 transition-transform duration-[1.5s] ease-out"></div>
// //               <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-transparent to-transparent"></div>
// //               <div className="absolute bottom-8 left-8 right-8 text-white">
// //                 <span className="text-6xl font-semibold tracking-tighter block mb-2">80<span className="text-3xl text-emerald-400">%</span></span>
// //                 <span className="text-sm font-light tracking-wide text-emerald-100 uppercase">Process Efficiency</span>
// //               </div>
// //             </motion.div>
// //             <motion.div variants={fadeUpSlow} className="absolute bottom-0 left-0 w-3/4 h-[350px] rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50 z-10 group">
// //               <div className="absolute inset-0 bg-[url('/images/hero-bg.png')] bg-cover bg-center group-hover:scale-105 transition-transform duration-[1.5s] ease-out"></div>
// //               <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent"></div>
// //               <div className="absolute bottom-8 left-8 right-8 text-white">
// //                 <span className="text-6xl font-semibold tracking-tighter block mb-2">50<span className="text-3xl text-slate-400">%</span></span>
// //                 <span className="text-sm font-light tracking-wide text-slate-300 uppercase">Farm Yield Growth</span>
// //               </div>
// //             </motion.div>
// //           </div>
// //         </motion.div>
// //       </section>

// //       {/* 4. TRUST BENTO GRID */}
// //       <section className="py-32 px-6 lg:px-12 bg-[#02130A] text-white">
// //         <motion.div 
// //           initial="hidden"
// //           whileInView="visible"
// //           viewport={{ once: true, margin: "-100px" }}
// //           variants={staggerContainer}
// //           className="max-w-7xl mx-auto"
// //         >
// //           <div className="mb-20">
// //             <motion.span variants={fadeUp} className="text-[10px] font-bold tracking-[0.25em] text-emerald-500 uppercase mb-6 block">The Standard</motion.span>
// //             <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-light tracking-tight leading-[1.1] max-w-2xl">
// //               Trusted solutions backed by <span className="font-semibold text-white">innovation.</span>
// //             </motion.h2>
// //           </div>
          
// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
// //             {[
// //               { title: "Advanced Manufacturing", colSpan: "lg:col-span-2" },
// //               { title: "Research & Development", colSpan: "lg:col-span-1" },
// //               { title: "Crop Protection", colSpan: "lg:col-span-2" },
// //               { title: "Industrial Applications", colSpan: "lg:col-span-3" },
// //               { title: "Customer-First", colSpan: "lg:col-span-2" }
// //             ].map((item, i) => (
// //               <motion.div variants={fadeUp} key={i} className={`${item.colSpan} relative h-48 rounded-2xl bg-white/5 border border-white/10 p-8 flex flex-col justify-end group hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-500 overflow-hidden`}>
// //                 <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-all duration-500"></div>
// //                 <span className="text-emerald-500/50 font-bold text-sm mb-auto">0{i+1}</span>
// //                 <h3 className="font-medium text-lg text-white/90 tracking-wide z-10">{item.title}</h3>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </motion.div>
// //       </section>

// //       {/* 5. INDUSTRIES */}
// //       <section className="py-32 px-6 lg:px-12 bg-white">
// //         <motion.div 
// //           initial="hidden"
// //           whileInView="visible"
// //           viewport={{ once: true, margin: "-100px" }}
// //           variants={staggerContainer}
// //           className="max-w-7xl mx-auto"
// //         >
// //           <motion.div variants={fadeUp} className="mb-24">
// //             <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight leading-[1.1]">
// //               Powering Diverse Industries.
// //             </h2>
// //           </motion.div>

// //           <div className="flex flex-col border-t border-slate-200">
// //             {[
// //               { title: "Farming", desc: "Improving soil fertility, crop nutrition, and overall agricultural productivity.", link: "/products" },
// //               { title: "Rubber & Tyre", desc: "Essential for vulcanization, improving the strength and elasticity of rubber.", link: "/sulphur-powder-rubber-tyre-grade-microfine-grade" },
// //               { title: "Pharmaceutical", desc: "Pharma-grade sulphur strictly regulated for dermatological formulations.", link: "/sulphur-amlasar" },
// //               { title: "Explosives", desc: "Industrial sulphur utilized in the production of specialized formulations.", link: "/sulphur-powder" },
// //               { title: "Sugar Refining", desc: "Crucial during sugar processing to improve purification and color control.", link: "/sulphur-rock-granules-pallets" }
// //             ].map((ind, i) => (
// //               <motion.div variants={fadeUp} key={i}>
// //                 <Link href={ind.link} className="group flex flex-col lg:flex-row items-start lg:items-center justify-between py-10 border-b border-slate-200 hover:px-6 hover:bg-slate-50 transition-all duration-500">
// //                   <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
// //                     <h3 className="text-3xl font-light text-slate-900 group-hover:text-emerald-800 transition-colors">{ind.title}</h3>
// //                   </div>
                  
// //                   <div className="w-full lg:w-1/3 mb-6 lg:mb-0 px-0 lg:px-8">
// //                     <p className="text-slate-500 font-light text-sm leading-relaxed">{ind.desc}</p>
// //                   </div>
                  
// //                   <div className="w-full lg:w-1/3 flex items-center justify-end gap-8">
// //                     <div className="w-32 h-16 rounded-full bg-slate-200 overflow-hidden relative opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-out hidden md:block">
// //                        <div className="absolute inset-0 bg-[url('/images/hero-bg.png')] bg-cover bg-center"></div>
// //                     </div>
// //                     <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-emerald-300 group-hover:bg-emerald-50 transition-colors">
// //                       <svg className="w-4 h-4 text-slate-400 group-hover:text-emerald-700 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
// //                     </div>
// //                   </div>
// //                 </Link>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </motion.div>
// //       </section>

// //       {/* 6. FEATURED PRODUCTS */}
// //       <section className="py-32 px-6 lg:px-12 bg-[#F9FAFA]">
// //         <motion.div 
// //           initial="hidden"
// //           whileInView="visible"
// //           viewport={{ once: true, margin: "-100px" }}
// //           variants={staggerContainer}
// //           className="max-w-7xl mx-auto"
// //         >
// //           <div className="flex justify-between items-end mb-20">
// //             <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-light text-slate-900 tracking-tight leading-[1.1]">
// //               Trusted <span className="font-semibold text-emerald-900">Formulations.</span>
// //             </motion.h2>
// //             <motion.div variants={fadeUp}>
// //               <Link href="/products" className="text-xs font-bold tracking-[0.2em] uppercase text-emerald-700 hover:text-slate-900 transition-colors hidden md:block">
// //                 View Catalogue
// //               </Link>
// //             </motion.div>
// //           </div>

// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
// //             {[
// //               { title: "SUNVET-DF", sub: "Sulphur 80% WDG", desc: "Water dispersible granules containing 80% Sulphur as active ingredient." },
// //               { title: "COSMIC FERTILE", sub: "Sulphur 90% WDG", desc: "Improves nutrient uptake, photosynthesis and healthy crop growth." },
// //               { title: "DUOCARE", sub: "Sulphur 65% + Tebuconazole 10%", desc: "Effective fungicide with protective, curative and eradicative action." }
// //             ].map((prod, i) => (
// //               <motion.div variants={fadeUp} key={i} className="group flex flex-col items-center text-center">
// //                 <div className="w-full aspect-[4/5] bg-white rounded-2xl mb-8 relative overflow-hidden flex items-center justify-center p-12 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-slate-200/50 cursor-pointer">
// //                    <div className="w-full h-full bg-[url('/images/hero-bg.png')] bg-contain bg-center bg-no-repeat group-hover:scale-110 transition-transform duration-700 ease-out mix-blend-multiply opacity-80"></div>
// //                 </div>
// //                 <h3 className="text-xl font-semibold text-slate-900 mb-2">{prod.title}</h3>
// //                 <p className="text-xs font-bold tracking-widest text-emerald-600 uppercase mb-4">{prod.sub}</p>
// //                 <p className="text-slate-500 font-light text-sm leading-relaxed max-w-xs">{prod.desc}</p>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </motion.div>
// //       </section>
// //     </main>
// //   );
// // }

// "use client";

// import Link from "next/link";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";

// // ---------------------------------------------------
// // SUPER HEAVY AWWWARDS ANIMATION VARIANTS
// // ---------------------------------------------------
// const transitionLux = { duration: 1.4, ease: [0.16, 1, 0.3, 1] };

// const fadeUp = {
//   hidden: { opacity: 0, y: 60 },
//   visible: { opacity: 1, y: 0, transition: transitionLux }
// };

// const fadeUpSlow = {
//   hidden: { opacity: 0, y: 100 },
//   visible: { opacity: 1, y: 0, transition: { duration: 1.8, ease: [0.16, 1, 0.3, 1] } }
// };

// const maskUp = {
//   hidden: { y: "120%", rotate: 2 },
//   visible: { y: "0%", rotate: 0, transition: transitionLux }
// };

// const scaleIn = {
//   hidden: { opacity: 0, scale: 0.85 },
//   visible: { opacity: 1, scale: 1, transition: transitionLux }
// };

// const staggerContainer = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.15, delayChildren: 0.1 }
//   }
// };

// const staggerMask = {
//   hidden: {},
//   visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
// };

// export default function Home() {
//   // Global & Local Scroll References for Parallax
//   const { scrollYProgress: globalScroll } = useScroll();
//   const heroBgY = useTransform(globalScroll, [0, 1], ["0%", "40%"]);
//   const heroBgScale = useTransform(globalScroll, [0, 1], [1, 1.15]);

//   const whyChooseRef = useRef(null);
//   const { scrollYProgress: whyChooseScroll } = useScroll({ target: whyChooseRef, offset: ["start end", "end start"] });
//   const card1Y = useTransform(whyChooseScroll, [0, 1], ["20%", "-20%"]);
//   const card2Y = useTransform(whyChooseScroll, [0, 1], ["-10%", "30%"]);

//   return (
//     <main className="min-h-screen bg-[#FDFDFD] selection:bg-emerald-200 selection:text-emerald-900 overflow-x-hidden">
      
//       {/* Loading Curtain Reveal */}
//       <motion.div 
//         initial={{ y: 0 }}
//         animate={{ y: "-100%" }}
//         transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
//         className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center pointer-events-none"
//       />

//       {/* 1. HERO SECTION (Heavy Parallax Background) */}
//       <section className="relative w-full min-h-[90vh] flex flex-col justify-center px-6 lg:px-12 py-24 lg:py-0 border-b border-slate-100 overflow-hidden">
//         <motion.div 
//           style={{ y: heroBgY, scale: heroBgScale }}
//           initial={{ scale: 1.2, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
//           className="absolute inset-0 w-full h-[120%] -top-[10%] bg-[url('/images/hero-bg.png')] bg-cover bg-center bg-no-repeat"
//         />
        
//         <div className="relative z-10 max-w-7xl mx-auto w-full">
//           <motion.div 
//             variants={staggerMask}
//             initial="hidden"
//             animate="visible"
//             className="max-w-2xl flex flex-col items-start text-left pt-12 lg:pt-0"
//           >
//             <motion.div variants={scaleIn} className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-md mb-8 shadow-sm">
//               <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
//               <span className="text-[10px] font-bold text-emerald-950 tracking-[0.25em] uppercase">Premium Formulations</span>
//             </motion.div>

//             <h1 className="text-6xl md:text-7xl lg:text-[6rem] font-medium tracking-tighter text-slate-900 mb-6 leading-[1] flex flex-col">
//               <div className="overflow-hidden pb-2"><motion.span variants={maskUp} className="block">Engineered</motion.span></div>
//               <div className="overflow-hidden pb-4"><motion.span variants={maskUp} className="block text-emerald-800 italic font-light tracking-tight pr-2">Sulphur.</motion.span></div>
//             </h1>
            
//             <motion.p variants={fadeUp} className="text-lg text-slate-700 font-light max-w-md mb-12 leading-relaxed">
//               High-purity, scientifically formulated solutions driving the foundation of global agriculture and heavy manufacturing.
//             </motion.p>
            
//             <motion.div variants={fadeUp} className="flex items-center gap-6">
//               <Link href="/products" className="group flex items-center justify-center w-16 h-16 bg-emerald-900 text-white rounded-full hover:bg-emerald-800 hover:scale-105 transition-all duration-500 shadow-xl shadow-emerald-900/20">
//                 <svg className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
//               </Link>
//               <span className="text-sm font-semibold tracking-wide text-slate-900 uppercase">Explore Products</span>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>

//       {/* 2. ABOUT US (Staggered Masks & Hover Kinetics) */}
//       <section className="py-32 px-6 lg:px-12 bg-white relative overflow-hidden">
//         <motion.div 
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//           variants={staggerMask}
//           className="max-w-7xl mx-auto"
//         >
//           <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
//             <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-slate-900 tracking-tight max-w-3xl leading-[1.1] flex flex-wrap gap-x-3 overflow-hidden pb-2">
//               <motion.span variants={maskUp}>Over</motion.span> 
//               <motion.span variants={maskUp}>Two</motion.span> 
//               <motion.span variants={maskUp}>Decades</motion.span> 
//               <motion.span variants={maskUp}>of</motion.span> 
//               <motion.span variants={maskUp} className="font-semibold text-emerald-900">Innovation,</motion.span> 
//               <motion.span variants={maskUp} className="font-semibold text-emerald-900">Quality</motion.span> 
//               <motion.span variants={maskUp} className="font-semibold text-emerald-900">& Trust.</motion.span>
//             </h2>
//             <motion.div variants={fadeUp}>
//               <Link href="/about" className="group text-xs font-bold tracking-[0.2em] uppercase text-slate-400 hover:text-emerald-700 transition-colors flex items-center gap-2">
//                 Our Story <span className="block w-8 h-[1px] bg-slate-300 group-hover:bg-emerald-700 group-hover:w-12 transition-all duration-500"></span>
//               </Link>
//             </motion.div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-y-24 gap-x-12">
//             {[
//               { title: "Empower Farmers", desc: "Guiding cultivators to increase crop yields while promoting awareness of advanced, sustainable protection practices." },
//               { title: "Customer-Centric", desc: "Delivering absolute service excellence by providing customized, scientifically-backed solutions tailored strictly to client requirements." },
//               { title: "Long-Term Vision", desc: "Building unbreakable partnerships with suppliers, distributors, and global stakeholders through uncompromising reliability." },
//               { title: "Pioneering Protection", desc: "Developing innovative, effective, and sustainable compounds that actively contribute to modern agricultural growth." }
//             ].map((item, i) => (
//               <motion.div variants={fadeUpSlow} key={i} className="relative group pl-8 border-l border-slate-200 hover:border-emerald-500 transition-colors duration-700">
//                 <motion.span 
//                   className="absolute -top-12 -left-4 text-[8rem] font-bold text-slate-50/80 transition-colors duration-700 select-none z-0 group-hover:text-emerald-50/80"
//                   whileHover={{ scale: 1.1, rotate: -2 }}
//                   transition={{ type: "spring", stiffness: 200, damping: 10 }}
//                 >
//                   0{i+1}
//                 </motion.span>
//                 <div className="relative z-10">
//                   <h3 className="text-2xl font-semibold text-slate-900 mb-4">{item.title}</h3>
//                   <p className="text-slate-500 font-light leading-relaxed max-w-sm">{item.desc}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </section>

//       {/* 3. WHY CHOOSE US (Opposing Scroll Parallax on Cards) */}
//       <section ref={whyChooseRef} className="py-32 px-6 lg:px-12 bg-[#F7F9F6] relative border-y border-slate-100 overflow-hidden">
//         <motion.div 
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//           variants={staggerContainer}
//           className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center"
//         >
//           <div className="lg:w-5/12 z-10">
//             <motion.span variants={fadeUp} className="text-[10px] font-bold tracking-[0.25em] text-emerald-600 uppercase mb-6 block">Why Yogleela</motion.span>
//             <div className="overflow-hidden pb-4">
//               <motion.h2 variants={maskUp} className="text-5xl font-semibold text-slate-900 tracking-tight leading-[1.05] mb-8">
//                 Delivering <span className="text-emerald-800 italic font-light pr-2">Absolute</span> Quality for Industry.
//               </motion.h2>
//             </div>
//             <motion.p variants={fadeUp} className="text-slate-600 font-light text-lg leading-relaxed mb-10">
//               Since 2002, we have redefined sulphur manufacturing. Backed by advanced R&D and modern facilities, we formulate solutions that drive global markets without compromise.
//             </motion.p>
//             <motion.div variants={fadeUp}>
//               <Link href="/contact" className="inline-flex items-center gap-3 text-sm font-semibold text-slate-900 hover:text-emerald-700 transition-colors group">
//                 Partner with us 
//                 <span className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center group-hover:border-emerald-600 group-hover:bg-emerald-50 transition-all duration-500 ease-[0.16,1,0.3,1]">
//                   <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
//                 </span>
//               </Link>
//             </motion.div>
//           </div>
          
//           <div className="lg:w-7/12 relative w-full h-[600px] perspective-[1000px]">
//             {/* Parallax Card 1 */}
//             <motion.div style={{ y: card1Y }} className="absolute top-0 right-0 w-3/4 h-[400px] rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50 z-20 group">
//               <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 1.5, ease: [0.16,1,0.3,1] }} className="absolute inset-0 w-full h-full">
//                 <div className="absolute inset-0 bg-[url('/images/hero-bg.png')] bg-cover bg-center"></div>
//               </motion.div>
//               <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-transparent to-transparent pointer-events-none"></div>
//               <div className="absolute bottom-8 left-8 right-8 text-white pointer-events-none">
//                 <span className="text-6xl font-semibold tracking-tighter block mb-2">80<span className="text-3xl text-emerald-400">%</span></span>
//                 <span className="text-sm font-light tracking-wide text-emerald-100 uppercase">Process Efficiency</span>
//               </div>
//             </motion.div>

//             {/* Parallax Card 2 */}
//             <motion.div style={{ y: card2Y }} className="absolute bottom-0 left-0 w-3/4 h-[350px] rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50 z-10 group">
//               <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 1.5, ease: [0.16,1,0.3,1] }} className="absolute inset-0 w-full h-full">
//                 <div className="absolute inset-0 bg-[url('/images/hero-bg.png')] bg-cover bg-center"></div>
//               </motion.div>
//               <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent pointer-events-none"></div>
//               <div className="absolute bottom-8 left-8 right-8 text-white pointer-events-none">
//                 <span className="text-6xl font-semibold tracking-tighter block mb-2">50<span className="text-3xl text-slate-400">%</span></span>
//                 <span className="text-sm font-light tracking-wide text-slate-300 uppercase">Farm Yield Growth</span>
//               </div>
//             </motion.div>
//           </div>
//         </motion.div>
//       </section>

//       {/* 4. TRUST BENTO GRID (Deep Scale & Floating Orbs) */}
//       <section className="py-32 px-6 lg:px-12 bg-[#02130A] text-white overflow-hidden">
//         <motion.div 
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//           variants={staggerMask}
//           className="max-w-7xl mx-auto"
//         >
//           <div className="mb-20">
//             <motion.span variants={fadeUp} className="text-[10px] font-bold tracking-[0.25em] text-emerald-500 uppercase mb-6 block">The Standard</motion.span>
//             <div className="overflow-hidden pb-4">
//               <motion.h2 variants={maskUp} className="text-4xl md:text-6xl font-light tracking-tight leading-[1.1] max-w-2xl">
//                 Trusted solutions backed by <span className="font-semibold text-white">innovation.</span>
//               </motion.h2>
//             </div>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
//             {[
//               { title: "Advanced Manufacturing", colSpan: "lg:col-span-2" },
//               { title: "Research & Development", colSpan: "lg:col-span-1" },
//               { title: "Crop Protection", colSpan: "lg:col-span-2" },
//               { title: "Industrial Applications", colSpan: "lg:col-span-3" },
//               { title: "Customer-First", colSpan: "lg:col-span-2" }
//             ].map((item, i) => (
//               <motion.div variants={scaleIn} key={i} className={`${item.colSpan} relative h-48 rounded-2xl bg-white/5 border border-white/10 p-8 flex flex-col justify-end group hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-700 overflow-hidden`}>
//                 <motion.div 
//                   animate={{ 
//                     scale: [1, 1.2, 1], 
//                     x: [0, 20, 0],
//                     y: [0, -20, 0]
//                   }}
//                   transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut" }}
//                   className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/30 transition-all duration-700" 
//                 />
//                 <span className="text-emerald-500/50 font-bold text-sm mb-auto">0{i+1}</span>
//                 <h3 className="font-medium text-lg text-white/90 tracking-wide z-10 group-hover:text-emerald-300 transition-colors duration-500">{item.title}</h3>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </section>

//       {/* 5. INDUSTRIES (Staggered Row Reveals) */}
//       <section className="py-32 px-6 lg:px-12 bg-white">
//         <motion.div 
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//           variants={staggerMask}
//           className="max-w-7xl mx-auto"
//         >
//           <motion.div variants={fadeUp} className="mb-24 overflow-hidden pb-4">
//             <motion.h2 variants={maskUp} className="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight leading-[1.1]">
//               Powering Diverse Industries.
//             </motion.h2>
//           </motion.div>

//           <div className="flex flex-col border-t border-slate-200">
//             {[
//               { title: "Farming", desc: "Improving soil fertility, crop nutrition, and overall agricultural productivity.", link: "/products" },
//               { title: "Rubber & Tyre", desc: "Essential for vulcanization, improving the strength and elasticity of rubber.", link: "/sulphur-powder-rubber-tyre-grade-microfine-grade" },
//               { title: "Pharmaceutical", desc: "Pharma-grade sulphur strictly regulated for dermatological formulations.", link: "/sulphur-amlasar" },
//               { title: "Explosives", desc: "Industrial sulphur utilized in the production of specialized formulations.", link: "/sulphur-powder" },
//               { title: "Sugar Refining", desc: "Crucial during sugar processing to improve purification and color control.", link: "/sulphur-rock-granules-pallets" }
//             ].map((ind, i) => (
//               <motion.div variants={fadeUpSlow} key={i}>
//                 <Link href={ind.link} className="group flex flex-col lg:flex-row items-start lg:items-center justify-between py-10 border-b border-slate-200 hover:px-6 hover:bg-slate-50 transition-all duration-700 ease-[0.16,1,0.3,1]">
//                   <div className="w-full lg:w-1/3 mb-6 lg:mb-0 transform group-hover:translate-x-4 transition-transform duration-700 ease-[0.16,1,0.3,1]">
//                     <h3 className="text-3xl font-light text-slate-900 group-hover:text-emerald-800 transition-colors">{ind.title}</h3>
//                   </div>
                  
//                   <div className="w-full lg:w-1/3 mb-6 lg:mb-0 px-0 lg:px-8 transform group-hover:translate-x-2 transition-transform duration-700 delay-75 ease-[0.16,1,0.3,1]">
//                     <p className="text-slate-500 font-light text-sm leading-relaxed">{ind.desc}</p>
//                   </div>
                  
//                   <div className="w-full lg:w-1/3 flex items-center justify-end gap-8">
//                     <div className="w-32 h-16 rounded-full bg-slate-200 overflow-hidden relative opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700 ease-[0.16,1,0.3,1] hidden md:block">
//                        <div className="absolute inset-0 bg-[url('/images/hero-bg.png')] bg-cover bg-center"></div>
//                     </div>
//                     <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-emerald-300 group-hover:bg-emerald-50 transition-colors duration-500">
//                       <svg className="w-4 h-4 text-slate-400 group-hover:text-emerald-700 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
//                     </div>
//                   </div>
//                 </Link>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </section>

//       {/* 6. FEATURED PRODUCTS (3D Hover & Staggered Reveal) */}
//       <section className="py-32 px-6 lg:px-12 bg-[#F9FAFA]">
//         <motion.div 
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//           variants={staggerMask}
//           className="max-w-7xl mx-auto"
//         >
//           <div className="flex justify-between items-end mb-20 overflow-hidden pb-4">
//             <motion.h2 variants={maskUp} className="text-4xl md:text-5xl font-light text-slate-900 tracking-tight leading-[1.1]">
//               Trusted <span className="font-semibold text-emerald-900">Formulations.</span>
//             </motion.h2>
//             <motion.div variants={fadeUp}>
//               <Link href="/products" className="text-xs font-bold tracking-[0.2em] uppercase text-emerald-700 hover:text-slate-900 transition-colors hidden md:block">
//                 View Catalogue
//               </Link>
//             </motion.div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 perspective-[1000px]">
//             {[
//               { title: "SUNVET-DF", sub: "Sulphur 80% WDG", desc: "Water dispersible granules containing 80% Sulphur as active ingredient." },
//               { title: "COSMIC FERTILE", sub: "Sulphur 90% WDG", desc: "Improves nutrient uptake, photosynthesis and healthy crop growth." },
//               { title: "DUOCARE", sub: "Sulphur 65% + Tebuconazole 10%", desc: "Effective fungicide with protective, curative and eradicative action." }
//             ].map((prod, i) => (
//               <motion.div variants={fadeUpSlow} key={i} className="group flex flex-col items-center text-center">
//                 <motion.div 
//                   whileHover={{ y: -10, rotateX: 5, rotateY: -5 }}
//                   transition={{ duration: 0.6, ease: "easeOut" }}
//                   className="w-full aspect-[4/5] bg-white rounded-2xl mb-8 relative overflow-hidden flex items-center justify-center p-12 shadow-sm group-hover:shadow-2xl group-hover:shadow-emerald-900/10 cursor-pointer"
//                 >
//                    <motion.div 
//                      whileHover={{ scale: 1.15 }}
//                      transition={{ duration: 1.2, ease: [0.16,1,0.3,1] }}
//                      className="w-full h-full bg-[url('/images/hero-bg.png')] bg-contain bg-center bg-no-repeat mix-blend-multiply opacity-80" 
//                    />
//                 </motion.div>
//                 <h3 className="text-xl font-semibold text-slate-900 mb-2">{prod.title}</h3>
//                 <p className="text-xs font-bold tracking-widest text-emerald-600 uppercase mb-4">{prod.sub}</p>
//                 <p className="text-slate-500 font-light text-sm leading-relaxed max-w-xs">{prod.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </section>
//     </main>
//   );
// }

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const transitionLux = { duration: 1.2, ease: "easeInOut" as const };

const maskUp = {
  hidden: { y: "120%", rotate: 2 },
  visible: { y: "0%", rotate: 0, transition: transitionLux }
};

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: transitionLux }
};

export default function About() {
  const { scrollYProgress: globalScroll } = useScroll();
  const floatY1 = useTransform(globalScroll, [0, 1], ["0%", "200%"]);
  const floatY2 = useTransform(globalScroll, [0, 1], ["0%", "-150%"]);

  const founderRef = useRef(null);
  const { scrollYProgress: founderScroll } = useScroll({ target: founderRef, offset: ["start end", "end start"] });
  const founderImgY = useTransform(founderScroll, [0, 1], ["-20%", "20%"]);

  const visionRef = useRef(null);
  const { scrollYProgress: visionScroll } = useScroll({ target: visionRef, offset: ["start end", "end start"] });
  const visionScale = useTransform(visionScroll, [0, 1], [0.8, 1.2]);
  const visionTextY = useTransform(visionScroll, [0, 1], ["50%", "-50%"]);

  return (
    <main className="min-h-screen bg-[#FDFDFD] text-slate-900 selection:bg-emerald-300 selection:text-emerald-950 overflow-hidden pt-20 relative">
      <motion.div style={{ y: floatY1 }} className="absolute top-20 left-[-10%] w-[40vw] h-[40vw] bg-emerald-400/20 rounded-full blur-[120px] pointer-events-none -z-10" />
      <motion.div style={{ y: floatY2 }} className="absolute bottom-20 right-[-10%] w-[30vw] h-[30vw] bg-yellow-400/20 rounded-full blur-[100px] pointer-events-none -z-10" />

      <section className="relative w-full min-h-[70vh] flex flex-col justify-end px-6 lg:px-12 pb-24 border-b border-emerald-900/10">
        <div className="absolute top-1/3 left-0 w-full overflow-hidden whitespace-nowrap opacity-[0.03] pointer-events-none flex z-0">
          <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ repeat: Infinity, ease: "linear", duration: 25 }} className="flex text-[15rem] font-black text-emerald-900 leading-none tracking-tighter">
            <span>THE ORIGIN • THE LEGACY • THE FUTURE • THE ORIGIN • THE LEGACY • THE FUTURE • </span>
          </motion.div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-start">
          <div className="mb-8">
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-600 text-white text-[10px] font-bold tracking-[0.3em] uppercase shadow-lg shadow-emerald-600/20">
              Established 2002
            </span>
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-[8rem] font-medium tracking-tighter text-emerald-950 leading-[0.95] flex flex-col overflow-hidden">
            <div className="overflow-hidden pb-4"><span className="block">Our</span></div>
            <div className="overflow-hidden pb-4"><span className="block font-light italic text-emerald-600 pr-4">Story.</span></div>
          </h1>
          
          <p className="mt-8 text-xl text-emerald-900/70 font-medium max-w-2xl leading-relaxed">
            From our Sanskrit roots to global industrial mastery. Discover the foundation of Yogleela Sulphur.
          </p>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-12 relative z-10 bg-white/80 backdrop-blur-3xl shadow-[0_-20px_40px_rgba(0,0,0,0.02)]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2 flex flex-col justify-center">
            <span className="text-emerald-600 font-bold tracking-widest text-sm uppercase mb-6 block">The Meaning</span>
            <h2 className="text-4xl md:text-6xl font-light text-slate-900 leading-[1.1] mb-8">
              <span className="font-bold text-emerald-800">YOG</span> (Oneness) <br />
              <span className="font-bold text-emerald-800">+ LEELA</span> (Divine Play)
            </h2>
            <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed">
              <p>Combined, it signifies our ultimate connection through creation. The term <strong className="text-emerald-700">YOGA</strong> not only benefits the farmer but also the crops, creating a tranquil atmosphere where agriculture harmonizes with nature.</p>
              <p>Plant life responds to the vibration created by YOGA, forming a pure environment to help every creature and crop thrive.</p>
            </div>
          </div>

          <div className="lg:w-1/2 w-full relative">
            <div className="relative aspect-square w-full rounded-[3rem] overflow-hidden bg-emerald-50 shadow-2xl shadow-emerald-900/10 p-4 group">
               <div className="absolute inset-4 rounded-[2.5rem] bg-[url('/images/hero-bg.png')] bg-cover bg-center shadow-inner"></div>
            </div>
          </div>
        </div>
      </section>

      <section ref={founderRef} className="py-32 px-6 lg:px-12 bg-[#F9FAF8] border-y border-emerald-900/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse gap-20 items-start">
          <div className="lg:w-1/2 w-full sticky top-32">
            <div className="relative w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-white shadow-xl shadow-slate-200 p-3">
               <div className="absolute inset-3 rounded-[2rem] overflow-hidden">
                 <motion.div style={{ y: founderImgY, scale: 1.1 }} className="absolute inset-[-20%] bg-[url('/images/hero-bg.png')] bg-cover bg-center"></motion.div>
               </div>
            </div>
          </div>

          <div className="lg:w-1/2 flex flex-col">
            <span className="text-sm font-bold tracking-[0.25em] text-emerald-600 uppercase mb-4 block">The Visionary</span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-emerald-950 mb-8">Mr. Hitesh Dodecha</h2>

            <div className="p-8 bg-white border border-emerald-100 rounded-3xl mb-12 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-2 h-full bg-emerald-500 group-hover:w-full transition-all duration-700 ease-out z-0"></div>
              <p className="text-2xl font-light text-slate-800 italic leading-snug relative z-10 group-hover:text-white transition-colors duration-500 delay-100">
                "Success doesn't happen overnight. And the most successful individuals are those who are willing to put in a productive day's work before they even receive success."
              </p>
            </div>

            <div className="space-y-8 text-slate-700 font-medium leading-relaxed text-lg">
              <p>Our parent company, D.V.S. Chemical and Engineering Industries, has been manufacturing sulphur since 1968. Building on this strong foundation, Hitesh Dodecha established Yogleela Sulphur and Agchem Industries Private Limited (YSAAIPL) in 2002.</p>
              <p>He developed this fantastic company at a very young age, devoting all of his effort and passion to making it a reality. He raised the company and its employees as if they were his own children, driving an unwavering commitment to quality and expansion.</p>
              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-emerald-900/10">
                 <div>
                    <h4 className="text-4xl font-bold text-emerald-700 mb-2">2002</h4>
                    <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Year Founded</p>
                 </div>
                 <div>
                    <h4 className="text-4xl font-bold text-emerald-700 mb-2">Global</h4>
                    <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Export Reach</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={visionRef} className="h-[80vh] w-full bg-emerald-950 text-white relative overflow-hidden flex items-center justify-center">
        <motion.div style={{ scale: visionScale }} className="absolute inset-0 bg-emerald-800/20 blur-[100px] rounded-full"></motion.div>
        <motion.div style={{ y: visionTextY }} className="relative z-10 max-w-5xl mx-auto text-center px-6">
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-800/50 border border-emerald-400/30 text-emerald-300 text-xs font-bold tracking-[0.3em] uppercase mb-12">
            Company Vision
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light leading-[1.1] tracking-tight mb-12">
            "Crop Protection with <br/>
            <span className="font-semibold text-emerald-400 italic">Environmental Conservation.</span>"
          </h2>
          <p className="text-xl md:text-2xl text-emerald-50 font-light leading-relaxed max-w-3xl mx-auto">
            We are committed to sustainable agriculture, increasing the quality of the crops and the quantity of the yield, by providing vibrant solutions for enhancing absolute productivity.
          </p>
        </motion.div>
      </section>

      <section className="py-32 px-6 lg:px-12 bg-white relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 overflow-hidden">
            <span className="text-emerald-600 font-bold tracking-widest text-sm uppercase mb-4 block">Company Mission</span>
            <h2 className="text-5xl md:text-7xl font-semibold text-emerald-950 tracking-tight">Our Core Pillars.</h2>
          </div>
          
          <div className="flex flex-col">
            {[
              { title: "Farm Development", desc: "To help and guide farmers to increase crop yields and raise awareness for advanced, sustainable crop protection." },
              { title: "Crop Management", desc: "To provide the best services to our customers, customizing vibrant products strictly according to their agricultural and industrial requirements." },
              { title: "Lasting Relationships", desc: "To build long, everlasting relationships with our customers, suppliers, and management based on absolute transparency and trust." },
              { title: "Organic Cultivation", desc: "To build a strong foundation by providing new, innovative, and highly effective products for crop protection without compromising nature." }
            ].map((item, i) => (
              <div key={i} className="group relative flex flex-col md:flex-row items-start md:items-center py-12 border-t border-slate-200 px-6 -mx-6 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-emerald-50/80 -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out -z-10"></div>
                <div className="w-full md:w-1/4 mb-6 md:mb-0"><span className="text-5xl lg:text-7xl font-light text-slate-300 group-hover:text-emerald-500 transition-colors">0{i+1}</span></div>
                <div className="w-full md:w-1/3 pr-8 mb-4 md:mb-0"><h3 className="text-3xl font-bold text-slate-900 group-hover:text-emerald-900 transition-colors">{item.title}</h3></div>
                <div className="w-full md:w-5/12"><p className="text-slate-600 font-medium text-lg leading-relaxed">{item.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}