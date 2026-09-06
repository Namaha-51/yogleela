// "use client";

// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";
// import Link from "next/link";

// // Heavy Text Reveal Variants
// const maskUp = {
//   hidden: { y: "100%" },
//   visible: { y: "0%", transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
// };

// const staggerMask = {
//   hidden: {},
//   visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
// };

// const fadeUp = {
//   hidden: { opacity: 0, y: 50 },
//   visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
// };

// export default function About() {
//   // Global Scroll for floating backgrounds
//   const { scrollYProgress: globalScroll } = useScroll();
//   const floatY1 = useTransform(globalScroll, [0, 1], ["0%", "200%"]);
//   const floatY2 = useTransform(globalScroll, [0, 1], ["0%", "-150%"]);

//   // Local Scroll for Founder Section Parallax
//   const founderRef = useRef(null);
//   const { scrollYProgress: founderScroll } = useScroll({ target: founderRef, offset: ["start end", "end start"] });
//   const founderImgY = useTransform(founderScroll, [0, 1], ["-20%", "20%"]);

//   // Local Scroll for Vision Banner Parallax
//   const visionRef = useRef(null);
//   const { scrollYProgress: visionScroll } = useScroll({ target: visionRef, offset: ["start end", "end start"] });
//   const visionScale = useTransform(visionScroll, [0, 1], [0.8, 1.2]);
//   const visionTextY = useTransform(visionScroll, [0, 1], ["50%", "-50%"]);

//   return (
//     <main className="min-h-screen bg-[#FDFDFD] text-slate-900 selection:bg-emerald-300 selection:text-emerald-950 overflow-hidden pt-20 relative">
      
//       {/* Abstract Animated Background Elements */}
//       <motion.div style={{ y: floatY1 }} className="absolute top-20 left-[-10%] w-[40vw] h-[40vw] bg-emerald-400/20 rounded-full blur-[120px] pointer-events-none -z-10" />
//       <motion.div style={{ y: floatY2 }} className="absolute bottom-20 right-[-10%] w-[30vw] h-[30vw] bg-yellow-400/20 rounded-full blur-[100px] pointer-events-none -z-10" />

//       {/* 1. KINETIC HERO SECTION */}
//       <section className="relative w-full min-h-[70vh] flex flex-col justify-end px-6 lg:px-12 pb-24 border-b border-emerald-900/10">
        
//         {/* Infinite Scrolling Marquee Background */}
//         <div className="absolute top-1/3 left-0 w-full overflow-hidden whitespace-nowrap opacity-[0.03] pointer-events-none flex z-0">
//           <motion.div 
//             animate={{ x: ["0%", "-50%"] }} 
//             transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
//             className="flex text-[15rem] font-black text-emerald-900 leading-none tracking-tighter"
//           >
//             <span>THE ORIGIN • THE LEGACY • THE FUTURE • THE ORIGIN • THE LEGACY • THE FUTURE • </span>
//           </motion.div>
//         </div>

//         <motion.div 
//           variants={staggerMask}
//           initial="hidden"
//           animate="visible"
//           className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-start"
//         >
//           <motion.div variants={fadeUp} className="mb-8">
//             <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-600 text-white text-[10px] font-bold tracking-[0.3em] uppercase shadow-lg shadow-emerald-600/20">
//               Established 2002
//             </span>
//           </motion.div>
          
//           <h1 className="text-6xl md:text-7xl lg:text-[8rem] font-medium tracking-tighter text-emerald-950 leading-[0.95] flex flex-col overflow-hidden">
//             <div className="overflow-hidden pb-4"><motion.span variants={maskUp} className="block">Our</motion.span></div>
//             <div className="overflow-hidden pb-4"><motion.span variants={maskUp} className="block font-light italic text-emerald-600 pr-4">Story.</motion.span></div>
//           </h1>
          
//           <motion.p variants={fadeUp} className="mt-8 text-xl text-emerald-900/70 font-medium max-w-2xl leading-relaxed">
//             From our Sanskrit roots to global industrial mastery. Discover the foundation of Yogleela Sulphur.
//           </motion.p>
//         </motion.div>
//       </section>

//       {/* 2. THE SANSKRIT PHILOSOPHY (Heavy Parallax & Rotation) */}
//       <section className="py-32 px-6 lg:px-12 relative z-10 bg-white/80 backdrop-blur-3xl shadow-[0_-20px_40px_rgba(0,0,0,0.02)]">
//         <motion.div 
//           initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerMask}
//           className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center"
//         >
//           <div className="lg:w-1/2 flex flex-col justify-center">
//             <motion.span variants={fadeUp} className="text-emerald-600 font-bold tracking-widest text-sm uppercase mb-6 block">The Meaning</motion.span>
            
