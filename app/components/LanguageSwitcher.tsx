"use client";

import { useEffect, useState } from "react";

const languages = [
  { code: "en", label: "English" },
  { code: "hi", label: "हिंदी (Hindi)" },
  { code: "mr", label: "मराठी (Marathi)" },
  { code: "gu", label: "ગુજરાતી (Gujarati)" },
  { code: "bn", label: "বাংলা (Bengali)" },
  { code: "es", label: "Español" },
  { code: "tr", label: "Türkçe" },
  { code: "zh-CN", label: "中文 (Mandarin)" },
];

export default function LanguageSwitcher() {
  const [selectedLang, setSelectedLang] = useState("en");

  useEffect(() => {
    // Check saved preference or GTranslate cookie
    const savedLang = localStorage.getItem("yogleela_lang") || "en";
    setSelectedLang(savedLang);
  }, []);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = e.target.value;
    setSelectedLang(lang);
    localStorage.setItem("yogleela_lang", lang);

    // Trigger GTranslate cookie/event if using GTranslate widget, or reload with trigger
    const selectElem = document.querySelector(".goog-te-combobox") as HTMLSelectElement;
    if (selectElem) {
      selectElem.value = lang;
      selectElem.dispatchEvent(new Event("change"));
    } else {
      // Fallback custom cookie trigger for GTranslate
      document.cookie = `googtrans=/en/${lang}; path=/`;
      window.location.reload();
    }
  };

  return (
    <div className="relative inline-block">
      <select
        value={selectedLang}
        onChange={handleLanguageChange}
        className="bg-[#0B2B1C] text-[#F5C518] border border-[#F5C518]/30 text-xs md:text-sm font-bold uppercase tracking-wider rounded px-3 py-1.5 focus:outline-none cursor-pointer shadow-md"
        aria-label="Select Language"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code} className="bg-[#0B2B1C] text-white">
            {lang.label}
          </option>
        ))}
      </select>
    </div>
  );
}