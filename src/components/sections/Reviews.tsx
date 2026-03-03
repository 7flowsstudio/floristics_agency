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
      <Container>
        <div className="flex flex-col md:flex-row items-stretch py-17 pb-6 md:py-40">
          <div className="order-1 md:order-2 flex flex-col items-center md:justify-between">
            <div className="max-w-110">
              <SectionHeading
                mobileText="Відгуки учнів та учениць"
                desktopText="Історії учнів та учениць"
              />
              <SectionSubheading>
                Щирі враження тих, хто вже відкрив для себе творічсть у "With
                Taste"
              </SectionSubheading>
            </div>

            <div className="hidden md:block px-6 md:px-50.5 py-10 bg-card rounded-tr-2xl rounded-br-2xl justify-center items-center">
              <div className="hidden md:block md:w-115 text-center justify-start text-black md:text-2xl font-normal font-primary italic tracking-[0.24px] leading-7">
                {testimonial}
              </div>
            </div>
            <div className="hidden md:block">
              <Button
                {...navLinkProps}
                className="w-fit self-center px-23.25 py-6 text-[20px]"
              >
                Дивитися усі відгуки
              </Button>
            </div>
          </div>

          <div className="order-2 md:order-1 hidden md:block w-full">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={412}
              height={555}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </Container>
      <div className="md:hidden">
        <div className=" bg-card max-h-133.25 px-5 pt-8 pb-12 relative rounded-lg overflow-hidden">
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
          <Button {...navLinkProps} className="w-full mt-8">
            Дивитися усі відгуки
          </Button>
        </Container>
      </div>
    </>
  );
}

export default Reviews;
