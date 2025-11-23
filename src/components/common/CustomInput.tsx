import React from "react";

type CustomInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export default function CustomInput({ label, id, ...rest }: CustomInputProps) {
  return (
    <label
      htmlFor={id}
      className="relative border rounded-md h-10 mt-5 flex items-center justify-start cursor-text"
    >
      <p className="absolute top-0 text-xs font-bold -translate-y-1/2 left-3 px-2 bg-white">
        {label}
      </p>
      <input
        id={id}
        {...rest}
        className="w-full text-xs h-full px-5 rounded-lg bg-transparent text-left flex justify-start items-center"
      />
    </label>
  );
}
