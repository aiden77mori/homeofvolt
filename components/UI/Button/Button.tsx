import React, { ReactEventHandler } from "react";

interface ButtonProps {
  variant: "fill" | "outline";
  className?: string;
  children: React.ReactNode;
  onClickProps?: ReactEventHandler;
}

const Button = ({
  variant,
  children,
  className = "",
  onClickProps,
}: ButtonProps) => {
  const buttonStyle =
    variant === "fill"
      ? "rounded-[3px] bg-blue-500 hover:bg-transparent text-white hover:text-blue-500 border border-blue-500"
      : "rounded-[3px] bg-transparent hover:bg-blue-500 text-blue-500 hover:text-white border border-blue-500";
  return (
    <button className={`${className} ${buttonStyle}`} onClick={onClickProps}>
      {children}
    </button>
  );
};

export default Button;
