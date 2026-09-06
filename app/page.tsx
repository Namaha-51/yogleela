"use client";

import Link from "next/link";
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

const imageFloat = {
  animate: {
    y: [0, -15, 0],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" as const }
  }
};

export default function Home() {
  // Parallax effects
  const { scrollYProgress } = useScroll();
  const heroBgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  
  const sectionRef = useRef(null);
  const { scrollYProgress: cardScroll } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const cardY1 = useTransform(cardScroll, [0, 1], ["10%", "-10%"]);
  const cardY2 = useTransform(cardScroll, [0, 1], ["-10%", "10%"]);

  return (
    <main className="min-h-screen bg-white text-[#1F2A24] selection:bg-[#F5C518] selection:text-[#0B2B1C] overflow-x-hidden pt-0">
      
      {/* FLOATING WHATSAPP BUTTON */}
      <motion.a 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.15, rotate: -5 }}
        href="https://wa.me/919821252090?text=Hello%20Yogleela%20Sulphur,%20I%20have%20an%20enquiry" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute inset-0 w-full h-full rounded-full bg-[#25D366] animate-ping opacity-75"></span>
        <svg className="w-8 h-8 relative z-10" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
      </motion.a>

      {/* 1. HERO SECTION */}
      <section className="relative w-full flex flex-col justify-center px-6 lg:px-12 min-h-screen bg-[#0B2B1C] overflow-hidden pt-20">
        <motion.div style={{ y: heroBgY }} className="absolute inset-0 z-0">
          <img 
            src="/images/01_hero_plant-workers.webp" 
            alt="Yogleela Sulphur manufacturing facility, Vapi, Gujarat" 
            className="w-full h-[120%] object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#0B2B1C]/65"></div>
        </motion.div>
        
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="max-w-4xl flex flex-col items-start text-left">
            
            <motion.div variants={fadeUp} className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#0B2B1C]/80 border border-[#F5C518]/50 backdrop-blur-md mb-8 shadow-xl">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F5C518] animate-pulse"></span>
              <span className="text-xs font-bold text-[#F5C518] tracking-[0.2em] uppercase">ISO 9001:2015 CERTIFIED</span>
            </motion.div>

            {/* SEO SAFE H1 - No letter splitting */}
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
              Sulphur manufacturer in India, for farming and industry.
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-xl md:text-2xl text-white/90 font-medium max-w-3xl mb-12 leading-relaxed">
              Crop protection, rubber and tyre, pharmaceutical, explosives and sugar. Made at our own plant in Vapi, Gujarat, and supplied across India and overseas.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-6">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/products#agriculture" className="px-8 py-4 bg-[#F5C518] text-[#0B2B1C] text-lg font-bold rounded-lg transition-colors shadow-xl inline-block">
                  For Farmers and Dealers
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/products#industry" className="px-8 py-4 bg-[#2E7D4F] text-white text-lg font-bold rounded-lg transition-colors shadow-xl inline-block border border-[#2E7D4F] hover:bg-white hover:text-[#2E7D4F]">
                  For Industry
                </Link>
              </motion.div>
            </motion.div>

          </motion.div>
        </div>
      </section>

     {/* 2. THE FIVE INDUSTRIES (Centered Bottom Row) */}
      <section className="py-20 md:py-32 px-6 lg:px-12 bg-[#0B2B1C] text-white border-t-4 border-[#F5C518]">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="max-w-7xl mx-auto">
          
          <motion.div variants={fadeRight} className="mb-20">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[#F5C518] mb-4">What we make it for</h2>
          </motion.div>

          {/* Changed from Grid to Flex Wrap for perfect centering of the bottom two tiles */}
          <div className="flex flex-wrap justify-center gap-8 border-b border-white/10 pb-20 mb-16">
            {[
              { title: "Farming", icon: "21_tile_farming.svg", link: "/products#agriculture", desc: "Fungicide and secondary nutrient formulations for field and horticultural crops." },
              { title: "Rubber and Tyre", icon: "22_tile_rubber-tyre.svg", link: "/products#rubber-tyre", desc: "The vulcanising agent that turns soft rubber into a material that survives a highway." },
              { title: "Pharmaceutical", icon: "23_tile_pharmaceutical.svg", link: "/products#pharma-amlasar", desc: "Pharma and Ayurvedic grade sulphur, made to tighter purity and documentation standards." },
              { title: "Explosives", icon: "24_tile_explosives.svg", link: "/products#explosive-grade", desc: "Sulphur for the matches and explosives trade, supplied to its own grade." },
              { title: "Sugar Refining", icon: "25_tile_sugar-refining.svg", link: "/products#rock-granules-pellets", desc: "Burned to sulphur dioxide for the sulphitation process that clarifies refined sugar." }
            ].map((ind, i) => (
              <motion.div 
                variants={fadeUp} 
                key={i} 
                className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]"
              >
                <Link href={ind.link} className="flex flex-col items-start group p-8 rounded-2xl bg-white/5 border border-white/5 hover:bg-[#1F2A24] hover:border-[#2E7D4F] transition-all duration-500 h-full">
                  <motion.div 
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="w-24 h-24 bg-[#0B2B1C] rounded-xl flex items-center justify-center mb-8 border border-[#2E7D4F] p-5 shadow-lg shadow-[#0B2B1C]"
                  >
                    <img src={`/images/${ind.icon}`} alt={`Yogleela Sulphur industry: ${ind.title}`} className="w-full h-full object-contain" />
                  </motion.div>
                  <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-[#F5C518] transition-colors">{ind.title}</h3>
                  <p className="text-[#F7F3E8]/80 text-xl leading-relaxed font-medium">{ind.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div variants={scaleIn} className="flex flex-col md:flex-row justify-between items-center bg-[#1F2A24] p-10 rounded-2xl border-l-8 border-[#F5C518] shadow-2xl">
            <p className="text-2xl font-bold text-white mb-6 md:mb-0">Not sure which grade you need?</p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/contact" className="px-10 py-5 bg-[#F5C518] text-[#0B2B1C] text-xl font-bold rounded-lg transition-colors inline-block shadow-lg">
                Send us your specification
              </Link>
            </motion.div>
          </motion.div>

        </motion.div>
      </section>

  {/* 3. WHY BUYERS STAY (Heavy Parallax) */}
      <section ref={sectionRef} className="py-20 md:py-32 px-6 lg:px-12 bg-[#F7F3E8]">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
          
          <div className="lg:w-1/2 w-full">
            <motion.h2 variants={fadeRight} className="text-5xl md:text-6xl font-bold text-[#0B2B1C] tracking-tight mb-8">
              Why buyers stay with us
            </motion.h2>
            <motion.p variants={fadeUp} className="text-[#1F2A24] text-xl md:text-2xl font-medium leading-relaxed mb-12">
              We have been formulating sulphur under the D.V.S. group since 1972. What that buys a customer is not novelty, it is repeatability: the same specification, batch after batch, tested before it leaves the plant and documented when it does.
            </motion.p>
            
            {/* UPDATED: Removed w-1/3 and added whitespace-nowrap so text stays on one line */}
            <div className="space-y-6 md:space-y-8 mb-16 w-full">
              {[
                { stat: "5", label: "Industries served" },
                { stat: "ISO 9001:2015", label: "Certified quality management system" },
                { stat: "NSIC CRISIL SE 2B", label: "Independently rated" }
              ].map((item, i) => (
                <motion.div variants={fadeUp} key={i} className="flex flex-col xl:flex-row xl:items-center gap-2 xl:gap-8 border-b-2 border-[#0B2B1C]/10 pb-6 w-full">
                  <span className="text-3xl md:text-4xl font-black text-[#F5C518] drop-shadow-md whitespace-nowrap min-w-[280px]">
                    {item.stat}
                  </span>
                  <span className="text-lg md:text-xl font-bold text-[#1F2A24] uppercase tracking-wider">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeUp} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
              <Link href="/contact" className="px-10 py-5 bg-[#0B2B1C] text-white text-xl font-bold rounded-lg transition-colors inline-block shadow-xl">
                Talk to us about supply
              </Link>
            </motion.div>
          </div>

          <div className="lg:w-1/2 w-full h-[600px] flex gap-6 perspective-[1000px]">
            <motion.div style={{ y: cardY1 }} variants={scaleIn} className="w-1/2 h-[90%] mt-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
              <img src="/images/02_card-left_lab-pouring.webp" alt="Yogleela Sulphur testing laboratory" className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-1000" />
            </motion.div>
            <motion.div style={{ y: cardY2 }} variants={scaleIn} className="w-1/2 h-[90%] mb-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
              <img src="/images/03_card-right_test-tube.webp" alt="Yogleela Sulphur quality control" className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-1000" />
            </motion.div>
          </div>

        </motion.div>
      </section>

     {/* 4. OUR PRODUCTS */}
      <section className="py-20 md:py-32 px-6 lg:px-12 bg-white">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="max-w-7xl mx-auto">
          
          <motion.div variants={fadeUp} className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-8">
            <h2 className="text-5xl md:text-6xl font-bold text-[#0B2B1C] tracking-tight">Our products</h2>
            
            {/* UPGRADED INTERACTIVE BUTTONS */}
            <div className="flex flex-wrap gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/products" className="group flex items-center gap-3 px-6 py-3.5 rounded-full border-2 border-[#2E7D4F]/20 text-[#2E7D4F] text-xs md:text-sm font-bold tracking-widest uppercase hover:border-[#F5C518] hover:bg-[#F5C518] hover:text-[#0B2B1C] transition-all duration-300 shadow-sm hover:shadow-lg">
                  <span>See full range for farmers</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </Link>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/products#industry" className="group flex items-center gap-3 px-6 py-3.5 rounded-full border-2 border-[#2E7D4F]/20 text-[#2E7D4F] text-xs md:text-sm font-bold tracking-widest uppercase hover:border-[#F5C518] hover:bg-[#F5C518] hover:text-[#0B2B1C] transition-all duration-300 shadow-sm hover:shadow-lg">
                  <span>See industrial grades</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </Link>
              </motion.div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: "SUNVET-DF", sub: "Sulphur 80% WDG", desc: "Grapes, apple, mango, cumin", img: "04_product_sunvet-df.png" },
              { title: "COSMIC FERTILE", sub: "Sulphur 90% WDG", desc: "Nutrient uptake and healthy crop growth", img: "05_product_cosmic-fertile.png" },
              { title: "DUOCARE", sub: "Sulphur 65% + Tebuconazole 10%", desc: "Chilli, soybean, groundnut", img: "06_product_duocare_NEEDS-MANUAL-CUT.webp" }
            ].map((prod, i) => (
              <motion.div variants={fadeUp} key={i} className="flex flex-col group cursor-pointer">
                {/* FLOATING PRODUCT IMAGE */}
                <motion.div 
                  whileHover={{ y: -15 }}
                  className="w-full h-[400px] bg-[#F7F3E8] rounded-3xl mb-8 relative flex items-center justify-center p-8 overflow-hidden border border-slate-200 shadow-sm group-hover:shadow-2xl transition-all duration-500"
                >
                  <motion.img 
                    animate={imageFloat.animate}
                    src={`/images/${prod.img}`} 
                    alt={`${prod.title} ${prod.sub} pack by Yogleela Sulphur`} 
                    className="w-full h-full object-contain drop-shadow-2xl" 
                  />
                </motion.div>
                <h3 className="text-3xl font-black text-[#8E1B1B] mb-2">{prod.title}</h3>
                <p className="text-xl font-bold text-[#0B2B1C] mb-4">{prod.sub}</p>
                <p className="text-[#1F2A24] text-xl font-medium">{prod.desc}</p>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </section>

  {/* 5. PACK SIZES STRIP */}
      <section className="py-20 md:py-32 px-6 lg:px-12 bg-[#F7F3E8] border-y border-[#0B2B1C]/10 overflow-hidden">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="max-w-7xl mx-auto text-center">
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-[#0B2B1C] mb-6">From a one kilo pouch to a fifty kilo drum</motion.h2>
          <motion.p variants={fadeUp} className="text-xl md:text-2xl text-[#1F2A24] font-medium mb-20">Whatever size you buy in, it is the same material and the same specification.</motion.p>
          
          {/* Smart Flex Row: No wrapping, hidden items on mobile to prevent crowding */}
          <div className="flex flex-row flex-nowrap justify-center items-end gap-3 sm:gap-6 lg:gap-8 pb-8 w-full">
            {[
              { file: "07_pack_1kg.png", hideMobile: false },
              { file: "08_pack_3kg.png", hideMobile: true },
              { file: "09_pack_5kg.png", hideMobile: false },
              { file: "10_pack_10kg.png", hideMobile: true },
              { file: "11_pack_25kg-bucket.png", hideMobile: false },
              { file: "12_pack_50kg-drum.png", hideMobile: false }
            ].map((pack, i) => (
              <motion.div 
                variants={fadeUp} 
                key={i} 
                whileHover={{ scale: 1.1, y: -10 }} 
                className={`${pack.hideMobile ? 'hidden md:block' : 'block'} flex-shrink-0 transition-all duration-300`}
              >
                <img 
                  src={`/images/${pack.file}`} 
                  alt="Yogleela Sulphur packaging size" 
                  className="h-32 sm:h-40 md:h-56 lg:h-64 object-contain object-bottom drop-shadow-xl" 
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 6. WHO WE ARE */}
      <section className="py-20 md:py-32 px-6 lg:px-12 bg-white">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20">
          <div className="md:w-1/3">
            <motion.h2 variants={fadeRight} className="text-5xl font-bold text-[#0B2B1C] leading-tight mb-10">A family business, and a plant we own</motion.h2>
            <motion.div variants={fadeUp} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
              <Link href="/about" className="px-10 py-5 bg-[#2E7D4F] text-white text-xl font-bold rounded-lg transition-colors shadow-lg">
                Read our full story
              </Link>
            </motion.div>
          </div>
          <div className="md:w-2/3 space-y-12 border-l-4 border-[#F5C518] pl-6 md:pl-16">
            <motion.p variants={fadeUp} className="text-[#1F2A24] text-2xl font-medium leading-relaxed">
              <strong className="text-[#0B2B1C] block mb-2 text-3xl">Made for the people who sell it.</strong> Dealers and distributors carry our products because the specification holds from one consignment to the next. That consistency is what keeps a shelf stocked.
            </motion.p>
            <motion.p variants={fadeUp} className="text-[#1F2A24] text-2xl font-medium leading-relaxed">
              <strong className="text-[#0B2B1C] block mb-2 text-3xl">Five industries, five specifications.</strong> A tyre compounder and a grape grower do not buy the same material. We formulate separately for each, and pack from small retail sizes up to 50kg bags.
            </motion.p>
            <motion.p variants={fadeUp} className="text-[#1F2A24] text-2xl font-medium leading-relaxed">
              <strong className="text-[#0B2B1C] block mb-2 text-3xl">Our own laboratory.</strong> Formulation development happens in our own R&D lab, and every incoming consignment is tested before it goes into production.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* 7. ENQUIRY BAND */}
      <section className="py-20 md:py-32 px-6 lg:px-12 bg-[#0B2B1C] relative overflow-hidden">
        {/* Animated Background Ring */}
        <motion.div 
          animate={{ rotate: 360 }} 
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[50%] -right-[10%] w-[800px] h-[800px] border-[40px] border-[#2E7D4F]/10 rounded-full pointer-events-none"
        />
        
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="max-w-5xl mx-auto text-center flex flex-col items-center relative z-10">
          <motion.h2 variants={scaleIn} className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Send us your specification and we will tell you which grade you need.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-2xl text-[#F7F3E8] mb-16 font-medium">
            Call <a href="tel:+919821252090" className="text-[#F5C518] hover:underline font-bold">+91 98212 52090</a> or send us a message on WhatsApp.
          </motion.p>
          
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row justify-center gap-6 w-full sm:w-auto">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a href="https://wa.me/919821252090?text=Hello%20Yogleela%20Sulphur,%20I%20have%20an%20enquiry" target="_blank" rel="noopener noreferrer" className="block w-full sm:w-auto px-10 py-5 bg-[#25D366] text-white text-xl font-bold rounded-lg shadow-2xl">
                WhatsApp us
              </a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/contact" className="block w-full sm:w-auto px-10 py-5 bg-white text-[#0B2B1C] text-xl font-bold rounded-lg shadow-2xl">
                Send an enquiry
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

    </main>
  );
}