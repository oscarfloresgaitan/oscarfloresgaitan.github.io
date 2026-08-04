import FadeUp from './FadeUp';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  return (
    <FadeUp
      id="footer"
      className="w-full px-margin-md md:px-margin-lg py-stack-xl flex flex-col justify-between bg-surface-container-lowest text-on-surface border-t-2 border-white/20 min-h-[600px]"
    >
      <div className="max-w-7xl mx-auto w-full mb-16 flex flex-col lg:grid lg:grid-cols-4 items-center gap-12">
        <div className="lg:col-span-3 w-full">
          <h2 className="font-display-xl text-display-xl leading-none uppercase mb-8 font-bold tracking-tighter">
            {t('footer.title')}
          </h2>
          <p className="font-label-mono text-label-mono text-primary uppercase tracking-widest mt-2 mb-6 font-medium">
            {t('footer.getintouch')}
          </p>
          <div className="font-label-mono text-label-mono flex flex-col sm:flex-row gap-4 mb-12 font-medium">
            <a
              className="block hover:text-primary transition-colors border border-white/20 px-4 py-2 interactive w-fit"
              href="mailto:ofg@udel.edu"
            >
              ofg@udel.edu
            </a>
          </div>
          <div className="flex gap-6 items-center">
            {/* LinkedIn Icon */}
            <a className="text-on-surface-variant hover:text-primary transition-colors interactive" href="https://www.linkedin.com/in/oscarfloresgaitan/" target="_blank" rel="noopener noreferrer">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path>
              </svg>
            </a>
            {/* GitHub Icon */}
            <a className="text-on-surface-variant hover:text-primary transition-colors interactive" href="https://github.com/oscarfloresgaitan" target="_blank" rel="noopener noreferrer">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"></path>
              </svg>
            </a>
            {/* ORCID Icon Equivalent */}
            <a className="text-on-surface-variant hover:text-primary transition-colors interactive font-bold" href="https://orcid.org/0009-0000-7850-7870" target="_blank" rel="noopener noreferrer">
              ID
            </a>
            {/* Scholar Icon */}
            <a className="text-on-surface-variant hover:text-primary transition-colors interactive" href="https://scholar.google.com/citations?hl=en&user=6WZnhyUAAAAJ" target="_blank" rel="noopener noreferrer">
              <span className="material-symbols-outlined">school</span>
            </a>
          </div>
        </div>
        <div className="lg:col-start-4 w-full flex justify-center lg:justify-end">
          <a
            className="bg-white text-primary border-4 border-primary px-8 py-4 font-display-xl text-2xl uppercase font-bold tracking-tighter hover:bg-primary hover:text-white transition-all duration-200 interactive shadow-[8px_8px_0px_0px_rgba(44,63,255,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[10px_10px_0px_0px_rgba(44,63,255,1)] flex items-center justify-center gap-2 w-fit"
            href="/OscarFloresGaitanCV_ENGLISH.pdf"
          >
            <span className="material-symbols-outlined text-3xl">download</span>
            <span className="whitespace-nowrap">{t('footer.download')}</span>
          </a>
        </div>
      </div>
    </FadeUp>
  );
}
