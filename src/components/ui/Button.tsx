import React from "react";

interface Props {
  type?: "submit" | "button";
  className?: string;
  label: string;
  width?: number;
  bg?: string;
  textColor?: string;
  icon?: any;
}

const Button = ({
  className,
  type,
  width,
  label,
  bg,
  textColor,
  icon,
}: Props) => {
  return (
    <button
      type={type}
      className={
        className +
        ` width-[${width}px] ` +
        ` px-[24px] hover:opacity-90  py-[10px] ${
          bg ? `bg-[${bg}]` : "bg-purple"
        } text-${textColor ? textColor : "light"} rounded-[4px] `
      }
    >
      <img
        width={16}
        height={16}
        className={`${!icon ? "hidden" : ""}`}
        src={icon}
        alt="icon"
      />
      {label}
    </button>
  );
};

export default Button;
