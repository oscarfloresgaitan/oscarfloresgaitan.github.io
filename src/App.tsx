import { useState, useEffect } from 'react';
import About from './components/About';
import Cursor from './components/Cursor';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Media from './components/Media';
import CV from './components/CV';
import Navbar from './components/Navbar';
import FloatingLangToggle from './components/FloatingLangToggle';
import OutsideAcademia from './components/OutsideAcademia';
import Publications from './components/Publications';
import Research from './components/Research';
import Starfield from './components/Starfield';
import { LanguageProvider } from './context/LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <Cursor />
      <Starfield />
      <FloatingLangToggle />
      <Navbar />
      <main className="pt-20">
        <Hero />
        <About />
        <Research />
        <Publications />
        <Media />
        <CV />
        <OutsideAcademia />
      </main>
      <Footer />
    </LanguageProvider>
  );
}

