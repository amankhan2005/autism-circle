import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../components/layout/Container";

// ✅ ENV variable
const API_URL = import.meta.env.VITE_API_URL;

const B = {
  yellow: "#F9C20A",
  orange: "#E85D04",
  black: "#111111",
};

// Professional Contact Icons
const MapPinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
  </svg>
);

const inputStyle = {
  width: "100%",
  padding: "14px 16px",
  background: "#ffffff",
  border: `2px solid ${B.black}`,
  borderRadius: 12,
  fontFamily: "'Plus Jakarta Sans', sans-serif",
  fontSize: 15,
  color: B.black,
  outline: "none",
  transition: "border-color 0.2s, box-shadow 0.2s",
};

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isError, setIsError] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFocus = (e) => {
    e.target.style.borderColor = B.orange;
    e.target.style.boxShadow = "4px 4px 0px #111";
  };

  const handleBlur = (e) => {
    e.target.style.borderColor = B.black;
    e.target.style.boxShadow = "none";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      
      setIsError(false);
      setModalMessage(data.msg || "Message sent successfully!");
      setShowModal(true);

      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      setIsError(true);
      setModalMessage("Something went wrong. Please try again later.");
      setShowModal(true);
    }

    setLoading(false);
  };

  // Reusable inline style for contact info icons
  const contactIconStyle = {
    width: 40, height: 40, borderRadius: 10,
    background: B.yellow, border: `2px solid ${B.black}`,
    display: "flex", alignItems: "center", justifyContent: "center",
    color: B.black, flexShrink: 0,
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;700;800;900&display=swap');

        .btn-primary { transition: background .2s, transform .15s; }
        .btn-primary:hover { background: #E85D04 !important; transform: translateY(-1px); }
        
        .map-wrapper {
          border: 2px solid #111;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 6px 6px 0px #111;
          transition: filter 0.3s;
        }
        .map-wrapper:hover {
          filter: grayscale(100%) contrast(1.1);
        }

        .contact-info-link {
          font-size: 16px;
          font-weight: 600;
          color: #111;
          text-decoration: none;
          transition: color .2s;
        }
        .contact-info-link:hover {
          color: #E85D04;
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
              Contact Us
            </div>

            <h1 style={{
              fontSize: "clamp(36px, 6vw, 64px)",
              fontWeight: 900, letterSpacing: "-2px",
              lineHeight: 1.05, color: B.black, marginBottom: 20,
            }}>
              We're Here to <span style={{ color: B.orange }}>Support</span> You
            </h1>

            <p style={{
              fontSize: 18, fontWeight: 500,
              color: B.black, opacity: .65,
              lineHeight: 1.7,
            }}>
              Reach out for guidance, consultation, or any questions about your child's journey.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* ==========================================
          2. CONTACT DETAILS & FORM (WHITE)
      ========================================== */}
      <section style={{ background: "#ffffff", padding: "88px 0", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 48, alignItems: "start" }}>
            
            {/* LEFT SIDE INFO */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 style={{
                fontSize: "clamp(28px, 4vw, 40px)",
                fontWeight: 900, letterSpacing: "-1px",
                lineHeight: 1.1, color: B.black, marginBottom: 16,
              }}>
                Get in Touch
              </h2>

              <div style={{ width: 48, height: 3, borderRadius: 2, background: B.orange, marginBottom: 20 }} />

              <p style={{
                fontSize: 16, fontWeight: 400,
                color: B.black, opacity: .7,
                lineHeight: 1.7, marginBottom: 32,
              }}>
                Our team is here to help you understand your child's needs and guide you every step of the way.
              </p>

              {/* Contact List with Professional Icons */}
              <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 32 }}>
                
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div style={contactIconStyle}><MapPinIcon /></div>
                  <p style={{ fontSize: 16, fontWeight: 600, color: B.black, margin: 0 }}>
                    Edgewood, MD 21040
                  </p>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div style={contactIconStyle}><PhoneIcon /></div>
                  <a href="tel:+12402748822" className="contact-info-link" style={{ margin: 0 }}>
                    +1 (240) 274-8822
                  </a>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div style={contactIconStyle}><MailIcon /></div>
                  <a href="mailto:autismcircleinmd@gmail.com" className="contact-info-link" style={{ margin: 0 }}>
                    autismcircleinmd@gmail.com
                  </a>
                </div>

              </div>

             {/* MAP */}
<style>{`
  .map-outer {
    border-radius: 20px;
    overflow: hidden;
    border: 2px solid ${B.black};
    box-shadow: 8px 8px 0px ${B.black};
    background: ${B.yellow};
    transition: transform 0.35s cubic-bezier(.22,.68,0,1.2), box-shadow 0.35s ease;
    animation: mapFadeIn 0.6s ease both;
    position: relative;
  }
  .map-outer:hover {
    transform: translateY(-4px) scale(1.012);
    box-shadow: 12px 12px 0px ${B.black};
  }
  @keyframes mapFadeIn {
    from { opacity: 0; transform: translateY(16px) scale(0.98); }
    to   { opacity: 1; transform: translateY(0) scale(1); }
  }
  .map-label {
    display: flex; align-items: center; gap: 8px;
    padding: 12px 16px; background: ${B.black};
  }
  .map-label-dot {
    width: 8px; height: 8px; border-radius: 50%;
    background: ${B.orange}; flex-shrink: 0;
    animation: mapPulse 2s ease-in-out infinite;
  }
  @keyframes mapPulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50%       { opacity: 0.6; transform: scale(1.4); }
  }
  .map-label-text {
    font-size: 12px; font-weight: 700;
    letter-spacing: .08em; text-transform: uppercase;
    color: ${B.yellow};
  }
  .map-iframe-wrap { position: relative; }
  .map-shimmer {
    position: absolute; inset: 0;
    background: linear-gradient(90deg, ${B.yellow} 0%, #fff8d6 45%, ${B.yellow} 100%);
    background-size: 200% 100%;
    animation: shimmer 1.4s ease infinite, shimmerFadeOut 0.4s ease 1.5s forwards;
    z-index: 2; pointer-events: none;
  }
  @keyframes shimmer {
    from { background-position: 200% 0; }
    to   { background-position: -200% 0; }
  }
  @keyframes shimmerFadeOut { to { opacity: 0; } }
  .map-frame {
    display: block; border: 0; width: 100%; height: 300px;
    transition: filter 0.35s ease;
  }
  .map-outer:hover .map-frame { filter: saturate(1.15) contrast(1.05); }
  .map-footer {
    padding: 10px 16px; background: ${B.yellow};
    border-top: 2px solid ${B.black};
    display: flex; align-items: center; gap: 6px;
  }
  .map-footer-text { font-size: 13px; font-weight: 600; color: ${B.black}; }
  .map-open-link {
    margin-left: auto; font-size: 12px; font-weight: 700;
    color: ${B.black}; text-decoration: none;
    border: 2px solid ${B.black}; border-radius: 99px;
    padding: 4px 12px; background: #fff;
    transition: background .2s, color .2s, border-color .2s;
    fontFamily: "'Plus Jakarta Sans', sans-serif";
  }
  .map-open-link:hover { background: ${B.orange}; color: #fff; border-color: ${B.orange}; }
`}</style>

<div className="map-outer">
  <div className="map-label">
    <span className="map-label-dot" />
    <span className="map-label-text">Our Location — Maryland, USA</span>
  </div>

  <div className="map-iframe-wrap">
    <div className="map-shimmer" />
    <iframe
      className="map-frame"
      src="https://www.google.com/maps?q=Maryland,+USA&output=embed"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Maryland Map"
    />
  </div>

  <div className="map-footer">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
      stroke={B.orange} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
    <span className="map-footer-text">Edgewood, MD 21040</span>
    <a className="map-open-link"
      href="https://maps.google.com/?q=Maryland,USA"
      target="_blank" rel="noopener noreferrer">
      Open Maps →
    </a>
  </div>
</div>
            </motion.div>

            {/* RIGHT SIDE FORM (INVERTED TO YELLOW) */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              style={{
                background: B.yellow,
                border: `2px solid ${B.black}`,
                borderRadius: 20,
                padding: "40px 32px",
                boxShadow: "8px 8px 0px #111",
              }}
            >
              <h3 style={{
                fontSize: 22, fontWeight: 900,
                color: B.black, letterSpacing: "-0.5px", marginBottom: 24,
              }}>
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={form.name}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  style={inputStyle}
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  style={inputStyle}
                  required
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  style={inputStyle}
                />

                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={form.message}
                  onChange={handleChange}
                  rows="4"
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  style={{ ...inputStyle, resize: "vertical" }}
                  required
                ></textarea>

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary"
                  style={{
                    width: "100%",
                    padding: "16px",
                    borderRadius: 12,
                    border: `2px solid ${B.black}`,
                    background: B.black,
                    color: B.yellow,
                    fontSize: 15,
                    fontWeight: 700,
                    cursor: loading ? "not-allowed" : "pointer",
                    opacity: loading ? 0.7 : 1,
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                  }}
                >
                  {loading ? "Sending..." : "Send Message →"}
                </motion.button>
              </form>
            </motion.div>

          </div>
        </Container>
      </section>

      {/* ==========================================
          3. CTA SECTION (YELLOW)
      ========================================== */}
    

      {/* ==========================================
          4. ATTRACTIVE SUCCESS/ERROR MODAL
      ========================================== */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
            style={{
              position: "fixed", inset: 0,
              background: "rgba(17, 17, 17, 0.6)",
              backdropFilter: "blur(4px)",
              display: "flex", alignItems: "center", justifyContent: "center",
              zIndex: 100,
              padding: 20,
            }}
          >
            <motion.div
              initial={{ scale: 0.85, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.85, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: "#ffffff",
                border: `2px solid ${B.black}`,
                borderRadius: 24,
                padding: "48px 40px",
                maxWidth: 440,
                width: "100%",
                boxShadow: "10px 10px 0px #111",
                textAlign: "center",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              {/* Animated Icon Container */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                style={{
                  width: 80, height: 80, borderRadius: "50%",
                  background: isError ? "#fee2e2" : B.yellow,
                  border: `3px solid ${B.black}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 28px",
                }}
              >
                {isError ? (
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                ) : (
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={B.black} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </motion.div>

              <h3 style={{
                fontSize: 26, fontWeight: 900,
                color: B.black, letterSpacing: "-0.5px", marginBottom: 12,
              }}>
                {isError ? "Oops!" : "Message Sent!"}
              </h3>

              <p style={{
                fontSize: 15, fontWeight: 400,
                color: B.black, opacity: 0.7, lineHeight: 1.7, marginBottom: 36,
              }}>
                {modalMessage}
              </p>

              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={() => setShowModal(false)}
                className="btn-primary"
                style={{
                  display: "inline-flex", alignItems: "center",
                  padding: "14px 36px", borderRadius: 99,
                  fontSize: 15, fontWeight: 700,
                  background: B.black, color: B.yellow,
                  border: "none", cursor: "pointer",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}
              >
                {isError ? "Try Again" : "Got it, Thanks!"}
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </>
  );
};

export default Contact;