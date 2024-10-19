import React, { forwardRef, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

// interface InputProps {
//   label: string;
//   type: string;
//   placeholder: string;
//   value: string;
//   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   rest:
// }

type CustomInputProps = React.ComponentPropsWithRef<"input"> & {
  label: string;
  error: string | undefined;
  type: string;
};

const Input = forwardRef<HTMLInputElement, CustomInputProps>(
  ({ label, error, type, ...rest }, ref) => {
    const [isVisible, setIsVisible] = useState(false);
    return (
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2 font-sans">
          {label}
        </label>
        <div className="shadow appearance-none border flex justify-between items-center rounded w-full py-2 px-3  ">
          <input
            {...rest}
            ref={ref}
            type={isVisible ? "text" : type}
            className="focus:outline-none appearance-none h-10 w-full focus:shadow-outline text-gray-700 leading-tight"
          />
          <div
            style={{
              padding: "8px",
            }}
            className=" flex items-center justify-center"
          >
            {type?.toLowerCase() === "password" ? (
              isVisible ? (
                <AiFillEye
                  onClick={() => {
                    setIsVisible(false);
                  }}
                  className="text-gray-500 w-5 h-5 mr-2 cursor-pointer"
                />
              ) : (
                <AiFillEyeInvisible
                  onClick={() => {
                    setIsVisible(true);
                  }}
                  className="text-gray-500 w-5 h-5 mr-2 cursor-pointer"
                />
              )
            ) : null}
          </div>
        </div>

        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
      </div>
    );
  }
);

export default Input;
