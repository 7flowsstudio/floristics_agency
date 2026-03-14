import { aboutStars } from '@/decorations/aboutStars';
import StarsLayer from '@/components/layout/StarsLayer';

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen">
      <StarsLayer stars={aboutStars} />
      <main className="relative z-20 w-full">{children}</main>
    </div>
  );
}
