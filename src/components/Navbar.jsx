import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#modules", label: "Modules" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar({ darkMode, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <a href="#home" className="logo">ShieldUp<span>Campus</span></a>

      <div className="nav-actions">
        <ThemeToggle darkMode={darkMode} onToggle={onToggleTheme} />
        <button
          className="btn btn-outline menu-btn"
          aria-expanded={menuOpen}
          aria-controls="nav-links"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>

      <nav aria-label="Main" className="nav-wrap">
        <ul id="nav-links" className={menuOpen ? "nav-links open" : "nav-links"}>
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
