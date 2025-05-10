'use client';
import Image from 'next/image';
import Link from 'next/link';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BsLightningCharge, BsGithub } from 'react-icons/bs';

import consultantImage from '../../public/images/stepanenko.jpg';
import psychologistImage from '../../public/images/klympus.jpg';
import agroImage from '../../public/images/agrovubir.jpg';

const projects = [
  {
    title: 'Agrovubir.ua',
    description:
      'B2B platform using Next.js, Node.js, and PostgreSQL that connects farmers with suppliers',
    image: agroImage,
    link: 'https://agro-vubir.com.ua/',
  },
  {
    title: 'Career consultations',
    description: 'Personal website for career consultant Julia Stepanenko',
    image: consultantImage,
    gitHub: 'https://github.com/SoftRyzen-internship/career-consultant',
    link: 'https://career-consultations.vercel.app/',
  },
  {
    title: 'Psychologist Iryna Klimpus',
    description: 'Personal website for psychologist Iryna Klimpus',
    image: psychologistImage,
    gitHub: 'https://github.com/SoftRyzen-internship/psychologist-klimpus',
    link: 'https://therapybyirena.vercel.app/',
  },
];

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="bg-gray-800/80 backdrop-blur-sm border border-blue-500/20 hover:shadow-blue-500/30 transition pb-6">
                <div className="relative w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="bg-cover rounded-t-lg"
                    width={600}
                    height={400}
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-4 text-gray-300">
                    {project.description}
                  </p>
                  <Button
                    variant="link"
                    asChild
                    className="p-0 text-blue-400 hover:text-purple-400"
                  >
                    <Link href={project.link}>
                      <BsLightningCharge />
                    </Link>
                  </Button>
                  {project.gitHub && (
                    <Button
                      variant="link"
                      asChild
                      className="p-0 text-blue-400 hover:text-purple-400"
                    >
                      <Link href={project.gitHub}>
                        <BsGithub />
                      </Link>
                    </Button>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
