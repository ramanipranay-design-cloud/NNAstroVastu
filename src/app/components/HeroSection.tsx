import drGirishImg from "../../imports/ChatGPT_Image_Jun_16__2026__02_54_24_PM__1_.png";

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "#0F172A" }}
    >
      {/* Sacred geometry SVG overlay */}
      <SacredGeometryBg />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <div className="space-y-6 lg:space-y-8">
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-8" style={{ background: "#D4AF37" }} />
              <span
                className="text-xs tracking-[0.25em] uppercase"
                style={{ color: "#D4AF37", fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}
              >
                Ancient Wisdom • Modern Guidance
              </span>
              <span className="h-px w-8" style={{ background: "#D4AF37" }} />
            </div>

            <div>
              <h1
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(2.4rem, 5vw, 4rem)",
                  fontWeight: 600,
                  lineHeight: 1.15,
                  color: "#FAF7F2",
                  letterSpacing: "-0.01em",
                }}
              >
                Bring Harmony,
                <span style={{ color: "#D4AF37", display: "block" }}>Prosperity &</span>
                Positive Energy
                <br />
                Into Your Life
              </h1>
            </div>

            <p
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 300,
                fontSize: "1.05rem",
                lineHeight: 1.8,
                color: "rgba(250,247,242,0.72)",
                maxWidth: "480px",
              }}
            >
              Trusted Astro Vastu Consultation by Dr. Girish Patil for Homes,
              Offices & Personal Wellbeing.
            </p>

            {/* Qualifications */}
            <div className="flex items-center gap-3">
              <span className="h-px w-5" style={{ background: "rgba(212,175,55,0.5)", flexShrink: 0 }} />
              <p
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 400,
                  fontSize: "0.72rem",
                  letterSpacing: "0.14em",
                  color: "rgba(212,175,55,0.85)",
                }}
              >
                B.Sc &nbsp;•&nbsp; MBA &nbsp;•&nbsp; MA in Astrology &nbsp;•&nbsp; PhD in Astrology
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="tel:+919999999999"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-sm transition-all duration-300"
                style={{
                  border: "1px solid rgba(212,175,55,0.5)",
                  color: "#FAF7F2",
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  backdropFilter: "blur(4px)",
                  background: "rgba(255,255,255,0.05)",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "#D4AF37";
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(212,175,55,0.08)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(212,175,55,0.5)";
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.05)";
                }}
              >
                <PhoneIcon />
                Call Now
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 pt-2">
              {[
                { num: "20+", label: "Years Experience" },
                { num: "5000+", label: "Consultations" },
                { num: "98%", label: "Client Satisfaction" },
              ].map(stat => (
                <div key={stat.label}>
                  <div
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.75rem",
                      fontWeight: 700,
                      color: "#D4AF37",
                    }}
                  >
                    {stat.num}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: "0.75rem",
                      color: "rgba(250,247,242,0.55)",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative flex justify-center lg:justify-end mt-4 lg:mt-0">
            <div className="relative w-full" style={{ maxWidth: "480px" }}>
              {/* Gold border frame */}
              <div
                className="absolute -inset-3 rounded-sm"
                style={{ border: "1px solid rgba(212,175,55,0.25)", zIndex: 0 }}
              />
              <div
                className="absolute -inset-1 rounded-sm"
                style={{ border: "1px solid rgba(212,175,55,0.12)", zIndex: 0 }}
              />
              <img
                src={drGirishImg}
                alt="Dr. Girish Patil - Astro Vastu Consultant"
                className="relative z-10 w-full rounded-sm"
                style={{
                  aspectRatio: "4/5",
                  objectFit: "cover",
                  maxHeight: "420px",
                }}
              />
              {/* Gold corner accents */}
              <div
                className="absolute top-0 left-0 w-8 h-8 z-20"
                style={{
                  borderTop: "2px solid #D4AF37",
                  borderLeft: "2px solid #D4AF37",
                }}
              />
              <div
                className="absolute bottom-0 right-0 w-8 h-8 z-20"
                style={{
                  borderBottom: "2px solid #D4AF37",
                  borderRight: "2px solid #D4AF37",
                }}
              />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.2h3a2 2 0 0 1 2 1.72c.13 1 .37 1.97.72 2.91a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l.96-.96a2 2 0 0 1 2.11-.45c.94.35 1.91.59 2.91.72A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function SacredGeometryBg() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.06 }}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern id="constellation" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
          {/* Dots */}
          <circle cx="20" cy="20" r="1.2" fill="#D4AF37" />
          <circle cx="100" cy="50" r="1" fill="#D4AF37" />
          <circle cx="180" cy="30" r="1.2" fill="#D4AF37" />
          <circle cx="60" cy="130" r="0.8" fill="#D4AF37" />
          <circle cx="150" cy="110" r="1" fill="#D4AF37" />
          <circle cx="40" cy="180" r="1.2" fill="#D4AF37" />
          <circle cx="130" cy="170" r="0.8" fill="#D4AF37" />
          <circle cx="190" cy="160" r="1" fill="#D4AF37" />
          {/* Lines */}
          <line x1="20" y1="20" x2="100" y2="50" stroke="#D4AF37" strokeWidth="0.4" />
          <line x1="100" y1="50" x2="180" y2="30" stroke="#D4AF37" strokeWidth="0.4" />
          <line x1="100" y1="50" x2="60" y2="130" stroke="#D4AF37" strokeWidth="0.4" />
          <line x1="60" y1="130" x2="150" y2="110" stroke="#D4AF37" strokeWidth="0.4" />
          <line x1="150" y1="110" x2="190" y2="160" stroke="#D4AF37" strokeWidth="0.4" />
          <line x1="60" y1="130" x2="40" y2="180" stroke="#D4AF37" strokeWidth="0.4" />
          <line x1="40" y1="180" x2="130" y2="170" stroke="#D4AF37" strokeWidth="0.4" />
          <line x1="130" y1="170" x2="190" y2="160" stroke="#D4AF37" strokeWidth="0.4" />
        </pattern>
        {/* Mandala ring pattern */}
        <pattern id="vastu-grid" x="0" y="0" width="400" height="400" patternUnits="userSpaceOnUse">
          <circle cx="200" cy="200" r="160" fill="none" stroke="#D4AF37" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="120" fill="none" stroke="#D4AF37" strokeWidth="0.3" />
          <circle cx="200" cy="200" r="80" fill="none" stroke="#D4AF37" strokeWidth="0.3" />
          <circle cx="200" cy="200" r="40" fill="none" stroke="#D4AF37" strokeWidth="0.4" />
          {/* Radial lines at 45° intervals */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
            const rad = (angle * Math.PI) / 180;
            return (
              <line
                key={i}
                x1={200 + Math.cos(rad) * 40}
                y1={200 + Math.sin(rad) * 40}
                x2={200 + Math.cos(rad) * 160}
                y2={200 + Math.sin(rad) * 160}
                stroke="#D4AF37"
                strokeWidth="0.3"
              />
            );
          })}
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#constellation)" />
      <rect width="100%" height="100%" fill="url(#vastu-grid)" style={{ opacity: 0.4 }} />
    </svg>
  );
}
