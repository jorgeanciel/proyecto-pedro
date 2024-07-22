import React, { useState } from "react";
import { BgColors, TColor } from "../../../constants/colors";

type SwipeCheckboxProps = {
  onToggle: (isChecked: boolean) => void;
  isChecked: boolean;
  color?: TColor;
};

const SwipeCheckbox: React.FC<SwipeCheckboxProps> = ({
  onToggle,
  isChecked,
  color = "rose-500",
}) => {
  const [isSwiped, setIsSwiped] = useState(isChecked);

  const handleSwipe = () => {
    setIsSwiped(!isSwiped);
    onToggle(!isSwiped);
  };

  return (
    <div
      className={` relative flex items-center w-14 h-7 bg-gray-300 rounded-full cursor-pointer transition-colors duration-300 ${
        isSwiped ? BgColors[color] : ""
      }`}
      onClick={handleSwipe}
    >
      <div
        className={`w-6 h-6 ml-1 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
          isSwiped ? "translate-x-full" : ""
        }`}
      />
    </div>
  );
};

export default SwipeCheckbox;
