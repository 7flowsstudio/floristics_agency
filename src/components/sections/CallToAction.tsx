'use client';

import Container from '../layout/Container';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

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
    <section className="pb-[40px] lg:pb-[180px]">
      <Container className="text-center flex flex-col items-center gap-6 w-full">
        {text && <p className="max-w-xl text-black md:text-[24px] italic md:max-w-[844px]">{text}</p>}
        <p className="text-[16px] md:text-[32px] text-dark-brown">
          {question}{' '}
          {highlight && <span className="font-secondary">{highlight}</span>}
        </p>

        <Button href={href} className="w-full md:w-[412px]">
          {buttonText}
        </Button>
      </Container>
    </section>
  );
}
