import { historyStars } from '@/decorations/historyStars';
import StarsLayer from '@/components/layout/StarsLayer';

export default function HistoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StarsLayer stars={historyStars} />
      <main className="relative z-20 flex-1 bg-background scroll-smooth scroll-pt-12.5 overflow-x-hidden w-full">
        {children}
      </main>
    </>
  );
}
