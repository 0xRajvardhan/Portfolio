"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { projects } from "@/data/projects"; // Importing projects from external file

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-6 relative overflow-hidden">
      {/* Heading */}
      <h2 className="text-4xl font-extrabold text-white text-center mb-10 tracking-wide relative">
        My{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 animate-gradient">
          Projects
        </span>
      </h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <motion.a
          key={index}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group bg-white/10 border border-white/20 text-white p-6 rounded-2xl shadow-lg backdrop-filter backdrop-blur-lg transition-all block overflow-hidden"
          whileHover={{ y: -5, boxShadow: "0px 10px 20px rgba(255, 140, 0, 0.1)" }}
        >
          {/* Project Image */}
          <div className="w-full h-48 relative rounded-lg overflow-hidden">
            <Image
              src={project.image || "/public/images/fallback.png"}
              alt={project.name}
              layout="fill"
              objectFit="cover"
              className="group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        
          {/* Title & Description */}
          <h3 className="text-2xl font-semibold relative mt-4">
            {project.name}
            <motion.div
              className="w-0 h-[2px] bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 mt-1"
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.4 }}
            />
          </h3>
        
          <p className="text-gray-300 mt-1">{project.description}</p>
        </motion.a>        
        ))}
      </div>
    </section>
  );
};

export default Projects;
