import SectionHeading from "@/components/ui/SectionHeading";
import CallToAction from "@/components/sections/CallToAction";

const page = () => {
  return (
    <div className="pt-[105px] lg:pt-[160px]">
      <SectionHeading className="font-secondary text-primary text-[36px] lg:text-[64px] leading-10">
      Історії наших учнів та учениць
      </SectionHeading>
      <CallToAction
        question="Готові отримати такі ж чудові враження та почати свою справу з "
        highlight="with taste?"
        buttonText="Записатися на курс"
        href="/courses"
      />
    </div>
  );
};

export default page;
