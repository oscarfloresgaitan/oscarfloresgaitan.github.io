import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Scroll Spy Logic
      const sections = ['research', 'publications', 'media', 'teaching', 'cv', 'footer'];
      let current = '';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= (element.offsetTop - 150)) {
          current = section;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    // Allow state to update and menu to close before scrolling
    setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        const yOffset = -80; // Account for fixed navbar
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 10);
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 flex justify-between items-center px-margin-md md:px-margin-lg h-20 transition-all duration-300 ${
          scrolled ? 'bg-background/90 backdrop-blur-sm border-b border-white/10' : 'bg-transparent border-transparent'
        }`}
      >
        <a href="#top" onClick={(e) => handleNavClick(e, 'top')} className="font-headline-md text-headline-md font-bold tracking-tighter text-on-surface interactive flex items-center gap-2">
          O. FLORES GAITÁN
        </a>
        <div className="hidden md:flex gap-8 items-center">
          <a
            className={`font-label-mono text-label-mono transition-colors interactive uppercase ${activeSection === 'top' || activeSection === '' ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-primary'}`}
            href="#top"
            onClick={(e) => handleNavClick(e, 'top')}
          >
            {t('nav.home')}
          </a>
          <a
            className={`font-label-mono text-label-mono transition-colors interactive uppercase ${activeSection === 'research' ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-primary'}`}
            href="#research"
            onClick={(e) => handleNavClick(e, 'research')}
          >
            {t('nav.research')}
          </a>
          <a
            className={`font-label-mono text-label-mono transition-colors interactive uppercase ${activeSection === 'publications' ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-primary'}`}
            href="#publications"
            onClick={(e) => handleNavClick(e, 'publications')}
          >
            {t('nav.publications')}
          </a>

          <a
            className={`font-label-mono text-label-mono transition-colors interactive uppercase ${activeSection === 'media' ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-primary'}`}
            href="#media"
            onClick={(e) => handleNavClick(e, 'media')}
          >
            {t('nav.media')}
          </a>

          <a
            className={`font-label-mono text-label-mono transition-colors interactive uppercase ${activeSection === 'teaching' ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-primary'}`}
            href="#teaching"
            onClick={(e) => handleNavClick(e, 'teaching')}
          >
            {t('nav.teaching')}
          </a>

          <a
            className={`font-label-mono text-label-mono transition-colors interactive uppercase ${activeSection === 'cv' ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-primary'}`}
            href="#cv"
            onClick={(e) => handleNavClick(e, 'cv')}
          >
            {t('nav.cv')}
          </a>
          <a
            className={`font-label-mono text-label-mono transition-colors interactive uppercase ${activeSection === 'footer' ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-primary'}`}
            href="#footer"
            onClick={(e) => handleNavClick(e, 'footer')}
          >
            {t('nav.contact')}
          </a>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <a
            href="/OscarFloresGaitanCV_ENGLISH.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="brutalist-btn-secondary py-2 px-4 hover:-translate-x-1 hover:-translate-y-1 transition-all interactive"
          >
            {t('nav.download_cv')}
          </a>
        </div>
        <button 
          className="md:hidden block p-2 text-on-surface interactive"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="material-symbols-outlined">{mobileMenuOpen ? 'close' : 'menu'}</span>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-background/95 backdrop-blur-md z-40 md:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          <a
            className={`font-display-xl text-3xl transition-colors interactive uppercase tracking-tighter font-bold ${activeSection === 'top' || activeSection === '' ? 'text-primary' : 'text-on-surface hover:text-primary'}`}
            href="#top"
            onClick={(e) => handleNavClick(e, 'top')}
          >
            {t('nav.home')}
          </a>
          <a
            className={`font-display-xl text-3xl transition-colors interactive uppercase tracking-tighter font-bold ${activeSection === 'research' ? 'text-primary' : 'text-on-surface hover:text-primary'}`}
            href="#research"
            onClick={(e) => handleNavClick(e, 'research')}
          >
            {t('nav.research')}
          </a>
          <a
            className={`font-display-xl text-3xl transition-colors interactive uppercase tracking-tighter font-bold ${activeSection === 'publications' ? 'text-primary' : 'text-on-surface hover:text-primary'}`}
            href="#publications"
            onClick={(e) => handleNavClick(e, 'publications')}
          >
            {t('nav.publications')}
          </a>
          <a
            className={`font-display-xl text-3xl transition-colors interactive uppercase tracking-tighter font-bold ${activeSection === 'media' ? 'text-primary' : 'text-on-surface hover:text-primary'}`}
            href="#media"
            onClick={(e) => handleNavClick(e, 'media')}
          >
            {t('nav.media')}
          </a>
          <a
            className={`font-display-xl text-3xl transition-colors interactive uppercase tracking-tighter font-bold ${activeSection === 'teaching' ? 'text-primary' : 'text-on-surface hover:text-primary'}`}
            href="#teaching"
            onClick={(e) => handleNavClick(e, 'teaching')}
          >
            {t('nav.teaching')}
          </a>
          <a
            className={`font-display-xl text-3xl transition-colors interactive uppercase tracking-tighter font-bold ${activeSection === 'cv' ? 'text-primary' : 'text-on-surface hover:text-primary'}`}
            href="#cv"
            onClick={(e) => handleNavClick(e, 'cv')}
          >
            {t('nav.cv')}
          </a>
          <a
            className={`font-display-xl text-3xl transition-colors interactive uppercase tracking-tighter font-bold ${activeSection === 'footer' ? 'text-primary' : 'text-on-surface hover:text-primary'}`}
            href="#footer"
            onClick={(e) => handleNavClick(e, 'footer')}
          >
            {t('nav.contact')}
          </a>
          <a 
            href="/OscarFloresGaitanCV_ENGLISH.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="brutalist-btn-secondary py-4 px-8 text-xl mt-4 interactive"
          >
            {t('nav.download_cv')}
          </a>
        </div>
      </div>
    </>
  );
}
