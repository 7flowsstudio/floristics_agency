import Link from 'next/link';
import Container from '@/components/layout/Container';
import Logo from '@/components/layout/Logo';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Container>
        <div className="flex flex-col items-center gap-6">
          <Logo variant="black" size="lg" />

          <h1 className="text-4xl font-serif">404</h1>

          <p className="text-gray-600 max-w-md text-center">
            Сторінку не знайдено
          </p>

          <Link
            href="/"
            className="mt-4 px-6 py-3 border border-black rounded 
           text-black 
           hover:bg-black hover:text-white 
           transition-colors duration-300"
          >
            Повернутися на головну
          </Link>
        </div>
      </Container>
    </div>
  );
}
