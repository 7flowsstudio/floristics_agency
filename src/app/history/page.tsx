import CallToAction from '@/components/sections/CallToAction'
import SectionHeading from '@/components/ui/SectionHeading'

const page = () => {
  return (
    <div className="pt-[105px] lg:pt-[160px]">
       <SectionHeading className="font-secondary text-primary text-[36px] lg:text-[64px] leading-10">Трішки історії</SectionHeading>
       <CallToAction
        text="Це можливо — перетворити ідею на власну справу"
        question="Хочеш, навчу і тебе?"
        buttonText="Обрати курс"
        href="/courses"
      />
    </div>
  )
}

export default page