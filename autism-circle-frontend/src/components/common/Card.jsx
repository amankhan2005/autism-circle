import { motion } from "framer-motion";

const Card = ({
  title,
  description,
  icon,
  className = "",
}) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`bg-white border border-[#E6F0FA] p-6 rounded-2xl shadow-sm hover:shadow-md transition ${className}`}
    >
      {icon && (
        <div className="mb-4 text-secondary text-3xl">
          {icon}
        </div>
      )}

      <h3 className="text-xl font-semibold text-textDark mb-2">
        {title}
      </h3>

      <p className="text-textLight text-sm leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

export default Card;