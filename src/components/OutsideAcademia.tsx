import FadeUp from './FadeUp';
import TiltCard from './TiltCard';
import { useLanguage } from '../context/LanguageContext';
import sportsImage from '@/assets/sports2.png';
import countriesImage from '@/assets/countrieskingdom.png';

export default function OutsideAcademia() {
  const { t } = useLanguage();
  return (
    <FadeUp
      id="beyond-data"
      className="px-margin-md md:px-margin-lg py-stack-xl border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-8 md:mb-16 border-b border-white/10 pb-4">
          <h2 className="font-display-xl text-display-xl text-on-surface uppercase font-bold tracking-tighter">
            {t('outside.title')}
          </h2>
        </div>
        <div className="flex flex-col gap-8">
          {/* Card 1: Sports */}
          <TiltCard className="group p-0 relative">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 p-4 sm:p-6 md:p-8">
              <div className="w-full md:w-[250px] aspect-square shrink-0 rounded-lg overflow-hidden border border-surface-variant/30 mx-auto md:mx-0">
                <img 
                  src={sportsImage} 
                  alt="Sports & Athletics" 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-500"
                />
              </div>
              <div className="flex flex-col justify-center flex-grow">
                <div className="mb-4 border-b border-surface-variant pb-2">
                  <h3 className="font-headline-md text-headline-md text-on-surface font-semibold text-xl uppercase">
                    {t('outside.1.title')}
                  </h3>
                </div>
                <p className="font-body-md text-body-md text-on-surface/80 leading-relaxed">
                  {t('outside.1.desc')}
                </p>
              </div>
            </div>
          </TiltCard>

          {/* Card 2: Ancestry / Countries Kingdom */}
          <TiltCard className="group p-0 relative">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 p-4 sm:p-6 md:p-8">
              <div className="w-full md:w-[250px] aspect-square shrink-0 rounded-lg overflow-hidden border border-surface-variant/30 mx-auto md:mx-0">
                <img 
                  src={countriesImage} 
                  alt="Countries Kingdom Instagram Page" 
                  className="w-full h-full object-cover object-left opacity-80 group-hover:opacity-100 transition-all duration-500"
                />
              </div>
              <div className="flex flex-col justify-center flex-grow">
                <div className="mb-4 border-b border-surface-variant pb-2">
                  <h3 className="font-headline-md text-headline-md text-on-surface font-semibold text-xl uppercase">
                    {t('outside.2.title')}
                  </h3>
                </div>
                <p className="font-body-md text-body-md text-on-surface/80 leading-relaxed">
                  {t('outside.2.desc')}
                </p>
              </div>
            </div>
          </TiltCard>
        </div>
      </div>
    </FadeUp>
  );
}
