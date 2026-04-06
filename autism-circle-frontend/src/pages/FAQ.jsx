import { motion } from "framer-motion";
import Container from "../components/layout/Container";
import FAQItem from "../components/faq/FAQItem";

const B = {
  yellow: "#F9C20A",
  orange: "#E85D04",
  black: "#111111",
};

const FAQ = () => {
  const faqs = [
    {
      question: "What is ABA therapy?",
      answer:
        "Applied Behavior Analysis (ABA) is an evidence-based therapy that helps children improve communication, behavior, and life skills.",
    },
    {
      question: "At what age should therapy begin?",
      answer:
        "Early intervention (ages 2–6) is most effective, but therapy can benefit individuals of all ages.",
    },
    {
      question: "How long does therapy take?",
      answer:
        "The duration varies depending on each child’s needs, goals, and progress. Programs are fully personalized.",
    },
    {
      question: "Are parents involved in therapy?",
      answer:
        "Yes, parent involvement is essential. We train and guide parents to support progress at home and daily routines.",
    },
    {
      question: "Do you provide home-based therapy?",
      answer:
        "Yes, we offer home-based therapy to ensure learning is applied in real-life environments.",
    },
    {
      question: "What skills will my child learn?",
      answer:
        "Children can develop communication, social skills, emotional regulation, and daily living skills.",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;700;800;900&display=swap');

        /* Buttons */
        .btn-primary { transition: background .2s, transform .15s; }
        .btn-primary:hover { background: #E85D04 !important; transform: translateY(-1px); }
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
              FAQs
            </div>

            <h1 style={{
              fontSize: "clamp(36px, 6vw, 64px)",
              fontWeight: 900, letterSpacing: "-2px",
              lineHeight: 1.05, color: B.black, marginBottom: 20,
            }}>
              Frequently Asked <span style={{ color: B.orange }}>Questions</span>
            </h1>

            <p style={{
              fontSize: 18, fontWeight: 500,
              color: B.black, opacity: .65,
              lineHeight: 1.7,
            }}>
              Find answers to common questions about our autism therapy services and programs.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* ==========================================
          2. FAQ LIST SECTION (WHITE)
          Note: White cards with black borders on a white background 
          creates a clean, official, and trustworthy aesthetic.
      ========================================== */}
      <section style={{ background: "#ffffff", padding: "88px 0", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        <Container>
          <div style={{ maxWidth: "768px", margin: "0 auto" }}>
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* ==========================================
          3. CTA SECTION (YELLOW)
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
              Still Have <span style={{ color: B.orange }}>Questions?</span>
            </h2>

            <div style={{ width: 48, height: 3, borderRadius: 2, background: B.orange, margin: "0 auto 24px" }} />

            <p style={{
              fontSize: 16, fontWeight: 500,
              color: B.black, opacity: .7,
              lineHeight: 1.7, marginBottom: 40,
            }}>
              Our team is here to help you understand your child’s needs and guide you every step of the way.
            </p>

            <motion.a 
              href="/contact-us" 
              className="btn-primary" 
              whileTap={{ scale: 0.97 }} 
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "14px 32px", borderRadius: 99,
                fontSize: 14, fontWeight: 700,
                background: B.black, color: B.yellow, textDecoration: "none",
              }}
            >
              Contact Us →
            </motion.a>
          </motion.div>
        </Container>
      </section>

    </>
  );
};

export default FAQ;