import React, { useRef } from "react";
import { ReactComponent as PlusIcon } from "../../assets/img/plus-icon.svg";

const AccordionItem = ({ faqItem, onClick, isOpen }) => {
  const itemRef = useRef(null);
  return (
    <li className="accordion-item">
      <button className="accordion-header" onClick={() => onClick()}>
        {faqItem.q}
        <PlusIcon className={`accordion-plus ${isOpen ? "active" : ""}`} />
      </button>
      <div
        className="accordion-collapse"
        style={
          isOpen ? { height: itemRef.current.scrollHeight } : { height: "0px" }
        }
      >
        <div className="accordion-body" ref={itemRef}>
          {faqItem.a}
        </div>
      </div>
    </li>
  );
};

export default AccordionItem;
