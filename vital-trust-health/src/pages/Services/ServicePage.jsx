 import { Link } from "react-router-dom";
import { useContext } from "react"; // 1. Import useContext
import { ThemeContext } from "../../context/ThemeContext"; // 2. Import ThemeContext
import servicesData from "../../data/servicesData";
import Container from "../../components/layout/Container";

const Services = () => {
  // 3. Get theme state
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <section className={`py-24 relative overflow-hidden ${isDark ? "bg-black" : "bg-white"}`}>

      {/* Background Glow - Increased opacity slightly for dark mode visibility */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className={`absolute top-[-5%] right-[-10%] w-96 h-96 rounded-full blur-[120px] ${isDark ? "bg-teal-500/10" : "bg-teal-500/5"}`}></div>
        <div className={`absolute bottom-[-10%] left-[-5%] w-96 h-96 rounded-full blur-[120px] ${isDark ? "bg-orange-500/10" : "bg-orange-500/5"}`}></div>
      </div>

      <Container>

        {/* Heading */}
        <div className="text-center mb-16">
          <span className={`text-sm font-bold px-4 py-1.5 rounded-full uppercase tracking-wider ${
            isDark 
              ? "bg-orange-900/20 text-orange-400 border border-orange-500/20" 
              : "bg-orange-100 text-[#F97316]"
          }`}>
            Our Services
          </span>

          <h1 className={`text-4xl md:text-5xl font-extrabold mt-4 mb-6 ${
            isDark ? "text-white" : "text-slate-900"
          }`}>
            Complete Mental Health <span className="text-[#3EB8A7]">Care Solutions</span>
          </h1>

          <p className={`max-w-2xl mx-auto ${isDark ? "text-gray-400" : "text-slate-500"}`}>
            Explore all our specialized services designed to support your mental well-being,
            therapy needs, and medication management.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((s, i) => (
            <Link
              key={i}
              to={`/services/${s.slug}`}
              className={`group rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all duration-500 border ${
                isDark 
                  ? "bg-[#111111] border-[#222] hover:border-teal-600" 
                  : "bg-white border-slate-100"
              }`}
            >
              {/* Image */}
              <div className="h-60 overflow-hidden">
                <img
                  src={`/images/services/${s.slug}.jpg`}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-2 group-hover:text-[#3EB8A7] transition-colors ${
                  isDark ? "text-white" : "text-slate-800"
                }`}>
                  {s.title}
                </h3>

                <p className={`text-sm mb-4 ${isDark ? "text-gray-400" : "text-slate-500"}`}>
                  {s.desc}
                </p>

                <span className="text-[#F97316] font-semibold text-sm group-hover:underline">
                  Learn More →
                </span>
              </div>
            </Link>
          ))}
        </div>

      </Container>

    </section>
  );
};

export default Services;