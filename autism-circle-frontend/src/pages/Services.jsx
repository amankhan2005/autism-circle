import { motion } from "framer-motion";
import Container from "../components/layout/Container";

import abaImg from "../assets/services/aba.jpg";
import parentImg from "../assets/services/parent.webp";
import behaviorImg from "../assets/services/behavior.jpg";
import socialImg from "../assets/services/social.webp";
import dailyImg from "../assets/services/daily.webp";
import homeImg from "../assets/services/home.jpg";

const B = {
  yellow: "#F9C20A",
  orange: "#E85D04",
  black: "#111111",
};

const services = [
  {
    title: "ABA Therapy (Applied Behavior Analysis)",
    image: abaImg,
    description: "Applied Behavior Analysis (ABA Therapy) is one of the most trusted and evidence-based autism therapy approaches used worldwide to support children with autism spectrum disorder (ASD). Our ABA therapy programs are carefully designed to improve communication skills, social interaction, learning ability, and independent behavior. Each child receives a personalized therapy plan based on their strengths, developmental level, and specific challenges. Our certified therapists use structured techniques such as positive reinforcement, task analysis, and behavior shaping to teach essential life skills step by step. We focus on areas like language development, attention, emotional regulation, and daily routines. Progress is continuously monitored using data-driven methods, ensuring measurable improvement over time. ABA therapy sessions can be conducted at home, in clinics, or in school environments to promote consistency and real-life application. We also involve parents in the therapy process so they can reinforce skills outside sessions. Our goal is to empower children with autism to build confidence, improve independence, and reach their full potential through structured, compassionate, and scientifically proven ABA therapy programs.",
  },
  {
    title: "Parent & Caregiver Training",
    image: parentImg,
    description: "Parent and caregiver training plays a vital role in the success of autism therapy by ensuring that learning continues beyond structured sessions. Our programs are designed to equip parents, guardians, and caregivers with practical tools and proven strategies to support their child’s development in everyday life. We focus on teaching techniques based on Applied Behavior Analysis (ABA), including positive reinforcement, behavior management, and communication strategies. Through guided sessions, caregivers learn how to handle challenging behaviors, build consistent routines, and encourage positive habits at home. We provide real-life examples, hands-on coaching, and personalized support tailored to each family’s unique situation. This training helps create a structured and supportive environment where children feel safe and motivated to learn. By actively involving families, we ensure that therapy outcomes are more effective and long-lasting. Parents also gain confidence in understanding their child’s needs and responding appropriately. Our collaborative approach strengthens the parent-child relationship while promoting continuous progress. With the right guidance and support, families become an essential part of their child’s growth journey, helping them achieve independence and success in daily life.",
  },
  {
    title: "Positive Behaviour Support",
    image: behaviorImg,
    description: "Positive Behaviour Support (PBS) is a comprehensive and person-centered approach designed to understand and improve challenging behaviors in children with autism. Instead of focusing only on the behavior, we identify the underlying causes such as communication difficulties, environmental triggers, or emotional needs. Our therapists conduct detailed assessments to develop personalized intervention plans that promote positive alternatives. We teach children functional communication skills, coping strategies, and emotional regulation techniques to replace challenging behaviors with constructive actions. This approach not only reduces problem behaviors but also enhances the child’s overall well-being and quality of life. Positive Behaviour Support is implemented across different environments, including home and school, to ensure consistency. We work closely with parents, caregivers, and teachers to maintain a unified approach. Our methods are evidence-based, respectful, and focused on long-term success. By encouraging positive behaviors and understanding each child’s unique needs, we help children build confidence, improve relationships, and navigate daily challenges more effectively. This leads to a more supportive and stress-free environment for both the child and their family.",
  },
  {
    title: "Social Skills Groups",
    image: socialImg,
    description: "Social Skills Groups are structured therapy sessions designed to help children with autism develop essential communication and interaction skills in a supportive and engaging environment. These group sessions provide opportunities for children to practice real-life social situations such as making friends, sharing, taking turns, and understanding social cues. Guided by experienced therapists, children participate in interactive activities, role-playing, and group exercises that promote teamwork and confidence. Our programs are tailored to different age groups and developmental levels, ensuring personalized support for every child. We focus on improving both verbal and non-verbal communication, emotional understanding, and problem-solving abilities. Social Skills Groups also help reduce anxiety in social settings and build self-esteem by providing a safe space for learning and growth. Parents receive regular feedback and strategies to reinforce these skills at home. By participating in these sessions, children gain the confidence to interact with others, build meaningful relationships, and become more independent in social environments. This program plays a key role in helping children successfully integrate into school and community life.",
  },
  {
    title: "Daily Living Skills Training",
    image: dailyImg,
    description: "Daily Living Skills Training focuses on teaching essential life skills that help children with autism become more independent and confident in their everyday routines. These skills include personal hygiene, dressing, eating, toileting, and safety awareness. Our structured programs break down each task into small, manageable steps, making it easier for children to learn and master new skills. Using evidence-based techniques such as task analysis and positive reinforcement, our therapists provide consistent guidance and encouragement. Each program is tailored to the child’s developmental level and specific needs, ensuring steady progress. We also involve parents and caregivers, providing them with strategies to reinforce these skills at home. This consistency helps children apply what they learn in real-life situations. Developing daily living skills not only improves independence but also boosts self-confidence and reduces reliance on others. Our goal is to empower children to take part in their daily activities with ease and confidence, improving their overall quality of life and preparing them for future independence.",
  },
  {
    title: "Home-Based Autism Support",
    image: homeImg,
    description: "Home-Based Autism Support provides personalized therapy services in the comfort of your home, allowing children to learn in a familiar and stress-free environment. This approach makes it easier for children to engage in therapy and apply new skills in real-life situations. Our therapists work closely with the child and family to create customized programs that focus on communication, behavior management, social skills, and daily living skills. By integrating therapy into everyday routines, children experience more consistent learning and faster progress. Home-based support also allows therapists to address specific challenges that occur in the child’s natural environment. Parents and caregivers receive hands-on guidance and training, enabling them to support their child effectively outside therapy sessions. This collaborative approach ensures long-term success and meaningful outcomes. Home-based therapy is flexible, personalized, and highly effective for many families. Our goal is to create a supportive environment where children can thrive, build independence, and develop the skills needed for a successful and fulfilling life.",
  },
];

