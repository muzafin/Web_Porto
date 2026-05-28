import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import SectionHeader from "../ui/SectionHeader";
import AnimatedCounter from "../ui/AnimatedCounter";
import { MapPin, GraduationCap, Shield, ExternalLink } from "lucide-react";

const infoChips = [
  { icon: <MapPin size={14} />, text: "Semarang, Indonesia" },
  { icon: <GraduationCap size={14} />, text: "UNAKI — Teknik Informatika" },
  { icon: <Shield size={14} />, text: "Cybersecurity Specialist" },
];

export default function About() {
  const [ref, isVisible] = useScrollAnimation(0.15);

  return (
    <section id="about" className="relative py-24 md:py-32 bg-bg-alt">
      <div className="max-w-7xl mx-auto px-5 md:px-6">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Photo & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-8"
          >
            {/* Photo card */}
            <div className="relative">
              <div className="w-64 h-72 md:w-72 md:h-80 rounded-2xl bg-gradient-to-br from-cyan/10 to-violet/10 border-2 border-cyan/20 flex items-center justify-center overflow-hidden -rotate-2 hover:rotate-0 transition-transform duration-500 glow-cyan">
                <span className="font-display font-extrabold text-6xl text-text-pri/60">MZA</span>
              </div>
              <div className="absolute -bottom-3 -right-3 w-20 h-20 rounded-xl bg-grad-accent opacity-20 blur-xl" />
            </div>

            {/* Stat counters */}
            <div className="flex items-center gap-8">
              <AnimatedCounter target={2} suffix="+" label="Years" />
              <div className="w-px h-10 bg-border-dim" />
              <AnimatedCounter target={3} label="Internships" />
              <div className="w-px h-10 bg-border-dim" />
              <AnimatedCounter target={5} suffix="+" label="Skills" />
            </div>
          </motion.div>

          {/* Right - Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-6"
          >
            <p className="font-mono text-xs text-cyan tracking-widest uppercase">// who i am</p>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-text-pri tracking-tight">About Me</h2>

            <div className="space-y-4 text-text-sec text-base leading-relaxed">
              <p>
                I'm Muhammad Zaenal Arifin, an Informatics Engineering student at Universitas AKI
                (UNAKI) Semarang with a background in Computer and Network Engineering (SMK, 2023).
              </p>
              <p>
                My journey spans across enterprise network infrastructure — having contributed to
                real-world projects at BRI and Pertamina — to visual design and web development.
                I thrive at the intersection of technical depth and creative problem-solving.
              </p>
              <p>
                With hands-on experience in Cisco configuration, Linux administration, Figma
                prototyping, and content localization, I bring a uniquely multidisciplinary
                perspective to every project I join.
              </p>
              <p>
                Currently seeking an IT Developer internship, with a long-term vision to specialize
                in Cybersecurity — protecting the systems that power the modern world.
              </p>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-cyan/40 via-violet/20 to-transparent" />

            {/* Info chips */}
            <div className="flex flex-wrap gap-3">
              {infoChips.map((chip, i) => (
                <div
                  key={i}
                  className="inline-flex items-center gap-2 text-xs font-mono text-text-sec bg-surface border border-border-dim rounded-full px-4 py-2"
                >
                  <span className="text-cyan">{chip.icon}</span>
                  {chip.text}
                </div>
              ))}
            </div>

            {/* LinkedIn CTA */}
            <a
              href="https://linkedin.com/in/muhammad-zaenal-arifin"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-cyan hover:text-[#33E0FF] transition-colors group w-fit"
            >
              Connect on LinkedIn
              <ExternalLink size={14} className="transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
