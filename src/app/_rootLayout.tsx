"use client";
import { motion } from "framer-motion";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayoutClient({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-[#121212] text-white">
        {/* Animated Gradient Background */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-[#ff8a00]/20 via-[#da1b60]/20 to-[#89216b]/20 
            blur-[90px] sm:blur-[120px] lg:blur-[180px] rounded-full opacity-60"
            initial={{ scale: 0.8, opacity: 0, rotate: 0 }}
            animate={{ scale: 1.6, opacity: 0.8, rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
          />
        </div>

        <Navbar />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
