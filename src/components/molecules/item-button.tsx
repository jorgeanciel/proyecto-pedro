import React from "react";
import Typography from "../atoms/typography/typography";
import Button from "../atoms/button/button";

type ItemButtonProps = {
  buttonLabel: string;
  textLabel: string;
};

const ItemButton: React.FC<ItemButtonProps> = ({ buttonLabel, textLabel }) => {
  return (
    <div className="flex items-center justify-between">
      <Typography
        label={textLabel}
        variant="body"
        family="bold"
        color="text-dark"
      />
      <Button label={buttonLabel} outlined />
    </div>
  );
};

export default ItemButton;

ItemButton.defaultProps = {
  buttonLabel: "Add",
  textLabel: "$27.00",
};
