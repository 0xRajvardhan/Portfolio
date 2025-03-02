"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; // Icons for mobile menu

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[75%] flex justify-between items-center px-6 py-3 backdrop-blur-lg bg-white/10 shadow-lg rounded-xl border border-white/20 transition-all z-50">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-white tracking-wide">
        Full-Stack Dev <span className="text-primary">🚀</span>
      </h1>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-4">
        {["Home", "Projects", "Contacts"].map((item) => (
          <Link key={item} href={item === "Home" ? "/" : `/${item.toLowerCase()}`}>
            <motion.span
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 text-sm md:text-base font-medium text-white bg-white/10 border border-white/20 rounded-xl transition-all shadow-md hover:shadow-orange-500/50"
            >
              {item}
            </motion.span>
          </Link>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-18 left-1/2 transform -translate-x-1/2 w-[85%] bg-slate/20 backdrop-blur-xl border border-white/20 shadow-lg rounded-xl p-4 flex flex-col items-center gap-3 md:hidden"
          >
            {["Home", "Projects", "Contacts"].map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)} // 👈 Close menu on click
              >
                <motion.span
                  whileHover={{ scale: 1.05, boxShadow: "0px 0px 12px rgba(255, 140, 0, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-1 text-white text-lg font-medium w-full text-center bg-white/10 rounded-lg hover:bg-white/20 transition-all"
                >
                  {item}
                </motion.span>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
