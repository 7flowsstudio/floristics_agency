import Container from '../layout/Container';
import Image from 'next/image';
import SectionHeading from '../ui/SectionHeading';
import SectionSubheading from '../ui/SectionSubheading';
import Button from '../ui/Button';

function Reviews() {
  const imageSrc = '/img/reviews/yulia.png';
  const imageAlt = 'Студентка Юлія';
  const testimonial = (
    <>
      Юлія прийшла на навчання з флористики з бажанням спробувати нове й знайшла
      більше, ніж очікувала. Крок за кроком з’явилась впевненість: «Мені це
      справді подобається. Я можу більше». Після курсу вона зробила перший
      сміливий крок — запустила власний онлайн-магазин.
    </>
  );

  const navLinkProps = {
    href: '/reviews',
    iconSrc: '/arrow-right.svg',
    variant: 'outline' as const,
    iconPosition: 'right' as const,
  };
  return (
    <>
      <div className="lg:hidden">
        <Container className="pt-15 pb-6">
          <SectionHeading>Відгуки учнів та учениць</SectionHeading>
          <SectionSubheading>
            Щирі враження тих, хто вже відкрив для себе творічсть у "With Taste"
          </SectionSubheading>
        </Container>
        <div className=" bg-card max-h-133.25 max-w-131.25 mx-auto px-5 pt-8 pb-12 relative rounded-lg overflow-hidden">
          <Image
            className="max-h-113.25 w-full object-cover rounded-lg"
            width={336}
            height={453}
            alt={imageAlt}
            src={imageSrc}
          />
          <div className="absolute left-0 right-0 bottom-0 h-[48%] bg-[linear-gradient(180deg,rgba(236,233,227,0)_0%,rgba(236,233,227,0.6)_40%,#ECE9E3_100%)] pointer-events-none" />

          <div className="absolute left-0 right-0 bottom-0 z-10 flex items-end">
            <div className="w-full bg-stone-200/0 backdrop-blur-[2px] px-4 pb-4 sm:px-10 sm:pb-8">
              <p className="italic tracking-[0.01em] text-sm leading-5 sm:text-base sm:leading-6 max-[361px]:px-3 max-[361px]:pb-0 px-6 pb-4">
                {testimonial}
              </p>
            </div>
          </div>
        </div>
        <Container>
          <div className="flex justify-center mt-10">
            <Button {...navLinkProps} className="w-full md:w-[412px]">
              Дивитися усі відгуки
            </Button>
          </div>
        </Container>
      </div>

      <Container className="hidden lg:flex pt-40">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={412}
          height={555}
          className="rounded-lg object-cover"
        />

        <div className="flex flex-col flex-10/12 justify-between items-center">
          <div className="max-w-110">
            <SectionHeading>Історії учнів та учениць</SectionHeading>
            <SectionSubheading>
              Щирі враження тих, хто вже відкрив для себе творічсть у "With
              Taste"
            </SectionSubheading>
          </div>

          <div className="bg-card w-full rounded-tr-2xl rounded-br-2xl">
            <div className="py-10 max-w-115 mx-auto text-center text-black text-[24px] font-normal font-primary italic tracking-[0.24px] leading-7">
              {testimonial}
            </div>
          </div>

          <Button
            {...navLinkProps}
            className="w-fit self-center px-23.25 py-6 text-[20px]"
          >
            Дивитися усі відгуки
          </Button>
        </div>
      </Container>
    </>
  );
}

export default Reviews;
