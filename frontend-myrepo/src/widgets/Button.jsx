import React from "react";

function Button({ success, name, className, ...props }) {
  const successClass = " hover:bg-emerald-800  bg-emerald-600 text-emerald-50 ";

  const main = " p-2 rounded-lg ";

  return (
    <button
      className={`
        ${main}
        ${className} 
        ${success ? successClass : ""} 
    `}
      {...props}>
      {name}
    </button>
  );
}

export default Button;
