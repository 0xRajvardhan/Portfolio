"use client";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center items-center text-center px-6 relative overflow-hidden pb-24">
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#ff8a00]/10 via-[#da1b60]/10 to-[#89216b]/10 blur-[100px] rounded-full opacity-50"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1.5, opacity: 0.7 }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "mirror" }}
      />

      {/* Heading */}
      <motion.h2
        className="text-6xl font-bold text-white relative"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        whileHover={{ y: -5 }}
      >
        Let's{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 animate-gradient">
          Connect
        </span>{" "}
        🚀
      </motion.h2>

      {/* Description */}
      <motion.p
        className="mt-4 text-lg text-gray-300 max-w-2xl relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        I'm always excited to{" "}
        <span className="text-accent font-semibold">collaborate</span> and build
        something amazing! Feel free to drop me a message.
      </motion.p>

      {/* Contact Button */}
      <motion.a
        href="mailto:singhrajvardhan2003@gmail.com"
        className="mt-6 px-6 py-3 bg-primary text-white rounded-lg shadow-lg hover:shadow-orange-500/50 transition-all duration-300 hover:scale-110"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1, rotate: 1 }}
      >
        Contact Me ✉️
      </motion.a>
    </section>
  );
};

export default Contact;
