'use client';
import clsx from 'clsx';
import Container from '../layout/Container';
import Button from '../ui/Button';

interface CallToActionProps {
  question: string;
  highlight?: string;
  text?: string;
  buttonText: string;
  href?: string;
  onClick?: () => void;
  sectionClassName?: string;
  textClassName?: string;
  questionClassName?:string;
}

export default function CallToAction({
  question,
  highlight,
  text,
  buttonText,
  href,
  sectionClassName = '',
  textClassName = '',
  questionClassName=''
}: CallToActionProps) {
  return (
    <section className={clsx('pb-[40px] lg:pb-[180px]', sectionClassName)}>
      <Container className="text-center flex flex-col items-center gap-6 w-full">
        {text && (
          <p
            className={clsx(
              'max-w-xl text-black md:text-[24px] italic md:max-w-[844px]',
              textClassName,
            )}
          >
            {text}
          </p>
        )}
        <p className={clsx('text-[20px] md:text-[32px] text-dark-brown lg:w-[626px]', questionClassName)}>
          {question}{' '}
          {highlight && <span className="text-[32px] lg:text-[48px] font-secondary">{highlight}</span>}
        </p>

        <Button href={href} className="w-full md:w-[412px]">
          {buttonText}
        </Button>
      </Container>
    </section>
  );
}
