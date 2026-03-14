"use client";

import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";

interface CallToActionProps {
  question: string;
  highlight?: string;
  text?: string;
  buttonText: string;
  href?: string;
  onClick?: () => void;
}

export default function CallToAction({
  question,
  highlight,
  text,
  buttonText,
  href,
}: CallToActionProps) {
  return (
    <section className="">
      <Container className="text-center flex flex-col items-center gap-6 md:max-w-[844px] w-full">
          {text && (
            <i className="max-w-xl text-black md:text-[24px]">
              {text}
            </i>
          )}
        <SectionHeading className="text-[32px]">
          {question}{" "}
          {highlight && (
            <span className="font-secondary">{highlight}</span>
          )}
        </SectionHeading>


        <Button href={href} className="w-full md:w-auto">
          {buttonText}
        </Button>
      </Container>
    </section>
  );
}