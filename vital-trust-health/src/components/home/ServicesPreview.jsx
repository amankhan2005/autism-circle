import Container from "../layout/Container";
import { Link } from "react-router-dom";
import servicesData from "../../data/servicesData";

const ServicesPreview = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">

      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-5%] right-[-10%] w-96 h-96 bg-teal-500/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-orange-500/5 rounded-full blur-[120px]"></div>
      </div>

      <Container>

        {/* Heading Section */}
        <div className="text-center mb-16 relative z-10">
          <div className="inline-block mb-4">
            <span className="bg-orange-100 text-[#F97316] text-sm font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
              What We Offer
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-800 leading-tight mb-6">
            Our Specialized <br />
            <span className="text-[#3EB8A7]">Mental Health</span> Services
          </h2>

          {/* ✅ Updated Description (Merged Version) */}
          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            We provide personalized mental health services, supported by a skilled Mental Health Nurse Practitioner who manages your medication needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {servicesData.map((s, i) => (
            <Link
              to={`/services/${s.slug}`}
              key={i}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100 hover:border-[#3EB8A7]/30 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image Section */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={`/images/services/${s.slug}.jpg`}
                  alt={s.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Accent Line */}
              <div className="h-1 w-0 bg-[#F97316] group-hover:w-full transition-all duration-500"></div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-[#3EB8A7] transition-colors">
                  {s.title}
                </h3>

                <p className="text-slate-500 text-sm leading-relaxed mb-5 line-clamp-2">
                  {s.desc}
                </p>

                <div className="flex items-center text-[#F97316] font-bold text-sm">
                  <span className="mr-2">View Details</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 transition-transform group-hover:translate-x-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </Container>
    </section>
  );
};

export default ServicesPreview;