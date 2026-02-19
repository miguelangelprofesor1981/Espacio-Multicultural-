
import React from 'react';
import { SectionInfo, CulturalResource } from '../types';
import { Download, ExternalLink, Play, FileText, Image as ImageIcon, Film, Book } from 'lucide-react';

interface SectionWindowProps {
  section: SectionInfo;
  resources: CulturalResource[];
  isLoading: boolean;
}

const ResourceIcon = ({ type }: { type: CulturalResource['type'] }) => {
  switch (type) {
    case 'audio': return <Play size={20} className="ml-1" />;
    case 'video': return <Film size={20} />;
    case 'image': return <ImageIcon size={20} />;
    case 'document': default: return <FileText size={20} />;
  }
};

export const SectionWindow: React.FC<SectionWindowProps> = ({ section, resources, isLoading }) => {
  
  return (
    <div className="relative w-full min-h-[700px] rounded-[3rem] overflow-hidden glass-panel border border-white/10 shadow-2xl transition-all duration-700 animate-fade-in-up">
      
      {/* Background Layer with Parallax-like fixity or absolute positioning */}
      <div className="absolute inset-0 z-0">
        <img 
          src={section.backgroundImage} 
          alt="" 
          className="w-full h-full object-cover opacity-40 transition-opacity duration-700 scale-110"
        />
        <div className={`absolute inset-0 bg-gradient-to-b ${section.color} mix-blend-multiply opacity-80`} />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </div>

      {/* Decorative surreal elements */}
      <div className="absolute top-10 right-10 z-0 opacity-20 floating-origami">
        <div className="text-white transform rotate-12 scale-150">
            {section.icon}
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 p-8 md:p-12 h-full flex flex-col">
        
        {/* Header */}
        <div className="mb-10 text-center md:text-left border-b border-white/10 pb-8">
          <div className="inline-flex items-center gap-3 mb-4 bg-white/10 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md">
            <span className="text-yellow-400">{section.icon}</span>
            <span className="text-sm uppercase tracking-widest font-bold text-white">{section.name}</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-serif text-white italic mb-4 drop-shadow-lg">
            {section.name === 'Música' ? 'Sonata del Río' : 
             section.name === 'Plástica' ? 'Galería de Sueños' :
             section.name === 'Letras' ? 'Biblioteca Etérea' :
             section.name === 'Filosofía' ? 'El Ágora Infinita' :
             'Escenario Invisible'}
          </h2>
          <p className="text-xl text-gray-200 font-light max-w-2xl italic leading-relaxed">
            "{section.description}"
          </p>
        </div>

        {/* Dynamic Content Area */}
        <div className="flex-1">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map(i => (
                <div key={i} className="h-64 bg-white/5 rounded-2xl animate-pulse border border-white/5"></div>
              ))}
            </div>
          ) : resources.length > 0 ? (
            <div className={`grid gap-6 ${
              section.name === 'Plástica' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' :
              section.name === 'Música' ? 'grid-cols-1' :
              section.name === 'Letras' ? 'grid-cols-1 md:grid-cols-4' :
              'grid-cols-1 md:grid-cols-2'
            }`}>
              {resources.map((res) => (
                <div key={res.id} className={`group relative bg-black/40 backdrop-blur-md border border-white/10 overflow-hidden hover:border-lime-400/50 transition-all duration-300 ${
                  section.name === 'Música' ? 'rounded-xl flex items-center p-4 gap-4 hover:bg-white/10' : 
                  section.name === 'Letras' ? 'rounded-r-lg rounded-l-sm aspect-[3/4] flex flex-col' :
                  'rounded-2xl'
                }`}>
                  
                  {/* Layout for Music (List style) */}
                  {section.name === 'Música' ? (
                    <>
                      <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 border-2 border-white/10 group-hover:border-lime-400 animate-[spin_10s_linear_infinite_paused] group-hover:animate-[spin_4s_linear_infinite]">
                        <img src={res.thumbnail} className="w-full h-full object-cover" alt="" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-white font-bold truncate">{res.title}</h4>
                        <p className="text-gray-400 text-xs truncate">{res.description}</p>
                      </div>
                      <div className="flex gap-2">
                        <button className="w-10 h-10 rounded-full bg-lime-500/20 text-lime-400 flex items-center justify-center hover:bg-lime-500 hover:text-black transition-colors">
                          <Play size={18} fill="currentColor" />
                        </button>
                        <button className="w-10 h-10 rounded-full bg-white/5 text-gray-400 flex items-center justify-center hover:bg-white/20 hover:text-white transition-colors">
                          <Download size={18} />
                        </button>
                      </div>
                    </>
                  ) : section.name === 'Letras' ? (
                    /* Layout for Letras (Book style) */
                    <>
                      <div className="flex-1 p-6 relative bg-gradient-to-br from-white/10 to-transparent flex flex-col justify-center items-center text-center border-l-4 border-l-white/20">
                         <Book size={32} className="text-white/30 mb-4" />
                         <h4 className="text-white font-serif font-bold text-lg leading-tight mb-2 line-clamp-3">{res.title}</h4>
                         <div className="w-8 h-1 bg-lime-500/50 rounded-full mb-2"></div>
                         <p className="text-xs text-gray-400 line-clamp-4">{res.description}</p>
                      </div>
                      <div className="p-3 bg-black/50 border-t border-white/5 flex justify-between items-center">
                        <span className="text-[10px] uppercase text-gray-500">PDF</span>
                        <button className="text-lime-400 hover:text-white transition-colors">
                          <Download size={16} />
                        </button>
                      </div>
                    </>
                  ) : (
                    /* Default Card Layout (Plástica, Teatro, Filosofía) */
                    <>
                      <div className="relative aspect-video overflow-hidden">
                        <img src={res.thumbnail} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110" alt={res.title} />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                           <button className="p-3 bg-white/10 rounded-full backdrop-blur hover:bg-lime-500 hover:text-black transition-colors">
                             <ExternalLink size={20} />
                           </button>
                        </div>
                        <div className="absolute top-2 left-2 bg-black/60 backdrop-blur px-2 py-1 rounded text-[10px] uppercase text-white border border-white/10">
                          {res.type}
                        </div>
                      </div>
                      <div className="p-5">
                        <h4 className="text-xl font-bold text-white mb-2 font-serif">{res.title}</h4>
                        <p className="text-gray-400 text-sm font-light mb-4 line-clamp-2">{res.description}</p>
                        <div className="flex items-center gap-2 pt-4 border-t border-white/5">
                           <button className="flex items-center gap-2 text-xs text-lime-400 hover:text-white transition-colors">
                             <ResourceIcon type={res.type} />
                             {res.type === 'document' ? 'Leer Documento' : res.type === 'audio' ? 'Escuchar' : 'Ver Archivo'}
                           </button>
                        </div>
                      </div>
                    </>
                  )}

                </div>
              ))}
            </div>
          ) : (
            <div className="h-64 flex flex-col items-center justify-center text-center glass-panel rounded-3xl border-dashed border-white/10 bg-black/20">
              <div className="mb-4 p-4 bg-white/5 rounded-full">
                {section.icon}
              </div>
              <h3 className="text-xl text-white font-serif italic mb-2">Silencio en la Sala</h3>
              <p className="text-gray-500 italic max-w-md">"Aún no han llegado los ecos a esta ventana. El arte está en proceso de gestación..."</p>
            </div>
          )}
        </div>
        
        {/* Footer of the window */}
        <div className="mt-8 pt-4 border-t border-white/5 flex justify-between items-center text-xs text-gray-500 font-mono">
           <span>ARCHIVO: {section.name.toUpperCase()}</span>
           <span>TOTAL: {resources.length} ITEMS</span>
        </div>

      </div>
    </div>
  );
};
