import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder19: "rounded-radius195",
  icbCircleBorder40: "rounded-radius40",
  icbRoundedBorder14: "rounded-radius145",
  icbCircleBorder20: "rounded-radius20",
};
const variants = {
  FillBlack902: "bg-black_902 text-yellow_600",
  FillYellow600: "bg-yellow_600 text-black_900",
  icbFillYellow600: "bg-yellow_600",
  icbFillRed500: "bg-red_500",
};
const sizes = {
  sm: "p-[10px] sm:p-[5px] md:p-[6px]",
  smIcn: "sm:p-[2px] md:p-[3px] p-[5px]",
  mdIcn: "sm:p-[4px] md:p-[5px] p-[8px]",
  lgIcn: "md:p-[12px] p-[18px] sm:px-[15px] sm:py-[9px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "RoundedBorder19",
    "icbCircleBorder40",
    "icbRoundedBorder14",
    "icbCircleBorder20",
  ]),
  variant: PropTypes.oneOf([
    "FillBlack902",
    "FillYellow600",
    "icbFillYellow600",
    "icbFillRed500",
  ]),
  size: PropTypes.oneOf(["sm", "smIcn", "mdIcn", "lgIcn"]),
};
Button.defaultProps = { className: "", shape: "", variant: "", size: "" };

export { Button };
