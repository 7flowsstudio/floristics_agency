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
        'transition-colors px-6.25 py-2 text-center justify-start text-(--with-taste-black) text-[20px] font-(--font-family) tracking-tight',
        isActive
          ? 'text-(--with-taste-primary) border-b border-(--with-taste-primary)'
          : 'text-(--with-taste-black) hover:text-(--with-taste-primary)',
        className
      )}
    >
      {children}
    </Link>
  );
};

export default NavLink;
