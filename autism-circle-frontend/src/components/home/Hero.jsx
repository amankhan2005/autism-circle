import { Link } from "react-router-dom";
import heroImg from "../../assets/images/hero.png";

const B = {
  primary: "#F9C20A",
  orange: "#E85D04",
  black: "#111111",
  white: "#ffffff",
  muted: "rgba(0,0,0,0.50)",
};

const stats = [
  { value: "1,200+", label: "Children Empowered" },
  { value: "250+", label: "Families Supported" },
  { value: "15+", label: "Expert Therapists" },
];

const Hero = () => {
  return (
    <section
      className="relative   md:py-0 overflow-hidden"
      style={{ background: B.primary, fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      {/* Google Font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes drawLine {
          from { stroke-dashoffset: 220; }
          to   { stroke-dashoffset: 0; }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50%       { transform: scale(1.7); opacity: 0.4; }
        }

        .hero-btn-primary {
          background-color: #111111;
          color: #F9C20A;
          border: none;
          transition: background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
        }
        .hero-btn-primary:hover {
          background-color: #E85D04;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(232,93,4,0.35);
        }

        .hero-btn-secondary {
          background-color: transparent;
          color: #111111;
          border: 2px solid #111111;
          transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
        }
        .hero-btn-secondary:hover {
          background-color: #111111;
          color: #F9C20A;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.18);
        }

        .stat-value {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 900;
          font-size: 1.6rem;
          letter-spacing: -1px;
          color: #111111;
          line-height: 1;
        }
        .stat-label {
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-top: 4px;
        }
      `}</style>

      {/* Subtle radial glow — replaces grid, adds warmth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 60% 50%, rgba(255,255,255,0.18) 0%, transparent 70%)",
        }}
      />

      {/* Decorative blurred circle bottom-left */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 340,
          height: 340,
          borderRadius: "50%",
          background: "rgba(232,93,4,0.13)",
          filter: "blur(80px)",
          bottom: -80,
          left: -80,
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 min-h-screen flex items-center">
        <div className="grid md:grid-cols-2 items-center gap-10 w-full">

          {/* ── LEFT COLUMN ── */}
          <div className="text-center md:text-left">

            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-6 uppercase tracking-widest"
              style={{
                backgroundColor: B.black,
                color: B.primary,
                animation: "fadeUp 0.5s ease both",
              }}
            >
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  backgroundColor: B.orange,
                  display: "inline-block",
                  flexShrink: 0,
                  animation: "pulse 1.6s ease-in-out infinite",
                }}
              />
              Compassionate · Evidence-Based · Trusted
            </div>

            {/* Headline */}
            <h1
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(2.4rem, 6vw, 5rem)",
                lineHeight: 1.0,
                letterSpacing: "-2px",
                color: B.black,
                marginBottom: "1.25rem",
                animation: "fadeUp 0.6s 0.1s ease both",
                opacity: 0,
                animationFillMode: "forwards",
              }}
            >
              Autism Therapy &amp; Support for{" "}
              <span className="relative inline-block" style={{ color: B.orange }}>
                Children
                {/* Animated underline */}
                <svg
                  viewBox="0 0 200 12"
                  className="absolute left-0 w-full"
                  style={{ height: 11, bottom: -3 }}
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 8 Q50 3 100 8 Q150 13 198 6"
                    stroke={B.orange}
                    strokeWidth="3.5"
                    fill="none"
                    strokeLinecap="round"
                    style={{
                      strokeDasharray: 220,
                      strokeDashoffset: 220,
                      animation: "drawLine 1s 0.7s ease forwards",
                    }}
                  />
                </svg>
              </span>
            </h1>

            {/* Body copy */}
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.75,
                marginTop: "1.5rem",
                maxWidth: 460,
                marginLeft: "auto",
                marginRight: "auto",
                fontWeight: 500,
                color: B.black,
                opacity: 0.68,
                animation: "fadeUp 0.6s 0.2s ease both",
                animationFillMode: "forwards",
              }}
              className="md:mx-0"
            >
              At{" "}
              <strong style={{ color: B.orange, opacity: 1, fontWeight: 800 }}>
                Autism Circle
              </strong>
              , we provide personalised therapy and compassionate care to help
              children grow, communicate, and live confidently every day.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex gap-3 mt-8 flex-wrap justify-center md:justify-start"
              style={{
                animation: "fadeUp 0.6s 0.3s ease both",
                animationFillMode: "forwards",
                opacity: 0,
              }}
            >
              <Link to="/about-us">
                <button
                  className="hero-btn-primary px-7 py-3.5 rounded-full text-sm font-bold cursor-pointer"
                >
                  Learn More →
                </button>
              </Link>

              <Link to="/contact-us">
                <button
                  className="hero-btn-secondary px-7 py-3.5 rounded-full text-sm font-bold cursor-pointer"
                >
                  Book Free Consultation
                </button>
              </Link>
            </div>

            {/* Stats Row */}
            <div
              className="flex gap-0 mt-8 pt-6 justify-center md:justify-start"
              style={{
                borderTop: "1.5px solid rgba(0,0,0,0.13)",
                animation: "fadeUp 0.6s 0.45s ease both",
                animationFillMode: "forwards",
                opacity: 0,
              }}
            >
              {stats.map((s, i) => (
                <div key={i} className="flex items-stretch gap-0">
                  <div>
                    <p className="stat-value">{s.value}</p>
                    <p className="stat-label" style={{ color: B.muted }}>
                      {s.label}
                    </p>
                  </div>
                  {i < stats.length - 1 && (
                    <div
                      className="mx-6 self-stretch"
                      style={{ width: "1.5px", backgroundColor: "rgba(0,0,0,0.13)" }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT IMAGE (HIDDEN ON MOBILE) ── */}
          <div
            className="hidden md:block relative w-full"
            style={{ height: "clamp(280px, 50vw, 100vh)" }}
          >
            <img
              src={heroImg}
              alt="Autism Circle therapy session"
              className="absolute right-0 top-0 w-full h-full object-contain"
              style={{ animation: "fadeUp 0.8s 0.2s ease both", animationFillMode: "forwards", opacity: 0 }}
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;