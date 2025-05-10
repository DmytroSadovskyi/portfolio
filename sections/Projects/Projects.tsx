'use client';
import Image from 'next/image';
import Link from 'next/link';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BsLightningCharge, BsGithub } from 'react-icons/bs';

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex"
            >
              <Card className="flex flex-col h-full w-full bg-gray-800/80 backdrop-blur-sm border border-blue-500/20 hover:shadow-blue-500/30 transition pb-6">
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
                <CardContent className="flex flex-col flex-grow justify-between">
                  <div className="h-[70px] overflow-hidden mb-2 text-sm text-gray-300">
                    {project.description}
                  </div>

                  <div className="mb-2">
                    <p className="text-lg mb-1 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                      Technologies
                    </p>
                    <ul className="flex gap-2 flex-wrap text-sm text-gray-200">
                      {project.technologies.map(t => (
                        <li
                          key={t.name}
                          className="bg-blue-900/40 px-2 py-1 rounded"
                        >
                          {t.name}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-2 mt-auto">
                    <Button
                      variant="link"
                      asChild
                      className="px-0 text-blue-400 hover:text-purple-400"
                    >
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BsLightningCharge />
                      </Link>
                    </Button>
                    {project.gitHub && (
                      <Button
                        variant="link"
                        asChild
                        className="px-0 text-blue-400 hover:text-purple-400"
                      >
                        <Link
                          href={project.gitHub}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <BsGithub />
                        </Link>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
