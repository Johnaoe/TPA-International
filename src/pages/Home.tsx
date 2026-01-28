import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import About from '../components/About';
import Initiatives from '../components/Initiatives';
import Gallery from '../components/Gallery';
import ContactForm from '../components/ContactForm';

const Home: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state && (location.state as any).scrollTo) {
      const elementId = (location.state as any).scrollTo;
      const element = document.getElementById(elementId);
      
      if (element) {
        // Small timeout to ensure DOM is fully ready/rendered
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
        
        // Clear state to prevent scrolling on subsequent renders/refreshes if possible,
        // though standard react-router history handling usually does this on new navigation.
        // We can't easily clear history state without replacing URL, which is fine.
      } else if (elementId === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <>
      <div id="top"></div>
      <Hero />
      <About />
      <Initiatives />
      <Gallery />
      <ContactForm />
    </>
  );
};

export default Home;