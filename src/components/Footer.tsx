"use client";

import { motion } from "framer-motion";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[75%] flex flex-col md:flex-row justify-center md:justify-between items-center px-6 py-4 backdrop-blur-lg bg-white/10 shadow-lg rounded-xl border border-white/20 transition-all"
    >
      {/* Name */}
      <motion.div
        className="text-lg font-semibold flex items-center space-x-2 text-white mb-3 md:mb-0"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
      </motion.div>

      {/* Social Links */}
      <div className="flex space-x-6 text-2xl">
        <motion.a
          href="https://twitter.com/rajvardhansd"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          className="text-gray-400 hover:text-blue-400 transition"
        >
          <FaTwitter />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/rajvardhan-singh-dodiya/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          className="text-gray-400 hover:text-blue-600 transition"
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
          href="https://github.com/rajvardhansd"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          className="text-gray-400 hover:text-gray-200 transition"
        >
          <FaGithub />
        </motion.a>
      </div>

      {/* Copyright */}
      <motion.p
        className="text-sm text-gray-400 mt-3 md:mt-0 text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        © {new Date().getFullYear()} Rajvardhan Singh. All rights reserved.
      </motion.p>
    </motion.footer>
  );
}
