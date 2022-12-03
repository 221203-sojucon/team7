import React from "react";

type TextType = {
  children: React.ReactNode;
  color?: string;
  size?: string;
  bold?: boolean;
};

export const Text = ({
  children,
  color = "black",
  size,
  bold = false,
}: TextType) => {
  return <div className={`Text ${color} ${size} ${bold}`}>{children}</div>;
};
