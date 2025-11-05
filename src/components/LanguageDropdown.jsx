import { useTranslation } from "react-i18next";
import { useState } from "react";
import '../styles/Nav.css'
// import { motion, AnimatePresence } from "framer-motion";

export default function LanguageDropdown() {
  const { i18n, t } = useTranslation();
  const [open, setOpen] = useState(false);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
    setOpen(false);
  };

  const currentLang = i18n.language === "pl" ? "PL" : "ENG";

  return (
    
    <div className='lang' onClick={() => setOpen(!open)}>
        <p>{currentLang}</p>
        <svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" >
            <circle cx="15" cy="15" r="10" fill="white"/>
            <path d="M10 13l5 5 5-5" fill="none" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

      
        {open && (
          <div className="langBox">
            <p
              onClick={() => changeLanguage("pl")}
            >
              PL
            </p>
            <p
              onClick={() => changeLanguage("en")}
            >
              ENG
            </p>
          </div>
        )}
    </div>
  );
}
