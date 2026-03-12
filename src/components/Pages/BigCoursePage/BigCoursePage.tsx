"use client";
import Container from "@/components/layout/Container";
import Accordion from "@/components/ui/Accordion";
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
      <h2 className="text-[#1C686D] text-[24px] font-medium pb-[8px] md:pb-[16px] md:text-[40px] text-center">
        Food-Флористика: Від ідеї до бізнесу
      </h2>
      <p className="text-[18px] pb-[24px] md:pb-[30px] md:text-[22px] text-center">
        Від творчості до власної справи
      </p>
      <div className="flex flex-col md:flex-row gap-[65px]">
        <div className="md:w-1/2">
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
          <p className="text-center text-[#1C686D] text-[18px] md:text-[24px] italic pt-[32px] pb-[60px] md:pt-[16px] md:pb-[0px]">
            Коли творчість стає справою життя
          </p>
        </div>
        <div className="md:w-1/2 flex flex-col items-center md:justify-end md:items-start">
          <div className="max-w-[412px]">
            <h3 className="text-[#2D1106] text-[20px] pb-[24px] md:text-[32px] text-center md:text-left">
              Для кого цей курс
            </h3>
            <ul className="list-none flex flex-col justify-center gap-[8px]">
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
          <div className="max-w-[412px] pt-[60px] md:pt-[40px]">
            <h3 className="text-[#2D1106] text-[20px] pb-[20px] md:text-[32px] text-center md:text-left">
              Що ти вивчиш
            </h3>
            <ul className="list-none flex flex-col justify-center gap-[8px]">
              <li className="flex gap-[8px]">
                <Image
                  src="/flower.svg"
                  alt=""
                  width={14}
                  height={15}
                  unoptimized
                />
                <Text>Як перетворити творчу ідею на реальний бізнес</Text>
              </li>
              <li className="flex gap-[8px]">
                <Image
                  src="/flower.svg"
                  alt=""
                  width={14}
                  height={15}
                  unoptimized
                />
                <Text>З чого почати власну справу</Text>
              </li>
              <li className="flex gap-[8px]">
                <Image
                  src="/flower.svg"
                  alt=""
                  width={14}
                  height={15}
                  unoptimized
                />
                <Text>Як оцінити ідею, ресурси та ризики</Text>
              </li>
              <li className="flex gap-[8px]">
                <Image
                  src="/flower.svg"
                  alt=""
                  width={14}
                  height={15}
                  unoptimized
                />
                <Text>Впевнене прийняття бізнес-рішень</Text>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center pt-[60px] md:pt-[96px]">
        <h3 className="text-[#2D1106] text-[20px] pb-[20px] md:pb-[48px] md:text-[32px] text-center md:text-left">
          Програма курсу
        </h3>
        <Accordion
          items={[
            {
              id: "1",
              title: "Food-флористика",
              content: (
                <ul>
                  <li>Каркасний вихор з сухофруктів</li>
                  <li>Плетіння каркасів для чоловічого букету</li>
                  <li>Горіховий «WOW»</li>
                  <li>Фруктовий бокс XL</li>
                  <li>Солодкий букет до 14 лютого</li>
                  <li>Букет на вибір</li>
                </ul>
              ),
            },
            {
              id: "2",
              title: "Пакування та підтримка",
              content: <p>...</p>,
            },
            {
              id: "3",
              title: "Відкриття власної справи (опційно)",
              content: <p>...</p>,
            },
            {
              id: "4",
              title: "Instagram — базові основи (опційно)",
              content: <p>...</p>,
            },
            {
              id: "5",
              title: "Гранти (опційно)",
              content: <p>...</p>,
            },
          ]}
        />
      </div>
    </Container>
  );
};

export default BigCoursePage;
