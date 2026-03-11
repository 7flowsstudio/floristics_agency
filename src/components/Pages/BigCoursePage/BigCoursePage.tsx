"use client";
import Container from "@/components/layout/Container";
import Slider from "@/components/ui/Slider";
import Text from "@/components/ui/Text";
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
      <div className="flex flex-col md:flex-row gap-[65px]">
        <div className="md:w-1/2">
          <h2 className="text-[#1C686D] text-[24px] font-medium md:text-[40px] text-center">
            Food-Флористика: Від ідеї до бізнесу
          </h2>
          <p className="text-[24px] md:text-[22px] text-center">
            Від творчості до власної справи
          </p>
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
          <p className="text-center text-[#1C686D] text-[18px] md:text-[24px] italic">
            Коли творчість стає справою життя
          </p>
        </div>
        <div className="md:w-1/2">
          <div className="max-w-[412px]">
            <h3 className="text-[#2D1106] text-[20px] md:text-[32px] text-center md:text-left">
              Для кого цей курс
            </h3>
            <ul className="list-none flex flex-col justify-center">
              <li>
                <Text>
                  Ти маєш творчі навички і хочеш заробляти на Food-Флористиці
                </Text>
              </li>
              <li>
                <Text>
                  Плануєш відкрити власну справу, але не знаєш, з чого почати
                </Text>
              </li>
              <li>
                <Text>Боїшся цифр, але розумієш, що без них не обійтись</Text>
              </li>
              <li>
                <Text>Хочеш ясності замість здогадок і страху помилитися</Text>
              </li>
            </ul>
          </div>
          <div className="max-w-[412px]">
            <h3 className="text-[#2D1106] text-[20px] md:text-[32px] text-center md:text-left">
              Що ти вивчиш
            </h3>
            <ul className="list-none flex flex-col justify-center">
              <Text>Як перетворити творчу ідею на реальний бізнес</Text>
              <Text>З чого почати власну справу</Text>
              <Text>Як оцінити ідею, ресурси та ризики</Text>
              <Text>Впевнене прийняття бізнес-рішень</Text>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default BigCoursePage;
