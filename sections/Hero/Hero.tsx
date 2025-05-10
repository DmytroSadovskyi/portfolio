'use client';

import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-[url(/images/5166950.jpg)] bg-cover bg-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center px-4"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Full Stack Developer
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto text-gray-300">
          I build innovative web applications using Next.js, TypeScript,
          Node.js, and modern technologies.
        </p>
        <Button
          asChild
          size="lg"
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
        >
          <Link href="#projects">My Projects</Link>
        </Button>
      </motion.div>
    </section>
  );
};
