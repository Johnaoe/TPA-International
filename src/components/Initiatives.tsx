import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Modal from './Modal';
import { useTranslation } from 'react-i18next';
import image1 from '../assets/image1.webp';
import image2 from '../assets/image2.webp';
import image3 from '../assets/image3.webp';
import image4 from '../assets/image4.webp';
import image5 from '../assets/image5.webp';
import image6 from '../assets/image6.webp';

interface Initiative {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  imageUrl: string;
}

const Initiatives: React.FC = () => {
  const { t } = useTranslation();
  const [selectedInitiative, setSelectedInitiative] = useState<Initiative | null>(null);

  const initiativesData: Initiative[] = [
    {
      id: 1,
      title: t('initiatives.items.1.title'),
      description: t('initiatives.items.1.description'),
      fullDescription: t('initiatives.items.1.fullDescription'),
      imageUrl: image1
    },
    {
      id: 2,
      title: t('initiatives.items.2.title'),
      description: t('initiatives.items.2.description'),
      fullDescription: t('initiatives.items.2.fullDescription'),
      imageUrl: image2
    },
    {
      id: 3,
      title: t('initiatives.items.3.title'),
      description: t('initiatives.items.3.description'),
      fullDescription: t('initiatives.items.3.fullDescription'),
      imageUrl: image3
    },
    {
      id: 4,
      title: t('initiatives.items.4.title'),
      description: t('initiatives.items.4.description'),
      fullDescription: t('initiatives.items.4.fullDescription'),
      imageUrl: image4
    },
    {
      id: 5,
      title: t('initiatives.items.5.title'),
      description: t('initiatives.items.5.description'),
      fullDescription: t('initiatives.items.5.fullDescription'),
      imageUrl: image5
    },
    {
      id: 6,
      title: t('initiatives.items.6.title'),
      description: t('initiatives.items.6.description'),
      fullDescription: t('initiatives.items.6.fullDescription'),
      imageUrl: image6
    }
  ];

  const openModal = (initiative: Initiative) => {
    setSelectedInitiative(initiative);
  };

  const closeModal = () => {
    setSelectedInitiative(null);
  };

  return (
    <section id="initiatives" className="px-4 py-8 md:py-12 max-w-7xl mx-auto w-full">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">{t('initiatives.title')}</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {initiativesData.map((item) => (
          <article 
            key={item.id} 
            className="flex flex-col bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-md transition-shadow duration-300"
          >
            <div className="w-full h-48 md:h-56 overflow-hidden">
              <img 
                src={item.imageUrl} 
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" 
              />
            </div>
            <div className="p-5 flex flex-col gap-3 flex-grow">
              <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                {item.description}
              </p>
              <div className="pt-2 mt-auto">
                <button 
                  onClick={() => openModal(item)}
                  className="inline-flex items-center text-sm font-bold text-primary hover:text-primary-hover hover:underline group-hover:translate-x-1 transition-transform"
                >
                  {t('initiatives.cta_read_more')} <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <Modal
        isOpen={!!selectedInitiative}
        onClose={closeModal}
        title={selectedInitiative?.title || ''}
      >
        {selectedInitiative && (
          <div className="flex flex-col gap-6">
            <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-md">
              <img 
                src={selectedInitiative.imageUrl} 
                alt={selectedInitiative.title} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="prose prose-blue max-w-none">
              <p className="text-gray-700 text-lg leading-relaxed">
                {selectedInitiative.fullDescription}
              </p>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Initiatives;