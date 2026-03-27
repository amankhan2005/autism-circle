 import Container from "../../components/layout/Container";
import ContactForm from "../../components/contact/ContactForm";
import ContactInfo from "../../components/contact/ContactInfo";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const ContactPage = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <section
      className={`min-h-screen relative overflow-hidden transition-colors duration-300 ${
        isDark ? "bg-black" : "bg-white"
      }`}
    >

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
            Get In Touch
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
            Contact Us
          </h1>

          <p className="max-w-2xl mx-auto text-lg text-white/80 leading-relaxed">
            We're here to listen and support you. Reach out today to start your journey towards better mental health.
          </p>
        </Container>
      </div>

      {/* CONTENT SECTION */}
      <Container>
        <div className="relative z-10 -mt-20 grid lg:grid-cols-5 gap-8">

          {/* FORM */}
          {/* ContactForm handles its own dark mode styling now */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>

          {/* INFO */}
          <div className="lg:col-span-2 space-y-6">
            <div className="lg:sticky top-24">
              {/* ContactInfo handles its own dark mode styling now */}
              <ContactInfo />

              {/* MAP CARD */}
              {/* <div className={`rounded-3xl overflow-hidden mt-6 shadow-lg border relative group transition-colors duration-300 ${
                isDark 
                  ? "bg-[#111111] border-[#222]" 
                  : "bg-slate-100 border-slate-100"
              }`}>
                 <div className={`absolute inset-0 animate-pulse ${
                  isDark ? "bg-gray-800" : "bg-gray-300"
                }`}></div>
                 
                <div className="relative w-full h-[400px] rounded-2xl overflow-hidden">

                  <iframe
                    src="https://www.google.com/maps?q=1205+Lobo+Court,+Abingdon+MD+21009&output=embed"
                    className="absolute inset-0 w-full h-full border-0"
                    title="Location Map"
                    style={{ filter: isDark ? 'grayscale(100%) invert(90%) contrast(90%)' : 'none' }}
                  />

                   <div className={`absolute bottom-6 left-6 backdrop-blur-xl p-4 rounded-xl shadow-lg transition-colors duration-300 ${
                    isDark 
                      ? "bg-black border border-gray-700" 
                      : "bg-white/80"
                  }`}>
                    <h4 className={`font-bold ${isDark ? "text-white" : "text-slate-800"}`}>
                      Our Location
                    </h4>
                    <p className={`text-sm ${isDark ? "text-gray-400" : "text-slate-600"}`}>
                      1205 Lobo Court,<br />
                      Abingdon, MD 21009
                    </p>
                  </div>

                </div>
              </div> */}

              
            </div>
          </div>

        </div>
      </Container>

      {/* SPACING */}
      <div className="h-20"></div>

    </section>
  );
};

export default ContactPage;