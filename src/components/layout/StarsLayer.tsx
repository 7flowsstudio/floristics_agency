import Star from '@/components/ui/Star';
import { Star as StarType } from '@/lib/types/stars';

export default function StarsLayer({ stars }: { stars: StarType[] }) {
  return (
    <div className="pointer-events-none absolute inset-0 w-full h-full hidden lg:block z-10 overflow-hidden">
      {stars.map((star, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            ...star.position,
            transform: star.rotate ? `rotate(${star.rotate}deg)` : undefined,
          }}
        >
          <Star svg={star.svg} size={star.size} />
        </div>
      ))}
    </div>
  );
}
