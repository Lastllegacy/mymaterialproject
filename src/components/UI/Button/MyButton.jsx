import React from "react";
import './MyButton.css'

function MyButton({children, ...args}) {
  return <button className="my-button" {...args}>{children}</button>;
}

export default MyButton;
