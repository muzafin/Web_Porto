import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import SectionHeader from "../ui/SectionHeader";
import { Phone, Mail, Send, CheckCircle, AlertCircle } from "lucide-react";

const LinkedinIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const contactCards = [
  {
    icon: <Phone size={20} />,
    label: "WhatsApp",
    value: "+62 851-7330-7940",
    href: "https://wa.me/6285173307940",
  },
  {
    icon: <Mail size={20} />,
    label: "Email",
    value: "arifinmuzafin4@gmail.com",
    href: "mailto:arifinmuzafin4@gmail.com",
  },
  {
    icon: <LinkedinIcon size={20} />,
    label: "LinkedIn",
    value: "muhammad-zaenal-arifin",
    href: "https://linkedin.com/in/muhammad-zaenal-arifin",
  },
];

export default function Contact() {
  const [ref, isVisible] = useScrollAnimation(0.1);
  const [formState, setFormState] = useState("idle");
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState("submitting");

    // mailto fallback
    const mailtoLink = `mailto:arifinmuzafin4@gmail.com?subject=${encodeURIComponent(
      formData.subject || "Portfolio Contact"
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;

    window.open(mailtoLink, "_blank");

    setTimeout(() => {
      setFormState("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setFormState("idle"), 4000);
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const inputClasses =
    "w-full bg-bg-deep border border-border-dim rounded-lg px-4 py-3 text-sm text-text-pri placeholder-text-muted font-body focus:outline-none focus:border-cyan/50 focus:shadow-[0_0_0_3px_rgba(0,216,255,0.1)] transition-all duration-200";

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-bg-alt overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan/[0.03] blur-[150px]" />

      <div className="max-w-7xl mx-auto px-5 md:px-6 relative z-10">
        <SectionHeader
          eyebrow="// get in touch"
          title="Contact"
          subtitle="Have a project in mind or want to collaborate? Let's connect."
        />

        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left - Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-6"
          >
            <h3 className="font-display font-bold text-2xl md:text-3xl text-text-pri">
              Let's Build Something Together
            </h3>
            <p className="text-text-sec text-base leading-relaxed">
              Open for internship opportunities, collaboration, and interesting conversations.
            </p>

            <div className="space-y-4">
              {contactCards.map((card) => (
                <a
                  key={card.label}
                  href={card.href}
                  target={card.href.startsWith("http") ? "_blank" : undefined}
                  rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 bg-surface border border-border-dim rounded-xl p-4 hover:border-cyan/30 hover:bg-cyan/[0.02] transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center text-cyan group-hover:bg-cyan/20 transition-colors">
                    {card.icon}
                  </div>
                  <div>
                    <p className="font-mono text-xs text-text-muted tracking-wide uppercase">{card.label}</p>
                    <p className="font-body text-sm text-text-pri">{card.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject (optional)"
                value={formData.subject}
                onChange={handleChange}
                className={inputClasses}
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className={`${inputClasses} resize-none`}
              />

              <button
                type="submit"
                disabled={formState === "submitting"}
                className="w-full inline-flex items-center justify-center gap-2 font-body font-semibold text-sm px-7 py-3.5 rounded-lg bg-cyan text-bg-deep hover:bg-[#33E0FF] hover:shadow-[0_8px_24px_rgba(0,216,255,0.35)] active:scale-[0.97] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
              >
                {formState === "submitting" ? (
                  "Sending..."
                ) : formState === "success" ? (
                  <><CheckCircle size={16} /> Message Sent!</>
                ) : (
                  <><Send size={16} /> Send Message</>
                )}
              </button>

              {formState === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-success text-sm text-center flex items-center justify-center gap-2"
                >
                  <CheckCircle size={14} /> I'll get back to you shortly.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
