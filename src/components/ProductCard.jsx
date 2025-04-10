import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Heart, ShoppingCart } from "lucide-react";

const ProductCard = ({ product, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <motion.div
      ref={ref}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow hover:bg-primary-50">
          <Heart size={20} className="text-gray-600 hover:text-primary-600" />
        </button>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-800">{product.name}</h3>
        <div className="flex justify-between items-center mt-3">
          <p className="text-lg font-bold text-primary-600">${product.price}</p>
          <button className="p-2 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-colors">
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
