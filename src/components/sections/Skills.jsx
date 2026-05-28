import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import SectionHeader from "../ui/SectionHeader";
import { skillCategories } from "../../data/skills";

function SkillBar({ name, level, color, delay, isVisible }) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-body text-sm text-text-sec w-40 shrink-0">{name}</span>
      <div className="flex-1 h-2 bg-bg-deep rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isVisible ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: delay, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
        />
      </div>
      <span className="font-mono text-xs text-text-muted w-10 text-right">{level}%</span>
    </div>
  );
}

function SkillCard({ category, index, isVisible }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="group bg-surface border border-border-dim rounded-xl p-6 hover:border-opacity-50 transition-all duration-300"
      style={{ '--card-color': category.color }}
      onMouseEnter={(e) => e.currentTarget.style.borderColor = `${category.color}60`}
      onMouseLeave={(e) => e.currentTarget.style.borderColor = ''}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <span className="text-2xl" style={{ color: category.color }}>{category.icon}</span>
        <h3 className="font-display font-semibold text-lg text-text-pri">{category.label}</h3>
      </div>

      {/* Skills */}
      <div className="space-y-4">
        {category.skills.map((skill, i) => (
          <SkillBar
            key={skill.name}
            name={skill.name}
            level={skill.level}
            color={category.color}
            delay={index * 0.15 + i * 0.1}
            isVisible={isVisible}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <section id="skills" className="relative py-24 md:py-32 bg-bg-alt">
      <div className="max-w-7xl mx-auto px-5 md:px-6">
        <SectionHeader
          eyebrow="// expertise"
          title="Skills & Tools"
          subtitle="A multidisciplinary toolkit spanning design, networking, systems, and beyond."
        />

        <div ref={ref} className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={category.id}
              category={category}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
