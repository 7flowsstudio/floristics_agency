import StarsLayer from '@/components/layout/StarsLayer';
import { galleryStars } from '@/decorations/galleryStars';

export default function PhotosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex-1">
      <StarsLayer stars={galleryStars} />
      <main className="relative z-20 flex-1 scroll-smooth scroll-pt-12.5 overflow-x-hidden w-full">
        {children}
      </main>
    </div>
  );
}
