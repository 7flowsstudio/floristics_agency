import React from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import NextLink from 'next/link';

type NavLinkProps = {
  children: React.ReactNode;
  iconSrc?: string;
  iconPosition?: 'left' | 'right';
  variant?: 'primary' | 'outline';
  size?: 'sm' | 'md';
  className?: string;
  href: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export default function NavLink({
  children,
  iconSrc,
  iconPosition = 'right',
  variant = 'primary',
  className,
  href,
  ...props
}: NavLinkProps) {
  const base =
    'inline-flex items-center justify-center gap-3 rounded-[32px] md:rounded-[40px] transition duration-300 text-xl cursor-pointer';

  const variants = {
    primary: 'bg-[#1C686D] text-white hover:bg-[#115256] cursor-pointer',
    outline:
      'bg-transparent border border-[#1C686D] text-[#1C686D] hover:border-[#115256] hover:bg-[#9DC6C933] cursor-pointer',
  };
  const responsiveHeight = 'h-[52px] md:h-[72px]';
  const iconElement = iconSrc ? (
    <Image src={iconSrc} alt="" width={20} height={20} unoptimized />
  ) : null;
  const classes = clsx(base, variants[variant], responsiveHeight, className);

  return (
    <NextLink href={href} className={classes} {...props}>
      {iconElement && iconPosition === 'left' && iconElement}
      {children}
      {iconElement && iconPosition === 'right' && iconElement}
    </NextLink>
  );
}
