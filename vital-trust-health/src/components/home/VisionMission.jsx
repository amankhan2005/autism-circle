import Container from "../layout/Container";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const VisionMission = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: isDark ? "#000000" : "#f8fafc" }}
    >
      
      {/* Decorative Background Blurs */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-teal-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-orange-500/10 rounded-full blur-[120px]"></div>
      </div>

      <Container>
        
        {/* Heading */}
        <div className="text-center mb-16 relative z-10">
          
          <div className="inline-block mb-4">
            <span className="bg-teal-100 text-[#2F9E8F] text-sm font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
              Our Purpose
            </span>
          </div>

          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6"
            style={{ color: isDark ? "#ffffff" : "#1e293b" }}
          >
            Our Vision & 
            <span className="text-[#F97316]"> Mission</span>
          </h2>

          <p
            className="text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: isDark ? "#ffffffaa" : "#64748b" }}
          >
            We are dedicated to transforming lives by making mental health care accessible, supportive, and empowering for everyone.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 relative z-10">

          {/* Vision */}
          <div
            className="group p-10 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden"
            style={{
              background: isDark ? "#111111" : "#ffffff",
              border: "1px solid",
              borderColor: isDark ? "#222" : "#f1f5f9",
            }}
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#3EB8A7] to-[#2F9E8F]"></div>

            <div className="mb-6 inline-flex p-4 bg-teal-50 rounded-2xl text-[#3EB8A7] group-hover:bg-[#3EB8A7] group-hover:text-white transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>

            <h3
              className="text-2xl md:text-3xl font-bold mb-4"
              style={{ color: isDark ? "#ffffff" : "#1e293b" }}
            >
              Our Vision
            </h3>

            <p
              className="leading-relaxed text-lg"
              style={{ color: isDark ? "#aaaaaa" : "#64748b" }}
            >
              To create a world where mental health is prioritized, stigma is eliminated, and every individual has access to the support they need to live a balanced and fulfilling life.
            </p>
          </div>

          {/* Mission */}
          <div
            className="group p-10 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden"
            style={{
              background: isDark ? "#111111" : "#ffffff",
              border: "1px solid",
              borderColor: isDark ? "#222" : "#f1f5f9",
            }}
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#F97316] to-[#EA580C]"></div>

            <div className="mb-6 inline-flex p-4 bg-orange-50 rounded-2xl text-[#F97316] group-hover:bg-[#F97316] group-hover:text-white transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>

            <h3
              className="text-2xl md:text-3xl font-bold mb-4"
              style={{ color: isDark ? "#ffffff" : "#1e293b" }}
            >
              Our Mission
            </h3>

            <p
              className="leading-relaxed text-lg"
              style={{ color: isDark ? "#aaaaaa" : "#64748b" }}
            >
              To provide compassionate, confidential, and evidence-based mental health services that empower individuals to heal, grow, and achieve emotional well-being.
            </p>
          </div>

        </div>

      </Container>
    </section>
  );
};

export default VisionMission;