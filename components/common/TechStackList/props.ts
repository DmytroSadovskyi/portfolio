import { JSX } from 'react';

export type TechStackListProps = {
  items: ({ name: string; icon: JSX.Element } | undefined)[];
};
