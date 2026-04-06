import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../layout/Container";

const B = {
  yellow: "#F9C20A",
  orange: "#E85D04",
  black:  "#111111",
};

const faqs = [
  {
    question: "What is ABA therapy?",
    answer:
      "ABA is an evidence-based therapy that helps children improve communication, behavior, and life skills.",
  },
  {
    question: "At what age should therapy begin?",
    answer:
      "Early intervention (ages 2–6) is most effective, but therapy can benefit children of all ages.",
  },
  {
    question: "Are parents involved in the process?",
    answer:
      "Yes, parent involvement is essential to ensure consistent progress across home and daily routines.",
  },
  {
    question: "How long does therapy take?",
    answer:
      "Each child is different. Therapy duration depends on individual needs and goals.",
  },
];

const FAQPreview = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

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

        .faq-item {
          border: 2px solid #111;
          border-radius: 16px;
          overflow: hidden;
          transition: box-shadow .2s;
        }
        .faq-item:hover { box-shadow: 4px 4px 0px #111; }

        .faq-trigger {
          width: 100%;
          display: flex; align-items: center; justify-content: space-between;
          gap: 16px;
          padding: 22px 28px;
          background: transparent;
          border: none; cursor: pointer;
          text-align: left;
          transition: background .2s;
        }
        .faq-trigger:hover { background: #F9C20A; }
        .faq-trigger.open { background: #F9C20A; }

        .faq-icon {
          width: 32px; height: 32px; flex-shrink: 0;
          border-radius: 99px;
          border: 2px solid #111;
          display: flex; align-items: center; justify-content: center;
          font-size: 18px; font-weight: 700; line-height: 1;
          transition: background .2s, transform .3s;
          background: #fff;
        }
        .faq-trigger.open .faq-icon {
          background: #111;
          color: #F9C20A;
          transform: rotate(45deg);
        }

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
            Got Questions
          </div>

          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 900, letterSpacing: "-1.5px",
              lineHeight: 1.05, color: B.black, marginBottom: 14,
            }}
          >
            Frequently Asked{" "}
            <span style={{ color: B.orange }}>Questions</span>
          </h2>

          <p
            style={{
              fontSize: 16, fontWeight: 500,
              color: B.black, opacity: .65,
              maxWidth: 480, margin: "0 auto", lineHeight: 1.7,
            }}
          >
            Find answers to common questions about our autism therapy services.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div
          style={{
            maxWidth: 720, margin: "0 auto",
            display: "flex", flexDirection: "column", gap: 12,
            marginBottom: 48,
          }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="faq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <button
                className={`faq-trigger${openIndex === index ? " open" : ""}`}
                onClick={() => toggle(index)}
              >
                <span
                  style={{
                    fontSize: 16, fontWeight: 800,
                    color: B.black, letterSpacing: "-.3px",
                  }}
                >
                  {faq.question}
                </span>
                <span className="faq-icon">+</span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                  >
                    <div
                      style={{
                        padding: "0 28px 22px",
                        fontSize: 15, fontWeight: 400,
                        color: B.black, opacity: .65, lineHeight: 1.75,
                        borderTop: `1px solid rgba(17,17,17,0.12)`,
                        paddingTop: 16,
                      }}
                    >
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center" }}>
          <motion.a
            href="/faq"
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
            View All FAQs →
          </motion.a>
        </div>

      </Container>
    </section>
  );
};

export default FAQPreview;