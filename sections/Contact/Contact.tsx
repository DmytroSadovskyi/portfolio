'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa';
import { Card, CardContent } from '@/components/ui/card';
import { ContactForm } from '@/components/common/ContactForm';

export const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-blue-900/50 via-gray-950 to-purple-900/50"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
        >
          Get in Touch
        </motion.h2>
        <Card className="max-w-2xl mx-auto bg-gray-800/80 backdrop-blur-sm border border-blue-500/20 py-6">
          <CardContent>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ContactForm />
            </motion.div>
          </CardContent>
        </Card>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center space-x-6 mt-8"
        >
          <a
            href="https://github.com/DmytroSadovskyi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-2xl hover:text-blue-400 transition" />
          </a>
          <a
            href="https://www.linkedin.com/in/dmytro-sadovskyi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl hover:text-blue-400 transition" />
          </a>
          <a
            href="https://t.me/DmYtRo_S21"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTelegram className="text-2xl hover:text-blue-400 transition" />
          </a>

          <a
            href="https://drive.google.com/file/d/1cAfmCiApgKPlaUCdq7l7Dr9HssBDWqs_/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            My CV
          </a>
        </motion.div>
      </div>
    </section>
  );
};
