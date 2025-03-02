import type { Metadata } from "next";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Rajvardhan Singh | Portfolio",
  description: "Full-Stack Developer | MERN Stack Enthusiast",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-[#121212] text-white">
        <Navbar />
        <main className="flex-grow pt-20">{children}</main> {/* Push content down */}
        <Footer />
      </body>
    </html>
  );
}