//             <div className="overflow-hidden mb-8">
//               <motion.h2 variants={maskUp} className="text-4xl md:text-6xl font-light text-slate-900 leading-[1.1]">
//                 <span className="font-bold text-emerald-800">YOG</span> (Oneness) <br />
//                 <span className="font-bold text-emerald-800">+ LEELA</span> (Divine Play)
//               </motion.h2>
//             </div>

//             <motion.div variants={fadeUp} className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed">
//               <p>
//                 Combined, it signifies our ultimate connection through creation. The term <strong className="text-emerald-700">YOGA</strong> not only benefits the farmer but also the crops, creating a tranquil atmosphere where agriculture harmonizes with nature.
//               </p>
//               <p>
//                 Plant life responds to the vibration created by YOGA, forming a pure environment to help every creature and crop thrive.
//               </p>
//             </motion.div>
//           </div>

//           <div className="lg:w-1/2 w-full relative">
//             <div className="relative aspect-square w-full rounded-[3rem] overflow-hidden bg-emerald-50 shadow-2xl shadow-emerald-900/10 p-4 group">
//                {/* Animated inner spin and scale */}
//                <motion.div 
//                  initial={{ scale: 1.2, rotate: 10, opacity: 0 }}
//                  whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
//                  transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
//                  className="absolute inset-4 rounded-[2.5rem] bg-[url('/images/hero-bg.png')] bg-cover bg-center shadow-inner group-hover:scale-110 transition-transform duration-[2s] ease-out"
//                />
               
//                {/* Spinning Graphic Overlay */}
//                <motion.div 
//                  animate={{ rotate: 360 }}
//                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border-[2px] border-dashed border-emerald-400/20 rounded-full pointer-events-none"
//                />
//             </div>
//           </div>
//         </motion.div>
//       </section>

//       {/* 3. THE FOUNDER (Scroll-Linked Image Parallax) */}
//       <section ref={founderRef} className="py-32 px-6 lg:px-12 bg-[#F9FAF8] border-y border-emerald-900/5 relative overflow-hidden">
//         <motion.div 
//           initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerMask}
//           className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse gap-20 items-start"
//         >
//           {/* Parallax Founder Image */}
//           <div className="lg:w-1/2 w-full sticky top-32">
//             <div className="relative w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-white shadow-xl shadow-slate-200 p-3">
//                <div className="absolute inset-3 rounded-[2rem] overflow-hidden">
//                  {/* Image moves vertically as you scroll through this specific section */}
//                  <motion.div style={{ y: founderImgY, scale: 1.1 }} className="absolute inset-[-20%] bg-[url('/images/hero-bg.png')] bg-cover bg-center"></motion.div>
//                </div>
//             </div>
//           </div>

//           {/* Founder Content */}
//           <div className="lg:w-1/2 flex flex-col">
//             <motion.span variants={fadeUp} className="text-sm font-bold tracking-[0.25em] text-emerald-600 uppercase mb-4 block">
//               The Visionary
//             </motion.span>
            
//             <div className="overflow-hidden mb-8">
//               <motion.h2 variants={maskUp} className="text-5xl md:text-7xl font-bold tracking-tight text-emerald-950">
//                 Mr. Hitesh Dodecha
//               </motion.h2>
//             </div>

//             <motion.div variants={fadeUp} className="p-8 bg-white border border-emerald-100 rounded-3xl mb-12 shadow-sm relative overflow-hidden group">
//               <div className="absolute top-0 left-0 w-2 h-full bg-emerald-500 group-hover:w-full transition-all duration-700 ease-out z-0"></div>
//               <p className="text-2xl font-light text-slate-800 italic leading-snug relative z-10 group-hover:text-white transition-colors duration-500 delay-100">
//                 "Success doesn't happen overnight. And the most successful individuals are those who are willing to put in a productive day's work before they even receive success."
//               </p>
//             </motion.div>

//             <motion.div variants={fadeUp} className="space-y-8 text-slate-700 font-medium leading-relaxed text-lg">
//               <p>
//                 Our parent company, D.V.S. Chemical and Engineering Industries, has been manufacturing sulphur since 1968. Building on this strong foundation, Hitesh Dodecha established Yogleela Sulphur and Agchem Industries Private Limited (YSAAIPL) in 2002.
//               </p>
//               <p>
//                 He developed this fantastic company at a very young age, devoting all of his effort and passion to making it a reality. He raised the company and its employees as if they were his own children, driving an unwavering commitment to quality and expansion.
//               </p>
//               <div className="grid grid-cols-2 gap-6 pt-6 border-t border-emerald-900/10">
//                  <motion.div whileHover={{ scale: 1.05 }} className="cursor-default">
//                     <h4 className="text-4xl font-bold text-emerald-700 mb-2">2002</h4>
//                     <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Year Founded</p>
//                  </motion.div>
//                  <motion.div whileHover={{ scale: 1.05 }} className="cursor-default">
//                     <h4 className="text-4xl font-bold text-emerald-700 mb-2">Global</h4>
//                     <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Export Reach</p>
//                  </motion.div>
//               </div>
//             </motion.div>
//           </div>
//         </motion.div>
//       </section>

