import { useRef } from 'react';
import Loader from './components/Loader.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import SkillsMarquee from './components/SkillsMarquee.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Projects from './components/Projects.jsx';
import Testimonials from './components/Testimonials.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import { useStickyHeader } from './hooks/useStickyHeader.js';
import { useMobileMenu } from './hooks/useMobileMenu.js';

export default function App() {
  const heroRef = useRef(null);
  const isSticky = useStickyHeader(heroRef);
  const { isOpen: isMenuOpen, toggle: toggleMenu } = useMobileMenu();

  return (
    <>
      <Loader />
      <Navbar isSticky={isSticky} isMenuOpen={isMenuOpen} onToggleMenu={toggleMenu} />
      <Hero ref={heroRef} />
      <SkillsMarquee />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
