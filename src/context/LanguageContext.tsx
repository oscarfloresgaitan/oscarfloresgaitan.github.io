import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navbar
    'nav.research': 'RESEARCH',
    'nav.publications': 'PUBLICATIONS',
    'nav.media': 'MEDIA',
    'nav.teaching': 'TUTORING',
    'nav.contact': 'CONTACT',
    'nav.resume': 'RESUME',

    // Hero
    'hero.title': 'Oscar a.<br />flores Gaitán',
    'hero.subtitle': 'PhD Student in Astrophysics | Exoplanet Researcher',
    'hero.description': 'I am a physicist focused on leveraging advanced statistical modeling and machine learning to solve complex problems, specializing in the detection and characterization of exoplanets.',
    'hero.research': 'Research',
    'hero.cv': 'CV',

    // CV
    'nav.cv': 'CV',
    'nav.download_cv': 'DOWNLOAD CV',
    'cv.title': 'CV & Experience',
    'cv.download': 'DOWNLOAD PDF',
    'cv.1.year': '2026 - Present',
    'cv.1.title': 'PhD Student in Astrophysics',
    'cv.1.inst': 'University of Delaware',
    'cv.1.desc': '',
    'cv.2.year': '2022 - 2026',
    'cv.2.title': 'Licentiate in Physics',
    'cv.2.inst': 'Universidad del Valle de Guatemala',
    'cv.2.desc': '',
    'cv.3.year': '2025 - 2026',
    'cv.3.title': 'Visiting Undergraduate Researcher',
    'cv.3.inst': 'University of Delaware',
    'cv.3.desc': '',

    // About
    'about.title': 'ABOUT ME',
    'about.text': 'My name is Oscar and I am an incoming PhD student at the Department of Physics and Astronomy at the University of Delaware, working under the guidance of Prof. Sally Dodson-Robinson. I recently graduated with a B.S. in Physics from Universidad del Valle de Guatemala.<br /><br />I have a strong interest in astronomy and astrophysics, particularly in developing and applying statistical and machine learning methods to discover and characterize exoplanets and search for a potential "second Earth". My academic goal is to contribute to the discovery and characterization of new planetary systems and the search for potentially Earth-like worlds.',

    // Research
    'research.title': 'Research',
    'research.ongoing': 'ONGOING',
    'research.1.title': "Barnard’s Star Planetary System",
    'research.1.desc': "A follow-up analysis of the confirmed four-planet system around Barnard's Star using frequency-domain techniques, Gaussian Process (GP) modeling, orbital configuration exploration, and dynamical stability analysis.",
    'research.2.title': 'orbcloud',
    'research.2.desc': 'A Python package to transform exoplanet MCMC posterior chains into 3D orbital probability clouds for physical parameter visualization.',
    'research.3.title': 'ESSP',
    'research.3.desc': 'Participated in <a href="https://essp-eprv.github.io/index.html" target="_blank" rel="noopener" class="text-primary hover:underline font-semibold">ESSP</a>, an international collaboration and friendly competition among teams developing methods to distinguish true exoplanet signals from stellar variability and instrumental noise. Specifically, we tested a method called FDAC (courtesy of Ramirez Delgado & Dodson-Robinson 2025). <a href="https://nexsci.caltech.edu/workshop/2025/posters/Poster_VictorRamirezDelgado_108.pdf" target="_blank" rel="noopener" class="text-primary hover:underline font-semibold whitespace-nowrap">Learn more</a>.',

    // Publications
    'pub.title': 'Publications',
    'pub.inprep': 'IN PREP',
    'pub.1.title': 'How many terrestrial planets orbit Barnard’s Star?',
    'pub.1.desc': 'Manuscript in preparation, 2026.',
    'pub.2.title': 'The Extreme Stellar-Signals Project IV',
    'pub.2.desc': 'Manuscript in preparation, 2026.',

    // Media
    'media.title': 'Media',
    'media.1.title': 'Oscar Flores Gaitán demonstrates the reach of Physics in the search for exoplanets',
    'media.1.type': 'ARTICLE',
    'media.1.year': '2026',
    'media.1.desc': 'A feature article in Actualidad UVG highlighting the reach and impact of undergraduate physics training in exoplanet searches',
    'media.2.title': 'Ciencia UVG: A UVG Physicist in Delaware',
    'media.2.type': 'PODCAST',
    'media.2.year': '2026',
    'media.2.desc': 'An episode of the \'Ciencia UVG\' podcast, discussing my research on exoplanets, my academic journey in physics, and my upcoming PhD studies.',
    'media.3.title': 'Measuring the gravitational acceleration g with a physical pendulum',
    'media.3.type': 'VIDEO',
    'media.3.year': '2024',
    'media.3.desc': 'An educational laboratory video tutorial demonstrating experimental setups and concepts for Physics II undergraduate students at UVG.',
    'media.action.listen': 'LISTEN ON SPOTIFY',
    'media.action.read': 'READ ARTICLE',
    'media.action.watch': 'WATCH ON YOUTUBE',

    // Teaching
    'teaching.title': 'Tutoring',
    'teaching.tutoring.title': 'Private Tutoring',
    'teaching.tutoring.stats': '350+ Hours • 30+ Students',
    'teaching.tutoring.desc': 'I offer personalized one-on-one academic mentoring in mathematics and physics at both high school and college levels, helping students master complex analytical concepts.',
    'teaching.courses.label': 'Courses: ',
    'teaching.tutoring.courses': 'Precalculus, Calculus, Physics, Calculus for Business, Differential Equations, and Linear Algebra',
    'teaching.tutoring.btn': 'Learn More & Book Session',
    'teaching.ta.title': 'Undergraduate Teaching Assistant',
    'teaching.ta.inst': 'Universidad del Valle de Guatemala',
    'teaching.ta.desc': 'Consistently selected by the Physics Department to serve as a TA for seven distinct appointments (Physics I, II, III, and Mechanics I) over two years. Led weekly lab sessions, graded assignments, and authored a new lab guide for Physics II.',

    'outside.title': 'outside academia',
    'outside.1.title': 'Sports',
    'outside.1.desc': 'Outside of academics, I am a sports enthusiast. I like to lift weights, do calisthenics, running, and swimming. I completed an Ironman 70.3, and previously played professional soccer, where I became a two-time national scholar champion. In my free time, I love watching soccer, especially going to the stadium to support my favorite team, CSD Municipal.',
    'outside.2.title': 'History & Languages',
    'outside.2.desc': 'I also enjoy learning languages and studying history. I have been dedicated to researching my ancestry and building my family tree, a project I have been developing for the past 9 years. Additionally, as a hobby, I created and managed Countries Kingdom, a maps and language-focused Instagram page where I shared educational geographic content.',

    // Footer
    'footer.title': 'contact',
    'footer.getintouch': 'Get in touch!',
    'footer.download': 'DOWNLOAD CV',
  },
  es: {
    // Navbar
    'nav.research': 'INVESTIGACIÓN',
    'nav.publications': 'PUBLICACIONES',
    'nav.media': 'MEDIOS',
    'nav.teaching': 'TUTORÍAS',
    'nav.contact': 'CONTACTO',
    'nav.resume': 'CURRÍCULUM',

    // Hero
    'hero.title': 'Oscar a.<br />flores Gaitán',
    'hero.subtitle': 'Estudiante de Doctorado en Astrofísica | Investigador de Exoplanetas',
    'hero.description': 'Soy un físico enfocado en el modelado estadístico avanzado y el aprendizaje automático para resolver problemas complejos, especializándome en la detección y caracterización de exoplanetas.',
    'hero.research': 'Investigación',
    'hero.cv': 'CV',

    // CV
    'nav.cv': 'CV',
    'nav.download_cv': 'DESCARGAR CV',
    'cv.title': 'CV y Experiencia',
    'cv.download': 'DESCARGAR PDF',
    'cv.1.year': '2026 - Presente',
    'cv.1.title': 'Estudiante de Doctorado en Astrofísica',
    'cv.1.inst': 'Universidad de Delaware',
    'cv.1.desc': '',
    'cv.2.year': '2022 - 2026',
    'cv.2.title': 'Licenciatura en Física',
    'cv.2.inst': 'Universidad del Valle de Guatemala',
    'cv.2.desc': '',
    'cv.3.year': '2025 - 2026',
    'cv.3.title': 'Investigador Visitante de Pregrado',
    'cv.3.inst': 'Universidad de Delaware',
    'cv.3.desc': '',

    // About
    'about.title': 'SOBRE MÍ',
    'about.text': 'Mi nombre es Oscar y soy estudiante de doctorado en el Departamento de Física y Astronomía de la Universidad de Delaware, trabajando bajo la guía de la Prof. Sally Dodson-Robinson. Recientemente me gradué de la Licenciatura en Física de la Universidad del Valle de Guatemala.<br /><br />Tengo un gran interés en la astronomía y la astrofísica, particularmente en el desarrollo y la aplicación de métodos estadísticos y de aprendizaje automático para descubrir y caracterizar exoplanetas y buscar una potencial "segunda Tierra". Mi objetivo académico es contribuir al descubrimiento y caracterización de nuevos sistemas planetarios y a la búsqueda de mundos potencialmente similares a la Tierra.',

    // Research
    'research.title': 'Investigación',
    'research.ongoing': 'EN CURSO',
    'research.1.title': "Sistema Planetario de la Estrella de Barnard",
    'research.1.desc': "Un análisis de seguimiento del sistema confirmado de cuatro planetas alrededor de la Estrella de Barnard utilizando técnicas en el dominio de la frecuencia, modelado de Procesos Gaussianos (GP), exploración de configuraciones orbitales y análisis de estabilidad dinámica.",
    'research.2.title': 'orbcloud',
    'research.2.desc': 'Un paquete de Python para transformar cadenas a posteriori de MCMC de exoplanetas en nubes de probabilidad orbital 3D para la visualización de parámetros físicos.',
    'research.3.title': 'ESSP',
    'research.3.desc': 'Participé en <a href="https://essp-eprv.github.io/index.html" target="_blank" rel="noopener" class="text-primary hover:underline font-semibold">ESSP</a>, una colaboración internacional y competencia amistosa entre equipos que desarrollan métodos para distinguir señales reales de exoplanetas de la variabilidad estelar y del ruido instrumental. Específicamente, probamos un método llamado FDAC (cortesía de Ramirez Delgado & Dodson-Robinson 2025). <a href="https://nexsci.caltech.edu/workshop/2025/posters/Poster_VictorRamirezDelgado_108.pdf" target="_blank" rel="noopener" class="text-primary hover:underline font-semibold whitespace-nowrap">Más información</a>.',

    // Publications
    'pub.title': 'Publicaciones',
    'pub.inprep': 'EN PREPARACIÓN',
    'pub.1.title': 'How many terrestrial planets orbit Barnard’s Star?',
    'pub.1.desc': 'Manuscrito en preparación, 2026.',
    'pub.2.title': 'The Extreme Stellar-Signals Project IV',
    'pub.2.desc': 'Manuscrito en preparación, 2026.',

    // Media
    'media.title': 'Medios',
    'media.1.title': 'El Lic. Oscar Flores Gaitán demuestra el alcance de la Física en la búsqueda de exoplanetas',
    'media.1.type': 'ARTÍCULO',
    'media.1.year': '2026',
    'media.1.desc': 'Un artículo destacado de Actualidad UVG que resalta el alcance e impacto de la formación en física en la búsqueda de exoplanetas.',
    'media.2.title': 'Ciencia UVG: Un físico UVG en Delaware',
    'media.2.type': 'PÓDCAST',
    'media.2.year': '2026',
    'media.2.desc': 'Un episodio de pódcast conversando sobre mi investigación en exoplanetas, mi trayectoria en la carrera de física y mi preparación para los estudios de doctorado.',
    'media.3.title': 'Midiendo la aceleración de la gravedad g con un péndulo físico',
    'media.3.type': 'VIDEO',
    'media.3.year': '2024',
    'media.3.desc': 'Un video tutorial educativo de laboratorio que demuestra montajes y conceptos experimentales para estudiantes de física II de la UVG.',
    'media.action.listen': 'ESCUCHAR EN SPOTIFY',
    'media.action.read': 'LEER ARTÍCULO',
    'media.action.watch': 'VER EN YOUTUBE',

    // Teaching
    'teaching.title': 'Tutorías',
    'teaching.tutoring.title': 'Tutorías Privadas',
    'teaching.tutoring.stats': '350+ Horas • 30+ Estudiantes',
    'teaching.tutoring.desc': 'Ofrezco mentoría académica personalizada e individual en matemáticas y física para niveles de secundaria y universidad, ayudando a estudiantes a dominar conceptos analíticos complejos.',
    'teaching.courses.label': 'Cursos: ',
    'teaching.tutoring.courses': 'Precálculo, Cálculo, Física, Cálculo para Negocios, Ecuaciones Diferenciales y Álgebra Lineal',
    'teaching.tutoring.btn': 'Saber Más y Agendar Clase',
    'teaching.ta.title': 'Auxiliar de Cátedra de Pregrado',
    'teaching.ta.inst': 'Universidad del Valle de Guatemala',
    'teaching.ta.desc': 'Seleccionado consistentemente por el Departamento de Física para servir como Auxiliar de Cátedra (TA) en siete nombramientos distintos (Física I, II, III y Mecánica I) durante dos años. Dirigí sesiones semanales de laboratorio, califiqué asignaciones y redacté una nueva guía de laboratorio para Física II.',

    // Outside
    'outside.title': 'Fuera de la Academia',
    'outside.1.title': 'Deportes',
    'outside.1.desc': 'Fuera de lo académico, soy un entusiasta de los deportes. Me gusta levantar pesas, hacer calistenia, correr y nadar. Completé un Ironman 70.3 y anteriormente jugué fútbol profesional, donde me convertí en dos veces campeón nacional escolar. En mi tiempo libre, disfruto ver fútbol, especialmente ir al estadio a apoyar a mi equipo favorito, el CSD Municipal (El único grande de Guatemala).',
    'outside.2.title': 'Historia e Idiomas',
    'outside.2.desc': 'También disfruto aprender idiomas y estudiar historia. Me he dedicado a construir mi árbol genealógico, un proyecto que he estado desarrollando durante los últimos 9 años. Además, como pasatiempo, creé y administré Countries Kingdom, una página de Instagram enfocada en mapas e idiomas donde compartía contenido geográfico educativo.',

    // Footer
    'footer.title': 'Contacto',
    'footer.getintouch': '¡Conectemos!',
    'footer.download': 'DESCARGAR CV',
  }
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: () => '',
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
