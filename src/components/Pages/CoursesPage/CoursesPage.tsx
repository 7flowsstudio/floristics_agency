"use client";
import Container from "@/components/layout/Container";
import { BestsellerBadge } from "@/components/ui/BestsellerBadge";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionSubheading from "@/components/ui/SectionSubheading";

import { courses } from "@/data/courses";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const CoursesPage = () => {
  const items = courses.map((c) => ({
    id: c.id.toString(),
    title: c.title,
    link: c.link,
    url: c.url,
    imageUrl: c.img,
  }));
  const coursesRef = useRef<HTMLDivElement | null>(null);

  const scrollToCourses = () => {
    if (!coursesRef.current) return;
    const offset = 20;
    const top =
      coursesRef.current.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <div
        className="
  bg-[linear-gradient(180deg,rgba(247,245,243,0)_64.36%,rgba(247,245,243,0.9)_83.35%,rgba(247,245,243,0.9)_100%),linear-gradient(179.97deg,rgba(247,245,243,0.7)_0.03%,rgba(247,245,243,0.7)_37.12%,rgba(247,245,243,0)_53.16%),url('/img/courses/backgr.webp')]
  bg-no-repeat
  bg-center
  md:bg-top
  bg-cover
  [@media(max-width:767px)]:h-[90vh]
  md:h-[819px]
  md:[background-image:linear-gradient(180.06deg,rgba(247,245,243,0.7)_0.05%,#F7F5F3_99.95%),url('/img/courses/backgr.webp')]
  md:top-0 md:left-0
  "
      >
        <div className="flex flex-col max-w-[336px] md:max-w-[600px] mx-auto pt-[105px] md:pt-[260px] justify-between h-[90%] md:justify-start">
          <div>
            <h1 className="text-[#1C686D] text-center text-[40px] leading-[45px] lg:text-[64px] lg:leading-[65px] font-secondary">
              Твори красу своїми руками
            </h1>
            <SectionSubheading className="text-[20px] leading-[117%] tracking-[1%] pt-[16px] md:pt-[32px]">
              Обери курс, який допоможе розкрити твою творчу натуру — від
              флористики до food-декору
            </SectionSubheading>
          </div>
          <Button
            onClick={scrollToCourses}
            className="w-[336px] mx-auto md:hidden [@media(max-width:360px)]:w-[310px]"
            iconSrc="/arrow-down.svg"
            variant="outline"
            iconPosition="right"
          >
            Знайди саме свій
          </Button>
          <Button
            onClick={scrollToCourses}
            className="w-[412px] [@media(max-width:768px)]:hidden mx-auto mt-[65px]"
            iconSrc="/arrow-down-wh.svg"
            variant="primary"
            iconPosition="right"
          >
            Знайди саме свій
          </Button>
        </div>
      </div>
      <Container
        ref={coursesRef}
        className="bg-[var(--with-taste-bg)] pt-[60px] pb-[60px]"
      >
        <SectionHeading className="pb-[8px] md:pb-[16px]">
          Наші курси
        </SectionHeading>
        <SectionSubheading className="pb-[32px] md:pb-[40px]">
          Обери той, що надихає саме тебе
        </SectionSubheading>
        <div className="flex flex-col max-w-[344px] md:grid grid-cols-2 grid-rows-2 gap-4 md:max-w-[845px] mx-auto">
          {items.map((item) => (
            <div
              key={item.id}
              className={`
      relative max-w-[412px] rounded-lg overflow-hidden
      ${item.id === "1" ? "border-[2px] border-[#1C686D]" : ""}
    `}
            >
              {item.id === "1" && <BestsellerBadge />}
              {item.imageUrl && (
                <div className="w-full max-w-[412px] h-[440px] relative rounded-lg overflow-hidden gradient-image-overlay">
                  <Image
                    src={item.imageUrl}
                    alt={item.title || "image"}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <p className="w-full absolute text-center bottom-[50px] z-20 font-medium text-xl">
                {item.title}
              </p>
              <Link
                href={item.url}
                className="absolute left-1/2 -translate-x-1/2 bottom-[20px] z-20 underline underline-offset-4"
              >
                {item.link}
                {/* <Image
                  src="/arrow-down.svg"
                  alt=""
                  width={20}
                  height={20}
                  unoptimized
                /> */}
              </Link>
            </div>
          ))}
        </div>
        <div className="md:hidden">
          <p className="text-center pt-[40px] pb-[40px]">
            Оберіть свій курс або зв’яжіться з нами для більш детальної
            інформації
          </p>
          <Button className="w-full" variant="primary">
            Записатися на курс
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default CoursesPage;
