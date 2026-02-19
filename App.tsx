
import React, { useState, useEffect } from 'react';
import { Layout } from './components/Layout';
import { MuseSection } from './components/MuseSection';
import { ContactForm } from './components/ContactForm';
import { SectionWindow } from './components/SectionWindow';
import { SECTIONS, MOCK_RESOURCES, MOCK_NEWS } from './constants';
import { SectionType } from './types';
import { ExternalLink, ArrowRight, Newspaper, Youtube } from 'lucide-react';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionType>('Plástica');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Simulate loading when the section changes
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600); // Subtle delay to simulate content retrieval
    return () => clearTimeout(timer);
  }, [activeSection]);

  const filteredResources = MOCK_RESOURCES.filter(r => r.section === activeSection);
  const activeSectionData = SECTIONS.find(s => s.name === activeSection) || SECTIONS[0];

  const handleSectionChange = (section: SectionType) => {
    if (section !== activeSection) {
      setActiveSection(section);
    }
  };

  return (
    <Layout>
      {/* Intro News Ticker Style Section */}
      <section className="mb-16">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-lime-500/20 rounded-full">
            <Newspaper className="text-lime-400" size={24} />
          </div>
          <h2 className="text-3xl font-serif text-white italic">Novedades de Zárate</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {MOCK_NEWS.map(news => (
            <div key={news.id} className="group glass-panel rounded-2xl overflow-hidden hover:border-yellow-500/30 transition-all duration-500 flex flex-col md:grid-cols-3">
              <div className="h-48 md:h-auto overflow-hidden">
                <img src={news.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 sepia-vibe" alt="" />
              </div>
              <div className="p-6 md:col-span-2 flex flex-col justify-between">
                <div>
                  <div className="flex gap-2 mb-3">
                    {news.tags.map(tag => (
                      <span key={tag} className="text-[10px] bg-white/5 px-2 py-0.5 rounded-full uppercase tracking-tighter text-gray-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors">{news.title}</h3>
                  <p className="text-gray-400 text-sm line-clamp-2 italic font-light">{news.excerpt}</p>
                </div>
                <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
                  <span>{news.date}</span>
                  <button className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Leer más <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Muse Component */}
      <MuseSection />

      {/* Main Sections Navigation */}
      <section className="mb-12" id="ventanas">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif text-white mb-4 italic">Ventanas del Espacio</h2>
          <p className="text-gray-400 max-w-xl mx-auto font-light">Explora las dimensiones de nuestra propuesta cultural. Cada ventana abre un universo de archivos, sonidos y visiones.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {SECTIONS.map((section) => (
            <button
              key={section.name}
              onClick={() => handleSectionChange(section.name)}
              className={`px-6 py-4 rounded-full transition-all duration-300 flex items-center gap-3 border ${
                activeSection === section.name 
                  ? `bg-white/10 border-lime-400 text-white shadow-[0_0_20px_rgba(132,204,22,0.3)] scale-105` 
                  : 'bg-black/40 border-white/5 text-gray-400 hover:bg-white/5 hover:text-white'
              }`}
            >
              <span className={`${activeSection === section.name ? 'text-lime-400' : 'text-gray-500'}`}>
                {section.icon}
              </span>
              <span className="text-sm font-semibold tracking-widest uppercase">
                {section.name}
              </span>
            </button>
          ))}
        </div>

        {/* Dedicated Section Window */}
        <SectionWindow 
          section={activeSectionData} 
          resources={filteredResources} 
          isLoading={isLoading} 
        />
      </section>

      {/* Contact Form Section */}
      <section className="mb-20">
        <ContactForm />
      </section>

      {/* Call to Action - YouTube Channel */}
      <section className="py-20 text-center relative overflow-hidden glass-panel rounded-[3rem] border-white/10">
         <div className="absolute inset-0 opacity-10 sepia-vibe pointer-events-none">
            <img src="https://picsum.photos/seed/cinema/1200/400" className="w-full h-full object-cover" alt="" />
         </div>
         <div className="relative z-10 px-6">
            <h2 className="text-4xl font-serif text-white mb-6 italic">Sintonía Visual</h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light">
              Explora nuestras transmisiones, podcast y grabaciones en vivo desde el corazón de Zárate.
            </p>
            <a 
              href="https://www.youtube.com/@espaciolodemaria9327" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-lime-600 hover:text-white transition-all transform hover:scale-105 shadow-2xl"
            >
              <Youtube size={24} /> VISITAR CANAL DE YOUTUBE
            </a>
         </div>
      </section>
    </Layout>
  );
};

export default App;
