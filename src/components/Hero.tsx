import React from 'react';
import { useTranslation } from 'react-i18next';

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const backgroundImage = "https://lh3.googleusercontent.com/aida-public/AB6AXuA6KvtGI3qvT65X5ggQmX1pIRE_28nkbML2o-SRi1bHvSHkO6HovylHoua36plmUOkyLkwqDqG30HAk5RKYqSo9BCzujUERzqLBKUjqM5Iq6L2vBwAIM5BBUk7rm01BKt9hoYPPh57p0zTz4377NRxr6KGUF8T33JUeva11eygaW9QVwUfDiIZhd_4Op5sbDGTMI4cd8vvXmGWP-Jw6J-ZaZIh51y7MJl0SFO6nUam_pIdLevXIllCuxlJH0Hvz_fyJ4dNyKw-ZbD4k";

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full">
      <div 
        className="relative flex min-h-[500px] md:min-h-[600px] flex-col items-center justify-center gap-6 px-4 py-12 text-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url('${backgroundImage}')`
        }}
      >
        <div className="flex flex-col gap-4 max-w-2xl mx-auto">
          <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tight drop-shadow-md">
            {t('hero.title')}
          </h1>
          <p className="text-white/90 text-base md:text-xl font-medium leading-relaxed max-w-lg mx-auto drop-shadow">
            {t('hero.description')}
          </p>
        </div>
        <button 
          onClick={scrollToContact}
          className="mt-4 flex items-center justify-center h-12 px-8 rounded-full bg-primary hover:bg-primary-hover text-white text-base font-bold transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
        >
          {t('hero.cta')}
        </button>
      </div>
    </section>
  );
};

export default Hero;