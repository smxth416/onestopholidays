import React, { useEffect, useState } from "react";

const BentoGrid = () => {
  const [sliderStep, setSliderStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSliderStep((prev) => (prev + 1) % 4);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const valData = [
    ['★★', '★★★', '★★★★', '★★★★★'],
    ['7d', '10d', '14d', '21d'],
    ['$1k', '$1.5k', '$2k', '$3k']
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Manrope:wght@400;500;600;700&family=Noto+Serif:ital,wght@0,400;1,400&display=swap');

        :root {
          --bento-bg: #ffffff;
          --bento-card: #FFFFFF;
          --bento-border: rgba(0, 13, 116, 0.08);
          --bento-shadow: 0 4px 20px rgba(0,0,0,0.03);
          --bento-shadow-hover: 0 20px 40px rgba(0,13,116,0.06);
          --bento-radius: 32px;
          --bento-gap: 20px;
          --brand-primary: #000D74;
          --brand-secondary: #EAB308;
          --brand-navy: #000D74;
          --brand-gray: #64748b;
          --brand-light: #f1f5f9;
        }

        .bento-section {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 80px 24px;
          background: var(--bento-bg);
          font-family: 'Manrope', sans-serif;
        }

        .bento-grid {
          width: 100%;
          max-width: 1200px;
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: var(--bento-gap);
        }

        .bento-card {
          background: var(--bento-card);
          border-radius: var(--bento-radius);
          border: 1px solid var(--bento-border);
          box-shadow: var(--bento-shadow);
          overflow: hidden;
          padding: 32px;
          position: relative;
          transition: all 0.5s cubic-bezier(0.2, 1, 0.3, 1);
          display: flex;
          flex-direction: column;
          grid-column: span 12;
        }

        @media (min-width: 768px) {
          .card-1 { grid-column: span 6; }
          .card-2 { grid-column: span 6; }
          .card-3 { grid-column: span 12; }
          .card-4 { grid-column: span 6; }
          .card-5 { grid-column: span 6; }
        }

        @media (min-width: 1024px) {
          .card-1 { grid-column: span 4; }
          .card-2 { grid-column: span 4; }
          .card-3 { grid-column: span 4; }
          .card-4 { grid-column: span 4; }
          .card-5 { grid-column: span 8; }
        }

        .bento-card:hover {
          box-shadow: var(--bento-shadow-hover);
          transform: translateY(-4px);
          border-color: rgba(0, 13, 116, 0.15);
        }

        /* Typography */
        .b-tag {
          display: inline-block;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 6px 14px;
          border-radius: 100px;
          margin-bottom: 20px;
          width: fit-content;
        }
        .tag-blue { background: rgba(0, 13, 116, 0.05); color: var(--brand-navy); }
        .tag-gold { background: rgba(234, 179, 8, 0.1); color: #ca8a04; }

        .b-title { font-family: 'Instrument Serif', serif; font-size: 32px; margin-bottom: 16px; font-weight: 400; line-height: 1.1; color: var(--brand-navy); }
        .b-desc { font-family: 'Noto Serif', serif; font-size: 15px; color: var(--brand-gray); line-height: 1.6; }

        /* Plane Animation */
        .flight-container { position: relative; width: 100%; height: 140px; margin-top: auto; overflow: visible; }
        .path-line { stroke-dasharray: 6 6; animation: dashMove 2s linear infinite; opacity: 0.4; }
        @keyframes dashMove { to { stroke-dashoffset: -120; } }

        .plane-icon {
          offset-path: path('M30 140 Q120 40 210 70 Q300 100 390 140');
          animation: flightPath 4s linear infinite;
          will-change: offset-distance, opacity;
        }

        @keyframes flightPath {
          0% { offset-distance: 0%; opacity: 0; }
          10% { offset-distance: 10%; opacity: 1; }
          90% { offset-distance: 90%; opacity: 1; }
          100% { offset-distance: 100%; opacity: 0; }
        }

        /* UI Elements */
        .slider-track { height: 4px; background: #e2e8f0; border-radius: 10px; width: 100%; overflow: hidden; margin-top: 8px; }
        .slider-fill { height: 100%; background: var(--brand-secondary); transition: width 0.6s ease; }
        
        .globe-box { width: 100px; height: 100px; position: relative; margin-left: auto; }
        .orbit-dot { animation: orbit 6s linear infinite; transform-origin: 60px 60px; }
        @keyframes orbit { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

        @media (max-width: 640px) {
          .b-title { font-size: 28px; }
          .bento-card { padding: 24px; }
          .bento-section { padding: 40px 16px; }
        }
      `}</style>

      <section className="bento-section">
        <div className="bento-grid">
          
          {/* 1. Pricing */}
          <div className="bento-card card-1" style={{ justifyContent: 'flex-start' }}>
            <span className="b-tag tag-blue" style={{ marginBottom: '24px' }}>Pricing</span>
            <div className="flex flex-col gap-4">
              <h3 className="b-title" style={{ marginBottom: '0' }}>Flat Rates, No Surprises</h3>
              <p className="b-desc" style={{ marginBottom: '32px' }}>Premium travel planning starting at fixed $299 intervals.</p>
            </div>
            <div style={{ marginTop: 'auto', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
               <div style={{ background: 'rgba(0, 13, 116, 0.05)', color: 'var(--brand-navy)', padding: '14px 28px', borderRadius: '16px', fontWeight: 700, fontSize: '16px', border: '1px solid rgba(0, 13, 116, 0.08)' }}>$299</div>
               <div style={{ background: 'rgba(0, 13, 116, 0.05)', color: 'var(--brand-navy)', padding: '14px 28px', borderRadius: '16px', fontWeight: 700, fontSize: '16px', border: '1px solid rgba(0, 13, 116, 0.08)' }}>$499</div>
            </div>
          </div>

          {/* 2. Speed */}
          <div className="bento-card card-2">
            <span className="b-tag tag-blue">Real-time</span>
            <h3 className="b-title">Lightning Fast Booking</h3>
            <p className="b-desc">From search to confirmation in under 60 seconds.</p>
            <div className="flight-container">
              <svg width="100%" height="100%" viewBox="0 0 420 180" fill="none">
                <path className="path-line" d="M30 140 Q120 40 210 70 Q300 100 390 140" stroke="var(--brand-primary)" strokeWidth="2.5" fill="none" />
                <g className="plane-icon">
                  <path d="M-12 0 L4 8 L14 0 L4 -8 Z" fill="var(--brand-navy)" />
                  <path d="M4 -3 L10 0 L4 3 Z" fill="var(--brand-secondary)" />
                </g>
              </svg>
            </div>
          </div>

          {/* 3. Flexible */}
          <div className="bento-card card-3" style={{ background: '#fffcf0' }}>
            <span className="b-tag tag-gold">Flexible</span>
            <h3 className="b-title">Tailored To You</h3>
            <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {['Duration', 'Budget'].map((label, i) => (
                <div key={label}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '14px', fontWeight: 500, color: 'var(--brand-navy)' }}>{label}</span>
                    <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--brand-navy)' }}>{valData[i+1][sliderStep]}</span>
                  </div>
                  <div className="slider-track">
                    <div className="slider-fill" style={{ width: `${(sliderStep + 1) * 25}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 4. Services */}
          <div className="bento-card card-4">
            <span className="b-tag tag-blue">Services</span>
            <h3 className="b-title">Everything Covered</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: 'auto' }}>
              {[
                { label: 'Hotel Booking', icon: 'hotel', bg: '#eff6ff', color: '#2563eb' },
                { label: 'Visa Assistance', icon: 'description', bg: '#f0fdf4', color: '#16a34a' },
                { label: 'Insurance', icon: 'health_and_safety', bg: '#fff1f2', color: '#e11d48' }
              ].map(s => (
                <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: s.bg, display: 'flex', alignItems: 'center', flexShrink: 0, justifyContent: 'center' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '20px', color: s.color }}>{s.icon}</span>
                  </div>
                  <span style={{ fontSize: '15px', fontWeight: 600, color: 'var(--brand-navy)' }}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 5. Experience */}
          <div className="bento-card card-5" style={{ flexDirection: 'row', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 280px' }}>
              <span className="b-tag tag-blue">Experience</span>
              <h3 className="b-title">Global Connectivity</h3>
              <p className="b-desc" style={{ maxWidth: '42ch' }}>Experience seamless travel across 140+ countries with 24/7 local expert support, priority boarding, and exclusive on-ground concierge services tailored to your unique journey.</p>
            </div>
            <div className="globe-box" style={{ marginTop: 'auto', marginBottom: 'auto' }}>
              <svg viewBox="0 0 120 120" width="100%">
                <circle cx="60" cy="60" r="40" fill="none" stroke="#cbd5e1" strokeWidth="1" />
                <ellipse cx="60" cy="60" rx="40" ry="12" fill="none" stroke="#cbd5e1" strokeWidth="1" opacity="0.4" />
                <g className="orbit-dot"><circle cx="100" cy="60" r="5" fill="var(--brand-secondary)" /></g>
                <circle cx="60" cy="60" r="6" fill="var(--brand-navy)" />
              </svg>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default BentoGrid;