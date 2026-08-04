import { useLanguage } from '../context/LanguageContext';

export default function FloatingLangToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] flex flex-col bg-background/80 backdrop-blur-md border border-white/20 interactive">
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-2 font-label-mono text-xs tracking-widest transition-all duration-300 ${
          language === 'en'
            ? 'bg-primary text-on-primary font-bold'
            : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-variant'
        }`}
      >
        ENG
      </button>
      <div className="h-[1px] w-full bg-white/20" />
      <button
        onClick={() => setLanguage('es')}
        className={`px-3 py-2 font-label-mono text-xs tracking-widest transition-all duration-300 ${
          language === 'es'
            ? 'bg-primary text-on-primary font-bold'
            : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-variant'
        }`}
      >
        ESP
      </button>
    </div>
  );
}
