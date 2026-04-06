import { motion } from "framer-motion";
import Container from "../layout/Container";

const B = {
  yellow: "#F9C20A",
  orange: "#E85D04",
  black:  "#111111",
};

const HeartIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
  </svg>
);

const FlaskIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 3h6"/>
    <path d="M10 9 3.5 19.5A1 1 0 0 0 4.4 21h15.2a1 1 0 0 0 .9-1.5L14 9"/>
    <path d="M10 3v6"/>
    <path d="M14 3v6"/>
    <path d="M5 14h14"/>
  </svg>
);

const BadgeCheckIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/>
    <path d="m9 12 2 2 4-4"/>
  </svg>
);

const UsersIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

const TrendingUpIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
    <polyline points="16 7 22 7 22 13"/>
  </svg>
);

const LayersIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/>
    <path d="m6.08 9.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59"/>
    <path d="m6.08 14.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59"/>
  </svg>
);

const features = [
  {
    icon: <HeartIcon />,
    title: "Personalized Care",
    description:
      "Every child receives a customized therapy plan tailored to their strengths and needs.",
  },
  {
    icon: <FlaskIcon />,
    title: "Evidence-Based Approach",
    description:
      "We use proven ABA methods backed by research to ensure effective results.",
  },
  {
    icon: <BadgeCheckIcon />,
    title: "Experienced Team",
    description:
      "Our trained and compassionate therapists are dedicated to your child's growth.",
  },
  {
    icon: <UsersIcon />,
    title: "Family-Centered Support",
    description:
      "We work closely with parents to ensure progress continues at home and beyond.",
  },
  {
    icon: <TrendingUpIcon />,
    title: "Measurable Progress",
    description:
      "We track outcomes and continuously adjust programs for real, visible improvement.",
  },
  {
    icon: <LayersIcon />,
    title: "Holistic Development",
    description:
      "We focus on communication, behavior, and life skills for long-term success.",
  },
];

const WhyUs = () => {
  return (
    <section
      style={{
        background: B.yellow,
        padding: "88px 0",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;700;800;900&display=swap');

        .why-card {
          background: #fff;
          border: 2px solid #111;
          border-radius: 16px;
          padding: 28px 24px;
          position: relative;
          overflow: hidden;
          transition: transform .2s, box-shadow .2s, background .2s;
          height: 100%;
        }
        .why-card::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 4px;
          background: #E85D04;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform .3s ease;
        }
        .why-card:hover {
          background: #F9C20A;
          transform: translateY(-4px);
          box-shadow: 6px 6px 0px #111;
        }
        .why-card:hover::after { transform: scaleX(1); }

        .why-icon {
          width: 48px; height: 48px;
          border-radius: 12px;
          background: #F9C20A;
          border: 2px solid #111;
          display: flex; align-items: center; justify-content: center;
          color: #111;
          margin-bottom: 16px;
          transition: background .2s;
        }
        .why-card:hover .why-icon { background: #fff; }
      `}</style>

      <Container>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: 52 }}
        >
          <div
            style={{
              display: "inline-flex", alignItems: "center", gap: 7,
              background: B.black, color: B.yellow,
              fontSize: 11, fontWeight: 700, letterSpacing: ".08em",
              padding: "5px 16px", borderRadius: 99,
              marginBottom: 20, textTransform: "uppercase",
            }}
          >
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: B.orange, flexShrink: 0 }} />
            Why Choose Us
          </div>

          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 900, letterSpacing: "-1.5px",
              lineHeight: 1.05, color: B.black, marginBottom: 14,
            }}
          >
            Why Choose{" "}
            <span style={{ color: B.orange }}>Autism Circle</span>
          </h2>

          <p
            style={{
              fontSize: 16, fontWeight: 500,
              color: B.black, opacity: .65,
              maxWidth: 480, margin: "0 auto", lineHeight: 1.7,
            }}
          >
            We combine compassion with clinical excellence to deliver meaningful outcomes for every child.
          </p>
        </motion.div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
          }}
        >
          {features.map((item, index) => (
            <motion.div
              key={index}
              className="why-card"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <div className="why-icon">{item.icon}</div>
              <h3 style={{ fontSize: 17, fontWeight: 800, color: B.black, letterSpacing: "-.5px", marginBottom: 8 }}>
                {item.title}
              </h3>
              <p style={{ fontSize: 14, fontWeight: 400, color: B.black, opacity: .65, lineHeight: 1.7 }}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </Container>
    </section>
  );
};

export default WhyUs;