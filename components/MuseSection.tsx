
import React, { useState, useEffect } from 'react';
import { Sparkles, RefreshCw } from 'lucide-react';
import { getArtisticInspiration } from '../geminiService';

export const MuseSection: React.FC = () => {
  const [inspiration, setInspiration] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const fetchInspiration = async () => {
    setLoading(true);
    const text = await getArtisticInspiration('la cultura en Zárate');
    setInspiration(text);
    setLoading(false);
  };

  useEffect(() => {
    fetchInspiration();
  }, []);

  return (
    <div className="glass-panel p-8 rounded-3xl relative overflow-hidden group mb-16">
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
        <Sparkles size={120} />
      </div>
      <div className="relative z-10 max-w-2xl">
        <h3 className="text-lime-400 font-serif italic text-2xl mb-4 flex items-center gap-2">
          La Musa del Palomar 
          {loading && <RefreshCw className="animate-spin" size={18} />}
        </h3>
        <p className="text-xl md:text-2xl text-white font-light leading-relaxed italic">
          "{inspiration}"
        </p>
        <button 
          onClick={fetchInspiration}
          disabled={loading}
          className="mt-6 flex items-center gap-2 text-xs uppercase tracking-widest text-gray-400 hover:text-white transition-colors"
        >
          {loading ? 'Consultando al oráculo...' : 'Invocar nueva inspiración'}
        </button>
      </div>
    </div>
  );
};
