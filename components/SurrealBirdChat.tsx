
import React, { useState, useRef, useEffect } from 'react';
import { X, Send, MessageCircle } from 'lucide-react';
import { chatWithBird } from '../geminiService';

interface Message {
  role: 'user' | 'model';
  content: string;
}

const OrigamiLogo = ({ className = "" }: { className?: string }) => (
  <div className={`relative rounded-full bg-green-700 border-2 border-green-800 flex items-center justify-center overflow-hidden shadow-xl ${className}`}>
    {/* Texture overlay */}
    <div className="absolute inset-0 bg-white opacity-5 mix-blend-overlay" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M1 1h2v2H1V1zm4 4h2v2H5V5zm4 4h2v2H9V9z\' fill=\'%23ffffff\' fill-opacity=\'0.2\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")'}}></div>
    
    {/* Origami Bird SVG */}
    <svg viewBox="0 0 100 100" className="absolute w-[80%] h-[80%] top-[-5%] drop-shadow-lg" style={{filter: 'drop-shadow(2px 4px 4px rgba(0,0,0,0.3))'}}>
      {/* Right Wing */}
      <path d="M50 60 L90 30 L60 40 Z" fill="#e5e5e5" />
      {/* Left Wing */}
      <path d="M50 60 L10 30 L40 40 Z" fill="#f5f5f5" />
      {/* Body/Tail */}
      <path d="M50 60 L50 90 L30 50 Z" fill="#d4d4d4" />
      <path d="M50 60 L50 90 L70 50 Z" fill="#cccccc" />
      {/* Head/Neck */}
      <path d="M40 40 L20 20 L15 25 L25 45 Z" fill="#ffffff" />
      {/* Central triangle */}
      <path d="M40 40 L60 40 L50 60 Z" fill="#f0f0f0" />
    </svg>

    {/* Text Overlay */}
    <div className="absolute bottom-[10%] w-full text-center z-10 leading-none pointer-events-none">
      <div className="font-black text-yellow-400 font-sans tracking-tighter drop-shadow-[0_2px_0_rgba(0,0,0,0.8)]" style={{ textShadow: '1px 1px 0 #000' }}>
         <div className="text-[0.6em] sm:text-[0.7em]">EL PALOMAR</div>
         <div className="text-[0.7em] sm:text-[0.8em]">DE LA TÍA</div>
         <div className="text-[1em] sm:text-[1.2em]">MARÍA</div>
      </div>
    </div>
  </div>
);

export const SurrealBirdChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', content: '¡Kuu-kuu! Soy el guardián de este espacio. ¿En qué puedo ayudarte hoy?' }
  ]);
  const [input, setInput] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input;
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setInput('');
    setIsThinking(true);

    const history = messages.map(m => ({ role: m.role, content: m.content }));
    const reply = await chatWithBird(history, userMsg);

    setMessages(prev => [...prev, { role: 'model', content: reply }]);
    setIsThinking(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      
      {/* Chat Window */}
      {isOpen && (
        <div className="pointer-events-auto mb-4 w-80 md:w-96 glass-panel rounded-2xl border border-green-500/30 shadow-2xl overflow-hidden flex flex-col animate-fade-in-up origin-bottom-right bg-black/80 backdrop-blur-xl h-[450px]">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-900 to-black p-4 border-b border-white/10 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 overflow-hidden rounded-full border border-yellow-400 shadow-md">
                 <OrigamiLogo className="w-full h-full text-[8px]" />
              </div>
              <div>
                <span className="font-bold text-yellow-400 block leading-tight text-sm">El Palomar</span>
                <span className="text-xs text-green-200">Asistente Virtual</span>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-green-700/40 border border-green-500/20 text-white rounded-tr-none' 
                      : 'bg-white/10 border border-white/10 text-gray-200 rounded-tl-none font-light shadow-lg'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {isThinking && (
              <div className="flex justify-start">
                <div className="bg-white/5 border border-white/10 p-3 rounded-2xl rounded-tl-none">
                   <div className="flex gap-1">
                     <span className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></span>
                     <span className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                     <span className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                   </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSend} className="p-3 border-t border-white/10 bg-black/40">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Escribe tu consulta..."
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-yellow-400/50 transition-colors placeholder:text-gray-500"
              />
              <button 
                type="submit"
                disabled={isThinking || !input.trim()}
                className="bg-green-700 hover:bg-green-600 text-white p-2 rounded-xl transition-colors disabled:opacity-50"
              >
                <Send size={18} />
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Launcher Button (The Logo) */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="pointer-events-auto group relative w-24 h-24 md:w-32 md:h-32 focus:outline-none transition-transform hover:scale-105 active:scale-95"
      >
        <div className={`w-full h-full transition-all duration-500 ${isOpen ? 'rotate-180 opacity-0 scale-50' : 'rotate-0 opacity-100 scale-100'}`}>
           <OrigamiLogo className="w-full h-full text-[12px] md:text-[16px]" />
           
           {/* Notification Badge */}
           <div className="absolute top-0 right-0 bg-red-500 w-4 h-4 rounded-full border border-black animate-pulse"></div>
           
           {/* Chat Hint Bubble */}
           <div className="absolute -top-8 right-0 bg-white text-black text-[10px] font-bold px-3 py-1 rounded-lg rounded-br-none shadow-lg animate-bounce opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              <div className="flex items-center gap-1">
                 <MessageCircle size={10} />
                 <span>¡Hola! ¿Charlamos?</span>
              </div>
           </div>
        </div>

        {/* Close Icon when open */}
        <div className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-all duration-500 ${isOpen ? 'rotate-0 opacity-100 scale-100' : '-rotate-180 opacity-0 scale-50'}`}>
          <div className="w-14 h-14 bg-black/80 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md">
            <X className="text-white" size={24} />
          </div>
        </div>
      </button>
    </div>
  );
};
