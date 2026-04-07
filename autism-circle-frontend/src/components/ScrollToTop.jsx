import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const B = {
  yellow: "#F9C20A",
  orange: "#E85D04",
  black: "#111111",
};

export default function ScrollToTop({
  threshold = 250,
  bottom = '2rem',
  right = '1.5rem',
  size = 52,
  ariaLabel = 'Scroll to top',
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      if (window.scrollY > threshold) setVisible(true);
      else setVisible(false);
    }

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  function handleClick() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const wrapperStyle = {
    position: 'fixed',
    right,
    bottom,
    zIndex: 9999,
  };

  return (
    <div style={wrapperStyle} aria-hidden={!visible}>
      <AnimatePresence>
        {visible && (
          <motion.button
            onClick={handleClick}
            aria-label={ariaLabel}
            title={ariaLabel}
            initial={{ opacity: 0, scale: 0.4, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.4, y: 24 }}
            transition={{
              type: 'spring',
              stiffness: 400,
              damping: 22,
            }}
            whileHover={{
              scale: 1.12,
              y: -3,
              boxShadow: '5px 7px 0px #111',
              background: B.orange,
            }}
            whileTap={{ scale: 0.92, boxShadow: '2px 2px 0px #111' }}
            className="flex items-center justify-center focus:outline-none cursor-pointer"
            style={{
              width: size,
              height: size,
              borderRadius: '50%',
              background: B.black,
              color: B.yellow,
              border: `2.5px solid ${B.black}`,
              boxShadow: '4px 4px 0px #111',
              transition: 'background 0.2s',
            }}
          >
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              style={{ width: size * 0.45, height: size * 0.45 }}
              aria-hidden="true"
              animate={{ y: [0, -3, 0] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'easeInOut',
              }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            </motion.svg>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}