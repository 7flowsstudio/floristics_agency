"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import clsx from "clsx";
import { useSmoothScroll } from "@/utils/useSmoothScroll/useSmoothScroll";

export type SliderItem = {
  id: string;
  title?: string;
  link?: string;
  imageUrl?: string;
};

type SliderProps = {
  items: SliderItem[];
  slidesToScroll?: number;
  gap?: number;
  duration?: number;
  cardClassName?: string;
  containerClassName?: string;
  imageWrapperClassName?: string;
};

const Slider: React.FC<SliderProps> = ({
  items,
  slidesToScroll = 1,
  gap = 16,
  duration = 500,
  cardClassName = "",
  containerClassName = "",
  imageWrapperClassName = "",
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollSmooth } = useSmoothScroll(containerRef, {
    slidesToScroll,
    gap,
    duration,
  });

  const [scrollIndex, setScrollIndex] = useState(0);

  const handleScroll = () => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const slideWidth = container.firstElementChild?.clientWidth || 1;
    const containerWidth = container.clientWidth;

    const visibleSlides = Math.floor(containerWidth / (slideWidth + gap));

    const index = Math.round(container.scrollLeft / (slideWidth + gap));

    const maxIndex = items.length - visibleSlides;
    setScrollIndex(Math.min(index, maxIndex >= 0 ? maxIndex : 0));
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  // клавіші ← → для скролу
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.repeat) return;
      if (e.key === "ArrowLeft") scrollSmooth("left");
      if (e.key === "ArrowRight") scrollSmooth("right");
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [scrollSmooth]);

  return (
    <div className="w-full relative">
      <div
        ref={containerRef}
        tabIndex={0}
        className={clsx(
          "flex overflow-x-auto scrollbar-none transition-all duration-500 focus:outline-none",
          containerClassName,
        )}
      >
        {items.map((item) => (
          <div
            key={item.id}
            className={clsx("flex-shrink-0 p-4 rounded-lg", cardClassName)}
          >
            {item.imageUrl && (
              <div
                className={clsx(
                  "w-full relative overflow-hidden",
                  imageWrapperClassName,
                )}
              >
                <Image
                  src={item.imageUrl}
                  alt={item.title || "image"}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            )}
            {item.title && <p className="text-sm mb-2">{item.title}</p>}
            {item.link && <p className="font-medium text-right">{item.link}</p>}
          </div>
        ))}
      </div>

      <div className="flex gap-2 mt-4 justify-center">
        {items.map((_, index) => (
          <span
            key={index}
            className={clsx(
              "block h-1 rounded transition-all",
              scrollIndex === index
                ? "w-8 border-2 border-[#1C686D]"
                : "w-4 border-2 border-[#9DC6C9]",
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
