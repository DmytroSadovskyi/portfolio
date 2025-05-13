'use client';

import Image from 'next/image';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { TechStackList } from '@/components/common/TechStackList';
import {
  SiMongodb,
  SiPostgresql,
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiTailwindcss,
} from 'react-icons/si';
import { FaGitAlt, FaNodeJs, FaReact } from 'react-icons/fa';
import image from '../../public/images/avatar.jpg';

const techStackItems = [
  { name: 'React', icon: <FaReact className="text-4xl text-blue-400" /> },
  {
    name: 'TypeScript',
    icon: <SiTypescript className="text-4xl text-blue-600" />,
  },
  {
    name: 'Next.js',
    icon: <SiNextdotjs className="text-4xl text-white" />,
  },
  {
    name: 'Tailwind CSS',
    icon: <SiTailwindcss className="text-4xl text-blue-500" />,
  },
  ,
  { name: 'Node.js', icon: <FaNodeJs className="text-4xl text-green-500" /> },
  { name: 'Express', icon: <SiExpress className="text-4xl" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-4xl text-green-600" /> },
  {
    name: 'PostgreSQL',
    icon: <SiPostgresql className="text-4xl text-blue-500" />,
  },
  { name: 'Git', icon: <FaGitAlt className="text-4xl text-orange-500" /> },
];

export const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-blue-900/50 via-gray-950 to-purple-900/50"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
        >
          About Me
        </motion.h2>
        <Card className=" mx-auto bg-gray-800/80 backdrop-blur-sm border border-blue-500/20 py-6">
          <CardContent className="py-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative w-64 h-64 mx-auto xl:w-[450px] xl:h-[450px]"
              >
                <Image
                  src={image}
                  alt="Profile Photo"
                  fill
                  className="rounded-full object-cover border-2 border-blue-400/50"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-200">
                  Crafting Scalable Web Solutions
                </h3>
                <p className="text-base md:text-lg mb-4 text-gray-300">
                  I`m a Full Stack Developer with over 1 year of experience
                  building robust, user-focused web applications. My passion
                  lies in leveraging{' '}
                  <span className="text-blue-400">Next.js</span>,{' '}
                  <span className="text-blue-400">TypeScript</span>, and{' '}
                  <span className="text-blue-400">Node.js</span> to create
                  seamless, scalable solutions.
                </p>
                <p className="text-base md:text-lg mb-6 text-gray-300">
                  From crafting dynamic frontends with{' '}
                  <span className="text-blue-400">React</span> and{' '}
                  <span className="text-blue-400">Next.js</span> to designing
                  efficient backends with{' '}
                  <span className="text-blue-400">MongoDB</span> and{' '}
                  <span className="text-blue-400">PostgreSQL</span>, I thrive on
                  solving complex challenges.
                </p>
                <p className="text-base md:text-lg mb-6 text-gray-300">
                  Additionally, I specialize in{' '}
                  <span className="text-blue-400">SEO optimization</span>,
                  enhancing web visibility with techniques like keyword
                  optimization, meta tag management, and site speed
                  improvements. Using tools like Google Analytics and Search
                  Console, I ensure applications rank higher and attract more
                  organic traffic.
                </p>
                <h4 className="text-lg font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                  My Core Tech Stack
                </h4>
                <TechStackList items={techStackItems} />
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
