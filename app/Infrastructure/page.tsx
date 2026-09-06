// "use client";

// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";

// // Heavy Animation Variants
// const slideUp = {
//   hidden: { opacity: 0, y: 100, scale: 0.9 },
//   visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
// };

// const stagger = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
// };

// export default function Infrastructure() {
//   // Setup for Parallax Scrolling Gallery
//   const galleryRef = useRef(null);
//   const { scrollYProgress } = useScroll({ target: galleryRef, offset: ["start end", "end start"] });
  
//   // Different speeds and directions for the image columns
//   const yCol1 = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
//   const yCol2 = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
//   const yCol3 = useTransform(scrollYProgress, [0, 1], ["10%", "-50%"]);

//   return (
//     <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-emerald-400 selection:text-emerald-950 overflow-hidden pt-20">
      
//       {/* 1. KINETIC HERO SECTION */}
//       <section className="relative w-full min-h-[70vh] flex flex-col justify-center overflow-hidden bg-emerald-950 py-24">
//         {/* Infinite Background Marquee */}
//         <div className="absolute top-1/4 left-0 w-full overflow-hidden whitespace-nowrap opacity-10 pointer-events-none flex">
//           <motion.div 
//             animate={{ x: ["0%", "-50%"] }} 
//             transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
//             className="flex text-[10rem] md:text-[15rem] font-bold text-white leading-none tracking-tighter"
//           >
//             <span>INFRASTRUCTURE • MANUFACTURING • R&D • INFRASTRUCTURE • MANUFACTURING • R&D • </span>
//           </motion.div>
//         </div>

//         <motion.div 
//           variants={stagger} initial="hidden" animate="visible"
//           className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-12 text-center flex flex-col items-center"
//         >
//           <motion.div 
//             animate={{ rotate: 360 }}
//             transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
//             className="w-24 h-24 border border-emerald-500/30 rounded-full flex items-center justify-center border-dashed mb-8"
//           >
//             <span className="w-4 h-4 bg-emerald-400 rounded-full animate-ping"></span>
//           </motion.div>

//           <motion.h1 variants={slideUp} className="text-6xl md:text-7xl lg:text-[7rem] font-bold tracking-tighter text-white leading-[0.95] mb-8">
//             Built for <span className="text-emerald-400 italic font-light">Scale.</span>
//           </motion.h1>
//           <motion.p variants={slideUp} className="text-xl md:text-2xl text-emerald-100/70 font-light max-w-3xl leading-relaxed">
//             Equipped with modern manufacturing infrastructure to produce high-quality sulphur-based agrochemical and industrial products.
//           </motion.p>
//         </motion.div>
//       </section>

//       {/* 2. THE CORE STATEMENT (Heavy Text Reveal) */}
//       <section className="py-32 px-6 lg:px-12 bg-white relative">
//         <motion.div 
//           initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}
//           className="max-w-5xl mx-auto text-center"
//         >
//           <motion.h2 variants={slideUp} className="text-3xl md:text-5xl lg:text-6xl font-medium text-slate-900 leading-tight mb-12">
//             Our facilities are engineered to ensure <span className="bg-emerald-100 text-emerald-900 px-4 rounded-lg">efficient production</span>, consistent quality, and <span className="border-b-4 border-emerald-500">timely delivery.</span>
//           </motion.h2>
//           <motion.p variants={slideUp} className="text-xl text-slate-500 font-light leading-relaxed">
//             With advanced production equipment, an in-house R&D laboratory, and stringent quality control systems, we continuously enhance our manufacturing processes to meet global industry standards. Our well-organized infrastructure enables us to fulfill both domestic and international customer requirements with absolute reliability.
//           </motion.p>
//         </motion.div>
//       </section>

//       {/* 3. THE PARALLAX GALLERY (Real Scroll Animation) */}
//       <section ref={galleryRef} className="py-24 px-4 md:px-8 bg-slate-100 h-[150vh] overflow-hidden relative">
//         <div className="absolute top-10 left-1/2 -translate-x-1/2 z-20 bg-white/80 backdrop-blur-md px-8 py-4 rounded-full border border-slate-200 shadow-xl">
//            <h3 className="text-emerald-800 font-bold tracking-[0.2em] uppercase text-sm">Inside The Facility</h3>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto h-full">
          
