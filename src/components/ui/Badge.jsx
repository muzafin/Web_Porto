export default function Badge({ children, variant = "available" }) {
  const variants = {
    available:   "text-success border-success/25 bg-success/[0.08]",
    internship:  "text-cyan border-cyan/25 bg-cyan/[0.08]",
    default:     "text-text-sec border-border-dim bg-surface",
  };
  return (
    <div className={`inline-flex items-center gap-2 font-mono text-xs 
                     border px-4 py-1.5 rounded-full w-fit ${variants[variant]}`}>
      {variant === "available" && (
        <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse-dot" />
      )}
      {children}
    </div>
  );
}
