export function AboutSection() {
  const features = [
    {
      icon: <StarIcon />,
      title: "Astro Guidance",
      desc: "Personalized birth chart analysis aligned with your life's purpose and cosmic blueprint.",
    },
    {
      icon: <HomeIcon />,
      title: "Vastu Consultation",
      desc: "Harmonizing spaces with ancient directional principles for prosperity and wellbeing.",
    },
    {
      icon: <SunIcon />,
      title: "Positive Energy Alignment",
      desc: "Correcting energy imbalances to invite abundance, health, and clarity into your life.",
    },
  ];

  return (
    <section
      id="about"
      style={{ background: "#FAF7F2" }}
      className="py-16 lg:py-28 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Top divider */}
        <div className="flex items-center justify-center gap-4 mb-10 lg:mb-16">
          <span className="h-px flex-1 max-w-[80px]" style={{ background: "rgba(212,175,55,0.4)" }} />
          <OmSymbol />
          <span className="h-px flex-1 max-w-[80px]" style={{ background: "rgba(212,175,55,0.4)" }} />
        </div>

        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-20">
          <p
            className="mb-3"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "0.7rem",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "#D4AF37",
              fontWeight: 500,
            }}
          >
            About
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 600,
              color: "#0F172A",
              lineHeight: 1.2,
              marginBottom: "1.5rem",
            }}
          >
            Dr. Girish Patil
          </h2>
          <p
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 300,
              fontSize: "1rem",
              lineHeight: 1.9,
              color: "#6B7280",
            }}
          >
            Dr. Girish Patil specializes in Astro Vastu guidance focused on balancing energies,
            improving harmony, and creating spiritually aligned living and working spaces.
            With over two decades of dedicated practice, he bridges ancient Indian wisdom
            with the practical needs of modern life.
          </p>
        </div>

        {/* Institution Leadership */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="h-px flex-1 max-w-[60px]" style={{ background: "rgba(212,175,55,0.3)" }} />
            <p
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "0.65rem",
                letterSpacing: "0.26em",
                textTransform: "uppercase",
                color: "#D4AF37",
                fontWeight: 500,
              }}
            >
              Institution Leadership
            </p>
            <span className="h-px flex-1 max-w-[60px]" style={{ background: "rgba(212,175,55,0.3)" }} />
          </div>

          <div className="grid sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
            {[
              { role: "Director of Institution", name: "Smt. Gauri Patil" },
              { role: "Adviser & Guide", name: "Dr. Girish Patil" },
            ].map(person => (
              <div
                key={person.role}
                className="flex items-start gap-4 p-6 rounded-sm"
                style={{
                  background: "#F5EFE6",
                  border: "1px solid rgba(212,175,55,0.15)",
                  boxShadow: "0 2px 16px rgba(212,175,55,0.06)",
                }}
              >
                <div
                  className="flex-shrink-0 mt-0.5"
                  style={{
                    width: "3px",
                    height: "36px",
                    background: "linear-gradient(to bottom, #D4AF37, rgba(212,175,55,0.2))",
                    borderRadius: "2px",
                  }}
                />
                <div>
                  <p
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: "0.68rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "#D4AF37",
                      fontWeight: 500,
                      marginBottom: "0.3rem",
                    }}
                  >
                    {person.role}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.1rem",
                      fontWeight: 600,
                      color: "#0F172A",
                      lineHeight: 1.2,
                    }}
                  >
                    {person.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map(f => (
            <div
              key={f.title}
              className="group text-center p-10 rounded-sm transition-all duration-400"
              style={{
                background: "#F5EFE6",
                border: "1px solid rgba(212,175,55,0.12)",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(212,175,55,0.45)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 40px rgba(212,175,55,0.1)";
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(212,175,55,0.12)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
              }}
            >
              <div
                className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-6"
                style={{ background: "rgba(212,175,55,0.12)", color: "#D4AF37" }}
              >
                {f.icon}
              </div>
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.2rem",
                  fontWeight: 600,
                  color: "#0F172A",
                  marginBottom: "0.75rem",
                }}
              >
                {f.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 300,
                  fontSize: "0.9rem",
                  lineHeight: 1.8,
                  color: "#6B7280",
                }}
              >
                {f.desc}
              </p>
              {/* Gold bottom line */}
              <div
                className="mx-auto mt-6 h-px transition-all duration-400"
                style={{
                  width: "40px",
                  background: "linear-gradient(to right, transparent, #D4AF37, transparent)",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StarIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function OmSymbol() {
  return (
    <svg width="24" height="24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="50" y="72" textAnchor="middle" fontSize="60" fill="#D4AF37" fontFamily="serif">ॐ</text>
    </svg>
  );
}
