import { useEffect, useState } from "react";
import { myColors } from "../../constants/colors";
import Icon from "../atoms/icon/icon";
import Typography from "../atoms/typography/typography";

export type TDropdownOption = {
  value: string;
  name: string;
};
type DropdownProps = {
  options: TDropdownOption[];
  value?: string;
  onChange: (optionSelected: TDropdownOption) => void;
  variant?: "primary";
  label?: string;
};

const Dropdown: React.FC<DropdownProps> = ({
  options,
  value,
  variant = "primary",
  onChange,
  label = "",
}) => {
  const [isHover, setIsHover] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [optionSelected, setOptionSelected] = useState<TDropdownOption | null>(
    null,
  );

  const variants = {
    primary: {
      content: `border-2 ${
        isHover || isShow ? "border-primary" : "border-gray-400"
      }`,
      text: `${isHover || isShow ? "text-primary" : "text-gray-500"}`,
      icon: `${isHover || isShow ? myColors.primary : myColors["gray-2"]}`,
      optionColor: "bg-white hover:bg-violet-50",
    },
  };

  const handlerOnMouseEnter = () => {
    setIsHover(true);
  };

  const handlerOnMouseLeave = () => {
    setIsHover(false);
  };

  const handlerOnSelectedItem = (selected: TDropdownOption) => {
    setOptionSelected(selected);
    setIsShow(false);
    typeof onChange === "function" && onChange(selected);
  };

  useEffect(() => {
    setOptionSelected(options?.find((opt) => opt.value === value) || null);
  }, [value]);

  return (
    <div className="w-full relative">
      <Typography
        label={label}
        variant="small"
        color="text-gray-400"
        spacing="wider"
      />
      <div
        onMouseEnter={handlerOnMouseEnter}
        onMouseLeave={handlerOnMouseLeave}
        onClick={() => setIsShow(!isShow)}
        className={`${variants[variant].content} rounded-xl px-4 mt-2 py-2 flex flex-row justify-between items-center cursor-pointer`}
      >
        <Typography
          variant="small"
          family="semibold"
          className={`${variants[variant].text}`}
        >
          {optionSelected?.name || "Seleccionar"}
        </Typography>
        <Icon
          name={isShow ? "arrowTop" : "arrowBottom"}
          color={variants[variant].icon}
          size="19"
        />
      </div>
      {isShow && (
        <section>
          <div className="w-full py-2 bg-white rounded-lg shadow-md h-60 overflow-auto absolute z-20">
            {options?.map((opt, index) => {
              return (
                <div
                  key={`option-${index}-${opt.name}`}
                  onClick={() => handlerOnSelectedItem(opt)}
                  className={`py-3 my-2 mx-2 px-3 cursor-pointer rounded-lg ${
                    variants[variant].optionColor
                  } ${
                    optionSelected?.value === opt.value ? "bg-violet-50" : ""
                  }`}
                >
                  <Typography
                    variant="small"
                    family="medium"
                    color="text-gray-700"
                  >
                    {opt.name}
                  </Typography>
                </div>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
};

export default Dropdown;
