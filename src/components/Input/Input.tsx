import React from "react";
import './Input.css';

interface InputProps {
  placeholder: string
}

const Input = ({placeholder}: InputProps) => {
  return <div className='input'>
    <div className='input__img'>
      <img
        src={process.env.PUBLIC_URL + 'Interaction-Search.svg'}
        alt="search"
      />
    </div>
    <input
      className='input__text'
      placeholder={placeholder}
      type="text"
    />
    <p className='input__count'>
      7 tests
    </p>
  </div>
}

export default Input;
