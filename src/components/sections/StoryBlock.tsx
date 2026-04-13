'use client';

import Image from 'next/image';
import Container from '../layout/Container';
import SectionHeading from '../ui/SectionHeading';
import { motion } from 'framer-motion';

type StoryBlockProps = {
  imageSrc: string;
  imageAlt: string;
  testimonial: string[];
  reverse?: boolean;
  showHeading?: boolean;
  paddingX?: { md?: string; lg?: string };
};

function StoryBlock({
  imageSrc,
  imageAlt,
  testimonial,
  reverse = false,
  showHeading = false,
  paddingX = { md: 'px-[40px]', lg: 'px-[200px]' },
}: StoryBlockProps) {

  const imageDirection = reverse ? 100 : -100;
  const textDirection = reverse ? -100 : 100;

  return (
    <>

      <div className="lg:hidden">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-card h-full max-w-131.25 mx-auto px-5 pt-8 pb-12 relative overflow-hidden"
        >
          <Image
            className="max-h-113.25 w-full object-cover rounded-lg"
            width={336}
            height={453}
            alt={imageAlt}
            src={imageSrc}
          />
          <div className="absolute left-0 right-0 bottom-0 h-[48%] bg-[linear-gradient(180deg,rgba(236,233,227,0)_0%,rgba(236,233,227,0.6)_40%,#ECE9E3_100%)] pointer-events-none" />
          <div className="absolute left-0 right-0 bottom-0 z-10 flex items-end">
            <div className="w-full backdrop-blur-[2px] px-6 pb-4">
              <div className="italic text-sm leading-5 sm:text-base sm:leading-6 space-y-3">
                {testimonial.map((paragraph, index) => (
                  <p key={index} className="mb-2 lg:text-[24px]">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <Container
        className={`w-full hidden lg:flex pt-40 items-center overflow-hidden ${
          reverse ? 'flex-row-reverse' : ''
        }`}
      >
        <motion.div
          initial={{ opacity: 0, x: imageDirection }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex-shrink-0"
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={412}
            height={555}
            className="rounded-lg object-cover"
          />
        </motion.div>

        <div className="flex-1">
          {showHeading && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <SectionHeading className="font-secondary text-primary text-[36px] md:text-[42px] lg:text-[64px] leading-10 max-w-67.25 mx-auto mb-10 lg:max-w-none">
                Історії наших учнів та учениць
              </SectionHeading>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, x: textDirection }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="md:flex-1"
          >
            <div
              className={`bg-card ${
                reverse
                  ? 'rounded-tl-2xl rounded-bl-2xl rounded-tr-none rounded-br-none'
                  : 'rounded-tr-2xl rounded-br-2xl rounded-tl-none rounded-bl-none'
              }`}
            >
              <div
                className={`mx-auto py-10 text-center text-[24px] italic leading-7 lg:mx-0 ${
                  paddingX?.md ? `md:${paddingX.md}` : ''
                } ${paddingX?.lg ? `lg:${paddingX.lg}` : ''}`}
              >
                {testimonial.map((paragraph, index) => (
                  <p
                    key={index}
                    className="mb-2 md:text-[18px] w-full max-w-161 lg:text-2xl mx-auto px-4"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </>
  );
}

export default StoryBlock;