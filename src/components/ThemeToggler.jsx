import { useState } from "react";
import '../styles/ThemeToggler.scss';

export default function ThemeToggler(){
    
    const [theme, setTheme] = useState(localStorage.getItem("theme"));

    const toggleTheme = () => {
      const newTheme = theme === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
      setTheme(newTheme);

    };

    return(
        <>
        <svg
        width="60"
        height="30"
        viewBox="0 0 120 60"
        xmlns="http://www.w3.org/2000/svg"
        style={{ cursor: "pointer" }}
        className={theme === "light" ? "light" : "dark"}
        onClick={()=>{
          toggleTheme()
        }}
        >
         <rect className="bg" x="0" y="0" width="120" height="60" rx="30" />
          <g className="sun" transform="translate(35,30)">
        <circle r="7" fill="none" stroke="white" strokeWidth="2" />
        <g stroke="white" strokeWidth="2">
          <line y1="-12" y2="-16" />
          <line y1="12" y2="16" />
          <line x1="-12" x2="-16" />
          <line x1="12" x2="16" />
          <line x1="-8" y1="-8" x2="-11" y2="-11" />
          <line x1="8" y1="8" x2="11" y2="11" />
          <line x1="-8" y1="8" x2="-11" y2="11" />
          <line x1="8" y1="-8" x2="11" y2="-11" />
        </g>
      </g>
            <g className="moon" transform="translate(35,30)">
        <path d="M10 0A10 10 0 1 1 -5 -9A7 7 0 0 0 10 0Z" fill="white" />
      </g>
            <circle className="circle" cx="90" cy="30" r="18" fill="white" />
    </svg>

        </>
    )
}