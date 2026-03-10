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
                "min-w-[320px]  [@media(max-width:374px)]:min-w-[280px]",
              )}
            >
              {item.imageUrl && (
                <div className="w-full h-[318px] relative rounded mb-3">
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
      <p>Коли творчість стає справою життя</p>
      <div>
        <h3>Для кого цей курс</h3>
        <ul className="list-none pl-5">
          <li>Ти маєш творчі навички і хочеш заробляти на Food-Флористиці</li>
          <li>Плануєш відкрити власну справу, але не знаєш, з чого почати</li>
          <li>Боїшся цифр, але розумієш, що без них не обійтись</li>
          <li>Хочеш ясності замість здогадок і страху помилитися</li>
        </ul>
      </div>
      <div>
        <h3>Що ти вивчиш</h3>
        <ul className="list-none pl-5">
          <li>Як перетворити творчу ідею на реальний бізнес</li>
          <li>З чого почати власну справу</li>
          <li>Як оцінити ідею, ресурси та ризики</li>
          <li>Впевнене прийняття бізнес-рішень</li>
        </ul>
      </div>
    </Container>
  );
};

export default BigCoursePage;
