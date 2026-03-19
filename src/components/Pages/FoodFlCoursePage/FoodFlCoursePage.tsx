"use client"

import Container from "@/components/layout/Container";
import Accordion from "@/components/ui/Accordion";
import Button from "@/components/ui/Button";
import Slider from "@/components/ui/Slider";
import Text from "@/components/ui/Text";
import { foodFlCourseAcc } from "@/data/accordion/foodFlCourseAcc";
import { foodFlCourse, foodFlCourseAudience, foodFlCourseList } from "@/data/foodFl";
import clsx from "clsx";
import Image from "next/image";

export type FoodFlCourseSliderItem = {
  id: string;
  imageUrl?: string;
};

const FoodFlCoursePage = () => {
      const items: FoodFlCourseSliderItem[] = foodFlCourse.map((c, index) => ({
        id: c.id.toString(),
        imageUrl: c.img,
      }));
    return (
        <Container className="pt-[100px] md:pt-[200px]">
      <h2 className="text-[#1C686D] text-[24px] font-medium pb-[8px] md:pb-[16px] md:text-[40px] text-center">
        Базовий курс з Food-Флористики
      </h2>
      <p className="text-[18px] pb-[24px] md:pb-[30px] md:text-[22px] text-center">
        Як однієї з форм мистецтва
      </p>
      <div className="flex flex-col md:flex-row gap-[65px]">
        <div className="md:w-1/2">
          <div className="">
            <Slider<FoodFlCourseSliderItem>
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
                    <div className="w-full h-[318px] relative rounded overflow-hidden">
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
            Авторський курс зі створення їстівних композицій
          </p>
        </div>
        <div className="md:w-1/2 flex flex-col items-center md:justify-end md:items-start">
          <div className="max-w-[412px]">
            <h3 className="text-[#2D1106] text-[20px] pb-[24px] md:text-[32px] text-center md:text-left">
              Для кого цей курс
            </h3>
            <ul className="list-none flex flex-col justify-center gap-[8px]">
              {foodFlCourseAudience.map((text, i) => (
                <li key={i}>
                  <Text className="tracking-[0.01em]">{text}</Text>
                </li>
              ))}
            </ul>
          </div>
          <div className="max-w-[412px] pt-[60px] md:pt-[40px]">
            <h3 className="text-[#2D1106] text-[20px] pb-[20px] md:text-[32px] text-center md:text-left">
              Що ти вивчиш
            </h3>
            <ul className="list-none flex flex-col justify-center gap-[8px]">
              {foodFlCourseList.map((text, i) => (
                <li key={i} className="flex gap-[8px]">
                  <Image
                    src="/flower.svg"
                    alt=""
                    width={14}
                    height={15}
                    unoptimized
                  />
                  <Text className="tracking-[0.01em]">{text}</Text>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center pt-[60px] md:pt-[96px]">
        <h3 className="text-[#2D1106] text-[20px] pb-[20px] md:pb-[48px] md:text-[32px] text-center md:text-left">
          Програма курсу
        </h3>
        <Accordion
          items={foodFlCourseAcc.map((item) => ({
            id: item.id,
            title: item.title,
            content: (
              <>
                <ul className="list-disc ml-5">
                  {item.items.map((text, i) => (
                    <li className="text-[16px] md:text-[18px]" key={i}>
                      {text}
                    </li>
                  ))}
                </ul>
              </>
            ),
          }))}
        />
      </div>
      <div className="flex flex-col items-center pb-[180px]">
        <div>
          <p className="text-[20px] font-medium md:text-[24px] pt-[24px] md:pt-[48px] pb-[40px] md:pb-[48px]">
            Вартість курсу:
            <span className="line-through">1 500 грн</span>
          </p>
        </div>

        <Button className="w-full max-w-[412px]" variant="primary">
          Обрати цей курс
        </Button>
      </div>
    </Container>)
}
export default FoodFlCoursePage