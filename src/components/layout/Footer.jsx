import { ArrowUp, Mail, Phone } from "lucide-react";

const LinkedinIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-bg-alt border-t border-border-dim">
      <div className="max-w-7xl mx-auto px-5 md:px-6 py-12">
        {/* Logo */}
        <div className="text-center mb-8">
          <a href="#home" className="font-display font-bold text-2xl text-text-pri">
            MZA<span className="text-cyan">.</span>
          </a>
        </div>

        {/* Nav links */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm text-text-sec hover:text-cyan transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Social icons */}
        <div className="flex justify-center gap-4 mb-8">
          <a
            href="https://linkedin.com/in/muhammad-zaenal-arifin"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-lg bg-surface border border-border-dim flex items-center justify-center text-text-sec hover:text-cyan hover:border-cyan/40 transition-all"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href="mailto:arifinmuzafin4@gmail.com"
            className="w-10 h-10 rounded-lg bg-surface border border-border-dim flex items-center justify-center text-text-sec hover:text-cyan hover:border-cyan/40 transition-all"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
          <a
            href="https://wa.me/6285173307940"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-lg bg-surface border border-border-dim flex items-center justify-center text-text-sec hover:text-cyan hover:border-cyan/40 transition-all"
            aria-label="WhatsApp"
          >
            <Phone size={18} />
          </a>
        </div>

        {/* Divider */}
        <div className="h-px bg-border-dim mb-6" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-sm text-text-muted">
            © 2024 Muhammad Zaenal Arifin. Crafted with ☕ & code.
          </p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 font-mono text-xs text-text-sec hover:text-cyan transition-colors cursor-pointer"
          >
            <ArrowUp size={14} />
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
}
