import React from "react";

type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  varient?: "fill" | "hollow";
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ varient, children, ...rest }) => {
  return (
    <button
    className="bg-black hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
