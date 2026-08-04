import React from 'react';
import FadeUp from './FadeUp';
import TiltCard from './TiltCard';
import { useLanguage } from '../context/LanguageContext';

export default function Teaching() {
  const { t } = useLanguage();

  const handleLearnMore = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.hash = '#/tutoring';
  };

  return (
    <FadeUp id="teaching" className="px-margin-md md:px-margin-lg py-stack-xl border-b border-white/10">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-end justify-between mb-8 md:mb-12 border-b border-white/10 pb-4">
          <h2 className="font-display-xl text-display-xl text-on-surface uppercase font-bold tracking-tighter">
            {t('teaching.title') || 'Teaching'}
          </h2>
        </div>
        
        <TiltCard className="flex flex-col p-6 md:p-8">
          <div className="flex-grow flex flex-col justify-between">
            <div>
              <div className="mb-4 flex justify-between items-start border-b border-surface-variant pb-4">
                <div className="flex flex-col">
                  <h3 className="font-headline-md text-headline-md text-on-surface font-semibold text-xl">
                    {t('teaching.tutoring.title') || 'Private Tutoring'}
                  </h3>
                  <p className="font-label-mono text-sm text-primary mt-1.5 font-bold">
                    {t('teaching.tutoring.stats') || '320+ Hours • 30+ Students'}
                  </p>
                </div>
                <span className="font-label-mono text-label-mono bg-surface-variant text-on-surface px-2.5 py-1 font-medium whitespace-nowrap">
                  TUTORING
                </span>
              </div>
              
              <p className="font-body-lg text-body-lg text-on-surface opacity-90 leading-relaxed mb-4">
                {t('teaching.tutoring.desc') || 'Personalized academic mentoring.'}
              </p>
              
              <p className="font-body-md text-body-md text-sm text-on-surface-variant/90 italic mb-6">
                <strong className="text-on-surface font-semibold">{t('teaching.courses.label') || 'Courses: '}</strong>{' '}
                {t('teaching.tutoring.courses') || 'Precalculus, Calculus, Physics, Calculus for Business, and Differential Equations'}
              </p>
            </div>
            
            <a 
              href="#/tutoring" 
              onClick={handleLearnMore}
              className="border border-white/20 bg-transparent text-on-surface font-label-mono text-label-mono px-6 py-3 hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] flex items-center justify-center gap-2 interactive font-bold w-full sm:w-auto self-start"
            >
              <span className="material-symbols-outlined text-sm">menu_book</span>
              {t('teaching.tutoring.btn') || 'Learn More & Book Session'}
            </a>
          </div>
        </TiltCard>
      </div>
    </FadeUp>
  );
}
