import FadeUp from './FadeUp';
import TiltCard from './TiltCard';
import { useLanguage } from '../context/LanguageContext';
import barnardImage from '@/assets/phase_plots.png';
import orbcloudImage from '@/assets/orbcloud_example.png';

export default function Research() {
  const { t } = useLanguage();
  return (
    <FadeUp id="research" className="px-margin-md md:px-margin-lg py-stack-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-8 md:mb-16 border-b border-white/10 pb-4">
          <h2 className="font-display-xl text-display-xl text-on-surface uppercase font-bold tracking-tighter">
            {t('research.title')}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <TiltCard className="flex flex-col h-full md:col-span-2">
            <div className="mb-4 flex justify-between items-start border-b border-surface-variant pb-4">
              <h3 className="font-headline-md text-headline-md text-on-surface font-semibold">
                <a href="https://meetings.aps.org/Meeting/MAS25/Session/E05.5" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  {t('research.1.title')}
                </a>
              </h3>
              <span className="font-label-mono text-label-mono bg-surface-variant text-on-surface px-2 py-1 uppercase font-medium">
                {t('research.ongoing')}
              </span>
            </div>
            <div className="mb-6 bg-transparent overflow-hidden group flex items-center justify-center h-[350px]">
              <img
                alt="Barnard's Star Planetary System Plot"
                className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                src={barnardImage}
              />
            </div>
            <p className="font-body-md text-body-md text-on-surface mt-auto">
              {t('research.1.desc')}
            </p>
          </TiltCard>

          {/* Card 2 */}
          <TiltCard className="flex flex-col h-full md:col-span-1">
             <div className="mb-4 flex justify-between items-start border-b border-surface-variant pb-4">
              <h3 className="font-headline-md text-headline-md text-lg text-on-surface font-semibold">
                <a href="https://github.com/oscarfloresgaitan/orbcloud" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  {t('research.2.title')}
                </a>
              </h3>
              <span className="font-label-mono text-label-mono text-primary font-medium">[CODE]</span>
            </div>
            <div className="mb-6 bg-transparent overflow-hidden group flex items-center justify-center h-[350px]">
              <img
                alt="Orbcloud 3D Orbital Probability Cloud"
                className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                src={orbcloudImage}
              />
            </div>
             <p className="font-body-md text-body-md text-sm text-on-surface mt-auto">
              {t('research.2.desc')}
            </p>
          </TiltCard>
        </div>
      </div>
    </FadeUp>
  );
}
