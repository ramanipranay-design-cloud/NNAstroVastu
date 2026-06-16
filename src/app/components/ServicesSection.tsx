const vastuColStyle = `
  @media (min-width: 1024px) {
    .vastu-col { border-bottom: none !important; border-right: 1px solid rgba(212,175,55,0.14) !important; }
  }
`;

export function ServicesSection() {
  const astrologyServices = [
    { name: "Falajyotish Shastra", subtitle: "Jyotish Pravin" },
    { name: "Navmansh Kundali", subtitle: "Jyotish Pandit" },
    { name: "Krushnamurti Jyotish Siddhant", subtitle: "K.P. Visharad" },
    { name: "Life Reading", subtitle: "Jivan Vruttant Lekhak" },
    { name: "Gemology", subtitle: "Ratna Visharad" },
    { name: "Share Market", subtitle: "Share Astro Master" },
    { name: "Astro Remedies", subtitle: "Jyotish Upay Tadnya" },
    { name: "Numerology", subtitle: "Ank Shastradnya" },
  ];

  return (
    <section
      id="services"
      className="py-16 lg:py-28 px-6 relative overflow-hidden"
      style={{ background: "#FAF7F2" }}
    >
      {/* Faint constellation bg */}
      <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.04 }}>
        <ConstellationBg />
      </div>

      <style>{vastuColStyle}</style>
      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Section header */}
        <div className="text-center mb-12 lg:mb-16">
          <p style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "0.7rem",
            letterSpacing: "0.28em",
            textTransform: "uppercase" as const,
            color: "#D4AF37",
            fontWeight: 500,
            marginBottom: "0.75rem",
          }}>
            What We Offer
          </p>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
            fontWeight: 600,
            color: "#0F172A",
            lineHeight: 1.2,
            marginBottom: "1.1rem",
          }}>
            Our Services
          </h2>
          <p style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 300,
            fontSize: "0.95rem",
            lineHeight: 1.85,
            color: "#6B7280",
            maxWidth: "560px",
            margin: "0 auto",
          }}>
            Professional Astro Vastu education and consultation services rooted in
            traditional wisdom and modern practical application.
          </p>
        </div>

        {/* Unified premium container */}
        <div
          className="rounded-sm overflow-hidden"
          style={{
            border: "1px solid rgba(212,175,55,0.22)",
            boxShadow: "0 4px 48px rgba(212,175,55,0.08)",
            background: "#FAF7F2",
          }}
        >
          {/* Column headers row */}
          <div className="grid lg:grid-cols-2">
            {/* Left header */}
            <div
              className="px-6 lg:px-12 py-5 lg:py-6 flex items-center gap-4"
              style={{ background: "#0F172A", borderBottom: "1px solid rgba(212,175,55,0.15)" }}
            >
              <div
                className="w-9 h-9 flex items-center justify-center rounded-sm flex-shrink-0"
                style={{ background: "rgba(212,175,55,0.15)", color: "#D4AF37" }}
              >
                <VastuIcon />
              </div>
              <div>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.25rem",
                  fontWeight: 600,
                  color: "#FAF7F2",
                  lineHeight: 1,
                  marginBottom: "0.25rem",
                }}>
                  Vastushatra
                </h3>
                <p style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "0.65rem",
                  color: "rgba(212,175,55,0.75)",
                  letterSpacing: "0.12em",
                }}>
                  Sacred Space Sciences
                </p>
              </div>
            </div>

            {/* Right header */}
            <div
              className="px-6 lg:px-12 py-5 lg:py-6 flex items-center gap-4"
              style={{
                background: "#0F172A",
                borderBottom: "1px solid rgba(212,175,55,0.15)",
                borderTop: "1px solid rgba(212,175,55,0.15)",
              }}
              /* on lg+ the top border is hidden visually behind the row, but on mobile it acts as the divider between the two headers */
            >
              <div
                className="w-9 h-9 flex items-center justify-center rounded-sm flex-shrink-0"
                style={{ background: "rgba(212,175,55,0.15)", color: "#D4AF37" }}
              >
                <AstrologyIcon />
              </div>
              <div>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.25rem",
                  fontWeight: 600,
                  color: "#FAF7F2",
                  lineHeight: 1,
                  marginBottom: "0.25rem",
                }}>
                  Astrology
                </h3>
                <p style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "0.65rem",
                  color: "rgba(212,175,55,0.75)",
                  letterSpacing: "0.12em",
                }}>
                  Vedic & Modern Disciplines
                </p>
              </div>
            </div>
          </div>

          {/* Columns body */}
          <div className="grid lg:grid-cols-2">

            {/* ── LEFT: VASTUSHATRA ── */}
            <div
              className="vastu-col relative px-6 lg:px-12 py-8 lg:py-10 flex flex-col justify-between overflow-hidden"
              style={{ borderBottom: "1px solid rgba(212,175,55,0.14)" }}
            >

              {/* Decorative vastu mandala watermark */}
              <div className="absolute right-0 bottom-0 pointer-events-none" style={{ opacity: 0.07 }}>
                <VastuMandala />
              </div>

              <div className="relative z-10">
                <p style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 300,
                  fontSize: "0.85rem",
                  lineHeight: 1.75,
                  color: "#6B7280",
                  marginBottom: "2rem",
                  maxWidth: "340px",
                }}>
                  Traditional vastu guidance for harmonious living and workspaces.
                </p>

                <div className="space-y-0">
                  {[
                    { num: "01", name: "Vedic Vastushatra" },
                    { num: "02", name: "Advance Vastushatra" },
                  ].map((s, i, arr) => (
                    <div key={s.num}>
                      <div
                        className="flex items-center gap-5 py-5 transition-all duration-200 cursor-default rounded-sm px-3 -mx-3"
                        onMouseEnter={e => {
                          (e.currentTarget as HTMLDivElement).style.background = "rgba(212,175,55,0.06)";
                        }}
                        onMouseLeave={e => {
                          (e.currentTarget as HTMLDivElement).style.background = "transparent";
                        }}
                      >
                        <span style={{
                          fontFamily: "'Playfair Display', serif",
                          fontSize: "1.5rem",
                          fontWeight: 700,
                          color: "rgba(212,175,55,0.25)",
                          minWidth: "2rem",
                          lineHeight: 1,
                        }}>
                          {s.num}
                        </span>
                        <div>
                          <p style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: "1.1rem",
                            fontWeight: 600,
                            color: "#0F172A",
                            lineHeight: 1.3,
                          }}>
                            {s.name}
                          </p>
                        </div>
                      </div>
                      {i < arr.length - 1 && (
                        <div style={{ height: "1px", background: "rgba(212,175,55,0.12)" }} />
                      )}
                    </div>
                  ))}
                </div>

                {/* Spacer to visually balance the column */}
                <div className="mt-8 pt-8" style={{ borderTop: "1px solid rgba(212,175,55,0.12)" }}>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0" style={{ color: "#D4AF37" }}>
                      <LeafIcon />
                    </div>
                    <p style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 300,
                      fontSize: "0.82rem",
                      lineHeight: 1.8,
                      color: "#9CA3AF",
                      fontStyle: "italic",
                    }}>
                      "A space aligned with nature's forces becomes a source of enduring well-being and prosperity."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ── RIGHT: ASTROLOGY ── */}
            <div className="px-6 lg:px-12 py-8 lg:py-10">
              <p style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 300,
                fontSize: "0.85rem",
                lineHeight: 1.75,
                color: "#6B7280",
                marginBottom: "2rem",
                maxWidth: "360px",
              }}>
                Vedic and contemporary astrological systems for personal insight and life guidance.
              </p>

              <div>
                {astrologyServices.map((s, i) => (
                  <div key={s.name}>
                    <div
                      className="flex items-start sm:items-center justify-between gap-2 py-3.5 transition-all duration-200 cursor-default rounded-sm px-3 -mx-3"
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLDivElement).style.background = "rgba(212,175,55,0.06)";
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLDivElement).style.background = "transparent";
                      }}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span style={{
                          fontFamily: "'Poppins', sans-serif",
                          fontSize: "0.65rem",
                          fontWeight: 600,
                          color: "rgba(212,175,55,0.5)",
                          minWidth: "1.4rem",
                          flexShrink: 0,
                          letterSpacing: "0.05em",
                        }}>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div className="min-w-0">
                          <p style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: "0.98rem",
                            fontWeight: 500,
                            color: "#1F2937",
                            lineHeight: 1.3,
                          }}>
                            {s.name}
                          </p>
                          {/* subtitle shown inline on sm+, below on xs */}
                          <p className="sm:hidden mt-0.5" style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: "0.68rem",
                            color: "#D4AF37",
                            letterSpacing: "0.06em",
                          }}>
                            {s.subtitle}
                          </p>
                        </div>
                      </div>
                      <p className="hidden sm:block flex-shrink-0" style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "0.68rem",
                        fontWeight: 400,
                        color: "#D4AF37",
                        letterSpacing: "0.06em",
                        whiteSpace: "nowrap" as const,
                      }}>
                        {s.subtitle}
                      </p>
                    </div>
                    {i < astrologyServices.length - 1 && (
                      <div style={{ height: "1px", background: "rgba(212,175,55,0.1)", marginLeft: "2.4rem" }} />
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

function VastuIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="18" height="18" rx="1" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="3" y1="15" x2="21" y2="15" />
      <line x1="9" y1="3" x2="9" y2="21" />
      <line x1="15" y1="3" x2="15" y2="21" />
    </svg>
  );
}

function AstrologyIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="3" />
      <line x1="12" y1="2" x2="12" y2="5" />
      <line x1="12" y1="19" x2="12" y2="22" />
      <line x1="2" y1="12" x2="5" y2="12" />
      <line x1="19" y1="12" x2="22" y2="12" />
    </svg>
  );
}

function LeafIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}

function VastuMandala() {
  return (
    <svg width="280" height="280" viewBox="0 0 280 280" xmlns="http://www.w3.org/2000/svg">
      {/* Outer square */}
      <rect x="20" y="20" width="240" height="240" fill="none" stroke="#D4AF37" strokeWidth="1.5" />
      {/* Inner squares rotated */}
      <rect x="50" y="50" width="180" height="180" fill="none" stroke="#D4AF37" strokeWidth="1" transform="rotate(0 140 140)" />
      <rect x="70" y="70" width="140" height="140" fill="none" stroke="#D4AF37" strokeWidth="0.8" transform="rotate(45 140 140)" />
      {/* Circles */}
      <circle cx="140" cy="140" r="100" fill="none" stroke="#D4AF37" strokeWidth="0.8" />
      <circle cx="140" cy="140" r="70" fill="none" stroke="#D4AF37" strokeWidth="0.6" />
      <circle cx="140" cy="140" r="40" fill="none" stroke="#D4AF37" strokeWidth="0.8" />
      <circle cx="140" cy="140" r="12" fill="none" stroke="#D4AF37" strokeWidth="1" />
      {/* Cardinal lines */}
      {[0, 45, 90, 135].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        return (
          <line
            key={i}
            x1={140 + Math.cos(rad) * 12}
            y1={140 + Math.sin(rad) * 12}
            x2={140 + Math.cos(rad) * 100}
            y2={140 + Math.sin(rad) * 100}
            stroke="#D4AF37"
            strokeWidth="0.6"
          />
        );
      })}
      {[0, 45, 90, 135].map((angle, i) => {
        const rad = ((angle + 180) * Math.PI) / 180;
        return (
          <line
            key={i + 4}
            x1={140 + Math.cos(rad) * 12}
            y1={140 + Math.sin(rad) * 12}
            x2={140 + Math.cos(rad) * 100}
            y2={140 + Math.sin(rad) * 100}
            stroke="#D4AF37"
            strokeWidth="0.6"
          />
        );
      })}
    </svg>
  );
}

