import React from "react";


const Button = ({ handleClick }) => {
  return (
    <button onClick={handleClick}>
      <span>Siguiente</span>
      <span>➡</span>
    </button>
  );
};

export default Button;