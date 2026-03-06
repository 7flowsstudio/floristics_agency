import React from "react";

interface BadgeProps {
  text?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const BestsellerBadge: React.FC<BadgeProps> = ({
  text = "Бестселер",
  className = "",
  style,
}) => {
  return (
    <span
      className={`
        absolute top-[16px] left-[16px] z-[20]
        bg-[#1C686D] text-white text-sm 
        rounded-[24px] w-[133px] h-[40px] 
        flex items-center justify-center gap-2
        ${className}
      `}
      style={style}
    >
      {text}
    </span>
  );
};
