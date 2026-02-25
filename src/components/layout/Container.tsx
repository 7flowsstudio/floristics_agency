type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({ children, className = "" }: Props) {
  return (
    <div
      className={`max-w-[1440px] mx-auto px-[19px] md:px-[40px] lg:px-[82px] ${className}`}
    >
      {children}
    </div>
  );
}
