import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';

type LogoVariant = 'primary' | 'black' | 'brown';
type LogoSize = 'sm' | 'lg';

type LogoProps = {
  variant?: LogoVariant;
  size?: LogoSize;
  className?: string;
};

const logoMap: Record<LogoVariant, string> = {
  primary: '/logo-primary.svg',
  black: '/logo-black.svg',
  brown: '/logo-brown.svg',
};

const sizeMap: Record<LogoSize, { width: number; height: number }> = {
  sm: { width: 72, height: 58 },
  lg: { width: 196, height: 158 },
};

const Logo = ({ variant = 'primary', size = 'sm', className }: LogoProps) => {
  return (
    <Link href="/" className={clsx('inline-block', className)}>
      <Image
        src={logoMap[variant]}
        alt="Agency Floristics logo"
        width={sizeMap[size].width}
        height={sizeMap[size].height}
        priority
      />
    </Link>
  );
};

export default Logo;
