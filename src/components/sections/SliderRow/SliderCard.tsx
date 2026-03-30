import Image from "next/image";

export function SliderCard({ 
  src, 
  index, 
  onClick 
}: { 
  src: string; 
  index: number; 
  onClick: () => void 
}) {
  return (
    <div
      onClick={onClick}
      className="min-w-[295px] h-[318px] lg:w-[520px] lg:h-[580px] shrink-0 snap-start cursor-pointer"
    >
      <Image
        draggable={false}
        className="object-cover w-full h-full rounded-lg"
        src={src}
        alt={`photo-${index}`}
        width={520}
        height={580}
      />
    </div>
  );
}
