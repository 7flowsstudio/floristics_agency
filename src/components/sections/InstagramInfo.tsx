import { InstagramForInfo } from "@/components/ui/icons/InstagramForInfo";

const InstagramInfo = () => {
  return (
    <div className="md:bg-card">
      <div className="flex flex-col mx-auto px-5 gap-4 items-center py-10 md:py-[72px] md:bg-card md:flex-row md:gap-5 md:justify-center md:my-[72px] md:max-w-[520px] md:w-full">
        <InstagramForInfo className="w-[80px] h-[80px] md:w-[103px] md:h-[103px]" />
        <p className="bg-card text-black text-[16px] p-4 text-center md:w-[423px] md:px-1 md:text-[22px] md:leading-6 md:tracking-tight">
          Можеш також переглянути нашу сторінку в Instagram і написати в дірект!
          Ми з радістю відповімо на всі запитання.
        </p>
      </div>
    </div>
  );
};

export default InstagramInfo;
