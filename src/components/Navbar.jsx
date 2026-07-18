import { useEffect, useState } from "react";
import { FaBars, FaTimes, FaWhatsapp } from "react-icons/fa";

import logo from "../assets/images/logo.png";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = [
        "home",
        "about",
        "services",
        "why-choose-us",
        "apply",
        "contact",
        "location",
      ];

      let currentSection = "home";

      sections.forEach((section) => {
        const element = document.getElementById(section);

        if (element) {
          const sectionTop = element.offsetTop - 150;

          if (window.scrollY >= sectionTop) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Why Choose Us", id: "why-choose-us" },
    { name: "Apply Now", id: "apply" },
    { name: "Contact", id: "contact" },
    { name: "Location", id: "location" },
  ];

  const handleNavigation = (id) => {
    setMenuOpen(false);

    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#07131F]/95 backdrop-blur-xl shadow-lg shadow-black/20 border-b border-white/10"
          : "bg-[#07131F]/40 backdrop-blur-md"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="h-20 flex items-center justify-between">

          {/* ================= LOGO ================= */}
          <button
            onClick={() => handleNavigation("home")}
            className="flex items-center gap-3 group flex-shrink-0"
            aria-label="Go to Home"
          >
            {/* Circular Logo */}
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden bg-white border-2 border-cyan-400 shadow-lg shadow-cyan-500/20 flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
              <img
                src={logo}
                alt="B&S Groups Logo"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Logo Text */}
            <div className="text-left">
              <h1 className="text-white font-black text-xl sm:text-2xl leading-none">
                B&S GROUPS
              </h1>

              <p className="text-cyan-400 text-[10px] sm:text-xs tracking-[3px] uppercase mt-1">
                BELIEVE & SERVICE
              </p>
            </div>
          </button>

          {/* ================= DESKTOP NAVIGATION ================= */}
          <div className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`relative py-2 text-sm font-medium transition-colors duration-300 ${
                  activeSection === item.id
                    ? "text-cyan-400"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {item.name}

                <span
                  className={`absolute left-0 bottom-0 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 ${
                    activeSection === item.id ? "w-full" : "w-0"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* ================= DESKTOP WHATSAPP ================= */}
          <a
            href="https://wa.me/919848378055"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg shadow-cyan-500/20 hover:scale-105 hover:shadow-cyan-500/30 transition-all duration-300"
          >
            <FaWhatsapp className="text-lg" />
            <span>Chat With Us</span>
          </a>

          {/* ================= MOBILE MENU BUTTON ================= */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden w-11 h-11 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-white/10 transition"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <FaTimes className="text-xl" />
            ) : (
              <FaBars className="text-xl" />
            )}
          </button>
        </div>

        {/* ================= MOBILE NAVIGATION ================= */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            menuOpen
              ? "max-h-[600px] opacity-100 pb-6"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-[#0B1B2B]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl">
            <div className="flex flex-col gap-1">

              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className={`text-left px-5 py-3 rounded-xl font-medium transition-all ${
                    activeSection === item.id
                      ? "bg-cyan-500/10 text-cyan-400 border border-cyan-400/20"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {item.name}
                </button>
              ))}

              <a
                href="https://wa.me/919848378055"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold"
              >
                <FaWhatsapp />
                Chat With Us
              </a>

            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;