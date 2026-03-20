import { useEffect, useRef, useState, ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  /** px from bottom of viewport to trigger — default 80 */
  rootMargin?: string;
  /** initial translate direction */
  from?: "up" | "left" | "right" | "fade";
  delay?: number;
  className?: string;
}

export default function Reveal({
  children,
  rootMargin = "0px 0px -80px 0px",
  from = "up",
  delay = 0,
  className = "",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { rootMargin }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [rootMargin]);

  const initial: Record<string, string> = {
    up:    "translateY(48px)",
    left:  "translateX(-48px)",
    right: "translateX(48px)",
    fade:  "translateY(0px)",
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translate(0,0)" : initial[from],
        filter: visible ? "blur(0px)" : "blur(3px)",
        transition: `opacity 0.75s cubic-bezier(0.16,1,0.3,1) ${delay}ms,
                     transform 0.75s cubic-bezier(0.16,1,0.3,1) ${delay}ms,
                     filter 0.6s ease ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
