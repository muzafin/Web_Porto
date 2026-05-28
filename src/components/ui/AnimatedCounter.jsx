import { useState, useEffect, useRef } from "react";

export default function AnimatedCounter({ target, suffix = "", label }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        let start = 0;
        const duration = 1500;
        const step = Math.ceil(target / (duration / 16));
        const timer = setInterval(() => {
          start += step;
          if (start >= target) { setCount(target); clearInterval(timer); }
          else setCount(start);
        }, 16);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="flex flex-col items-center gap-1">
      <span className="font-display font-extrabold text-4xl text-text-pri leading-none">
        {count}{suffix}
      </span>
      <span className="font-mono text-xs text-text-muted tracking-widest uppercase">
        {label}
      </span>
    </div>
  );
}
