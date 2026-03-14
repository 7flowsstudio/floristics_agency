import { contactsStars } from '@/decorations/contactsStars';
import StarsLayer from '@/components/layout/StarsLayer';

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen">
      <StarsLayer stars={contactsStars} />
      <main className="relative z-20 w-full">{children}</main>
    </div>
  );
}
