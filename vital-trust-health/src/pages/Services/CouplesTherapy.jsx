 import Container from "../../components/layout/Container";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

// --- 1. ICON COMPONENTS (Defined First) ---

const IconCheck = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

const IconChat = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

const IconTrust = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const IconHeartBroken = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const IconUsers = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const IconHome = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const IconSparkles = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
);

const IconLink = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
  </svg>
);

const IconLightBulb = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

// --- 2. DATA ARRAYS ---

const issues = [
  { icon: <IconChat />, title: "Communication Issues" },
  { icon: <IconTrust />, title: "Trust & Infidelity" },
  { icon: <IconHeartBroken />, title: "Frequent Conflicts" },
  { icon: <IconUsers />, title: "Emotional Distance" },
  { icon: <IconHome />, title: "Pre-marital Counseling" },
  { icon: <IconSparkles />, title: "Relationship Growth" },
];

const benefits = [
  {
    icon: <IconLightBulb />,
    title: "Better Communication",
    desc: "Learn how to express thoughts and feelings clearly without blame or judgment.",
  },
  {
    icon: <IconTrust />,
    title: "Rebuild Trust",
    desc: "Navigate the difficult path of healing after breaches of trust or infidelity.",
  },
  {
    icon: <IconLink />,
    title: "Deeper Connection",
    desc: "Rediscover intimacy and create a shared vision for your future together.",
  },
];

const faqs = [
  {
    q: "Do both partners need to attend every session?",
    a: "Ideally, yes. While individual sessions might be recommended occasionally, the core work happens when both partners are present to practice new skills.",
  },
  {
    q: "How long does couples therapy usually take?",
    a: "It varies based on your goals. Some couples see progress in 6-12 sessions, while others prefer longer-term support for deeper issues.",
  },
  {
    q: "Is everything we share kept confidential?",
    a: "Yes. Confidentiality is paramount. We do not take sides or share your details with others.",
  },
   {
  q: "Do you offer support with medication?",
  a: "Yes. Our Mental Health Nurse Practitioner provides expert guidance and management to ensure your medications are safe and effective."
},
];

// --- 3. MAIN COMPONENT ---

