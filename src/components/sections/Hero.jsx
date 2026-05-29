import { motion } from "framer-motion";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import AnimatedCounter from "../ui/AnimatedCounter";
import { ArrowRight, Download } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  const cvUrl = `${import.meta.env.BASE_URL}cv-zaenal.pdf`;

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background decorations */}
      <div className="absolute inset-0 dot-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-cyan/[0.04] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-violet/[0.06] blur-[120px] pointer-events-none" />

      {/* Floating icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <span className="absolute top-[15%] left-[8%] text-2xl animate-float" style={{ animationDelay: '0s' }}>⚙️</span>
        <span className="absolute top-[25%] right-[12%] text-2xl animate-float" style={{ animationDelay: '1.5s' }}>🛡️</span>
        <span className="absolute bottom-[30%] left-[15%] text-2xl animate-float" style={{ animationDelay: '3s' }}>🌐</span>
        <span className="absolute bottom-[20%] right-[8%] text-2xl animate-float" style={{ animationDelay: '4.5s' }}>💻</span>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-6 w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left - Content */}
        <div className="flex flex-col gap-6 lg:gap-8">
          <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible">
            <Badge variant="available">Open to Internship Opportunities</Badge>
          </motion.div>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] leading-[1.1] tracking-tight"
          >
            Building the{" "}
            <span className="text-gradient">Digital Future,</span>
            <br />
            One Secure Network
            <br />
            at a Time.
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-text-sec text-base md:text-lg leading-relaxed max-w-xl"
          >
            Informatics Engineering Student & IT Developer — bridging the gap between{" "}
            <span className="highlight-code">network infrastructure</span>,{" "}
            <span className="highlight-code">cybersecurity</span>, and{" "}
            <span className="highlight-code">modern web development</span>.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <Button variant="primary" href="#projects">
              Explore My Work <ArrowRight size={16} />
            </Button>
            <a
              href={cvUrl}
              download="CV-Muhammad-Zaenal-Arifin.pdf"
              className="inline-flex items-center gap-2 font-body font-semibold text-sm px-7 py-3 rounded-lg transition-all duration-200 cursor-pointer border border-border-dim text-text-pri hover:border-text-sec hover:bg-white/[0.03] hover:-translate-y-0.5"
            >
              <Download size={16} /> Download CV
            </a>
          </motion.div>

          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-6 md:gap-10 pt-4"
          >
            <AnimatedCounter target={3} suffix="+" label="Internships" />
            <div className="w-px h-10 bg-border-dim" />
            <AnimatedCounter target={5} suffix="+" label="Tech Stacks" />
            <div className="w-px h-10 bg-border-dim" />
            <AnimatedCounter target={2} label="Years Building" />
          </motion.div>
        </div>

        {/* Right - Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex items-center justify-center lg:justify-end"
        >
          <div className="relative w-60 h-60 md:w-72 md:h-72">
            {/* Orbit rings */}
            <div className="absolute top-1/2 left-1/2 w-[120%] h-[120%] border border-cyan/20 rounded-full animate-ring-spin" />
            <div
              className="absolute top-1/2 left-1/2 w-[150%] h-[150%] border border-violet/15 rounded-full"
              style={{ animation: 'ring-spin 18s linear infinite reverse' }}
            />

            {/* Profile circle */}
            <div className="relative w-full h-full rounded-full bg-gradient-to-br from-cyan/20 to-violet/20 border-2 border-cyan/30 flex items-center justify-center overflow-hidden">
              <span className="font-display font-extrabold text-5xl md:text-6xl text-text-pri/80">MZA</span>
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 md:-right-8 bg-surface border border-border-dim rounded-lg px-3 py-2 text-xs font-mono flex items-center gap-2 shadow-lg"
            >
              <span>🛡️</span> <span className="text-text-sec">Cybersecurity</span>
            </motion.div>
            <motion.div
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 md:-left-8 bg-surface border border-border-dim rounded-lg px-3 py-2 text-xs font-mono flex items-center gap-2 shadow-lg"
            >
              <span>⚡</span> <span className="text-text-sec">Network Eng.</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-px h-8 bg-cyan/40 animate-scroll-line" />
        <span className="font-mono text-[10px] text-text-muted tracking-widest uppercase">Scroll to explore</span>
      </div>
    </section>
  );
}
