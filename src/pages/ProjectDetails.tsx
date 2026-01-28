import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Maximize2, X, ArrowLeft } from 'lucide-react';
import { projects } from '../data/projects';

const ProjectDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [lightboxImageIndex, setLightboxImageIndex] = useState<number | null>(null);

  const project = projects.find((p) => p.id === id);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Project not found</h2>
          <button
            onClick={() => navigate('/')}
            className="text-primary hover:underline"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  const openLightbox = (index: number) => {
    setLightboxImageIndex(index);
  };

  const closeLightbox = () => {
    setLightboxImageIndex(null);
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxImageIndex !== null) {
      setLightboxImageIndex((lightboxImageIndex + 1) % project.images.length);
    }
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxImageIndex !== null) {
      setLightboxImageIndex((lightboxImageIndex - 1 + project.images.length) % project.images.length);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-primary transition-colors mb-8 group"
        >
          <ArrowLeft className="mr-2 w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          {t('header.home')} {/* Or a generic "Back" */}
        </button>

        <div className="bg-white rounded-2xl shadow-sm overflow-hidden p-6 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            {t(`gallery.items.${project.id}.title`)}
          </h1>

          <div className="prose max-w-none text-gray-600 mb-12 text-lg leading-relaxed whitespace-pre-line text-justify">
            {t(`gallery.items.${project.id}.description`)}
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {project.images.map((img, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-zoom-in group shadow-md"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={img}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <Maximize2 className="text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-md" size={32} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox */}
      <AnimatePresence>
        {lightboxImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors z-50 p-2 hover:bg-white/10 rounded-full"
            >
              <X size={32} />
            </button>

            <div className="relative max-w-7xl w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={handlePrevImage}
                className="absolute left-2 md:left-4 text-white/80 hover:text-white transition-colors p-3 hover:bg-white/10 rounded-full"
              >
                <ChevronLeft size={40} />
              </button>

              <motion.img
                key={`${project.id}-${lightboxImageIndex}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                src={project.images[lightboxImageIndex]}
                alt="Full screen gallery image"
                className="max-h-[85vh] max-w-full object-contain rounded-lg shadow-2xl"
              />

              <button
                onClick={handleNextImage}
                className="absolute right-2 md:right-4 text-white/80 hover:text-white transition-colors p-3 hover:bg-white/10 rounded-full"
              >
                <ChevronRight size={40} />
              </button>
              
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm font-medium px-4 py-2 bg-black/20 rounded-full backdrop-blur-md border border-white/10">
                {lightboxImageIndex + 1} / {project.images.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectDetails;