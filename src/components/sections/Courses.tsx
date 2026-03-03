"use client";

import { courses } from "@/data/courses";
import Slider, { SliderItem } from "../ui/Slider";
import Image from "next/image";
import Link from "next/link";
import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";
import SectionSubheading from "../ui/SectionSubheading";
import Button from "../ui/Button";

const Courses = () => {
  const items: SliderItem[] = courses.map((c) => ({
    id: c.id.toString(),
    title: c.title,
    link: c.link,
    imageUrl: c.img,
  }));
  return (
    <Container className="pt-[60px] lg:pt-[160px]">
      <div>
        <SectionHeading>Наші напрями</SectionHeading>
        <SectionSubheading className="pb-[32px]">
          Обери той, що надихає саме тебе
        </SectionSubheading>
      </div>
      <div className="md:hidden">
        <Slider
          items={items}
          containerClassName="gap-6"
          cardClassName="min-w-[336px] h-[440px] rounded-lg gradient-image-overlay"
          imageWrapperClassName="h-[440px] mb-3 rounded relative"
          textClassName="w-full absolute text-center bottom-[50px] z-20"
          linkClassName="absolute left-1/2 -translate-x-1/2 bottom-[20px] z-20"
          slidesToScroll={1}
          gap={16}
          duration={500}
        />
      </div>

      <div className="hidden md:grid md:grid-cols-3 md:gap-8">
        {items.slice(-3).map((item) => (
          <div key={item.id} className="relative">
            {item.imageUrl && (
              <div className="w-full h-[440px] relative rounded-lg overflow-hidden gradient-image-overlay">
                <Image
                  src={item.imageUrl}
                  alt={item.title || "image"}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <p className="w-full absolute text-center bottom-[50px] z-20">
              {item.title}
            </p>
            <Link
              href=""
              className="absolute left-1/2 -translate-x-1/2 bottom-[20px] z-20"
            >
              {item.link}
            </Link>
          </div>
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
