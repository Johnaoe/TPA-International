import React from 'react';
import { Users, Lightbulb, Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import aboutImage from '../assets/hero-bg.webp';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main About Section */}
        <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-6">
              {t('about.title')}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {t('about.description')}
            </p>
          </div>
          <div className="md:w-1/2">
             <img 
               src={aboutImage}
               alt="Community gathering" 
               className="rounded-2xl shadow-lg w-full h-80 object-cover"
             />
          </div>
        </div>

        {/* Impact Stats / Features */}
        <div className="bg-soft-blue rounded-3xl p-8 md:p-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {t('about.impact_title')}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t('about.stat1_title')}</h3>
              <p className="text-gray-600">
                {t('about.stat1_desc')}
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-secondary-500/10 rounded-lg flex items-center justify-center mb-4 text-secondary-500">
                <Lightbulb className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t('about.stat2_title')}</h3>
              <p className="text-gray-600">
                {t('about.stat2_desc')}
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center mb-4 text-primary-500">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t('about.stat3_title')}</h3>
              <p className="text-gray-600">
                {t('about.stat3_desc')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;