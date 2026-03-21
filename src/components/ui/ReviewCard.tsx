import Image from 'next/image';
import { Review } from '@/lib/types/review';
type ReviewCardProps = {
  review: Review;
};

function ReviewCard({ review }: ReviewCardProps) {
  return (
    <a
      href={review.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group h-full flex flex-col justify-between gap-4 bg-card rounded-lg px-3 py-5 lg:px-6 cursor-pointer
                 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="flex justify-between gap-3 items-start">
        <p className="text-sm min-w-0 lg:text-base line-clamp-5">
          {review.text}
        </p>

        <div className="w-36 h-24 relative shrink-0 overflow-hidden rounded-sm">
          <Image
            src={review.image}
            alt={review.name}
            fill
            sizes="(max-width: 768px) 100vw, 144px"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </div>

      <div className="flex justify-between items-center text-xs">
        <p className="text-foundationGreyDark">{review.name}</p>
        <span className="underline text-primary group-hover:text-primaryActive transition-colors">
          Дивитись оригінал
        </span>
      </div>
    </a>
  );
}

export default ReviewCard;
