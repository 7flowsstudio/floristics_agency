import React from "react";
import type { JSX } from "react";
import clsx from "clsx";

type TextProps = {
  children?: React.ReactNode;
  mobileText?: string;
  desktopText?: string;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
} & React.HTMLAttributes<HTMLElement>;

export default function Text({
  children,
  mobileText,
  desktopText,
  className,
  as = "p",
  ...props
}: TextProps) {
  const baseClasses =
    "font-lato font-normal text-[16px] md:text-[20px] leading-[100%] tracking-[0.01em]";

  const content =
    mobileText && desktopText ? (
      <>
        <span className="block md:hidden">{mobileText}</span>
        <span className="hidden md:block">{desktopText}</span>
      </>
    ) : (
      children
    );

  return React.createElement(
    as,
    {
      className: clsx(baseClasses, className),
      ...props,
    },
    content,
  );
}
