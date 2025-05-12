'use client';

import { useState } from 'react';

import { motion } from 'framer-motion';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { sendEmail } from '@/app/actions/sendMail';

export interface FormData {
  name: string;
  email: string;
  message: string;
}

export const Contacts = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<FormData> = async data => {
    setLoading(true);
    const response = await sendEmail(data);
    setLoading(false);
    if (response.success) {
      toast.success('Email sent successfully!');
    } else {
      toast.error('Failed to send email.');
    }
    reset();
  };

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
        <Card className="max-w-4xl mx-auto bg-gray-800/80 backdrop-blur-sm border border-blue-500/20 py-6">
          <CardContent>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4 relative">
                  <label
                    htmlFor="name"
                    className="block text-sm mb-2 text-gray-200"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    {...register('name', {
                      required: { value: true, message: 'Name is required' },
                      minLength: {
                        value: 3,
                        message: 'Name must be at least 3 characters long',
                      },
                    })}
                    className="bg-gray-700/80 border-blue-500/20 text-gray-200"
                  />
                  {errors.name && (
                    <span className="text-red-500 text-sm absolute right-0">
                      {errors?.name?.message}
                    </span>
                  )}
                </div>
                <div className="mb-4 relative">
                  <label
                    htmlFor="email"
                    className="block text-sm mb-2 text-gray-200"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    {...register('email', {
                      required: { value: true, message: 'Email is required' },
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                      },
                    })}
                    className="bg-gray-700/80 border-blue-500/20 text-gray-200"
                  />
                  {errors.email && (
                    <span className="text-red-500 text-sm absolute right-0">
                      {errors.email.message}
                    </span>
                  )}
                </div>
                <div className="mb-10 relative">
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
                    {...register('message', {
                      required: { value: true, message: 'Message is required' },
                      minLength: {
                        value: 10,
                        message: 'At least 10 characters long',
                      },
                    })}
                  />
                  {errors.message && (
                    <span className="text-red-500 text-sm absolute right-0">
                      {errors.message.message}
                    </span>
                  )}
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 cursor-pointer">
                  {loading ? 'Sending...' : 'Send'}
                </Button>
              </form>
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
