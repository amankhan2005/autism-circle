import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const B = {
  yellow: "#F9C20A",
  orange: "#E85D04",
  black: "#111111",
};

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      onClick={() => setOpen(!open)}
      /* Hover animations applied to the whole card */
      whileHover={{
        y: -2,
        boxShadow: "4px 4px 0px #111",
      }}
      style={{
        background: "#ffffff",
        border: `2px solid ${B.black}`,
        borderRadius: 16,
        padding: "24px",
        marginBottom: 12,
        cursor: "pointer",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        transition: "background 0.2s", // Smooth background transition for nested elements
      }}
    >
      {/* Question Row */}
      <div style={{ 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center", 
        gap: 16 
      }}>
        <h3 style={{ 
          fontSize: 17, 
          fontWeight: 700, 
          color: B.black, 
          letterSpacing: "-0.3px",
          margin: 0 
        }}>
          {question}
        </h3>

        {/* Rotating Icon Box */}
        <motion.div
          animate={{ rotate: open ? 45 : 0 }} // Rotates + into an x
          transition={{ duration: 0.2 }}
          style={{
            width: 28, 
            height: 28, 
            borderRadius: 6,
            background: open ? B.black : B.yellow, // Inverts color when open
            border: `2px solid ${B.black}`,
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center",
            color: open ? B.yellow : B.black,
            fontWeight: 900, 
            fontSize: 18, 
            flexShrink: 0,
          }}
        >
          +
        </motion.div>
      </div>

      {/* Answer Row */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <div style={{ 
              width: 40, 
              height: 3, 
              borderRadius: 2, 
              background: B.orange, 
              margin: "16px 0 12px" // Acts as a visual divider between Q & A
            }} />
            
            <p style={{ 
              fontSize: 15, 
              fontWeight: 400, 
              color: B.black, 
              opacity: 0.7, 
              lineHeight: 1.75,
              margin: 0 
            }}>
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FAQItem;