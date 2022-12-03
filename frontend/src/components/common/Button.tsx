import React from "react";
import "./Button.scss";

type buttonType = {
  children: React.ReactNode;
  color?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const Button = ({
  children,
  color = "#A43A3A",
  onClick,
}: buttonType) => {
  return (
    <button className={`Button ${color}`} onClick={onClick}>
      {children}
    </button>
  );
};
