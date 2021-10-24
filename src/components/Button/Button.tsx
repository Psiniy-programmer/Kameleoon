import React from "react";
import './Button.css';

interface ButtonProps {
  text: string
}

const Button = ({text}: ButtonProps) => {
  return <button disabled>
    {text}
  </button>
}

export default Button;
