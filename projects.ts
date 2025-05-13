import consultantImage from '@/public/images//stepanenko.jpg';
import psychologistImage from '@/public/images/klympus.jpg';
import agroImage from '@/public/images/agrovubir.jpg';
import carRentalImage from '@/public/images/car-rental.jpg';

import { Project } from './types';

export const projects: Project[] = [
  {
    title: 'Agrovubir.ua',
    description: 'B2B platform that connects farmers with suppliers',
    image: agroImage,
    link: 'https://agro-vubir.com.ua/',
    type: 'Commercial team project',
    responsibilities: [
      'developing ui',
      'developing backend',
      'developing and maintaining the database',
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
      'creating frontend components',
      'setting up Sanity CMS',
      'creating schemas for Sanity CMS',
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
    title: 'Psychologist Iryna Klimpus',
    description: 'Personal website for clinic psychologist Iryna Klimpus',
    image: psychologistImage,
    gitHub: 'https://github.com/SoftRyzen-internship/psychologist-klimpus',
    link: 'https://therapybyirena.vercel.app/',
    type: 'Commercial team project',
    responsibilities: [
      'creating frontend components',
      'setting up DatoCMS',
      'creating schemas for DatoCMS',
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
      'Simply website where you can find a car for rent using different filters ',
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
