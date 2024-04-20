import React from "react";
import './MyInput.css';

function MyInput({...args}) {
  return (
   <input 
      {...args}
      type="text" 
      className="input-text" 
   /> 
  )
}

export default MyInput;
