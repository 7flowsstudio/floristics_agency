type Props = {
  children: React.ReactNode;
};

export default function Container({ children }: Props) {
  return (
    <div className="max-w-[1440px] mx-auto px-[19px] md:px-[40px] lg:px-[82px]">
      {children}
    </div>
  );
}
