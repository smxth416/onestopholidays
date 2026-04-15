import { useRef, useEffect, useState } from "react";
import { motion } from "motion/react";

export const TextHoverEffect = ({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [maskPos, setMaskPos] = useState({ cx: "50%", cy: "50%" });

  useEffect(() => {
    if (svgRef.current) {
      const rect = svgRef.current.getBoundingClientRect();
      const cxPercentage = ((cursor.x - rect.left) / rect.width) * 100;
      const cyPercentage = ((cursor.y - rect.top) / rect.height) * 100;
      setMaskPos({
        cx: `${cxPercentage}%`,
        cy: `${cyPercentage}%`,
      });
    }
  }, [cursor]);

  return (
    <motion.svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 800 100"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
      className={`select-none cursor-pointer ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      <defs>
        <linearGradient id="oshTextGradient" gradientUnits="userSpaceOnUse" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#000d74" />
          <stop offset="40%" stopColor="#006c4e" />
          <stop offset="100%" stopColor="#1e2a8a" />
        </linearGradient>

        <motion.radialGradient
          id="oshRevealMask"
          gradientUnits="userSpaceOnUse"
          r="20%"
          initial={{ cx: "50%", cy: "50%" }}
          animate={maskPos}
          transition={{ duration: 0, ease: "easeOut" }}
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </motion.radialGradient>

        <mask id="oshTextMask">
          <rect x="0" y="0" width="100%" height="100%" fill="url(#oshRevealMask)" />
        </mask>
      </defs>

      {/* Base outline — always visible, very subtle */}
      <text
        x="50%" y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.8"
        className="fill-transparent stroke-primary/60 font-headline"
        style={{ fontSize: "4.5rem", fontFamily: "Instrument Serif, serif", opacity: hovered ? 0.9 : 0.7 }}
      >
        {text}
      </text>

      {/* Animated stroke draw-on using motion */}
      <motion.text
        x="50%" y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.8"
        className="fill-transparent stroke-primary font-headline"
        style={{ fontSize: "4.5rem", fontFamily: "Instrument Serif, serif" }}
        variants={{
          hidden: { strokeDashoffset: 1500, strokeDasharray: 1500 },
          visible: {
            strokeDashoffset: 0,
            strokeDasharray: 1500,
            transition: {
              duration: 4,
              ease: "easeInOut",
            }
          }
        }}
      >
        {text}
      </motion.text>

      {/* Hover reveal gradient fill */}
      <text
        x="50%" y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="url(#oshTextGradient)"
        mask="url(#oshTextMask)"
        className="font-headline"
        style={{ fontSize: "4.5rem", fontFamily: "Instrument Serif, serif", opacity: hovered ? 1 : 0, transition: "opacity 0.3s ease", letterSpacing: "0.02em" }}
      >
        {text}
      </text>
    </motion.svg>
  );
};
