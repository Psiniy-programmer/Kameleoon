import React from "react";
import './Input.css';

interface InputProps {
  placeholder: string,
  val: string,
  updateValFunc: (e: React.FormEvent<HTMLInputElement>) => void
}

const Input = ({placeholder, val, updateValFunc}: InputProps) => {
  return <div className='input'>
    <div className='input__img'>
      <img
        src={process.env.PUBLIC_URL + 'Interaction-Search.svg'}
        alt="search"
      />
    </div>
    <input
      onChange={updateValFunc}
      className='input__text'
      placeholder={placeholder}
      type="text"
      value={val}
    />
    <p className='input__count'>
      7 tests
    </p>
  </div>
}

export default Input;