//       {/* 4. THE VISION (Heavy Scroll Transform Banner) */}
//       <section ref={visionRef} className="h-[80vh] w-full bg-emerald-950 text-white relative overflow-hidden flex items-center justify-center">
//         {/* Abstract Background that scales on scroll */}
//         <motion.div style={{ scale: visionScale }} className="absolute inset-0 bg-emerald-800/20 blur-[100px] rounded-full"></motion.div>
        
//         <motion.div style={{ y: visionTextY }} className="relative z-10 max-w-5xl mx-auto text-center px-6">
//           <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-800/50 border border-emerald-400/30 text-emerald-300 text-xs font-bold tracking-[0.3em] uppercase mb-12">
//             Company Vision
//           </span>
//           <h2 className="text-4xl md:text-6xl lg:text-7xl font-light leading-[1.1] tracking-tight mb-12">
//             "Crop Protection with <br/>
//             <span className="font-semibold text-emerald-400 italic">Environmental Conservation.</span>"
//           </h2>
//           <p className="text-xl md:text-2xl text-emerald-50 font-light leading-relaxed max-w-3xl mx-auto">
//             We are committed to sustainable agriculture, increasing the quality of the crops and the quantity of the yield, by providing vibrant solutions for enhancing absolute productivity.
//           </p>
//         </motion.div>
//       </section>

//       {/* 5. THE MISSION (Hover Expansions & Entrance Kinetics) */}
//       <section className="py-32 px-6 lg:px-12 bg-white relative z-20">
//         <motion.div 
//           initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerMask}
//           className="max-w-7xl mx-auto"
//         >
//           <div className="mb-20 overflow-hidden">
//             <motion.span variants={fadeUp} className="text-emerald-600 font-bold tracking-widest text-sm uppercase mb-4 block">Company Mission</motion.span>
//             <motion.h2 variants={maskUp} className="text-5xl md:text-7xl font-semibold text-emerald-950 tracking-tight">
//               Our Core Pillars.
//             </motion.h2>
//           </div>
          
//           <div className="flex flex-col">
//             {[
//               { title: "Farm Development", desc: "To help and guide farmers to increase crop yields and raise awareness for advanced, sustainable crop protection." },
//               { title: "Crop Management", desc: "To provide the best services to our customers, customizing vibrant products strictly according to their agricultural and industrial requirements." },
//               { title: "Lasting Relationships", desc: "To build long, everlasting relationships with our customers, suppliers, and management based on absolute transparency and trust." },
//               { title: "Organic Cultivation", desc: "To build a strong foundation by providing new, innovative, and highly effective products for crop protection without compromising nature." }
//             ].map((item, i) => (
//               <motion.div 
//                 variants={fadeUp} 
//                 key={i} 
//                 className="group relative flex flex-col md:flex-row items-start md:items-center py-12 border-t border-slate-200 px-6 -mx-6 rounded-2xl overflow-hidden cursor-crosshair"
//               >
//                 {/* Background Sweep Animation on Hover */}
//                 <div className="absolute inset-0 bg-emerald-50/80 -translate-x-full group-hover:translate-x-0 transition-transform duration-[0.8s] ease-[0.16,1,0.3,1] -z-10"></div>
                
//                 <div className="w-full md:w-1/4 mb-6 md:mb-0 transform group-hover:translate-x-4 transition-transform duration-500 ease-out">
//                   <span className="text-5xl lg:text-7xl font-light text-slate-300 group-hover:text-emerald-500 transition-colors duration-500">
//                     0{i+1}
//                   </span>
//                 </div>
                
//                 <div className="w-full md:w-1/3 pr-8 mb-4 md:mb-0 transform group-hover:translate-x-2 transition-transform duration-500 delay-75 ease-out">
//                   <h3 className="text-3xl font-bold text-slate-900 group-hover:text-emerald-900 transition-colors">
//                     {item.title}
//                   </h3>
//                 </div>
                
//                 <div className="w-full md:w-5/12 transform group-hover:translate-x-2 transition-transform duration-500 delay-100 ease-out">
//                   <p className="text-slate-600 font-medium text-lg leading-relaxed">
//                     {item.desc}
//                   </p>
//                 </div>
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

      {/* 1. KINETIC HERO */}
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

      {/* 2. SANSKRIT PHILOSOPHY */}
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

      {/* 3. FOUNDER */}
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

      {/* 4. VISION BANNER */}
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

      {/* 5. MISSION PILLARS */}
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