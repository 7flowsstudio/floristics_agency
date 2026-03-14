import Contacts from "@/components/sections/Contacts";
import Form from "@/components/sections/Form";

const Page = () => {
  return (
    <div className="pt-[106px] md:pt-[200px]">
      <Contacts />
      <Form  heading="Або дозволь нам зв’язатися з тобою!"/>
    </div>
  );
};

export default Page;
