'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useState, useCallback } from 'react';
import Container from './Container';
import Logo from './Logo';
import NavLink from '../navigation/NavLink';
import { useMobileMenu } from '@/hooks/useMobileMenu';
import { navigation } from '@/data/navigation';
import HamburgerButton from '../ui/HamburgerButton';
import MobileMenu from '../navigation/MobileMenu';

interface HeaderProps {
  background?: string;
}

const Header = ({
  background = 'bg-background/95 backdrop-blur-sm',
}: HeaderProps) => {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const { isOpen, toggle, close } = useMobileMenu();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    close();
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => document.body.classList.remove('overflow-hidden');
  }, [isOpen]);

  const logoSize = 'w-[72px] h-[58px]';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-30 w-full md:py-6 lg:py-8.75 transition-all duration-500 ${
          isOpen ? 'translate-y-0' : 'translate-y-0'
        } ${isScrolled ? background : 'bg-transparent shadow-none'}`}
      >
        <Container>
          <div className="hidden md:flex items-center justify-between gap-4 lg:gap-6">
            <div className="flex justify-center xl:justify-start">
              <Logo
                variant={isHome ? 'primary' : 'black'}
                className={logoSize}
              />
            </div>
            <nav className="flex items-center gap-1 md:gap-2 lg:gap-3 xl:gap-4">
              {navigation.map(item => (
                <NavLink
                  key={item.href}
                  href={item.href}
                  className="px-2 md:px-3 lg:px-4 xl:px-6"
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
            <a
              href="tel:+380932451284"
              className="text-black hidden lg:flex items-center gap-2 lg:gap-3"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path
                  d="M3.62 7.79C5.06 10.62 7.38 12.93 10.21 14.38L12.41 12.18C12.68 11.91 13.08 11.82 13.43 11.94C14.55 12.31 15.76 12.51 17 12.51C17.55 12.51 18 12.96 18 13.51V17C18 17.55 17.55 18 17 18C7.61 18 0 10.39 0 1C0 0.45 0.45 0 1 0H4.5C5.05 0 5.5 0.45 5.5 1C5.5 2.25 5.7 3.45 6.07 4.57C6.18 4.92 6.1 5.31 5.82 5.59L3.62 7.79Z"
                  fill="#1C686D"
                />
              </svg>
              093 245 1284
            </a>
          </div>

          <div className="flex md:hidden items-center justify-between relative py-3">
            {!isHome && (
              <button
                aria-label="Повернутися назад"
                onClick={() => window.history.back()}
                className="absolute left-0 size-10 flex justify-center items-center cursor-pointer border-none bg-transparent z-10"
              >
                <svg width="10" height="25" viewBox="0 0 10 25" fill="none">
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
              className={`${logoSize} absolute left-1/2 -translate-x-1/2`}
            />
            <HamburgerButton
              isOpen={isOpen}
              onToggle={toggle}
              className="absolute right-0"
            />
          </div>
        </Container>
      </header>
      <MobileMenu isOpen={isOpen} onClose={close} />
    </>
  );
};

export default Header;
