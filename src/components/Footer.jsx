import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const footerLinks = [
    {
      title: "About Us",
      links: ["Our Story", "Careers", "Press"],
    },
    {
      title: "Customer Service",
      links: ["Contact Us", "Shipping", "Returns"],
    },
    {
      title: "Privacy & Terms",
      links: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
    },
    {
      title: "Social Media",
      links: ["Facebook", "Twitter", "Instagram"],
    },
    {
      title: "Payment Methods",
      links: ["Credit Cards", "PayPal", "Crypto"],
    },
    {
      title: "Download App",
      links: ["iOS App", "Android App", "Windows App"],
    },
  ];

  return (
    <footer className="bg-gray-900 text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li
                    key={link}
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <p>
            &copy; {new Date().getFullYear()} ShopEase. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
