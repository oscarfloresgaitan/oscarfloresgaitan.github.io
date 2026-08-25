import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function TutoringPage() {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.hash = '#teaching';
  };

  const isEs = t('nav.contact') === 'CONTACTO';

  // Content translations
  const content = {
    back: isEs ? 'Volver' : 'Back',
    heroTitle: isEs ? 'Tutorías de Física y Matemáticas' : 'Physics & Math Tutoring',
    heroSubtitle: isEs ? 'Sesiones personalizadas uno a uno para estudiantes de secundaria y universidad.' : 'Personalized one-on-one sessions for high school and university students.',
    contactBtn: isEs ? 'Contactar por Correo' : 'Contact via Email',
    statsTitle: isEs ? 'Estadísticas e Impacto' : 'Statistics & Impact',
    statsHours: isEs ? '350+ Horas' : '350+ Hours',
    statsHoursSub: isEs ? 'De tutorías impartidas' : 'Of tutoring delivered',
    statsStudents: isEs ? '30+ Estudiantes' : '30+ Students',
    statsStudentsSub: isEs ? 'Apoyados' : 'Mentored',
    coursesTitle: isEs ? 'Cursos Impartidos' : 'Courses Covered',
    faqTitle: isEs ? 'Preguntas Frecuentes (FAQ)' : 'Frequently Asked Questions (FAQ)',
    ctaTitle: isEs ? '¿Listo para mejorar tus calificaciones?' : 'Ready to Boost Your Grades?',
    ctaDesc: isEs ? 'Envíame un correo a ofg@udel.edu para coordinar un plan de estudio y consultar disponibilidad adaptada a tus necesidades.' : 'Send me an email at ofg@udel.edu to coordinate a study plan and check availability tailored to your needs.',
  };

  const courses = [
    {
      name: isEs ? 'Física I, II y III' : 'Physics I, II & III',
      desc: isEs 
        ? 'Mecánica, electromagnetismo, termodinámica, ondas, óptica y fundamentos de física moderna.'
        : 'Mechanics, electromagnetism, thermodynamics, waves, optics, and modern physics foundations.',
      tag: isEs ? 'Clases Individuales' : 'One-on-One',
      link: null
    },
    {
      name: isEs ? 'Cálculo I y II' : 'Calculus I & II',
      desc: isEs
        ? 'Límites, derivadas, integrales, optimización, series infinitas y cálculo multivariable básico.'
        : 'Limits, derivatives, integration, optimization, infinite series, and basic multivariable calculus.',
      tag: isEs ? 'Clases Individuales' : 'One-on-One',
      link: null
    },
    {
      name: isEs ? 'Cálculo para Negocios' : 'Calculus for Business',
      desc: isEs
        ? 'Aplicación del cálculo a la economía, optimización de costos, ingresos y modelado financiero.'
        : 'Applications of calculus to economics, cost/revenue optimization, and financial modeling.',
      tag: isEs ? 'Clases Individuales' : 'One-on-One',
      link: null
    },
    {
      name: isEs ? 'Ecuaciones Diferenciales' : 'Differential Equations',
      desc: isEs
        ? 'Ecuaciones diferenciales ordinarias de primer y segundo orden, transformada de Laplace y modelado.'
        : 'First and second-order ordinary differential equations, Laplace transforms, and physical modeling.',
      tag: isEs ? 'Clases Individuales' : 'One-on-One',
      link: null
    },
    {
      name: isEs ? 'Precálculo' : 'Precalculus',
      desc: isEs
        ? 'Álgebra avanzada, funciones trigonométricas, geometría analítica y preparación para cálculo.'
        : 'Advanced algebra, trigonometric functions, analytic geometry, and calculus preparation.',
      tag: isEs ? 'Clases Individuales' : 'One-on-One',
      link: null
    },
    {
      name: isEs ? 'Álgebra Lineal' : 'Linear Algebra',
      desc: isEs
        ? 'Espacios vectoriales, matrices, transformaciones lineales, determinantes, valores y vectores propios, y aplicaciones prácticas.'
        : 'Vector spaces, matrices, linear transformations, determinants, eigenvalues, eigenvectors, and practical applications.',
      tag: isEs ? 'Clases Individuales' : 'One-on-One',
      link: null
    },
    {
      name: isEs ? '¿Buscas otro curso?' : 'Looking for another course?',
      desc: isEs
        ? '¿Necesitas ayuda con otro curso de física o matemáticas? Escríbeme a ofg@udel.edu para evaluar los temas y ver si puedo ayudarte.'
        : 'Need help with a different physics or math course? Send me an email at ofg@udel.edu so we can discuss the syllabus and see if I can assist you.',
      tag: isEs ? 'Enviar Correo' : 'Contact Me',
      link: 'mailto:ofg@udel.edu'
    }
  ];

  const faqs = [
    {
      q: isEs ? '¿Cómo se imparten las clases?' : 'How are sessions conducted?',
      a: isEs 
        ? 'Las clases se imparten en línea a través de Google Meet o Zoom. Utilizo una pizarra digital interactiva para que puedas ver el desarrollo paso a paso de cada ejercicio.'
        : 'Sessions are conducted online via Google Meet or Zoom. I utilize an interactive digital whiteboard so you can follow the step-by-step resolution of every problem.'
    },
    {
      q: isEs ? '¿Tendré acceso a los apuntes de la clase?' : 'Will I have access to session notes afterwards?',
      a: isEs
        ? '¡Sí! El cuaderno de apuntes utilizado durante nuestras sesiones de tutoría se sincroniza a una carpeta compartida de Google Drive, dándote acceso instantáneo a todas las soluciones y notas en cualquier momento para repasar.'
        : 'Yes! The notebook used during our tutoring sessions is automatically synced to a shared Google Drive folder, giving you instant access to all problem solutions and notes anytime to review.'
    },
    {
      q: isEs ? '¿En qué idioma se imparten las clases?' : 'What language are sessions taught in?',
      a: isEs
        ? 'Las clases de tutoría se pueden impartir en inglés o español, según tu preferencia y el material de tu curso.'
        : 'Tutoring sessions can be conducted in English or Spanish, depending on your preference and course materials.'
    },
    {
      q: isEs ? '¿Ofreces tutorías grupales?' : 'Do you offer group tutoring?',
      a: isEs
        ? '¡Sí! Las tutorías grupales están disponibles para un máximo de 4 estudiantes por sesión, lo que reduce el costo por persona manteniendo una enseñanza interactiva de alta calidad.'
        : 'Yes! Group tutoring is available for up to 4 students per session, which reduces the cost per person while maintaining interactive, high-quality instruction.'
    },
    {
      q: isEs ? '¿Qué metodología utilizas?' : 'What is your tutoring methodology?',
      a: isEs
        ? 'Me enfoco en desarrollar la intuición física y matemática antes de las fórmulas. Resolvemos ejercicios prácticos juntos, identificando dudas específicas para fortalecer el razonamiento analítico.'
        : 'I focus on building intuitive understanding of physical and mathematical concepts before diving into formulas. We solve practical exercises together, addressing core doubts to strengthen analytical reasoning.'
    },
    {
      q: isEs ? '¿Con cuánta anticipación debo agendar?' : 'How far in advance should I book?',
      a: isEs
        ? 'Recomiendo ponerse en contacto con al menos 24 a 48 horas de anticipación por correo para consultar disponibilidad y coordinar la sesión.'
        : 'I recommend getting in touch via email at least 24 to 48 hours in advance to check availability and schedule the session.'
    },
    {
      q: isEs ? '¿Ofreces paquetes de clases o tutorías semanales?' : 'Do you offer class packages or weekly tutoring?',
      a: isEs
        ? 'Sí, podemos programar sesiones semanales recurrentes para un seguimiento constante a lo largo del semestre. Escríbeme por correo para acordar los horarios.'
        : 'Yes, we can establish recurring weekly sessions for continuous support throughout the semester. Feel free to contact me via email to coordinate the schedule.'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-on-surface py-12 px-margin-md md:px-margin-lg animate-fade-in">
      <div className="max-w-4xl mx-auto">
        {/* Back navigation */}
        <a 
          href="#teaching" 
          onClick={handleBack}
          className="inline-flex items-center gap-2 font-label-mono text-label-mono text-primary hover:text-primary-light transition-colors mb-8 group"
        >
          <span className="material-symbols-outlined text-sm group-hover:-translate-x-1 transition-transform">arrow_back</span>
          {content.back}
        </a>

        {/* Hero */}
        <div className="border-b border-white/10 pb-8 mb-12">
          <h1 className="font-display-xl text-display-xl text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4 leading-tight">
            {content.heroTitle}
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-4">
            {content.heroSubtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a 
              href="mailto:ofg@udel.edu" 
              className="border-2 border-primary bg-primary text-on-primary font-label-mono text-label-mono px-6 py-3.5 hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 shadow-[4px_4px_0px_0px_rgba(44,63,255,0.4)] flex items-center gap-3 interactive group font-bold"
            >
              <span className="material-symbols-outlined text-lg">mail</span>
              {content.contactBtn}
            </a>
          </div>
        </div>

        {/* Stats Grid */}
        <section className="mb-16">
          <h2 className="font-display-md text-display-md text-2xl uppercase font-bold tracking-tight mb-8 border-b border-surface-variant/30 pb-2">
            {content.statsTitle}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="border border-white/10 bg-surface-container-low p-6 rounded-lg text-center">
              <span className="block font-display-lg text-display-lg text-3xl font-bold text-primary mb-1">{content.statsHours}</span>
              <span className="text-xs font-label-mono text-on-surface-variant uppercase">{content.statsHoursSub}</span>
            </div>
            <div className="border border-white/10 bg-surface-container-low p-6 rounded-lg text-center">
              <span className="block font-display-lg text-display-lg text-3xl font-bold text-primary mb-1">{content.statsStudents}</span>
              <span className="text-xs font-label-mono text-on-surface-variant uppercase">{content.statsStudentsSub}</span>
            </div>
          </div>
        </section>

        {/* Courses list */}
        <section className="mb-16">
          <h2 className="font-display-md text-display-md text-2xl uppercase font-bold tracking-tight mb-8 border-b border-surface-variant/30 pb-2">
            {content.coursesTitle}
          </h2>
          <div className="space-y-4">
            {courses.map((course, i) => (
              <div key={i} className="border border-white/10 bg-surface-container-low p-6 rounded-lg flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="max-w-xl">
                  <h3 className="font-headline-md text-lg font-semibold text-on-surface">{course.name}</h3>
                  <p className="font-body-md text-sm text-on-surface-variant mt-1 leading-relaxed">{course.desc}</p>
                </div>
                {course.link ? (
                  <a 
                    href={course.link}
                    className="self-start md:self-auto text-xs font-label-mono bg-primary text-on-primary hover:bg-primary-light px-3 py-1.5 rounded font-bold uppercase whitespace-nowrap transition-colors flex items-center gap-1.5"
                  >
                    <span className="material-symbols-outlined text-sm">mail</span>
                    {course.tag}
                  </a>
                ) : (
                  <span className="self-start md:self-auto text-xs font-label-mono bg-surface-variant text-on-surface px-2.5 py-1 rounded font-medium uppercase whitespace-nowrap">
                    {course.tag}
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="mb-16">
          <h2 className="font-display-md text-display-md text-2xl uppercase font-bold tracking-tight mb-8 border-b border-surface-variant/30 pb-2">
            {content.faqTitle}
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-white/5 pb-4">
                <h3 className="font-headline-md text-base font-semibold text-primary mb-2 flex gap-2">
                  <span className="text-on-surface-variant/50">Q:</span> {faq.q}
                </h3>
                <p className="font-body-md text-sm text-on-surface-variant leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="border border-primary/30 bg-primary/5 p-8 md:p-12 rounded-xl text-center shadow-[0px_4px_24px_rgba(44,63,255,0.05)]">
          <h2 className="font-display-md text-2xl uppercase font-bold text-on-surface mb-4">
            {content.ctaTitle}
          </h2>
          <p className="font-body-md text-sm text-on-surface-variant max-w-xl mx-auto mb-8 leading-relaxed">
            {content.ctaDesc}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="mailto:ofg@udel.edu" 
              className="border-2 border-primary bg-primary text-on-primary font-label-mono text-label-mono px-6 py-3.5 hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 shadow-[4px_4px_0px_0px_rgba(44,63,255,0.4)] flex items-center gap-3 interactive group font-bold"
            >
              <span className="material-symbols-outlined text-lg">mail</span>
              {isEs ? 'Enviar un Correo' : 'Send an Email'}
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
