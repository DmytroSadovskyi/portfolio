import { Project } from '../Project/Project';
import { ProjectsListProps } from './props';

export const ProjectsList = ({ projects }: ProjectsListProps) => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
      {projects.map((project, index) => (
        <li key={index}>
          <Project project={project} index={index} />
        </li>
      ))}
    </ul>
  );
};
