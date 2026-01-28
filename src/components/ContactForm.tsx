import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

const ContactForm: React.FC = () => {
  const { t } = useTranslation();
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: React.FormEvent) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contact" className="w-full bg-soft-blue py-16 mt-8">
      <div className="px-4 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
          
          <div className="flex flex-col gap-4 text-center lg:text-left lg:flex-1 lg:pt-8">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">{t('contact.title')}</h2>
            <p className="text-primary font-bold text-lg">{t('contact.subtitle')}</p>
            <p className="text-gray-600 text-base leading-relaxed max-w-md mx-auto lg:mx-0">
              {t('contact.description')}
            </p>
          </div>

          <div className="w-full max-w-md lg:max-w-xl lg:flex-1">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-white/50">
              <form 
                className="flex flex-col gap-5"
                onSubmit={onSubmit}
                action="https://formspree.io/f/mblyeewn"
                method="POST"
              >
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500" htmlFor="name">
                    {t('contact.name_label')}
                  </label>
                  <input 
                    id="name" 
                    type="text" 
                    placeholder={t('contact.name_placeholder')}
                    className={`h-12 w-full rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-200'} bg-gray-50 px-4 text-gray-900 placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all`}
                    {...register("name", {
                      required: t('contact.errors.required'),
                      maxLength: { value: 100, message: t('contact.errors.max_length', { count: 100 }) }
                    })}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message as string}</p>}
                </div>
                
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500" htmlFor="email">
                    {t('contact.email_label')}
                  </label>
                  <input 
                    id="email" 
                    type="email" 
                    placeholder={t('contact.email_placeholder')}
                    className={`h-12 w-full rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-200'} bg-gray-50 px-4 text-gray-900 placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all`}
                    {...register("email", {
                      required: t('contact.errors.required'),
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: t('contact.errors.invalid_email')
                      }
                    })}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message as string}</p>}
                </div>
                
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500" htmlFor="message">
                    {t('contact.message_label')}
                  </label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    placeholder={t('contact.message_placeholder')}
                    className={`w-full rounded-lg border ${errors.message ? 'border-red-500' : 'border-gray-200'} bg-gray-50 p-4 text-gray-900 placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none resize-none transition-all`}
                    {...register("message", {
                      required: t('contact.errors.required'),
                      maxLength: { value: 2000, message: t('contact.errors.max_length', { count: 2000 }) }
                    })}
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message as string}</p>}
                </div>
                
                <button 
                  type="submit" 
                  className="mt-2 flex h-12 w-full items-center justify-center rounded-lg bg-primary text-white font-bold tracking-wide hover:bg-primary-hover active:bg-blue-700 transition-colors shadow-sm"
                >
                  {t('contact.submit')}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;