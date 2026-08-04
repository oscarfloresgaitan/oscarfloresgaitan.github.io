import FadeUp from './FadeUp';
import { useLanguage } from '../context/LanguageContext';

export default function CV() {
  const { t } = useLanguage();

  const timelineData = [
    {
      year: t('cv.1.year'),
      title: t('cv.1.title'),
      institution: t('cv.1.inst'),
    },
    {
      year: t('cv.3.year'),
      title: t('cv.3.title'),
      institution: t('cv.3.inst'),
    },
    {
      year: t('cv.2.year'),
      title: t('cv.2.title'),
      institution: t('cv.2.inst'),
    },
  ];

  return (
    <FadeUp id="cv" className="px-margin-md md:px-margin-lg py-stack-xl border-b border-white/10 relative">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-8 md:mb-16 border-b border-white/10 pb-4">
          <h2 className="font-display-xl text-display-xl text-on-surface uppercase font-bold tracking-tighter">
            {t('cv.title')}
          </h2>
          <a 
            href="/OscarFloresGaitanCV_ENGLISH.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="border border-white/20 bg-transparent text-on-surface font-label-mono text-label-mono px-4 py-3 md:px-6 md:py-3 hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] flex items-center gap-3 interactive group"
          >
            <span className="material-symbols-outlined text-lg group-hover:-translate-y-1 transition-transform">download</span>
            <span className="font-bold">{t('cv.download')}</span>
          </a>
        </div>

        <div className="relative border-l border-surface-variant ml-4 md:ml-8 pl-8 md:pl-12 py-4 space-y-8 md:space-y-16">
          {timelineData.map((item, index) => (
            <div key={index} className="relative group">
              {/* Timeline marker connecting to the line */}
              <div className="absolute w-4 h-4 bg-background border-2 border-primary rounded-full -left-[41px] md:-left-[57px] top-1.5 group-hover:bg-primary group-hover:scale-125 transition-all duration-300"></div>
              
              <div className="flex flex-col gap-2">
                <span className="font-label-mono text-label-mono text-primary font-bold tracking-widest">{item.year}</span>
                <h3 className="font-headline-md text-headline-md text-on-surface font-semibold text-xl md:text-2xl">{item.title}</h3>
                <h4 className="font-label-mono text-label-mono text-on-surface-variant text-sm border-b border-surface-variant/50 pb-2 inline-block self-start mb-2">{item.institution}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </FadeUp>
  );
}
