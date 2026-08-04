import FadeUp from './FadeUp';
import TiltCard from './TiltCard';
import { useLanguage } from '../context/LanguageContext';

export default function Publications() {
  const { t } = useLanguage();
  return (
    <FadeUp id="publications" className="px-margin-md md:px-margin-lg py-stack-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-8 md:mb-16 border-b border-white/10 pb-4">
          <h2 className="font-display-xl text-display-xl text-on-surface uppercase font-bold tracking-tighter">
            {t('pub.title')}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <TiltCard className="flex flex-col h-full">
            <div className="mb-4 flex justify-between items-start border-b border-surface-variant pb-4">
              <div className="flex flex-col">
                <h3 className="font-headline-md text-headline-md text-on-surface font-semibold">
                  {t('pub.1.title')}
                </h3>
                 <p className="font-label-mono text-sm text-on-surface-variant mt-1">
                  Flores Gaitán, O.A., Dodson-Robinson, S., Ramirez Delgado, V.
                </p>
              </div>
              <span className="font-label-mono text-label-mono bg-surface-variant text-on-surface px-2 py-1 font-medium whitespace-nowrap ml-4">
                {t('pub.inprep')}
              </span>
            </div>
            <p className="font-body-md text-body-md text-on-surface mt-2 opacity-80">
              {t('pub.1.desc')}
            </p>
          </TiltCard>
          
          <TiltCard className="flex flex-col h-full">
            <div className="mb-4 flex justify-between items-start border-b border-surface-variant pb-4">
              <div className="flex flex-col">
                <h3 className="font-headline-md text-headline-md text-on-surface font-semibold">
                  {t('pub.2.title')}
                </h3>
                <p className="font-label-mono text-sm text-on-surface-variant mt-1">
                  Zhao, L.L. et al., including Flores Gaitán, O.A.
                </p>
              </div>
              <span className="font-label-mono text-label-mono bg-surface-variant text-on-surface px-2 py-1 font-medium whitespace-nowrap ml-4">
                {t('pub.inprep')}
              </span>
            </div>
            <p className="font-body-md text-body-md text-on-surface mt-2 opacity-80">
              {t('pub.2.desc')}
            </p>
          </TiltCard>
        </div>
      </div>
    </FadeUp>
  );
}
