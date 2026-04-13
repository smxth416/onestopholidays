import { useRef, useEffect, useState } from "react";

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
      setMaskPos({
        cx: `${((cursor.x - rect.left) / rect.width) * 100}%`,
        cy: `${((cursor.y - rect.top) / rect.height) * 100}%`,
      });
    }
  }, [cursor]);

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 800 100"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
      className={`select-none cursor-pointer ${className}`}
    >
      <defs>
        <linearGradient id="oshTextGradient" gradientUnits="userSpaceOnUse" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#000d74" />
          <stop offset="40%" stopColor="#006c4e" />
          <stop offset="100%" stopColor="#1e2a8a" />
        </linearGradient>

        <radialGradient
          id="oshRevealMask"
          gradientUnits="userSpaceOnUse"
          r="20%"
          cx={maskPos.cx}
          cy={maskPos.cy}
          style={{ transition: "cx 0.1s ease-out, cy 0.1s ease-out" }}
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </radialGradient>

        <mask id="oshTextMask">
          <rect x="0" y="0" width="100%" height="100%" fill="url(#oshRevealMask)" />
        </mask>

        <style>{`
          @keyframes osh-draw {
            from { stroke-dashoffset: 1500; }
            to { stroke-dashoffset: 0; }
          }
          .osh-animated-stroke {
            stroke-dasharray: 1500;
            stroke-dashoffset: 1500;
            animation: osh-draw 4s ease-in-out forwards;
          }
        `}</style>
      </defs>

      {/* Base outline — always visible, very subtle */}
      <text
        x="50%" y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.4"
        className="fill-transparent stroke-primary/10 font-headline"
        style={{ fontSize: "4.5rem", fontFamily: "Instrument Serif, serif", opacity: hovered ? 0.6 : 0.25 }}
      >
        {text}
      </text>

      {/* Animated stroke draw-on */}
      <text
        x="50%" y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.4"
        className="fill-transparent stroke-primary osh-animated-stroke font-headline"
        style={{ fontSize: "4.5rem", fontFamily: "Instrument Serif, serif" }}
      >
        {text}
      </text>

      {/* Hover reveal gradient fill */}
      <text
        x="50%" y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        stroke="url(#oshTextGradient)"
        strokeWidth="0.4"
        mask="url(#oshTextMask)"
        className="fill-transparent font-headline"
        style={{ fontSize: "4.5rem", fontFamily: "Instrument Serif, serif", opacity: hovered ? 1 : 0, transition: "opacity 0.3s ease" }}
      >
        {text}
      </text>
    </svg>
  );
};
