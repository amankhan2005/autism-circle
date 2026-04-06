import { motion } from "framer-motion";
import Button from "../common/Button";

const ServiceCard = ({ title, description }) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white p-8 rounded-2xl shadow-sm border border-[#E6F0FA]"
    >
      <h3 className="text-2xl font-semibold text-secondary mb-4">
        {title}
      </h3>

      <p className="text-textLight mb-6 leading-relaxed">
        {description}
      </p>

      <Button text="Enquire Now" />
    </motion.div>
  );
};

export default ServiceCard;