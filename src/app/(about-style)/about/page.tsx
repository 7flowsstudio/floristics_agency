import CallToAction from '@/components/sections/CallToAction';
import InstagramInfo from '@/components/sections/InstagramInfo';
import { about } from '@/data/about';
import SliderWithInfo from '@/components/sections/SliderWithInfo';

export type CourseSliderItem = {
  id: string;
  title?: string;
  text: string;
  imageUrl?: string;
};

const page = () => {
  const items: CourseSliderItem[] = about.map((c, index) => ({
    id: c.id.toString(),
    title: c.title,
    text: c.text,
    imageUrl: c.img,
  }));

  return (
    <>
      <SliderWithInfo heading="Про мене" items={items} />
      <InstagramInfo />
      <CallToAction
        text="Якщо ви мрієте про свою справу — ви не самі.
Я тут, щоб ділитись своїм досвідом, підтримкою і знаннями."
        question="Хочеш з нами?"
        buttonText="Хочу творити разом!"
        href="/courses"
      />
    </>
  );
};

export default page;
