import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa';

export const Contacts = () => {
  return (
    <>
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
        href="https://drive.google.com/file/d/1qiDvZwAlSjZhWeo4qtD1qK2lsJ_x-AiR/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-400 transition"
      >
        My CV
      </a>
    </>
  );
};
