import React from "react";

const InputBox = ({ type, id, name, placeholder }) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={id}
        className="text-gray-700 dark:text-gray-100 font-semibold"
      >
        {name}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        className="outline-none w-full border-2 border-gray-100 dark:border-gray-400 py-1 px-2 rounded text-[15px] dark:text-gray-100"
      />
    </div>
  );
};

export default InputBox;
