/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const IconJamIconsFilledCircleF1 = ({ color = "#22C55E", className }) => {
  return (
    <svg
      className={`icon-jam-icons-filled-circle-f-1 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M12 22.065C6.477 22.065 2 17.588 2 12.065C2 6.542 6.477 2.065 12 2.065C17.523 2.065 22 6.542 22 12.065C22 17.588 17.523 22.065 12 22.065Z"
        fill={color}
      />
    </svg>
  );
};

IconJamIconsFilledCircleF1.propTypes = {
  color: PropTypes.string,
};
