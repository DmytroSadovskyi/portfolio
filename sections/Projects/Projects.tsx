'use client';

import { motion } from 'framer-motion';

import { ProjectsList } from '@/components/common/ProjectsList';
import { projects } from '@/projects';

export const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-gray-950 via-blue-900/50 to-purple-900/50"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
        >
          My Projects
        </motion.h2>
        <ProjectsList projects={projects} />
      </div>
    </section>
  );
};
