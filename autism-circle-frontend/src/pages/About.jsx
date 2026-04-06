import { motion } from "framer-motion";
import Container from "../components/layout/Container";

const B = {
  yellow: "#F9C20A",
  orange: "#E85D04",
  black: "#111111",
};

// --- ICONS ---
const TargetIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
  </svg>
);

const GlobeIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>
  </svg>
);

const HeartIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
  </svg>
);

const ShieldIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

const TrendingUpIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
  </svg>
);

const UsersIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

// --- DATA ---
const purposeData = [
  {
    icon: <TargetIcon />,
    title: "Our Mission",
    description: "To provide high-quality, evidence-based therapy that empowers children with autism to build communication, independence, and confidence while supporting families every step of the way.",
  },
  {
    icon: <GlobeIcon />,
    title: "Our Vision",
    description: "To create a world where every child with autism is understood, supported, and empowered to reach their full potential in an inclusive and compassionate environment.",
  },
];

const valuesData = [
  { icon: <HeartIcon />, title: "Compassion", description: "We care deeply about every child and family we work with." },
  { icon: <ShieldIcon />, title: "Integrity", description: "Honest, ethical, and transparent in all our clinical practices." },
  { icon: <TrendingUpIcon />, title: "Growth", description: "We celebrate every small milestone on the path to success." },
  { icon: <UsersIcon />, title: "Collaboration", description: "Working seamlessly together with families for lasting outcomes." },
];