//           {/* Column 1 (Moves Up Fast) */}
//           <motion.div style={{ y: yCol1 }} className="flex flex-col gap-6 pt-20">
//             <div className="group relative w-full h-[400px] rounded-3xl overflow-hidden bg-slate-200 cursor-crosshair">
//               <div className="absolute inset-0 bg-[url('/images/hero-bg.png')] bg-cover bg-center group-hover:scale-125 transition-transform duration-[2s] ease-out"></div>
//               <div className="absolute inset-0 bg-emerald-900/0 group-hover:bg-emerald-900/40 transition-colors duration-500"></div>
//             </div>
//             <div className="group relative w-full h-[300px] rounded-3xl overflow-hidden bg-slate-200 cursor-crosshair">
//               <div className="absolute inset-0 bg-[url('/images/hero-bg.png')] bg-cover bg-center group-hover:scale-125 transition-transform duration-[2s] ease-out"></div>
//             </div>
//           </motion.div>

//           {/* Column 2 (Moves Down Slow) */}
//           <motion.div style={{ y: yCol2 }} className="flex flex-col gap-6 pb-20">
//             <div className="group relative w-full h-[300px] rounded-3xl overflow-hidden bg-slate-200 cursor-crosshair">
//               <div className="absolute inset-0 bg-[url('/images/hero-bg.png')] bg-cover bg-center group-hover:scale-125 transition-transform duration-[2s] ease-out"></div>
//             </div>
//             <div className="group relative w-full h-[500px] rounded-3xl overflow-hidden bg-slate-200 cursor-crosshair">
//               <div className="absolute inset-0 bg-[url('/images/hero-bg.png')] bg-cover bg-center group-hover:scale-125 transition-transform duration-[2s] ease-out"></div>
//               {/* Animated Floating Badge */}
//               <div className="absolute bottom-6 left-6 bg-white text-emerald-900 font-bold px-6 py-3 rounded-full shadow-2xl group-hover:-translate-y-4 transition-transform duration-500">
//                 In-House R&D
//               </div>
//             </div>
//           </motion.div>

//           {/* Column 3 (Moves Up Slow) */}
//           <motion.div style={{ y: yCol3 }} className="flex flex-col gap-6 pt-40">
//             <div className="group relative w-full h-[450px] rounded-3xl overflow-hidden bg-slate-200 cursor-crosshair">
//               <div className="absolute inset-0 bg-[url('/images/hero-bg.png')] bg-cover bg-center group-hover:scale-125 transition-transform duration-[2s] ease-out"></div>
//             </div>
//             <div className="group relative w-full h-[250px] rounded-3xl overflow-hidden bg-slate-200 cursor-crosshair">
//               <div className="absolute inset-0 bg-[url('/images/hero-bg.png')] bg-cover bg-center group-hover:scale-125 transition-transform duration-[2s] ease-out"></div>
//             </div>
//           </motion.div>

//         </div>
//       </section>

//       {/* 4. THE CAPABILITIES (Interactive Hover Expansions) */}
//       <section className="py-32 px-6 lg:px-12 bg-white">
//         <motion.div 
//           initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}
//           className="max-w-7xl mx-auto"
//         >
//           <div className="mb-20 text-center">
//             <motion.h2 variants={slideUp} className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight">
//               Pillars of Production.
//             </motion.h2>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//             {[
//               { title: "Advanced Equipment", icon: "⚙️", desc: "State-of-the-art machinery enabling high-volume, high-precision processing of industrial and agrochemical sulphur." },
//               { title: "In-House R&D", icon: "🔬", desc: "Dedicated laboratory environments where our scientists continuously innovate and refine formulations for maximum efficacy." },
//               { title: "Stringent Q.C.", icon: "✅", desc: "Rigorous quality control systems at every stage of production to ensure strict adherence to Bureau of Indian Standards." }
//             ].map((pillar, i) => (
//               <motion.div 
//                 variants={slideUp} key={i} 
//                 className="group relative bg-slate-50 border border-slate-100 rounded-3xl p-10 overflow-hidden hover:bg-emerald-900 transition-colors duration-500"
//               >
//                 {/* Background Expanding Circle on Hover */}
//                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 bg-emerald-800 rounded-full opacity-0 group-hover:w-[150%] group-hover:h-[150%] group-hover:opacity-100 transition-all duration-700 ease-out z-0"></div>
                
