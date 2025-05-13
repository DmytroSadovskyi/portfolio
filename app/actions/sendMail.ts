'use server';

import nodemailer from 'nodemailer';
import { FormData } from '@/types';

export async function sendEmail(formData: FormData) {
  const name = formData.name;
  const email = formData.email;
  const message = formData.message;

  const transporter = nodemailer.createTransport({
    host: 'smtp.meta.ua',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USERNAME,
      to: 'dmytro.sadovskyi@gmail.com',
      subject: `New message from ${name}`,
      text: `Message from ${name} (${email}):\n\n${message}\n\nSent via your portfolio site.`,
    });
    return { success: true, message: 'Email sent successfully!' };
  } catch (error) {
    console.error(error);
    return { success: false, message: 'Failed to send email.' };
  }
}
