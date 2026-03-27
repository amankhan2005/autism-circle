 import { Link } from "react-router-dom";
import Container from "./Container";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

// --- Static Data (Moved outside to prevent re-renders) ---

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about-us" },
  { name: "FAQs", path: "/faq" },
  { name: "Contact", path: "/contact-us" },
];

const services = [
  { name: "Individual Therapy", path: "/services/individual-therapy" },
  { name: "Couples Therapy", path: "/services/couples-therapy" },
  { name: "Anxiety & Depression", path: "/services/anxiety-depression" },
  { name: "Stress Management", path: "/services/stress-management" },
  { name: "Trauma Therapy", path: "/services/trauma-therapy" },
  { name: "Online Counseling", path: "/services/online-counseling" },
];

// --- Helper Components ---

// Reusable Title component to reduce code duplication
const SectionTitle = ({ children }) => (
  <h3 className="text-lg font-semibold mb-5 text-white relative inline-block">
    {children}
    <span className="absolute left-0 -bottom-2 w-8 h-[3px] bg-[#F97316]"></span>
  </h3>
);

const SvgMapPin = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const SvgPhone = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const SvgMail = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

// --- Main Component ---

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <footer
      className={`relative overflow-hidden text-white transition-colors duration-300 ${
        isDark 
          ? "bg-black border-t border-white/20" 
          : "bg-[#155E54] border-t border-white/10"
      }`}
    >
      {/* Decorative Glow Effects */}
      <div className="absolute top-[-20%] left-[-10%] w-80 h-80 bg-[#F97316]/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-96 h-96 bg-teal-300/10 blur-[120px] rounded-full pointer-events-none"></div>

      <Container>
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 relative z-10">

          {/* Company Info */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-2 mb-5 group">
              <img 
                src="/images/logo.png" 
                className="h-14 w-14 object-contain" 
                alt="Vital Trust Health Logo" 
              />
              <div>
                <h2 className="text-white font-bold text-lg group-hover:text-orange-400 transition-colors">
                  Vital Trust
                </h2>
                <p className="text-white/70 text-xs tracking-wider uppercase">
                  Health LLC
                </p>
              </div>
            </Link>

            <p className="text-sm text-white/70 leading-relaxed mb-6">
              Compassionate mental health care you can trust. Supporting your journey to better well-being with care, professionalism, and personalized treatment plans.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <SectionTitle>Quick Links</SectionTitle>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    className="text-sm text-white/70 hover:text-orange-400 hover:pl-1 transition-all duration-200 inline-block" 
                    to={link.path}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <SectionTitle>Services</SectionTitle>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.path}>
                  <Link 
                    className="text-sm text-white/70 hover:text-orange-400 hover:pl-1 transition-all duration-200 inline-block" 
                    to={service.path}
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <SectionTitle>Contact Info</SectionTitle>

            <div className="space-y-4">
              {/* Address */}
              {/* <div className="flex gap-3 items-start group">
                <SvgMapPin />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=1205+Lobo+Court+Abingdon+MD+21009"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  1205 Lobo Court, <br /> Abingdon MD 21009
                </a>
              </div> */}

              {/* Phone */}
              <div className="flex gap-3 items-center group">
                <SvgPhone />
                <a 
                  href="tel:+14106527070" 
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  (410) 652-7070
                </a>
              </div>

              {/* Email */}
              <div className="flex gap-3 items-center group">
                <SvgMail />
                <a 
                  href="mailto:vitaltrusth@gmail.com" 
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  vitaltrusth@gmail.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className={`py-6 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-white/50 border-t ${
          isDark ? "border-white/10" : "border-white/10"
        }`}>
          <p className="text-center md:text-left">
            © {currentYear} Vital Trust Health LLC. All rights reserved.
          </p>

          <p className="text-center md:text-right">
            Designed & Developed by{" "}
            <a
              href="https://www.webieapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 font-medium hover:text-orange-300 transition-colors hover:underline"
            >
              WebieApp
            </a>
          </p>
        </div>

      </Container>
    </footer>
  );
};

export default Footer;