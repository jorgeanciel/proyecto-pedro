import type { Meta, StoryObj } from "@storybook/react";
import Input from "./input";
const meta = {
  title: "ui/atoms/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Default: Story = {
  args: {
    placeholder: "Username",
    value: "hola",
    onChange: (value) => {
      console.log(value);
    },
    theme: "dark",
  },
};
