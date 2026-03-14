import CallToAction from '@/components/sections/CallToAction';
import SliderWithInfo from '@/components/sections/SliderWithInfo';
import { histories } from '@/data/history';

export type SliderItem = {
  id: string;
  title?: string;
  text: (string | string[])[];
  imageUrl?: string;
};

const page = () => {
  const items: SliderItem[] = histories.map((c, index) => ({
    id: c.id.toString(),
    title: c.title,
    text: Array.isArray(c.text) ? c.text : [c.text],
    imageUrl: c.img,
  }));
  return (
    <>
      <SliderWithInfo heading="Трішки історії" items={items} />
      <CallToAction
        text="Це можливо — перетворити ідею на власну справу"
        question="Хочеш, навчу і тебе?"
        buttonText="Обрати курс"
        href="/courses"
        sectionClassName='pt-[36px] md:pt-[160px]'
        textClassName='text-[24px] not-italic md:italic'
        questionClassName='text-[18px] mb-[40px]'
      />
    </>
  );
};

export default page;
