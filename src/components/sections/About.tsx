import Image from "next/image";
import Container from "../layout/Container";
import Button from "../ui/Button";

const About = () => {
  return (
    <Container className="pt-[105px] lg:pt-[160px]">
      <div className="">
        <div className="flex flex-col min-[1000px]:grid min-[1000px]:grid-cols-2 min-[1000px]:grid-rows-[auto_auto] min-[1000px]:gap-[125px]">
          <div className="flex flex-col justify-start md:row-start-1 md:col-start-2 gap-4">
            <h2 className="text-[#2D1106] font-medium text-[24px] leading-[100%] tracking-[0.01em]">
              Про студію “With taste”
            </h2>
            <p className="">
              У студії «With Taste» ми поєднуємо квіти, мистецтво та натхнення.{" "}
              <br />
              Тут народжуються ідеї, оживають квіти та кожен знаходить свій шлях
              до творчості.
            </p>
            <Button
              className="w-full [@media(max-width:767px)]:hidden"
              iconSrc="/arrow-right.svg"
              variant="outline"
              iconPosition="right"
            >
              Більше про студію
            </Button>
          </div>

          <div className="relative">
            <div
              className="relative  w-full
  max-w-[337px]
  md:max-w-[631px]
  h-[277px]
  md:h-[520px] rounded-[16px] overflow-hidden md:row-start-1 md:col-start-1 mx-auto"
            >
              <div className="w-full h-full relative z-20">
                <Image
                  src="/img/about/aboutfirst.webp"
                  alt="workshop"
                  fill
                  style={{ objectFit: "cover" }}
                  priority={false}
                  loading="lazy"
                />
              </div>
            </div>
            <div className="relative min-[1000px]:absolute min-[1000px]:top-[350px] min-[1000px]:left-[420px] w-full max-w-[337px] md:max-w-[628px] h-[213px] md:h-[396px] rounded-[16px] overflow-hidden md:col-span-2 mt-4 mx-auto">
              <div className="w-full h-full relative z-10">
                <Image
                  src="/img/about/aboutsec.webp"
                  alt="workshop"
                  fill
                  style={{ objectFit: "cover" }}
                  priority={false}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <Button
            className="w-full md:hidden"
            iconSrc="/arrow-right.svg"
            variant="outline"
            iconPosition="right"
          >
            Більше про студію
          </Button>
        </div>
      </div>
    </Container>
  );
};
export default About;
