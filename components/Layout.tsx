
import React from 'react';
import { Instagram, Youtube, MapPin, Feather } from 'lucide-react';
import { SurrealBirdChat } from './SurrealBirdChat';

const SpotifyIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141 4.2-1.32 9.6-0.66 13.261 1.56.42.18.6.72.48 1.26zm.12-3.36C14.939 8.4 8.699 8.16 5.1 9.239c-.6.18-1.26-.12-1.439-.72-.18-.6.12-1.26.72-1.44 4.08-1.26 11.04-1.02 15.361 1.56.6.359.78 1.14.42 1.74-.361.6-1.081.78-1.681.42z"/>
  </svg>
);

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen surreal-gradient overflow-x-hidden selection:bg-lime-500/30">
      {/* Background Motifs */}
      <div className="fixed top-20 left-10 opacity-10 pointer-events-none floating-origami hidden lg:block">
        <Feather size={200} className="text-white" />
      </div>
      <div className="fixed bottom-20 right-10 opacity-10 pointer-events-none floating-origami hidden lg:block" style={{ animationDelay: '2s' }}>
        <img src="https://picsum.photos/seed/bird/300/300" className="w-64 h-64 grayscale rounded-full" alt="" />
      </div>

      {/* Interactive Surreal Chatbot Bird */}
      <SurrealBirdChat />

      {/* Social Bar - Sticky Sidebar */}
      <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4 p-4 glass-panel rounded-r-2xl border-l-0 shadow-xl">
        <a href="https://www.instagram.com/espaciolodemaria" target="_blank" rel="noopener noreferrer" 
           className="text-gray-400 hover:text-yellow-400 transition-colors p-2" title="Instagram">
          <Instagram size={24} />
        </a>
        <a href="https://www.youtube.com/@espaciolodemaria9327" target="_blank" rel="noopener noreferrer" 
           className="text-gray-400 hover:text-red-500 transition-colors p-2" title="YouTube">
          <Youtube size={24} />
        </a>
        <a href="https://open.spotify.com/show/2iwDnXWdebopxHYwZbpWiQ?si=625e038fc94b4ec9" target="_blank" rel="noopener noreferrer" 
           className="text-gray-400 hover:text-green-500 transition-colors p-2" title="Spotify">
          <SpotifyIcon size={24} />
        </a>
      </div>

      <header className="py-12 px-6 border-b border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left relative z-10">
            <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight text-white mb-2 italic">
              Espacio Multicultural <br/>
              <span className="text-yellow-400">Lo de María</span>
            </h1>
            <p className="text-gray-400 flex items-center justify-center md:justify-start gap-2 uppercase tracking-widest text-xs">
              <MapPin size={14} /> Zárate, Buenos Aires
            </p>
          </div>
          
          <div className="hidden md:block glass-panel p-4 rounded-xl sepia-vibe">
             <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center overflow-hidden">
                   <img src="https://picsum.photos/seed/origami/100/100" className="object-cover" alt="" />
                </div>
                <div>
                   <p className="text-xs text-gray-400 italic">"El Palomar de la Tía María"</p>
                   <p className="text-sm font-semibold">Radio • Streaming • Podcast</p>
                </div>
             </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        {children}
      </main>

      <footer className="py-12 px-6 border-t border-white/5 text-center text-gray-500 text-sm">
        <div className="mb-6 flex justify-center gap-6">
           <a href="#" className="hover:text-white transition-colors">Aviso Legal</a>
           <a href="#" className="hover:text-white transition-colors">Contacto</a>
           <a href="#" className="hover:text-white transition-colors">Prensa</a>
        </div>
        <p>2021 Espacio Multicultural Lo de María. Derechos Reservados</p>
      </footer>
    </div>
  );
};
