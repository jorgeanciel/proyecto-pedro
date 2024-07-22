import React from "react";
import { BgColors, TColor } from "../../../constants/colors";
import Icon from "../icon/icon";

type TOption = {
  value: string;
  name: string;
};
type SelectProps = {
  color?: TColor;
  options: TOption[];
  onSelect?: (value: string) => void;
  defaultValue?: string;
  expanded?: boolean;
  name?: string;
};

const Select: React.FC<SelectProps> = ({
  color = "primary",
  options,
  onSelect,
  defaultValue,
  expanded,
  name,
}) => {
  const bgColor = BgColors[color];
  const handlerOnSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (onSelect) {
      onSelect(e.target.value);
    }
  };
  return (
    <div className={`${expanded ? "w-full" : ""} relative`}>
      <select
        name={name}
        className={`${bgColor} px-4 py-2 rounded-md text-sm shadow-lg text-white focus:outline-none custom-select ${
          expanded ? "w-full" : ""
        }`}
        onChange={handlerOnSelect}
        defaultValue={defaultValue}
      >
        {options?.map((opt, index) => (
          <option key={`option-${index}-${opt.name}`} value={opt.value}>
            {opt.name}
          </option>
        ))}
      </select>
      <div className="custom-arrow">
        <Icon name="arrowBottom" color="white" size="19" />
      </div>
    </div>
  );
};

export default Select;
