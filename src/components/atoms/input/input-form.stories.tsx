import type { Meta, StoryObj } from "@storybook/react";
import InputForm from "./input-form";
const meta = {
  title: "ui/atoms/InputForm",
  component: InputForm,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof InputForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: "fire",
    expanded: false,
    className: "",
    color: "primary",
  },
};
