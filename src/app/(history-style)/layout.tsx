import { historyStars } from '@/decorations/historyStars';
import StarsLayer from '@/components/layout/StarsLayer';

export default function HistoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen">
      <StarsLayer stars={historyStars} />
      <main className="relative z-20 w-full">{children}</main>
    </div>
  );
}