const CouplesTherapy = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <section className={`min-h-screen relative overflow-hidden ${isDark ? "bg-black" : "bg-slate-50"}`}>

      {/* HERO SECTION */}
      <div
        className="text-white pt-20 pb-32 relative"
        style={{
          background: isDark
            ? "#000000"
            : "linear-gradient(to bottom right, #2F9E8F, #3EB8A7, #155E54)",
        }}
      >
        {/* Decorative Blobs (ONLY LIGHT) */}
        {!isDark && (
          <>
            <div className="absolute top-0 right-0 w-96 h-96 bg-teal-400/10 blur-[100px] rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-500/10 blur-[100px] rounded-full"></div>
          </>
        )}

        <Container className="relative z-10 text-center">
          <span 
            className="inline-block bg-white/10 border border-white/20 text-teal-200 text-sm font-medium px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider"
            data-aos="fade-down"
          >
            Couples Therapy
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight" data-aos="fade-up">
            Build a Stronger <br />
            <span className="text-[#F97316]">Healthier Relationship</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-white/80 leading-relaxed mb-8" data-aos="fade-up" data-aos-delay="100">
            Improve communication, rebuild trust, and strengthen your emotional connection with expert guidance.
          </p>
          <Link
            to="/contact-us"
            className="inline-block bg-[#F97316] px-8 py-4 rounded-full font-bold text-white shadow-lg shadow-orange-500/30 hover:bg-[#EA580C] hover:scale-105 transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Book Appointment
          </Link>
        </Container>
      </div>

      <Container>
        {/* MAIN ABOUT SECTION */}
        <div className="lg:-mt-20 relative z-10 mb-24">
          <div className={`grid lg:grid-cols-2 gap-16 items-center rounded-3xl shadow-2xl overflow-hidden p-8 md:p-12 transition-colors duration-300 ${
            isDark ? "bg-[#111111] border border-[#222]" : "bg-white"
          }`}>
            
            {/* Image Side */}
            <div className="relative" data-aos="fade-right">
              <div className={`absolute -inset-4 rounded-3xl blur-xl ${isDark ? "bg-teal-900/20" : "bg-gradient-to-br from-[#3EB8A7]/20 to-transparent"}`}></div>
              <img
                src="/images/services/couples-therapy.jpg"
                alt="Couples Therapy Session"
                className="relative rounded-2xl shadow-lg w-full h-[450px] object-cover"
              />
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-[#F97316] text-white p-5 rounded-2xl shadow-xl hidden md:block" data-aos="zoom-in" data-aos-delay="300">
                <p className="text-3xl font-bold">2</p>
                <p className="text-sm opacity-90">Partners, 1 Goal</p>
              </div>
            </div>

            {/* Content Side */}
            <div data-aos="fade-left">
              <h2 className={`text-3xl md:text-4xl font-bold mb-6 leading-tight ${isDark ? "text-white" : "text-slate-800"}`}>
                What is Couples Therapy?
              </h2>
              <p className={`mb-4 leading-relaxed ${isDark ? "text-gray-400" : "text-slate-600"}`}>
                Couples therapy provides a safe, supportive environment where partners can explore their relationship dynamics with a neutral professional.
              </p>
              <p className={`mb-8 leading-relaxed ${isDark ? "text-gray-400" : "text-slate-600"}`}>
                Whether you're facing specific challenges or simply want to deepen your connection, our therapists provide tools to navigate conflict and rebuild intimacy.
              </p>

              {/* Features Checklist */}
              <ul className="space-y-3">
                {["Neutral & Safe Environment", "Evidence-Based Techniques (Gottman, EFT)", "Practical Communication Tools"].map((item, i) => (
                  <li key={i} className={`flex items-center gap-3 ${isDark ? "text-gray-300" : "text-slate-700"}`}>
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center ${isDark ? "bg-teal-900/50 text-teal-400" : "bg-teal-100 text-teal-600"}`}>
                      <IconCheck />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* WHAT WE HELP WITH */}
        <div className="py-16 relative">
          <div className="text-center mb-12">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? "text-white" : "text-slate-800"}`} data-aos="fade-up">
              What We Help With
            </h2>
            <p className={`max-w-xl mx-auto ${isDark ? "text-gray-400" : "text-slate-600"}`} data-aos="fade-up" data-aos-delay="50">
              We address a wide range of relationship concerns.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {issues.map((item, i) => (
              <div 
                key={i} 
                className={`p-6 rounded-2xl border shadow-sm hover:shadow-xl transition-all duration-300 text-center group ${
                  isDark 
                    ? "bg-[#111111] border-[#222] hover:border-teal-600" 
                    : "bg-white border-slate-100 hover:border-teal-200"
                }`}
                data-aos="fade-up"
                data-aos-delay={i * 50}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 transition-all duration-300 ${
                  isDark 
                    ? "bg-white/10 text-[#3EB8A7] group-hover:bg-[#3EB8A7] group-hover:text-white" 
                    : "bg-teal-50 text-[#3EB8A7] group-hover:bg-[#3EB8A7] group-hover:text-white"
                }`}>
                  {item.icon}
                </div>
                <p className={`font-semibold ${isDark ? "text-gray-200" : "text-slate-700"}`}>{item.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* BENEFITS SECTION */}
        <div className="py-16">
          <div className={`rounded-3xl p-8 md:p-12 transition-colors duration-300 ${
            isDark ? "bg-gradient-to-br from-slate-900 to-black" : "bg-gradient-to-br from-slate-100 to-white"
          }`}>
            <div className="text-center mb-12">
              <h2 className={`text-3xl font-bold ${isDark ? "text-white" : "text-slate-800"}`}>Benefits of Therapy</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((b, i) => (
                <div key={i} className="text-center group" data-aos="flip-left" data-aos-delay={i * 100}>
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 shadow-md group-hover:scale-110 transition-transform duration-300 ${
                    isDark 
                      ? "bg-slate-800 text-[#F97316]" 
                      : "bg-white text-[#F97316]"
                  }`}>
                    {b.icon}
                  </div>
                  <h3 className={`text-xl font-bold mb-2 ${isDark ? "text-white" : "text-slate-800"}`}>{b.title}</h3>
                  <p className={`text-sm max-w-xs mx-auto ${isDark ? "text-gray-400" : "text-slate-500"}`}>{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ SECTION */}
        <div className="py-16">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? "text-white" : "text-slate-800"}`}>
                Common Questions
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((f, i) => (
                <div 
                  key={i} 
                  className={`p-6 rounded-xl border shadow-sm transition-all ${
                    isDark 
                      ? "bg-[#111111] border-[#222] hover:border-gray-700" 
                      : "bg-white border-slate-100 hover:border-teal-200"
                  }`}
                  data-aos="fade-up"
                  data-aos-delay={i * 50}
                >
                  <h3 className={`font-bold text-lg flex items-start gap-3 ${isDark ? "text-white" : "text-slate-800"}`}>
                    <span className="text-[#F97316] mt-1">Q:</span>
                    {f.q}
                  </h3>
                  <p className={`mt-3 pl-7 leading-relaxed ${isDark ? "text-gray-400" : "text-slate-600"}`}>{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA SECTION */}
        <div className="pb-20">
          <div
            className="rounded-3xl p-10 md:p-16 text-center relative overflow-hidden shadow-2xl"
            style={{
              background: isDark
                ? "#000000"
                : "linear-gradient(to right, #F97316, #ea580c)",
            }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Reconnect?
              </h2>
              <p className="text-white/90 mb-8 max-w-xl mx-auto">
                Investing in your relationship is the most important step you can take for your shared future.
              </p>
              <Link
                to="/contact-us"
                className="inline-block bg-white text-[#F97316] px-8 py-4 rounded-full font-bold shadow-lg hover:scale-105 hover:bg-slate-50 transition-all duration-300"
              >
                Schedule a Session
              </Link>
            </div>
          </div>
        </div>

      </Container>
    </section>
  );
};

export default CouplesTherapy;