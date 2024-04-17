import React from "react";
import './MyButton.css'

function MyButton({children, ...args}) {
  return <div className="my-button" {...args}>{children}</div>;
}

export default MyButton;
