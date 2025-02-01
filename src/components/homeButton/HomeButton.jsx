import React from "react";
import "./HomeButton.css";



const Button = ({ text, func, type }) => {
  return (
    <button className="HomeButton" type={type} onClick={func}>
      {text}
    </button>
  );
};
export default Button;
