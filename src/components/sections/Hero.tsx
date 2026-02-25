import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div
      className="
  bg-[linear-gradient(180deg,rgba(247,245,243,0)_67.01%,rgba(247,245,243,0.708654)_89.88%,#F7F5F3_93.29%),linear-gradient(180deg,#F7F5F3_20.72%,rgba(247,245,243,0.279781)_32.04%,rgba(247,245,243,0)_44.35%),url('/img/hero/moblast.webp')]
  bg-no-repeat
  bg-center
  bg-cover
  md:bg-none
  [@media(max-width:767px)]:h-[90vh]
  w-full
  pt-[40px] md:pt-[60px]
  "
    >
      <Container>
        <div className="flex flex-row md:gap-[28px] md:justify-between xl:gap-[120px]">
          <div className="flex flex-col mx-auto justify-between md:justify-start h-[90vh] md:mx-0">
            <div className="mx-auto">
              <div className="mx-auto max-w-[400px] lg:max-w-full">
                <h1 className="text-[#1C686D] text-[40px] leading-[45px] lg:text-[64px] lg:leading-[65px] ">
                  Мрій яскраво,{" "}
                  <span className="block text-right min-[1407px]:inline min-[1407px]:text-left">
                    твори сміливо
                  </span>
                </h1>
              </div>
              <p className="text-[20px] leading-[117%] tracking-[0.01em] md:pb-10 text-center pt-[12px] lg:text-[22px] lg:[24px]">
                Флористика та food-флористика для тих, хто любить творити
              </p>
            </div>
            <div className="flex flex-col gap-[8px] lg:flex-row md:gap-[20px] w-full">
              <Button className="w-full" variant="primary">
                Записатися на курс
              </Button>
              <Button
                className="w-full"
                iconSrc="/arrow-down.svg"
                variant="outline"
                iconPosition="right"
              >
                Дізнатися більше
              </Button>
            </div>
          </div>
          <div className="relative w-[520px] h-[674px] hidden md:block rounded-[16px] overflow-hidden">
            <Image
              src="/img/hero/deshero.webp"
              alt="flowers"
              fill
              style={{ objectFit: "cover" }}
              priority={false}
              loading="lazy"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
