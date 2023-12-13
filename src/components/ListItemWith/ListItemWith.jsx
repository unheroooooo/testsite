/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconFlagIconSet43Us } from "../../icons/IconFlagIconSet43Us";
import { IconJamIconsOutlineLogosCheck } from "../../icons/IconJamIconsOutlineLogosCheck";
import "./style.css";

export const ListItemWith = ({
  flag = true,
  icon = true,
  text = "Item Name",
  with1,
  size,
  className,
  iconJamIconsOutlineLogosCheckColor = "#16A34A",
  textClassName,
}) => {
  return (
    <div className={`list-item-with ${size} ${with1} ${className}`}>
      {with1 === "icon" && (
        <>
          <>
            {icon && (
              <IconJamIconsOutlineLogosCheck
                className={`${size === "s" ? "class" : "class-2"}`}
                color={iconJamIconsOutlineLogosCheckColor}
              />
            )}
          </>
        </>
      )}

      {with1 === "flag" && (
        <>
          <>{flag && <IconFlagIconSet43Us className="icon-flag-icon-set" />}</>
        </>
      )}

      <div className={`text ${textClassName}`}>{text}</div>
    </div>
  );
};

ListItemWith.propTypes = {
  flag: PropTypes.bool,
  icon: PropTypes.bool,
  text: PropTypes.string,
  with1: PropTypes.oneOf(["flag", "icon"]),
  size: PropTypes.oneOf(["m", "s"]),
  iconJamIconsOutlineLogosCheckColor: PropTypes.string,
};
