import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import SectionHeader from "../ui/SectionHeader";
import { projects } from "../../data/projects";
import { ExternalLink } from "lucide-react";

function ProjectCard({ project, index, isVisible }) {
  const isLive = project.status === "live";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="group bg-surface border border-border-dim rounded-xl overflow-hidden hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] transition-all duration-300"
      onMouseEnter={(e) => e.currentTarget.style.borderColor = `${project.color}40`}
      onMouseLeave={(e) => e.currentTarget.style.borderColor = ''}
    >
      {/* Top gradient bar */}
      <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }} />

      <div className="p-6 flex flex-col h-full">
        {/* Status badge */}
        <div className="mb-4">
          <span
            className={`inline-flex items-center gap-1.5 font-mono text-[10px] tracking-widest uppercase px-3 py-1 rounded-full border ${
              isLive
                ? "text-success border-success/25 bg-success/[0.08]"
                : "text-text-muted border-border-dim bg-bg-deep"
            }`}
          >
            {isLive ? "✦ Live" : "◌ Coming Soon"}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display font-semibold text-xl text-text-pri mb-3">{project.title}</h3>

        {/* Description */}
        <p className="text-text-sec text-sm leading-relaxed mb-4 flex-1">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[10px] text-text-muted bg-bg-deep px-2.5 py-1 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-border-dim">
          {isLive ? (
            <a
              href={project.link}
              className="inline-flex items-center gap-2 text-sm text-cyan hover:text-[#33E0FF] transition-colors group/link"
            >
              View Project
              <ExternalLink size={14} className="transition-transform group-hover/link:translate-x-1" />
            </a>
          ) : (
            <span className="text-sm text-text-muted cursor-default">Coming Soon</span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-6">
        <SectionHeader
          eyebrow="// portfolio"
          title="Projects"
          subtitle="A collection of projects that showcase my technical skills and creative approach."
        />

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
