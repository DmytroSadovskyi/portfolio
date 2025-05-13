'use client';

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { sendEmail } from '@/app/actions/sendMail';

import { FormData } from '@/types';

export const ContactForm = () => {
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4 relative">
        <label htmlFor="name" className="block text-sm mb-2 text-gray-200">
          Name
        </label>
        <Input
          id="name"
          placeholder="John Doe"
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
          <span className="text-red-400 text-xs absolute right-0">
            {errors?.name?.message}
          </span>
        )}
      </div>
      <div className="mb-4 relative">
        <label htmlFor="email" className="block text-sm mb-2 text-gray-200">
          Email
        </label>
        <Input
          id="email"
          type="email"
          placeholder="johndoe@example.com"
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
          <span className="text-red-400 text-xs absolute right-0">
            {errors.email.message}
          </span>
        )}
      </div>
      <div className="mb-10 relative">
        <label htmlFor="message" className="block text-sm mb-2 text-gray-200">
          Message
        </label>
        <Textarea
          id="message"
          placeholder="Your message"
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
          <span className="text-red-400 text-xs absolute right-0">
            {errors.message.message}
          </span>
        )}
      </div>
      <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 cursor-pointer">
        {loading ? 'Sending...' : 'Send'}
      </Button>
    </form>
  );
};
