import React from "react";

const Card = ({ children }) => {
  return <div className="border border-indigo-400 rounded-lg p-5 text-left shadow-sm shadow-indigo-300">{children}</div>;
};

export default Card;
