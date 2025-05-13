import { StaticImageData } from 'next/image';

type Technology = {
  name: string;
};

export type Project = {
  title: string;
  description: string;
  image: StaticImageData;
  type: string;
  link: string;
  technologies: Technology[];
  responsibilities?: string[];
  gitHub?: string;
};

export type FormData = {
  name: string;
  email: string;
  message: string;
};
