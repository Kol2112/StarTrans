import { NavLink } from "react-router";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Logo from "../assets/logo/StarTransLogo.png";
import ThemeToggler from "./ThemeToggler.jsx";
import LanguageDropdown from "./LanguageDropdown.jsx";
import "../styles/Nav.css";

export default function Nav() {
  const { t } = useTranslation();
  const [pos, setNewPos] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  // Zmiana tła po scrollu
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 50) setNewPos("bckgrnd");
      else setNewPos(null);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function resetScrollHandle() {
    window.scroll(0, 0);
    setMenuOpen(false);
  }

  return (
    <>
    <div className='navi'>
        <div id='leftNaviSide' className={` ${pos || ""}`}>
            <div id="logo">
                <NavLink to="/">
                <img src={Logo} alt="Logo firmy" id="img" onClick={resetScrollHandle} />
                </NavLink>
            </div>

            <div className={`hamburger ${menuOpen ? "active" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <nav className={menuOpen ? "open" : ""}>
                <NavLink to='Service' className={({ isActive }) => (isActive ? "active" : "")} onClick={resetScrollHandle}>
                  {t("service")}
                </NavLink>
                <NavLink to="/About" className={({ isActive }) => (isActive ? "active" : "")} onClick={resetScrollHandle}>
                  {t("aboutNavi")}
                </NavLink>
                <NavLink to="/Career" className={({ isActive }) => (isActive ? "active" : "")} onClick={resetScrollHandle}>
                  {t("carrierNavi")}
                </NavLink>
                <NavLink to="/Contact" className={({ isActive }) => (isActive ? "active" : "")} onClick={resetScrollHandle}>
                  {t("contactNavi")}
                </NavLink>

                <div id="Tooltip" className="mobile-only">
                  <ThemeToggler />
                  <LanguageDropdown />
                </div>
            </nav>
      </div>
      <div id="Tooltip" className={`desktop-only  ${pos || ""}`}>
        <ThemeToggler />
        <LanguageDropdown />
      </div>
    </div>
      </>
  );
}
