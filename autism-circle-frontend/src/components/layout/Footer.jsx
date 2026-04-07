import { Link } from "react-router-dom";
import Container from "./Container";
import logo from "../../assets/logo.png";

const B = {
  yellow: "#F9C20A",
  orange: "#E85D04",
  black:  "#111111",
};

const MapPinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 13-8 13s-8-7-8-13a8 8 0 0 1 16 0Z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.06 6.06l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z"/>
  </svg>
);

const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

const Footer = () => {
  return (
    <footer
      style={{
        background: "#ffffff",
        borderTop: `3px solid ${B.black}`,
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;700;800;900&display=swap');

        .footer-link {
          font-size: 14px;
          font-weight: 500;
          color: #111;
          text-decoration: none;
          opacity: 0.65;
          display: inline-flex;
          align-items: center;
          gap: 7px;
          transition: opacity .2s, color .2s;
        }
        .footer-link:hover { opacity: 1; color: #E85D04; }
        .footer-link:hover svg { stroke: #E85D04; }

        .footer-credit a {
          color: #E85D04;
          font-weight: 700;
          text-decoration: none;
          transition: opacity .2s;
        }
        .footer-credit a:hover { opacity: .75; }

        .footer-contact-link {
          font-size: 14px;
          font-weight: 400;
          color: #111;
          text-decoration: none;
          opacity: 0.65;
          transition: opacity .2s, color .2s;
        }
        .footer-contact-link:hover { opacity: 1; color: #E85D04; }
      `}</style>

      <Container>

        {/* Main grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 40,
            padding: "56px 0 48px",
          }}
        >

          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <img src={logo} alt="Autism Circle Logo" style={{ height: 40, width: "auto" }} />
              <span
                style={{
                  fontSize: 18, fontWeight: 900,
                  letterSpacing: "-0.5px", color: B.black,
                }}
              >
                Autism Circle
              </span>
            </div>

            <p
              style={{
                fontSize: 14, fontWeight: 400,
                color: B.black, opacity: 0.6,
                lineHeight: 1.75, maxWidth: 240,
              }}
            >
              Compassionate, evidence-based autism therapy helping children
              build communication, independence, and confidence.
            </p>

            <div style={{ width: 40, height: 3, borderRadius: 2, background: B.orange, marginTop: 20 }} />
          </div>

          {/* Quick Links */}
          <div>
            <h3
              style={{
                fontSize: 13, fontWeight: 700,
                letterSpacing: ".08em", textTransform: "uppercase",
                color: B.black, marginBottom: 20,
              }}
            >
              Quick Links
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { label: "Home",     to: "/" },
                { label: "About Us", to: "/about-us" },
                { label: "Services", to: "/services" },
                { label: "FAQ",      to: "/faq" },
                { label: "Contact",  to: "/contact-us" },
              ].map(({ label, to }) => (
                <li key={to}>
                  <Link to={to} className="footer-link">
                    <ArrowRightIcon />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              style={{
                fontSize: 13, fontWeight: 700,
                letterSpacing: ".08em", textTransform: "uppercase",
                color: B.black, marginBottom: 20,
              }}
            >
              Contact
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { icon: <MapPinIcon />, text: "Edgewood, MD 21040", href: null },
                { icon: <PhoneIcon />, text: "+1 (240) 274-8822", href: "tel:+12402748822" },
                { icon: <MailIcon />, text: "autismcircleinmd@gmail.com", href: "mailto:autismcircleinmd@gmail.com" },
              ].map(({ icon, text, href }) => (
                <li
                  key={text}
                  style={{
                    display: "flex", alignItems: "center", gap: 10,
                    fontSize: 14, fontWeight: 400,
                    color: B.black, opacity: 0.65,
                  }}
                >
                  <span
                    style={{
                      width: 32, height: 32, borderRadius: 8,
                      background: B.yellow, border: `2px solid ${B.black}`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0, color: B.black,
                    }}
                  >
                    {icon}
                  </span>
                  {href ? (
                    <a href={href} className="footer-contact-link">{text}</a>
                  ) : (
                    text
                  )}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: `2px solid ${B.black}`,
            padding: "18px 0",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 8,
          }}
        >
          <span style={{ fontSize: 13, fontWeight: 400, color: B.black, opacity: 0.5 }}>
            © {new Date().getFullYear()} Autism Circle. All rights reserved.
          </span>

          <span className="footer-credit" style={{ fontSize: 13, fontWeight: 400, color: B.black, opacity: 0.6 }}>
            Designed & Developed by{" "}
            <a href="https://www.webieapp.com/" target="_blank" rel="noopener noreferrer">
              WebieApp Solutions
            </a>
          </span>
        </div>

      </Container>
    </footer>
  );
};

export default Footer;