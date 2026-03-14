import { forwardRef } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Container = forwardRef<HTMLDivElement, Props>(
  ({ children, className = "" }, ref) => {
    return (
      <div
        ref={ref}
        // className={`max-w-[1440px] mx-auto px-[19px] md:px-[40px] lg:px-[82px] ${className}`}
        className={`max-w-[1440px] mx-auto px-[19px] md:px-[32px] lg:px-[48px] xl:px-[82px] ${className}`}
      >
        {children}
      </div>
    );
  },
);

Container.displayName = "Container";
export default Container;
