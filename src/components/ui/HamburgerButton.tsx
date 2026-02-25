interface HamburgerButtonProps {
  isOpen: boolean;
  onToggle: () => void;
  className?: string;
}

const HamburgerButton = ({
  isOpen,
  onToggle,
  className,
}: HamburgerButtonProps) => {
  return (
    <button
      data-mobile-menu-trigger
      onClick={onToggle}
      className={`w-11 h-14 inline-flex flex-col justify-center items-center gap-2 cursor-pointer border-none bg-transparent ${className}`}
      aria-label={isOpen ? 'Закрити меню' : 'Відкрити меню'}
      {...(isOpen ? { 'aria-expanded': true } : { 'aria-expanded': false })}
    >
      <div className="w-9.5 flex flex-col gap-2">
        <span className="self-stretch h-0.5 bg-[#092223] rounded-full transition-all duration-300"></span>
        <span className="self-stretch h-0.5 bg-[#092223] rounded-full transition-all duration-300"></span>
        <span className="self-stretch h-0.5 bg-[#092223] rounded-full transition-all duration-300"></span>
      </div>
    </button>
  );
};

export default HamburgerButton;
