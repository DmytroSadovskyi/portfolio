import consultantImage from '@/public/images/stepanenko.jpg';
import psychologistImage from '@/public/images/klimpus.jpg';
import agroImage from '@/public/images/agrovubir.jpg';
import carRentalImage from '@/public/images/rental.jpg';

import { Project } from './types';

export const projects: Project[] = [
  {
    title: 'Agrovubir.ua',
    description: 'B2B platform that connects farmers with suppliers',
    image: agroImage,
    link: 'https://agro-vubir.com.ua/',
    type: 'Commercial team project',
    responsibilities: [
      'developing UI',
      'developing backend',
      'developing database',
      'SEO optimization',
    ],

    technologies: [
      {
        name: 'React',
      },
      { name: 'Next.js' },
      { name: 'TypeScript' },
      { name: 'Tailwind CSS' },
      { name: 'Node.js' },
      { name: 'Express' },
      { name: 'PostgreSQL' },
    ],
  },
  {
    title: 'Career consultations',
    description: 'Personal website for career consultant Julia Stepanenko',
    image: consultantImage,
    gitHub: 'https://github.com/SoftRyzen-internship/career-consultant',
    link: 'https://career-consultations.vercel.app/',
    type: 'Commercial team project',
    responsibilities: [
      'team lead',
      'setting up Sanity CMS',
      'creating schemas for Sanity CMS',
      'SEO optimization',
    ],
    technologies: [
      {
        name: 'React',
      },
      { name: 'Next.js' },
      { name: 'TypeScript' },
      { name: 'Tailwind CSS' },
    ],
  },
  {
    title: 'Iryna Klimpus',
    description: 'Personal website for clinic psychologist Iryna Klimpus',
    image: psychologistImage,
    gitHub: 'https://github.com/SoftRyzen-internship/psychologist-klimpus',
    link: 'https://therapybyirena.vercel.app/',
    type: 'Commercial team project',
    responsibilities: [
      'creating frontend components',
      'setting up DatoCMS',
      'creating schemas for DatoCMS',
      'implementing DatoCMS',
    ],
    technologies: [
      {
        name: 'React',
      },
      { name: 'Next.js' },
      { name: 'TypeScript' },
      { name: 'Tailwind CSS' },
    ],
  },
  {
    title: 'DreamCar Rental',
    description:
      'A simple website where you can find rental cars using various filters',
    image: carRentalImage,
    gitHub: 'https://github.com/DmytroSadovskyi/car-rental-service',
    link: 'https://dmytrosadovskyi.github.io/car-rental-service',
    type: 'Personal project',

    technologies: [
      {
        name: 'React',
      },
      { name: 'Redux Toolkit' },
      { name: 'i18n' },
      { name: 'Styled Components' },
    ],
  },
];
