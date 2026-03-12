"use client";

import { AccordionItemType } from "./Accordion";
import Image from "next/image";

type Props = {
  item: AccordionItemType;
  isOpen: boolean;
  onToggle: () => void;
};

export default function AccordionItem({ item, isOpen, onToggle }: Props) {
  return (
    <div className="">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center py-4"
      >
        <span>{item.title}</span>

        <Image
          src="/line-arrow.svg"
          alt="arrow"
          width={20}
          height={20}
          className={`transition-transform duration-500 cursor-pointer ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`grid transition-all duration-500 ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden pb-4">{item.content}</div>
      </div>
    </div>
  );
}
