"use client";
import Container from "@/components/layout/Container";
import Slider from "@/components/ui/Slider";
import Image from "next/image";
import clsx from "clsx";
import Text from "@/components/ui/Text";
import {
  floristic,
  floristicAudience,
  floristicList,
  offline,
  online,
} from "@/data/floristic";
import { useState } from "react";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";

export type BigCourseSliderItem = {
  id: string;
  imageUrl?: string;
};

const FloristicsPage = () => {
  const items: BigCourseSliderItem[] = floristic.map((c, index) => ({
    id: c.id.toString(),
    imageUrl: c.img,
  }));
  const [active, setActive] = useState("online");
  return (
    <Container className="pt-[100px] md:pt-[200px]">
      <h2 className="text-[#1C686D] text-[24px] font-medium pb-[8px] md:pb-[16px] md:text-[40px] text-center">
        Базовий курс з Флористики
      </h2>
      <p className="text-[18px] pb-[24px] md:pb-[30px] md:text-[22px] text-center">
        З нуля до впевненого створення букетів
      </p>
      <div className="flex flex-col md:flex-row gap-[65px] pb-[60px] md:pb-[80px]">
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
                    "min-w-[320px] md:min-w-[408px] [@media(max-width:374px)]:min-w-[280px]",
                  )}
                >
                  {item.imageUrl && (
                    <div className="w-full h-[318px] md:h-[440px] relative rounded">
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
            Для тих, хто хоче навчитися створювати стильні букети та розуміти
            флористику
          </p>
        </motion.div>

        <div className="md:w-1/2 flex flex-col items-center md:justify-center md:items-start">
          <div className="max-w-[412px]">
            <h3 className="text-[#2D1106] text-[20px] pb-[24px] md:text-[32px] text-center md:text-left">
              Для кого цей курс
            </h3>
            <ul className="list-none flex flex-col justify-center gap-[8px]">
              {floristicAudience.map((text, i) => (
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
              {floristicList.map((text, i) => (
                <li key={i} className="flex gap-[8px]">
                  <Image
                    src="/flower.svg"
                    alt=""
                    width={14}
                    height={15}
                    unoptimized
                  />
                  <Text>{text}</Text>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center pt-[32px] md:pt-[48px] bg-[#ECE9E3] mb-[60px] md:mb-[100px] lg:mb-[180px]">
        <h3 className="text-[#2D1106] text-[20px] pb-[20px] md:pb-[48px] md:text-[32px] text-center md:text-left">
          Обери зручний формат
        </h3>
        <div className="w-full max-w-[411px] flex gap-[25px]">
          <Button
            className="w-full"
            variant={active === "online" ? "primary" : "outline"}
            onClick={() => setActive("online")}
          >
            Онлайн
          </Button>

          <Button
            className="w-full"
            variant={active === "offline" ? "primary" : "outline"}
            onClick={() => setActive("offline")}
          >
            Офлайн
          </Button>
        </div>

        <div className="pt-[48px]">
          {active === "online" && (
            <div className="max-w-[338px] flex flex-col justify-center items-center">
              <ul className="list-none flex flex-col justify-center gap-[8px] max-w-[412px]">
                {online.map((text, i) => (
                  <li key={i}>
                    <Text className="tracking-[0.01em]">{text}</Text>
                  </li>
                ))}
              </ul>
              <p className="text-[20px] font-medium text-center md:text-[24px] pt-[32px]">
                Вартість курсу: 4500 грн
              </p>
            </div>
          )}
          {active === "offline" && (
            <div className="max-w-[610px] flex flex-col justify-center items-center">
              <ul className="list-none flex flex-col justify-center gap-[8px] max-w-[610px]">
                {offline.map((text, i) => (
                  <li key={i}>
                    <Text>{text}</Text>
                  </li>
                ))}
              </ul>
              <Text className="pt-[32px] pb-[32px] max-w-[628px]">
                Офлайн — це живе спілкування, глибока практика та миттєвий
                результат
              </Text>
              <p className="text-[20px] font-medium text-center md:text-[24px]">
                Вартість курсу: 11 500 грн
              </p>
            </div>
          )}
        </div>
        <Button
          className="w-full max-w-[412px] mt-[88px] md:mt-[48px] mb-[40px]"
          variant="primary"
        >
          Обрати цей курс
        </Button>
      </div>
    </Container>
  );
};
export default FloristicsPage;
