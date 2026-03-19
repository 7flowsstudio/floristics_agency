"use client";

import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Text from "@/components/ui/Text";
import { businessCourseAudience, businessCourseList } from "@/data/business";
import Image from "next/image";


const BusinessCoursePage = () => { 
    return (
        <Container className="pt-[100px] md:pt-[200px]">
         <h2 className="text-[#1C686D] text-[24px] font-medium pb-[8px] md:pb-[16px] md:text-[40px] text-center">
        Відкриття власної справи
      </h2>
      <p className="text-[18px] pb-[24px] md:pb-[30px] md:text-[22px] text-center">
        Перші кроки до власного бізнесу
            </p>
             <div className="flex flex-col md:flex-row gap-[65px]">
        <div className="md:w-1/2">
        
         
                    <div className="w-full h-[318px] relative overflow-hidden rounded-[8px] md:h-[518px]">
                      <Image
                        src="/img/courses/business/business.webp"
                        alt={"business"}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                </div>
          
          <p className="text-center text-[#1C686D] text-[18px] md:text-[24px] italic pt-[32px] pb-[60px] md:pt-[16px] md:pb-[0px]">
           Практична база для старту власної творчої справи
          </p>
        </div>
        <div className="md:w-1/2 flex flex-col items-center md:justify-center md:items-start">
          <div className="max-w-[412px]">
            <h3 className="text-[#2D1106] text-[20px] pb-[24px] md:text-[32px] text-center md:text-left">
              Для кого цей курс
            </h3>
            <ul className="list-none flex flex-col justify-center gap-[8px]">
              {businessCourseAudience.map((text, i) => (
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
              {businessCourseList.map((text, i) => (
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
             <div className="flex flex-col items-center pb-[180px]">
                    <ul className="pt-[24px] pb-[24px] md:pt-[48px]">
                      <li className="text-[18px] md:text-[20px]">Формат: онлайн</li>
                      <li className="text-[18px] md:text-[20px]">Доступ: 6 місяців</li>
                    </ul>
                    <div>
                      <p className="text-[20px] font-medium md:text-[24px] pb-[40px] md:pb-[48px]">
                        Вартість курсу:
                        <span className="line-through">389 грн</span>
                      </p>
                    </div>
                          
                    <Button className="w-full max-w-[412px]" variant="primary">
                      Обрати цей курс
                    </Button>
                  </div>
        </Container>
    );
}
export default BusinessCoursePage;