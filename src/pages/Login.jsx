import React, { useState } from "react";

const Registration = () => {
  const [currentState, setCurrentState] = useState("Sign Up");
  return (
    <div className="login">
      <div className="login__title">
        <h2>{currentState}</h2>
      </div>
    </div>
  );
};

export default Registration;
