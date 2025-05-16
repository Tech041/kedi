import React from "react";

const Button = ({ children }) => {
  return (
    <button className="bg-green-800 hover:bg-green-500 text-white px-4 py-1 rounded-2xl">
      {children}
    </button>
  );
};

export default Button;