function ConstellationBg() {
  return (
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="const-svc" x="0" y="0" width="220" height="220" patternUnits="userSpaceOnUse">
          <circle cx="30" cy="30" r="1.2" fill="#D4AF37" />
          <circle cx="110" cy="60" r="1" fill="#D4AF37" />
          <circle cx="190" cy="25" r="1.2" fill="#D4AF37" />
          <circle cx="70" cy="140" r="0.8" fill="#D4AF37" />
          <circle cx="160" cy="120" r="1" fill="#D4AF37" />
          <circle cx="50" cy="190" r="1.2" fill="#D4AF37" />
          <circle cx="140" cy="180" r="0.8" fill="#D4AF37" />
          <circle cx="200" cy="170" r="1" fill="#D4AF37" />
          <line x1="30" y1="30" x2="110" y2="60" stroke="#D4AF37" strokeWidth="0.4" />
          <line x1="110" y1="60" x2="190" y2="25" stroke="#D4AF37" strokeWidth="0.4" />
          <line x1="110" y1="60" x2="70" y2="140" stroke="#D4AF37" strokeWidth="0.4" />
          <line x1="70" y1="140" x2="160" y2="120" stroke="#D4AF37" strokeWidth="0.4" />
          <line x1="160" y1="120" x2="200" y2="170" stroke="#D4AF37" strokeWidth="0.4" />
          <line x1="70" y1="140" x2="50" y2="190" stroke="#D4AF37" strokeWidth="0.4" />
          <line x1="50" y1="190" x2="140" y2="180" stroke="#D4AF37" strokeWidth="0.4" />
          <line x1="140" y1="180" x2="200" y2="170" stroke="#D4AF37" strokeWidth="0.4" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#const-svc)" />
    </svg>
  );
}
