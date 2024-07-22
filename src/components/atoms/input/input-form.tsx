import { useState } from "react";
import { myColors } from "../../../constants/colors";
import Icon, { MyIcons } from "../icon/icon";
import { Field } from "formik";

type TColors =
  | "primary"
  | "secondary"
  | "tertiary"
  | "danger-light"
  | "gray-1"
  | "gray-2";

type TVariants = "normal" | "outline";

type InputFormProps = {
  value?: string;
  expanded?: boolean;
  className?: string;
  icon?: MyIcons;
  color: TColors;
  placeholder?: string;
  variant?: TVariants;
  background?: string;
  name?: string;
  type?: string;
  onKeyDown ?: ()=>void
};

const InputForm: React.FC<InputFormProps> = ({
  value = "",
  expanded = false,
  className,
  icon,
  color = "tertiary",
  placeholder = "input . .",
  variant = "normal",
  background = "bg-white",
  name,
  type,
  onKeyDown
}) => {
  const [focused, setFocused] = useState<boolean>(false);
  // const handlerOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log(event.target.value);
  //   // if (typeof onChange === "function") onChange(event.target.value);
  // };

  const theme = {
    primary: {
      variant: {
        normal: "border-b-2 rounded-sm",
        outline: "border-2 rounded-lg",
      },
      borderColor: focused ? `border-primary` : "border-gray-100",
      iconColor: myColors[`${focused || value ? "primary" : "gray-3"}`],
      textColor: "text-primary",
    },
    tertiary: {
      variant: {
        normal: "border-b-2 rounded-sm",
        outline: "border-2 rounded-lg",
      },
      borderColor: focused ? `border-tertiary` : "border-gray-100",
      iconColor: myColors[`${focused || value ? "tertiary" : "gray-3"}`],
      textColor: "text-tertiary",
    },
    "danger-light": {
      variant: {
        normal: "border-b-2 rounded-sm",
        outline: "border-2 rounded-lg",
      },
      borderColor: focused ? `border-danger-light` : "border-gray-100",
      iconColor: myColors[`${focused || value ? "danger-light" : "gray-3"}`],
      textColor: "text-danger-light",
    },
    "gray-1": {
      variant: {
        normal: "border-b-2 rounded-sm",
        outline: "border-2 rounded-lg",
      },
      borderColor: focused ? `border-gray-1` : "border-gray-100",
      iconColor: myColors[`${focused || value ? "gray-2" : "gray-3"}`],
      textColor: "text-gray-400",
    },
    "gray-2": {
      variant: {
        normal: "border-b-2 rounded-sm",
        outline: "border-2 rounded-lg",
      },
      borderColor: focused ? `border-gray-2` : "border-gray-100",
      iconColor: myColors[`${focused || value ? "gray-2" : "gray-3"}`],
      textColor: "text-gray-500",
    },
  } as any;

  const paddingText = icon ? "pl-10" : "pl-3";
  const translatexyPlaceholer = icon
    ? "-translate-y-5 -translate-x-10"
    : "-translate-y-4 -translate-x-3";

  return (
    <div className="relative">
      {icon && (
        <Icon
          size={18}
          name={icon}
          color={theme[color]?.iconColor}
          className="absolute z-10 bottom-2 left-2"
        />
      )}
      <p
        className={`absolute z-10 ${paddingText} top-1 tracking-widest pointer-events-none transform ${
          focused || value
            ? `${translatexyPlaceholer} ${theme[color]?.textColor} text-xs11 font-montserrat-bold`
            : "translate-y-2 text-gray-400 text-xs11"
        } transition-transform duration-300`}
      >
        {placeholder}
      </p>
      <Field
        type={type}
        name={name}
        component="input"
        onKeyDown={onKeyDown}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={`${background} ${paddingText} 
        pr-3 pt-3 pb-1.5 text-xs text-dark tracking-wide relative z-0 opacity-80 focus:outline-none 
        ${theme[color]?.variant[variant]}
        ${theme[color]?.borderColor}
        ${expanded && "w-full"} ${className}`}
      />
    </div>
  );
};

export default InputForm;
