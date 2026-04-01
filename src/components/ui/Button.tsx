import React from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

type ButtonProps = {
  children: React.ReactNode;
  iconSrc?: string;
  iconPosition?: 'left' | 'right';
  variant?: 'primary' | 'outline';
  size?: 'sm' | 'md';
  className?: string;
  href?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  iconSrc,
  iconPosition = 'right',
  variant = 'primary',
  className,
  href,
  ...props
}: ButtonProps) {
  const base =
    'group flex items-center justify-center gap-3 rounded-[32px] md:rounded-[40px] transition duration-300 text-xl cursor-pointer overflow-hidden';

  const variants = {
    primary: 'bg-[#1C686D] text-white hover:bg-[#115256]',
    outline:
      'bg-transparent border border-[#1C686D] text-[#1C686D] hover:border-[#115256] hover:bg-[#9DC6C933]',
  };

  const responsiveHeight = 'h-[52px] md:h-[72px]';

  const isDown = iconSrc?.includes('down');
  const hoverAnimation = isDown
    ? 'group-hover:animate-arrow-down'
    : 'group-hover:translate-x-1.5';

  const iconElement = iconSrc ? (
    <div
      className={clsx(
        'transition-transform duration-300 ease-out',
        !isDown && hoverAnimation,
        isDown &&
          'group-hover:animate-[arrow-bounce-y_1.8s_infinite_ease-in-out]',
      )}
    >
      <Image src={iconSrc} alt="" width={20} height={20} unoptimized />
    </div>
  ) : null;

  const classes = clsx(base, variants[variant], responsiveHeight, className);

  const content = (
    <>
      {iconElement && iconPosition === 'left' && iconElement}
      {children}
      {iconElement && iconPosition === 'right' && iconElement}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}