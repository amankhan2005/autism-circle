import Container from "../layout/Container";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const CTA = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: isDark ? "#000000" : "#f8fafc" }}
    >
      <Container>
        
        {/* CTA CARD */}
        <div
          className="relative rounded-[3rem] py-20 px-8 md:px-16 lg:px-24 text-center shadow-2xl overflow-hidden"
          style={{
            background: isDark
              ? "#000000"
              : "linear-gradient(to bottom right, #3EB8A7, #2F9E8F)",
            border: isDark ? "1px solid rgba(255,255,255,0.3)" : "none",
          }}
        >
          
          {/* Decorative */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute top-[-20%] left-[-10%] w-96 h-96 bg-white/10 rounded-full blur-[100px]"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-4xl mx-auto">
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Take the First Step Toward <br />
              <span className="text-[#F97316]">Better Mental Health</span>
            </h2>

            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              You don't have to face your challenges alone. Connect with our compassionate team today and start your journey to a healthier, happier life.
            </p>

            <Link
              to="/contact-us"
              className="inline-flex items-center bg-white text-[#2F9E8F] px-10 py-5 rounded-full font-bold text-lg shadow-xl 
              hover:bg-orange-50 hover:scale-105 transition-all duration-300"
            >
              Book an Appointment
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>

          </div>
        </div>

      </Container>
    </section>
  );
};

export default CTA;