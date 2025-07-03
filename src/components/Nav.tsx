"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const sections = ["about", "experience", "project", "publications"]; // ⬅️ Pindah ke luar

export default function Nav() {
  const [burgerOn, setBurgerOn] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const toggleBurger = () => {
    setBurgerOn((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const { top } = section.getBoundingClientRect();
          if (top <= 100 && top + section.offsetHeight > 100) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []); 

  return (
    <header>
      <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-lg pointer-events-auto">
        <div className="flex items-center justify-between px-6 py-4 w-full">
          <div className="w-1/3 md:hidden" />

          <div className="hidden md:flex gap-10 justify-center flex-1 text-black">
            {sections.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className={`transition pointer-events-auto hover:text-pink-400 ${
                  activeSection === id ? "text-pink-500 font-bold" : ""
                }`}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
          </div>

          {/* Burger Toggle */}
          <button
            className="md:hidden"
            aria-controls="mobile-menu"
            aria-expanded={burgerOn}
            onClick={toggleBurger}
          >
            {burgerOn ? (
              <svg width="24" height="24" fill="none" stroke="#000">
                <line x1="3" y1="3" x2="21" y2="21" strokeWidth="2" />
                <line x1="3" y1="21" x2="21" y2="3" strokeWidth="2" />
              </svg>
            ) : (
              <svg width="24" height="24" fill="none" stroke="#000">
                <line x1="3" y1="6" x2="13" y2="6" strokeWidth="2" />
                <line x1="3" y1="12" x2="21" y2="12" strokeWidth="2" />
                <line x1="11" y1="18" x2="21" y2="18" strokeWidth="2" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Nav */}
        <ul
          id="mobile-menu"
          className={`md:hidden flex flex-col items-center gap-4 text-black transition-all duration-300 ease-in-out pointer-events-auto ${
            burgerOn ? "max-h-96 py-4 opacity-100" : "max-h-0 overflow-hidden opacity-0"
          }`}
        >
          {sections.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`hover:text-pink-400 ${
                  activeSection === id ? "text-pink-500 font-bold" : ""
                }`}
                onClick={toggleBurger}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
