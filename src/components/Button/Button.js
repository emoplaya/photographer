import React from "react";
import { forwardRef } from "react";
import { motion } from "framer-motion";

export const Button = forwardRef(({ onClick, children }, ref) => {
  return (
    <div className="button" onClick={onClick} ref={ref}>
      {children}
    </div>
  );
});

export const MButton = motion(Button);
