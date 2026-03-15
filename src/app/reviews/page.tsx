import SectionHeading from '@/components/ui/SectionHeading';
import CallToAction from '@/components/sections/CallToAction';
import StoryBlock from '@/components/sections/StoryBlock';
import { stories } from '@/data/stories';

const page = () => {
  return (
    <div className="pt-[115px] pb-[72px] lg:pt-0">
      <div className="flex flex-col gap-[69px] lg:gap-0">
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
    </div>
  );
};

export default page;
