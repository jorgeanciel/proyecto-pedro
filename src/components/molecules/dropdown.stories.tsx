import type { Meta, StoryObj } from "@storybook/react";
import Dropdown, { TDropdownOption } from "./dropdown";

const meta = {
  title: "ui/molecules/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "full",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockOptions: TDropdownOption[] = [
  {
    value: "1",
    name: "option 1",
  },
  {
    value: "2",
    name: "option 2",
  },
  {
    value: "3",
    name: "option 3",
  },
];
export const Default: Story = {
  args: {
    options: mockOptions,
    variant: "primary",
    onChange: (optionSelected: TDropdownOption) => {
      console.log(optionSelected);
    },
  },
};
