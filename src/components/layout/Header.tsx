'use client';
import { usePathname } from 'next/navigation';
import Container from './Container';
import Logo from './Logo';
import NavLink from '../navigation/NavLink';

const Header = () => {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <header className="w-full py-8.75">
      <Container>
        <div className="flex items-center justify-between">
          <Logo variant={isHome ? 'primary' : 'black'} size="sm" />

          <nav className="flex gap-2">
            <NavLink href="/about">Про мене</NavLink>
            <NavLink href="/courses">Курси</NavLink>
            <NavLink href="/history">Історія</NavLink>
            <NavLink href="/reviews">Відгуки</NavLink>
            <NavLink href="/photos">Фото</NavLink>
            <NavLink href="/contacts">Контакти</NavLink>
          </nav>
          <a href="tel:+380932451284" className="text-sm font-medium">
            093 245 1284
          </a>
        </div>
      </Container>
    </header>
  );
};

export default Header;
