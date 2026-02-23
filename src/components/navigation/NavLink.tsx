'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

type Props = {
  href: string;
  children: React.ReactNode;
};

const NavLink = ({ href, children }: Props) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={clsx(
        'transition-colors text-sm font-medium px-6.25 py-2',
        isActive
          ? 'text-(--with-taste-primary) border-b border-(--with-taste-primary)'
          : 'text-(--with-taste-black) hover:text-(--with-taste-primary)',
      )}
    >
      {children}
    </Link>
  );
};

export default NavLink;
