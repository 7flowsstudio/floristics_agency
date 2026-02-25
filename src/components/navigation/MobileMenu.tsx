import NavLink from './NavLink';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div
      data-mobile-menu
      className="fixed inset-0 bg-(--with-taste-bg) z-50 overflow-hidden flex flex-col"
    >
      {/* Close button */}
      <div className="flex justify-end p-6">
        <button
          onClick={onClose}
          className="size-10 flex justify-center items-center cursor-pointer border-none bg-transparent hover:bg-gray-200 rounded-full transition-colors"
          aria-label="Закрити меню"
        >
          <svg
            width="30"
            height="29"
            viewBox="0 0 30 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.999835 27.661C11.6906 17.264 17.6844 11.4349 28.3752 1.03796"
              stroke="#1C686D"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M1.33008 1L28.2944 27.9929"
              stroke="#1C686D"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {/* Navigation items - left aligned */}
      <nav className="flex-1 flex flex-col justify-center px-6">
        <div className="flex flex-col items-start gap-6">
          <NavLink
            href="/"
            className="text-xl font-medium tracking-tight text-(--with-taste-primary)"
          >
            Головна
          </NavLink>
          <NavLink
            href="/about"
            className="text-xl font-medium tracking-tight text-(--with-taste-primary)"
          >
            Про мене
          </NavLink>
          <NavLink
            href="/courses"
            className="text-xl font-medium tracking-tight text-(--with-taste-primary)"
          >
            Курси
          </NavLink>
          <NavLink
            href="/history"
            className="text-xl font-medium tracking-tight text-(--with-taste-primary)"
          >
            Трішки історії
          </NavLink>
          <NavLink
            href="/photos"
            className="text-xl font-medium tracking-tight text-(--with-taste-primary)"
          >
            Фотоальбом
          </NavLink>
          <NavLink
            href="/contacts"
            className="text-xl font-medium tracking-tight text-(--with-taste-primary)"
          >
            Контакти
          </NavLink>
        </div>
      </nav>

      {/* Social media links - full width */}
      <div className="grid grid-cols-3 gap-0 pb-12">
        <a
          href="#"
          className="flex-1 h-16 flex justify-center items-center bg-(--with-taste-primary) text-white hover:bg-(--with-taste-active-primary) transition-colors"
          aria-label="Facebook"
        >
          <svg className="size-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </a>
        <a
          href="#"
          className="flex-1 h-16 flex justify-center items-center bg-(--with-taste-primary) text-white hover:bg-(--with-taste-active-primary) transition-colors"
          aria-label="Instagram"
        >
          <svg className="size-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.017 0C8.396 0 7.996.014 6.79.067 5.59.12 4.794.252 4.14.446c-.712.206-1.32.478-1.854.99C1.74 1.95 1.47 2.516.446 3.14.252 3.794.12 4.59.067 5.79.014 6.996 0 8.396 0 12.017s.014 5.02.067 6.226c.053 1.21.185 2.006.379 2.66.206.712.478 1.32.99 1.854.514.534 1.08.804 1.854.99.66.185 1.456.317 2.66.379 1.206.053 2.606.067 6.227.067s5.02-.014 6.226-.067c1.21-.053 2.006-.185 2.66-.379.712-.206 1.32-.478 1.854-.99.534-.514.804-1.08.99-1.854.185-.66.317-1.456.379-2.66.053-1.206.067-2.606.067-6.227s-.014-5.02-.067-6.226c-.053-1.21-.185-2.006-.379-2.66-.206-.712-.478-1.32-.99-1.854C22.05 1.74 21.484 1.47 20.86.446 20.206.252 19.41.12 18.21.067 17.004.014 15.604 0 12.017 0zm0 2.174c3.56 0 3.984.013 5.39.06 1.303.047 2.02.217 2.5.362.548.166.947.366 1.36.78.414.413.614.812.78 1.36.145.48.315 1.197.362 2.5.047 1.406.06 1.83.06 5.39s-.013 3.984-.06 5.39c-.047 1.303-.217 2.02-.362 2.5-.166.548-.366.947-.78 1.36-.413.414-.812.614-1.36.78-.48.145-1.197.315-2.5.362-1.406.047-1.83.06-5.39.06s-3.984-.013-5.39-.06c-1.303-.047-2.02-.217-2.5-.362-.548-.166-.947-.366-1.36-.78-.414-.413-.614-.812-.78-1.36-.145-.48-.315-1.197-.362-2.5-.047-1.406-.06-1.83-.06-5.39s.013-3.984.06-5.39c.047-1.303.217-2.02.362-2.5.166-.548.366-.947.78-1.36.413-.414.812-.614 1.36-.78.48-.145 1.197-.315 2.5-.362 1.406-.047 1.83-.06 5.39-.06zm0 3.108c-3.644 0-6.59 2.946-6.59 6.59s2.946 6.59 6.59 6.59 6.59-2.946 6.59-6.59-2.946-6.59-6.59-6.59zm0 10.87c-2.361 0-4.275-1.914-4.275-4.275s1.914-4.275 4.275-4.275 4.275 1.914 4.275 4.275-1.914 4.275-4.275 4.275zm8.368-11.085c-.854 0-1.547-.693-1.547-1.547s.693-1.547 1.547-1.547 1.547.693 1.547 1.547-.693 1.547-1.547 1.547z" />
          </svg>
        </a>
        <a
          href="tel:+380932451284"
          className="flex-1 h-16 flex justify-center items-center bg-(--with-taste-primary) text-white hover:bg-(--with-taste-active-primary) transition-colors"
          aria-label="Телефон"
        >
          <svg className="size-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default MobileMenu;
