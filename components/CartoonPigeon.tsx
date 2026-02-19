
import React from 'react';

export const CartoonPigeon: React.FC = () => {
  return (
    <div className="fixed bottom-0 right-4 z-40 w-32 h-32 pointer-events-none md:w-48 md:h-48 hidden sm:block">
      <svg viewBox="0 0 200 200" className="w-full h-full mascot-hover filter drop-shadow-xl">
        {/* Body */}
        <path d="M50 200 L150 200 L150 120 C150 80 130 50 100 50 C70 50 50 80 50 120 Z" fill="#718096" />
        <path d="M50 120 C50 120 20 140 30 170" stroke="#4A5568" strokeWidth="3" fill="none" />
        
        {/* White Belly */}
        <path d="M70 200 L130 200 L130 130 C130 100 110 90 100 90 C90 90 70 100 70 130 Z" fill="#E2E8F0" />

        {/* Head */}
        <circle cx="100" cy="60" r="45" fill="#718096" />
        
        {/* Eyes (Big and Looney) */}
        <g className="mascot-eyes">
          <circle cx="85" cy="50" r="18" fill="white" stroke="#2D3748" strokeWidth="2" />
          <circle cx="115" cy="50" r="15" fill="white" stroke="#2D3748" strokeWidth="2" />
          
          {/* Pupils (Mismatched for crazy look) */}
          <circle cx="85" cy="50" r="3" fill="black" />
          <circle cx="112" cy="50" r="2" fill="black" />
        </g>

        {/* Beak (Yellow/Orange) */}
        <path d="M90 70 L110 70 L100 90 Z" fill="#F6E05E" stroke="#D69E2E" strokeWidth="1" />
        
        {/* Feather/Hair on top */}
        <path d="M100 15 Q 90 5 80 20" stroke="#718096" strokeWidth="4" fill="none" />
        <path d="M100 15 Q 110 0 120 20" stroke="#718096" strokeWidth="4" fill="none" />

      </svg>
      {/* Speech Bubble */}
      <div className="absolute -top-4 -left-12 bg-white text-black text-xs font-bold p-2 rounded-xl rounded-br-none shadow-lg animate-bounce hidden md:block opacity-90">
        ¡Kuu-kuu!
      </div>
    </div>
  );
};
