
import { ReactNode } from 'react';

export type SectionType = 'Plástica' | 'Música' | 'Letras' | 'Filosofía' | 'Teatro';

export interface SectionInfo {
  name: SectionType;
  icon: ReactNode;
  color: string;
  description: string;
  backgroundImage: string;
}

export interface CulturalResource {
  id: string;
  title: string;
  description: string;
  type: 'document' | 'audio' | 'video' | 'image';
  section: SectionType;
  fileUrl: string;
  thumbnail: string;
}

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  tags: string[];
}
