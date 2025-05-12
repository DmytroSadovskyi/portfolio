export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-950 py-6 text-center">
      <div className="container mx-auto">
        <p className="text-sm">
          &#169; {currentYear} Dmytro Sadovskyi. All rights reserved
        </p>
      </div>
    </footer>
  );
};
