import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const BrandCard = ({ brand, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <motion.div
      ref={ref}
      className="bg-white p-4 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
    >
      <img
        src={brand.logo}
        alt={brand.name}
        className="w-16 h-16 mx-auto mb-3 object-contain"
      />
      <p className="font-medium text-gray-800">{brand.name}</p>
    </motion.div>
  );
};

export default BrandCard;
