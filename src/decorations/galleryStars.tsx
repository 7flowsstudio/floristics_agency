import { Star } from '@/lib/types/stars';
import Star2 from '@/components/ui/decorations/Star2';
import Star3 from '@/components/ui/decorations/Star3';
import Star4 from '@/components/ui/decorations/Star4';
import Star5 from '@/components/ui/decorations/Star5';

export const galleryStars: Star[] = [
  { svg: <Star3 />, position: { top: '0', left: '44%' } },
  { svg: <Star4 />, position: { left: '0', top: '55vh' } },
  { svg: <Star2 />, position: { left: '15%', top: '120vh' } },
  { svg: <Star5 />, position: { right: '0', top: '165vh' } },
];
