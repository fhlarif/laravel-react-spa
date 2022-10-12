import React from "react";

function Input({ error, className, ...props }) {
  return (
    <input
      className={` ${className}  ${
        error ? "bg-gray-900 text-red-500 mb-4" : "bg-gray-600 text-gray-200 rounded-md p-2 "
      }`}
      {...props}
    />
  );
}

export default Input;
