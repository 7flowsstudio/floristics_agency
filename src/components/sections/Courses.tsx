'use client';

import { courses } from '@/data/courses';
import Image from 'next/image';
import Link from 'next/link';
import Container from '../layout/Container';
import SectionHeading from '../ui/SectionHeading';
import SectionSubheading from '../ui/SectionSubheading';
import Button from '../ui/Button';
import { BestsellerBadge } from '../ui/BestsellerBadge';
import clsx from 'clsx';
import Slider from '../ui/Slider';

export type CourseSliderItem = {
  id: string;
  title: string;
  link?: string;
  url: string;
  imageUrl?: string;
  isBestseller?: boolean;
};

const Courses = () => {
  const items: CourseSliderItem[] = courses.map((c, index) => ({
    id: c.id.toString(),
    title: c.title,
    link: c.link,
    url: c.url,
    imageUrl: c.img,
    isBestseller: index === 0,
  }));
  return (
    <Container className="pt-[60px] lg:pt-[160px]">
      <div>
        <SectionHeading>Наші напрями</SectionHeading>
        <SectionSubheading className="pb-[32px]">
          Обери той, що надихає саме тебе
        </SectionSubheading>
      </div>
      <div className="[@media(min-width:944px)]:hidden">
        <Slider<CourseSliderItem>
          items={items}
          gap={16}
          renderCard={(item, index) => (
            <Link
              href={item.url}
              key={item.id}
              className={clsx(
                'flex-shrink-0 rounded-lg overflow-hidden relative',
                'min-w-[320px]  [@media(max-width:374px)]:min-w-[280px] h-[440px] gradient-image-overlay',
                index === 0 && 'border-[1.5px] border-[#1C686D]',
              )}
            >
              {item.imageUrl && (
                <div className="w-full h-[440px] relative rounded mb-3">
                  <Image
                    src={item.imageUrl}
                    alt={item.title || 'image'}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              )}

              {item.isBestseller && <BestsellerBadge />}

              {item.title && (
                <p className="w-full absolute text-center bottom-[50px] z-20 font-medium text-xl hover:text-primary">
                  {item.title}
                </p>
              )}

              {item.link && (
                <div className="absolute left-1/2 -translate-x-1/2 bottom-[20px] z-20 underline underline-offset-4">
                  {item.link}
                </div>
              )}
            </Link>
          )}
        />
      </div>

      <div className="hidden [@media(min-width:944px)]:grid md:grid-cols-3 md:gap-8">
        {items.slice(-3).map(item => (
          <Link
            href={item.url}
            key={item.id}
            className="group relative rounded-lg hover:shadow-[0px_0px_7.2px_3px_#9DC6C9BF] hover:-translate-y-0.5 active:border-2 active:border-[#1C686D] transition-all duration-300 ease-out"
          >
            {item.imageUrl && (
              <div className="w-full h-[440px] relative rounded-lg overflow-hidden gradient-image-overlay">
                <Image
                  src={item.imageUrl}
                  alt={item.title || 'image'}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <p className="w-full absolute text-center bottom-[50px] z-20 font-medium text-xl transition-colors duration-300 group-hover:text-primary">
              {item.title}
            </p>
            <div className="absolute left-1/2 -translate-x-1/2 bottom-[20px] z-20 underline underline-offset-4">
              {item.link}
            </div>
          </Link>
        ))}
      </div>
      <div className="hidden md:flex mx-auto mt-10 max-w-[412px]">
        <Button className="w-full" href="/courses" variant="outline">
          Детальніше про курси
        </Button>
      </div>
    </Container>
  );
};
export default Courses;
