import FadeUp from './FadeUp';
import TiltCard from './TiltCard';
import { useLanguage } from '../context/LanguageContext';
import articleImage from '@/assets/pp_2.png';
import podcastImage from '@/assets/ciencia_uvg_cover.jpg';
import videoImage from '@/assets/physics_lab_preview.jpg';

export default function Media() {
  const { t } = useLanguage();
  return (
    <FadeUp id="media" className="px-margin-md md:px-margin-lg py-stack-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-8 md:mb-16 border-b border-white/10 pb-4">
          <h2 className="font-display-xl text-display-xl text-on-surface uppercase font-bold tracking-tighter">
            {t('media.title')}
          </h2>
        </div>
        <div className="flex flex-col gap-8">
          {/* Card 1 */}
          <TiltCard className="group p-0 relative">
            <a href="https://noticias.uvg.edu.gt/oscar-flores-gaitan-fisica-uvg-exoplanetas/" target="_blank" rel="noopener noreferrer" className="flex flex-col md:flex-row gap-6 md:gap-8 p-4 sm:p-6 md:p-8">
              <div className="w-full md:w-[320px] h-[250px] shrink-0 border border-surface-variant bg-surface-container-low overflow-hidden relative group-hover:border-primary transition-colors rounded-lg">
                 <img src={articleImage} alt="Article Cover" className="w-full h-full object-cover object-top opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                 <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end p-4 md:hidden">
                    <span className="font-label-mono text-label-mono text-primary flex items-center gap-2 uppercase">
                      {t('media.action.read')} <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </span>
                 </div>
              </div>
              <div className="flex flex-col justify-between flex-grow py-1">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="font-headline-md text-headline-md text-xl text-on-surface font-semibold group-hover:text-primary transition-colors">{t('media.1.title')}</h3>
                      <p className="font-label-mono text-xs text-primary mt-1.5 font-semibold tracking-wider">
                        {t('media.1.year')}
                      </p>
                    </div>
                    <span className="font-label-mono text-label-mono bg-surface-variant text-on-surface px-2.5 py-1 font-medium rounded whitespace-nowrap shrink-0 self-start sm:self-auto">
                      {t('media.1.type')}
                    </span>
                  </div>
                  <p className="font-body-md text-body-md text-sm text-on-surface-variant/90 leading-relaxed">
                    {t('media.1.desc')}
                  </p>
                </div>
                <div className="hidden md:flex mt-4">
                  <span className="font-label-mono text-label-mono text-primary flex items-center gap-2 group-hover:gap-4 transition-all uppercase">
                    {t('media.action.read')} <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </span>
                </div>
              </div>
            </a>
          </TiltCard>

          {/* Card 2 */}
          <TiltCard className="group p-0 relative">
            <a href="https://open.spotify.com/episode/3ZpnRPsEQ6Lzc4CZHmhH9e?si=IjIpsN7OSKeGWSN5BQOHlg" target="_blank" rel="noopener noreferrer" className="flex flex-col md:flex-row gap-6 md:gap-8 p-4 sm:p-6 md:p-8">
              <div className="w-full md:w-[320px] h-[250px] shrink-0 border border-surface-variant bg-surface-container-low overflow-hidden relative group-hover:border-primary transition-colors rounded-lg">
                 <img src={podcastImage} alt="Podcast Cover" className="w-full h-full object-cover object-top opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                 <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end p-4 md:hidden">
                    <span className="font-label-mono text-label-mono text-primary flex items-center gap-2 uppercase">
                      {t('media.action.listen')} <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </span>
                 </div>
              </div>
              <div className="flex flex-col justify-between flex-grow py-1">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="font-headline-md text-headline-md text-xl text-on-surface font-semibold group-hover:text-primary transition-colors">{t('media.2.title')}</h3>
                      <p className="font-label-mono text-xs text-primary mt-1.5 font-semibold tracking-wider">
                        {t('media.2.year')}
                      </p>
                    </div>
                    <span className="font-label-mono text-label-mono bg-surface-variant text-on-surface px-2.5 py-1 font-medium rounded whitespace-nowrap shrink-0 self-start sm:self-auto">
                      {t('media.2.type')}
                    </span>
                  </div>
                  <p className="font-body-md text-body-md text-sm text-on-surface-variant/90 leading-relaxed">
                    {t('media.2.desc')}
                  </p>
                </div>
                <div className="hidden md:flex mt-4">
                  <span className="font-label-mono text-label-mono text-primary flex items-center gap-2 group-hover:gap-4 transition-all uppercase">
                    {t('media.action.listen')} <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </span>
                </div>
              </div>
            </a>
          </TiltCard>

          {/* Card 3 */}
          <TiltCard className="group p-0 relative">
            <a href="https://www.youtube.com/watch?v=Q2wZin0FuK0" target="_blank" rel="noopener noreferrer" className="flex flex-col md:flex-row gap-6 md:gap-8 p-4 sm:p-6 md:p-8">
              <div className="w-full md:w-[320px] h-[250px] shrink-0 border border-surface-variant bg-surface-container-low overflow-hidden relative group-hover:border-primary transition-colors rounded-lg">
                 <img src={videoImage} alt="Video Preview" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                 <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end p-4 md:hidden">
                    <span className="font-label-mono text-label-mono text-primary flex items-center gap-2 uppercase">
                      {t('media.action.watch')} <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </span>
                 </div>
              </div>
              <div className="flex flex-col justify-between flex-grow py-1">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="font-headline-md text-headline-md text-xl text-on-surface font-semibold group-hover:text-primary transition-colors">{t('media.3.title')}</h3>
                      <p className="font-label-mono text-xs text-primary mt-1.5 font-semibold tracking-wider">
                        {t('media.3.year')}
                      </p>
                    </div>
                    <span className="font-label-mono text-label-mono bg-surface-variant text-on-surface px-2.5 py-1 font-medium rounded whitespace-nowrap shrink-0 self-start sm:self-auto">
                      {t('media.3.type')}
                    </span>
                  </div>
                  <p className="font-body-md text-body-md text-sm text-on-surface-variant/90 leading-relaxed">
                    {t('media.3.desc')}
                  </p>
                </div>
                <div className="hidden md:flex mt-4">
                  <span className="font-label-mono text-label-mono text-primary flex items-center gap-2 group-hover:gap-4 transition-all uppercase">
                    {t('media.action.watch')} <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </span>
                </div>
              </div>
            </a>
          </TiltCard>
        </div>
      </div>
    </FadeUp>
  );
}
