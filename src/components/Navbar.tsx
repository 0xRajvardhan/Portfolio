"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; // Icons for mobile menu

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      className="
        w-full px-6 py-3 flex justify-between items-center 
        bg-black/10 backdrop-blur-lg shadow-lg border border-white/20 rounded-b-lg md:rounded-xl
        transition-all z-50 
        md:fixed md:top-4 md:left-1/2 md:-translate-x-1/2 md:w-[90%]  
      "
    >
      {/* Logo */}
      <h1 className="text-2xl font-bold text-white tracking-wide">
        Full-Stack Dev <span className="text-primary">🚀</span>
      </h1>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-4">
        {["Home", "Projects", "Contacts"].map((item) => (
          <Link key={item} href={item === "Home" ? "/" : `/${item.toLowerCase()}`}>
            <motion.span
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 text-sm md:text-base font-medium text-white bg-black/10 
              border border-white/20 rounded-xl transition-all shadow-md 
              hover:shadow-orange-500/50"
            >
              {item}
            </motion.span>
          </Link>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 rounded-lg bg-black/10 text-white hover:bg-black/20 transition"
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
            className="
              absolute top-18 left-1/2 -translate-x-1/2 w-[90%] max-w-sm 
              bg-black/10 backdrop-blur-xl border border-white/20 shadow-lg 
              rounded-xl p-4 flex flex-col items-center gap-3 md:hidden
            "
          >
            {["Home", "Projects", "Contacts"].map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)} // Close menu on click
              >
                <motion.span
                  whileHover={{ scale: 1.05, boxShadow: "0px 0px 12px rgba(255, 140, 0, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="
                    px-6 py-1 text-white text-lg font-medium w-full text-center 
                    bg-black/10 rounded-lg hover:bg-black/20 transition-all
                  "
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
