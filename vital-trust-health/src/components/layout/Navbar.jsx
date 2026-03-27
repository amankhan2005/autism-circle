 import { useState, useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";

const servicesList = [
  { name: "Individual Therapy", path: "/services/individual-therapy" },
  { name: "Couples Therapy", path: "/services/couples-therapy" },
  { name: "Anxiety & Depression", path: "/services/anxiety-depression" },
  { name: "Stress Management", path: "/services/stress-management" },
  { name: "Trauma Therapy", path: "/services/trauma-therapy" },
  { name: "Online Counseling", path: "/services/online-counseling" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
        setServicesOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const linkClasses = ({ isActive }) =>
    `relative transition-colors duration-200 ${
      isActive
        ? "text-teal-600 font-semibold"
        : "text-[var(--text)] hover:text-teal-600"
    }`;

  return (
    <nav className="w-full bg-[var(--bg)] text-[var(--text)] shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          
          {/* LOGO */}
          <NavLink to="/" className="flex items-center gap-3 group">
            <img 
              src="/images/logo.png" 
              alt="Vital Trust Logo" 
              className="h-10 md:h-12 object-contain transition-transform duration-300 group-hover:scale-105" 
            />
            <div>
              <h1 className="font-bold text-teal-600 text-base md:text-lg">
                Vital Trust
              </h1>
              <p className="text-[10px] md:text-xs text-gray-400 uppercase tracking-wider">
                Health LLC
              </p>
            </div>
          </NavLink>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-8 font-medium">
            <li><NavLink to="/" className={linkClasses}>Home</NavLink></li>
            <li><NavLink to="/about-us" className={linkClasses}>About</NavLink></li>

            {/* SERVICES DROPDOWN - Auto Close on Mouse Leave */}
            <li className="relative group">
              <NavLink 
                to="/services" 
                className={({ isActive }) => `${linkClasses({ isActive })} flex items-center gap-1`}
              >
                Services
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </NavLink>

              {/*
                DROPDOWN CONTAINER
                - 'pt-2' acts as an invisible bridge so the cursor can move from the button to the dropdown without triggering a "mouseleave".
                - 'invisible' ensures it closes immediately when the mouse leaves the group area.
              */}
              <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <ul className="bg-[var(--card)] shadow-xl rounded-xl py-3 px-2 w-56 border border-white/10 space-y-1">
                  {servicesList.map((item) => (
                    <li key={item.path}>
                      <NavLink
                        to={item.path}
                        className={({ isActive}) => 
                          `block px-4 py-2 rounded-lg transition ${
                            isActive 
                              ? "bg-teal-500/10 text-teal-600 font-medium" 
                              : "text-[var(--text)] hover:bg-teal-500/10 hover:text-teal-500"
                          }`
                        }
                      >
                        {item.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            <li><NavLink to="/faq" className={linkClasses}>FAQ</NavLink></li>
          </ul>

          {/* RIGHT SIDE ACTIONS */}
          <div className="flex items-center gap-4">
            
            {/* THEME TOGGLE */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>

            <NavLink
              to="/contact-us"
              className="hidden md:block bg-teal-600 hover:bg-teal-700 text-white px-6 py-2.5 rounded-full font-medium transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Book Appointment
            </NavLink>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-md text-[var(--text)] hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <div 
        className={`md:hidden fixed inset-0 bg-black/20 transition-opacity duration-300 ${
          menuOpen ? "opacity-100 z-40" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* MOBILE MENU DRAWER */}
      <div
        className={`md:hidden fixed top-20 left-0 w-full bg-[var(--bg)] z-40 shadow-xl transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-[calc(100vh-80px)] overflow-y-auto" : "max-h-0 overflow-hidden"
        }`}
      >
        <div className="px-6 py-6 space-y-4">
          
          <NavLink to="/" onClick={() => setMenuOpen(false)} className={({ isActive }) => `${linkClasses({ isActive })} block text-lg`}>
            Home
          </NavLink>

          <NavLink to="/about-us" onClick={() => setMenuOpen(false)} className={({ isActive }) => `${linkClasses({ isActive })} block text-lg`}>
            About
          </NavLink>

          {/* MOBILE SERVICES ACCORDION */}
          <div>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex justify-between items-center w-full text-lg font-medium text-[var(--text)]"
            >
              Services
              <svg className={`w-5 h-5 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div className={`overflow-hidden transition-all duration-300 ${servicesOpen ? "max-h-96 mt-2" : "max-h-0"}`}>
              <div className="pl-4 border-l-2 border-teal-600/20 space-y-3 py-2">
                {servicesList.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() => {
                      setServicesOpen(false);
                      setMenuOpen(false);
                    }}
                    className={({ isActive }) => 
                      `block text-base ${isActive ? "text-teal-600 font-semibold" : "text-gray-600 dark:text-gray-300 hover:text-teal-500"}`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>

          <NavLink to="/faq" onClick={() => setMenuOpen(false)} className={({ isActive }) => `${linkClasses({ isActive })} block text-lg`}>
            FAQ
          </NavLink>

          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
            <NavLink
              to="/contact-us"
              onClick={() => setMenuOpen(false)}
              className="block w-full text-center bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-full font-semibold shadow-md"
            >
              Book Appointment
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;