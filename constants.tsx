
import React from 'react';
import { SectionType, CulturalResource, NewsItem, SectionInfo } from './types';
import { Palette, Music, BookOpen, BrainCircuit, Theater } from 'lucide-react';

export const SECTIONS: SectionInfo[] = [
  { 
    name: 'Plástica', 
    icon: <Palette size={24} />, 
    color: 'from-yellow-500/20 to-lime-600/20',
    description: 'Donde el color sueña con la forma y el lienzo es un espejo del alma.',
    backgroundImage: 'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?q=80&w=1000&auto=format&fit=crop'
  },
  { 
    name: 'Música', 
    icon: <Music size={24} />, 
    color: 'from-emerald-500/20 to-teal-500/20',
    description: 'El eco invisible que dibuja el tiempo en el aire del Paraná.',
    backgroundImage: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1000&auto=format&fit=crop'
  },
  { 
    name: 'Letras', 
    icon: <BookOpen size={24} />, 
    color: 'from-green-600/20 to-lime-400/20',
    description: 'Laberintos de tinta y silencio donde las palabras florecen.',
    backgroundImage: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=1000&auto=format&fit=crop'
  },
  { 
    name: 'Filosofía', 
    icon: <BrainCircuit size={24} />, 
    color: 'from-fuchsia-900/30 to-purple-800/30',
    description: 'El espejo profundo donde la mente se interroga a sí misma.',
    backgroundImage: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=1000&auto=format&fit=crop'
  },
  { 
    name: 'Teatro', 
    icon: <Theater size={24} />, 
    color: 'from-amber-500/20 to-orange-500/20',
    description: 'Máscaras que revelan la verdad en un escenario de sombras y luz.',
    backgroundImage: 'https://images.unsplash.com/photo-1503095392269-27528ca388ec?q=80&w=1000&auto=format&fit=crop'
  },
];

export const MOCK_RESOURCES: CulturalResource[] = [
  {
    id: '1',
    title: 'Surrealismo en el Paraná',
    description: 'Ensayo sobre las influencias oníricas en los pintores de la zona de Zárate.',
    type: 'document',
    section: 'Plástica',
    fileUrl: '#',
    thumbnail: 'https://picsum.photos/seed/art1/400/300',
  },
  {
    id: '2',
    title: 'Acordes de la Tía María',
    description: 'Grabación experimental de ambiente sonoro en el palomar.',
    type: 'audio',
    section: 'Música',
    fileUrl: '#',
    thumbnail: 'https://picsum.photos/seed/music1/400/300',
  },
  {
    id: '3',
    title: 'Antología del Silencio',
    description: 'Poemas seleccionados de autores locales del certamen 2024.',
    type: 'document',
    section: 'Letras',
    fileUrl: '#',
    thumbnail: 'https://picsum.photos/seed/lit1/400/300',
  },
  {
    id: '4',
    title: 'Dramaturgia de Emergencia',
    description: 'Guion para teatro independiente sobre la vida en el río.',
    type: 'document',
    section: 'Teatro',
    fileUrl: '#',
    thumbnail: 'https://picsum.photos/seed/theater1/400/300',
  },
    {
    id: '5',
    title: 'Partituras del Viento',
    description: 'Composiciones originales para guitarra y flauta.',
    type: 'document',
    section: 'Música',
    fileUrl: '#',
    thumbnail: 'https://picsum.photos/seed/music2/400/300',
  },
  {
    id: '6',
    title: 'El Mito de Sísifo en Zárate',
    description: 'Reflexiones filosóficas sobre la cotidianidad urbana.',
    type: 'document',
    section: 'Filosofía',
    fileUrl: '#',
    thumbnail: 'https://picsum.photos/seed/phil1/400/300',
  },
  {
    id: '7',
    title: 'Galería de Sombras',
    description: 'Colección de fotografías abstractas del puente.',
    type: 'image',
    section: 'Plástica',
    fileUrl: '#',
    thumbnail: 'https://picsum.photos/seed/art2/400/300',
  },
];

export const MOCK_NEWS: NewsItem[] = [
  {
    id: 'n1',
    title: 'Inauguración de la Muestra "Espejos Infinitos"',
    excerpt: 'Este sábado en La Dispensa, exploraremos la visión surrealista de María...',
    date: '24 de Mayo, 2024',
    image: 'https://picsum.photos/seed/news1/600/400',
    tags: ['Zárate', 'Arte'],
  },
  {
    id: 'n2',
    title: 'Concierto Bajo el Palomar',
    excerpt: 'Noche de jazz y folklore experimental en el jardín del Espacio Multicultural.',
    date: '30 de Mayo, 2024',
    image: 'https://picsum.photos/seed/news2/600/400',
    tags: ['Música', 'Evento'],
  },
];
