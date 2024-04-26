import React from "react";

const Button = ({ onClick, children }) => {
  return (
    <div className="button" onClick={onClick}>
      {children}
    </div>
  );
};

export default Button;
