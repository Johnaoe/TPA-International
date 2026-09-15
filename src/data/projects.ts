// Import images
import gallery1 from '../assets/gallery-1.webp';
import gallery2 from '../assets/gallery-2.webp';
import gallery3 from '../assets/gallery-3.webp';
import gallery4 from '../assets/gallery-4.webp';
import gallery5 from '../assets/gallery-5.webp';
import gallery6 from '../assets/gallery-6.webp';
import gallery7 from '../assets/gallery-7.webp';
import gallery8 from '../assets/gallery-8.webp';
import gallery9 from '../assets/gallery-9.webp';
import gallery10 from '../assets/gallery-10.webp';
import gallery11 from '../assets/gallery-11.webp';
import gallery12 from '../assets/gallery-12.webp';
import gallery13 from '../assets/gallery-13.webp';
import gallery14 from '../assets/gallery-14.webp';
import gallery17 from '../assets/gallery-17.webp';
import gallery19 from '../assets/gallery-19.webp';

export interface Project {
  id: string;
  images: string[];
}

export const projects: Project[] = [
  {
    id: 'connessioni2025',
    images: [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6]
  },
  {
    id: 'healthyHabits2026',
    images: [gallery7, gallery8, gallery9, gallery10, gallery11, gallery12, gallery13, gallery14, gallery15, gallery16]
  }
];
