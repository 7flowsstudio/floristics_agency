'use client';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import Container from './Container';
import Logo from './Logo';
import NavLink from '../navigation/NavLink';
import HamburgerButton from '../ui/HamburgerButton';
import MobileMenu from '../navigation/MobileMenu';

const Header = () => {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMobileMenu();
    };

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        !target.closest('[data-mobile-menu]') &&
        !target.closest('[data-mobile-menu-trigger]')
      ) {
        closeMobileMenu();
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('click', handleClickOutside);
      document.body.classList.add('no-scroll');
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('click', handleClickOutside);
      document.body.classList.remove('no-scroll');
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className="w-full py-8.75 bg-background">
        <Container>
          <div className="hidden md:flex items-center justify-between">
            <Logo variant={isHome ? 'primary' : 'black'} size="sm" />

            <nav className="flex gap-2">
              <NavLink href="/about">Про мене</NavLink>
              <NavLink href="/courses">Курси</NavLink>
              <NavLink href="/history"> Iсторія</NavLink>
              <NavLink href="/reviews">Відгуки</NavLink>
              <NavLink href="/photos">Фото</NavLink>
              <NavLink href="/contacts">Контакти</NavLink>
            </nav>

            <a href="tel:+380932451284" className="text-black flex items-center gap-4">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.62 7.79C5.06 10.62 7.38 12.93 10.21 14.38L12.41 12.18C12.68 11.91 13.08 11.82 13.43 11.94C14.55 12.31 15.76 12.51 17 12.51C17.55 12.51 18 12.96 18 13.51V17C18 17.55 17.55 18 17 18C7.61 18 0 10.39 0 1C0 0.45 0.45 0 1 0H4.5C5.05 0 5.5 0.45 5.5 1C5.5 2.25 5.7 3.45 6.07 4.57C6.18 4.92 6.1 5.31 5.82 5.59L3.62 7.79Z"
                  fill="#1C686D"
                />
              </svg>
              093 245 1284
            </a>
          </div>

          <div className="flex md:hidden items-center justify-center relative pt-3 pb-10">
            {!isHome && (
              <button
                onClick={() => window.history.back()}
                className="absolute left-0 size-10 flex justify-center items-center cursor-pointer border-none bg-transparent z-10"
                aria-label="Повернутися назад"
              >
                <svg
                  width="10"
                  height="25"
                  viewBox="0 0 10 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.16992 1.00012L1.16992 12.5001L8.16992 24.0001"
                    stroke="#092223"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            )}

            <Logo
              variant={isHome ? 'brown' : 'black'}
              size="sm"
              className="absolute left-1/2 transform -translate-x-1/2"
            />
            <HamburgerButton
              isOpen={isMobileMenuOpen}
              onToggle={toggleMobileMenu}
              className="absolute right-0"
            />
          </div>
        </Container>
      </header>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
    </>
  );
};

export default Header;
