import Container from "../layout/Container";
import Link from "next/link";
import Image from "next/image";
import SectionHeading from "../ui/SectionHeading";
import SectionSubheading from "../ui/SectionSubheading";

function Histories() {
  return (
    <Container>
      <div className="flex flex-col md:flex-row items-stretch py-17 md:py-40">
        <div className="order-1 md:order-2 flex flex-col items-center justify-between">
          <div className="max-w-110">
            <SectionHeading
              mobileText="Відгуки учнів та учениць"
              desktopText="Історії учнів та учениць"
            />
            <SectionSubheading>
              Щирі враження тих, хто вже відкрив для себе творічсть у "With
              Taste"
            </SectionSubheading>
          </div>

          <div className="hidden md:block px-6 md:px-50.5 py-10 bg-card rounded-tr-2xl rounded-br-2xl justify-center items-center">
            <div className="hidden md:block md:w-115 text-center justify-start text-black md:text-2xl font-normal font-primary italic tracking-[0.24px] leading-7">
              Юлія прийшла на навчання з флористики з бажанням спробувати нове й
              знайшла більше, ніж очікувала. Крок за кроком з’явилась
              впевненість: «Мені це справді подобається. Я можу більше». Після
              курсу вона зробила перший сміливий крок — запустила власний
              онлайн-магазин.
            </div>
          </div>
          <Link
            href="/histories"
            className="hidden md:inline-flex w-fit self-center px-23.25 py-6 text-[20px] bg-transparent border border-primary text-primary hover:border-primaryActive hover:bg-[#9DC6C933] rounded-[38px] md:rounded-[40px] items-center justify-center gap-3 font-semibold cursor-pointer"
          >
            Дивитися усі відгуки
            <Image src="/arrow-right.svg" alt="" width={20} height={20} />
          </Link>
        </div>

        <div className="order-2 md:order-1 hidden md:block w-full">
          <Image
            src="/img/histories/yulia.png"
            alt="Студентка Юлія"
            width={412}
            height={555}
            className="rounded-lg object-cover"
          />
        </div>

        <div className="md:hidden relative order-1 w-full max-w-[412px] mx-auto rounded-lg overflow-hidden bg-card py-8 px-5 mt-6">
          <Image
            src="/img/histories/yulia.png"
            alt="Студентка Юлія"
            width={412}
            height={555}
            className="object-cover w-full"
          />

          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-stone-200/90 via-stone-200/60 to-stone-200/0" />

          <div className="absolute bottom-4 left-4 right-4 text-black text-[18px] font-primary italic leading-7 tracking-[0.24px] text-left">
            Юлія прийшла на навчання з флористики з бажанням спробувати нове й
            знайшла більше, ніж очікувала. Крок за кроком з’явилась впевненість:
            «Мені це справді подобається. Я можу більше». Після курсу вона
            зробила перший сміливий крок — запустила власний онлайн-магазин.
          </div>
          <Link
            href="/histories"
            className="w-fit mt-12 self-center px-8 py-4 md:px-23.25 md:py-6 text-[20px] bg-transparent border border-primary text-primary hover:border-primaryActive hover:bg-[#9DC6C933] rounded-[38px] md:rounded-[40px] inline-flex items-center justify-center gap-3 font-medium md:font-semibold cursor-pointer"
          >
            Дивитися усі відгуки
            <Image src="/arrow-right.svg" alt="" width={20} height={20} />
          </Link>
        </div>
      </div>
    </Container>
  );
}

export default Histories;
