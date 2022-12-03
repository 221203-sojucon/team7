import React from "react";

type buttonType = {
  children: React.ReactNode;
  color?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const Button = ({ children, color = "blue", onClick }: buttonType) => {
  return (
    <button className={`${color}`} onClick={onClick}>
      {children}
    </button>
  );
};