//                 <div className="relative z-10 flex flex-col h-full">
//                   <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-2xl mb-8 group-hover:scale-110 transition-transform duration-500 shadow-sm">
//                     {pillar.icon}
//                   </div>
//                   <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-white transition-colors duration-300">{pillar.title}</h3>
//                   <p className="text-slate-600 font-medium leading-relaxed group-hover:text-emerald-100 transition-colors duration-300">{pillar.desc}</p>
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

const slideUp = {
  hidden: { opacity: 0, y: 100, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1, ease: "easeInOut" as const } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
};

export default function Infrastructure() {
  const galleryRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: galleryRef, offset: ["start end", "end start"] });
  
  const yCol1 = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const yCol2 = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const yCol3 = useTransform(scrollYProgress, [0, 1], ["10%", "-50%"]);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-emerald-400 selection:text-emerald-950 overflow-hidden pt-20">
      
      <section className="relative w-full min-h-[70vh] flex flex-col justify-center overflow-hidden bg-emerald-950 py-24">
        <div className="absolute top-1/4 left-0 w-full overflow-hidden whitespace-nowrap opacity-10 pointer-events-none flex">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }} 
            transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
            className="flex text-[10rem] md:text-[15rem] font-bold text-white leading-none tracking-tighter"
          >
            <span>INFRASTRUCTURE • MANUFACTURING • R&D • INFRASTRUCTURE • MANUFACTURING • R&D • </span>
          </motion.div>
        </div>

        <motion.div 
          variants={stagger} initial="hidden" animate="visible"
          className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-12 text-center flex flex-col items-center"
        >
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="w-24 h-24 border border-emerald-500/30 rounded-full flex items-center justify-center border-dashed mb-8"
          >
            <span className="w-4 h-4 bg-emerald-400 rounded-full animate-ping"></span>
          </motion.div>

          <motion.h1 variants={slideUp} className="text-6xl md:text-7xl lg:text-[7rem] font-bold tracking-tighter text-white leading-[0.95] mb-8">
            Built for <span className="text-emerald-400 italic font-light">Scale.</span>
          </motion.h1>
          <motion.p variants={slideUp} className="text-xl md:text-2xl text-emerald-100/70 font-light max-w-3xl leading-relaxed">
            Equipped with modern manufacturing infrastructure to produce high-quality sulphur-based agrochemical and industrial products.
          </motion.p>
        </motion.div>
      </section>

      <section className="py-32 px-6 lg:px-12 bg-white relative">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}
          className="max-w-5xl mx-auto text-center"
        >
          <motion.h2 variants={slideUp} className="text-3xl md:text-5xl lg:text-6xl font-medium text-slate-900 leading-tight mb-12">
            Our facilities are engineered to ensure <span className="bg-emerald-100 text-emerald-900 px-4 rounded-lg">efficient production</span>, consistent quality, and <span className="border-b-4 border-emerald-500">timely delivery.</span>
          </motion.h2>
          <motion.p variants={slideUp} className="text-xl text-slate-500 font-light leading-relaxed">
            With advanced production equipment, an in-house R&D laboratory, and stringent quality control systems, we continuously enhance our manufacturing processes to meet global industry standards. Our well-organized infrastructure enables us to fulfill both domestic and international customer requirements with absolute reliability.
          </motion.p>
        </motion.div>
      </section>

      <section ref={galleryRef} className="py-24 px-4 md:px-8 bg-slate-100 h-[150vh] overflow-hidden relative">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 z-20 bg-white/80 backdrop-blur-md px-8 py-4 rounded-full border border-slate-200 shadow-xl">
           <h3 className="text-emerald-800 font-bold tracking-[0.2em] uppercase text-sm">Inside The Facility</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto h-full">
          <motion.div style={{ y: yCol1 }} className="flex flex-col gap-6 pt-20">
            <div className="group relative w-full h-[400px] rounded-3xl overflow-hidden bg-slate-200 cursor-crosshair">
              <div className="absolute inset-0 bg-[url('/images/hero-bg.png')] bg-cover bg-center group-hover:scale-125 transition-transform duration-[2s] ease-out"></div>
            </div>
            <div className="group relative w-full h-[300px] rounded-3xl overflow-hidden bg-slate-200 cursor-crosshair">
              <div className="absolute inset-0 bg-[url('/images/hero-bg.png')] bg-cover bg-center group-hover:scale-125 transition-transform duration-[2s] ease-out"></div>
            </div>
          </motion.div>

          <motion.div style={{ y: yCol2 }} className="flex flex-col gap-6 pb-20">
            <div className="group relative w-full h-[300px] rounded-3xl overflow-hidden bg-slate-200 cursor-crosshair">
              <div className="absolute inset-0 bg-[url('/images/hero-bg.png')] bg-cover bg-center group-hover:scale-125 transition-transform duration-[2s] ease-out"></div>
            </div>
            <div className="group relative w-full h-[500px] rounded-3xl overflow-hidden bg-slate-200 cursor-crosshair">
              <div className="absolute inset-0 bg-[url('/images/hero-bg.png')] bg-cover bg-center group-hover:scale-125 transition-transform duration-[2s] ease-out"></div>
              <div className="absolute bottom-6 left-6 bg-white text-emerald-900 font-bold px-6 py-3 rounded-full shadow-2xl group-hover:-translate-y-4 transition-transform duration-500">
                In-House R&D
              </div>
            </div>
          </motion.div>

          <motion.div style={{ y: yCol3 }} className="flex flex-col gap-6 pt-40">
            <div className="group relative w-full h-[450px] rounded-3xl overflow-hidden bg-slate-200 cursor-crosshair">
              <div className="absolute inset-0 bg-[url('/images/hero-bg.png')] bg-cover bg-center group-hover:scale-125 transition-transform duration-[2s] ease-out"></div>
            </div>
            <div className="group relative w-full h-[250px] rounded-3xl overflow-hidden bg-slate-200 cursor-crosshair">
              <div className="absolute inset-0 bg-[url('/images/hero-bg.png')] bg-cover bg-center group-hover:scale-125 transition-transform duration-[2s] ease-out"></div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-12 bg-white">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}
          className="max-w-7xl mx-auto"
        >
          <div className="mb-20 text-center">
            <motion.h2 variants={slideUp} className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight">
              Pillars of Production.
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              { title: "Advanced Equipment", icon: "⚙️", desc: "State-of-the-art machinery enabling high-volume, high-precision processing of industrial and agrochemical sulphur." },
              { title: "In-House R&D", icon: "🔬", desc: "Dedicated laboratory environments where our scientists continuously innovate and refine formulations for maximum efficacy." },
              { title: "Stringent Q.C.", icon: "✅", desc: "Rigorous quality control systems at every stage of production to ensure strict adherence to Bureau of Indian Standards." }
            ].map((pillar, i) => (
              <motion.div 
                variants={slideUp} key={i} 
                className="group relative bg-slate-50 border border-slate-100 rounded-3xl p-10 overflow-hidden hover:bg-emerald-900 transition-colors duration-500"
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 bg-emerald-800 rounded-full opacity-0 group-hover:w-[150%] group-hover:h-[150%] group-hover:opacity-100 transition-all duration-700 ease-out z-0"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-2xl mb-8 group-hover:scale-110 transition-transform duration-500 shadow-sm">
                    {pillar.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-white transition-colors duration-300">{pillar.title}</h3>
                  <p className="text-slate-600 font-medium leading-relaxed group-hover:text-emerald-100 transition-colors duration-300">{pillar.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

    </main>
  );
}