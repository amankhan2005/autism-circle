 import { useState, useContext } from "react";
import Container from "../../components/layout/Container";
import { Link } from "react-router-dom";
import FAQItem from "../../components/faq/FAQItem";
import { ThemeContext } from "../../context/ThemeContext";

// --- 1. DATA ---
const faqs = [
  {
    id: 1,
    question: "What services do you offer?",
    answer:
      "We provide individual therapy, couples counseling, stress management, trauma therapy, and online mental health support.",
  },
  {
    id: 2,
    question: "Do you offer online sessions?",
    answer:
      "Yes, we offer secure and confidential online counseling sessions via video and chat.",
  },
  {
    id: 3,
    question: "Is my information confidential?",
    answer:
      "Absolutely. We follow strict confidentiality and privacy standards to protect your information.",
  },
  {
    id: 4,
    question: "How do I book an appointment?",
    answer:
      "You can book an appointment through our contact page or call us directly.",
  },
  {
    id: 5,
    question: "Who can benefit from therapy?",
    answer:
      "Anyone experiencing stress, anxiety, depression, relationship issues, or emotional challenges can benefit from therapy.",
  },
];

// --- 2. ICON COMPONENTS ---
const IconQuestion = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const IconHeadset = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0a4 4 0 018 0z" />
  </svg>
);

// --- 3. MAIN COMPONENT ---
const FAQPage = () => {
  const [activeId, setActiveId] = useState(1);
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  const handleToggle = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className={`relative overflow-hidden ${isDark ? "bg-black" : "bg-slate-50"}`}>

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
            Help Center
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight" data-aos="fade-up">
            Frequently Asked Questions
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-white/80 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
            Everything you need to know about our services, privacy, and booking process.
          </p>
        </Container>
      </div>

      {/* MAIN CONTENT */}
      <Container>
        <div className="max-w-6xl mx-auto -mt-20 relative z-10 grid lg:grid-cols-12 gap-8">

          {/* LEFT SIDEBAR */}
          <div className="lg:col-span-4 space-y-6 lg:sticky top-24 h-fit">

            {/* Info Card */}
            <div
              className={`rounded-3xl shadow-xl p-8 text-center group transition-colors duration-300 ${
                isDark
                  ? "bg-[#111111] border border-[#222]"
                  : "bg-white border border-slate-100"
              }`}
              data-aos="fade-right"
            >
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 shadow-sm group-hover:scale-110 transition-transform duration-300 ${
                isDark
                  ? "bg-white/10 text-[#3EB8A7]"
                  : "bg-teal-50 text-[#3EB8A7]"
              }`}>
                <IconQuestion />
              </div>
              <h3 className={`text-xl font-bold mb-2 ${isDark ? "text-white" : "text-slate-800"}`}>
                Have Questions?
              </h3>
              <p className={`text-sm leading-relaxed ${isDark ? "text-gray-400" : "text-slate-500"}`}>
                Our team is here to support you with any mental health queries you might have.
              </p>
            </div>

            {/* CTA Card */}
            <div
              className={`rounded-3xl p-8 shadow-xl relative overflow-hidden transition-colors duration-300 ${
                isDark 
                  ? "bg-[#111111] border border-[#222]" 
                  : "bg-gradient-to-br from-[#F97316] to-orange-600"
              }`}
              data-aos="fade-right"
              data-aos-delay="100"
            >
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>

              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                  isDark ? "bg-white/10 text-white" : "bg-white/20 text-white"
                }`}>
                  <IconHeadset />
                </div>
                <h4 className="text-xl font-bold mb-2 text-white">
                  Still Need Help?
                </h4>
                <p className={`text-sm mb-5 leading-relaxed ${isDark ? "text-gray-400" : "text-white/80"}`}>
                  Can't find the answer? Contact us directly and we’ll guide you personally.
                </p>

                <Link
                  to="/contact-us"
                  className={`inline-flex items-center justify-center font-bold px-6 py-3 rounded-full shadow-md hover:scale-105 transition-transform duration-300 ${
                    isDark 
                      ? "bg-white text-black" 
                      : "bg-white text-[#F97316]"
                  }`}
                >
                  Contact Us
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE FAQ LIST */}
          <div className="lg:col-span-8" data-aos="fade-left">
            <div className={`rounded-3xl shadow-2xl p-6 md:p-8 space-y-4 transition-colors duration-300 ${
              isDark
                ? "bg-[#111111] border border-[#222]"
                : "bg-white border border-slate-100"
            }`}>
              {faqs.map((faq) => (
                <FAQItem
                  key={faq.id}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={activeId === faq.id}
                  onClick={() => handleToggle(faq.id)}
                  // isDark prop is redundant if FAQItem uses Context, but harmless if it uses props.
                  // Best to rely on the component's internal logic as analyzed before.
                />
              ))}
            </div>
          </div>

        </div>
      </Container>

      {/* PADDING AT BOTTOM */}
      <div className="h-20"></div>

    </section>
  );
};

export default FAQPage;