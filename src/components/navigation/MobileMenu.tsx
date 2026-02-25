import NavLink from './NavLink';
import Link from 'next/link';
interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  return (
    <>
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 bg-backgroundBg' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      <div
        data-mobile-menu
        className={`fixed top-0 right-0 h-full w-4/5 bg-tasteBg z-50 overflow-hidden flex flex-col transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
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

      <nav className="flex-1 flex flex-col justify-start px-8">
        <div className="flex flex-col items-start gap-10">
          <Link
            href="/"
            className="text-xl font-medium tracking-tight text-(--with-taste-primary) leading-normal"
          >
            Головна
          </Link>
          <Link
            href="/about"
            className="text-xl font-medium tracking-tight text-(--with-taste-primary) leading-normal"
          >
            Про мене
          </Link>
          <Link
            href="/courses"
            className="text-xl font-medium tracking-tight text-(--with-taste-primary) leading-normal"
          >
            Курси
          </Link>
          <Link
            href="/history"
            className="text-xl font-medium tracking-tight text-(--with-taste-primary) leading-normal"
          >
            Трішки історії
          </Link>
          <Link
            href="/photos"
            className="text-xl font-medium tracking-tight text-(--with-taste-primary) leading-normal"
          >
            Фотоальбом
          </Link>
          <Link
            href="/contacts"
            className="text-xl font-medium tracking-tight text-(--with-taste-primary) leading-normal"
          >
            Контакти
          </Link>
        </div>
      </nav>

      <div className="flex items-center justify-center gap-8 pb-14">
        <a
          href="#"
          aria-label="Instagram"
          className='p-2.5'
        >
          <svg
            width="50"
            height="50"
            viewBox="0 0 39 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.5 16.2305C18.5717 16.2305 17.6815 16.5992 17.0251 17.2556C16.3687 17.912 16 18.8022 16 19.7305C16 20.6587 16.3687 21.549 17.0251 22.2053C17.6815 22.8617 18.5717 23.2305 19.5 23.2305C20.4283 23.2305 21.3185 22.8617 21.9749 22.2053C22.6313 21.549 23 20.6587 23 19.7305C23 18.8022 22.6313 17.912 21.9749 17.2556C21.3185 16.5992 20.4283 16.2305 19.5 16.2305Z"
              fill="#1C686D"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.5258 9.55982C17.4965 9.12069 21.5036 9.12069 25.4743 9.55982C27.6435 9.80158 29.3923 11.5065 29.6471 13.6801C30.1176 17.6996 30.1176 21.7601 29.6471 25.7797C29.3923 27.9533 27.6435 29.6581 25.4754 29.9011C21.5044 30.3403 17.4969 30.3403 13.5258 29.9011C11.3566 29.6581 9.60772 27.9533 9.35299 25.7808C8.88234 21.7609 8.88234 17.7 9.35299 13.6801C9.60772 11.5065 11.3566 9.80158 13.5258 9.55982ZM25.2115 12.8875C24.9086 12.8875 24.618 13.0076 24.4038 13.2215C24.1896 13.4354 24.0692 13.7254 24.0692 14.0279C24.0692 14.3303 24.1896 14.6204 24.4038 14.8343C24.618 15.0481 24.9086 15.1683 25.2115 15.1683C25.5145 15.1683 25.805 15.0481 26.0193 14.8343C26.2335 14.6204 26.3538 14.3303 26.3538 14.0279C26.3538 13.7254 26.2335 13.4354 26.0193 13.2215C25.805 13.0076 25.5145 12.8875 25.2115 12.8875ZM14.0741 19.7299C14.0741 18.2932 14.6458 16.9154 15.6633 15.8996C16.6809 14.8837 18.061 14.313 19.5 14.313C20.9391 14.313 22.3192 14.8837 23.3367 15.8996C24.3543 16.9154 24.926 18.2932 24.926 19.7299C24.926 21.1665 24.3543 22.5443 23.3367 23.5602C22.3192 24.576 20.9391 25.1467 19.5 25.1467C18.061 25.1467 16.6809 24.576 15.6633 23.5602C14.6458 22.5443 14.0741 21.1665 14.0741 19.7299Z"
              fill="#1C686D"
            />
          </svg>
        </a>
        <a
          href="#"
          aria-label="Facebook"
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 10C20 4.48 15.52 0 10 0C4.48 0 0 4.48 0 10C0 14.84 3.44 18.87 8 19.8V13H6V10H8V7.5C8 5.57 9.57 4 11.5 4H14V7H12C11.45 7 11 7.45 11 8V10H14V13H11V19.95C16.05 19.45 20 15.19 20 10Z"
              fill="#1C686D"
            />
          </svg>
        </a>
        <a
          href="#"
          aria-label="Telegram"
        >
          <svg
            width="60"
            height="60"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 10C14.48 10 10 14.48 10 20C10 25.52 14.48 30 20 30C25.52 30 30 25.52 30 20C30 14.48 25.52 10 20 10ZM24.64 16.8C24.49 18.38 23.84 22.22 23.51 23.99C23.37 24.74 23.09 24.99 22.83 25.02C22.25 25.07 21.81 24.64 21.25 24.27C20.37 23.69 19.87 23.33 19.02 22.77C18.03 22.12 18.67 21.76 19.24 21.18C19.39 21.03 21.95 18.7 22 18.49C22.0069 18.4582 22.006 18.4252 21.9973 18.3938C21.9886 18.3624 21.9724 18.3337 21.95 18.31C21.89 18.26 21.81 18.28 21.74 18.29C21.65 18.31 20.25 19.24 17.52 21.08C17.12 21.35 16.76 21.49 16.44 21.48C16.08 21.47 15.4 21.28 14.89 21.11C14.26 20.91 13.77 20.8 13.81 20.45C13.83 20.27 14.08 20.09 14.55 19.9C17.47 18.63 19.41 17.79 20.38 17.39C23.16 16.23 23.73 16.03 24.11 16.03C24.19 16.03 24.38 16.05 24.5 16.15C24.6 16.23 24.63 16.34 24.64 16.42C24.63 16.48 24.65 16.66 24.64 16.8Z"
              fill="#1C686D"
            />
          </svg>
        </a>
      </div>
    </div>
    </>
  );
};

export default MobileMenu;
