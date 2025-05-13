import { TechStackItem } from '../TechStackItem';
import { TechStackListProps } from './props';

export const TechStackList = ({ items }: TechStackListProps) => {
  return (
    <ul className="grid grid-cols-3 gap-4">
      {items?.map((item, index) => (
        <li key={index}>
          <TechStackItem icon={item?.icon} name={item?.name} index={index} />
        </li>
      ))}
    </ul>
  );
};
