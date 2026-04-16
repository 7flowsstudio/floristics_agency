'use client';
import Container from '@/components/layout/Container';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div id='#hero' className="relative w-full">
      <div className="absolute inset-0 md:hidden z-0">
        <Image
          src="/img/hero/moblast.webp"
          alt="background"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(247,245,243,0.279781)_32.04%,rgba(247,245,243,0)_44.35%),linear-gradient(180deg,rgba(247,245,243,0)_67.01%,rgba(247,245,243,0.708654)_89.88%,#F7F5F3_93.29%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#F7F5F3_20.72%,transparent_44.35%)]" />
      </div>

      <div
        className="
          relative
          z-10
          md:bg-none
          md:h-[834px]
          w-full
          pt-[120px] md:pt-[140px] lg:pt-[160px]
        "
      >
        <Container>
          <div className="flex flex-row md:gap-[28px] md:justify-between xl:gap-[120px]">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="flex flex-col mx-auto justify-between md:justify-start h-[75vh] md:mx-0"
            >
              <div className="mx-auto">
                <div className="mx-auto max-w-[400px] lg:max-w-full">
                  <h1 className="text-[#1C686D] text-[40px] leading-[45px] lg:text-[64px] lg:leading-[65px] font-secondary md:pt-31.25">
                    Мрій яскраво,{' '}
                    <span className="block text-right min-[1407px]:inline min-[1407px]:text-left">
                      твори сміливо
                    </span>
                  </h1>
                </div>
                <p className="text-[20px] leading-[117%] tracking-[0.01em] md:pb-10 text-center pt-[12px] lg:text-[22px]">
                  Флористика та food-флористика для тих, хто любить творити
                </p>
              </div>
              <div className="flex flex-col gap-[8px] lg:flex-row md:gap-[20px] pt-2 w-full">
                <Button className="w-full" variant="primary" href="/courses">
                  Записатися на курс
                </Button>
                <Button
                  className="w-full"
                  iconSrc="/arrow-down.svg"
                  variant="outline"
                  iconPosition="right"
                  href="#more"
                >
                  Дізнатися більше
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="relative w-[520px] h-[674px] hidden md:block rounded-[16px] overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <Image
                src="/img/hero/deshero.webp"
                alt="flowers"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </motion.div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Hero;
