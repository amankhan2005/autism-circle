 import Container from "../layout/Container";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const AboutPreview = () => {
  const { theme } = useContext(ThemeContext);

  const isDark = theme === "dark";

  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: isDark ? "#000000" : "#f8fafc" }}
    >
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-teal-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-orange-500/10 rounded-full blur-[120px]"></div>
      </div>

      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">

          {/* IMAGE */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-[#3EB8A7] to-[#2F9E8F] rounded-3xl rotate-3 opacity-20 blur-sm"></div>

            <div className="relative">
              <img
                src="/images/about.jpg"
                alt="About Vital Trust"
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover relative z-10"
              />
            </div>
          </div>

          {/* CONTENT */}
          <div className="lg:pl-8">
            
            <div className="inline-block mb-4">
              <span className="bg-teal-100 text-[#2F9E8F] text-sm font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                Who We Are
              </span>
            </div>

            {/* HEADING */}
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 tracking-tight"
              style={{ color: isDark ? "#ffffff" : "#1e293b" }}
            >
              We Provide <br />
              <span className="text-[#3EB8A7]">Premium</span> Mental <br />
              <span className="text-[#F97316]">Health Care</span>
            </h2>

            {/* PARA */}
            <p
              className="text-lg mb-6 leading-relaxed"
              style={{ color: isDark ? "#ffffffcc" : "#475569" }}
            >
              At <strong>Vital Trust Health LLC</strong>, we are committed to providing compassionate, confidential, and professional mental health care tailored to your needs.
            </p>

            <p
              className="mb-10 leading-relaxed border-l-4 border-[#F97316] pl-4 italic"
              style={{ color: isDark ? "#ffffffaa" : "#64748b" }}
            >
              "Our experienced team supports individuals, couples, and families through personalized therapy approaches designed to improve emotional well-being."
            </p>

            {/* CARDS (UNCHANGED UI + ICONS) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
              
              {[ 
                { title: "Confidential", desc: "Safe & Secure" },
                { title: "Expert Care", desc: "Certified Team" },
                { title: "Online Session", desc: "Remote Support" },
                { title: "Support Group", desc: "Community Care" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 rounded-xl shadow-sm hover:shadow-lg hover:border-teal-200 transition-all duration-300 group"
                  style={{
                    background: isDark ? "#111111" : "#ffffff",
                    border: "1px solid",
                    borderColor: isDark ? "#222" : "#f1f5f9",
                  }}
                >
                  
                  {/* ICON (SAME SVG) */}
                  <div className="bg-teal-50 p-3 rounded-lg text-[#3EB8A7] group-hover:bg-[#3EB8A7] group-hover:text-white transition-all">
                    {i === 0 && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    )}
                    {i === 1 && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    )}
                    {i === 2 && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    )}
                    {i === 3 && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    )}
                  </div>

                  {/* TEXT */}
                  <div>
                    <h3
                      className="font-bold"
                      style={{ color: isDark ? "#ffffff" : "#1e293b" }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-sm"
                      style={{ color: isDark ? "#aaaaaa" : "#64748b" }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}

            </div>

            {/* BUTTON */}
            <Link
              to="/about-us"
              className="inline-flex items-center bg-[#F97316] text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-orange-200 
              hover:bg-[#EA580C] hover:scale-105 transition-all duration-300"
            >
              Discover More →
            </Link>

          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutPreview;