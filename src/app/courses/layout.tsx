import StarsLayer from '@/components/layout/StarsLayer';
import { coursesStars } from '@/decorations/coursesStar';

export default function HistoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen">
      <StarsLayer stars={coursesStars} />
      <main className="relative z-20 w-full">{children}</main>
    </div>
  );
}