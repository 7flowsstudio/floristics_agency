import React from "react";
import clsx from "clsx";

type SectionSubheadingProps = {
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLParagraphElement>;

export default function SectionSubheading({
  children,
  className,
  ...props
}: SectionSubheadingProps) {
  const baseClasses = "text-center text-[18px] md:text-[22px] leading-6";

  return (
    <p
      className={clsx(baseClasses, className)}
      {...props}
    >
      {children}
    </p>
  );
}