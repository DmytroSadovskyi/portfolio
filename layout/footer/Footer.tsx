export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>
        &#169; Copyright {currentYear} Dmytro Sadovskyi. All rights reserved
      </p>
    </footer>
  );
};
