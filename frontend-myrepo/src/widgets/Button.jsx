import React from "react";

function Button({ name, className, ...props }) {
  const success = " hover:bg-emerald-800  bg-emerald-600 text-emerald-50 ";

  const main = " p-2 rounded-lg ";

  return (
    <button
      className={`
        ${main}
        ${className} 
        ${success ?? ""} 
    `}
      {...props}>
      {name}
    </button>
  );
}

export default Button;
