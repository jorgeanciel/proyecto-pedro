import { useState } from "react";
import { myColors } from "../../../constants/colors";
import Icon from "../icon/icon";

type InputSearchProps = {
  value?: string;
  onChange?: (value: string) => void;
  expanded?: boolean;
  className?: string;
};

const InputSearch: React.FC<InputSearchProps> = ({
  value,
  onChange,
  expanded = false,
  className,
}) => {
  const [valueSearch, setValueSearch] = useState<string>(value || "");
  const [focused, setFocused] = useState<boolean>(false);

  const handlerOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueSearch(event.target.value);
    if (typeof onChange === "function") onChange(event.target.value);
  };
  return (
    <div className="relative">
      <Icon
        name="search"
        color={myColors[`${focused ? "primary" : "gray-3"}`]}
        className="absolute z-10 bottom-2 left-2"
      />
      <input
        value={valueSearch}
        onChange={handlerOnChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={`bg-gray-100 pl-10 pr-3 py-2.5 text-xs rounded-lg text-dark tracking-wide relative z-0 opacity-80 focus:outline-none border-2 ${
          focused ? "border-primary" : "border-gray-100"
        } ${expanded && "w-full"} ${className}`}
        placeholder="Search"
      />
    </div>
  );
};

export default InputSearch;
