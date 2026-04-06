import { motion } from "framer-motion";
import Container from "../layout/Container";

const B = {
  yellow: "#F9C20A",
  orange: "#E85D04",
  black:  "#111111",
};

const CTA = () => {
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

        .btn-primary { transition: background .2s, transform .15s; }
        .btn-primary:hover { background: #E85D04 !important; transform: translateY(-1px); }

        .btn-outline { transition: background .2s, color .2s, transform .15s; }
        .btn-outline:hover {
          background: #111 !important;
          color: #F9C20A !important;
          transform: translateY(-1px);
        }
      `}</style>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", maxWidth: 640, margin: "0 auto" }}
        >

          {/* Badge */}
          <div
            style={{
              display: "inline-flex", alignItems: "center", gap: 7,
              background: B.black, color: B.yellow,
              fontSize: 11, fontWeight: 700, letterSpacing: ".08em",
              padding: "5px 16px", borderRadius: 99,
              marginBottom: 24, textTransform: "uppercase",
            }}
          >
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: B.orange, flexShrink: 0 }} />
            Get Started
          </div>

          {/* Heading */}
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 52px)",
              fontWeight: 900, letterSpacing: "-1.5px",
              lineHeight: 1.05, color: B.black, marginBottom: 20,
            }}
          >
            Start Your Child's{" "}
            <span style={{ color: B.orange }}>Journey Today</span>
          </h2>

          {/* Divider */}
          <div
            style={{
              width: 48, height: 3, borderRadius: 2,
              background: B.orange, margin: "0 auto 24px",
            }}
          />

          {/* Subtitle */}
          <p
            style={{
              fontSize: 16, fontWeight: 500,
              color: B.black, opacity: .7,
              lineHeight: 1.7, marginBottom: 40,
            }}
          >
            Early support can make a lifelong difference. Let's work together to
            help your child build confidence, communication, and independence.
          </p>

          {/* Buttons */}
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
              Schedule Free Consultation →
            </motion.a>

            

          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default CTA;