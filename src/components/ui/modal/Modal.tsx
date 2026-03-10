import Container from "@/components/layout/Container";
import React, { useEffect, useState } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  desktopSize?: {
    width: string;
    height: string;
  };
  desktopStyles?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  desktopSize,
  desktopStyles,
}) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => setIsAnimating(true), 300);
    } else {
      document.body.style.overflow = "unset";
      const timer = setTimeout(() => setIsAnimating(false), 300);
      return () => clearTimeout(timer);
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen && !isAnimating) return null;

  return (
    <Container
      className={`fixed inset-0 z-50 bg-background lg:bg-transparent transition-all duration-300 ${
        isOpen
          ? "opacity-100 backdrop-blur-sm"
          : "opacity-0 backdrop-blur-none lg:backdrop-blur-none"
      }`}
    >
      <button
        onClick={onClose}
        className="absolute top-[60px] right-5 z-10 p-2  rounded-full transition-all duration-200 hover:scale-110 lg:hidden md:block"
        aria-label="Закрити"
      >
        <svg
          width="20"
          height="19"
          viewBox="0 0 20 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.70712 1L18.6777 17.9706M17.9706 1L1 17.9706"
            stroke="#9DC6C9"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>

      <div className="flex flex-col items-center justify-center h-full bg-transparent">
        <div
          className={`w-full max-w-md mx-4 transition-all duration-300 lg:max-w-none lg:mx-0 ${
            desktopSize
              ? `lg:w-[${desktopSize.width}] lg:h-[${desktopSize.height}]`
              : ""
          } ${desktopStyles || ""} ${
            isOpen
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 translate-y-4"
          }`}
        >
          {children}
        </div>
      </div>
    </Container>
  );
};

export default Modal;
