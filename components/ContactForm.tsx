
import React, { useState } from 'react';
import { Send, CheckCircle2, Mail } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'Consulta General',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const destEmail = "el.palomar.de.la.tia.maria@gmail.com";
    const subject = encodeURIComponent(`Consulta Web [${formData.type}] - ${formData.name}`);
    const body = encodeURIComponent(
      `Nombre: ${formData.name}\nEmail: ${formData.email}\nTipo: ${formData.type}\n\nMensaje:\n${formData.message}`
    );

    // Redirigir al cliente de correo
    window.location.href = `mailto:${destEmail}?subject=${subject}&body=${body}`;

    // Simular estado de envío en la UI para feedback
    setSubmitted(true);
    setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', type: 'Consulta General', message: '' });
    }, 8000);
  };

  return (
    <div className="max-w-2xl mx-auto glass-panel p-8 rounded-3xl relative overflow-hidden border border-lime-500/20 shadow-2xl">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-lime-400 via-yellow-400 to-emerald-500"></div>
      
      <div className="mb-8 text-center">
        <h3 className="text-3xl font-serif text-white italic mb-2">Buzón de Vuelo</h3>
        <p className="text-gray-400 font-light mb-4">
          ¿Quieres inscribirte a un taller o proponer una idea? <br/>
          Envíanos tu mensaje a través del éter.
        </p>
        <a href="mailto:el.palomar.de.la.tia.maria@gmail.com" className="inline-flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10 hover:bg-white/10 transition-colors group">
          <Mail size={14} className="text-lime-400 group-hover:scale-110 transition-transform" />
          <span className="text-xs md:text-sm text-lime-400 font-mono select-all">el.palomar.de.la.tia.maria@gmail.com</span>
        </a>
      </div>

      {submitted ? (
        <div className="py-12 flex flex-col items-center justify-center text-center animate-fade-in">
          <div className="w-16 h-16 bg-lime-500/20 rounded-full flex items-center justify-center mb-4 text-lime-400">
            <CheckCircle2 size={32} />
          </div>
          <h4 className="text-2xl text-white font-serif italic mb-2">¡Redireccionando!</h4>
          <p className="text-gray-400 px-4 max-w-md mx-auto">
            Hemos abierto tu aplicación de correo para enviar el mensaje a <span className="text-lime-400">el.palomar.de.la.tia.maria@gmail.com</span>.
            <br/><br/>
            <span className="text-xs opacity-70">Si no ocurre nada, por favor envía el correo manualmente copiando la dirección de arriba.</span>
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-lime-400 font-semibold ml-1">Nombre</label>
              <input 
                required
                type="text" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-black/20 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-lime-400 transition-colors"
                placeholder="Tu nombre terrícola"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-lime-400 font-semibold ml-1">Correo Electrónico</label>
              <input 
                required
                type="email" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-black/20 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-lime-400 transition-colors"
                placeholder="usuario@ejemplo.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-lime-400 font-semibold ml-1">Tipo de Mensaje</label>
            <select 
              value={formData.type}
              onChange={(e) => setFormData({...formData, type: e.target.value})}
              className="w-full bg-black/20 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-lime-400 transition-colors appearance-none"
            >
              <option className="bg-gray-900" value="Consulta General">Consulta General</option>
              <option className="bg-gray-900" value="Inscripción a Taller">Inscripción a Taller</option>
              <option className="bg-gray-900" value="Propuesta Artística">Propuesta Artística</option>
              <option className="bg-gray-900" value="Eventos">Información sobre Eventos</option>
              <option className="bg-gray-900" value="Otros">Otros</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-lime-400 font-semibold ml-1">Tu Mensaje</label>
            <textarea 
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full bg-black/20 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-lime-400 transition-colors"
              placeholder="Escribe aquí tus dudas, sueños o propuestas..."
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-gradient-to-r from-lime-500 to-emerald-600 text-black font-bold py-4 rounded-xl hover:scale-[1.02] transition-transform shadow-lg flex items-center justify-center gap-2"
          >
            <Send size={18} /> ENVIAR MENSAJE
          </button>
        </form>
      )}
    </div>
  );
};
