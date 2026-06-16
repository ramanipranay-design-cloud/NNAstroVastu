import logoImg from "../../imports/WhatsApp_Image_2026-06-16_at_2.29.53_PM__1_.jpeg";

export function FooterSection() {
  return (
    <footer style={{ background: "#0F172A" }}>
      {/* Gold divider */}
      <div style={{ height: "1px", background: "linear-gradient(to right, transparent, #D4AF37, transparent)" }} />

      <div className="max-w-6xl mx-auto px-6 py-12 lg:py-16">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-10 lg:mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <OmGlyph />
              <div className="flex flex-col gap-1">
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    color: "#FAF7F2",
                    letterSpacing: "0.04em",
                    lineHeight: 1,
                  }}
                >
                  Norma Neptune
                </div>
                <div
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "0.65rem",
                    color: "#D4AF37",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    lineHeight: 1,
                  }}
                >
                  Astro Vastu
                </div>
              </div>
            </div>
            <p
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 300,
                fontSize: "0.83rem",
                lineHeight: 1.8,
                color: "rgba(250,247,242,0.45)",
                maxWidth: "260px",
              }}
            >
              Bridging ancient Vedic wisdom with the clarity and harmony of modern living.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "0.65rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#D4AF37",
                fontWeight: 500,
                marginBottom: "1.25rem",
              }}
            >
              Contact
            </h4>
            <ul className="space-y-3">
              {[
                { icon: <LocationIcon />, text: " Shop No. 06, Sharda Palace CHS, Sector-10,\n New Panvel (East), Navi Mumbai - 410206" },
                { icon: <PhoneIcon />, text: "+91 77108 19122" },
                { icon: <MailIcon />, text: "g181072g@gmail.com" },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span style={{ color: "#D4AF37", marginTop: "2px", flexShrink: 0 }}>{item.icon}</span>
                  <span
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 300,
                      fontSize: "0.83rem",
                      lineHeight: 1.7,
                      color: "rgba(250,247,242,0.55)",
                      whiteSpace: "pre-line",
                    }}
                  >
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "0.65rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#D4AF37",
                fontWeight: 500,
                marginBottom: "1.25rem",
              }}
            >
              Business Hours
            </h4>
            <ul className="space-y-2">
              {[
                { day: "Monday – Friday", hours: "9:00 AM – 7:00 PM" },
                { day: "Saturday", hours: "10:00 AM – 5:00 PM" },
                { day: "Sunday", hours: "By Appointment Only" },
              ].map(row => (
                <li
                  key={row.day}
                  className="flex justify-between gap-4"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 300,
                    fontSize: "0.83rem",
                    color: "rgba(250,247,242,0.55)",
                  }}
                >
                  <span>{row.day}</span>
                  <span style={{ color: "rgba(212,175,55,0.75)" }}>{row.hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Gold divider */}
        <div style={{ height: "1px", background: "rgba(212,175,55,0.18)", marginBottom: "1.5rem" }} />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "0.75rem",
              color: "rgba(250,247,242,0.3)",
            }}
          >
            © 2024 Norma Neptune Astro Vastu. All rights reserved.
          </p>
          <p
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "0.75rem",
              color: "rgba(250,247,242,0.3)",
            }}
          >
            Dr. Girish Patil — Certified Astro Vastu Consultant
          </p>
        </div>
      </div>
    </footer>
  );
}

function LocationIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.2h3a2 2 0 0 1 2 1.72c.13 1 .37 1.97.72 2.91a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l.96-.96a2 2 0 0 1 2.11-.45c.94.35 1.91.59 2.91.72A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function OmGlyph() {
  return (
    <img
      src={logoImg}
      alt="Norma Neptune Astro Vastu logo"
      style={{ height: "60px", width: "auto", flexShrink: 0 }}
    />
  );
}
