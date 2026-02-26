'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

const NavLink = ({ href, children, className }: Props) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={clsx(
        'transition-colors px-8.5 py-2 text-center justify-start text-black text-xl font-medium font-primary tracking-[0.2px] leading-normal',
        isActive
          ? 'text-primaryActive border-b border-primaryActive'
          : 'text-black hover:text-primary',
        className
      )}
    >
      {children}
    </Link>
  );
};

export default NavLink;