const Services = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;700;800;900&display=swap');

        /* Responsive Grid Handling */
        .service-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 48px;
          align-items: center;
        }
        @media (max-width: 768px) {
          .service-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .order-swap {
            order: -1; /* Pushes image above text on mobile */
          }
          .service-img-wrapper {
            height: 280px !important;
          }
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
              What We Do
            </div>

            <h1 style={{
              fontSize: "clamp(36px, 6vw, 64px)",
              fontWeight: 900, letterSpacing: "-2px",
              lineHeight: 1.05, color: B.black, marginBottom: 20,
            }}>
              Autism Therapy Services Designed for <span style={{ color: B.orange }}>Every Child</span>
            </h1>

            <p style={{
              fontSize: 18, fontWeight: 500,
              color: B.black, opacity: .65,
              lineHeight: 1.7, marginBottom: 40,
            }}>
              Personalized, evidence-based autism support programs focused on communication, behavior, and independence.
            </p>

            <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
              <motion.a href="/contact-us" className="btn-primary" whileTap={{ scale: 0.97 }} style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "14px 32px", borderRadius: 99,
                fontSize: 14, fontWeight: 700,
                background: B.black, color: B.yellow, textDecoration: "none",
              }}>
                Book Free Consultation →
              </motion.a>

              <motion.a href="/about-us" className="btn-outline" whileTap={{ scale: 0.97 }} style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "14px 32px", borderRadius: 99,
                fontSize: 14, fontWeight: 700,
                background: "transparent", color: B.black,
                border: `2px solid ${B.black}`, textDecoration: "none",
              }}>
                Know More →
              </motion.a>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ==========================================
          2. DETAILED SERVICES (ALTERNATING)
      ========================================== */}
      {services.map((service, index) => {
        // Strict Alternation: Even index = White BG, Odd index = Yellow BG
        const bgColor = index % 2 === 0 ? "#ffffff" : B.yellow; 
        const isReversed = index % 2 !== 0;

        return (
          <section key={index} style={{ background: bgColor, padding: "88px 0", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            <Container>
              <div className={`service-grid ${isReversed ? "order-swap-wrapper" : ""}`}>
                
                {/* IMAGE BLOCK */}
                <motion.div
                  initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className={isReversed ? "order-swap" : ""}
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <div className="service-img-wrapper" style={{
                    background: "#fff",
                    border: `2px solid ${B.black}`,
                    borderRadius: 20,
                    overflow: "hidden",
                    boxShadow: "8px 8px 0px #111",
                    height: "420px",
                    width: "100%",
                  }}>
                    <img
                      src={service.image}
                      alt={service.title}
                      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    />
                  </div>
                </motion.div>

                {/* TEXT BLOCK */}
                <motion.div
                  initial={{ opacity: 0, x: isReversed ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}
                >
                  <h2 style={{
                    fontSize: "clamp(24px, 3.5vw, 40px)",
                    fontWeight: 900, letterSpacing: "-1px",
                    lineHeight: 1.1, color: B.black, marginBottom: 16,
                  }}>
                    {service.title}
                  </h2>

                  <div style={{ width: 48, height: 3, borderRadius: 2, background: B.orange, marginBottom: 20 }} />

                  <p style={{
                    fontSize: 16, fontWeight: 400,
                    color: B.black, opacity: .7,
                    lineHeight: 1.8, marginBottom: 32,
                  }}>
                    {service.description}
                  </p>

                  <div style={{ width: "fit-content" }}>
                    <motion.a href="/contact-us" className="btn-primary" whileTap={{ scale: 0.97 }} style={{
                      display: "inline-flex", alignItems: "center", gap: 8,
                      padding: "12px 28px", borderRadius: 99,
                      fontSize: 14, fontWeight: 700,
                      background: B.black, color: B.yellow, textDecoration: "none",
                    }}>
                      Learn More →
                    </motion.a>
                  </div>
                </motion.div>

              </div>
            </Container>
          </section>
        );
      })}

      {/* ==========================================
          3. CTA SECTION (WHITE)
          Note: Set to white background to provide clear visual 
          "white space" separation from the Yellow Service 5 above it.
      ========================================== */}
      <section style={{ background: "#ffffff", padding: "100px 0", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
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
              Start Your Child’s <span style={{ color: B.orange }}>Growth Journey</span> Today
            </h2>

            <div style={{ width: 48, height: 3, borderRadius: 2, background: B.orange, margin: "0 auto 24px" }} />

            <p style={{
              fontSize: 16, fontWeight: 500,
              color: B.black, opacity: .7,
              lineHeight: 1.7, marginBottom: 40,
            }}>
              Get expert autism therapy support tailored to your child’s needs.
            </p>

            <motion.a href="/contact-us" className="btn-primary" whileTap={{ scale: 0.97 }} style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "14px 32px", borderRadius: 99,
              fontSize: 14, fontWeight: 700,
              background: B.black, color: B.yellow, textDecoration: "none",
            }}>
              Schedule Free Consultation →
            </motion.a>
          </motion.div>
        </Container>
      </section>

    </>
  );
};

export default Services;