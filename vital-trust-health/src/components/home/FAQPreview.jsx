 import Container from "../layout/Container";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const FAQPreview = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: isDark ? "#000000" : "#f8fafc" }}
    >
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-orange-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-teal-500/10 rounded-full blur-[120px]"></div>
      </div>

      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
          
          {/* LEFT */}
          <div className="lg:pr-8">
            <div className="inline-block mb-4">
              <span className="bg-orange-100 text-[#F97316] text-sm font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                Support Center
              </span>
            </div>

            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6"
              style={{ color: isDark ? "#ffffff" : "#1e293b" }}
            >
              Got Questions? <br />
              <span className="text-[#3EB8A7]">We've Got Answers</span>
            </h2>

            <p
              className="text-lg mb-10 leading-relaxed"
              style={{ color: isDark ? "#ffffffaa" : "#64748b" }}
            >
              Can't find what you're looking for? Feel free to reach out to our support team for personalized assistance.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4">
              <Link
                to="/faq"
                className="inline-flex items-center bg-[#F97316] text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-orange-200 
                hover:bg-[#EA580C] hover:scale-105 transition-all duration-300"
              >
                Browse All FAQs
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>

              <Link
                to="/contact-us"
                className="inline-flex items-center px-8 py-4 rounded-full font-bold text-lg border-2 transition-all duration-300"
                style={{
                  background: isDark ? "#111111" : "#ffffff",
                  color: isDark ? "#ffffff" : "#334155",
                  borderColor: isDark ? "#333" : "#e2e8f0",
                }}
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* RIGHT CARDS */}
          <div className="space-y-5">
            
            {[ 
              {
                q: "What services do you offer?",
                a: "Individual, couples, and family therapy."
              },
              {
                q: "Do you provide online sessions?",
                a: "Yes, we offer secure telehealth options."
              },
              {
                q: "Is my information confidential?",
                a: "Complete privacy is our top priority."
              }
            ].map((item, i) => (
              <Link
                key={i}
                to="/faq"
                className="group block p-6 rounded-2xl transition-all duration-300"
                style={{
                  background: isDark ? "#111111" : "#f8fafc",
                  border: "1px solid",
                  borderColor: isDark ? "#222" : "#f1f5f9",
                }}
              >
                <div className="flex items-center gap-5">
                  
                  {/* ICON */}
                  <div className="flex-shrink-0 w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center text-[#3EB8A7] group-hover:bg-[#3EB8A7] group-hover:text-white transition-all duration-300">
                    
                    {i === 0 && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}

                    {i === 1 && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    )}

                    {i === 2 && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    )}

                  </div>

                  {/* TEXT */}
                  <div className="flex-1">
                    <h3
                      className="text-lg font-bold mb-1"
                      style={{ color: isDark ? "#ffffff" : "#1e293b" }}
                    >
                      {item.q}
                    </h3>
                    <p
                      className="text-sm"
                      style={{ color: isDark ? "#aaaaaa" : "#64748b" }}
                    >
                      {item.a}
                    </p>
                  </div>

                  {/* ARROW */}
                  <div
                    className="transition-colors"
                    style={{ color: isDark ? "#666" : "#cbd5f5" }}
                  >
                    →
                  </div>

                </div>
              </Link>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
};

export default FAQPreview;