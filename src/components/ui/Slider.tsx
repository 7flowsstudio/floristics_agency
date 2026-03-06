"use client";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { useSmoothScroll } from "@/utils/useSmoothScroll/useSmoothScroll";

type SliderProps<T> = {
  items: T[];
  renderCard: (item: T, index: number) => React.ReactNode; // універсальний рендер картки
  slidesToScroll?: number;
  gap?: number;
  duration?: number;
  containerClassName?: string;
};

function Slider<T>({
  items,
  renderCard,
  slidesToScroll = 1,
  gap = 16,
  duration = 500,
  containerClassName = "",
}: SliderProps<T>) {
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
        style={{ gap: gap }}
      >
        {items.map((item, index) => renderCard(item, index))}
      </div>

      {/* пагінація */}
      <div className="flex gap-2 mt-4 justify-center">
        {items.map((_, index) => (
          <span
            key={index}
            className={clsx(
              "block h-1 rounded transition-all",
              scrollIndex === index
                ? "w-8 border-3 border-[#1C686D]"
                : "w-4 border-3 border-[#9DC6C9]",
            )}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
