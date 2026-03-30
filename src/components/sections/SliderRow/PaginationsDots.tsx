import clsx from "clsx";

export function PaginationDots({ 
  total, 
  active, 
  onDotClick, 
  activeColorClass = 'bg-[#1C686D]', 
  inactiveColorClass = 'bg-[#9DC6C9]' 
}: { 
  total: number; 
  active: number; 
  onDotClick: (index: number) => void;
  activeColorClass?: string;
  inactiveColorClass?: string;
}) {
  return (
    <div className="flex gap-2 justify-center">
      {Array.from({ length: total }).map((_, index) => (
        <span
          key={index}
          onClick={() => onDotClick(index)}
          className={clsx(
            'block h-1 rounded transition-all duration-300 cursor-pointer',
            active === index ? `w-10 ${activeColorClass}` : `w-3 ${inactiveColorClass}`
          )}
        />
      ))}
    </div>
  );
}
