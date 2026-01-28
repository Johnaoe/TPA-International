import React, { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import logo from '../assets/Logo.webp';
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'lt' ? 'en' : 'lt';
    i18n.changeLanguage(newLang);
  };

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: t('header.home'), id: 'top' },
    { label: t('header.about'), id: 'about' },
    { label: t('header.projects'), id: 'initiatives' },
    { label: t('header.contact'), id: 'contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <div 
          className="flex items-center gap-3 cursor-pointer" 
          onClick={() => scrollToSection('top')}
        >
          <div className="flex items-center justify-center">
            <img src={logo} alt="TPA Logo" className="w-auto h-20" />
          </div>
          <h1 className="text-lg font-bold tracking-tight text-gray-900 hidden xs:block">
            {t('header.title')}
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-gray-600 font-medium hover:text-primary transition-colors text-sm"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Language Switcher */}
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-1 text-gray-600 hover:text-primary transition-colors text-sm font-medium border border-gray-200 rounded-full px-3 py-1"
          >
            <Globe className="w-4 h-4" />
            <span>{i18n.language.toUpperCase()}</span>
          </button>
        </div>
        
        {/* Mobile Actions */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={toggleLanguage}
            className="text-gray-600 hover:text-primary transition-colors text-sm font-bold"
          >
            {i18n.language.toUpperCase()}
          </button>
          <button 
            className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg py-4 px-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-left py-2 px-4 rounded-lg hover:bg-gray-50 text-gray-700 font-medium transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;