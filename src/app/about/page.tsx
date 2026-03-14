import CallToAction from "@/components/sections/CallToAction";
import InstagramInfo from "@/components/sections/InstagramInfo";
import SectionHeading from "@/components/ui/SectionHeading";

const page = () => {
  return (
    <div className="pt-[105px] lg:pt-[160px]">
      <SectionHeading className="font-secondary text-primary text-[36px] lg:text-[64px] leading-10">
        Про мене
      </SectionHeading>
      <InstagramInfo />
      <CallToAction
        text="Якщо ви мрієте про свою справу — ви не самі.
Я тут, щоб ділитись своїм досвідом, підтримкою і знаннями."
        question="Хочеш з нами?"
        buttonText="Хочу творити разом!"
        href="/courses"
      />
    </div>
  );
};

export default page;
