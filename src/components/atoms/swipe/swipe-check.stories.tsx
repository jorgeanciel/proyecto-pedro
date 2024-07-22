import type { Meta, StoryObj } from "@storybook/react";
import SwipeCheckbox from "./swipe-check";
const meta = {
  title: "ui/atoms/SwipeCheckbox",
  component: SwipeCheckbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SwipeCheckbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isChecked: false,
    color: "secondary",
    onToggle: (isChecked: boolean) => console.log(isChecked),
  },
};
