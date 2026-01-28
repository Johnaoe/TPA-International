import React, { useState } from 'react';
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import logo from '../assets/Logo.webp';
import Modal from './Modal';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <img src={logo} alt="TPA Logo" className="w-auto h-20" />
              <span className="font-bold text-xl text-gray-900 tracking-tight">{t('header.title')}</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/profile.php?id=61570794698360" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/tarptautiniaiprojektai/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-gray-900 mb-6 text-lg">{t('footer.links_title')}</h3>
            <ul className="flex flex-col gap-4 text-gray-600 text-sm font-medium">
              <li>
                <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-primary hover:translate-x-1 transition-all duration-300 flex items-center gap-2">
                  {t('header.home')}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="hover:text-primary hover:translate-x-1 transition-all duration-300 flex items-center gap-2">
                  {t('header.about')}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('initiatives')} className="hover:text-primary hover:translate-x-1 transition-all duration-300 flex items-center gap-2">
                  {t('header.projects')}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="hover:text-primary hover:translate-x-1 transition-all duration-300 flex items-center gap-2">
                  {t('header.contact')}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-gray-900 mb-6 text-lg">{t('footer.contact_title')}</h3>
            <ul className="flex flex-col gap-4 text-gray-600 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <a href="mailto:info@tarptautiniaiprojektai.lt" className="hover:text-primary transition-colors">
                  info@tarptautiniaiprojektai.lt
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Trakai, Lietuva</span>
              </li>
            </ul>
          </div>

          {/* Legal / Funding */}
          <div>
            <h3 className="font-bold text-gray-900 mb-6 text-lg">{t('footer.info_title')}</h3>
            <p className="text-gray-500 text-sm mb-6 leading-relaxed">
              {t('footer.eu_funding')}
            </p>
            <div className="flex flex-col gap-2 text-sm text-gray-600 font-medium">
              <button 
                onClick={() => setIsPrivacyOpen(true)}
                className="text-left hover:text-primary hover:underline decoration-2 underline-offset-4 transition-all"
              >
                {t('footer.privacy_policy')}
              </button>
              <a href="#" className="hover:text-primary hover:underline decoration-2 underline-offset-4 transition-all">{t('footer.terms_of_use')}</a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-medium">
          <p>© {currentYear} {t('header.title')}. {t('footer.rights_reserved')}</p>
        </div>
      </div>

      <Modal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
        title={t('footer.privacy_modal_title')}
      >
        <div className="flex flex-col gap-4">
          <p className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('footer.privacy_modal_text1') }} />
          <p className="text-gray-700 leading-relaxed">
            {t('footer.privacy_modal_text2')}
          </p>
        </div>
      </Modal>
    </footer>
  );
};

export default Footer;