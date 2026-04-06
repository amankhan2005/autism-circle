import { motion } from "framer-motion";
import Container from "../layout/Container";

const B = {
  yellow: "#F9C20A",
  orange: "#E85D04",
  black:  "#111111",
};

const TargetIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <circle cx="12" cy="12" r="6"/>
    <circle cx="12" cy="12" r="2"/>
  </svg>
);

const GlobeIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
    <path d="M2 12h20"/>
  </svg>
);

const cardsData = [
  {
    icon: <TargetIcon />,
    title: "Our Mission",
    description:
      "To provide high-quality, evidence-based autism therapy that empowers children to develop communication, independence, and confidence. We support families with the tools and guidance they need to help their child thrive in everyday life.",
  },
  {
    icon: <GlobeIcon />,
    title: "Our Vision",
    description:
      "To create a world where every child with autism is understood, supported, and empowered to reach their full potential in an inclusive and compassionate environment.",
  },
];

const VisionMission = () => {
  return (
    <section
      style={{
        background: "#ffffff",
        padding: "88px 0",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;700;800;900&display=swap');

        .vm-card {
          background: ${B.yellow};
          border: 2px solid ${B.black};
          border-radius: 20px;
          padding: 36px 32px;
          position: relative;
          overflow: hidden;
          transition: transform .2s, box-shadow .2s;
        }
        .vm-card::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 4px;
          background: ${B.orange};
          transform: scaleX(0);
          transform-origin: left;
          transition: transform .3s ease;
        }
        .vm-card:hover {
          transform: translateY(-4px);
          box-shadow: 6px 6px 0px ${B.black};
        }
        .vm-card:hover::after { transform: scaleX(1); }

        .vm-icon {
          width: 48px; height: 48px;
          border-radius: 12px;
          background: ${B.black};
          border: 2px solid ${B.black};
          display: flex; align-items: center; justify-content: center;
          color: ${B.yellow};
          margin-bottom: 20px;
          transition: background .2s, color .2s;
        }
        .vm-card:hover .vm-icon {
          background: ${B.orange};
          border-color: ${B.orange};
          color: #fff;
        }
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
            Who We Are
          </div>

          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 900, letterSpacing: "-1.5px",
              lineHeight: 1.05, color: B.black, marginBottom: 14,
            }}
          >
            Our Vision &{" "}
            <span style={{ color: B.orange }}>Mission</span>
          </h2>

          <p
            style={{
              fontSize: 16, fontWeight: 500,
              color: B.black, opacity: 0.65,
              maxWidth: 480, margin: "0 auto", lineHeight: 1.7,
            }}
          >
            Guided by purpose, driven by care, and committed to meaningful outcomes for every child.
          </p>
        </motion.div>

        {/* Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
          {cardsData.map((card, index) => (
            <motion.div
              key={index}
              className="vm-card"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="vm-icon">{card.icon}</div>

              <h3
                style={{
                  fontSize: 22, fontWeight: 900,
                  letterSpacing: "-0.5px", color: B.black, marginBottom: 12,
                }}
              >
                {card.title}
              </h3>

              <div style={{ width: 40, height: 3, borderRadius: 2, background: B.orange, marginBottom: 16 }} />

              <p
                style={{
                  fontSize: 15, fontWeight: 400,
                  lineHeight: 1.75, color: B.black, opacity: 0.7,
                }}
              >
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

      </Container>
    </section>
  );
};

export default VisionMission;