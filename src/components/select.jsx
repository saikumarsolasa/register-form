import React from 'react';
import "../styles/select.css";

const Select = (props) => {
    const {name, label, required, children, ...rest} = props; 
  return (
    <div className='select-field'>
      <label htmlFor={name}>{label}{required&&<sup>*</sup>}</label>
      <select name={name} {...rest}>
        {children}
      </select>
    </div>
  )
}

export default Select;
