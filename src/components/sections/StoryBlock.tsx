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
  isMobileCard?: boolean; // Додано для слайдера
};

function StoryBlock({
  imageSrc,
  imageAlt,
  testimonial,
  reverse = false,
  showHeading = false,
  paddingX = { md: 'px-[40px]', lg: 'px-[200px]' },
  isMobileCard = false,
}: StoryBlockProps) {

  const imageDirection = reverse ? 100 : -100;
  const textDirection = reverse ? -100 : 100;

  // Якщо це картка в мобільному слайдері
  if (isMobileCard) {
    return (
      <div className="bg-[#ECE9E3] rounded-lg overflow-hidden flex flex-col h-full">
        <div className="relative w-full h-[400px]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover object-top"
          />
          <div 
            className="absolute inset-x-0 bottom-0 h-[120px]" 
            style={{
              background: 'linear-gradient(180deg, rgba(236, 233, 227, 0) 0%, #ECE9E3 100%)'
            }}
          />
        </div>
        <div className="px-6 pb-2 pt-2 text-left">
          <div className="space-y-4 text-[#1C1C1C] text-[16px] leading-[1.4] italic">
            {testimonial.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Десктопна версія (залишається вашою)
  return (
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
  );
}

export default StoryBlock;