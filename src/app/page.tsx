import About from '@/components/sections/About';
import Courses from '@/components/sections/Courses';
import Hero from '@/components/sections/Hero';
import Reviews from '@/components/sections/Reviews';
import Form from '@/components/sections/Form';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Courses />
      <Reviews />
      <Form />
    </>
  );
}
