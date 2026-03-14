'use client';

import { FC } from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import Slider from '@/components/ui/Slider';
import Image from 'next/image';

export type SliderItem = {
  id: string;
  title?: string;
  text: string;
  imageUrl?: string;
};

interface SliderWithInfoProps {
  heading: string;
  items: SliderItem[];
}

const SliderWithInfo: FC<SliderWithInfoProps> = ({ heading, items }) => {
  return (
    <div className="pt-[105px] lg:pt-[160px]">
      <SectionHeading className="font-secondary text-primary text-[36px] md:text-[42px] lg:text-[64px] leading-10">
        {heading}
      </SectionHeading>

      <div className="pt-[40px] px-[20px] md:px-0 relative">
        {/* LEFT gradient */}
        <div
          className="pointer-events-none absolute left-0 top-0 h-full w-[240px] z-80 hidden md:block"
          style={{
            background:
              'linear-gradient(270deg, rgba(247,245,243,0) 0%, #F7F5F3 100%)',
          }}
        />

        <Slider<SliderItem>
          items={items}
          gap={8}
          containerClassName="px-[20px] md:px-[calc((100vw-882px)/2)]"
          renderCard={item => (
            <div
              key={item.id}
              className="
                flex-shrink-0
                w-[calc(100vw-80px)]
                md:w-[882px]
                flex flex-col md:flex-row
                gap-4
              "
            >
              {item.imageUrl && (
                <div className="relative w-full md:w-[433px] aspect-[4/3] md:aspect-auto md:h-[433px] flex-shrink-0">
                  <Image
                    src={item.imageUrl}
                    alt={item.title || 'image'}
                    fill
                    className="object-cover object-top rounded"
                  />
                </div>
              )}

              <div className="flex flex-col gap-2 bg-card px-[29px] py-[16px] md:w-[433px] rounded h-full">
                {item.title && (
                  <p className="font-medium text-xl lg:text-[20px]">
                    {item.title}
                  </p>
                )}

                {item.text && (
                  <p className="text-base lg:text-[20px]">{item.text}</p>
                )}
              </div>
            </div>
          )}
        />

        {/* RIGHT gradient */}
        <div
          className="pointer-events-none absolute right-0 top-0 h-full w-[240px] z-80 hidden md:block"
          style={{
            background:
              'linear-gradient(90deg, rgba(247,245,243,0) 0%, #F7F5F3 100%)',
          }}
        />
      </div>
    </div>
  );
};

export default SliderWithInfo;
