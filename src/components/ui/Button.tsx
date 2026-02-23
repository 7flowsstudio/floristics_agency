import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        w-[304px] h-[72px] 
        rounded-[32px] 
        px-[16px] pt-[24px] pb-[24px] 
        flex items-center justify-center gap-[12px]
        bg-[#1C686D] text-white 
        hover:bg-[#115256] 
        active:bg-transparent active:border active:border-[#1C686D]
        focus:outline-none focus:ring-2 focus:ring-[#1C686D] focus:ring-offset-1
        transition
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
