import type { Meta, StoryObj } from "@storybook/react";
import TextIcon from "./text-icon";
import { myColors } from "../../constants/colors";

const meta = {
  title: "ui/molecules/TextIcon",
  component: TextIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TextIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "My text icon",
    labelColor: "text-gray-300",
    icon: "fire",
    iconSize: "20",
    iconColor: myColors.secondary,
    family: 'bold',
    variant: 'subtitle',
    styles: ''

  },
};
