"use client";

import { useState, ReactNode } from "react";
import AccordionItem from "./AccordionItem";

export type AccordionItemType = {
  id: string;
  title: string;
  content: ReactNode;
};

type Props = {
  items: AccordionItemType[];
};

export default function Accordion({ items }: Props) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div>
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          item={item}
          isOpen={openId === item.id}
          onToggle={() => toggle(item.id)}
        />
      ))}
    </div>
  );
}
