import React from 'react';
import type { JSX } from 'react';
import clsx from 'clsx';

type SectionHeadingProps = {
  children?: React.ReactNode;
  mobileText?: string;
  desktopText?: string;
  className?: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
} & React.HTMLAttributes<HTMLHeadingElement>;

export default function SectionHeading({
  children,
  mobileText,
  desktopText,
  className,
  level = 2,
  ...props
}: SectionHeadingProps) {
  const baseClasses =
    'text-[24px] md:text-[40px] text-dark-brown font-medium text-center';

  const content =
    mobileText && desktopText ? (
      <>
        <span className="block md:hidden">{mobileText}</span>
        <span className="hidden md:block">{desktopText}</span>
      </>
    ) : (
      children
    );

  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;

  return React.createElement(
    HeadingTag,
    {
      className: clsx(baseClasses, className),
      ...props,
    },
    content,
  );
}
