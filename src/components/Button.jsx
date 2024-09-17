import React from "react";

const Button = ({ styles }) => (
  <button
    className={`${styles} px-6 py-4 bg-blue-gradient rounded-[10px] outline-none
    text-primary text-[18px] font-poppins font-medium`}
  >
    Get Started
  </button>
);

export default Button;
