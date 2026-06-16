export function WhyChooseSection() {
  const cards = [
    {
      num: "01",
      title: "Personalized Consultation",
      desc: "Every consultation is uniquely tailored to your birth chart, property direction, and personal goals — never a one-size-fits-all approach.",
      icon: <PersonIcon />,
    },
    {
      num: "02",
      title: "Traditional Knowledge",
      desc: "Rooted in authentic Vedic Astrology and classical Vastu Shastra lineage, passed down through generations of genuine practitioners.",
      icon: <BookIcon />,
    },
    {
      num: "03",
      title: "Practical Modern Solutions",
      desc: "Remedies and recommendations that fit real-world constraints — affordable, implementable, and genuinely effective for today's homes and offices.",
      icon: <LightIcon />,
    },
  ];

  return (
    <section
      id="services"
      style={{ background: "#F5EFE6" }}
      className="py-16 lg:py-28 px-6 relative overflow-hidden"
    >
      {/* Subtle vastu grid watermark */}
      <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.03 }}>
        <VastuGridBg />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-12 lg:mb-20">
          <p
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "0.7rem",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "#D4AF37",
              fontWeight: 500,
              marginBottom: "0.75rem",
            }}
          >
            Why Choose Us
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              fontWeight: 600,
              color: "#0F172A",
              lineHeight: 1.25,
            }}
          >
            The Norma Neptune Difference
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map(card => (
            <div
              key={card.num}
              className="relative p-10 rounded-sm transition-all duration-400 cursor-default"
              style={{
                background: "#FAF7F2",
                border: "1px solid rgba(212,175,55,0.15)",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = "#D4AF37";
                el.style.boxShadow = "0 12px 48px rgba(212,175,55,0.12)";
                el.style.transform = "translateY(-6px)";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = "rgba(212,175,55,0.15)";
                el.style.boxShadow = "none";
                el.style.transform = "translateY(0)";
              }}
            >
              {/* Gold top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 rounded-t-sm"
                style={{ background: "linear-gradient(to right, transparent, #D4AF37, transparent)", opacity: 0.6 }}
              />

              <div className="flex items-start gap-4 mb-6">
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-sm flex items-center justify-center"
                  style={{ background: "rgba(212,175,55,0.1)", color: "#D4AF37" }}
                >
                  {card.icon}
                </div>
                <span
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "3rem",
                    fontWeight: 700,
                    lineHeight: 1,
                    color: "rgba(212,175,55,0.15)",
                  }}
                >
                  {card.num}
                </span>
              </div>

              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.2rem",
                  fontWeight: 600,
                  color: "#0F172A",
                  marginBottom: "0.875rem",
                  lineHeight: 1.3,
                }}
              >
                {card.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 300,
                  fontSize: "0.88rem",
                  lineHeight: 1.85,
                  color: "#6B7280",
                }}
              >
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Interior image strip */}
        <div className="mt-10 lg:mt-20 relative rounded-sm overflow-hidden" style={{ minHeight: "200px", height: "clamp(200px, 35vw, 340px)" }}>
          <img
            src="https://images.unsplash.com/photo-1564078516393-cf04bd966897?w=1400&h=400&fit=crop&auto=format&crop=center"
            alt="Elegant luxury interior representing harmonious vastu-aligned living space"
            className="w-full h-full object-cover"
            style={{ filter: "brightness(0.75) saturate(0.9)" }}
          />
          <div
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
            style={{ background: "rgba(15,23,42,0.55)" }}
          >
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.4rem, 3vw, 2.2rem)",
                fontWeight: 600,
                color: "#FAF7F2",
                lineHeight: 1.3,
                maxWidth: "600px",
              }}
            >
              "A harmonious space is the foundation of a harmonious life."
            </p>
            <p
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "0.8rem",
                color: "#D4AF37",
                marginTop: "1rem",
                letterSpacing: "0.12em",
              }}
            >
              — Dr. Girish Patil
            </p>
          </div>
          {/* Corner gold accents */}
          <div className="absolute top-4 left-4 w-6 h-6" style={{ borderTop: "1.5px solid #D4AF37", borderLeft: "1.5px solid #D4AF37" }} />
          <div className="absolute bottom-4 right-4 w-6 h-6" style={{ borderBottom: "1.5px solid #D4AF37", borderRight: "1.5px solid #D4AF37" }} />
        </div>
      </div>
    </section>
  );
}

function PersonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function BookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  );
}

function LightIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <line x1="9" y1="18" x2="15" y2="18" />
      <line x1="10" y1="22" x2="14" y2="22" />
      <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
    </svg>
  );
}

function VastuGridBg() {
  return (
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="vastu" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
          <rect x="10" y="10" width="100" height="100" fill="none" stroke="#D4AF37" strokeWidth="1" />
          <line x1="10" y1="43.3" x2="110" y2="43.3" stroke="#D4AF37" strokeWidth="0.5" />
          <line x1="10" y1="76.6" x2="110" y2="76.6" stroke="#D4AF37" strokeWidth="0.5" />
          <line x1="43.3" y1="10" x2="43.3" y2="110" stroke="#D4AF37" strokeWidth="0.5" />
          <line x1="76.6" y1="10" x2="76.6" y2="110" stroke="#D4AF37" strokeWidth="0.5" />
          <circle cx="60" cy="60" r="18" fill="none" stroke="#D4AF37" strokeWidth="0.8" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#vastu)" />
    </svg>
  );
}
