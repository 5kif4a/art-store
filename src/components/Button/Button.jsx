import React from "react";
import clsx from "clsx";
import "./Button.scss";

const Button = ({ children, disabled, onClick }) => {
  return (
    <button
      className={clsx("button", {
        button_disabled: disabled,
      })}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
