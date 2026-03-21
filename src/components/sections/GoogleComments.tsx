import Container from '../layout/Container';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import ReviewCard from '../ui/ReviewCard';
import { reviews } from '@/data/reviews';

function GoogleComments() {
  return (
    <Container className="pt-18">
      <SectionHeading className="w-57.5 md:w-full mx-auto">
        Що нам пишуть на Google Maps
      </SectionHeading>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 items-stretch max-w-263 w-full mx-auto">
        {reviews.slice(0, 2).map(review => (
          <ReviewCard key={review.link} review={review} />
        ))}

        <div className="md:col-span-2 flex justify-center">
          <div className="w-full md:w-1/2">
            <ReviewCard review={reviews[2]} />
          </div>
        </div>
      </div>

      <a
        className="mt-12 max-w-103 mx-auto w-full block"
        href="https://www.google.com/maps/place/With+Taste"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button className="w-full">Більше на Google Maps</Button>
      </a>
    </Container>
  );
}

export default GoogleComments;
