"use client";
import Container from "@/components/layout/Container";
import Accordion from "@/components/ui/Accordion";
import Button from "@/components/ui/Button";
import Slider from "@/components/ui/Slider";
import Text from "@/components/ui/Text";
import { bigCourseAcc } from "@/data/accordion/bigCourseAcc";
import { bigCourse, bigCourseAudience, bigCourseList } from "@/data/bigCourse";
import clsx from "clsx";
import Image from "next/image";
import { motion } from "framer-motion";

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
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="md:w-1/2"
        >
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
                    <div className="w-full h-[318px] relative rounded md:h-[440px]">
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
        </motion.div>

        <div className="md:w-1/2 flex flex-col items-center md:justify-end md:items-start">
          <div className="max-w-[412px]">
            <h3 className="text-[#2D1106] text-[20px] pb-[24px] md:text-[32px] text-center md:text-left">
              Для кого цей курс
            </h3>
            <ul className="list-none flex flex-col justify-center gap-[8px]">
              {bigCourseAudience.map((text, i) => (
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
              {bigCourseList.map((text, i) => (
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
          items={bigCourseAcc.map((item) => ({
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

                {item.footer && (
                  <div className="mt-4 flex flex-col gap-1">
                    <span>{item.footer.label}</span>
                    {item.footer.total && <p>{item.footer.total}</p>}
                  </div>
                )}
              </>
            ),
          }))}
        />
      </div>
      <div className="flex flex-col items-center pb-[60px] md:pb-[100px] lg:pb-[180px]">
        <ul className="pt-[24px] pb-[24px] md:pt-[48px]">
          <li className="text-[18px] md:text-[20px]">Формат: онлайн</li>
          <li className="text-[18px] md:text-[20px]">Доступ: 6 місяців</li>
        </ul>
        <div>
          <p className="text-[20px] font-medium md:text-[24px]">
            Вартість повного курсу:
            <span className="line-through">2 617 грн</span>
          </p>
          <p className="text-[20px] font-medium text-center md:text-[24px]">
            2 500 грн
          </p>
        </div>
        <p className="text-center text-[#1C686D] text-[18px] md:text-[22px] pt-[40px] pb-[24px] md:pt-[48px] md:pb-[48px]">
          Обери той мікс опційних курсів, що цікавить саме тебе!
        </p>

        <Button
          href="/#form"
          className="w-full max-w-[412px]"
          variant="primary"
        >
          Обрати цей курс
        </Button>
      </div>
    </Container>
  );
};

export default BigCoursePage;
