'usee client';

import Image from 'next/image';
import Link from 'next/link';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BsLightningCharge, BsGithub } from 'react-icons/bs';

import { ProjectProps } from './props';

export const Project = ({ project, index }: ProjectProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className=" flex h-full"
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
          <CardTitle className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            {project.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col flex-grow gap-4">
          <div className="h-[50px] overflow-hidden text-sm text-gray-300">
            {project.description}
          </div>
          <div>
            <p className="text-lg mb-1 font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Project Type
            </p>
            <p className="text-sm text-gray-200">{project.type || 'N/A'}</p>
          </div>
          <div className="flex flex-col gap-4">
            {project.responsibilities && (
              <div className="min-h-[80px]">
                <p className="text-lg mb-1 font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                  Responsibilities
                </p>
                <ul className="text-sm text-gray-200 list-disc list-inside">
                  {project.responsibilities.map((responsibility, idx) => (
                    <li key={idx}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            )}
            <div>
              <p className="text-lg mb-2 font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                Technologies
              </p>
              <ul className="flex gap-2 flex-wrap text-sm text-gray-200">
                {project.technologies.map(t => (
                  <li key={t.name} className="bg-blue-900/40 px-2 py-1 rounded">
                    {t.name}
                  </li>
                ))}
              </ul>
            </div>
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
  );
};
