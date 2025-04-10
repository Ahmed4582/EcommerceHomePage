import React from "react";
import { Search, X } from "lucide-react";
import { motion } from "framer-motion";

const MobileMenu = ({ isOpen, onClose }) => {
  const categories = [
    "Electronics",
    "Fashion",
    "Home & Garden",
    "Sports",
    "Beauty",
  ];

  if (!isOpen) return null;

  return (
    <motion.div
      className="lg:hidden bg-[#1b2435] border-b fixed inset-0 z-40 mt-16 overflow-y-auto"
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ type: "tween" }}
    >
      <div className="px-4 py-4">
        <div className="relative mb-4 mt-16">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
          <Search
            className="absolute right-3 top-2.5 text-gray-400"
            size={20}
          />
        </div>
        <nav className="space-y-2">
          {categories.map((category, index) => (
            <motion.a
              key={category}
              href="#"
              className="block w-full text-left py-3 px-2 text-gray-200 font-medium hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 + index * 0.05 }}
            >
              {category}
            </motion.a>
          ))}
        </nav>
      </div>
    </motion.div>
  );
};

export default MobileMenu;
