import React from "react";
import "../styles/input.css";

const Input = (props) => {
  const { name, label,required, ...rest } = props;
  return (
    <div className="input-field">
      <label htmlFor={name}>{label}{required && <sup className="required">*</sup>}</label>
      <input autoComplete="off" name={name} {...rest} />
    </div>
  );
};

export default Input;
