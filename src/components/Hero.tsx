"use client";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center items-center text-center px-6 relative overflow-hidden pb-24">
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#ff8a00]/10 via-[#da1b60]/10 to-[#89216b]/10 blur-[80px] sm:blur-[100px] lg:blur-[150px] rounded-full opacity-50"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1.5, opacity: 0.7 }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "mirror" }}
      />

      {/* Heading */}
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl font-bold text-white relative"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        whileHover={{ y: -5 }}
      >
        Hi, I'm{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 animate-gradient">
          Rajvardhan
        </span>{" "}
        👋
      </motion.h1>

      {/* Description */}
      <motion.p
        className="mt-4 text-base sm:text-lg md:text-xl text-gray-300 max-w-xl md:max-w-2xl relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        A passionate{" "}
        <span className="text-accent font-semibold">full-stack developer</span>{" "}
        building cool web apps.
      </motion.p>

      {/* Button */}
      <motion.a
        href="/projects"
        className="mt-6 px-5 py-2 sm:px-6 sm:py-3 bg-primary text-white rounded-lg shadow-lg hover:shadow-orange-500/50 transition-all duration-300 hover:scale-110 text-sm sm:text-base"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1, rotate: 1 }}
      >
        View My Work 🚀
      </motion.a>
    </section>
  );
};

export default Hero;
