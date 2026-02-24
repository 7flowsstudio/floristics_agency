import React from "react";
import clsx from "clsx";
import Image from "next/image";

type ButtonProps = {
  children: React.ReactNode;
  iconSrc?: string; // шлях до svg в public
  iconPosition?: "left" | "right";
  variant?: "primary" | "outline";
  size?: "sm" | "md";
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  iconSrc,
  iconPosition = "right",
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-3 rounded-[32px] md:rounded-[40px] transition duration-300 text-xl";

  const variants = {
    primary: "bg-[#1C686D] text-white hover:bg-[#115256]",
    outline:
      "bg-transparent border border-[#1C686D] text-[#1C686D] hover:border-[#115256] hover:bg-[#9DC6C933]",
  };
  const responsiveHeight = "h-[52px] md:h-[72px]";
  const iconElement = iconSrc ? (
    <Image
      src={iconSrc}
      alt=""
      width={20}
      height={20}
      unoptimized // обов'язково для svg з public
    />
  ) : null;

  return (
    <button
      className={clsx(base, variants[variant], responsiveHeight, className)}
      {...props}
    >
      {iconElement && iconPosition === "left" && iconElement}
      {children}
      {iconElement && iconPosition === "right" && iconElement}
    </button>
  );
}
// type ButtonProps = {
//   children: React.ReactNode;
//   className?: string;
// } & React.ButtonHTMLAttributes<HTMLButtonElement>;

// export default function Button({
//   children,
//   className = "",
//   ...props
// }: ButtonProps) {
//   return (
//     <button
//       className={`
//         w-[304px] h-[72px]
//         rounded-[32px]
//         px-[16px] pt-[24px] pb-[24px]
//         flex items-center justify-center gap-[12px]
//         bg-[#1C686D] text-white
//         hover:bg-[#115256]
//         active:bg-transparent active:border active:border-[#1C686D]
//         focus:outline-none focus:ring-2 focus:ring-[#1C686D] focus:ring-offset-1
//         transition
//         ${className}
//       `}
//       {...props}
//     >
//       {children}
//     </button>
//   );
// }