// --- COMPONENT ---
const About = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;700;800;900&display=swap');

        /* Reusable Card System */
        .about-card {
          border: 2px solid #111;
          border-radius: 20px;
          padding: 36px 32px;
          position: relative;
          overflow: hidden;
          transition: transform .2s, box-shadow .2s;
          height: 100%;
        }
        .about-card::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 4px;
          background: #E85D04;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform .3s ease;
        }
        .about-card:hover {
          transform: translateY(-4px);
          box-shadow: 6px 6px 0px #111;
        }
        .about-card:hover::after { transform: scaleX(1); }

        /* Reusable Icon Box */
        .about-icon {
          width: 48px; height: 48px;
          border-radius: 12px;
          background: #111;
          border: 2px solid #111;
          display: flex; align-items: center; justify-content: center;
          color: #F9C20A;
          margin-bottom: 20px;
          transition: background .2s, color .2s, border-color .2s;
        }
        .about-card:hover .about-icon {
          background: #E85D04;
          border-color: #E85D04;
          color: #fff;
        }

        /* Buttons */
        .btn-primary { transition: background .2s, transform .15s; }
        .btn-primary:hover { background: #E85D04 !important; transform: translateY(-1px); }
        .btn-outline { transition: background .2s, color .2s, transform .15s; }
        .btn-outline:hover {
          background: #111 !important;
          color: #F9C20A !important;
          transform: translateY(-1px);
        }
      `}</style>

      {/* ==========================================
          1. HERO SECTION (YELLOW)
      ========================================== */}
      <section style={{ background: B.yellow, padding: "120px 0 88px", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: "center", maxWidth: 800, margin: "0 auto" }}
          >
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 7,
              background: B.black, color: B.yellow,
              fontSize: 11, fontWeight: 700, letterSpacing: ".08em",
              padding: "5px 16px", borderRadius: 99,
              marginBottom: 24, textTransform: "uppercase",
            }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: B.orange, flexShrink: 0 }} />
              About Us
            </div>

            <h1 style={{
              fontSize: "clamp(36px, 6vw, 64px)",
              fontWeight: 900, letterSpacing: "-2px",
              lineHeight: 1.05, color: B.black, marginBottom: 20,
            }}>
              Empowering Children with <span style={{ color: B.orange }}>Autism</span>
            </h1>

            <p style={{
              fontSize: 18, fontWeight: 500,
              color: B.black, opacity: .65,
              lineHeight: 1.7,
            }}>
              Compassionate, evidence-based therapy and family-centered support to help every child thrive.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* ==========================================
          2. WHO WE ARE (WHITE)
      ========================================== */}
      <section style={{ background: "#ffffff", padding: "88px 0", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            style={{ textAlign: "center", maxWidth: 720, margin: "0 auto" }}
          >
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 7,
              background: B.black, color: B.yellow,
              fontSize: 11, fontWeight: 700, letterSpacing: ".08em",
              padding: "5px 16px", borderRadius: 99,
              marginBottom: 20, textTransform: "uppercase",
            }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: B.orange, flexShrink: 0 }} />
              Who We Are
            </div>

            <h2 style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 900, letterSpacing: "-1.5px",
              lineHeight: 1.05, color: B.black, marginBottom: 20,
            }}>
              Dedicated to Helping Children <span style={{ color: B.orange }}>Thrive</span>
            </h2>

            <div style={{ width: 48, height: 3, borderRadius: 2, background: B.orange, margin: "0 auto 24px" }} />

            <p style={{
              fontSize: 17, fontWeight: 400,
              color: B.black, opacity: .7,
              lineHeight: 1.8,
            }}>
              Autism Circle is a specialized autism support center focused on delivering high-quality, evidence-based therapy. We believe every child is unique and deserves individualized care that nurtures their strengths and supports their challenges.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* ==========================================
          3. MISSION & VISION (YELLOW)
      ========================================== */}
      <section style={{ background: B.yellow, padding: "88px 0", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        <Container>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            style={{ textAlign: "center", marginBottom: 52 }}
          >
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 7,
              background: B.black, color: B.yellow,
              fontSize: 11, fontWeight: 700, letterSpacing: ".08em",
              padding: "5px 16px", borderRadius: 99,
              marginBottom: 20, textTransform: "uppercase",
            }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: B.orange, flexShrink: 0 }} />
              Our Purpose
            </div>
            <h2 style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 900, letterSpacing: "-1.5px",
              lineHeight: 1.05, color: B.black, marginBottom: 14,
            }}>
              Mission & <span style={{ color: B.orange }}>Vision</span>
            </h2>
          </motion.div>

          {/* Cards - Inverted to White */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {purposeData.map((item, index) => (
              <motion.div
                key={index}
                className="about-card"
                style={{ background: "#ffffff" }} // INVERSION: White cards on Yellow background
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="about-icon">{item.icon}</div>
                <h3 style={{ fontSize: 22, fontWeight: 900, letterSpacing: "-0.5px", color: B.black, marginBottom: 12 }}>
                  {item.title}
                </h3>
                <div style={{ width: 40, height: 3, borderRadius: 2, background: B.orange, marginBottom: 16 }} />
                <p style={{ fontSize: 15, fontWeight: 400, lineHeight: 1.75, color: B.black, opacity: 0.7 }}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ==========================================
          4. VALUES (WHITE)
      ========================================== */}
      <section style={{ background: "#ffffff", padding: "88px 0", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        <Container>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            style={{ textAlign: "center", marginBottom: 52 }}
          >
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 7,
              background: B.black, color: B.yellow,
              fontSize: 11, fontWeight: 700, letterSpacing: ".08em",
              padding: "5px 16px", borderRadius: 99,
              marginBottom: 20, textTransform: "uppercase",
            }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: B.orange, flexShrink: 0 }} />
              Core Values
            </div>
            <h2 style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 900, letterSpacing: "-1.5px",
              lineHeight: 1.05, color: B.black, marginBottom: 14,
            }}>
              What <span style={{ color: B.orange }}>Guides</span> Us
            </h2>
            <p style={{
              fontSize: 16, fontWeight: 500,
              color: B.black, opacity: 0.65,
              maxWidth: 480, margin: "0 auto", lineHeight: 1.7,
            }}>
              The foundational principles that drive our clinical and operational decisions.
            </p>
          </motion.div>

          {/* Cards - Inverted to Yellow */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
            {valuesData.map((item, index) => (
              <motion.div
                key={index}
                className="about-card"
                style={{ background: B.yellow, textAlign: "center", padding: "32px 24px" }} // INVERSION: Yellow cards on White background
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <div className="about-icon" style={{ margin: "0 auto 20px" }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 800, letterSpacing: "-0.5px", color: B.black, marginBottom: 10 }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: 14, fontWeight: 400, lineHeight: 1.7, color: B.black, opacity: 0.65 }}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ==========================================
          5. CTA SECTION (YELLOW)
      ========================================== */}
      <section style={{ background: B.yellow, padding: "88px 0", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{ textAlign: "center", maxWidth: 640, margin: "0 auto" }}
          >
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 7,
              background: B.black, color: B.yellow,
              fontSize: 11, fontWeight: 700, letterSpacing: ".08em",
              padding: "5px 16px", borderRadius: 99,
              marginBottom: 24, textTransform: "uppercase",
            }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: B.orange, flexShrink: 0 }} />
              Get Started
            </div>

            <h2 style={{
              fontSize: "clamp(28px, 4vw, 52px)",
              fontWeight: 900, letterSpacing: "-1.5px",
              lineHeight: 1.05, color: B.black, marginBottom: 20,
            }}>
              Join Us in Making a <span style={{ color: B.orange }}>Difference</span>
            </h2>

            <div style={{ width: 48, height: 3, borderRadius: 2, background: B.orange, margin: "0 auto 24px" }} />

            <p style={{
              fontSize: 16, fontWeight: 500,
              color: B.black, opacity: .7,
              lineHeight: 1.7, marginBottom: 40,
            }}>
              Let’s work together to help your child reach their full potential with compassionate and personalized support.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12 }}>
              <motion.a
                href="/contact-us"
                className="btn-primary"
                whileTap={{ scale: 0.97 }}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  padding: "14px 32px", borderRadius: 99,
                  fontSize: 14, fontWeight: 700,
                  background: B.black, color: B.yellow,
                  textDecoration: "none",
                }}
              >
                Book Free Consultation →
              </motion.a>

               
            </div>
          </motion.div>
        </Container>
      </section>

    </>
  );
};

export default About;