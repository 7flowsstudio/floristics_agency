import About from '@/components/sections/About';
import Courses from '@/components/sections/Courses';
import Hero from '@/components/sections/Hero';
import Reviews from '@/components/sections/Reviews';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Courses />
      <Reviews />
    </>
  );
}
