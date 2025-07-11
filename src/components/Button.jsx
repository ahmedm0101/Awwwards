import React from "react";

const Button = ({ id, title, leftIcon, containerClass, rightIcon }) => {
  return (
    <button
      id={id}
      className={`${containerClass} w-fit relative group z-10 cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black`}
    >
      {leftIcon}
      <span className="inline-flex overflow-hidden font-general uppercase text-xs">
        <div className="">{title}</div>
      </span>
      {rightIcon}
    </button>
  );
};

export default Button;
