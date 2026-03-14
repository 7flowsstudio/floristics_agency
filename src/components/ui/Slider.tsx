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
  paginationClassName?: string;
};

function Slider<T>({
  items,
  renderCard,
  slidesToScroll = 1,
  gap = 16,
  duration = 500,
  containerClassName = "",
  paginationClassName = "",
}: SliderProps<T>) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollSmooth } = useSmoothScroll(containerRef, {
    slidesToScroll,
    gap,
    duration,
  });

  const [scrollIndex, setScrollIndex] = useState(0);
  const [pages, setPages] = useState(1);

  // Обчислення кількості сторінок
  const updatePages = () => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const slideWidth = container.firstElementChild?.clientWidth || 1;
    const containerWidth = container.clientWidth;
    const visibleSlides = Math.floor(containerWidth / (slideWidth + gap));
    // setPages(Math.max(items.length - visibleSlides + 1, 1));
    setPages(items.length)
  };

  // Слідкуємо за скролом
  const handleScroll = () => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const slideWidth = container.firstElementChild?.clientWidth || 1;
    const index = Math.round(container.scrollLeft / (slideWidth + gap));
    setScrollIndex(index);
  };

  // Ініціалізація і resize
  useEffect(() => {
    updatePages();
    handleScroll(); // оновлюємо scrollIndex при першому рендері

    window.addEventListener("resize", updatePages);
    const container = containerRef.current;
    if (!container) return;
    container.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("resize", updatePages);
      container.removeEventListener("scroll", handleScroll);
    };
  }, [items.length, gap]);

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
        style={{ gap }}
      >
        {items.map((item, index) => renderCard(item, index))}
      </div>

      {/* пагінація */}
      <div
        className={clsx("flex gap-2 mt-4 justify-center", paginationClassName)}
      >
        {Array.from({ length: pages }).map((_, index) => (
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
