"use client";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";
import SectionSubheading from "../ui/SectionSubheading";
import CourseForm from "../forms/CourseForm";
import Modal from "../ui/modal/Modal";
import Button from "../ui/Button";
import DesktopPopUp from "../ui/modal/DesktopPopUp";

interface FormProps {
  heading?: string;
  subheading?: string;
}

function Form({ heading = "Готові творити з нами?", subheading }: FormProps) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleHomeClick = () => {
    if (pathname === "/") {
      setIsOpen(false);
    } else {
      router.push("/");
      setIsOpen(false);
    }
  };

  return (
    <Container className="mt-[60px] lg:mt-40">
      <SectionHeading className="pb-2 px-8 lg:w-full">{heading}</SectionHeading>
      {subheading && <SectionSubheading>{subheading}</SectionSubheading>}

      <CourseForm onSuccess={() => setIsOpen(true)} />

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        desktopSize={{
          width: "1276px",
          height: "654px",
        }}
        desktopStyles="lg:rounded-[24px] lg:bg-[#F7F5F3] lg:shadow-[0_0_14.3px_24px_rgba(0,0,0,0.19)]"
      >
        <div className="flex flex-col gap-10 lg:hidden">
          <div className="flex flex-col gap-2 text-center">
            <p className="font-secondary text-4xl font-normal text-primary">
              Дякуємо
            </p>
            <p className="text-black text-xl">
              за твій інтерес. Ми зв&apos;яємося з тобою найближчим часом
            </p>
          </div>
          <svg
            width="67"
            height="74"
            viewBox="0 0 67 74"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="block mx-auto"
          >
            <path
              d="M22.9172 7.98127C25.9542 -2.66042 41.0355 -2.66042 44.0725 7.98127L46.0997 15.0846L53.265 13.2886C63.9995 10.5978 71.5402 23.6587 63.8427 31.6096L58.7046 36.9169L63.8427 42.2242C71.5402 50.1752 63.9995 63.236 53.265 60.5453L46.0997 58.7492L44.0725 65.8526C41.0355 76.4943 25.9542 76.4943 22.9172 65.8526L20.89 58.7492L13.7247 60.5453C2.99021 63.236 -4.55047 50.1752 3.14701 42.2242L8.28509 36.9169L3.14701 31.6096C-4.55047 23.6587 2.99021 10.5978 13.7247 13.2886L20.89 15.0846L22.9172 7.98127Z"
              fill="#9DC6C9"
            />
          </svg>
          <div className="flex flex-col gap-2">
            <Button onClick={handleHomeClick} className="w-full">
              На головну
            </Button>
            <Button
              onClick={() => setIsOpen(false)}
              href="courses"
              variant="outline"
              className="w-full"
            >
              Проглянути більше курсів
            </Button>
          </div>
        </div>

        <div className="hidden lg:block">
          <DesktopPopUp
            onClose={() => setIsOpen(false)}
            onHomeClick={handleHomeClick}
            onCoursesClick={() => router.push("/courses")}
          />
        </div>
      </Modal>
    </Container>
  );
}

export default Form;
