import Button from "../Button";
import SectionHeading from "../SectionHeading";
import SectionSubheading from "../SectionSubheading";

const DesktopPopUp = ({
  onClose,
  onHomeClick,
  onCoursesClick,
}: {
  onClose: () => void;
  onHomeClick: () => void;
  onCoursesClick: () => void;
}) => {
  return (
    <div className="relative py-[190px] px-4 mx-auto flex flex-col items-center justify-center h-full">
      <svg
        width="573"
        height="376"
        viewBox="0 0 573 376"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 left-[27px] z-0"
      >
        <path
          d="M196.504 -187.545C222.343 -278.151 350.657 -278.151 376.496 -187.545L393.836 -126.742L393.969 -126.276L394.438 -126.395L455.727 -141.769C547.055 -164.678 611.215 -53.4742 545.723 14.2236L501.773 59.6523L501.438 60L501.773 60.3477L545.723 105.776C611.215 173.474 547.055 284.678 455.727 261.769L394.438 246.395L393.969 246.276L393.836 246.742L376.496 307.545C350.657 398.151 222.343 398.151 196.504 307.545L179.164 246.742L179.031 246.276L178.562 246.395L117.273 261.769C25.9447 284.678 -38.2147 173.474 27.2773 105.776L71.2266 60.3477L71.5625 60L71.2266 59.6523L27.2773 14.2236C-38.2147 -53.4743 25.9447 -164.678 117.273 -141.769L178.562 -126.395L179.031 -126.276L179.164 -126.742L196.504 -187.545Z"
          stroke="#9DC6C9"
        />
      </svg>

      <svg
        width="370"
        height="473"
        viewBox="0 0 370 473"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0 right-0 z-0"
      >
        <path
          d="M196.504 68.4551C222.343 -22.1515 350.657 -22.1515 376.496 68.4551L393.836 129.258L393.969 129.724L394.438 129.605L455.727 114.231C547.055 91.3222 611.215 202.526 545.723 270.224L501.773 315.652L501.438 316L501.773 316.348L545.723 361.776C611.215 429.474 547.055 540.678 455.727 517.769L394.438 502.395L393.969 502.276L393.836 502.742L376.496 563.545C350.657 654.151 222.343 654.151 196.504 563.545L179.164 502.742L179.031 502.276L178.562 502.395L117.273 517.769C25.9447 540.678 -38.2147 429.474 27.2773 361.776L71.2266 316.348L71.5625 316L71.2266 315.652L27.2773 270.224C-38.2147 202.526 25.9447 91.3222 117.273 114.231L178.562 129.605L179.031 129.724L179.164 129.258L196.504 68.4551Z"
          stroke="#9DC6C9"
        />
      </svg>
      <svg
        width="518"
        height="105"
        viewBox="0 0 518 105"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0 left-0 z-0"
      >
        <path
          d="M141.504 68.4551C167.343 -22.1515 295.657 -22.1515 321.496 68.4551L338.836 129.258L338.969 129.724L339.438 129.605L400.727 114.231C492.055 91.3222 556.215 202.526 490.723 270.224L446.773 315.652L446.438 316L446.773 316.348L490.723 361.776C556.215 429.474 492.055 540.678 400.727 517.769L339.438 502.395L338.969 502.276L338.836 502.742L321.496 563.545C295.657 654.151 167.343 654.151 141.504 563.545L124.164 502.742L124.031 502.276L123.562 502.395L62.2734 517.769C-29.0553 540.678 -93.2147 429.474 -27.7227 361.776L16.2266 316.348L16.5625 316L16.2266 315.652L-27.7227 270.224C-93.2147 202.526 -29.0553 91.3222 62.2734 114.231L123.562 129.605L124.031 129.724L124.164 129.258L141.504 68.4551Z"
          stroke="#9DC6C9"
        />
      </svg>

      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-20 p-2 hover:bg-gray-100 rounded-full transition-all duration-200 hover:scale-110 cursor-pointer"
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
            stroke="#1C686D"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>

      <SectionHeading className=" z-20 text-center font-secondary lg:text-[64px] font-normal text-primary mb-6">
        Дякуємо
      </SectionHeading>

      <SectionSubheading className="z-20 w-full lg:w-[453px] text-center text-xl font-normal text-black mb-12">
        за твій інтерес. Ми зв&apos;яжемося з тобою найближчим часом
      </SectionSubheading>

      <div className="flex flex-col bg-background lg:flex-row gap-5 w-lg z-20">
        <Button onClick={onHomeClick} className="w-full lg:flex-1 font-bold">
          На головну
        </Button>
        <Button
          onClick={onCoursesClick}
          href="courses"
          variant="outline"
          className="w-full lg:flex-1 font-bold"
        >
          Більше курсів
        </Button>
      </div>
    </div>
  );
};

export default DesktopPopUp;
