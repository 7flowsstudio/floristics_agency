import About from '@/components/sections/About';
import Courses from '@/components/sections/Courses';
import Hero from '@/components/sections/Hero';
import Histories from '@/components/sections/Histories';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Courses />
      <Histories />
    </>
  );
}
