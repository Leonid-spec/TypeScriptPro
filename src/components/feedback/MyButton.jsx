import React from "react";
import "./MyButton.css";

export default function MyButton({ onClick, text, type = "button" }) {
    return (
      <button className="my-button" type={type} onClick={onClick}>
        {text}
      </button>
    );
  }
  
