import React from "react";
const variantClasses = {
  h1: "font-bold md:text-[48px] sm:text-[48px] text-[64px]",
  h2: "font-bold sm:text-[38px] md:text-[44px] text-[48px]",
  h3: "font-bold sm:text-[32px] md:text-[34px] text-[36px]",
  h4: "font-bold sm:text-[28px] md:text-[30px] text-[32px]",
  h5: "font-bold sm:text-[20px] md:text-[22px] text-[24px]",
  h6: "font-bold text-[20px]",
  body1: "text-[15px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
