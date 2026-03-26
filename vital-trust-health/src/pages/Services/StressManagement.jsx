import Container from "../../components/layout/Container";
import { Link } from "react-router-dom";

// --- 1. ICON COMPONENTS (Defined First) ---

const IconCheck = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

const IconBriefcase = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const IconAcademicCap = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path d="M12 14l9-5-9-5-9 5 9 5z" />
    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
  </svg>
);

const IconFire = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
  </svg>
);

const IconClock = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const IconRefresh = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  </svg>
);

const IconHeart = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const IconSparkles = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
);

const IconEye = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

const IconScale = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
  </svg>
);

// --- 2. DATA ARRAYS ---

const issues = [
  { icon: <IconBriefcase />, title: "Work Stress" },
  { icon: <IconAcademicCap />, title: "Academic Pressure" },
  { icon: <IconFire />, title: "Burnout" },
  { icon: <IconClock />, title: "Time Management" },
  { icon: <IconRefresh />, title: "Overthinking" },
  { icon: <IconHeart />, title: "Emotional Stress" },
];

const benefits = [
  {
    icon: <IconSparkles />,
    title: "Calm Mind",
    desc: "Reduce mental noise and feel more relaxed and present in your daily life.",
  },
  {
    icon: <IconEye />,
    title: "Better Focus",
    desc: "Improve concentration and productivity by eliminating mental clutter.",
  },
  {
    icon: <IconScale />,
    title: "Balanced Lifestyle",
    desc: "Create sustainable boundaries between work, life, and personal time.",
  },
];

const faqs = [
  {
    q: "What are the signs that I need stress management?",
    a: "Common signs include chronic fatigue, irritability, difficulty sleeping, and a feeling of being constantly overwhelmed.",
  },
  {
    q: "Can therapy really help with stress?",
    a: "Yes. Therapy provides practical, evidence-based tools to reframe negative thoughts and develop coping mechanisms.",
  },
  {
    q: "How long does it take to manage stress effectively?",
    a: "Many clients feel a sense of relief after the first session. Long-term resilience is built over several weeks.",
  },
 {
  q: "Do you help with prescriptions?",
  a: "Yes, our Mental Health Nurse Practitioner provides guidance and management for all your medication needs."
}
]

// --- 3. MAIN COMPONENT ---

const StressManagement = () => {
  return (
    <section className="bg-slate-50 min-h-screen relative overflow-hidden">

      {/* HERO SECTION */}
      <div className="bg-gradient-to-br from-[#2F9E8F] via-[#3EB8A7] to-[#155E54] text-white pt-20 pb-32 relative">
        {/* Decorative Blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-400/10 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-500/10 blur-[100px] rounded-full"></div>

        <Container className="relative z-10 text-center">
          <span 
            className="inline-block bg-white/10 border border-white/20 text-teal-200 text-sm font-medium px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider"
            data-aos="fade-down"
          >
            Wellness & Balance
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight" data-aos="fade-up">
            Stress Management Therapy for a <br />
            <span className="text-[#F97316]">Healthier Mind</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-white/80 leading-relaxed mb-8" data-aos="fade-up" data-aos-delay="100">
            Learn effective strategies to manage stress, improve focus, and maintain a balanced and healthy lifestyle.
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
          <div className="grid lg:grid-cols-2 gap-16 items-center bg-white rounded-3xl shadow-2xl overflow-hidden p-8 md:p-12">
            
            {/* Image Side */}
            <div className="relative" data-aos="fade-right">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#3EB8A7]/20 to-transparent rounded-3xl blur-xl"></div>
              <img
                src="/images/services/stress-management.jpg"
                alt="Stress Management Therapy"
                className="relative rounded-2xl shadow-lg w-full h-[450px] object-cover"
              />
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-[#F97316] text-white p-5 rounded-2xl shadow-xl hidden md:block" data-aos="zoom-in" data-aos-delay="300">
                <p className="text-3xl font-bold">100%</p>
                <p className="text-sm opacity-90">Support</p>
              </div>
            </div>

            {/* Content Side */}
            <div data-aos="fade-left">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 leading-tight">
                What is Stress Management?
              </h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Stress management focuses on helping you understand your stress triggers and develop healthy ways to respond to daily challenges.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Through guided techniques and professional support, you can regain control, improve focus, and live a more balanced life.
              </p>

              {/* Features Checklist */}
              <ul className="space-y-3">
                {["Identify Triggers", "Coping Strategies", "Mindfulness & Relaxation"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700">
                    <span className="w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center text-teal-600">
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4" data-aos="fade-up">
              What We Help With
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto" data-aos="fade-up" data-aos-delay="50">
              We provide tools to handle various sources of stress.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {issues.map((item, i) => (
              <div 
                key={i} 
                className="bg-white p-6 rounded-2xl border border-slate-100 hover:shadow-xl hover:border-teal-200 transition-all duration-300 text-center group"
                data-aos="fade-up"
                data-aos-delay={i * 50}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-teal-50 rounded-xl text-[#3EB8A7] mb-4 group-hover:bg-[#3EB8A7] group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <p className="font-semibold text-slate-700">{item.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* BENEFITS SECTION */}
        <div className="py-16">
          <div className="bg-gradient-to-br from-slate-100 to-white rounded-3xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-800">Benefits of Therapy</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((b, i) => (
                <div key={i} className="text-center group" data-aos="flip-left" data-aos-delay={i * 100}>
                  <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 text-[#F97316] shadow-md group-hover:scale-110 transition-transform duration-300">
                    {b.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{b.title}</h3>
                  <p className="text-slate-500 text-sm max-w-xs mx-auto">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ SECTION */}
        <div className="py-16">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Common Questions
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((f, i) => (
                <div 
                  key={i} 
                  className="bg-white p-6 rounded-xl border border-slate-100 hover:border-teal-200 shadow-sm transition-all"
                  data-aos="fade-up"
                  data-aos-delay={i * 50}
                >
                  <h3 className="font-bold text-slate-800 text-lg flex items-start gap-3">
                    <span className="text-[#F97316] mt-1">Q:</span>
                    {f.q}
                  </h3>
                  <p className="text-slate-600 mt-3 pl-7 leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA SECTION */}
        <div className="pb-20">
          <div className="bg-gradient-to-r from-[#F97316] to-orange-600 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Take Control of Your Stress
              </h2>
              <p className="text-white/90 mb-8 max-w-xl mx-auto">
                Learn how to manage stress and live a calmer, healthier life.
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

export default StressManagement;