import Image from 'next/image';
import { PaginationDots } from './PaginationsDots';
export function FullscreenSlider({
  isOpen,
  images,
  activeIndex,
  onClose,
  onNavigate,
}: {
  isOpen: boolean;
  images: string[];
  activeIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#9DC6C9] flex flex-col items-center justify-center">
      <button
        onClick={onClose}
        className="absolute top-[76px] right-6 text-[#F7F5F3] text-3xl"
      >
        ✕
      </button>

      <div className="w-full h-[70vh] flex items-center justify-center px-4">
        <Image
          src={images[activeIndex]}
          alt="fullscreen"
          width={1200}
          height={800}
          className="object-contain w-full h-full rounded-lg"
        />
      </div>

      <div className="mt-6">
        <PaginationDots
          total={images.length}
          active={activeIndex}
          onDotClick={onNavigate}
          activeColorClass="bg-[#F7F5F3]"
          inactiveColorClass="bg-[#F7F5F3]/50"
        />
      </div>
    </div>
  );
}
