import Container from '../layout/Container';
import Image from 'next/image';
import SectionHeading from '../ui/SectionHeading';
import SectionSubheading from '../ui/SectionSubheading';

function Reviews() {
  return (
    <>
      <Container>
        <div className="max-w-110">
          <SectionHeading
            mobileText="Відгуки учнів та учениць"
            desktopText="Історії учнів та учениць"
            className="pt-17 pb-2"
          />
          <SectionSubheading className="pb-6">
            Щирі враження тих, хто вже відкрив для себе творічсть у "With Taste"
          </SectionSubheading>
        </div>
      </Container>

      <div className=" bg-card px-5 pt-8 pb-12 relative rounded-lg overflow-hidden">
        <Image
          className="max-h-[453px] w-full object-cover"
          width={336}
          height={453}
          alt=""
          src="/img/histories/yulia.png"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(236,233,227,0)_61.29%,rgba(236,233,227,0.61)_69.48%,rgba(236,233,227,0.8)_74.5%,rgba(236,233,227,0.94)_84.55%,#ECE9E3_100%)]" />
        <div className="w-full min-w-[288px] absolute inset-0 flex items-end">
          <div className="bg-stone-200/0 backdrop-blur-[2px]">
            <p className="italic tracking-[0.01em] px-10 pb-11">
              Юлія прийшла на навчання з флористики з бажанням спробувати нове й
              знайшла більше, ніж очікувала. Крок за кроком з’явилась
              впевненість: «Мені це справді подобається. Я можу більше». Після
              курсу вона зробила перший сміливий крок — запустила власний
              онлайн-магазин.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reviews;
