import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Initiatives from './components/Initiatives';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f6f7f8] text-[#111418]">
      <Header />
      <main>
        <Hero />
        <About />
        <Initiatives />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;