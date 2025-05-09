import { Footer } from '@/layout/footer';
import { Header } from '@/layout/header';
import { About } from '@/sections/About';
import { Contacts } from '@/sections/Contacts';
import { Hero } from '@/sections/Hero';
import { Projects } from '@/sections/Projects';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contacts />
      <Footer />
    </>
  );
}
