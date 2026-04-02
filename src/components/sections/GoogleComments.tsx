import Container from '../layout/Container';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import ReviewCard from '../ui/ReviewCard';
import { reviews } from '@/data/reviews';

function GoogleComments() {
  return (
    <Container className="pt-18 lg:pt-[116px]">
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
        href="https://www.google.com/maps/place/With+Taste+%D0%9A%D0%B2%D1%96%D1%82%D0%B8%26%D0%9C%D0%B8%D1%81%D1%82%D0%B5%D1%86%D1%82%D0%B2%D0%BE/@50.3993634,30.3903999,17z/data=!3m1!4b1!4m6!3m5!1s0x40d4cb981b1ab65d:0x122fff83a22f9b92!8m2!3d50.39936!4d30.3929748!16s%2Fg%2F11vy89c7rd?entry=ttu&g_ep=EgoyMDI2MDMyNC4wIKXMDSoASAFQAw%3D%3D"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button className="w-full">Більше на Google Maps</Button>
      </a>
    </Container>
  );
}

export default GoogleComments;
