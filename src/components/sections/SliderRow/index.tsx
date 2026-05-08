"use client";

import { useRef, useEffect, useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import { PaginationDots } from "./PaginationsDots";
import { FullscreenSlider } from "./FullScreenSlider";
import { motion } from "framer-motion";
export const GAP = 8;

export function SliderRow({
  title,
  images,
}: {
  title: string;
  images: string[];
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [hasMoved, setHasMoved] = useState(false);

  const [scrollIndex, setScrollIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollIndexRef = useRef(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observerOptions = {
      root: container,
      threshold: 0.5,
      rootMargin: "0px -10% 0px -10%",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.getAttribute("data-index"));
          setScrollIndex(index);
        }
      });
    }, observerOptions);

    itemRefs.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, [images.length]);

  const onMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setHasMoved(false);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);

    containerRef.current.style.scrollSnapType = "none";
    containerRef.current.style.scrollBehavior = "auto";
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    containerRef.current.scrollLeft = scrollLeft - walk;

    if (Math.abs(walk) > 5) setHasMoved(true);
  };

  const onMouseUp = () => {
    setIsDragging(false);
    if (!containerRef.current) return;

    containerRef.current.style.scrollSnapType = "x mandatory";
    containerRef.current.style.scrollBehavior = "smooth";
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const scrollToSlide = (index: number) => {
    const target = itemRefs.current[index];
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
  };

  useEffect(() => {
    scrollIndexRef.current = scrollIndex;
  }, [scrollIndex]);
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isHovered) return;

      const container = containerRef.current;
      if (!container) return;

      const itemsCount = images.length;
      const itemWidth = container.scrollWidth / itemsCount;

      const currentIndex = Math.round(container.scrollLeft / itemWidth);

      if (e.key === "ArrowRight") {
        e.preventDefault();

        const next = Math.min(currentIndex + 1, itemsCount - 1);

        container.scrollTo({
          left: next * itemWidth,
          behavior: "smooth",
        });
      }

      if (e.key === "ArrowLeft") {
        e.preventDefault();

        const prev = Math.max(currentIndex - 1, 0);

        container.scrollTo({
          left: prev * itemWidth,
          behavior: "smooth",
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isHovered, images.length]);
  return (
    <>
      <section className="overflow-hidden">
        <h2 className="text-center text-lg text-black lg:text-3xl lg:text-left mb-[8px] lg:mb-8 lg:pl-[180px]">
          {title}
        </h2>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
          className="relative px-[20px] lg:px-0"
        >
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-[240px] hidden lg:block bg-gradient-to-r from-[#F7F5F3] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-[240px] hidden lg:block bg-gradient-to-l from-[#F7F5F3] to-transparent" />

          <div
            ref={containerRef}
            tabIndex={0}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={clsx(
              "outline-none flex overflow-x-auto scrollbar-none gap-2 lg:gap-10 snap-x snap-mandatory select-none",
            )}
          >
            {images.map((src, index) => (
              <div
                key={index}
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                data-index={index}
                onClick={() => {
                  if (!hasMoved) {
                    setActiveIndex(index);
                    setIsOpen(true);
                  }
                }}
                className={clsx(
                  "min-w-[295px] h-[318px] lg:w-[520px] lg:h-[580px] shrink-0 snap-start transition-opacity",
                  "lg:first:pl-[180px] lg:first:min-w-[700px]",
                  "lg:last:pr-[180px] lg:last:min-w-[700px]",
                )}
              >
                <Image
                  draggable={false}
                  className="object-cover w-full h-full rounded-lg pointer-events-none"
                  src={src}
                  alt={`photo-${index}`}
                  width={520}
                  height={580}
                  priority={index < 3}
                />
              </div>
            ))}
          </div>

          <div className="mt-6">
            <PaginationDots
              total={images.length}
              active={scrollIndex}
              onDotClick={scrollToSlide}
            />
          </div>
        </motion.div>
      </section>

      <FullscreenSlider
        isOpen={isOpen}
        images={images}
        activeIndex={activeIndex}
        onClose={() => setIsOpen(false)}
        onNavigate={setActiveIndex}
      />
    </>
  );
}
