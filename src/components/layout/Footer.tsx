import Container from './Container';
import Link from 'next/link';
import Image from 'next/image';
import LogoPrimary from '../ui/icons/LogoPrimary';
import { contacts } from '@/data/contacts';
import { footerLinks } from '@/data/footerLinks';

const Footer = () => {
  return (
    <footer className="bg-card py-14.5 md:pt-20 md:pb-10.25">
      <Container>
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:justify-between">
          <Link href="/" className="block">
            <LogoPrimary className="text-primary hover:text-primaryActive transition w-18 h-14.5 md:w-49 md:h-39.5" />
          </Link>

          <nav className="flex flex-col items-center gap-6 text-primary font-medium text-[20px]">
            {footerLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:underline hover:underline-offset-4 transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <nav className="flex flex-col gap-3 text-left text-primary text-[16px] underline underline-offset-4">
            {contacts.map((item, index) => {
              const Icon = item.icon;

              return (
                <div key={index} className="flex items-center gap-4">
                  <Icon />
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primaryActive transition-colors duration-300"
                  >
                    {'multiline' in item && item.multiline ? (
                      <>
                        Софіївська Борщагівка,
                        <br />
                        просп. Мартинова 2
                      </>
                    ) : (
                      item.label
                    )}
                  </a>
                </div>
              );
            })}
          </nav>
        </div>

        <div className="flex flex-col pt-8 gap-2 items-center text-[16px] text-greyNormalActive md:pt-20">
          <a
            href="https://7flowsstudio.vercel.app/uk"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.25 transition-colors duration-300 hover:text-primary"
          >
            <Image
              src="/logo-agency.svg"
              alt="Лого агенції"
              width={39}
              height={36}
            />
            7flows.studio
          </a>

          <p>&copy; {new Date().getFullYear()} WithTaste. Всі права захищені</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
