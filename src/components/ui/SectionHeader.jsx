export default function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="text-center mb-16">
      {eyebrow && (
        <p className="font-mono text-xs text-cyan tracking-widest uppercase mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display font-bold text-4xl md:text-5xl text-text-pri 
                     tracking-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-sec text-base max-w-xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
