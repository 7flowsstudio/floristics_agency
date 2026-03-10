"use client";
import Container from "@/components/layout/Container";
import Slider from "@/components/ui/Slider";
import { bigCourse } from "@/data/bigCourse";
import clsx from "clsx";
import Image from "next/image";

export type BigCourseSliderItem = {
  id: string;
  imageUrl?: string;
};

const BigCoursePage = () => {
  const items: BigCourseSliderItem[] = bigCourse.map((c, index) => ({
    id: c.id.toString(),
    imageUrl: c.img,
  }));
  return (
    <Container className="pt-[100px] md:pt-[200px]">
      <h2>Food-Флористика: Від ідеї до бізнесу</h2>
      <p>Від творчості до власної справи</p>
      <p>Коли творчість стає справою життя</p>
      <div className="">
        <Slider<BigCourseSliderItem>
          items={items}
          gap={16}
          paginationClassName="md:hidden"
          renderCard={(item, index) => (
            <div
              key={item.id}
              className={clsx(
                "flex-shrink-0 rounded-lg overflow-hidden relative",
                "min-w-[320px]  [@media(max-width:374px)]:min-w-[280px] h-[440px]",
              )}
            >
              {item.imageUrl && (
                <div className="w-full h-[440px] relative rounded mb-3">
                  <Image
                    src={item.imageUrl}
                    alt={"food-floristic"}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              )}
            </div>
          )}
        />
      </div>
    </Container>
  );
};

export default BigCoursePage;
