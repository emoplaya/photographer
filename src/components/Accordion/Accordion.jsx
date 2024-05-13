import React, { useState } from "react";
import { forwardRef } from "react";
import { motion } from "framer-motion";
import AccordionItem from "./AccordionItem";

export const Accordion = forwardRef(({ faqList }, ref) => {
  const [openId, setId] = useState(null);

  return (
    <ul className="accordion" ref={ref}>
      {faqList.map((faqItem, id) => {
        return (
          <AccordionItem
            onClick={() => (id === openId ? setId(null) : setId(id))}
            faqItem={faqItem}
            isOpen={id === openId}
            key={id}
          />
        );
      })}
    </ul>
  );
});

export const MAccordion = motion(Accordion);
