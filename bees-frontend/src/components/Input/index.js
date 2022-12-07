import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  OutlineBlack900: "bg-gray_200 border border-black_900 border-solid",
};
const shapes = { RoundedBorder14: "rounded-radius14" };

const Input = React.forwardRef(
  (
    {
      onChange = () => {},
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape,
      variant,
      value = "",
      ...restProps
    },
    ref,
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } `}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            value={value}
            onChange={onChange}
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
            />
          {!!children && children}
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["RoundedBorder14"]),
  variant: PropTypes.oneOf(["OutlineBlack900"]),
};
Input.defaultProps = {
  onChange: () => {},
  value: "",
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "RoundedBorder14",
  variant: "OutlineBlack900",
};

export { Input };
