import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";

const B = {
  yellow: "#F9C20A",
  orange: "#E85D04",
  black: "#111111",
};

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about-us" },
  { name: "Services", path: "/services" },
  { name: "FAQ", path: "/faq" },
];

const PhoneIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.06 6.06l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
  </svg>
);

const HamburgerIcon = ({ open }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    {open ? (
      <>
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </>
    ) : (
      <>
        <line x1="4" y1="7" x2="20" y2="7" />
        <line x1="4" y1="17" x2="20" y2="17" />
      </>
    )}
  </svg>
);

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location.pathname]);

  return (
    <header
      style={{
        position: "sticky", top: 0, zIndex: 50,
        background: "#ffffff",
        borderBottom: `2px solid ${B.black}`,
        boxShadow: scrolled ? `4px 4px 0px ${B.black}` : "none",
        transition: "box-shadow .2s",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;700;800;900&display=swap');

        .nav-link {
          position: relative;
          font-size: 14px;
          font-weight: 700;
          text-decoration: none;
          color: #111;
          opacity: 0.6;
          transition: opacity .2s;
          padding-bottom: 2px;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          left: 0; bottom: -2px;
          height: 2px; width: 0;
          background: #E85D04;
          border-radius: 2px;
          transition: width .25s ease;
        }
        .nav-link:hover { opacity: 1; }
        .nav-link:hover::after { width: 100%; }
        .nav-link.active { opacity: 1; color: #E85D04; }
        .nav-link.active::after { width: 100%; }

        .btn-call {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 8px 18px; border-radius: 99px;
          font-size: 13px; font-weight: 700;
          background: #fff;
          border: 2px solid #111;
          color: #111;
          text-decoration: none;
          transition: background .2s, transform .15s;
        }
        .btn-call:hover { background: #F9C20A; transform: translateY(-1px); }

        .btn-contact {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 8px 20px; border-radius: 99px;
          font-size: 13px; font-weight: 700;
          background: #111; color: #F9C20A;
          text-decoration: none;
          border: 2px solid #111;
          transition: background .2s, color .2s, transform .15s;
        }
        .btn-contact:hover { background: #E85D04; border-color: #E85D04; transform: translateY(-1px); }

        .mobile-link {
          font-size: 15px; font-weight: 700;
          color: #111; text-decoration: none;
          padding: 10px 0;
          border-bottom: 1px solid rgba(17,17,17,.08);
          opacity: 0.65;
          transition: opacity .2s, color .2s;
        }
        .mobile-link:hover, .mobile-link.active { opacity: 1; color: #E85D04; }

        .hamburger-btn {
          width: 40px; height: 40px; border-radius: 10px;
          border: 2px solid #111;
          background: #fff;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          transition: background .2s;
        }
        .hamburger-btn:hover { background: #F9C20A; }
      `}</style>

      {/* Desktop bar */}
      <div
        style={{
          maxWidth: 1280, margin: "0 auto",
          padding: "0 24px",
          display: "flex", alignItems: "center",
          justifyContent: "space-between",
          height: 72,
        }}
      >

        {/* Logo */}
        <Link to="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <img src={logo} alt="Autism Circle" style={{ height: 44, width: "auto" }} />
          <span style={{ fontSize: 18, fontWeight: 900, letterSpacing: "-0.5px", color: B.black }}>
            Autism Circle
          </span>
        </Link>

        {/* Nav links — desktop */}
        <nav style={{ display: "flex", alignItems: "center", gap: 32 }} className="hidden-mobile">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`nav-link${location.pathname === link.path ? " active" : ""}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTAs — desktop */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }} className="hidden-mobile">
          <a href="tel:+12402748822" className="btn-call">
            <PhoneIcon /> Call Now
          </a>
          <Link to="/contact-us" className="btn-contact">
            Get in Touch →
          </Link>
        </div>

        {/* Hamburger — mobile */}
        <button
          className="hamburger-btn show-mobile"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ background: mobileOpen ? B.yellow : "#fff" }}
        >
          <HamburgerIcon open={mobileOpen} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        style={{
          overflow: "hidden",
          maxHeight: mobileOpen ? 480 : 0,
          transition: "max-height .3s ease",
          borderTop: mobileOpen ? `2px solid ${B.black}` : "none",
          background: "#fff",
        }}
        className="show-mobile"
      >
        <div style={{ padding: "8px 24px 24px", display: "flex", flexDirection: "column" }}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`mobile-link${location.pathname === link.path ? " active" : ""}`}
            >
              {link.name}
            </Link>
          ))}

          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 16 }}>
            <a href="tel:+12402748822" className="btn-call" style={{ justifyContent: "center" }}>
              <PhoneIcon /> Call Now
            </a>
            <Link to="/contact-us" className="btn-contact" style={{ justifyContent: "center" }}>
              Get in Touch →
            </Link>
          </div>
        </div>
      </div>

      {/* Responsive helpers */}
      <style>{`
        @media (max-width: 767px) {
          .hidden-mobile { display: none !important; }
        }
        @media (min-width: 768px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </header>
  );
};

export default Navbar;