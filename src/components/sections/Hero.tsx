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
  h-screen
  w-full"
    >
      <Container>
        <h1>Мрій яскраво, твори сміливо</h1>
        <p>Флористика та food-флористика для тих, хто любить творити</p>
        <Button variant="primary" size="sm">
          Записатися на курс
        </Button>
        <Button
          iconSrc="/arrow-down.svg"
          variant="outline"
          size="sm"
          iconPosition="right"
        >
          Дізнатися більше
        </Button>
        <div className="relative w-[520px] h-[674px] hidden md:block">
          <Image
            src="/img/hero/deshero.webp"
            alt="flowers"
            fill
            style={{ objectFit: "contain" }}
            priority={false}
            loading="lazy"
          />
        </div>
      </Container>
    </div>
  );
};

export default Hero;
