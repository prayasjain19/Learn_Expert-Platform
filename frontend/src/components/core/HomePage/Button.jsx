import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, active, linkto }) => {
  return (
    <Link to={linkto}>
      <div
        className={`text-center text-[13px] sm:text-[16px] px-6 py-3 rounded-lg font-semibold transition-all duration-300
          ${
            active
              ? "bg-[#38BDF8] text-black shadow-md hover:bg-[#0EA5E9]"
              : "bg-richblack-800 text-white hover:bg-richblack-700"
          }
          hover:scale-95 focus:outline-none focus:ring-2 focus:ring-[#7DD3FC]`}
      >
        {children}
      </div>
    </Link>
  );
};

export default Button;
