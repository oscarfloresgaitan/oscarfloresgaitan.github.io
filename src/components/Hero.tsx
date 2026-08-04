import FadeUp from './FadeUp';
import { useLanguage } from '../context/LanguageContext';
import profilePhoto from '@/assets/new_pp.png';

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section className="min-h-screen flex flex-col justify-center px-margin-md md:px-margin-lg py-stack-xl relative border-b border-white/10 overflow-hidden">
      <FadeUp className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <h1 
              className="font-display-xl text-display-xl text-on-surface mb-4 md:mb-6 uppercase max-w-5xl leading-none font-bold tracking-tighter"
              dangerouslySetInnerHTML={{ __html: t('hero.title') }}
            />
            <p className="font-headline-md text-headline-md text-on-surface-variant max-w-3xl border-l-4 border-primary pl-4 md:pl-6 mb-6 md:mb-8 font-semibold">
              {t('hero.subtitle')}
            </p>
            <p className="font-body-lg text-body-lg text-on-surface max-w-2xl mb-8 md:mb-12">
              {t('hero.description')}
            </p>
            <div className="flex flex-wrap gap-4 md:gap-6">
              <a
                className="brutalist-btn-primary interactive uppercase font-bold tracking-wider hover:scale-105 transition-transform duration-200 text-sm md:text-base px-4 py-2 md:px-6 md:py-3"
                href="#research"
              >
                {t('hero.research')}
              </a>
              <a
                className="brutalist-btn-secondary interactive uppercase font-bold tracking-wider hover:scale-105 transition-transform duration-200 text-sm md:text-base px-4 py-2 md:px-6 md:py-3"
                href="#cv"
              >
                {t('hero.cv')}
              </a>
            </div>
          </div>
          <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="w-full max-w-[400px] aspect-square bg-surface-container-low border-2 border-white/20 rounded-l-full overflow-hidden relative group interactive shadow-[-12px_12px_0px_0px_rgba(44,63,255,0.4)] transition-all duration-300">
              <div className="absolute inset-0 bg-primary opacity-10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500"></div>
              <img
                alt="Oscar A. Flores Gaitán"
                className="w-full h-full object-cover"
                src={profilePhoto}
              />
            </div>
          </div>
        </div>
      </FadeUp>
    </section>
  );
}
