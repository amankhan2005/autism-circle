import { motion } from "framer-motion";
import Container from "../layout/Container";
import aboutImg from "../../assets/services/parent.webp";

const B = {
  yellow: "#F9C20A",
  orange: "#E85D04",
  black:  "#111111",
};

const AboutPreview = () => {
  return (
    <section
      style={{
        background: "#ffffff",
        padding: "80px 0",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;700;800;900&display=swap');
        .btn-learn { transition: background .2s, transform .15s; }
        .btn-learn:hover { background: #E85D04 !important; transform: translateY(-1px); }
      `}</style>

      <Container>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 48,
            alignItems: "center",
          }}
        >
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{ position: "relative" }}
          >
            {/* Decorative offset border */}
            <div
              style={{
                position: "absolute",
                top: 14, left: 14, right: -14, bottom: -14,
                border: `3px solid ${B.black}`,
                borderRadius: 20,
                zIndex: 0,
              }}
            />
            <img
               src={aboutImg}
              alt="About Autism Circle"
              style={{
                width: "100%",
                borderRadius: 16,
                display: "block",
                position: "relative",
                zIndex: 1,
                border: `3px solid ${B.black}`,
              }}
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Badge */}
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
              About Us
            </div>

            {/* Heading */}
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 44px)",
                fontWeight: 900, lineHeight: 1.05,
                letterSpacing: "-1.5px", color: B.black, marginBottom: 16,
              }}
            >
              Compassionate Care.{" "}
              <span style={{ color: B.orange }}>Meaningful Progress.</span>
            </h2>

            {/* Subtitle */}
            <p
              style={{
                fontSize: 16, fontWeight: 500, lineHeight: 1.7,
                color: B.black, opacity: 0.7, marginBottom: 16,
              }}
            >
              At <strong style={{ color: B.orange, opacity: 1 }}>Autism Circle</strong>, we
              provide personalised, evidence-based therapy to help children with autism
              build communication, independence, and confidence.
            </p>

            <p
              style={{
                fontSize: 15, fontWeight: 400, lineHeight: 1.75,
                color: B.black, opacity: 0.6, marginBottom: 32,
              }}
            >
              We work closely with families to create structured, engaging programmes
              tailored to each child's unique needs — ensuring progress in everyday life,
              both at home and in the community.
            </p>

            {/* Divider */}
            <div style={{ width: 48, height: 3, borderRadius: 2, background: B.orange, marginBottom: 28 }} />

            {/* CTA */}
            <a
              href="/about-us"
              className="btn-learn"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "13px 28px", borderRadius: 99,
                fontSize: 14, fontWeight: 700,
                background: B.black, color: B.yellow,
                textDecoration: "none", cursor: "pointer",
              }}
            >
              Learn More →
            </a>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default AboutPreview;