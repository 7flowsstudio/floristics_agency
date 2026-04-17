'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { PaginationDots } from './PaginationsDots';

export function FullscreenSlider({
  isOpen,
  images,
  activeIndex,
  onClose,
  onNavigate,
}: {
  isOpen: boolean;
  images: string[];
  activeIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}) {
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startXRef = useRef(0);
  const [mounted, setMounted] = useState(false);
  const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 1024;
  const slidesToScroll = isDesktop ? 33.33 : 85; 
  const centeringOffset = (100 - slidesToScroll) / 2;

  useEffect(() => {
    setMounted(true);
    if (isOpen) document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'auto'; };
  }, [isOpen]);

  const handleNext = useCallback(() => {
    if (activeIndex < images.length - 1) onNavigate(activeIndex + 1);
  }, [activeIndex, images.length, onNavigate]);

  const handlePrev = useCallback(() => {
    if (activeIndex > 0) onNavigate(activeIndex - 1);
  }, [activeIndex, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleNext, handlePrev, onClose]);

  if (!isOpen || !mounted) return null;

  const onStart = (clientX: number) => {
    setIsDragging(true);
    startXRef.current = clientX;
  };

  const onMove = (clientX: number) => {
    if (!isDragging) return;
    setDragOffset(clientX - startXRef.current);
  };

  const onEnd = () => {
    if (!isDragging) return;
    const threshold = 50;
    if (dragOffset < -threshold) handleNext();
    else if (dragOffset > threshold) handlePrev();
    setIsDragging(false);
    setDragOffset(0);
  };

  const content = (
    <div
      className="fixed inset-0 z-[9999] bg-[#9DC6C9] flex flex-col items-center justify-center overflow-hidden touch-none"
      onMouseMove={(e) => onMove(e.pageX)}
      onMouseUp={onEnd}
      onMouseLeave={onEnd}
      onTouchMove={(e) => onMove(e.touches[0].clientX)}
      onTouchEnd={onEnd}
    >
      <button
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        className="absolute top-6 right-4 lg:top-2 lg:right-4 z-[10000] p-4 cursor-pointer"
      >
        <span className="text-[#F7F5F3] lg:text-3xl text-3xl font-light">✕</span>
      </button>

      <div 
        className="relative w-full flex items-center"
        onMouseDown={(e) => onStart(e.pageX)}
        onTouchStart={(e) => onStart(e.touches[0].clientX)}
      >
        <div 
          className={`flex w-full transition-transform duration-500 ease-out ${
            isDragging ? 'transition-none cursor-grabbing' : 'cursor-grab'
          }`}
          style={{ 
            transform: `translateX(calc(-${activeIndex * slidesToScroll}% + ${dragOffset}px + ${centeringOffset}%))` 
          }}
        >
          {images.map((src, idx) => (
            <div 
              key={idx} 
              className="w-[85%] lg:w-[33.33%] shrink-0 flex items-center justify-center px-2 lg:px-4"
            >
              <div className="relative w-full h-[450px] md:h-[700px] pointer-events-none select-none">
                <Image
                  src={src}
                  alt={`Slide ${idx}`}
                  fill
                  priority={idx === activeIndex}
                  className={`object-cover rounded-xl transition-opacity duration-300 ${
                    idx === activeIndex ? 'opacity-100' : 'opacity-60'
                  }`}
                  sizes="(max-width: 1024px) 85vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <PaginationDots
          total={images.length}
          active={activeIndex}
          onDotClick={onNavigate}
          activeColorClass="bg-[#F7F5F3]"
          inactiveColorClass="bg-[#F7F5F3]/50"
        />
      </div>
    </div>
  );

  return createPortal(content, document.body);
}




