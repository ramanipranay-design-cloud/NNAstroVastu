export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-16 lg:py-28 px-6 relative overflow-hidden"
      style={{ background: "#0F172A" }}
    >
      {/* Subtle mandala ring bg */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ opacity: 0.05 }}>
        <MandalaBg />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-4 mb-10">
          <span className="h-px w-12" style={{ background: "rgba(212,175,55,0.5)" }} />
          <span style={{ color: "#D4AF37", fontSize: "1.2rem" }}>✦</span>
          <span className="h-px w-12" style={{ background: "rgba(212,175,55,0.5)" }} />
        </div>

        <p
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "0.7rem",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "#D4AF37",
            fontWeight: 500,
            marginBottom: "1.25rem",
          }}
        >
          Begin Your Journey
        </p>

        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.8rem, 4vw, 3.2rem)",
            fontWeight: 600,
            color: "#FAF7F2",
            lineHeight: 1.2,
            marginBottom: "1.5rem",
          }}
        >
          Start Your Journey Towards
          <span style={{ color: "#D4AF37", display: "block" }}>Positivity & Balance</span>
        </h2>

        <p
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 300,
            fontSize: "1rem",
            lineHeight: 1.8,
            color: "rgba(250,247,242,0.65)",
            maxWidth: "520px",
            margin: "0 auto 3rem",
          }}
        >
          Take the first step toward a more harmonious, prosperous, and spiritually aligned life.
          Dr. Girish Patil is ready to guide you.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://wa.me/917710819122"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-sm transition-all duration-300"
            style={{
              background: "rgba(37, 211, 102, 0.12)",
              border: "1px solid rgba(37, 211, 102, 0.4)",
              color: "#FAF7F2",
              fontFamily: "'Poppins', sans-serif",
              fontSize: "0.875rem",
              fontWeight: 500,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.background = "rgba(37,211,102,0.2)";
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(37,211,102,0.7)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.background = "rgba(37,211,102,0.12)";
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(37,211,102,0.4)";
            }}
          >
            <WhatsAppIcon />
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function MandalaBg() {
  const rings = [180, 150, 120, 90, 60, 30];
  return (
    <svg width="600" height="600" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
      {rings.map((r, i) => (
        <circle key={i} cx="300" cy="300" r={r} fill="none" stroke="#D4AF37" strokeWidth="0.8" />
      ))}
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        return (
          <line
            key={i}
            x1={300 + Math.cos(rad) * 30}
            y1={300 + Math.sin(rad) * 30}
            x2={300 + Math.cos(rad) * 180}
            y2={300 + Math.sin(rad) * 180}
            stroke="#D4AF37"
            strokeWidth="0.5"
          />
        );
      })}
    </svg>
  );
}
