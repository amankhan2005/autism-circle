import { motion } from "framer-motion";
import Container from "../layout/Container";

const B = {
  yellow: "#F9C20A",
  orange: "#E85D04",
  black:  "#111111",
};

/* SVG Icons */
const PuzzleIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.98.98 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-3.408 0l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.404 2.404 0 0 1 2 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.404 2.404 0 0 1 12 2c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.075.84-.505 1.02-.969a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z"/>
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

const BrainIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/>
    <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/>
    <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/>
    <path d="M17.599 6.5a3 3 0 0 0 .399-1.375"/>
    <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"/>
    <path d="M3.477 10.896a4 4 0 0 1 .585-.396"/>
    <path d="M19.938 10.5a4 4 0 0 1 .585.396"/>
    <path d="M6 18a4 4 0 0 1-1.967-.516"/>
    <path d="M19.967 17.484A4 4 0 0 1 18 18"/>
  </svg>
);

const HandshakeIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m11 17 2 2a1 1 0 1 0 3-3"/>
    <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l1.71 1.71"/>
    <path d="m14 14-2-2"/>
    <path d="M3 15h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H3z"/>
    <path d="M21 9h-2a2 2 0 0 0-2-2V5a2 2 0 0 0 2-2h2z"/>
  </svg>
);

const StarIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>
  </svg>
);

const HomeIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
);

const servicesData = [
  {
    icon: <PuzzleIcon />,
    title: "ABA Therapy",
    description:
      "Personalised, evidence-based programmes to improve communication, behaviour, and independence.",
  },
  {
    icon: <UsersIcon />,
    title: "Parent Training",
    description:
      "Empowering families with tools and strategies to support their child's development at home.",
  },
  {
    icon: <BrainIcon />,
    title: "Behaviour Support",
    description:
      "Understanding behaviours and teaching positive alternatives through structured support plans.",
  },
  {
    icon: <HandshakeIcon />,
    title: "Social Skills",
    description:
      "Helping children build confidence through interaction, communication, and group activities.",
  },
  {
    icon: <StarIcon />,
    title: "Daily Living Skills",
    description:
      "Teaching essential routines like dressing, eating, and personal care for independence.",
  },
  {
    icon: <HomeIcon />,
    title: "Home-Based Therapy",
    description:
      "Therapy delivered in real-life environments to ensure consistent and meaningful progress.",
  },
];

const Services = () => {
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

        .service-card {
          background: #fff;
          border: 2px solid #111;
          border-radius: 16px;
          padding: 28px 24px;
          position: relative;
          overflow: hidden;
          transition: transform .2s, box-shadow .2s, background .2s;
        }
        .service-card::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 4px;
          background: #E85D04;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform .3s ease;
        }
        .service-card:hover {
          background: #F9C20A;
          transform: translateY(-4px);
          box-shadow: 6px 6px 0px #111;
        }
        .service-card:hover::after { transform: scaleX(1); }

        .service-icon {
          width: 48px; height: 48px;
          border-radius: 12px;
          background: #F9C20A;
          border: 2px solid #111;
          display: flex; align-items: center; justify-content: center;
          color: #111;
          margin-bottom: 16px;
          transition: background .2s;
        }
        .service-card:hover .service-icon { background: #fff; }

        .btn-cta { transition: background .2s, transform .15s; }
        .btn-cta:hover { background: #E85D04 !important; transform: translateY(-1px); }
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
            What We Offer
          </div>

          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 900, letterSpacing: "-1.5px",
              lineHeight: 1.05, color: B.black, marginBottom: 14,
            }}
          >
            Our Specialised{" "}
            <span style={{ color: B.orange }}>Services</span>
          </h2>

          <p
            style={{
              fontSize: 16, fontWeight: 500,
              color: B.black, opacity: .65,
              maxWidth: 480, margin: "0 auto", lineHeight: 1.7,
            }}
          >
            Comprehensive, evidence-based programmes designed to support every child's unique journey.
          </p>
        </motion.div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
            marginBottom: 48,
          }}
        >
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3 style={{ fontSize: 17, fontWeight: 800, color: B.black, letterSpacing: "-.5px", marginBottom: 8 }}>
                {service.title}
              </h3>
              <p style={{ fontSize: 14, fontWeight: 400, color: B.black, opacity: .65, lineHeight: 1.7 }}>
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center" }}>
          <motion.a
            href="/services"
            className="btn-cta"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "14px 32px", borderRadius: 99,
              fontSize: 14, fontWeight: 700,
              background: B.black, color: B.yellow,
              textDecoration: "none",
            }}
          >
            View All Services →
          </motion.a>
        </div>

      </Container>
    </section>
  );
};

export default Services;