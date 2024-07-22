import React from "react";
import LoadingDotPulse from "../loading/loading-dot-pulse";

type Theme = "primary" | "secondary" | "white";
type ButtonProps = {
  theme?: Theme;
  label: string;
  disabled?: boolean;
  expanded?: boolean;
  outlined?: boolean;
  isLink?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  isLoading?: boolean;
  loadingTheme?: "primary" | "secondary" | "";
};
const Button: React.FC<ButtonProps> = ({
  label,
  theme = "",
  disabled,
  expanded,
  outlined,
  isLink,
  className,
  type,
  onClick,
  isLoading,
  loadingTheme,
}) => {
  const themes: any = {
    white: {
      bgColor: "bg-white hover:bg-slate-200",
      textColor: "text-dark front-extrabold text-sm",
    },
    primary: {
      bgColor: `${
        outlined
          ? "border-2 border-indigo-500 hover:border-indigo-700"
          : "bg-indigo-500 hover:bg-indigo-700"
      }`,
      textColor: `${
        outlined ? "text-indigo-500" : "text-white"
      } font-extrabold text-sm`,
    },
    secondary: {
      bgColor: `${
        outlined ? "border-2 border-rose-500" : "bg-rose-500 hover:bg-rose-700"
      }`,
      textColor: `${
        outlined ? "text-rose-500" : "text-white"
      } font-bold text-sm`,
    },
  };

  const twTransition =
    "transition duration-300 ease-in-out transform active:scale-90 active:opacity-75";

  const twDisabled = "opacity-60 text-white-700 pointer-events-none";

  const twExpanded = "w-full";

  const isLinkStyle = isLink ? "shadow-none border-none" : "";

  return (
    <button
      type={type}
      className={`${className} ${disabled && twDisabled} ${
        themes[theme].bgColor
      } ${themes[theme]?.textColor} ${twTransition} ${
        expanded && twExpanded
      } ${isLinkStyle} px-3.5 h-10 rounded-md font-montserrat-bold shadow-lg`}
      onClick={onClick}
    >
      {isLoading ? <LoadingDotPulse theme={loadingTheme} /> : label}
    </button>
  );
};

export default Button;

Button.defaultProps = {
  theme: "primary",
  label: "My Button",
  disabled: false,
  expanded: false,
  outlined: false,
};
