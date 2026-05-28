export default function Button({ children, variant = "primary", href, onClick, icon, download }) {
  const base = `inline-flex items-center gap-2 font-body font-semibold text-sm 
                px-7 py-3 rounded-lg transition-all duration-200 cursor-pointer`;
  const variants = {
    primary:   `bg-cyan text-bg-deep hover:bg-[#33E0FF] hover:-translate-y-0.5 
                hover:shadow-[0_8px_24px_rgba(0,216,255,0.35)] active:scale-[0.97]`,
    secondary: `border border-border-dim text-text-pri hover:border-text-sec 
                hover:bg-white/[0.03] hover:-translate-y-0.5`,
  };
  const Tag = href ? "a" : "button";
  return (
    <Tag href={href} onClick={onClick} download={download} className={`${base} ${variants[variant]}`}>
      {children}
      {icon && <span className="transition-transform group-hover:translate-x-1">{icon}</span>}
    </Tag>
  );
}
