import { useState, useEffect } from "react";
import logoImg from "../../imports/WhatsApp_Image_2026-06-16_at_2.29.53_PM__1_.jpeg";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(15,23,42,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(212,175,55,0.12)" : "none",
        padding: scrolled ? "0.75rem 0" : "1.25rem 0",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-4" style={{ textDecoration: "none" }}>
          <img
            src={logoImg}
            alt="Norma Neptune Astro Vastu logo"
            style={{ height: "56px", width: "auto" }}
          />
          <div className="flex flex-col gap-1">
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1rem",
                fontWeight: 600,
                color: "#FAF7F2",
                lineHeight: 1,
              }}
            >
              Norma Neptune
            </div>
            <div
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "0.55rem",
                color: "#D4AF37",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                lineHeight: 1,
              }}
            >
              Astro Vastu
            </div>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a
              key={l.label}
              href={l.href}
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "0.8rem",
                fontWeight: 400,
                color: "rgba(250,247,242,0.75)",
                letterSpacing: "0.08em",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "#D4AF37")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(250,247,242,0.75)")}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "0.75rem",
              fontWeight: 600,
              color: "#0F172A",
              background: "#D4AF37",
              padding: "0.5rem 1.25rem",
              borderRadius: "2px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
          >
            Contact Us
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          {[0, 1, 2].map(i => (
            <span
              key={i}
              style={{
                display: "block",
                width: "22px",
                height: "1.5px",
                background: "#FAF7F2",
                transition: "all 0.3s",
                transformOrigin: "center",
                transform:
                  menuOpen
                    ? i === 0
                      ? "translateY(6px) rotate(45deg)"
                      : i === 2
                      ? "translateY(-6px) rotate(-45deg)"
                      : "scaleX(0)"
                    : "none",
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden"
          style={{
            background: "rgba(15,23,42,0.97)",
            borderTop: "1px solid rgba(212,175,55,0.15)",
            padding: "1.5rem 1.5rem",
          }}
        >
          {links.map(l => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                fontFamily: "'Poppins', sans-serif",
                fontSize: "0.9rem",
                color: "rgba(250,247,242,0.8)",
                padding: "0.75rem 0",
                borderBottom: "1px solid rgba(212,175,55,0.08)",
                textDecoration: "none",
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            style={{
              display: "inline-block",
              marginTop: "1rem",
              fontFamily: "'Poppins', sans-serif",
              fontSize: "0.8rem",
              fontWeight: 600,
              color: "#0F172A",
              background: "#D4AF37",
              padding: "0.6rem 1.5rem",
              borderRadius: "2px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              textDecoration: "none",
            }}
          >
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
}
