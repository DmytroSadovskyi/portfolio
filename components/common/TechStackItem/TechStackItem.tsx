import { motion } from 'framer-motion';

import { TechStackItemProps } from './props';

export const TechStackItem = ({ name, icon, index }: TechStackItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="flex flex-col items-center"
    >
      {icon}
      <span className="text-sm text-gray-300 mt-2 text-center">{name}</span>
    </motion.div>
  );
};
