import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg-deep/85 backdrop-blur-md border-b border-border-dim shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-6 h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="font-display font-bold text-xl md:text-2xl text-text-pri hover:text-cyan transition-colors">
          MZA<span className="text-cyan">.</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative font-body text-sm text-text-sec hover:text-cyan transition-colors duration-200 group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Hire Me CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 font-body font-semibold text-sm px-5 py-2 rounded-lg border border-cyan/40 text-cyan hover:bg-cyan/10 hover:border-cyan hover:shadow-[0_0_20px_rgba(0,216,255,0.15)] transition-all duration-200"
        >
          Hire Me
        </a>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-text-pri p-2"
          aria-label="Toggle Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-bg-deep/95 backdrop-blur-xl border-b border-border-dim overflow-hidden"
          >
            <div className="px-5 py-6 flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-body text-base text-text-sec hover:text-cyan transition-colors py-2 border-b border-border-dim/30"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center justify-center gap-2 font-body font-semibold text-sm px-5 py-3 rounded-lg bg-cyan text-bg-deep hover:bg-[#33E0FF] transition-all mt-2"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
