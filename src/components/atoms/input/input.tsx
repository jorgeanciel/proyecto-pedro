import React, { useState } from "react";
import Icon, { MyIcons } from "../icon/icon";
import { myColors } from "../../../constants/colors";
type ThemeInputs =
  | "primary"
  | "secondary"
  | "dark"
  | "gray-1"
  | "gray-2"
  | "gray-3";
type InputProps = {
  value?: string;
  icon?: MyIcons;
  placeholder?: string;
  theme?: ThemeInputs;
  onChange?: (value: string) => void;
  placeholderClass?: string;
  inputClass?: string;
  type?: string;
};

const Input: React.FC<InputProps> = ({
  value,
  icon,
  placeholder = "Ingresar datos",
  onChange,
  placeholderClass,
  inputClass,
  type = "text",
}) => {
  const [focus, setFocus] = useState<boolean>(false);
  const [valueState, setValueState] = useState(value);
  const handlerOnFocus = () => setFocus(true);
  const handlerOnBlur = () => setFocus(false);
  const handlerOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueState(event.target.value);
    if (typeof onChange === "function") onChange(event.target.value);
  };

  return (
    <div className="relative">
      {icon && (
        <section className="absolute left-3 top-2.5">
          <Icon
            name={icon}
            color={
              focus || valueState
                ? myColors["danger-light"]
                : myColors["danger-light"]
            }
            size="18"
          />
        </section>
      )}

      <p
        className={`text-xs absolute left-11 top-1 tracking-wide pointer-events-none transform ${
          focus || valueState
            ? "-translate-y-4 -translate-x-10 text-white  text-xs11 font-montserrat-bold opacity-80"
            : "translate-y-2 text-gray-300 text-xs12"
        } transition-transform duration-300 ${placeholderClass}`}
      >
        {placeholder}
      </p>
      <input
        type={type}
        onFocus={handlerOnFocus}
        onBlur={handlerOnBlur}
        onChange={handlerOnChange}
        className={`focus:outline-none border-b-2 border-rose-600 text-xs tracking-wider text-gray-700 pl-10 h-10 ${
          focus || valueState ? "border-primary-light" : `border-danger`
        } ${inputClass}`}
        value={valueState}
      />
    </div>
  );
};

export default Input;
