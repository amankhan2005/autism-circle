import { motion } from "framer-motion";

const Button = ({
  text = "Click Me",
  variant = "primary", // primary | outline
  onClick,
  className = "",
}) => {
  const baseStyle =
    "px-6 py-3 rounded-xl font-semibold transition duration-300";

  const variants = {
    primary: "bg-gradient-main text-white shadow-md",
    outline:
      "border border-primary text-primary hover:bg-primary hover:text-white",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {text}
    </motion.button>
  );
};

export default Button;