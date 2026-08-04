import FadeUp from './FadeUp';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { t } = useLanguage();
  
  return (
    <FadeUp
      id="about"
      className="px-margin-md md:px-margin-lg py-stack-xl border-b border-white/10 bg-surface-bright"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-0 md:gap-8 border-t border-b border-white/10">
        <div className="md:col-span-5 p-8 border-b md:border-b-0 md:border-r border-white/10 flex flex-col justify-start">
          <div>
            <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase mb-4 text-on-surface font-bold">
              {t('about.title')}
            </h2>
            <div className="w-16 h-1 bg-primary mb-8"></div>
          </div>
        </div>
        <div className="md:col-span-7 p-8 md:p-12">
          <p 
            className="font-body-lg text-body-lg text-on-surface leading-relaxed"
            dangerouslySetInnerHTML={{ __html: t('about.text') }}
          />
        </div>
      </div>
    </FadeUp>
  );
}
