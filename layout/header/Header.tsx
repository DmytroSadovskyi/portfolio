'use client';

import Link from 'next/link';

import { motion } from 'framer-motion';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { FaBars } from 'react-icons/fa';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export const Header = () => {
  return (
    <header>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed w-full bg-gray-900/30 backdrop-blur-md z-50 border-b border-blue-500/20"
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link
            href="/"
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
          >
            Dmytro Sadovskyi
          </Link>
          <ul className="hidden md:flex space-x-6 text-sm md:text-base">
            {navLinks.map(link => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-blue-400 transition"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <FaBars className="text-2xl text-blue-400" />
              </Button>
            </SheetTrigger>

            <SheetTitle className="sr-only">Mobile menu</SheetTitle>
            <SheetContent
              side="right"
              className="bg-gradient-to-br from-blue-900/100 via-gray-950 to-purple-900/100 w-full border-none"
            >
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center justify-center h-full space-y-8"
              >
                {navLinks.map(link => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className="text-2xl font-semibold bg-clip-text text-white  hover:text-blue-300 transition"
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </motion.div>
            </SheetContent>
          </Sheet>
        </div>
      </motion.nav>
    </header>
  );
};
