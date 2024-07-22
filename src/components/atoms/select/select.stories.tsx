import type { Meta, StoryObj } from "@storybook/react";
import Select from "./select";
const meta = {
  title: "ui/atoms/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: "secondary",
    options: [
      { value: "option-1", name: "Option 1" },
      { value: "option-2", name: "Option 2" },
      { value: "option-3", name: "Option 3" },
    ],
    defaultValue: "option-2",
  },
};
