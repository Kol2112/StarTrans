import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import App from './App.jsx'
import "./i18n";


const userPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark" || (!savedTheme && userPrefersDark)) {
  document.documentElement.setAttribute("data-theme", "dark");
  localStorage.setItem("theme", "dark");
} else {
  document.documentElement.setAttribute("data-theme", "light");
  localStorage.setItem("theme", "light");
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
