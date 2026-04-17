'use client';
import SectionHeading from '@/components/ui/SectionHeading';
import StoryBlock from '@/components/sections/StoryBlock';
import { stories } from '@/data/stories';
import GoogleComments from '@/components/sections/GoogleComments';
import CallToAction from '@/components/sections/CallToAction';
import Slider from '@/components/ui/Slider'; 

const page = () => {
  return (
    <div className="pt-28.75 lg:pt-0">
      <div className="lg:hidden">
        <SectionHeading className="font-secondary text-primary text-[36px] md:text-[42px] leading-10 text-center mb-8 px-5">
          Історії наших учнів та учениць
        </SectionHeading>

        <div className="bg-card pt-8 pb-12">
          <Slider
            items={stories}
            gap={20}
            containerClassName="px-5"
            renderCard={(story, index) => (
              <div key={index} className="flex-shrink-0 w-[calc(100vw-40px)] md:w-[600px] md:mx-4">
                <StoryBlock
                  imageSrc={story.image}
                  imageAlt={story.alt}
                  testimonial={story.text}
                  isMobileCard={true}
                />
              </div>
            )}
          />
        </div>
      </div>

      <div className="hidden lg:flex flex-col">
        {stories.map((story, i) => (
          <StoryBlock
            key={i}
            imageSrc={story.image}
            imageAlt={story.alt}
            testimonial={story.text}
            reverse={i % 2 !== 0}
            showHeading={i === 0}
          />
        ))}
      </div>

      <GoogleComments />
      <CallToAction
        sectionClassName="pt-[104px] lg:pt-[160px] mx-auto"
        question="Готові отримати такі ж чудові враження та почати свою справу з "
        highlight="with taste?"
        buttonText="Записатися на курс"
        href="/#form"
      />
    </div>
  );
};

export default page;
