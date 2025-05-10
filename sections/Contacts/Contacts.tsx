'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

export const Contacts = () => {
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
        <Card className="max-w-lg mx-auto bg-gray-800/80 backdrop-blur-sm border border-blue-500/20">
          <CardContent className="pt-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm mb-2 text-gray-200"
                >
                  Name
                </label>
                <Input
                  id="name"
                  className="bg-gray-700/80 border-blue-500/20 text-gray-200"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm mb-2 text-gray-200"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  className="bg-gray-700/80 border-blue-500/20 text-gray-200"
                />
              </div>
              <div className="mb-8">
                <label
                  htmlFor="message"
                  className="block text-sm mb-2 text-gray-200"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  className="bg-gray-700/80 border-blue-500/20 text-gray-200 resize-none"
                  rows={5}
                />
              </div>
              <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 cursor-pointer">
                Send
              </Button>
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

          <a href="#" target="_blank" rel="noopener noreferrer">
            My CV
          </a>
        </motion.div>
      </div>
    </section>
  );
};
