import Container from "@/components/layout/Container";
import SectionSubheading from "@/components/ui/SectionSubheading";

import { courses } from "@/data/courses";
import Image from "next/image";
import Link from "next/link";

const CoursesPage = () => {
  const items = courses.map((c) => ({
    id: c.id.toString(),
    title: c.title,
    link: c.link,
    url: c.url,
    imageUrl: c.img,
  }));
  return (
    <div>
      <div
        className="
  bg-[linear-gradient(180deg,rgba(247,245,243,0)_64.36%,rgba(247,245,243,0.5)_83.35%,rgba(247,245,243,0.6)_100%),linear-gradient(179.97deg,rgba(247,245,243,0.6)_0.03%,rgba(247,245,243,0.3)_37.12%,rgba(247,245,243,0)_53.16%),url('/img/courses/backgr.webp')]
  bg-no-repeat
  bg-center
  md:bg-top
  bg-cover
  [@media(max-width:767px)]:h-[90vh]
  md:h-[626px]
  md:[background-image:linear-gradient(180.06deg,rgba(247,245,243,0.7)_0.05%,#F7F5F3_99.95%),url('/img/courses/backgr.webp')]
  md:top-0 md:left-0
  "
      >
        <div className="max-w-[336px] md:max-w-[628px] mx-auto pt-[105px] md:pt-[200px]">
          <h1 className="text-[#1C686D] text-center text-[40px] leading-[45px] lg:text-[64px] lg:leading-[65px] font-secondary">
            Твори красу своїми руками
          </h1>
          <SectionSubheading>
            Обери курс, який допоможе розкрити твою творчу натуру — від
            флористики до food-декору
          </SectionSubheading>
        </div>
      </div>
      <Container className="bg-[var(--with-taste-bg)]">
        <div className="flex flex-col max-w-[344px] md:grid grid-cols-2 grid-rows-2 gap-4 md:max-w-[845px] mx-auto">
          {items.map((item) => (
            <div key={item.id} className="relative max-w-[412px]">
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
              <p className="w-full absolute text-center bottom-[50px] z-20">
                {item.title}
              </p>
              <Link
                href={item.url}
                className="absolute left-1/2 -translate-x-1/2 bottom-[20px] z-20"
              >
                {item.link}
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default CoursesPage;
