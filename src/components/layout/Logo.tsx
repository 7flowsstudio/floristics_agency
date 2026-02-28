import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';

type LogoVariant = 'primary' | 'black' | 'brown';

type LogoProps = {
  variant?: LogoVariant;
  className?: string;
};

const logoMap: Record<LogoVariant, string> = {
  primary: '/logo-primary.svg',
  black: '/logo-black.svg',
  brown: '/logo-brown.svg',
};

const Logo = ({ variant = 'primary', className }: LogoProps) => {
  return (
    <Link href="/" className={clsx('relative inline-block', className)}>
      <Image
        src={logoMap[variant]}
        alt="Agency Floristics logo"
        fill
        className="object-contain"
        priority
      />
    </Link>
  );
};

export default Logo;
