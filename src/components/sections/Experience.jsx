import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import SectionHeader from "../ui/SectionHeader";
import { experiences } from "../../data/experience";

function TimelineCard({ exp, index, isVisible }) {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={isVisible ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
      className={`relative flex items-start gap-8 ${
        isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
      } flex-col lg:flex-row`}
    >
      {/* Timeline dot */}
      <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 top-6 z-10">
        <div
          className="w-4 h-4 rounded-full border-2"
          style={{ borderColor: exp.color, backgroundColor: `${exp.color}33` }}
        />
      </div>

      {/* Card */}
      <div className={`lg:w-[calc(50%-2rem)] ${
        isLeft ? "lg:pr-0 lg:text-right" : "lg:pl-0"
      } w-full`}>
        <div className="group bg-surface border border-border-dim rounded-xl p-6 hover:border-l-2 transition-all duration-300" style={{ '--hover-color': exp.color }}>
          {/* Period */}
          <span className="font-mono text-xs text-text-muted tracking-wide">{exp.period}</span>

          {/* Type badge */}
          <div className="mt-2 mb-3">
            <span
              className="inline-block font-mono text-[10px] tracking-widest uppercase px-3 py-1 rounded-full border"
              style={{ color: exp.color, borderColor: `${exp.color}40`, backgroundColor: `${exp.color}10` }}
            >
              {exp.type}
            </span>
          </div>

          {/* Role & Company */}
          <h3 className="font-display font-bold text-lg text-text-pri mb-1">
            {exp.icon} {exp.role}
          </h3>
          <p className="font-body text-sm text-text-sec mb-4">{exp.company}</p>

          {/* Achievements */}
          <ul className={`space-y-2 mb-4 ${isLeft ? 'lg:text-left' : ''}`}>
            {exp.achievements.map((item, i) => (
              <li key={i} className="text-sm text-text-sec leading-relaxed flex gap-2">
                <span className="text-cyan mt-1 shrink-0">▹</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {exp.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[10px] text-text-muted bg-bg-deep px-2.5 py-1 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Spacer for opposite side */}
      <div className="hidden lg:block lg:w-[calc(50%-2rem)]" />
    </motion.div>
  );
}

export default function Experience() {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-6">
        <SectionHeader
          eyebrow="// career path"
          title="Experience"
          subtitle="A timeline of my professional journey through technology, design, and infrastructure."
        />

        <div ref={ref} className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan/40 via-violet/20 to-transparent" />

          {/* Cards */}
          <div className="space-y-12 lg:space-y-16">
            {experiences.map((exp, index) => (
              <TimelineCard key={exp.id} exp={exp} index={index} isVisible={isVisible} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
