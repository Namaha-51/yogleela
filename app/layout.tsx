// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   metadataBase: new URL("https://www.yogleelasulphur.com"),
//   title: "Sulphur Manufacturer in India | Yogleela Sulphur & Agchem",
//   description: "ISO 9001:2015 certified sulphur manufacturer in India. Sulphur 80% WDG, 85% DP, WP and rubber, pharma and explosive grade powder. Plant at Vapi, Gujarat.",
//   alternates: {
//     canonical: "/",
//     languages: {
//       "en-US": "/en-US",
//       "en-IN": "/en-IN",
//     },
//   },
//   openGraph: {
//     title: "Yogleela Sulphur & Agchem Industries",
//     description: "ISO 9001:2015 certified sulphur manufacturer for farming and industry.",
//     url: "https://www.yogleelasulphur.com",
//     siteName: "Yogleela Sulphur",
//     images: [{ url: "/images/01_hero_plant-workers.webp", width: 1200, height: 630 }],
//     locale: "en_IN",
//     type: "website",
//   },
// }; 

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   const schemaData = {
//     "@context": "https://schema.org",
//     "@type": "Organization",
//     "name": "Yogleela Sulphur and Agchem Industries Pvt. Ltd.",
//     "url": "https://www.yogleelasulphur.com",
//     "logo": "https://www.yogleelasulphur.com/images/logo.jpg",
//     "contactPoint": {
//       "@type": "ContactPoint",
//       "telephone": "+91-98212-52090",
//       "contactType": "sales",
//       "areaServed": ["IN", "Global"],
//       "availableLanguage": "en"
//     },
//     "address": {
//       "@type": "PostalAddress",
//       "streetAddress": "B 104 Raj Heights, MG road, Kandivali West",
//       "addressLocality": "Mumbai",
//       "postalCode": "400067",
//       "addressCountry": "IN"
//     }
//   };

//   return (
//     <html lang="en">
//       <body className={`${inter.className} bg-[#FDFDFD] text-slate-900 antialiased`}>
//         <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
//         <Navbar />
//         {children}
//         <Footer />
//       </body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.yogleelasulphur.com"),
  title: "Sulphur Manufacturer in India | Yogleela Sulphur & Agchem",
  description: "ISO 9001:2015 certified sulphur manufacturer in India. Sulphur 80% WDG, 85% DP, WP and rubber, pharma and explosive grade powder. Plant at Vapi, Gujarat.",
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "en-IN": "/en-IN",
    },
  },
  openGraph: {
    title: "Yogleela Sulphur & Agchem Industries",
    description: "ISO 9001:2015 certified sulphur manufacturer for farming and industry.",
    url: "https://www.yogleelasulphur.com",
    siteName: "Yogleela Sulphur",
    images: [{ url: "/images/01_hero_plant-workers.webp", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
}; 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Yogleela Sulphur and Agchem Industries Pvt. Ltd.",
    "url": "https://www.yogleelasulphur.com",
    "logo": "https://www.yogleelasulphur.com/images/logo.jpg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-98212-52090",
      "contactType": "sales",
      "areaServed": ["IN", "Global"],
      "availableLanguage": "en"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "B 104 Raj Heights, MG road, Kandivali West",
      "addressLocality": "Mumbai",
      "postalCode": "400067",
      "addressCountry": "IN"
    }
  };

  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#FDFDFD] text-slate-900 antialiased`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
        
        {/* MULTI-LANGUAGE GTRANSLATE INTEGRATION */}
        <div className="gtranslate_wrapper"></div>
        <Script
          id="gtranslate-config"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.gtranslateSettings = {
                default_language: "en",
                native_language_names: true,
                detect_browser_language: true,
                languages: ["en", "hi", "mr", "gu", "bn", "es", "tr", "zh-CN"],
                wrapper_selector: ".gtranslate_wrapper",
                flag_style: "3d"
              }
            `,
          }}
        />
        <Script 
          src="https://cdn.gtranslate.net/widgets/latest/float.js" 
          strategy="lazyOnload" 
        />

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}