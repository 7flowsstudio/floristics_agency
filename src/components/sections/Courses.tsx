"use client";

import { courses } from "@/data/courses";
import Slider, { SliderItem } from "../ui/Slider";
import Image from "next/image";
import Link from "next/link";
import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";
import SectionSubheading from "../ui/SectionSubheading";

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
        <SectionSubheading>Обери той, що надихає саме тебе</SectionSubheading>
      </div>
      <div className="md:hidden">
        <Slider
          items={items}
          containerClassName="gap-6"
          cardClassName="min-w-[336px] p-4 rounded-lg"
          imageWrapperClassName="h-[440px] mb-3 rounded"
          slidesToScroll={1}
          gap={16}
          duration={500}
        />
      </div>

      <div className="hidden md:grid md:grid-cols-3 md:gap-8">
        {items.map((item) => (
          <div key={item.id} className="">
            {item.imageUrl && (
              <div className="w-full h-[440px] relative rounded-lg overflow-hidden">
                <Image
                  src={item.imageUrl}
                  alt={item.title || "image"}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <p className="p-4 text-center font-medium">{item.title}</p>
            <Link href="" className="p-4 text-center font-medium">
              {item.link}
            </Link>
          </div>
        ))}
      </div>
    </Container>
  );
};
export default Courses;
