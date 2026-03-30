import CallToAction from '@/components/sections/CallToAction';
import SectionHeading from '@/components/ui/SectionHeading';
import { SliderRow } from '@/components/sections/SliderRow';
import { floristicImages, foodImages, meetImages } from '@/data/gallery';

export default function Gallery() {
  return (
    <div className="pt-[105px] lg:pt-[180px]">
      <SectionHeading className="font-secondary text-primary text-[36px] md:text-[42px] lg:text-[64px] leading-10 lg:mb-[72px]">
        Фотоальбом
      </SectionHeading>

        <div className="max-w-[1580px] mx-auto flex flex-col mt-[32px] gap-[32px] lg:gap-[144px]">
          <SliderRow title="Флористика" images={floristicImages} />
          <SliderRow title="Food-Флористика" images={foodImages} />
          <SliderRow title="Зустріч з Food-Флористики" images={meetImages} />
        </div>


      <CallToAction
        sectionClassName="pt-[44px] lg:pt-[204px]"
        text="Тут - не просто фото, тут - наші будні, натхнення і магія того, що відбувається за лаштунками."
        question="Обери курс щоб стати частинкою цієї творчої магії!"
        buttonText="Обрати курс"
        href="/courses"
      />
    </div>
  );
}
