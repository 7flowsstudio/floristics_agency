import SectionHeading from '@/components/ui/SectionHeading';
import StoryBlock from '@/components/sections/StoryBlock';
import { stories } from '@/data/stories';
import GoogleComments from '@/components/sections/GoogleComments';
import CallToAction from '@/components/sections/CallToAction';

const page = () => {
  return (
    <div className="pt-28.75 lg:pt-0">
      <SectionHeading className="font-secondary text-primary text-[36px] md:text-[42px] lg:text-[64px] leading-10 max-w-67.25 mx-auto mb-10 lg:hidden">
        Історії наших учнів та учениць
      </SectionHeading>
      <div className="flex flex-col gap-17.25 lg:gap-0">
        {stories.map((story, i) => (
          <StoryBlock
            key={story.image}
            imageSrc={story.image}
            imageAlt={story.alt}
            testimonial={story.text}
            reverse={i % 2 !== 0}
            showHeading={i === 0}
            paddingX={
              i === 0
                ? { md: 'px-[40px]', lg: 'px-[200px]' }
                : { md: 'px-[60px]', lg: 'px-[105px]' }
            }
          />
        ))}
      </div>
      <GoogleComments />
      <CallToAction
        sectionClassName="pt-[104px] lg:pt-[160px] mx-auto"
        question="Готові отримати такі ж чудові враження та почати свою справу з "
        highlight="with taste?"
        buttonText="Записатися на курс"
        href="/courses"
      />
    </div>
  );
};

export default page;
