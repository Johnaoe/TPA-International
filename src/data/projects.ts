// Import images
import gallery1 from '../assets/gallery-1.webp';
import gallery2 from '../assets/gallery-2.webp';
import gallery3 from '../assets/gallery-3.webp';
import gallery4 from '../assets/gallery-4.webp';
import gallery5 from '../assets/gallery-5.webp';
import gallery6 from '../assets/gallery-6.webp';

export interface Project {
  id: string;
  images: string[];
}

export const projects: Project[] = [
  {
    id: 'connessioni2025',
    images: [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6]
  }
];
